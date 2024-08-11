import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

interface MessageInputProps {
  message: string
  setMessage: (message: string) => void
  handleSendMessage: () => void
}

const MessageInput: React.FC<MessageInputProps> = ({ message, setMessage, handleSendMessage }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSendMessage()
      }}
      className="flex flex-col space-y-2 p-4 border-t border-gray-200"
    >
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="w-full"
      />
      <Button onClick={handleSendMessage} className="w-full">
        Send
      </Button>
    </form>
  )
}

export default MessageInput
