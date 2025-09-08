import { AuthButton } from "@/components/auth-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Enviro Business Competition | ENVIRONATION 2025",
  description: "Enviro Business Competition ENVIRONATION 2025 - Kompetisi model bisnis berkelanjutan untuk wirausaha muda",
};

export default function EnviroBusinessPage() {
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
                <Link href="/enviro-business-competition" className="text-blue-600 font-semibold">
                  Enviro Business Competition
                </Link>
              </div>
            </div>
            {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="w-full py-20 px-5 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Business Competition
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Enviro Business Competition 2025
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Rancang model bisnis berkelanjutan dan jadilah wirausaha muda yang mengubah dunia
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/auth/sign-up">Daftar Kompetisi Sekarang</Link>
            </Button>
          </div>
        </section>

        {/* About Competition */}
        <section className="w-full py-20 px-5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Tentang Kompetisi</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                Enviro Business Competition menantang peserta untuk merancang model bisnis berkelanjutan 
                yang tidak hanya menguntungkan secara ekonomi, tetapi juga memberikan dampak positif bagi lingkungan. 
                Kompetisi ini bertujuan mencetak wirausaha muda, membangun ekosistem kewirausahaan hijau, 
                dan mendorong inovasi pasar guna mengatasi masalah lingkungan.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-2 border-green-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <CardTitle className="text-green-600">Sustainable Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ciptakan bisnis yang memberikan dampak positif bagi lingkungan dan masyarakat
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-blue-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💡</span>
                  </div>
                  <CardTitle className="text-blue-600">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Kembangkan solusi inovatif untuk mengatasi tantangan lingkungan masa kini
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-purple-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <CardTitle className="text-purple-600">Entrepreneurship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Bangun model bisnis yang scalable dan sustainable untuk masa depan
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="w-full py-20 px-5 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Focus Areas</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">Green Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Renewable Energy Solutions</li>
                    <li>Clean Technology Innovation</li>
                    <li>Environmental Monitoring</li>
                    <li>Smart Agriculture</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">Circular Economy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Waste Management</li>
                    <li>Recycling Innovation</li>
                    <li>Sustainable Packaging</li>
                    <li>Resource Optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-600">Sustainable Lifestyle</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Eco-friendly Products</li>
                    <li>Sustainable Fashion</li>
                    <li>Green Transportation</li>
                    <li>Conscious Consumption</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-600">Climate Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Carbon Reduction</li>
                    <li>Climate Adaptation</li>
                    <li>Environmental Restoration</li>
                    <li>Sustainable Agriculture</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Social Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Community Empowerment</li>
                    <li>Environmental Education</li>
                    <li>Inclusive Green Business</li>
                    <li>Local Wisdom Integration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-teal-600">Digital Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Environmental Apps</li>
                    <li>IoT for Sustainability</li>
                    <li>AI for Environment</li>
                    <li>Blockchain for Green</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Competition Format */}
        <section className="w-full py-20 px-5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Format Kompetisi</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Fase 1: Business Plan</CardTitle>
                  <CardDescription>Proposal Bisnis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Executive Summary</li>
                    <li>• Problem & Solution</li>
                    <li>• Market Analysis</li>
                    <li>• Business Model Canvas</li>
                    <li>• Financial Projection</li>
                    <li>• Impact Measurement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-xl text-green-600">Fase 2: Pitch Deck</CardTitle>
                  <CardDescription>Presentasi Virtual</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• 10 menit presentasi</li>
                    <li>• 5 menit Q&A</li>
                    <li>• Demo produk/prototype</li>
                    <li>• Storytelling impact</li>
                    <li>• Investor readiness</li>
                    <li>• Scalability plan</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">Fase 3: Final Presentation</CardTitle>
                  <CardDescription>Grand Final</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• 15 menit presentasi</li>
                    <li>• 10 menit Q&A panel</li>
                    <li>• Live demo</li>
                    <li>• Investor panel feedback</li>
                    <li>• Network session</li>
                    <li>• Award ceremony</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="w-full py-20 px-5 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Timeline Kompetisi</h2>
            <div className="grid md:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Pendaftaran</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">1-30 Sep 2025</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Business Plan</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">1-15 Okt 2025</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Seleksi</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">16-20 Okt 2025</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Pitch Deck</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">25-27 Okt 2025</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  5
                </div>
                <h3 className="font-semibold mb-2">Grand Final</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">2-3 Nov 2025</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  6
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
            <h2 className="text-3xl font-bold text-center mb-16">Hadiah & Benefit</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-yellow-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-yellow-600">🏆 Total Prize Pool</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                      <span className="font-semibold text-lg">🥇 Juara 1</span>
                      <span className="font-bold text-xl">Rp 25.000.000</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <span className="font-semibold text-lg">🥈 Juara 2</span>
                      <span className="font-bold text-xl">Rp 15.000.000</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-orange-100 dark:bg-orange-900 rounded-lg">
                      <span className="font-semibold text-lg">🥉 Juara 3</span>
                      <span className="font-bold text-xl">Rp 10.000.000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">🎯 Additional Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-green-600">✓</span>
                      <span>Mentoring dari Expert</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-600">✓</span>
                      <span>Investor Network Access</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-600">✓</span>
                      <span>Incubation Program</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-600">✓</span>
                      <span>Media Coverage</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-600">✓</span>
                      <span>Certificate & Trophy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-600">✓</span>
                      <span>Funding Opportunity</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/auth/sign-up">Daftar Sekarang</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="w-full py-20 px-5 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Persyaratan Peserta</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Umum</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Mahasiswa S1/D4/D3 atau Fresh Graduate (max 2 tahun)</li>
                    <li>• Tim terdiri dari 2-4 orang</li>
                    <li>• Satu tim hanya boleh mengikuti satu kategori</li>
                    <li>• Belum pernah menerima funding {`>`} Rp 100 juta</li>
                    <li>• Komitmen mengikuti seluruh rangkaian acara</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-600">Dokumen</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• KTP/Kartu Pelajar seluruh anggota tim</li>
                    <li>• Surat keterangan mahasiswa aktif</li>
                    <li>• CV singkat setiap anggota</li>
                    <li>• Motivation letter tim</li>
                    <li>• Bukti pembayaran registration fee</li>
                  </ul>
                </CardContent>
              </Card>
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
