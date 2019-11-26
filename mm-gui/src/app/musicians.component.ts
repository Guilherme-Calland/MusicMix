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

    enterProfile(musician: Musician): void{
    
      
      this.invalidlogin = this.usernameNotSubscribed(musician.username);

      if(this.invalidlogin) return;

      var mus = this.getMusicianFromMusicians(musician.username);

      if(/*this.validPassword(mus.password)*/true){
        window.location.replace('/perfil');
      }
    }

    usernameNotSubscribed(username: string): boolean {
      if(!this.musicians.find(a => a.username == username)){
        return true;
      }
      else return false;
    }

    validPassword(password: string): boolean {
      if(this.musician.password == password) return true;
      else return false;
      
    }

    getMusicianFromMusicians(username: string): Musician {
      var i;
      for(i = 0; i < this.musicians.length; i++){
        if (this.musicians[i].username == username){
          return this.musician[i];
        } 
      }
      return null;
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
