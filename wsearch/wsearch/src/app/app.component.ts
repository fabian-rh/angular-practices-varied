import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pagesAppComponent:any=[];
  constructor(private wikipedia: WikipediaService){}

  onTerm(term:string){//esta es la variable que es emitted desde el child component
    this.wikipedia.search(term).subscribe(pagesAppComponent => {
      this.pagesAppComponent = pagesAppComponent;
    }

    )
    
  }
}

