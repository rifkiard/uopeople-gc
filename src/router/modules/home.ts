import type { RouteRecordRaw } from "vue-router";

export default <RouteRecordRaw[]>[
  {
    path: "/",
    name: "home.index",
    component: () => import("@/views/Home/IndexView.vue"),
  },
];
