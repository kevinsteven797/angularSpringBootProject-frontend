import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-client',
  templateUrl: './generate-client.component.html',
  styleUrls: ['./generate-client.component.css']
})
export class GenerateClientComponent implements OnInit {

  client: Client = new Client();


  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {}

  generateNickName() {
    if (this.client.name) {
      const nameParts = this.client.name.split(' ');
      this.client.nickName = nameParts[0].charAt(0) + nameParts[1];
    } else {
      this.client.nickName = '';
    }
  }

  saveClient() {
    this.clientService.registerClient(this.client).subscribe(
      data => {
        console.log(data);
        this.goListClients();
      },
      error => console.log(error)
    );
  }

  goListClients() {
    this.router.navigate(['/clients']);
  }

  onSubmit() {
    this.saveClient();
  }

}
