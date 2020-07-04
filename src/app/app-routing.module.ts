import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { PageLayoutComponent } from './core/layout/page-layout/page-layout.component';


// tslint:disable-next-line:max-line-length
const routes: Routes = [
  {path:'login',component:LoginComponent},
  { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
    { path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule) },
     { path: 'tasks', loadChildren: () => import('./modules/tasks/tasks.module').then(m => m.TasksModule) }, 
     { path: 'statistics', loadChildren: () => import('./modules/statiscs/statiscs.module').then(m => m.StatiscsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
