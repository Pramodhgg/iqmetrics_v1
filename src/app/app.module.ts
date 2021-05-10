import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './event/events/events.component';
import { UpcomingEventsComponent } from './event/upcoming-events/upcoming-events.component';
import { PastEventsComponent } from './event/past-events/past-events.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { AddEventsComponent } from './event/add-events/add-events.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { AuthInterceptor } from './authentication/auth-interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamsComponent } from './teams/teams.component';
import { MvpSectionComponent } from './mvp-section/mvp-section.component';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { AngularMaterialModule } from './angular-material.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { QueryDetailsComponent } from './contact-us/tables/query-details/query-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NavbarForPagesComponent } from './navbar/navbar-for-pages/navbar-for-pages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventsPageComponent } from './events-page/events-page.component';
import { EnrolledDetailsComponent } from './contact-us/tables/enrolled-details/enrolled-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientsComponent } from './clients/clients.component';
import { ConsultancyComponent } from './consultancy/consultancy.component'
import { NavForConsultancyComponent } from './navbar/nav-for-consultancy/navconsultancy.component'
import { HeaderComponent } from './header/header.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    UpcomingEventsComponent,
    PastEventsComponent,
    AboutUsComponent,
    ServicesComponent,
    AddEventsComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    TeamsComponent,
    MvpSectionComponent,
    ErrorComponent,
    ContactUsComponent,
    FooterComponent,
    UsersTableComponent,
    QueryDetailsComponent,
    NavbarForPagesComponent,
    EventsPageComponent,
    EnrolledDetailsComponent,
    ClientsComponent,
    ConsultancyComponent,
    NavForConsultancyComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule,
    Ng2SearchPipeModule,
    FontAwesomeModule,
    NgbModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent],
})
export class AppModule { }
