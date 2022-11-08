import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as fr from '@angular/common/locales/fr';

import 'hammerjs';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FolioComponent } from './folio/folio.component';
import { CvComponent } from './cv/cv.component';
import { SkillComponent } from './skill/skill.component';
import { FilesComponent } from './files/files.component';
import { AppRoutingModule } from './app-routing.module';
import { InterestComponent } from './interest/interest.component';
import { registerLocaleData } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FoliodetailsComponent } from './foliodetails/foliodetails.component';

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
    PageNotFoundComponent,
    FoliodetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default)
  }
}
