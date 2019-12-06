import {Musician} from './musician';

export class Band{
    public name: String;
    public style: String;
    public dateCreation: String;
    public members: Musician[];

    constructor(){
        this.clean();
    }

    clean(): void {
        this.name = "";
        this.style="";
        this.dateCreation= "";
        this.members=[];
    }
    
    clone(): Band {
        var band: Band = new Band();
        band.copyFrom(this);
        return band;
    }
    
    copyFrom(from: Band): void {
        this.name = from.name;
        this.style=from.style;
        this.dateCreation = from.dateCreation;
        this.members = from.members;
    }
}