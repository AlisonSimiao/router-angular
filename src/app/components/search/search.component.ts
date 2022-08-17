import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  @Output() changeText: EventEmitter<any> = new EventEmitter();
  constructor() { }

  handleTextEntry(event: any){
    this.changeText.emit(event);
  }
  ngOnInit(): void {
  }

}
