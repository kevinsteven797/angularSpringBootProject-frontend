import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { GenerateClientComponent } from './generate-client/generate-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';

const routes: Routes = [
  {path : 'clients',component:ListClientsComponent},
  {path : '',redirectTo:'clients',pathMatch:'full'},
  {path : 'generate-client',component: GenerateClientComponent},
  {path : 'update-client/:id',component: UpdateClientComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
