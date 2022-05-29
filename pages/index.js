import { useEffect } from 'react'
import { io } from 'socket.io-client'
let socket

export default function Home() {
  useEffect(() => socketInitialiser(), [])
  async function socketInitialiser() {
    await fetch('/api/sockets')
    socket = io()
    socket.on('connect', () => {
      console.log('connected')
    })
  }
  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}
