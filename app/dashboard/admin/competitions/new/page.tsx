import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { CreateCompetitionForm } from "@/components/create-competition-form";

export default async function NewCompetitionPage() {
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

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Create New Competition
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Tambahkan kompetisi baru untuk ENVIRONATION 2025
        </p>
      </div>

      {/* Form */}
      <CreateCompetitionForm />
    </div>
  );
}
