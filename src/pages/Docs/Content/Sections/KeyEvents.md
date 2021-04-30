Key Events
----------

| Event | Description |
| --- | --- |
|DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate)| An event thats emitted when an account changes its delegate.|
|DelegateVotesChanged(address indexed delegate, uint previousBalance, uint newBalance)| An event thats emitted when a delegate account's vote balance changes.|
|ProposalCreated(uint id, address proposer, address[] targets, uint[] values, string[] signatures, bytes[] calldatas, uint startBlock, uint endBlock, string description)| An event emitted when a new proposal is created.|
|VoteCast(address voter, uint proposalId, bool support, uint votes)| An event emitted when a vote has been cast on a proposal.|
|ProposalCanceled(uint id)| An event emitted when a proposal has been canceled.|
|ProposalQueued(uint id, uint eta)| An event emitted when a proposal has been queued in the Timelock.|
|ProposalExecuted(uint id)| An event emitted when a proposal has been executed in the Timelock. |