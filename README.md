# Aqartech - Real Estate Management Dashboard 🏢

A modern, highly scalable Real Estate Dashboard built with **Next.js (App Router)**. This project demonstrates advanced frontend architecture patterns, focusing on clean code, maintainability, and performance.

## 🚀 Tech Stack & Core Libraries

- **Framework:** Next.js 14 (App Router) for optimal SSR and performance.
- **Styling:** Tailwind CSS & Shadcn UI for highly customizable and accessible components.
- **Server State Management:** TanStack Query (React Query) for data fetching, caching, and background synchronization.
- **Client State Management:** Zustand for lightweight, boilerplate-free global UI state.
- **API Layer:** Axios with centralized Interceptors for token management and error handling.
- **Data Visualization:** Recharts for responsive and interactive data metrics.
- **Forms & Validation:** React Hook Form + Zod for performant, type-safe form handling.

## 🏗️ Architectural Decisions

This project strictly follows the **Feature-Based Architecture** (Feature-Sliced Design) rather than the traditional Type-Based Architecture.

This decision ensures high cohesion and low coupling by grouping files according to their business domain (e.g., `auth`, `properties`, `statistics`) rather than their technical role (e.g., `hooks`, `components`).

### Folder Structure Highlight:

```text
src/
├── app/                  # Next.js file-based routing & Middlewares
├── features/             # Business modules (The core of the app)
│   ├── auth/             # Every feature contains its own:
│   │   ├── api/          # - API fetchers (Axios calls)
│   │   ├── components/   # - Presentational & Container components
│   │   ├── hooks/        # - Feature-specific React Query hooks
│   │   └── types.ts      # - Feature-specific TypeScript interfaces
│   └── properties/
├── components/           # Global dumb components (UI, Layouts, Forms)
├── lib/                  # Third-party library configurations (Axios, QueryClient)
├── hooks/                # Global custom hooks (e.g., useClickOutside)
└── constants/            # Application constants and Route definitions
⚙️ Getting Started
First, install the dependencies:

Bash
npm install
# or
yarn install
Then, run the development server:

Bash
npm run dev
# or
yarn dev
Open http://localhost:3000 with your browser to see the result.

📈 Performance & SEO Considerations
Utilized Next.js Server Components where applicable to reduce client-side JavaScript bundle size.

Lazy-loaded heavy components (like Charts) using next/dynamic.

Implemented robust layout shifts prevention with Skeleton loaders.
```
