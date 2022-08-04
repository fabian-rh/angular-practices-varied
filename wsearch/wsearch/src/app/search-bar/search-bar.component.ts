import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  term = '';

  //Va a enviar datos desde el child hasta el parent que es app.component
  @Output() submitted = new EventEmitter<string>();//event que va a ser triggered por el component

  onInput(e: EventTarget){
    const value:string = (e as HTMLInputElement).value;
    this.term = value;
  }

  onFormSubmit(){
    this.submitted.emit(this.term);//se esta enviando la informacin al parent
  }

  constructor() { }

  ngOnInit(): void {
  }

}
