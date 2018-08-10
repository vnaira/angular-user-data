import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { UserComponent } from './user/user.component';
import {FrontentComponent} from './frontent/frontent.component';

const routes: Routes = [
    {path: 'card', component: CardComponent },
    {path: 'users', component: FrontentComponent },
    // {path: '', redirectTo: '/users' , pathMatch: 'full' }
];

@NgModule({
  imports: [
      RouterModule.forRoot( routes )
  ],
    exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
