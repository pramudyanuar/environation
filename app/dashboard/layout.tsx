import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

  const isAdmin = profile?.role === "admin";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/dashboard" className="text-xl font-bold text-green-600">
                ENVIRONATION
              </Link>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <Link
                  href="/dashboard"
                  className="text-gray-900 dark:text-gray-100 hover:text-green-600 px-3 py-2 text-sm font-medium"
                >
                  Dashboard
                </Link>
                {!isAdmin && (
                  <>
                    <Link
                      href="/dashboard/competitions"
                      className="text-gray-900 dark:text-gray-100 hover:text-green-600 px-3 py-2 text-sm font-medium"
                    >
                      My Competitions
                    </Link>
                    <Link
                      href="/dashboard/submissions"
                      className="text-gray-900 dark:text-gray-100 hover:text-green-600 px-3 py-2 text-sm font-medium"
                    >
                      Submissions
                    </Link>
                  </>
                )}
                {isAdmin && (
                  <>
                    <Link
                      href="/dashboard/admin/competitions"
                      className="text-gray-900 dark:text-gray-100 hover:text-red-600 px-3 py-2 text-sm font-medium"
                    >
                      Competitions
                    </Link>
                    <Link
                      href="/dashboard/admin/submissions"
                      className="text-gray-900 dark:text-gray-100 hover:text-red-600 px-3 py-2 text-sm font-medium"
                    >
                      Submissions
                    </Link>
                    <Link
                      href="/dashboard/admin/participants"
                      className="text-gray-900 dark:text-gray-100 hover:text-red-600 px-3 py-2 text-sm font-medium"
                    >
                      Participants
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeSwitcher />
              <AuthButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
