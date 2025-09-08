import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { SubmissionForm } from "@/components/submission-form";

interface NewSubmissionPageProps {
  searchParams: { registration?: string; competition?: string };
}

export default async function NewSubmissionPage({
  searchParams,
}: NewSubmissionPageProps) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/auth/login");
  }

  let registration = null;

  // If registration ID is provided, get the registration details
  if (searchParams.registration) {
    const { data: regData } = await supabase
      .from("registrations")
      .select(`
        *,
        competitions (
          id,
          name,
          category,
          submission_deadline,
          requirements
        )
      `)
      .eq("id", searchParams.registration)
      .eq("user_id", user.id)
      .single();

    registration = regData;
  }
  // If competition ID is provided, get the user's registration for that competition
  else if (searchParams.competition) {
    const { data: regData } = await supabase
      .from("registrations")
      .select(`
        *,
        competitions (
          id,
          name,
          category,
          submission_deadline,
          requirements
        )
      `)
      .eq("competition_id", searchParams.competition)
      .eq("user_id", user.id)
      .single();

    registration = regData;
  }

  if (!registration) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <h1 className="text-lg font-semibold text-red-800 dark:text-red-200">
            Registration Not Found
          </h1>
          <p className="text-red-600 dark:text-red-300 mt-2">
            Anda tidak terdaftar untuk kompetisi ini atau registration ID tidak valid.
          </p>
        </div>
      </div>
    );
  }

  // Check if deadline has passed
  const isDeadlinePassed = new Date(registration.competitions.submission_deadline) < new Date();

  if (isDeadlinePassed) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <h1 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">
            Submission Deadline Passed
          </h1>
          <p className="text-yellow-600 dark:text-yellow-300 mt-2">
            Deadline untuk submission kompetisi {registration.competitions.name} telah berlalu 
            pada {new Date(registration.competitions.submission_deadline).toLocaleDateString('id-ID')}.
          </p>
        </div>
      </div>
    );
  }

  // Check if user already submitted for this registration
  const { data: existingSubmission } = await supabase
    .from("submissions")
    .select("id")
    .eq("registration_id", registration.id)
    .single();

  if (existingSubmission) {
    return redirect(`/dashboard/submissions/${existingSubmission.id}`);
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Submit Your Work
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          {registration.competitions.name} - {registration.competitions.category}
        </p>
        <p className="text-sm text-red-600 mt-1">
          Deadline: {new Date(registration.competitions.submission_deadline).toLocaleDateString('id-ID')}
        </p>
      </div>

      {/* Requirements */}
      {registration.competitions.requirements && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
            Competition Requirements:
          </h3>
          <p className="text-blue-600 dark:text-blue-300 text-sm">
            {registration.competitions.requirements}
          </p>
        </div>
      )}

      {/* Submission Form */}
      <SubmissionForm registration={registration} />
    </div>
  );
}
