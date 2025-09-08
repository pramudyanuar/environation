import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface CompetitionSubmissionsPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ status?: string }>;
}

export default async function CompetitionSubmissionsPage({
  params,
  searchParams,
}: CompetitionSubmissionsPageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/auth/login");
  }

  // Check if user is admin
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "admin") {
    return redirect("/dashboard");
  }

  // Get competition details
  const { data: competition } = await supabase
    .from("competitions")
    .select("*")
    .eq("id", resolvedParams.id)
    .single();

  console.log("Server Submissions Competition ID:", resolvedParams.id);
  console.log("Server Submissions Competition found:", competition);

  if (!competition) {
    return redirect("/dashboard/admin/competitions");
  }

  // Get submissions for this specific competition
  // First get registrations for this competition
  const { data: competitionRegistrations } = await supabase
    .from("registrations")
    .select("id")
    .eq("competition_id", resolvedParams.id);

  console.log("Server Competition Registrations:", competitionRegistrations);

  let submissions = [];
  if (competitionRegistrations && competitionRegistrations.length > 0) {
    const registrationIds = competitionRegistrations.map(r => r.id);
    
    // Get submissions for those registrations
    const { data: submissionsData, error: submissionsError } = await supabase
      .from("submissions")
      .select("*")
      .in("registration_id", registrationIds)
      .order("created_at", { ascending: false });

    console.log("Server Submissions found:", submissionsData?.length || 0);
    console.log("Server Submissions error:", submissionsError);

    if (submissionsData && submissionsData.length > 0) {
      // Get registration details and profiles
      const { data: registrationsWithProfiles } = await supabase
        .from("registrations")
        .select(`
          id,
          user_id,
          institution,
          team_name,
          profiles!registrations_user_id_fkey (
            full_name,
            phone
          )
        `)
        .in("id", registrationIds);

      console.log("Server Registrations with profiles:", registrationsWithProfiles);

      // Combine submissions with registration data
      submissions = submissionsData.map(submission => ({
        ...submission,
        registrations: registrationsWithProfiles?.find(r => r.id === submission.registration_id) || null
      }));
    }
  }

  console.log("Server Final submissions:", submissions);

  console.log("Competition ID:", resolvedParams.id);
  console.log("Submissions found:", submissions?.length || 0);
  console.log("Submissions data:", submissions);

  // Group submissions by status
  const submissionsByStatus = {
    submitted: submissions?.filter(s => s.status === 'submitted') || [],
    reviewed: submissions?.filter(s => s.status === 'reviewed') || [],
    approved: submissions?.filter(s => s.status === 'approved') || [],
    rejected: submissions?.filter(s => s.status === 'rejected') || [],
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Submissions - {competition.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Kelola submission untuk kompetisi {competition.name}
            </p>
            <div className="mt-3 flex items-center space-x-2">
              <Badge variant="outline">{competition.category}</Badge>
              <Badge variant={competition.status === "open" ? "default" : "secondary"}>
                {competition.status}
              </Badge>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button asChild size="sm" variant="outline">
              <Link href="/dashboard/admin/submissions">
                All Submissions
              </Link>
            </Button>
            <Button asChild size="sm" variant="outline">
              <Link href="/dashboard/admin/competitions">
                Back to Competitions
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Submissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {submissions?.length || 0}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-orange-600">
              Pending Review
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">
              {submissionsByStatus.submitted.length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-green-600">
              Approved
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {submissionsByStatus.approved.length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-red-600">
              Rejected
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {submissionsByStatus.rejected.length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter by Status</CardTitle>
          <CardDescription>
            Filter submission berdasarkan status review
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button asChild variant={!resolvedSearchParams.status ? "default" : "outline"} size="sm">
              <Link href={`/dashboard/admin/competitions/${resolvedParams.id}/submissions`}>
                All Submissions
              </Link>
            </Button>
            <Button asChild variant={resolvedSearchParams.status === "submitted" ? "default" : "outline"} size="sm">
              <Link href={`/dashboard/admin/competitions/${resolvedParams.id}/submissions?status=submitted`}>
                Pending Review
              </Link>
            </Button>
            <Button asChild variant={resolvedSearchParams.status === "approved" ? "default" : "outline"} size="sm">
              <Link href={`/dashboard/admin/competitions/${resolvedParams.id}/submissions?status=approved`}>
                Approved
              </Link>
            </Button>
            <Button asChild variant={resolvedSearchParams.status === "rejected" ? "default" : "outline"} size="sm">
              <Link href={`/dashboard/admin/competitions/${resolvedParams.id}/submissions?status=rejected`}>
                Rejected
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Pending Submissions */}
      {submissionsByStatus.submitted.length > 0 && !resolvedSearchParams.status && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-orange-600">
              Pending Review ({submissionsByStatus.submitted.length})
            </CardTitle>
            <CardDescription>
              Submission yang menunggu review untuk {competition.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {submissionsByStatus.submitted.slice(0, 3).map((submission) => (
                <div
                  key={submission.id}
                  className="flex items-center justify-between p-4 border border-orange-200 bg-orange-50 dark:bg-orange-900/20 rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {submission.title}
                    </h3>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm text-gray-500">
                        By: {submission.registrations?.profiles?.full_name}
                      </span>
                      <span className="text-sm text-gray-500">
                        Institution: {submission.registrations?.institution}
                      </span>
                      <span className="text-sm text-gray-500">
                        Submitted: {new Date(submission.created_at).toLocaleDateString('id-ID')}
                      </span>
                    </div>
                    {submission.file_url && (
                      <a
                        href={submission.file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline mt-2 inline-block"
                      >
                        📄 View Submitted File
                      </a>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
                      <Link href={`/dashboard/admin/submissions/${submission.id}/review`}>
                        Review
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
              {submissionsByStatus.submitted.length > 3 && (
                <div className="text-center">
                  <Button asChild variant="outline">
                    <Link href={`/dashboard/admin/competitions/${resolvedParams.id}/submissions?status=submitted`}>
                      View All Pending ({submissionsByStatus.submitted.length})
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Submissions */}
      <Card>
        <CardHeader>
          <CardTitle>
            {resolvedSearchParams.status ? `${resolvedSearchParams.status.charAt(0).toUpperCase() + resolvedSearchParams.status.slice(1)} Submissions` : 'All Submissions'}
          </CardTitle>
          <CardDescription>
            {resolvedSearchParams.status 
              ? `Submission dengan status ${resolvedSearchParams.status} untuk ${competition.name}`
              : `Semua submission yang diterima untuk ${competition.name}`
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {submissions && submissions.length > 0 ? (
            <div className="space-y-4">
              {submissions.map((submission) => (
                <div
                  key={submission.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {submission.title}
                    </h3>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm text-gray-500">
                        By: {submission.registrations?.profiles?.full_name}
                      </span>
                      <span className="text-sm text-gray-500">
                        Institution: {submission.registrations?.institution}
                      </span>
                      {submission.registrations?.team_name && (
                        <span className="text-sm text-blue-600">
                          Team: {submission.registrations?.team_name}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-gray-500">
                        Submitted: {new Date(submission.created_at).toLocaleDateString('id-ID')}
                      </span>
                      {submission.file_url && (
                        <a
                          href={submission.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:underline"
                        >
                          View File
                        </a>
                      )}
                      {submission.additional_links && (
                        <a
                          href={submission.additional_links}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-purple-600 hover:underline"
                        >
                          Additional Links
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge
                      variant={
                        submission.status === "submitted"
                          ? "default"
                          : submission.status === "reviewed"
                          ? "secondary"
                          : submission.status === "approved"
                          ? "default"
                          : "outline"
                      }
                      className={
                        submission.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : submission.status === "rejected"
                          ? "bg-red-100 text-red-800"
                          : submission.status === "submitted"
                          ? "bg-orange-100 text-orange-800"
                          : ""
                      }
                    >
                      {submission.status}
                    </Badge>
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/dashboard/admin/submissions/${submission.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {resolvedSearchParams.status 
                  ? `No ${resolvedSearchParams.status} submissions found for this competition.`
                  : "No submissions found for this competition."
                }
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Export Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Export Data</CardTitle>
          <CardDescription>
            Export data submission untuk kompetisi {competition.name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Button variant="outline">
              Export All Submissions
            </Button>
            <Button variant="outline">
              Export by Status
            </Button>
            <Button variant="outline">
              Export Statistics
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
