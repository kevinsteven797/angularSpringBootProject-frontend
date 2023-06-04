import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { CsvService } from '../csv.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  clients:Client[];
  searchTerm: string;
  
  constructor(private clientService: ClientService, private router: Router, private csvService: CsvService){}

  ngOnInit(): void {
    this.getClients();
  }

  updateClient(id:number){
    this.router.navigate(['update-client',id]);
  }

  private getClients(){
    this.clientService.getListClients().subscribe(data => {
      this.clients = data;
    });
  }

  searchClients() {
    if (this.searchTerm) {
      const filteredClients = this.clients.filter(client =>
        client.nickName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      this.clients = filteredClients;
    } else {
      this.getClients();
    }
  }

  exportCSV() {
    const csvData = this.convertToCSV(this.clients);
    this.csvService.downloadFile(csvData, 'clients.csv');
  }

  private convertToCSV(clients: Client[]): string {
    const headers = ['Shared Key', 'Business ID', 'E-mail', 'Phone', 'Data Added'];
    const rows = clients.map(client => [
      client.nickName,
      client.name,
      client.email,
      client.phone,
      new Date(client.startDate).toLocaleDateString('en-US')
    ]);
    const csvArray = [headers, ...rows];
    const csvContent = csvArray.map(row => row.join(',')).join('\n');
    return csvContent;
  }

}
