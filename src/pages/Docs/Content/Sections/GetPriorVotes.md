Gets the prior number of votes for an account at a specific block number. The block number passed must be a finalized block or the function will revert.

#### BTRUST

```
function getPriorVotes(address account, uint blockNumber) returns (uint96)
```

-   account: Address of the account in which to retrieve the prior number of votes.
-   blockNumber: The block number at which to retrieve the prior number of votes.
-   RETURN: The number of prior votes.

#### Solidity

```
BTRUST btrust = BTRUST(0x123...); // contract address
uint priorVotes = btrust.getPriorVotes(account, blockNumber);
```

#### Web3 1.2.6

```
const priorVotes = await btrust.methods.getPriorVotes(account, blockNumber).call();
```