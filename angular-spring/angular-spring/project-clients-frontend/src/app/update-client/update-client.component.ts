import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  id: number;
  client: Client = new Client();

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClientById(this.id).subscribe(data => {
      this.client = data;
    }, error => console.log(error));
  }

  goToListClients() {
    this.router.navigate(['/clients']);
    swal.fire('Cliente actualizado', `El cliente ${this.client.name} ha sido actualizado con éxito`, 'success');
  }

  onSubmit() {
    this.clientService.updateClient(this.id, this.client).subscribe(data => {
      this.goToListClients();
    }, error => console.log(error));
  }

}
