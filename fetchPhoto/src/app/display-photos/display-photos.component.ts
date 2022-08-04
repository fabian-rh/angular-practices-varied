import { Component, OnInit } from '@angular/core';
import { RandomPhotoService } from '../random-photo.service';

@Component({
  selector: 'app-display-photos',
  templateUrl: './display-photos.component.html',
  styleUrls: ['./display-photos.component.css']
})
export class DisplayPhotosComponent implements OnInit {

  photoUrl:string = '';

  constructor(private randomPhotoService:RandomPhotoService) { 
    this.photoHelper();
  }

  ngOnInit(): void {
  }

  public renewPhoto(){
    this.photoHelper();
  }
  
  private photoHelper(){
    this.randomPhotoService.getRandomPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
    });
  }

}
