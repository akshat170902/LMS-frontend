import { Routes } from '@angular/router'
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { ProfilePageComponent } from './page/profile-page/profile-page.component';
import { SignupPageComponent } from './page/signup-page/signup-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';

import { UserListComponent } from './component/user-list/user-list.component';

import { MentorListComponent } from './component/mentor-list/mentor-list.component';
import { QueryListComponent } from './component/query-list/query-list.component';
import { PendingRequestListComponent } from './component/pending-request-list/pending-request-list.component';
import { FeedbackListComponent } from './component/feedback-list/feedback-list.component';

import { CoursePageComponent } from './page/course-page/course-page.component';
import { AllCoursesPageComponent } from './page/all-courses-page/all-courses-page.component';
import { CreateCoursesComponent } from './page/create-courses/create-courses.component';

export const routes : Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' }, // Default route
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'profile-page', component: ProfilePageComponent },
  { path: 'signup-page', component: SignupPageComponent },

  {path: 'admin-page/all-users',component: UserListComponent},
  {path: 'admin-page/all-queries',component: QueryListComponent},
  {path: 'admin-page/all-mentors',component: MentorListComponent},
  {path: 'admin-page/all-pending-requests',component: PendingRequestListComponent},
  {path: 'admin-page/all-feedbacks',component: FeedbackListComponent},

  { path: 'courses', component: AllCoursesPageComponent },
  { path: 'course/:id', component: CoursePageComponent },

  {path: 'create-course', component:CreateCoursesComponent},

  { path: '**', redirectTo: '/landing-page' }, // Wildcard route for a 404 page (optional)
  
];
