import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*'
    })
  }

  apiURL = 'https://nancyb3a.github.io/Test/usuarios_PGY4121_04.json'
 
  constructor(private HttpClient: HttpClient) { }

  getUsuarios():Observable<any>{
    return this.HttpClient.get(this.apiURL).pipe(
      retry(3)
    );
  }
}
