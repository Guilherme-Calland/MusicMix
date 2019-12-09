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
  
  clone(): Message {
    var message: Message = new Message();
    message.copyFrom(this);
    return message;
  }

  copyFrom(from: Message): void {
    this.sender = from.sender;
    this.text = from.text;
  }
      
}