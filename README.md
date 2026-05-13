# 🏋️ The Jungle - Gym Booking Platform

Welcome to **The Jungle** frontend! A modern, responsive web application for managing gym bookings, class scheduling, and member experiences across multiple fitness locations.

---

## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environment Setup](#environment-setup)
- [API Integration](#api-integration)
- [Routing](#routing)
- [Component Architecture](#component-architecture)
- [Styling](#styling)
- [State Management](#state-management)
- [Contributing](#contributing)

---

## 🎯 Overview

The Jungle is a specialized fitness center brand with two locations offering:
- **CrossFit training** with certified coaches
- **Musculation programs** for strength and hypertrophy
- **Athlete performance preparation** for competitive sports (football, basketball, handball)

This frontend provides a seamless booking experience, member management, and location information across both facilities in **Sahloul 4** and **Kantaoui**.

---

## ✨ Features

### Core Features
- 🔖 **Multi-Location Support** - Switch between Cross and FitBox locations
- 📅 **Smart Booking System** - Reserve classes with real-time slot availability
- 🎭 **Location Showcase** - Detailed information, facilities, equipment, and rules
- 👥 **Coach Profiles** - Meet the team of professional trainers
- 💰 **Transparent Pricing** - Clear pricing tiers for different programs
- 📱 **Responsive Design** - Works flawlessly on all devices
- 🎨 **Modern UI** - Beautiful, animated interface with Framer Motion
- 🔔 **Toast Notifications** - Real-time feedback with Sonner
- 📍 **Google Maps Integration** - Easy location finding
- ✅ **Form Validation** - Robust booking form with React Hook Form

### Page Routes
- **Home** (`/`) - Landing page with hero section, features, pricing, coaches
- **Booking** (`/booking`) - Class reservation system
- **Events** (`/events`) - Upcoming events and competitions
- **Locations** (`/locations`) - Facility details and amenities
- **Transformations** (`/transformations`) - Member success stories
- **Contact** (`/contact`) - Get in touch

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **TanStack Router** - File-based routing
- **TanStack Query** - Data fetching & caching
- **Vite** - Build tool

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component library
- **Framer Motion** - Animations
- **Shadcn/ui** - Pre-built component collection
- **Sonner** - Toast notifications

### Form & Validation
- **React Hook Form** - Efficient form state management
- **Zod** - Schema validation

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

---

## 📁 Project Structure

```
jungle-gym-Frontend/
├── public/                    # Static assets
├── src/
│   ├── components/           # Reusable React components
│   │   ├── ui/              # Shadcn/ui components
│   │   ├── BookingForm.tsx
│   │   ├── CoachesSection.tsx
│   │   ├── EventsSection.tsx
│   │   ├── FeatureSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── LocationCard.tsx
│   │   ├── LocationSwitcher.tsx
│   │   ├── Navbar.tsx
│   │   └── PricingSection.tsx
│   ├── routes/               # Page components (file-based routing)
│   │   ├── __root.tsx
│   │   ├── index.tsx         # Home page
│   │   ├── booking.tsx
│   │   ├── contact.tsx
│   │   ├── events.tsx
│   │   ├── locations.tsx
│   │   └── transformations.tsx
│   ├── context/              # React Context
│   │   └── LocationContext.tsx
│   ├── data/                 # Static data
│   │   └── locations.ts      # Gym location data
│   ├── hooks/                # Custom React hooks
│   │   └── use-mobile.tsx
│   ├── lib/                  # Utilities & helpers
│   │   ├── api.ts            # API client setup
│   │   ├── error-capture.ts
│   │   ├── error-page.ts
│   │   └── utils.ts
│   ├── types/                # TypeScript type definitions
│   │   └── jungle.ts         # Domain types
│   ├── main.tsx              # React entry point
│   ├── router.tsx            # Router configuration
│   ├── routeTree.gen.ts      # Auto-generated route tree
│   ├── start.ts
│   ├── server.ts
│   └── styles.css            # Global styles
├── index.html                # HTML entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── components.json
├── vercel.json               # Vercel deployment config
└── wrangler.jsonc            # Cloudflare Workers config
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Python backend running (see backend README)

### Installation

1. **Clone the repository**
   ```bash
   cd jungle-gym-Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file** (if needed)
   ```bash
   cp .env.example .env.local
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run format` | Format code with Prettier |

---

## ⚙️ Environment Setup

The frontend connects to the backend API (default: `http://localhost:3000`). Configure the API endpoint in [lib/api.ts](src/lib/api.ts):

```typescript
const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:3000';
```

Or set the environment variable:
```bash
VITE_API_URL=http://your-api-domain.com npm run dev
```

---

## 🔌 API Integration

### API Client
The `lib/api.ts` file provides utility functions for communicating with the backend:

```typescript
// Example API calls
const bookings = await fetchBookings(location);
const availableSlots = await getAvailableSlots(date, location);
const submitBooking = await createBooking(bookingPayload);
```

### Data Fetching
Uses **TanStack Query** for efficient data management:
- Automatic caching
- Background refetching
- Optimistic updates
- Error handling

---

## 🗺️ Routing

File-based routing with **TanStack Router**:

```
routes/
├── __root.tsx          → Root layout (Navbar, Footer)
├── index.tsx           → / (Home)
├── booking.tsx         → /booking (Booking page)
├── events.tsx          → /events (Events)
├── locations.tsx       → /locations (Facilities)
├── transformations.tsx → /transformations (Success stories)
└── contact.tsx         → /contact (Contact form)
```

**Navigation Example:**
```tsx
import { Link } from '@tanstack/react-router';

export function Nav() {
  return <Link to="/booking">Book Now</Link>;
}
```

---

## 🧩 Component Architecture

### Layout Components
- **Navbar** - Navigation header with location switcher
- **Footer** - Site footer with links
- **LocationSwitcher** - Toggle between gym locations

### Feature Components
- **BookingForm** - Handles booking submissions
- **Hero** - Landing hero section
- **FeatureSection** - Gym features showcase
- **PricingSection** - Pricing tiers
- **CoachesSection** - Team profiles
- **EventsSection** - Upcoming events
- **LocationCard** - Location information cards

### UI Components
Pre-built components from `shadcn/ui`:
- Forms, buttons, inputs
- Dialogs, modals, dropdowns
- Tables, cards, badges
- And more...

---

## 🎨 Styling

### Tailwind CSS
Utility-first CSS framework for responsive design:
```tsx
<div className="flex items-center justify-between p-4 bg-gradient-to-r from-black to-gray-900">
  <h1 className="text-3xl font-bold text-white">The Jungle</h1>
</div>
```

### Framer Motion
Smooth animations and transitions:
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Dark Mode
Built-in dark mode support with Tailwind CSS.

---

## 🔄 State Management

### Context API
**LocationContext** manages the current selected gym location across the app:

```tsx
const { location, setLocation } = useContext(LocationContext);
```

### React Query
Handles server state, caching, and data synchronization:

```tsx
const { data, isLoading } = useQuery({
  queryKey: ['bookings'],
  queryFn: fetchBookings,
});
```

### Form State
**React Hook Form** manages complex form state efficiently:

```tsx
const { register, handleSubmit, errors } = useForm();
```

---

## 📋 Type Definitions

Core types are defined in `src/types/jungle.ts`:

```typescript
type LocationId = "cross" | "fitbox";

interface BookingSlot {
  date: string;    // ISO yyyy-mm-dd
  time: string;    // HH:mm
  available: boolean;
}

interface User {
  fullName: string;
  phone: string;
  goal: string;
}
```

---

## 🤝 Contributing

### Code Standards
- Follow TypeScript strict mode
- Use meaningful variable/function names
- Add JSDoc comments for complex logic
- Keep components small and focused

### Branch Naming
```
feature/user-auth
bugfix/booking-validation
docs/update-readme
```

### Commit Messages
```
feat: add location switcher component
fix: resolve booking form validation issue
docs: update API integration guide
style: format pricing section
```

### Before Submitting PR
```bash
npm run lint      # Check code quality
npm run format    # Format code
npm run build     # Verify build succeeds
```

---

## 📞 Support & Documentation

- **Backend API**: See `jungle_fitness_Backend/` README
- **Issues**: Report bugs with detailed reproduction steps
- **Questions**: Check existing documentation first

---

## 📄 License

This project is part of The Jungle fitness brand. All rights reserved.

---

**Built with ❤️ for fitness enthusiasts everywhere** 💪
