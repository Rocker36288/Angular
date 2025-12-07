import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "login",
    loadComponent: () => import("./login/login.component").then(m => m.LoginComponent)
  },
  {
    path: "signup",
    loadComponent: () => import("./sign-up/sign-up.component").then(m => m.SignUpComponent)
  },
  {
    path: "signup/:id",
    loadComponent: () => import("./sign-up/sign-up.component").then(m => m.SignUpComponent)
  },
  {
    path: "practice",
    loadComponent: () => import("./practice/practice.component").then(m => m.PracticeComponent)
  },
  {
    path: "**",
    loadComponent: () => import("./login/login.component").then(m => m.LoginComponent)
  },
];
