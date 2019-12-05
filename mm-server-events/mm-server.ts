// se der problema no servidor denovo, lembre de 
// excluir os node modules e o compiled code antes 
// de testar novamente

import express = require('express');
import bodyParser = require("body-parser");

import {Event} from '../common/event';
import {SubscribeEvents} from './subscribeEvents';

var mmserver = express();

var subscription: SubscribeEvents = new SubscribeEvents();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
mmserver.use(allowCrossDomain);

mmserver.use(bodyParser.json());

mmserver.get('/events', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(subscription.getEvents()));
})

mmserver.post('/event', function (req: express.Request, res: express.Response) {
  var response = req.body;
  
  if( (response[0] == "create") || (response[0] == "check") ){
    if(response[0]=="create"){
      response = subscription.subscribeThis(response[1]);
    } else if (response[0]=="check"){
      response = subscription.returnSubbedUser(response[1]);
    }

    if (response) {
      res.send({"success": "O musico foi cadastrado com sucesso"});
    } else {
      res.send({"failure": "O musico não pode ser cadastrado"});
    }
  } else if (response[0] == "get"){
    res.send(JSON.stringify(subscription.getEvent()));
  }
})

mmserver.put('/event', function (req: express.Request, res: express.Response) {
  var event: Event = <Event> req.body;
  event = subscription.update(event);
  if (event) {
    res.send({"success": "O musico foi atualizado com sucesso"});
  } else {
    res.send({"failure": "O musico não pode ser atualizado"});
  }
})

mmserver.listen(3000, function () { //warning
  console.log('Example app listening on port 3000!')
})

