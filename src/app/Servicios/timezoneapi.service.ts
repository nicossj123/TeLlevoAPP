import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TimezoneapiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
  
  apiURL = "https://timezone.abstractapi.com/v1/current_time/?api_key=3beb78b14d5f40a38a117d2f0859e982&location=Quilpue, Chile"

  constructor(private HttpClient: HttpClient) { }

  getTimeZone():Observable<any>{
    return this.HttpClient.get(this.apiURL).pipe(
      retry(3)
    );
  }

}
