export class Song{
    public name: String;

    constructor() {
        this.clean();
    }

    clean(): void {
        this.name = "";
    }
}