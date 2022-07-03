// export default function handler(req, res) {}


import {Server} from 'Socket.IO'
import { io } from 'socket.io-client'

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    io.on('connection', socket => {
      socket.on('input-change', msg => {
        socket.broadcast.emit('update-input', msg)
      })
    })
  }


  res.end()
}

export default SocketHandler