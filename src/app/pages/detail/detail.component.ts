import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IClient } from 'src/app/interfaces/iclient';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  client?: IClient;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private navigate: Router
  ) {
    this.getClient();
  }

  handleStatusOpportunities(index: number) {
    const id = this.route.snapshot.paramMap.get('id') ?? "";
    if (this.client?.opportunities) {
      this.client.opportunities[index].isActive =
        !this.client.opportunities[index].isActive;
      this.clientService
        .setOpportunities(id, this.client.opportunities)
        .subscribe((opportunities) => {
          if (this.client?.opportunities) 
            this.client.opportunities = opportunities;
        });
    }
  }

  goBack() {
    this.navigate.navigate(['/']);
  }

  getClient(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';

    this.clientService.getClient(id).subscribe((client: IClient) => {
      if (Object.keys(client).length) {
        this.client = client;
        return;
      }

      this.goBack();
    });
  }
  ngOnInit(): void {}
}
