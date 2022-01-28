import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompComponent } from './add-comp/add-comp.component';
import { AddFattureComponent } from './add-fatture/add-fatture.component';
import { CardFattureComponent } from './card-fatture/card-fatture.component';
import { CardUserComponent } from './card-user/card-user.component';
import { DettagliFattureComponent } from './dettagli-fatture/dettagli-fatture.component';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';
import { TableFattureComponent } from './table-fatture/table-fatture.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
 
  {path:'Home',component:MainComponent},
  {path:'Tabella',component:TableComponent},
  {path:'Tabella/:id',component:CardUserComponent},
  {path:'Tabella/:id/edit',component:FormComponent},
  {path:'Addclient',component:AddCompComponent},
  {path:'Fatture',component:TableFattureComponent},
  {path:'AddFatture',component:AddFattureComponent},
  {path:'AddFatture/:id',component:CardFattureComponent},
  {path:'AddFatture/:id/dettagliFatture',component:DettagliFattureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
