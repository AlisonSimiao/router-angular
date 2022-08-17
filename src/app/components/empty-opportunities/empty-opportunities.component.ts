import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-opportunities',
  templateUrl: './empty-opportunities.component.html',
  styleUrls: ['./empty-opportunities.component.scss']
})
export class EmptyOpportunitiesComponent implements OnInit {
  @Input()
  text!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
