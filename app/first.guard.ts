import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';

@Injectable({
  providedIn: 'root'
})
export class FirstGuard implements CanActivate {
  constructor(private ar:Router){
    
   }
  check=false;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(localStorage.getItem("log")){
      return true
    }
    else{
      this.ar.navigate(['first']);
      return false
    }
  }
}
