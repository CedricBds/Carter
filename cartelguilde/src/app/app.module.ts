import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReglementComponent } from './reglement/reglement.component';
import { TutorielComponent } from './tutoriel/tutoriel.component';
import { GalerieComponent } from './galerie/galerie.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    CandidatureComponent,
    NavbarComponent,
    ReglementComponent,
    TutorielComponent,
    GalerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, MainComponent]
})
export class AppModule { }
