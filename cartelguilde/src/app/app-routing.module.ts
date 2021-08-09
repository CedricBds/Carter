import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ReglementComponent } from './reglement/reglement.component';
import { TutorielComponent } from './tutoriel/tutoriel.component';

const routes: Routes = [

  { path: 'main', component: MainComponent },
  { path: 'rules', component: ReglementComponent },
  { path: 'docs', component: TutorielComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
