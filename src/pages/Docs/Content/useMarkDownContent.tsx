import { useState, useEffect } from 'react'

import Introduction from './Sections/Introduction.md'
import BTRUST from './Sections/BTRUST.md'
import Delegate from './Sections/Delegate.md'
import DelegateBySignature from './Sections/DelegateBySignature.md'
import GetCurrentVotes from './Sections/GetCurrentVotes.md'
import GetPriorVotes from './Sections/GetPriorVotes.md'
import KeyEvents from './Sections/KeyEvents.md'
import GovernorAlpha from './Sections/GovernorAlpha.md'
import QuorumVotes from './Sections/QuorumVotes.md'
import ProposalThreshold from './Sections/ProposalThreshold.md'
import ProposalMaxOperations from './Sections/ProposalMaxOperations.md'
import VotingDelay from './Sections/VotingDelay.md'
import VotingPeriod from './Sections/VotingPeriod.md'
import Propose from './Sections/Propose.md'
import Queue from './Sections/Queue.md'
import Execute from './Sections/Execute.md'
import Cancel from './Sections/Cancel.md'
import GetActions from './Sections/GetActions.md'
import GetReceipt from './Sections/GetReceipt.md'
import State from './Sections/State.md'
import CastVote from './Sections/CastVote.md'
import CastVoteWithReason from './Sections/CastVoteWithReason.md'
import CastVoteBySignature from './Sections/CastVoteBySignature.md'
import Timelock from './Sections/Timelock.md'
//import PauseGuardian from './Sections/PauseGuardian.md'

export const ContentMarkup = [
  Introduction,
  BTRUST,
  Delegate,
  DelegateBySignature,
  GetCurrentVotes,
  GetPriorVotes,
  KeyEvents,
  GovernorAlpha,
  QuorumVotes,
  ProposalThreshold,
  ProposalMaxOperations,
  VotingDelay,
  VotingPeriod,
  Propose,
  Queue,
  Execute,
  Cancel,
  GetActions,
  GetReceipt,
  State,
  CastVote,
  CastVoteWithReason,
  CastVoteBySignature,
  Timelock
]

export function useMarkDownContent() {
  const defaultState: string[] = []
  const [content, setContent] = useState(defaultState)

  useEffect(() => {
    ContentMarkup.forEach(markup => {
      fetch(markup)
        .then(res => res.text())
        .then(text => setContent(content => [...content, text]))
    })
  }, [])
  return content

}