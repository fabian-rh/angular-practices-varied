import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [ //Array de objetos con el nombre de posts
    {
      title : 'Neat Tree',
      imageUrl : 'assets/tree.jpeg',
      username: 'treelover',
      content: 'I saw this neat tree today'
    },
    {
      title : 'Snowy Mountain',
      imageUrl : 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Mountain Goat'
    },
    {
      title : 'Mountain Biking',
      imageUrl : 'assets/biking.jpeg',
      username: 'biking4ever',
      content: 'Ride the bycicle'
    },
    {
      title : 'Mountain Biking',
      imageUrl : 'assets/biking.jpeg',
      username: 'biking4ever',
      content: 'Ride the bycicle'
    }


  ]


}
