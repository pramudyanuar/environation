import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default async function ManageCompetitionsPage() {
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

  // Get all competitions with registration count
  const { data: competitions } = await supabase
    .from("competitions")
    .select(`
      *,
      registrations (count)
    `)
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Manage Competitions
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Kelola kompetisi ENVIRONATION 2025
          </p>
        </div>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link href="/dashboard/admin/competitions/new">
            Add New Competition
          </Link>
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Competitions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {competitions?.length || 0}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              Active Competitions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {competitions?.filter(c => c.status === 'open').length || 0}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Participants
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {competitions?.reduce((total, comp) => 
                total + (comp.registrations?.[0]?.count || 0), 0
              ) || 0}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Competitions List */}
      <div className="grid gap-6">
        {competitions && competitions.length > 0 ? (
          competitions.map((competition) => (
            <Card key={competition.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl">{competition.name}</CardTitle>
                    <CardDescription className="mt-2">
                      {competition.description}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        competition.status === "open"
                          ? "default"
                          : competition.status === "closed"
                          ? "secondary"
                          : "outline"
                      }
                      className={
                        competition.status === "open"
                          ? "bg-green-100 text-green-800"
                          : competition.status === "closed"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                      }
                    >
                      {competition.status}
                    </Badge>
                    <Badge variant="outline">
                      {competition.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Participants</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {competition.registrations?.[0]?.count || 0}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Registration Deadline</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {new Date(competition.registration_deadline).toLocaleDateString('id-ID')}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Submission Deadline</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {new Date(competition.submission_deadline).toLocaleDateString('id-ID')}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Prize Pool</p>
                    <p className="text-sm font-medium text-green-600">
                      {competition.prize_pool ? `Rp ${parseInt(competition.prize_pool).toLocaleString('id-ID')}` : 'TBD'}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Created: {new Date(competition.created_at).toLocaleDateString('id-ID')}
                  </div>
                  <div className="flex space-x-2">
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/dashboard/admin/competitions/${competition.id}/participants`}>
                        View Participants
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/dashboard/admin/competitions/${competition.id}/edit`}>
                        Edit
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/dashboard/admin/competitions/${competition.id}/submissions`}>
                        View Submissions
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="text-center py-8">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Belum ada kompetisi yang dibuat.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/dashboard/admin/competitions/new">
                  Create First Competition
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
