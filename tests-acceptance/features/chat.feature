Feature: As a musician
         I want to chat with other musicians
         So that I can be a part of the community
Scenario 1 Enviar mensagem :
Given eu estou na página de chat
When  eu seleciono o campo de mensagem
And clico em “enviar mensagem”
Then eu estou na página de chat
And eu vejo as mensagens enviadas e recebidas

Scenario 2 Erro ao enviar mensagem :
Given eu estou na página de chat
And eu não tenho conexão a internet
When eu seleciono o campo de mensagem
And clico em “enviar mensagem”
Then eu estou na página de chat
And o sistema retorna uma mensagem de erro


Scenario 3 Receber mensagem :
Given eu estou na página de login
When  eu seleciono a pagina de chat
Then eu estou na página de chat
And eu vejo as mensagens enviadas e recebidas

Scenario 4 Atualizar messageboard :
Given eu estou na pagina de chat
When eu envio uma mensagem
Then a pagina é a atualizada
And eu consigo ver as novas mensagens enviadas e recebidas