import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalRedirectComponent } from '@azure/msal-angular';

const routes: Routes = [
  // your routes here...
  {
    path: 'auth',
    component: MsalRedirectComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
