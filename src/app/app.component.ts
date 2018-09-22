import { Component,OnInit } from '@angular/core';
import { ApiService,Item } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwademo';
  items:Array<Item>;
  constructor(private api_service:ApiService){}
  ngOnInit(){
    this.fetchData();
  }
  fetchData(){
    this.api_service.fetch()
    .subscribe(
      (data: Array<Item>)=>{
        console.log(data);
        this.items=data;
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}
