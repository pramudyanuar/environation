import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default async function SubmissionsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  // Get user's submissions with competition details
  const { data: submissions } = await supabase
    .from("submissions")
    .select(`
      *,
      registrations!inner (
        id,
        competitions (
          id,
          name,
          category,
          submission_deadline
        )
      )
    `)
    .eq("registrations.user_id", user.id)
    .order("created_at", { ascending: false });

  // Get user's registrations without submissions
  const { data: registrations } = await supabase
    .from("registrations")
    .select(`
      *,
      competitions (
        id,
        name,
        category,
        submission_deadline,
        status
      )
    `)
    .eq("user_id", user.id);

  // Filter registrations that don't have submissions yet
  const submittedRegistrationIds = submissions?.map(s => s.registration_id) || [];
  const pendingSubmissions = registrations?.filter(
    r => !submittedRegistrationIds.includes(r.id) && 
         r.competitions?.status === "open" &&
         new Date(r.competitions.submission_deadline) > new Date()
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          My Submissions
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Kelola dan submit karya untuk kompetisi yang Anda ikuti.
        </p>
      </div>

      {/* Pending Submissions */}
      {pendingSubmissions && pendingSubmissions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-orange-600">Pending Submissions</CardTitle>
            <CardDescription>
              Kompetisi yang perlu Anda submit karya
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingSubmissions.map((registration) => (
                <div
                  key={registration.id}
                  className="flex items-center justify-between p-4 border border-orange-200 bg-orange-50 dark:bg-orange-900/20 rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {registration.competitions?.name}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline">
                        {registration.competitions?.category}
                      </Badge>
                      <span className="text-sm text-red-600">
                        Deadline: {new Date(registration.competitions?.submission_deadline).toLocaleDateString('id-ID')}
                      </span>
                    </div>
                  </div>
                  <Button asChild className="bg-orange-600 hover:bg-orange-700">
                    <Link href={`/dashboard/submissions/new?registration=${registration.id}`}>
                      Submit Now
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Submitted Works */}
      <Card>
        <CardHeader>
          <CardTitle>Submitted Works</CardTitle>
          <CardDescription>
            Karya yang telah Anda kumpulkan
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
                          : ""
                      }
                    >
                      {submission.status}
                    </Badge>
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/dashboard/submissions/${submission.id}`}>
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
                Anda belum mengumpulkan karya apapun.
              </p>
              {pendingSubmissions && pendingSubmissions.length > 0 ? (
                <p className="text-sm text-orange-600">
                  Lihat bagian &quot;Pending Submissions&quot; di atas untuk submit karya Anda.
                </p>
              ) : (
                <Button asChild>
                  <Link href="/dashboard/competitions">
                    Daftar Kompetisi Dulu
                  </Link>
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Submission Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>Submission Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-green-600">LKTI Guidelines</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Scientific Paper: 15-20 halaman (IEEE/APA format)</li>
                <li>Essay: 1000-1500 kata (Bahasa Indonesia)</li>
                <li>Format PDF dengan nama file yang jelas</li>
                <li>Include abstract/ringkasan eksekutif</li>
                <li>Sertakan referensi yang valid</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-blue-600">Business Competition Guidelines</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Business Plan: maksimal 25 halaman</li>
                <li>Executive Summary: 2-3 halaman</li>
                <li>Business Model Canvas</li>
                <li>Financial projection 3-5 tahun</li>
                <li>Prototype/demo link (jika ada)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
