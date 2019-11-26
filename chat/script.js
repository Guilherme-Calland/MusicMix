const socket = io('http://localhost:3000')
const messageContainer = document.getElementById('modulo_mensagem')
const messageForm = document.getElementById('caixa_dialogo')
const messageInput = document.getElementById('mensagem')

const name = prompt('Qual seu nome?')
appendMessage(name +' Entrou no chat')
socket.emit('novo_usuario', name)

socket.on('mensagem_chat', data => {
  appendMessage(`${data.name}: ${data.message}`)
})

socket.on('usuario_conectado', name => {
  appendMessage(`${name} Entrou`)
})

socket.on('usuario_desconectado', name => {
  appendMessage(`${name} Saiu`)
})

messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value
  appendMessage(`Voce: ${message}`)
  socket.emit('envia_mensagem', message)
  messageInput.value = ''
})

function appendMessage(message) {
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.append(messageElement)
}