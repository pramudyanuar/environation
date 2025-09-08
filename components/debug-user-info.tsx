"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProfileData {
  profile: {
    role: string;
    full_name: string;
  } | null;
  error: {
    message: string;
  } | null;
}

export function DebugUserInfo() {
  const [userEmail, setUserEmail] = useState<string>("");
  const [profileInfo, setProfileInfo] = useState<ProfileData>({ profile: null, error: null });

  useEffect(() => {
    async function fetchUserInfo() {
      const supabase = createClient();
      
      try {
        // Get user
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        setUserEmail(user?.email || "No user");

        if (userError) {
          setProfileInfo({ profile: null, error: { message: `User Error: ${userError.message}` } });
          return;
        }

        if (user) {
          // Try to get profile with timeout
          const profilePromise = supabase
            .from("profiles")
            .select("role, full_name")
            .eq("id", user.id)
            .single();

          // Add timeout to prevent infinite hanging
          const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error("Query timeout - possible infinite recursion")), 5000)
          );

          try {
            const result = await Promise.race([
              profilePromise,
              timeoutPromise
            ]);
            
            // Type guard to check if it's a successful query result
            if (result && typeof result === 'object' && 'data' in result) {
              const queryResult = result as { 
                data: { role: string; full_name: string } | null; 
                error: { message: string } | null; 
              };
              console.log("Profile query result:", queryResult);
              setProfileInfo({ profile: queryResult.data, error: queryResult.error });
            }
          } catch (timeoutError) {
            setProfileInfo({ profile: null, error: { message: (timeoutError as Error).message } });
          }
        }
      } catch (globalError) {
        console.error("Debug fetch error:", globalError);
        setProfileInfo({ profile: null, error: { message: `Global Error: ${(globalError as Error).message}` } });
      }
    }

    fetchUserInfo();
  }, []);

  if (process.env.NODE_ENV === "production") return null;

  return (
    <Card className="mb-6 border-2 border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20">
      <CardHeader>
        <CardTitle className="text-yellow-800 dark:text-yellow-200">
          🐛 Debug Info (Development Only)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm space-y-2">
          <p><strong>Email:</strong> {userEmail}</p>
          <p><strong>Role:</strong> {profileInfo.profile?.role || 'Unknown'}</p>
          <p><strong>Full Name:</strong> {profileInfo.profile?.full_name || 'Not set'}</p>
          <p><strong>Expected Admin Menu:</strong> {profileInfo.profile?.role === 'admin' ? '✅ Should show' : '❌ Will not show'}</p>
          <p><strong>Profile Error:</strong> {profileInfo.error?.message || 'None'}</p>
        </div>
      </CardContent>
    </Card>
  );
}
