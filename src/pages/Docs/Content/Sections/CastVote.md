Cast Vote
---------

Cast a vote on a proposal. The account's voting weight is determined by the number of votes the account had delegated to it at the time the proposal state became active.

#### GovernorAlpha

```
function castVote(uint proposalId, uint8 support)
```

-   proposalId: ID of a proposal in which to cast a vote.
-   support: An integer of 0 for against, 1 for in-favor, and 2 for abstain.
-   RETURN: No return, reverts on error.

#### Solidity

```
GovernorAlpha gov = GovernorAlpha(0x123...); // contract address
gov.castVote(proposalId, 1);
```

#### Web3 1.2.6

```
const tx = gov.methods.castVote(proposalId, 0).send({ from: sender });
```