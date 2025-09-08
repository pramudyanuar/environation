# ENVIRONATION 2025 - Kompetisi Nasional Lingkungan

Website kompetisi nasional untuk generasi muda peduli lingkungan. Platform ini menyelenggarakan dua kompetisi utama:
- **LKTI (Lomba Karya Tulis Ilmiah)** - Paper dan Essay Competition
- **Enviro Business Competition** - Sustainable Business Model Competition

## Features

### Public Features
- 🏠 **Landing Page** - Informasi kompetisi dan timeline
- 📝 **Competition Pages** - Detail setiap kompetisi (LKTI & Business Competition)
- 🔐 **Authentication** - Login/Signup dengan Supabase Auth
- 📱 **Responsive Design** - Mobile-friendly interface

### Participant Dashboard
- 👤 **Profile Management** - Update personal information
- 🏆 **Competition Registration** - Daftar kompetisi yang tersedia
- 📄 **Submission Management** - Submit karya dengan link file
- 📊 **Dashboard Overview** - Status registrasi dan submission

### Admin Panel
- 👥 **Manage Participants** - Kelola data peserta
- 📋 **Manage Submissions** - Review dan penilaian karya
- 📈 **Statistics Dashboard** - Overview aktivitas kompetisi
- 🔍 **Advanced Filters** - Filter berdasarkan kompetisi, status, dll

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Language**: TypeScript

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd environation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your Supabase credentials:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY=your-anon-key
   ```

4. **Setup Database**
   
   Run the SQL schema in your Supabase dashboard:
   ```bash
   # Copy content from database/schema.sql
   # Paste and run in Supabase SQL Editor
   ```

5. **Run Development Server**
   ```bash
   npm run dev
   ```

6. **Open in Browser**
   ```
   http://localhost:3000
   ```

## Database Schema

### Tables
- **profiles** - User profile information
- **competitions** - Competition details
- **registrations** - User competition registrations  
- **submissions** - Submitted works with file links

### Key Features
- Row Level Security (RLS) enabled
- Automatic profile creation on signup
- Admin role management
- File uploads via external links (Google Drive, etc.)

## Competition Categories

### LKTI (Lomba Karya Tulis Ilmiah)
- **Scientific Paper**: Mahasiswa S1/D4/D3, tim 2-3 orang
- **Essay Competition**: Pelajar SMA/SMK/MA, individual

### Enviro Business Competition
- **Target**: Mahasiswa/Fresh Graduate
- **Format**: Business Plan, Pitch Deck, Final Presentation
- **Focus**: Sustainable business models

## File Upload System

Sistem menggunakan link sharing instead of direct upload:
- Participants upload files to Google Drive, Dropbox, etc.
- Submit share links through the platform
- Admins can review via provided links
- More efficient and cost-effective

## Admin Setup

To create an admin user:
1. Register normally through the website
2. Update the user's role in Supabase dashboard:
   ```sql
   UPDATE profiles SET role = 'admin' WHERE id = 'user-uuid';
   ```

## Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
- Ensure Node.js 18+ support
- Set environment variables
- Build command: `npm run build`
- Start command: `npm start`

## Environment Variables

```bash
# Required
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY=your-supabase-anon-key

# Optional
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push branch: `git push origin feature/new-feature`
5. Submit Pull Request

## Support

For questions or issues:
- Check the documentation
- Open GitHub issue
- Contact admin through the platform

## License

This project is licensed under the MIT License.

---

**ENVIRONATION 2025** - Kompetisi Nasional untuk Generasi Muda Peduli Lingkungan
