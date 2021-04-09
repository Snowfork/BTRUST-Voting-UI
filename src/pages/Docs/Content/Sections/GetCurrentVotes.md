Get Current Votes
-----------------

Gets the balance of votes for an account as of the current block.

#### BTRUST

```
function getCurrentVotes(address account) returns (uint96)
```

-   account: Address of the account in which to retrieve the number of votes.
-   RETURN: The number of votes (integer).

#### Solidity

```
BTRUST btrust = BTRUST(0x123...); // contract address
uint votes = btrust.getCurrentVotes(0xabc...);
```

#### Web3 1.2.6

```
const account = '0x123...'; // contract address
const votes = await btrust.methods.getCurrentVotes(account).call();
```