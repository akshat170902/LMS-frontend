import { Routes } from '@angular/router'
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { ProfilePageComponent } from './page/profile-page/profile-page.component';
import { SignupPageComponent } from './page/signup-page/signup-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { CoursePageComponent } from './page/course-page/course-page.component';
import { AllCoursesPageComponent } from './page/all-courses-page/all-courses-page.component';
export const routes : Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' }, // Default route
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'profile-page', component: ProfilePageComponent },
  { path: 'signup-page', component: SignupPageComponent },
  { path: 'courses', component: AllCoursesPageComponent },
  { path: 'course/:id', component: CoursePageComponent },

  { path: '**', redirectTo: '/landing-page' }, // Wildcard route for a 404 page (optional)
];
