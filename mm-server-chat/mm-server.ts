import express = require('express');
import bodyParser = require("body-parser");

import {Message} from '../common/message';
import {LogMessages} from './logMessages';

var mmserver = express();

var messageLog: LogMessages = new LogMessages();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
mmserver.use(allowCrossDomain);

mmserver.use(bodyParser.json());

mmserver.post('/chat', function (req: express.Request, res: express.Response) {
  var response = req.body;
  
    response = messageLog.logThis(response[1]);

    if (response) {
      res.send({"success": "sucesso"});
    } else {
      res.send({"failure": "fracasso"});
    }
})

mmserver.get('/chat', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(messageLog.getChat()));
})

mmserver.listen(3002, function () { //warning
  console.log('Chat Server listening on port 3002!')
})

