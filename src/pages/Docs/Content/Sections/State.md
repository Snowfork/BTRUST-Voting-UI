State
-----

Gets the proposal state for the specified proposal. The return value, ProposalState is an enumerated type defined in the GovernorAlpha contract.

#### GovernorAlpha

```
function state(uint proposalId) returns (ProposalState)
```

-   proposalId: ID of a proposal in which to get its state.
-   RETURN: Enumerated type ProposalState. The types are Pending, Active, Canceled, Defeated, Succeeded, Queued, Expired, andExecuted.

#### Solidity

```
GovernorAlpha gov = GovernorAlpha(0x123...); // contract address
GovernorAlpha.ProposalState state = gov.state(123);
```

#### Web3 1.2.6

```
const proposalStates = ['Pending', 'Active', 'Canceled', 'Defeated', 'Succeeded', 'Queued', 'Expired', 'Executed'];
const proposalId = 123;
result = await gov.methods.state(proposalId).call();
const proposalState = proposalStates[result];
```