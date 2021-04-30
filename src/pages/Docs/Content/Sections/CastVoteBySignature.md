Cast Vote By Signature
----------------------

Cast a vote on a proposal. The account's voting weight is determined by the number of votes the account had delegated at the time that proposal state became active. This method has the same purpose as Cast Vote but it instead enables offline signatures to participate in Btrust governance voting. For more details on how to create an offline signature, review [EIP-712](https://eips.ethereum.org/EIPS/eip-712).

#### GovernorAlpha

```
function castVoteBySig(uint proposalId, uint8 support, uint8 v, bytes32 r, bytes32 s)
```

-   proposalId: ID of a proposal in which to cast a vote.
-   support: An integer of 0 for against, 1 for in-favor, and 2 for abstain.
-   v: The recovery byte of the signature.
-   r: Half of the ECDSA signature pair.
-   s: Half of the ECDSA signature pair.
-   RETURN: No return, reverts on error.

#### Solidity

```
GovernorAlpha gov = GovernorAlpha(0x123...); // contract address
gov.castVoteBySig(proposalId, 0, v, r, s);
```

#### Web3 1.2.6

```
const tx = await gov.methods.castVoteBySig(proposalId, 1, v, r, s).send({});
```