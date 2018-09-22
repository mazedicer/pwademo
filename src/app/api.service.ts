import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//item interface
export interface Item{
  name:string;
  description:string;
  url:string;
  html:string;
  markdown:string;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
private data_url:string="https://www.techiediaries.com/api/data.json";
  constructor(private http_client:HttpClient) { }
  fetch():Observable<Item[]>{
    return <Observable<Item[]>>this.http_client.get(this.data_url);
  }
}
