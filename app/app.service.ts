import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { registerContentQuery } from '@angular/core/src/render3';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
  host="http://localhost:3000/"
  regis(a):Observable<object>
  {
    console.log(a);
return this.http.post(this.host+"posts",a)
  }
  email(a)
  {
    return this.http.get(this.host+"posts/?remail="+a)
  }

}
