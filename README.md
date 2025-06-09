# 🎬 Streamflix

A full-featured Streamflix built using modern web technologies. Stream your favorite movies and shows with a sleek, responsive UI.

## 🚀 Features

- User authentication (Sign up / Log in)
- Browse movies and TV shows
- Movie detail pages with trailers
- Add to favorites / My List
- Responsive design (mobile-first)
- Dark mode interface
- Video streaming via external APIs

## 🛠️ Tech Stack

**Frontend:**
- React.js / Next.js
- Tailwind CSS or Styled Components
- Axios for API requests

**Backend (optional):**
- Node.js + Express
- MongoDB / Firebase / Supabase for database
- JWT for auth

**APIs:**
- [TMDB (The Movie Database)](https://www.themoviedb.org/documentation/api) for movie data
- Firebase / Supabase for hosting and auth (optional)

## 📦 Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/ddust-tech/streamflix.git
   cd streamflix
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file and add your environment variables:
   ```env
   NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open in browser:
   ```
   http://localhost:3000
   ```

## 📁 Folder Structure

```
/components      # Reusable UI components
/pages           # Next.js pages
/styles          # Global styles
/utils           # Utility functions and API calls
/public          # Static assets
```

## 🧪 Testing

```bash
npm run test
```

*(Include if you've added any testing framework like Jest, React Testing Library)*

## 🔐 Authentication

User authentication is handled using Firebase Auth or custom backend with JWT. Protected routes are implemented to restrict access.

## 🧰 Future Improvements

- Payment integration (Stripe)
- Multi-user profiles
- Personalized recommendations
- Offline downloads
- Real-time chat support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

### 👨‍💻 Made with ❤️ by [Daniel Adebayo]
