import {Musician} from './musician';

export class Band{
    public name: String;
    public style: String;
    public members: Musician[];

    constructor(name: String){
        this.name = name;
    }
}