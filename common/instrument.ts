export class Instrument{
    public name: String;

    constructor() {
        this.clean();
    }
    
    clean(): void {
        this.name = "";
    }
}