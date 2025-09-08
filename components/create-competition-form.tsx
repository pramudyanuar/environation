"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export function CreateCompetitionForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    status: "open",
    registration_deadline: "",
    submission_deadline: "",
    announcement_date: "",
    prize_pool: "",
    requirements: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const supabase = createClient();
      
      const { error } = await supabase
        .from("competitions")
        .insert({
          ...formData,
          prize_pool: formData.prize_pool ? parseInt(formData.prize_pool) : null,
        });

      if (error) throw error;

      alert("Competition created successfully!");
      router.push("/dashboard/admin/competitions");
    } catch (error) {
      console.error("Error creating competition:", error);
      alert("Failed to create competition. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Competition Details</CardTitle>
        <CardDescription>
          Isi informasi lengkap tentang kompetisi yang akan dibuat
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Competition Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="LKTI ENVIRONATION 2025"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => handleChange("category", e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select Category</option>
                <option value="LKTI">LKTI</option>
                <option value="Business Competition">Business Competition</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status *</Label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => handleChange("status", e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="open">Open</option>
                <option value="closed">Closed</option>
                <option value="upcoming">Upcoming</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="prize_pool">Prize Pool (Rp)</Label>
              <Input
                id="prize_pool"
                type="number"
                value={formData.prize_pool}
                onChange={(e) => handleChange("prize_pool", e.target.value)}
                placeholder="50000000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="registration_deadline">Registration Deadline *</Label>
              <Input
                id="registration_deadline"
                type="datetime-local"
                value={formData.registration_deadline}
                onChange={(e) => handleChange("registration_deadline", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="submission_deadline">Submission Deadline *</Label>
              <Input
                id="submission_deadline"
                type="datetime-local"
                value={formData.submission_deadline}
                onChange={(e) => handleChange("submission_deadline", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="announcement_date">Announcement Date</Label>
              <Input
                id="announcement_date"
                type="datetime-local"
                value={formData.announcement_date}
                onChange={(e) => handleChange("announcement_date", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Deskripsi kompetisi..."
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Requirements & Guidelines</Label>
            <textarea
              id="requirements"
              value={formData.requirements}
              onChange={(e) => handleChange("requirements", e.target.value)}
              placeholder="Syarat dan ketentuan kompetisi..."
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="flex space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-green-600 hover:bg-green-700"
            >
              {isLoading ? "Creating..." : "Create Competition"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
