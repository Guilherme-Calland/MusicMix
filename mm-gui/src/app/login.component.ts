import { Component, OnInit } from '@angular/core';
import { Musician } from '../../../common/musician';
import { MusicianService } from './musician.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  musician: Musician = new Musician();
  musicians: Musician[] = [];
  duplicatedusername: boolean = false;
  invalidlogin: boolean = false;

  constructor(private musicianService: MusicianService) {}

  createMusician(m: Musician): void {
    this.musicianService.create(m).subscribe(
    ar => {
      if (ar) {
        this.enterProfile(m);
      } else {
        this.duplicatedusername = true;
      } 
    },
    msg => { alert(msg.message); }
    );
  } 


  enterProfile(m: Musician): void{
    this.musicianService.check(m).subscribe(
    ar => {
      if(ar) {
          window.location.replace('/profile');
        } else {
          this.invalidlogin = true;
        }
      }
    )
  }

  onMove(): void {
      this.duplicatedusername = false;
      this.invalidlogin = false;
  }
}
