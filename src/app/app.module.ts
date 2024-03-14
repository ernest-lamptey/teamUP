import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat'
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './projects/shared/header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { CarouselComponent } from './shared/carousel/carousel.component'
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HeaderComponent,
    SearchBarComponent,
    CarouselComponent,
    ProjectCardComponent,
    ProjectDetailComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    AngularFireModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
