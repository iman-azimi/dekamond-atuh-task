# Dekamond - Auth Task

A simple example of a client-side authentication system using Iranian mobile numbers. User information is fetched from [randomuser.me](https://randomuser.me/) and stored in `localStorage`. The project is built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

---

## Features

### Login Page
- Input for Iranian mobile numbers (`09xxxxxxxxx`, `+989xxxxxxxxx`, `00989xxxxxxxxx`)
- Client-side validation
- Fetch random user data from API on login
- Store user info in `localStorage`

### Dashboard Page
- Welcome message with the user's name
- Display user picture and email
- Logout button (clears `localStorage` and redirects to login)
- Redirect to login if no user data is present

### UI Components
- Custom Input and Button components
- Tailwind styling with focus, error, and loading states
- Responsive and mobile-first design

---

## Technical Details
- **Next.js App Router** with TypeScript
- Clean, modular folder structure (`components`, `lib`, `utils`)
- Client-side session management via `localStorage`
- Accessible components with **ARIA attributes**

---

## Getting Started

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run in Development Mode
```bash
npm run dev
```
Open in browser: [http://localhost:3000](http://localhost:3000)  
(Hot-reloading is enabled for automatic updates.)

### Step 3: Build for Production
```bash
npm run build
```
This command creates an optimized production build with minified JS and CSS.

### Step 4: Run in Production Mode
```bash
npm start
```
Production server will run at [http://localhost:3000](http://localhost:3000).

---

## Project Structure
```
app/
  dashboard/       # Dashboard page
  page.tsx         # Login page
components/
  ui/              # Input and Button components
lib/
  auth.ts          # LocalStorage user helpers
  phone.ts         # Mobile validation helpers
utils/
  fetchUser.ts     # API request for random user
styles/
  globals.css      # Tailwind global styles
package.json
tsconfig.json
tailwind.config.js
postcss.config.js
.gitignore
README.md
```

---

## Notes
- Node.js >= 18 is recommended.
- Tailwind CSS and PostCSS configuration should remain intact.
- Client-side authentication only (no server-side logic).
- User session is stored in `localStorage`.

---

## License
This project is for demonstration and educational purposes only.

