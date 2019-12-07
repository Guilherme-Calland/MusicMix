const io = require('socket.io')(3005)

const users = {}

io.on('connection', socket => {
  socket.on('novo_usuario', name => {
    users[socket.id] = name
    socket.broadcast.emit('usuario_conectado', name)
  })
  socket.on('envia_mensagem', message => {
    socket.broadcast.emit('mensagem_chat', { message: message, name: users[socket.id] })
  })
  socket.on('disconnect', () => {
    socket.broadcast.emit('usuario_desconectado', users[socket.id])
    delete users[socket.id]
  })
})