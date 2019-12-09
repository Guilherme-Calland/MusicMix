export class Message {
    sender: string;
    text: string;

  constructor(){
    this.clean();
  }

  clean(): void {
    this.sender = "";
    this.text= "";
  }   
}