import { Server } from 'socket.io'

export default function socket(req, res) {
  if (res.socket.server.io) console.log('server running')
  else {
    console.log('initialising')
    const io = new Server(res.socket.server)
    res.socket.server.io = io
  }
  res.end()
}
