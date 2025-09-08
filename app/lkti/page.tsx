import { AuthButton } from "@/components/auth-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "LKTI - Lomba Karya Tulis Ilmiah | ENVIRONATION 2025",
  description: "LKTI ENVIRONATION 2025 - Paper dan Essay Competition untuk pelajar dan mahasiswa peduli lingkungan",
};

export default function LKTIPage() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col items-center">
        {/* Navigation */}
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-7xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-8 items-center font-semibold">
              <Link href={"/"} className="text-xl font-bold text-green-600">
                ENVIRONATION
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link href="/lkti" className="text-green-600 font-semibold">
                  LKTI
                </Link>
                <Link href="/enviro-business-competition" className="hover:text-green-600 transition-colors">
                  Enviro Business Competition
                </Link>
              </div>
            </div>
            {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="w-full py-20 px-5 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-gray-900">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              Lomba Karya Tulis Ilmiah
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              LKTI ENVIRONATION 2025
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Tuangkan ide lingkungan Anda melalui karya tulis ilmiah dan essay untuk masa depan berkelanjutan
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/auth/sign-up">Daftar LKTI Sekarang</Link>
            </Button>
          </div>
        </section>

        {/* Competition Categories */}
        <section className="w-full py-20 px-5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Kategori Kompetisi</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Scientific Paper */}
              <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-600">Scientific Paper</CardTitle>
                  <CardDescription>Karya Tulis Ilmiah Berbasis Penelitian</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Tema:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                        <li>Teknologi Ramah Lingkungan</li>
                        <li>Konservasi Sumber Daya Alam</li>
                        <li>Perubahan Iklim dan Mitigasi</li>
                        <li>Energi Terbarukan</li>
                        <li>Pengelolaan Limbah</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Kriteria:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                        <li>Mahasiswa S1/D4/D3</li>
                        <li>Tim 2-3 orang</li>
                        <li>Format IEEE atau APA</li>
                        <li>15-20 halaman</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Essay Competition */}
              <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">Essay Competition</CardTitle>
                  <CardDescription>Lomba Essay Kreatif</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Tema:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                        <li>Gaya Hidup Berkelanjutan</li>
                        <li>Kearifan Lokal dan Lingkungan</li>
                        <li>Pendidikan Lingkungan</li>
                        <li>Green Economy</li>
                        <li>Masa Depan Bumi</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Kriteria:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                        <li>Pelajar SMA/SMK/MA</li>
                        <li>Individual</li>
                        <li>Bahasa Indonesia</li>
                        <li>1000-1500 kata</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="w-full py-20 px-5 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Timeline LKTI</h2>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Pendaftaran</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">1-30 Sep 2025</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Pengumpulan</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">1-15 Okt 2025</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Seleksi</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">16-25 Okt 2025</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Presentasi</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">1-3 Nov 2025</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  5
                </div>
                <h3 className="font-semibold mb-2">Pengumuman</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">5 Nov 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* Prizes */}
        <section className="w-full py-20 px-5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Hadiah & Penghargaan</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Scientific Paper Prizes */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-600">Scientific Paper</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-yellow-100 dark:bg-yellow-900 rounded">
                      <span className="font-semibold">🥇 Juara 1</span>
                      <span className="font-bold">Rp 10.000.000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-800 rounded">
                      <span className="font-semibold">🥈 Juara 2</span>
                      <span className="font-bold">Rp 7.500.000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-100 dark:bg-orange-900 rounded">
                      <span className="font-semibold">🥉 Juara 3</span>
                      <span className="font-bold">Rp 5.000.000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Essay Prizes */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Essay Competition</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-yellow-100 dark:bg-yellow-900 rounded">
                      <span className="font-semibold">🥇 Juara 1</span>
                      <span className="font-bold">Rp 5.000.000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-800 rounded">
                      <span className="font-semibold">🥈 Juara 2</span>
                      <span className="font-bold">Rp 3.500.000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-100 dark:bg-orange-900 rounded">
                      <span className="font-semibold">🥉 Juara 3</span>
                      <span className="font-bold">Rp 2.500.000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                + Sertifikat, Trophy, dan Kesempatan Publikasi Jurnal
              </p>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/auth/sign-up">Daftar Sekarang</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t bg-white dark:bg-gray-900 py-8">
          <div className="max-w-7xl mx-auto px-5 text-center">
            <ThemeSwitcher />
          </div>
        </footer>
      </div>
    </main>
  );
}
