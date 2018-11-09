import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private as:AppService,private ar:Router) { }

  ngOnInit() {
  }
  obj={
    "rdob":"",
    "rname":"",
    "rgender":"",
    "remail":"",
    "rmbl":"",
    "rdept":"",
    "rpercentage":"",
    "rbacklog":"",
    "rpwd":""
  }
  em=false;
  node;
  register(a)
  {
    this.as.email(a.remail).subscribe((data)=> 
        {this.node=data;
        console.log(this.node);
        })
    if(this.node){
       this.as.regis(a).subscribe((data)=>{
        alert("successfully registered")
        this.ar.navigate(['first']);
         })
    }
  else{
  this.em=true
  alert("This email id is already exists in our database so try with another email id to registered with us")
   }
  
  }
 


}
