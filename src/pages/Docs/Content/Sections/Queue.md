Queue
-----

After a proposal has succeeded, any address can call the queue method to move the proposal into the Timelock queue. A proposal can only be queued if it has succeeded.

#### GovernorAlpha

```
function queue(uint proposalId)
```

-   proposalId: ID of a proposal that has succeeded.
-   RETURN: No return, reverts on error.

#### Solidity

```
GovernorAlpha gov = GovernorAlpha(0x123...); // contract address
gov.queue(proposalId);
```

#### Web3 1.2.6

```
const tx = gov.methods.queue(proposalId).send({ from: sender });
```
