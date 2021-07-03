# BTRUST-Voting-UI
This repo contains frontend UI for a web interface to the BTRUST Governance Contracts. The contract code and guides/scripts for creating and cancelling proposals is [here](https://github.com/Snowfork/BTRUST-Contracts).

## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"` 

Note that the interface currently only works where BTRUST and BTRUST Governane contracts are deployed on Ropstein network

## Contributions

**Please open all pull requests against the `staging` branch.**
