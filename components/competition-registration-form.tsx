"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

interface CompetitionRegistrationFormProps {
  competitionId: string;
  competitionName: string;
  registrationFee?: number;
}

export function CompetitionRegistrationForm({
  competitionId,
  competitionName,
  registrationFee = 0,
}: CompetitionRegistrationFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teamMembers, setTeamMembers] = useState("");
  const [institution, setInstitution] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const supabase = createClient();
      
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error("User not authenticated");
      }

      // Register for competition
      const { error } = await supabase
        .from("registrations")
        .insert({
          user_id: user.id,
          competition_id: competitionId,
          team_name: teamName || null,
          team_members: teamMembers || null,
          institution: institution,
          contact_phone: contactPhone,
          status: "registered",
        });

      if (error) throw error;

      // Close form and refresh page
      setIsOpen(false);
      router.refresh();
      alert("Pendaftaran berhasil!");
    } catch (error) {
      console.error("Error registering for competition:", error);
      alert("Terjadi kesalahan saat mendaftar. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <Button onClick={() => setIsOpen(true)} className="bg-green-600 hover:bg-green-700">
        Register Now
      </Button>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-lg">Register for Competition</CardTitle>
        <CardDescription>
          {competitionName}
          {registrationFee > 0 && (
            <Badge className="ml-2 bg-green-100 text-green-800">
              Fee: Rp {registrationFee.toLocaleString()}
            </Badge>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="teamName">Team Name (Optional)</Label>
            <Input
              id="teamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="Enter team name if applicable"
            />
          </div>

          <div>
            <Label htmlFor="teamMembers">Team Members (Optional)</Label>
            <Input
              id="teamMembers"
              value={teamMembers}
              onChange={(e) => setTeamMembers(e.target.value)}
              placeholder="List team member names"
            />
          </div>

          <div>
            <Label htmlFor="institution">Institution *</Label>
            <Input
              id="institution"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              placeholder="School/University name"
              required
            />
          </div>

          <div>
            <Label htmlFor="contactPhone">Contact Phone *</Label>
            <Input
              id="contactPhone"
              type="tel"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              placeholder="Your phone number"
              required
            />
          </div>

          {registrationFee > 0 && (
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Registration Fee:</strong> Rp {registrationFee.toLocaleString()}
                <br />
                Payment instructions will be sent after registration.
              </p>
            </div>
          )}

          <div className="flex space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-green-600 hover:bg-green-700"
            >
              {isLoading ? "Registering..." : "Register"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
