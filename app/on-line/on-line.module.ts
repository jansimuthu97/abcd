import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnLineComponent } from './on-line.component';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
const rou:Route[]=[]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rou)
  ],
  exports:[
    OnLineModule,RouterModule
  ],
  declarations: [OnLineComponent]
})
export class OnLineModule { 
  constructor(){

  }
}
