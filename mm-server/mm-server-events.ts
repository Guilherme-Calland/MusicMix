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

mmserver.post('/event', function (req: express.Request, res: express.Response) {
var response = req.body;
    if(response[0]=="create"){
    response = subscription.subscribeThis(response[1]);
    }
    if (response) {
    res.send({"success": "O evento foi cadastrado com sucesso"});
    } else {
    res.send({"failure": "O evento não pode ser cadastrado"});
    }
})