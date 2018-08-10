import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';
import { CardComponent } from './card/card.component';
import { FrontentComponent } from './frontent/frontent.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CardComponent,
    FrontentComponent
  ],
  imports: [
    BrowserModule,
      HttpModule,
      AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
