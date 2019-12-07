import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile.component';
import { MusicianService } from './musician.service';
import { LoginComponent } from './login.component';
import { EventService } from './event.service';
import { SearchComponent } from './search.component';
import { ChatService } from './chat.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot([
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'search',
        component: SearchComponent
      }
    ])
  ],
  providers: [MusicianService, EventService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
