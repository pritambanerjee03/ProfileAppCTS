import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './parent/profile/profile.component';
import { HomeComponent } from './parent/home/home.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:'',redirectTo:'/parent/profile',pathMatch:'full'},
  {
    path: 'parent', component: ParentComponent,
    children: [
      {path:'profile',component:ProfileComponent},
      {path:'home',component:HomeComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
