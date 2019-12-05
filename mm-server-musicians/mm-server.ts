// se der problema no servidor denovo, lembre de 
// excluir os node modules e o compiled code antes 
// de testar novamente

import express = require('express');
import bodyParser = require("body-parser");

import {Musician} from '../common/musician';
import {SubscribeMusicians} from './subscribeMusicians';

var mmserver = express();

var subscription: SubscribeMusicians = new SubscribeMusicians();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
mmserver.use(allowCrossDomain);

mmserver.use(bodyParser.json());

mmserver.get('/musicians', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(subscription.getMusicians()));
})

mmserver.post('/musician', function (req: express.Request, res: express.Response) {
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
    res.send(JSON.stringify(subscription.getMusician()));
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

mmserver.listen(3000, function () {
  console.log('Musicians Server listening on port 3000!')
})

