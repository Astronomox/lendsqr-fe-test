const BASE = "https://joy-okwudire-lendsqr-fe-test.vercel.app/images/icons";
const IMG = "https://joy-okwudire-lendsqr-fe-test.vercel.app/images";

export interface NavItem {
  id: number;
  title: string;
  link: string;
  icon?: string;
  header?: boolean;
}

export interface StatItem {
  id: number;
  title: string;
  count: string;
  icon: string;
}

export const navItems: NavItem[] = [
  { id: 1, title: "Switch Organization", link: "#", icon: `${BASE}/nav-icon-4.svg` },
  { id: 2, title: "Dashboard", link: "/dashboard", icon: `${BASE}/home.svg` },
  { id: 3, title: "CUSTOMERS", link: "", header: true },
  { id: 4, title: "Users", link: "/dashboard/users", icon: `${BASE}/nav-icon-4.svg` },
  { id: 5, title: "Guarantors", link: "/dashboard/guarantors", icon: `${BASE}/nav-icon-5.svg` },
  { id: 6, title: "Loans", link: "/dashboard/loans", icon: `${BASE}/nav-icon-6.svg` },
  { id: 7, title: "Decision Models", link: "/dashboard/decision-models", icon: `${BASE}/nav-icon-7.svg` },
  { id: 8, title: "Savings", link: "/dashboard/savings", icon: `${BASE}/nav-icon-8.svg` },
  { id: 9, title: "Loan Requests", link: "/dashboard/loan-requests", icon: `${BASE}/nav-icon-9.svg` },
  { id: 10, title: "Whitelist", link: "/dashboard/whitelist", icon: `${BASE}/nav-icon-10.svg` },
  { id: 11, title: "Karma", link: "/dashboard/karma", icon: `${BASE}/nav-icon-11.svg` },
  { id: 12, title: "BUSINESSES", link: "", header: true },
  { id: 13, title: "Organization", link: "/dashboard/organization", icon: `${BASE}/nav-icon-13.svg` },
  { id: 14, title: "Loan Products", link: "/dashboard/loan-products", icon: `${BASE}/nav-icon-14.svg` },
  { id: 15, title: "Savings Products", link: "/dashboard/savings-products", icon: `${BASE}/nav-icon-15.svg` },
  { id: 16, title: "Fees and Charges", link: "/dashboard/fees-charges", icon: `${BASE}/nav-icon-16.svg` },
  { id: 17, title: "Transactions", link: "/dashboard/transactions", icon: `${BASE}/nav-icon-17.svg` },
  { id: 18, title: "Services", link: "/dashboard/services", icon: `${BASE}/nav-icon-18.svg` },
  { id: 19, title: "Service Account", link: "/dashboard/service-account", icon: `${BASE}/nav-icon-19.svg` },
  { id: 20, title: "Settlements", link: "/dashboard/settlements", icon: `${BASE}/nav-icon-20.svg` },
  { id: 21, title: "Reports", link: "/dashboard/reports", icon: `${BASE}/nav-icon-21.svg` },
  { id: 22, title: "SETTINGS", link: "", header: true },
  { id: 23, title: "Preferences", link: "/dashboard/preferences", icon: `${BASE}/nav-icon-23.svg` },
  { id: 24, title: "Fees and Pricing", link: "/dashboard/fees-pricing", icon: `${BASE}/nav-icon-24.svg` },
  { id: 25, title: "Audit Logs", link: "/dashboard/audit-logs", icon: `${BASE}/nav-icon-25.svg` },
  { id: 26, title: "Systems Messages", link: "/dashboard/systems-messages", icon: `${BASE}/nav-icon-26.svg` },
];

export const usersStats: StatItem[] = [
  { id: 1, title: "USERS", count: "2,453", icon: `${BASE}/user-stat-icon-1.svg` },
  { id: 2, title: "ACTIVE USERS", count: "2,453", icon: `${BASE}/user-stat-icon-2.svg` },
  { id: 3, title: "USERS WITH LOANS", count: "12,453", icon: `${BASE}/user-stat-icon-3.svg` },
  { id: 4, title: "USERS WITH SAVINGS", count: "102,453", icon: `${IMG}/icons/user-stat-icon-4.svg` },
];