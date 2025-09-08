# Setup Admin Account - ENVIRONATION 2025

## Langkah-langkah membuat akun admin:

### 1. Setup Database
Jalankan script `database/schema.sql` di Supabase SQL Editor untuk membuat semua tabel dan sample data.

### 2. Jalankan Aplikasi
```bash
cd c:\Kerjaan\ENVIRONATION\environation
npm run dev
```

### 3. Daftar Akun Admin
1. Buka http://localhost:3000
2. Klik "Daftar Sekarang" 
3. Isi form dengan email admin (contoh: admin@environation.com)
4. **SKIP step email confirmation** (kita akan verifikasi manual)

### 4. Setup Admin + Verifikasi Email (PILIH SALAH SATU)

#### OPTION A: Script Lengkap (Recommended)
Jalankan `database/setup-admin-complete.sql` di Supabase SQL Editor:
1. Edit file dan ganti semua `admin@environation.com` dengan email admin Anda
2. Copy dan jalankan script tersebut di Supabase dashboard
3. Script ini akan verifikasi email + upgrade ke admin sekaligus

#### OPTION B: Step by Step
1. **Verifikasi Email**: Jalankan `database/verify-email.sql`
2. **Upgrade Admin**: Jalankan `database/create-admin.sql`

### 5. Login sebagai Admin
1. Login dengan akun yang sudah di-setup
2. Sekarang akan muncul menu "Admin Panel" di dashboard
3. Bisa akses:
   - `/dashboard/admin` - Admin dashboard
   - `/dashboard/admin/participants` - Manage participants
   - `/dashboard/admin/submissions` - Review submissions

## Quick Setup (Copy-Paste Ready):

Ganti `admin@environation.com` dengan email Anda, lalu jalankan di Supabase SQL Editor:

```sql
-- Verifikasi email + setup admin
UPDATE auth.users 
SET email_confirmed_at = NOW()
WHERE email = 'admin@environation.com';

UPDATE profiles 
SET role = 'admin', full_name = 'Admin ENVIRONATION', 
    institution = 'ENVIRONATION 2025', phone = '+62812345678'
WHERE id = (SELECT id FROM auth.users WHERE email = 'admin@environation.com');

-- Cek hasil
SELECT u.email, p.full_name, p.role, 
       CASE WHEN u.email_confirmed_at IS NOT NULL THEN '✅ Verified' ELSE '❌ Not Verified' END
FROM auth.users u JOIN profiles p ON u.id = p.id 
WHERE u.email = 'admin@environation.com';
```

## Fitur Admin:
- ✅ View statistics dashboard
- ✅ Manage all participants 
- ✅ Review submissions
- ✅ Filter and search participants
- ✅ Export data (placeholder)

## Testing Flow:
1. Test halaman public (`/`, `/lkti`, `/enviro-business-competition`) tanpa login ✅
2. Test pendaftaran user biasa
3. Test login redirect ke `/dashboard` ✅
4. Test registrasi kompetisi
5. Test submit karya dengan link file
6. Test admin panel dengan akun admin

## Troubleshooting:

### Email not confirmed:
- Gunakan script `database/verify-email.sql` untuk verifikasi manual
- Atau gunakan script lengkap `database/setup-admin-complete.sql`

### Jika redirect ke `/protected`:
- Folder `/protected` sudah dihapus ✅
- Clear browser cache dan cookies
- Restart dev server

### Jika halaman LKTI/Business Competition minta login:
- Middleware sudah dikonfigurasi untuk allow public routes ✅
- Halaman `/lkti` dan `/enviro-business-competition` bisa diakses tanpa login ✅

### Jika admin panel tidak muncul:
- Pastikan script setup admin sudah dijalankan
- Cek role di database: `SELECT role FROM profiles WHERE email = 'your-email'`
- Logout dan login kembali
