import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class TestDbService {


  private readonly URL = 'https://seventeenminds-47e7.restdb.io/rest/posts';

  constructor(private http: HttpClient) { }

    // create a method named: resolveItems()
    // this method returns list-of-items in form of Observable
    // every HTTTP call returns Observable object
    
  resolveItems(): Observable<any> {

    console.log('Request is sent!');

    const headers =  {
      headers: new  HttpHeaders({ 
        // 'x-apikey':'9234ad6ee28b77eece79febf62993722479a1'})
        'x-apikey':'5f51380bc5e01c1e033b8c07'})
    };
     
    // this.http is a HttpClient library provide by @angular/common
    // we are calling .get() method over this.http object
    // this .get() method takes URL to call API

    return this.http.get(this.URL, headers);
    // return this.http.get(this.URL, );

  }
}