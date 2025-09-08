import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface AdminParticipantsPageProps {
  searchParams: Promise<{ search?: string; competition?: string; status?: string }>;
}

export default async function AdminParticipantsPage({
  searchParams,
}: AdminParticipantsPageProps) {
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

  // Build query for registrations
  let query = supabase
    .from("registrations")
    .select(`
      *,
      profiles (
        id,
        full_name,
        email,
        phone,
        institution
      ),
      competitions (
        id,
        name,
        category
      )
    `)
    .order("created_at", { ascending: false });

  // Apply filters
  if (resolvedSearchParams.competition) {
    query = query.eq("competition_id", resolvedSearchParams.competition);
  }

  if (resolvedSearchParams.status) {
    query = query.eq("status", resolvedSearchParams.status);
  }

  const { data: registrations } = await query;

  // Filter by search term
  const filteredRegistrations = registrations?.filter((registration) => {
    if (!resolvedSearchParams.search) return true;
    const searchTerm = resolvedSearchParams.search.toLowerCase();
    return (
      registration.profiles?.full_name?.toLowerCase().includes(searchTerm) ||
      registration.profiles?.email?.toLowerCase().includes(searchTerm) ||
      registration.institution?.toLowerCase().includes(searchTerm) ||
      registration.team_name?.toLowerCase().includes(searchTerm)
    );
  });

  // Get competitions for filter
  const { data: competitions } = await supabase
    .from("competitions")
    .select("id, name, category")
    .order("name");

  // Get statistics
  const totalRegistrations = registrations?.length || 0;
  const registeredCount = registrations?.filter(r => r.status === "registered").length || 0;
  const confirmedCount = registrations?.filter(r => r.status === "confirmed").length || 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Manage Participants
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Kelola pendaftaran dan data peserta kompetisi.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalRegistrations}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Registered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{registeredCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Confirmed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{confirmedCount}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Input
                placeholder="Search participants..."
                defaultValue={resolvedSearchParams.search}
                name="search"
              />
            </div>
            <div>
              <select
                name="competition"
                defaultValue={resolvedSearchParams.competition}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">All Competitions</option>
                {competitions?.map((competition) => (
                  <option key={competition.id} value={competition.id}>
                    {competition.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                name="status"
                defaultValue={resolvedSearchParams.status}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">All Status</option>
                <option value="registered">Registered</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <Button type="submit">Apply Filters</Button>
          </form>
        </CardContent>
      </Card>

      {/* Participants List */}
      <Card>
        <CardHeader>
          <CardTitle>Participants ({filteredRegistrations?.length || 0})</CardTitle>
          <CardDescription>
            Daftar semua peserta yang terdaftar
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredRegistrations && filteredRegistrations.length > 0 ? (
            <div className="space-y-4">
              {filteredRegistrations.map((registration) => (
                <div
                  key={registration.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {registration.profiles?.full_name || "No Name"}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {registration.profiles?.email}
                        </p>
                        {registration.team_name && (
                          <p className="text-sm text-blue-600">
                            Team: {registration.team_name}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">
                          {registration.competitions?.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {registration.competitions?.category}
                        </p>
                        <p className="text-xs text-gray-500">
                          {registration.institution}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-xs text-gray-500">
                        Registered: {new Date(registration.created_at).toLocaleDateString('id-ID')}
                      </span>
                      {registration.contact_phone && (
                        <span className="text-xs text-gray-500">
                          Phone: {registration.contact_phone}
                        </span>
                      )}
                    </div>
                    {registration.team_members && (
                      <div className="mt-2">
                        <p className="text-xs text-gray-500">
                          Team Members: {registration.team_members}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge
                      variant={
                        registration.status === "registered"
                          ? "default"
                          : registration.status === "confirmed"
                          ? "default"
                          : "secondary"
                      }
                      className={
                        registration.status === "confirmed"
                          ? "bg-green-100 text-green-800"
                          : registration.status === "cancelled"
                          ? "bg-red-100 text-red-800"
                          : ""
                      }
                    >
                      {registration.status}
                    </Badge>
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/dashboard/admin/participants/${registration.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 dark:text-gray-300">
                No participants found.
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
            Export data peserta untuk analisis lebih lanjut
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Button variant="outline">
              Export All Participants
            </Button>
            <Button variant="outline">
              Export by Competition
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
