import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CompetitionRegistrationForm } from "@/components/competition-registration-form";

export default async function CompetitionsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  // Get all available competitions
  const { data: competitions } = await supabase
    .from("competitions")
    .select("*")
    .eq("status", "open")
    .order("created_at", { ascending: false });

  // Get user's registrations
  const { data: userRegistrations } = await supabase
    .from("registrations")
    .select("competition_id")
    .eq("user_id", user.id);

  const registeredCompetitionIds = userRegistrations?.map(r => r.competition_id) || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Available Competitions
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Daftar untuk kompetisi ENVIRONATION 2025 yang tersedia.
        </p>
      </div>

      {/* Competitions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {competitions && competitions.length > 0 ? (
          competitions.map((competition) => {
            const isRegistered = registeredCompetitionIds.includes(competition.id);
            const isDeadlinePassed = new Date(competition.registration_deadline) < new Date();
            
            return (
              <Card key={competition.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl">{competition.name}</CardTitle>
                      <CardDescription className="mt-2">
                        {competition.description}
                      </CardDescription>
                    </div>
                    <Badge
                      variant={competition.category === "LKTI" ? "default" : "secondary"}
                      className="ml-2"
                    >
                      {competition.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Competition Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold">Registration Fee:</span>
                        <p className="text-green-600 font-bold">
                          Rp {competition.registration_fee?.toLocaleString() || 'Free'}
                        </p>
                      </div>
                      <div>
                        <span className="font-semibold">Max Team Size:</span>
                        <p>{competition.max_team_size} members</p>
                      </div>
                      <div>
                        <span className="font-semibold">Registration Deadline:</span>
                        <p className="text-red-600">
                          {new Date(competition.registration_deadline).toLocaleDateString('id-ID')}
                        </p>
                      </div>
                      <div>
                        <span className="font-semibold">Submission Deadline:</span>
                        <p className="text-blue-600">
                          {new Date(competition.submission_deadline).toLocaleDateString('id-ID')}
                        </p>
                      </div>
                    </div>

                    {/* Requirements */}
                    {competition.requirements && (
                      <div>
                        <span className="font-semibold text-sm">Requirements:</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {competition.requirements}
                        </p>
                      </div>
                    )}

                    {/* Prizes */}
                    {competition.prizes && (
                      <div>
                        <span className="font-semibold text-sm">Prizes:</span>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {competition.prizes}
                        </p>
                      </div>
                    )}

                    {/* Action Button */}
                    <div className="flex space-x-2 pt-4">
                      {isRegistered ? (
                        <div className="flex items-center space-x-2">
                          <Badge variant="default" className="bg-green-100 text-green-800">
                            ✓ Registered
                          </Badge>
                          <Button asChild size="sm" variant="outline">
                            <Link href={`/dashboard/submissions/new?competition=${competition.id}`}>
                              Submit Work
                            </Link>
                          </Button>
                        </div>
                      ) : isDeadlinePassed ? (
                        <Badge variant="destructive">
                          Registration Closed
                        </Badge>
                      ) : (
                        <CompetitionRegistrationForm
                          competitionId={competition.id}
                          competitionName={competition.name}
                          registrationFee={competition.registration_fee}
                        />
                      )}
                      <Button asChild size="sm" variant="outline">
                        <Link href={`/dashboard/competitions/${competition.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <div className="col-span-2 text-center py-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Tidak ada kompetisi yang tersedia saat ini.
            </p>
          </div>
        )}
      </div>

      {/* Info Section */}
      <Card>
        <CardHeader>
          <CardTitle>Competition Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">LKTI (Lomba Karya Tulis Ilmiah)</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Scientific Paper Category</li>
                <li>Essay Competition Category</li>
                <li>Focus on environmental solutions</li>
                <li>Research-based submissions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Enviro Business Competition</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Sustainable business model design</li>
                <li>Green technology innovation</li>
                <li>Environmental impact focus</li>
                <li>Investor presentation opportunity</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
