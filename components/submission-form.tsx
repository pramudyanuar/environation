"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface SubmissionFormProps {
  registration: {
    id: string;
    competitions: {
      id: string;
      name: string;
      category: string;
      submission_deadline: string;
      requirements?: string;
    };
  };
}

export function SubmissionForm({ registration }: SubmissionFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [additionalLinks, setAdditionalLinks] = useState("");
  const [notes, setNotes] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const supabase = createClient();
      
      // Create submission
      const { error } = await supabase
        .from("submissions")
        .insert({
          registration_id: registration.id,
          title: title,
          description: description,
          file_url: fileUrl,
          additional_links: additionalLinks || null,
          notes: notes || null,
          status: "submitted",
        });

      if (error) throw error;

      alert("Submission berhasil dikumpulkan!");
      router.push("/dashboard/submissions");
    } catch (error) {
      console.error("Error submitting work:", error);
      alert("Terjadi kesalahan saat mengumpulkan karya. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submission Details</CardTitle>
        <CardDescription>
          Isi informasi lengkap tentang karya yang akan Anda submit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Judul karya Anda"
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Description *</Label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Deskripsi singkat tentang karya Anda"
              required
              className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <Label htmlFor="fileUrl">File URL *</Label>
            <Input
              id="fileUrl"
              type="url"
              value={fileUrl}
              onChange={(e) => setFileUrl(e.target.value)}
              placeholder="https://drive.google.com/... atau link file lainnya"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              Upload file Anda ke Google Drive, Dropbox, atau platform lain dan masukkan link share-nya di sini.
              Pastikan link dapat diakses oleh juri.
            </p>
          </div>

          <div>
            <Label htmlFor="additionalLinks">Additional Links</Label>
            <Input
              id="additionalLinks"
              type="url"
              value={additionalLinks}
              onChange={(e) => setAdditionalLinks(e.target.value)}
              placeholder="Link tambahan (demo, presentation, dll)"
            />
            <p className="text-sm text-gray-500 mt-1">
              Link tambahan seperti demo produk, video presentasi, atau materi pendukung lainnya.
            </p>
          </div>

          <div>
            <Label htmlFor="notes">Notes</Label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Catatan tambahan untuk juri (opsional)"
              className="w-full min-h-[80px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Guidelines based on competition category */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Submission Guidelines:</h3>
            {registration.competitions.category === "LKTI" ? (
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Scientific Paper: Format IEEE/APA, 15-20 halaman</li>
                <li>Essay: Bahasa Indonesia, 1000-1500 kata</li>
                <li>File dalam format PDF</li>
                <li>Include abstract/ringkasan eksekutif</li>
                <li>Sertakan daftar referensi yang valid</li>
              </ul>
            ) : (
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Business Plan: maksimal 25 halaman</li>
                <li>Executive Summary: 2-3 halaman</li>
                <li>Sertakan Business Model Canvas</li>
                <li>Financial projection 3-5 tahun</li>
                <li>Link demo/prototype jika tersedia</li>
              </ul>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              Important Notes:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700 dark:text-yellow-300">
              <li>Pastikan file dapat diakses oleh juri</li>
              <li>Gunakan nama file yang jelas dan profesional</li>
              <li>Double-check semua link sebelum submit</li>
              <li>Submission tidak dapat diubah setelah dikumpulkan</li>
            </ul>
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
              {isLoading ? "Submitting..." : "Submit Work"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
