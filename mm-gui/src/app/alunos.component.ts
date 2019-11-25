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
    duplicatedemail: boolean = false;

    constructor(private musicianService: MusicianService) {}

     criarMusician(a: Musician): void {
       this.musicianService.create(a)
              .subscribe(
                ar => {
                  if (ar) {
                    this.musicians.push(ar);
                    this.musician = new Musician();
                  } else {
                    this.duplicatedemail = true;
                  } 
                },
                msg => { alert(msg.message); }
              );
    } 

    onMove(): void {
       this.duplicatedemail = false;
    }

     ngOnInit(): void {
       this.musicianService.getMusicians()
             .subscribe(
               as => { this.musicians = as; },
               msg => { alert(msg.message); }
              );
     }

  }
