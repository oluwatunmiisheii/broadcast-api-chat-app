import React from 'react'
import { cn } from '@/lib/utils'

interface Message {
  name: string
  text: string
}

interface ChatBoxProps {
  messages: Message[]
  currentUserName: string
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages, currentUserName }) => {
  return (
    <div className="chat-box flex-1 overflow-y-auto p-4 mb-4 space-y-3">
      {messages.map((msg, index) => {
        const isCurrentUser = msg.name === currentUserName
        return (
          <div key={index} className={cn('flex', isCurrentUser ? 'justify-end' : 'justify-start')}>
            <div
              className={cn(
                'max-w-xs px-4 py-2 rounded-lg',
                isCurrentUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900',
              )}
            >
              <strong className="block text-sm mb-1">{isCurrentUser ? 'You' : msg.name}</strong>
              <span>{msg.text}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ChatBox
