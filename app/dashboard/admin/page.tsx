import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function AdminDashboardPage() {
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

  // Get statistics
  const [
    { count: totalCompetitions },
    { count: totalRegistrations },
    { count: totalSubmissions },
    { count: totalUsers },
  ] = await Promise.all([
    supabase.from("competitions").select("*", { count: "exact", head: true }),
    supabase.from("registrations").select("*", { count: "exact", head: true }),
    supabase.from("submissions").select("*", { count: "exact", head: true }),
    supabase.from("profiles").select("*", { count: "exact", head: true }),
  ]);

  // Get recent registrations
  const { data: recentRegistrations } = await supabase
    .from("registrations")
    .select(`
      *,
      profiles (
        full_name,
        email
      ),
      competitions (
        name,
        category
      )
    `)
    .order("created_at", { ascending: false })
    .limit(5);

  // Get recent submissions
  const { data: recentSubmissions } = await supabase
    .from("submissions")
    .select(`
      *,
      registrations (
        profiles (
          full_name,
          email
        ),
        competitions (
          name,
          category
        )
      )
    `)
    .order("created_at", { ascending: false })
    .limit(5);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 shadow rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">
          Admin Dashboard - ENVIRONATION 2025
        </h1>
        <p className="mt-2 opacity-90">
          Kelola kompetisi dan monitor aktivitas peserta.
        </p>
      </div>

      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Competitions</CardTitle>
            <span className="text-2xl">🏆</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{totalCompetitions || 0}</div>
            <p className="text-xs text-muted-foreground">Active competitions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
            <span className="text-2xl">👥</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{totalUsers || 0}</div>
            <p className="text-xs text-muted-foreground">Registered users</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
            <span className="text-2xl">📝</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{totalRegistrations || 0}</div>
            <p className="text-xs text-muted-foreground">Competition entries</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
            <span className="text-2xl">📄</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{totalSubmissions || 0}</div>
            <p className="text-xs text-muted-foreground">Works submitted</p>
          </CardContent>
        </Card>
      </div>

      {/* Admin Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Admin Actions</CardTitle>
          <CardDescription>
            Kelola kompetisi dan peserta dengan mudah
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild className="h-auto p-4 flex flex-col items-center space-y-2 bg-red-600 hover:bg-red-700">
              <Link href="/dashboard/admin/competitions">
                <span className="text-2xl">🏆</span>
                <span>Manage Competitions</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 border-red-200 hover:bg-red-50">
              <Link href="/dashboard/admin/submissions">
                <span className="text-2xl">📄</span>
                <span>Review Submissions</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 border-red-200 hover:bg-red-50">
              <Link href="/dashboard/admin/participants">
                <span className="text-2xl">👥</span>
                <span>Manage Participants</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Registrations */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Registrations</CardTitle>
          <CardDescription>
            Pendaftaran terbaru dari peserta
          </CardDescription>
        </CardHeader>
        <CardContent>
          {recentRegistrations && recentRegistrations.length > 0 ? (
            <div className="space-y-4">
              {recentRegistrations.map((registration) => (
                <div
                  key={registration.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold">
                      {registration.profiles?.full_name || registration.profiles?.email}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {registration.competitions?.name} - {registration.competitions?.category}
                    </p>
                    <p className="text-xs text-gray-500">
                      {registration.institution} • {new Date(registration.created_at).toLocaleDateString('id-ID')}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={registration.status === "registered" ? "default" : "secondary"}
                    >
                      {registration.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-4">No recent registrations</p>
          )}
        </CardContent>
      </Card>

      {/* Recent Submissions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Submissions</CardTitle>
          <CardDescription>
            Karya yang baru dikumpulkan peserta
          </CardDescription>
        </CardHeader>
        <CardContent>
          {recentSubmissions && recentSubmissions.length > 0 ? (
            <div className="space-y-4">
              {recentSubmissions.map((submission) => (
                <div
                  key={submission.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold">{submission.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      By: {submission.registrations?.profiles?.full_name || submission.registrations?.profiles?.email}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {submission.registrations?.competitions?.name} - {submission.registrations?.competitions?.category}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(submission.created_at).toLocaleDateString('id-ID')}
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
                      <Link href={`/dashboard/admin/submissions/${submission.id}`}>
                        Review
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-4">No recent submissions</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
