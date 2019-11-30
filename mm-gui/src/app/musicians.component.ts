import { Component, OnInit } from '@angular/core';
import { Musician } from '../../../common/musician';
import { MusicianService } from './musician.service';

  @Component({
   selector: 'app-root',
   templateUrl: './musicians.component.html',
   styleUrls: ['./musicians.component.css']
 })
 export class MusiciansComponent implements OnInit {

    musician: Musician = new Musician();
    musicians: Musician[] = [];
    duplicatedusername: boolean = false;
    invalidlogin: boolean = false;

    constructor(private musicianService: MusicianService) {}

  createMusician(m: Musician): void {
    this.musicianService.create(m).subscribe(
    ar => {
      if (ar) {
        this.musicians.push(ar);
        this.musician = new Musician();
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
          window.location.replace('/perfil');
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

  ngOnInit(): void {
    this.musicianService.getMusicians()
          .subscribe(
            as => { this.musicians = as; },
            msg => { alert(msg.message); }
          );
  }



}
