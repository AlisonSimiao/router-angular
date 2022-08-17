import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IClient } from 'src/app/interfaces/iclient';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clients!: IClient[];
  filtredData!: IClient[];
  inputEntry!: string;
  
  constructor(private clientService: ClientService) {
    this.getAll();
  }

  public search(event: { target: { value: string; }; }): void{
    this.inputEntry = event.target.value;
    this.filtredData = this.clients.filter((client)=>{
      return client.name.includes(this.inputEntry) || client.email.includes(this.inputEntry)
    })
  }

  getAll(): void{
    this.clientService.getAll().subscribe( (clients) =>{
      this.clients = clients;
      this.filtredData = clients;
      console.log(clients);
    } );
  }

  ngOnInit(): void {}
}
