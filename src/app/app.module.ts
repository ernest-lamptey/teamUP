import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HeaderComponent,
    SearchBarComponent,
    CarouselComponent,
    ProjectCardComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
