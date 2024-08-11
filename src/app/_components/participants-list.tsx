import React from 'react'

interface ParticipantsListProps {
  participants: string[]
  currentUserName: string
}

const ParticipantsList: React.FC<ParticipantsListProps> = ({ participants, currentUserName }) => {
  const formatParticipant = participants
    .map((p) => {
      return p === currentUserName ? 'You' : p
    })
    .join(', ')

  return (
    <p className="text-gray-500 text-sm">
      {participants.length} participant{participants.length === 1 ? '' : 's'}: {formatParticipant}
    </p>
  )
}

export default ParticipantsList
