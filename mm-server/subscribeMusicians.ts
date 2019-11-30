import { Musician } from '../common/musician';

export class SubscribeMusicians {
  musicians: Musician[] = [];

  subscribeThis(musician: Musician): Musician {
    var result = null;
    if (this.UsernameNotSubscribed(musician.username)) {
      result = new Musician();
      result.copyFrom(musician);
      this.musicians.push(result);
    }
    return result;
  }

  returnSubbedUser(musician: Musician): Musician {
    var subbedMusician = this.getSubbedMusician(musician.username);
    if(subbedMusician){
      if(this.wrongPassword(musician.password, subbedMusician.password)){
        subbedMusician = null;
      }
    }
    return subbedMusician;
  }

  UsernameNotSubscribed(username: string): boolean {
    return !this.musicians.find(a => a.username == username);
  }

  getSubbedMusician(username: string): Musician {
    return this.musicians.find(a => a.username == username);
  }

  wrongPassword(password1: string, password2: string): boolean{
    return (password1 != password2);
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

