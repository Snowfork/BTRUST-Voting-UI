Delegate
--------

Delegate votes from the sender to the delegatee. Users can delegate to 1 address at a time, and the number of votes added to the delegatee's vote count is equivalent to the balance of COMP in the user's account. Votes are delegated from the current block and onward, until the sender delegates again, or transfers their BTRUST.

#### BTRUST

```
function delegate(address delegatee)
```

-   delegatee: The address in which the sender wishes to delegate their votes to.
-   msg.sender: The address of the BTRUST token holder that is attempting to delegate their votes.
-   RETURN: No return, reverts on error.

#### Solidity

```
BTRUST btrust = BTRUST(0x123...); // contract address
btrust.delegate(delegateeAddress);
```

#### Web3 1.2.6

```
const tx = await btrust.methods.delegate(delegateeAddress).send({ from: sender });
```