import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'

interface NamePromptProps {
  name: string
  setName: (name: string) => void
  handleNameSubmit: () => void
}

const NamePrompt: React.FC<NamePromptProps> = ({ name, setName, handleNameSubmit }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleNameSubmit()
      }}
    >
      <h2 className="text-lg font-semibold mb-4">Enter your name:</h2>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="mb-4"
      />
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  )
}

export default NamePrompt
