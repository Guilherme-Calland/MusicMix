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
    wrongpassword: boolean = false;


    constructor(private musicianService: MusicianService) {}

     createMusician(a: Musician): void {
       this.musicianService.create(a)
              .subscribe(
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

    enterProfile(a: Musician): void{
      var newUrl = '/perfil';
      if(!this.wrongpassword){
        window.location.replace(newUrl);
      }
    }


    onMove(): void {
       this.duplicatedusername = false;
       this.wrongpassword = false;
    }

     ngOnInit(): void {
       this.musicianService.getMusicians()
             .subscribe(
               as => { this.musicians = as; },
               msg => { alert(msg.message); }
              );
     }



  }
