import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  checkWindowIndex(value:number){
    return Math.abs(this.currentPage - value) < 5;
  }

  currentPage = 0; //what page the user is currently looking at
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'At the Mountain',
      url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'At the Church',
      url: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2h1cmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'At the Mountain',
      url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'At the Church',
      url: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2h1cmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'At the Mountain',
      url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'At the Church',
      url: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2h1cmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60'
    }
  ];
}
