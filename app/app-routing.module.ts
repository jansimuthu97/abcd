import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { FirstGuard } from './first.guard';
import { RegisterGuard } from './register.guard';
import { LoginGuard } from './login.guard';
import { AboutComponent } from './about/about.component';
import { CAppComponent } from './c-app/c-app.component';
const routes: Routes = [
  {path:"first",component:FirstComponent,canActivate:[LoginGuard]},
  {path:"register",component:RegisterComponent,canActivate:[ RegisterGuard]},
  {path:"start",component:StartComponent,canActivate:[FirstGuard],children:[
    {path:"about",component:AboutComponent},
    {path:"c-app",component:CAppComponent}

]},

  {path:"",component:StartComponent,canActivate:[FirstGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){

  }

}
