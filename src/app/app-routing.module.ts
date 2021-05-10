import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authentication/auth.gaurd';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { ConsultancyComponent } from './consultancy/consultancy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EnrolledDetailsComponent } from './contact-us/tables/enrolled-details/enrolled-details.component';
import { QueryDetailsComponent } from './contact-us/tables/query-details/query-details.component';
import { AddEventsComponent } from './event/add-events/add-events.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { UsersTableComponent } from './users-table/users-table.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'create', component: AddEventsComponent, canActivate: [AuthGuard] },
  {
    path: 'create/:eventId',
    component: AddEventsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'iqmetrics/admin/login', component: LoginComponent },
  { path: 'iqmetrics/admin/login/signup', component: SignupComponent },
  {
    path: 'iqmetrics/admin/users',
    component: UsersTableComponent,
    canActivate: [AuthGuard],
  },
  { path: 'iqmetrics/admin/queries', component: QueryDetailsComponent },
  { path: 'iqmetrics/admin/services', component: ServiceListComponent },
  { path: 'programs', component: EventsPageComponent },
  {
    path: 'iqmetrics/admin/enrolled-details',
    component: EnrolledDetailsComponent,
  },
  {
    path: 'consultancy',
    component: ConsultancyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
