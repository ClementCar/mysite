import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FolioComponent } from './folio/folio.component';
import { CvComponent } from './cv/cv.component';
import { SkillComponent } from './skill/skill.component';
import { FilesComponent } from './files/files.component';
import { AppRoutingModule } from './app-routing.module';
import { InterestComponent } from './interest/interest.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FolioComponent,
    CvComponent,
    SkillComponent,
    FilesComponent,
    InterestComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
