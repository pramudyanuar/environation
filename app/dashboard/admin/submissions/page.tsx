import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default async function AdminSubmissionsPage() {
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

  // Get all submissions with user and competition details
  const { data: submissions } = await supabase
    .from("submissions")
    .select(`
      *,
      registrations!inner (
        id,
        user_id,
        institution,
        profiles!inner (
          full_name,
          phone
        ),
        competitions (
          id,
          name,
          category
        )
      )
    `)
    .order("created_at", { ascending: false });

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
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Review Submissions
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Kelola dan review semua submission dari peserta
          </p>
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
          <CardTitle>Quick Filters</CardTitle>
          <CardDescription>
            Filter submission berdasarkan kategori kompetisi dan status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              All Submissions
            </Button>
            <Button variant="outline" size="sm">
              LKTI Only
            </Button>
            <Button variant="outline" size="sm">
              Business Competition Only
            </Button>
            <Button variant="outline" size="sm" className="border-orange-200 text-orange-600">
              Pending Review
            </Button>
            <Button variant="outline" size="sm" className="border-green-200 text-green-600">
              Approved
            </Button>
            <Button variant="outline" size="sm" className="border-red-200 text-red-600">
              Rejected
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Pending Submissions */}
      {submissionsByStatus.submitted.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-orange-600">
              Pending Review ({submissionsByStatus.submitted.length})
            </CardTitle>
            <CardDescription>
              Submission yang menunggu review dari admin
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {submissionsByStatus.submitted.map((submission) => (
                <div
                  key={submission.id}
                  className="flex items-center justify-between p-4 border border-orange-200 bg-orange-50 dark:bg-orange-900/20 rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {submission.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {submission.registrations?.competitions?.name} - {submission.registrations?.competitions?.category}
                    </p>
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
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Submissions */}
      <Card>
        <CardHeader>
          <CardTitle>All Submissions</CardTitle>
          <CardDescription>
            Semua submission yang telah diterima
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
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {submission.registrations?.competitions?.name} - {submission.registrations?.competitions?.category}
                    </p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm text-gray-500">
                        By: {submission.registrations?.profiles?.full_name}
                      </span>
                      <span className="text-sm text-gray-500">
                        Institution: {submission.registrations?.institution}
                      </span>
                      <span className="text-sm text-gray-500">
                        Phone: {submission.registrations?.profiles?.phone}
                      </span>
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
                Belum ada submission yang masuk.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
