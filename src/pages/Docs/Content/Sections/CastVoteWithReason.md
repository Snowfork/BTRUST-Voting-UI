Cast Vote With Reason
---------------------

Cast a vote on a proposal with a reason attached to the vote.

#### GovernorAlpha

```
function castVoteWithReason(uint proposalId, uint8 support, string calldata reason)
```

-   proposalId: ID of a proposal in which to cast a vote.
-   support: An integer of 0 for against, 1 for in-favor, and 2 for abstain.
-   reason: A string containing the voter's reason for their vote selection.
-   RETURN: No return, reverts on error.

#### Solidity

```
GovernorAlpha gov = GovernorAlpha(0x123...); // contract address
gov.castVoteWithReason(proposalId, 2, "I think...");
```

#### Web3 1.2.6

```
const tx = gov.methods.castVoteWithReason(proposalId, 0, "I think...").send({ from: sender });
```