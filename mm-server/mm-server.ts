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
  var musician: Musician = <Musician> req.body; //verificar se é mesmo Musician!
  musician = subscription.subscribe(musician);
  if (musician) {
    res.send({"success": "O musician foi cadastrado com sucesso"});
  } else {
    res.send({"failure": "O musician não pode ser cadastrado"});
  }
})

mmserver.put('/musician', function (req: express.Request, res: express.Response) {
  var musician: Musician = <Musician> req.body;
  musician = subscription.update(musician);
  if (musician) {
    res.send({"success": "O musician foi atualizado com sucesso"});
  } else {
    res.send({"failure": "O musician não pode ser atualizado"});
  }
})

mmserver.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

