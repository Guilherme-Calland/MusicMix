import { Component, OnInit} from '@angular/core';
import { NgModule } from '@angular/core';
import { MusicianService } from './musician.service';
import { LoginComponent } from './login.component';
import { Musician } from '../../../common/musician';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  musicians: Musician[];
  musician: Musician;

  constructor(private musicianService: MusicianService) {}

  updateMusician(musician: Musician): void {
    this.musicianService.update(musician).subscribe(
       (a) => { if (a == null) alert("musician not found :("); },
       (msg) => { alert(msg.message); }
    );
  }



  ngOnInit(): void {

    this.musicianService.getMusicians()
    .subscribe(
       (ms) =>  { this.musicians = ms; },
       (msg) => { alert(msg.message); }
    );

    this.musicianService.getLoggedMusician()
    .subscribe(
      (m) => {this.musician = m; },
      (msg) => { alert(msg.message); }
    );
    
  }
}