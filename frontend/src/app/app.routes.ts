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
import { CompletedCoursesComponent } from './component/completed-courses/completed-courses.component';
import { PendingCoursesComponent } from './component/pending-courses/pending-courses.component';
import { EnrolledCoursesComponent } from './component/enrolled-courses/enrolled-courses.component';

import { CoursePageComponent } from './page/course-page/course-page.component';
import { AllCoursesPageComponent } from './page/all-courses-page/all-courses-page.component';
import { CreateCoursesComponent } from './page/create-courses/create-courses.component';

import { HelpSupportComponent } from './page/help-support/help-support.component';
import { FeedbackComponent } from './page/feedback/feedback.component';

import { QueryPageComponent } from './page/query-page/query-page.component';
import { SearchPageComponent } from './page/search-page/search-page.component';

export const routes : Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' }, // Default route
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'profile-page', component: ProfilePageComponent },
  { path: 'signup-page', component: SignupPageComponent },

  {path: 'help-support', component: HelpSupportComponent},
  {path: 'feedback-page', component: FeedbackComponent},

  { path: 'query-page', component: QueryPageComponent },


  {path: 'admin-page/all-users',component: UserListComponent},
  {path: 'admin-page/all-queries',component: QueryListComponent},
  {path: 'admin-page/all-mentors',component: MentorListComponent},
  {path: 'admin-page/all-pending-requests',component: PendingRequestListComponent},
  {path: 'admin-page/all-feedbacks',component: FeedbackListComponent},

  { path: 'courses', component: AllCoursesPageComponent },
  { path: 'course/:id', component: CoursePageComponent },
  { path: 'courses/completed', component:CompletedCoursesComponent},
  { path: 'courses/pending', component:PendingCoursesComponent},
  { path: 'courses/enrolled', component:EnrolledCoursesComponent},

  {path: 'create-course', component:CreateCoursesComponent},
  { path: 'search', component: SearchPageComponent },

  { path: '**', redirectTo: '/landing-page' }, // Wildcard route for a 404 page (optional)
  
];
