// src/constants/routes.ts
export const ROUTES = {
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
  },
  DASHBOARD: {
    HOME: "/dashboard",
    FACILITIES: "/dashboard/facilities",
    PROPERTY_DETAILS: (id: string | number) => `/dashboard/properties/${id}`,
  },
};
