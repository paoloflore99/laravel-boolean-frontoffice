import { createRouter, createWebHistory } from "vue-router";

import ChiSiamo from "./pages/ChiSiamo.vue";
import CocktailList from "./pages/CocktailList.vue";
import Contatti from "./pages/Contatti.vue";
import Home from "./pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: ChiSiamo,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: Contatti,
  },
  {
    path: "/cocktails",
    name: "cocktails",
    component: CocktailList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
