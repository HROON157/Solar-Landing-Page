import { ROUTES } from "./Routes";

export const NAV_LINKS = [
  { label: "Home",       href: ROUTES.NAVBAR.Home },
  { label: "Project",   href: ROUTES.NAVBAR.Project },
  { label: "Community",   href: ROUTES.NAVBAR.Community },
  { label: "News",    href: ROUTES.NAVBAR.News },
] as const;