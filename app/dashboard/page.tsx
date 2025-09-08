import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  // Get user profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  const isAdmin = profile?.role === "admin";

  // If admin, redirect to admin dashboard
  if (isAdmin) {
    return redirect("/dashboard/admin");
  }

  // Regular user dashboard
  // Get user registrations
  const { data: registrations } = await supabase
    .from("registrations")
    .select(`
      *,
      competitions (
        id,
        name,
        category,
        status,
        registration_deadline,
        submission_deadline
      )
    `)
    .eq("user_id", user.id);

  // Get user submissions
  const { data: submissions } = await supabase
    .from("submissions")
    .select(`
      *,
      registrations!inner (
        competitions (
          name,
          category
        )
      )
    `)
    .eq("registrations.user_id", user.id);

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Selamat datang, {profile?.full_name || user.email}!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Kelola pendaftaran dan submission kompetisi ENVIRONATION 2025 Anda di sini.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
            <span className="text-2xl">📝</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{registrations?.length || 0}</div>
            <p className="text-xs text-muted-foreground">
              Kompetisi yang Anda ikuti
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Submissions</CardTitle>
            <span className="text-2xl">📄</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{submissions?.length || 0}</div>
            <p className="text-xs text-muted-foreground">
              Karya yang telah dikumpulkan
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Status</CardTitle>
            <span className="text-2xl">👤</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {profile?.full_name ? "Complete" : "Incomplete"}
            </div>
            <p className="text-xs text-muted-foreground">
              Status profil Anda
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Aksi cepat untuk mengelola kompetisi Anda
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button asChild className="h-auto p-4 flex flex-col items-center space-y-2">
              <Link href="/dashboard/profile">
                <span className="text-2xl">👤</span>
                <span>Update Profile</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Link href="/dashboard/competitions">
                <span className="text-2xl">🏆</span>
                <span>Join Competition</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Link href="/dashboard/submissions">
                <span className="text-2xl">📄</span>
                <span>Submit Work</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Link href="/dashboard/help">
                <span className="text-2xl">❓</span>
                <span>Help & FAQ</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Registrations */}
      <Card>
        <CardHeader>
          <CardTitle>My Competitions</CardTitle>
          <CardDescription>
            Kompetisi yang sedang Anda ikuti
          </CardDescription>
        </CardHeader>
        <CardContent>
          {registrations && registrations.length > 0 ? (
            <div className="space-y-4">
              {registrations.map((registration) => (
                <div
                  key={registration.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold">
                      {registration.competitions?.name}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline">
                        {registration.competitions?.category}
                      </Badge>
                      <Badge
                        variant={
                          registration.competitions?.status === "open"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {registration.competitions?.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Deadline: {registration.competitions?.submission_deadline}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/dashboard/competitions/${registration.competition_id}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href={`/dashboard/submissions/new?competition=${registration.competition_id}`}>
                        Submit Work
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Anda belum mendaftar kompetisi apapun.
              </p>
              <Button asChild>
                <Link href="/dashboard/competitions">
                  Daftar Kompetisi Sekarang
                </Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Submissions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Submissions</CardTitle>
          <CardDescription>
            Karya yang baru saja Anda kumpulkan
          </CardDescription>
        </CardHeader>
        <CardContent>
          {submissions && submissions.length > 0 ? (
            <div className="space-y-4">
              {submissions.slice(0, 3).map((submission) => (
                <div
                  key={submission.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold">{submission.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {submission.registrations?.competitions?.name} -{" "}
                      {submission.registrations?.competitions?.category}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Submitted: {new Date(submission.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        submission.status === "submitted"
                          ? "default"
                          : submission.status === "reviewed"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {submission.status}
                    </Badge>
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/dashboard/submissions/${submission.id}`}>
                        View
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
              <Button asChild>
                <Link href="/dashboard/submissions">
                  Lihat Submissions
                </Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
