import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { HttpClientModule } from "@angular/common/http";
import { GenerateClientComponent } from './generate-client/generate-client.component';
import { FormsModule } from '@angular/forms';
import { UpdateClientComponent } from './update-client/update-client.component';
import { CsvService } from './csv.service';

@NgModule({
  declarations: [
    AppComponent,
    ListClientsComponent,
    GenerateClientComponent,
    UpdateClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CsvService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
