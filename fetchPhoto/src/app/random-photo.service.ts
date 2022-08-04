import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashedResponse{
  urls:{
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})


// https://api.unsplash.com/
//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
//access key: vxpmKku49e3FW5CSINnX8hKfffyFHjRSbrkyx_-7Bzc
//secret key: mU2bv19tzz-eV__VtLSbBSkWIpUQmsgAVMCJpC5HRos


export class RandomPhotoService {
  pUrl:string = 'https://api.unsplash.com/photos/random'

  constructor(private http:HttpClient) { 
  }

  public getRandomPhoto(){
    return this.http.get<UnsplashedResponse>(this.pUrl, {
      headers:{
        Authorization: 'Client-ID vxpmKku49e3FW5CSINnX8hKfffyFHjRSbrkyx_-7Bzc'
      }
    })
  }
}
