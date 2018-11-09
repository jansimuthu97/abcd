import { Component, OnInit } from '@angular/core';
import { shallowEqual } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { AppService } from '../app.service';



@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private ar:Router,private as:AppService) { }

  ngOnInit() {
  }
  save;
  mail;
  pwd;
  type="password"
  show()
  {
    this.type="password"?this.type="text":this.type="password"
  }
  register()
  {
    this.ar.navigate(['register']);
  }
  log(a,b){
    this.as.email(a).subscribe((data)=>{
      this.save=data;
    
      if(this.save[0].rpwd!=b)
      {
alert("Invalid Email Id or Password");
this.mail="";
this.pwd=""
      }
      else {
        localStorage.setItem("log","true");
        console.log(this.save[0].rpwd+"true");
        this.ar.navigate(['']);
        localStorage.setItem("log","true")
      }
    })

  }

}
