import { Musician } from '../common/musician';

export class SubscribeMusicians {
   musicians: Musician[] = [];

    subscribe(musician: Musician): Musician {
     var result = null;
     if (this.UsernameNotSubscribed(musician.username)) {
       result = new Musician();
       result.copyFrom(musician);
       this.musicians.push(result);
     }
     return result;
   }

    UsernameNotSubscribed(username: string): boolean {
      return !this.musicians.find(a => a.username == username);
   }

    update(musician: Musician): Musician {
     var result: Musician = this.musicians.find(a => a.username == musician.username);
     if (result) result.copyFrom(musician);
     return result;
   }

    getMusicians(): Musician[] {
     return this.musicians;
   }
}

