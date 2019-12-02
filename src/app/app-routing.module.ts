/**
 * 20191201 init and added routes
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from '../app/dashbord/dashbord.component'; 
import { LandingComponent} from '../app/landing/landing.component';
import { BookTableComponent} from '../app/book-table/book-table.component';
import { CustomDivComponent } from './custom-div/custom-div.component';
 
const routes: Routes = [
    {
        path: 'dashboard',
        component: DashbordComponent,
        children: [
          {
            path : '',
            redirectTo : 'books',
            pathMatch : 'full'
          },
          { path : 'books',
            component : BookTableComponent // child component of dashboard
          },
          {
            path : 'custom-div',
            component : CustomDivComponent// child component of dashboard
          }
        ]  
    },
    {
      path: 'landing',
      component: LandingComponent
    },
    {
      path: '',
      component: LandingComponent
    },
    {
      path : 'custom-div',
      component: CustomDivComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashbordComponent,BookTableComponent] //defining a new array with routing components to avoid the duplication of imports in app.routing.module and app.module