import { Musician } from '../common/musician';

export class SubscribeMusicians {
   musicians: Musician[] = [];

    subscribe(musician: Musician): Musician {
     var result = null;
     if (this.EmailNotSubscribed(musician.email)) {
       result = new Musician();
       result.copyFrom(musician);
       this.musicians.push(result);
     }
     return result;
   }

    EmailNotSubscribed(email: string): boolean {
      return !this.musicians.find(a => a.email == email);
   }

    update(musician: Musician): Musician {
     var result: Musician = this.musicians.find(a => a.email == musician.email);
     if (result) result.copyFrom(musician);
     return result;
   }

    getMusicians(): Musician[] {
     return this.musicians;
   }
}

