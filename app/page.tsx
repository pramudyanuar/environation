import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
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
                <Link href="/lkti" className="hover:text-green-600 transition-colors">
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              ENVIRONATION 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Kompetisi Nasional untuk Generasi Muda Peduli Lingkungan
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Bergabunglah dalam gerakan perubahan menuju masa depan yang berkelanjutan melalui inovasi, kreativitas, dan kepemimpinan lingkungan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/auth/sign-up">Daftar Sekarang</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#competitions">Lihat Kompetisi</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Competitions Section */}
        <section id="competitions" className="w-full py-20 px-5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Kategori Kompetisi</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16">
              Pilih kategori yang sesuai dengan passion dan keahlian Anda
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* LKTI Card */}
              <Card className="hover:shadow-lg transition-shadow border-2 hover:border-green-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-600">
                    Lomba Karya Tulis Ilmiah (LKTI)
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Paper & Essay Competition
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    LKTI mencakup kategori paper dan essay untuk mengajak pelajar dan mahasiswa menuangkan ide lingkungan, 
                    mengasah berpikir kritis dan kreativitas, serta membentuk calon pemimpin lingkungan masa depan.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Kategori:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                      <li>Scientific Paper</li>
                      <li>Essay Competition</li>
                    </ul>
                  </div>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href="/lkti">Pelajari Lebih Lanjut</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Enviro Business Competition Card */}
              <Card className="hover:shadow-lg transition-shadow border-2 hover:border-blue-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">
                    Enviro Business Competition
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Sustainable Business Model Competition
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Kompetisi ini menantang peserta merancang model bisnis berkelanjutan untuk mencetak wirausaha muda, 
                    membangun ekosistem kewirausahaan hijau, dan mendorong inovasi pasar guna mengatasi masalah lingkungan.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Focus Areas:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                      <li>Green Technology</li>
                      <li>Sustainable Business Model</li>
                      <li>Environmental Innovation</li>
                    </ul>
                  </div>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href="/enviro-business-competition">Pelajari Lebih Lanjut</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="w-full py-20 px-5 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Timeline Kompetisi</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Pendaftaran</h3>
                <p className="text-gray-600 dark:text-gray-300">1 - 30 September 2025</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Pengumpulan Karya</h3>
                <p className="text-gray-600 dark:text-gray-300">1 - 15 Oktober 2025</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Penilaian</h3>
                <p className="text-gray-600 dark:text-gray-300">16 - 31 Oktober 2025</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Pengumuman</h3>
                <p className="text-gray-600 dark:text-gray-300">5 November 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t bg-white dark:bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-4">ENVIRONATION 2025</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Bergabunglah dalam gerakan perubahan menuju masa depan yang berkelanjutan
              </p>
              <div className="flex justify-center">
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
