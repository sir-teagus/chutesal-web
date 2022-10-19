import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCupComponent } from './create-cup/create-cup.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { CupsComponent } from './cups/cups.component';
import { EditSchoolsComponent } from './edit-schools/edit-schools.component';
import { SchoolsComponent } from './schools/schools.component';

const routes: Routes = [
  {path: 'cups', component: CupsComponent},
  {path: 'create-team', component: CreateTeamComponent},
  {path: 'create-cup', component: CreateCupComponent},
  {path: 'schools', component: SchoolsComponent},
  {path: 'edit-schools/:id', component: EditSchoolsComponent},
  {path: '', redirectTo: 'cups', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
