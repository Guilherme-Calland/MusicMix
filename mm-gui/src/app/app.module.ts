import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil.component';
import { MusicianService } from './musician.service';
import { MusiciansComponent } from './musicians.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    MusiciansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot([
      {
        path: 'perfil',
        component: PerfilComponent
      },
      {
        path: 'musicians',
        component: MusiciansComponent
      }
    ])
  ],
  providers: [MusicianService],
  bootstrap: [MusiciansComponent]
})
export class AppModule { }
