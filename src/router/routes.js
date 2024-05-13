const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/HomePage.vue") }],
  },
  {
    path: "/groups",
  },
  {
    path: "/statistics",
  },
  {
    path: "/profile",
  },
  {
    path: "/settings",
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
