Proposal Threshold
------------------

The minimum number of votes required for an account to create a proposal. This can be changed through governance.

#### BTRUST Governor Alpha

```
function proposalThreshold() returns (uint)
```

-   RETURN: The minimum number of votes required for an account to create a proposal.

#### Solidity

```
GovernorAlpha gov = GovernorAlpha(0x123...); // contract address
uint threshold = gov.proposalThreshold();
```

#### Web3 1.2.6

```
const threshold = await gov.methods.proposalThreshold().call();
```