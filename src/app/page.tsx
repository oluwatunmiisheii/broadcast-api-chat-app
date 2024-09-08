'use client'

import { Card } from '@/components/ui/card'
import { useEffect, useState } from 'react'
import NamePrompt from './_components/name-prompt'
import ChatBox from './_components/chat-box'
import MessageInput from './_components/message-form'
import ParticipantsList from './_components/participants-list'
import { Show } from 'react-smart-conditional'

const CHANNEL_NAME = 'chat-channel'

export default function Home() {
  const [name, setName] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [messages, setMessages] = useState<{ name: string; text: string }[]>([])
  const [channel, setChannel] = useState<BroadcastChannel | null>(null)
  const [showNamePrompt, setShowNamePrompt] = useState<boolean>(true)
  const [participants, setParticipants] = useState<string[]>([])

  useEffect(() => {
    if ('BroadcastChannel' in window) {
      const newChannel = new BroadcastChannel(CHANNEL_NAME)
      setChannel(newChannel)

      newChannel.onmessage = (event: MessageEvent) => {
        if (typeof event.data === 'object' && event.data !== null) {
          const senderName = event.data.name

          if (event.data.text) {
            setMessages((prevMessages) => [...prevMessages, event.data])
          }

          if (senderName && !participants.includes(senderName)) {
            setParticipants((prevParticipants) => [...prevParticipants, senderName])
          }
        }
      }

      return () => {
        newChannel.close()
      }
    } else {
      console.log('Broadcast Channel API is not supported in this browser.')
    }
  }, [participants])

  const handleSendMessage = () => {
    if (channel && message.trim() && name.trim()) {
      const messageObject = { name, text: message }
      channel.postMessage(messageObject)
      setMessages((prevMessages) => [...prevMessages, messageObject])
      setMessage('')
    }
  }

  const handleNameSubmit = () => {
    if (name.trim()) {
      setShowNamePrompt(false)

      // Broadcast the name as soon as it's submitted
      if (channel) {
        channel.postMessage({ name })

        // Also update the local participants list immediately
        if (!participants.includes(name)) {
          setParticipants((prevParticipants) => [...prevParticipants, name])
        }
      }
    }
  }

  return (
    <Show
      as="main"
      className="flex min-h-screen flex-col items-center justify-between p-24 h-screen bg-gray-100"
    >
      <Show.If condition={showNamePrompt} as={Card} className="p-8 max-w-sm w-full">
        <NamePrompt name={name} setName={setName} handleNameSubmit={handleNameSubmit} />
      </Show.If>
      <Show.Else as={Card} className="flex flex-col p-0 h-full max-w-xl w-full">
        <div className="border-b border-gray-200 p-4">
          <h2 className="text-xl font-semibold">Chat Application</h2>
          <ParticipantsList participants={participants} currentUserName={name} />
        </div>
        <div className="flex-1 overflow-hidden flex flex-col">
          <ChatBox messages={messages} currentUserName={name} />
          <MessageInput
            message={message}
            setMessage={setMessage}
            handleSendMessage={handleSendMessage}
          />
        </div>
      </Show.Else>
    </Show>
  )
}
