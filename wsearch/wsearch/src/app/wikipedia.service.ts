import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

// interface Car{
//   year: number;
//   color: string;
//   running: boolean;
//   make:{
//     name: string;
//     dateCreated: number;
//   }
// }


// const observable = new Observable<Car>((observer) => {//Observable es un generic <>
//   observer.next({
//     year:2000,
//     color:'red',
//     running: true,
//     make:{
//       name:'Chevy',
//       dateCreated: 1950
//     }
//   });
// }).pipe( //rxjs se utiliza pipe para manipular los datos
//   pluck('make', 'name')
// );

// observable.subscribe(value => {
//   console.log(value);
// })

interface WikipediaResponse{
  query:{
    search:{
      title: string;
      snippet: string;
      pageid: number;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http:HttpClient) { }//Dependency Injection

  pUrl:string = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space';

  public search(term:string){//term viene desde app.component, 
    console.log("search desde search-bar.component")
  
    return this.http.get<WikipediaResponse>(this.pUrl,{//Se toma el valor y se pasa al tipo de la interface
      params:{
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    }).pipe(
      pluck('query', 'search')
    )
  }
}


'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space'