import { Message } from '../common/message';

export class LogMessages {

  messages: Message[] = [];

  logThis(message: Message): Message {
      var result = new Message();
      result.copyFrom(message);
      this.messages.push(result);
      return result;
  }

  getChat(): Message[] {
    return this.messages;
  }

}
