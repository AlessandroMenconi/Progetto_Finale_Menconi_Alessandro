import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompComponent } from './add-comp/add-comp.component';
import { CardUserComponent } from './card-user/card-user.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  // {path:'Utenti',component:CardUserComponent},
  {path:'Tabella',component:TableComponent},
  {path:'Tabella/:id',component:CardUserComponent},
  {path:'Tabella/:id/edit',component:FormComponent},
  {path:'Addclient',component:AddCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
