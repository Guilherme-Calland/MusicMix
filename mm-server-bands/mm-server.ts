// se der problema no servidor denovo, lembre de 
// excluir os node modules e o compiled code antes 
// de testar novamente

import express = require('express');
import bodyParser = require("body-parser");

import {Bands} from '../common/band';
import {SubscribeBands} from './subscribeBands';

var mmserver = express();

var subscription: SubscribeBands = new SubscribeBands();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
mmserver.use(allowCrossDomain);

mmserver.use(bodyParser.json());

mmserver.get('/bands', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(subscription.getBands()));
})

mmserver.post('/band', function (req: express.Request, res: express.Response) {
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
    res.send(JSON.stringify(subscription.getBand()));
  }

  
  //
})

mmserver.put('/musician', function (req: express.Request, res: express.Response) {
  var musician: Musician = <Musician> req.body;
  musician = subscription.update(musician);
  if (musician) {
    res.send({"success": "O musico foi atualizado com sucesso"});
  } else {
    res.send({"failure": "O musico não pode ser atualizado"});
  }
})

mmserver.listen(3002, function () {
  console.log('Musicians Server listening on port 3000!')
})

