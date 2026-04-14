# Lendsqr Frontend Engineering Assessment

A frontend implementation of the Lendsqr admin dashboard, built as part of the Lendsqr Frontend Engineering assessment.

## Live Demo

[https://abdullahi-lendsqr-fe-test.vercel.app](https://abdullahi-lendsqr-fe-test.vercel.app)

## Tech Stack

- React
- TypeScript
- SCSS
- React Router DOM
- React Hook Form
- Vite

## Features

- Login page with form validation
- Dashboard with sidebar navigation
- Users page with paginated table (500 users)
- Filter dropdown on users table
- User details page pulled from localStorage
- Loading states on login, user details and logout
- Responsive layout

## Project Structure
src/
├── components/
│   ├── common/        # Shared components like Loader
│   ├── layout/        # Sidebar, TopNav, DashboardLayout
│   └── users/         # UsersTable, UsersStats, FilterForm, MoreDropDown
├── core/
│   └── data.ts        # Navigation items and stats data
├── data/
│   └── users.json     # 500 generated users
├── pages/
│   ├── Login/
│   ├── Users/
│   └── UserDetails/
├── services/
│   └── api.ts         # Fetch and cache users
├── styles/            # Global SCSS files
├── types/             # TypeScript interfaces
└── utils/
└── storage.ts         # localStorage helpers

## How Data Works

User data is loaded from a local JSON file containing 500 records. On first load, it gets stored in localStorage. When you click a user, their data is saved to localStorage and retrieved on the details page — no external API calls needed.

## Getting Started


# Clone the repo
git clone https://github.com/ASTRONOMOX/lendsqr-fe-test.git

# Move into the folder
cd lendsqr-fe-test

# Install dependencies
pnpm install

# Start the dev server
pnpm dev

## Notes

- Any email and password combination will log you in
- All 500 users are set to Active status
- The sidebar navigation items outside of Users are not functional — they were not part of the assessment scope