import { io } from 'socket.io-client';

// 單例模式
class Chat {
    constructor({
        token,
        state
    }) {
        this.token = token
        this.user
        this.state = state
        this.socket = null

        if (!Chat.instance) {
            Chat.instance = this
        }
        return Chat.instance
    }
    connectSocket() {
        this.socket = io(socketPath, {})
    }
    socketListeners() {
        this.socket.on('connect', () => {
            console.log('成功連接:', this.socket.id)
        })
        this.socket.on('disconnect', () => {
            console.log('斷開連線')
        })
        this.socket.on('connect_error', err => {
            console.log(err.message)
        })
        this.socket.on('msg', msg => {
            console.log(msg)
        })
    }
    send({msg, img}) {
        this.socket.emit('msg', msg)
    }
}

export default Chat