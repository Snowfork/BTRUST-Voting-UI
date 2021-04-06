// description of proposal and the changes it will enact
import { BTRUST_ADDRESS, GOVERNANCE_ADDRESS, TIMELOCK_ADDRESS, GOVERNANCE_DECISIONS_ADDRESS } from '../../constants'
//import { ExternalLink } from '../../theme'

export const BtrustInfo = `# 

BTRUST is the ERC20 Token that can be earned as a reward for contributing to the network and supporting your fellow community members!
Redeem tokens for special perks created exclusively for the Braintrust community. BTrust is also a Governance token which also allows you to vote on the future of the network with your tokens!

**BTRUST contract address:** ${BTRUST_ADDRESS} 

** BTRUST Token Allocation & Distribution**

* XX% of the BTRUST genesis supply is allocated to BTRUST Foundation, 
* a quarter of which (15% of total supply) has already been distributed to past users

1 billion BTRUST have been minted at genesis and will become accessible over the course of 4 years. The initial four year allocation is as follows:

60.00% to BTrust community members 600,000,000 BTRUST

21.266% to team members and future employees with 4-year vesting 212,660,000 BTRUST

18.044% to investors with 4-year vesting 180,440,000 BTRUST

0.69% to advisors with 4-year vesting 6,900,000 BTRUST

A perpetual inflation rate of 2% per year will start after 4 years, ensuring continued participation and contribution to community.


**Community Treasury**

Release Schedule

With 15% of tokens already available to be claimed by historical users and liquidity providers, the governance treasury will retain 43% [430,000,000 BTRUST] of BTRUST supply to distribute on an ongoing basis through contributor grants, community initiatives, liquidity mining, and other programs.

BTRUST will vest to the governance treasury on a continuous basis according to the following schedule. Governance will have access to vested BTRUST starting October 18 2020 12:00am UTC.

Year	Community Treasury	Distribution %
Year 1	172,000,000 BTRUST	40%
Year 2	129,000,000 BTRUST	30%
Year 3	86,000,000 BTRUST	20%
Year 4	43,000,000 BTRUST	10%
Team, investor, and advisor BTRUST allocations will have tokens locked up on an identical schedule.


**Governance assets**

A community-managed treasury opens up a world of infinite possibilities. We hope to see a variety of experimentation, including ecosystem grants and public goods funding, both of which can foster additional BTrust ecosystem growth. BTrust has set the standard for automated liquidity provision: it is now time to set the benchmark for responsible but radical, long-term aligned on-chain governance systems.

BTrust governance will be live from day one, although control over the treasury will be delayed until October 17 2020 12:00am UTC. Control over the BTrust fee switch is subject to a 180 day time lockdelay.

These grace periods provide the BTrust community enough time to familiarize itself with the governance system, bring in a diverse and high-quality set of protocol delegates, and begin discussions and communications around potential governance proposals.

BTRUST holders are responsible for ensuring that governance decisions are made in compliance with applicable laws and regulations. To help facilitate this, the fee switch has been initialized to a contract BTRUST holders can use to vote on tokens for which they will collect fees. The community is encouraged to consult knowledgeable legal and regulatory professionals before implementing any specific proposal.

The BTrust team will continue to have no involvement in v2 protocol development, auditing, and other matters. Similarly, team members will not participate directly in governance for the foreseeable future, although they may delegate votes to protocol delegates without seeking to influence their voting decisions.

**Ownership**

In the meantime, BTRUST holders will have immediate ownership of:

BTrust governance

BTRUST community treasury

The protocol fee switch

<xxxx.eth> ENS name

BTrust Default List (tokens.uniswap.eth)

Initial governance parameters are as follows:

1% of BTRUST total supply (delegated) to submit a governance proposal

4% of BTRUST supply required to vote ’yes’ to reach quorum

7 day voting period

2 day timelock delay on execution

BTRUST tokens can be delegated and used to vote through the governance portal.


**Contracts**

BTRUST Token:

https://ropsten.etherscan.io/token/${BTRUST_ADDRESS}

Governance:

https://ropsten.etherscan.io/address/${GOVERNANCE_ADDRESS}

Timelock:

https://ropsten.etherscan.io/address/${TIMELOCK_ADDRESS}

Governance Decisions 

https://ropsten.etherscan.io/address/${GOVERNANCE_DECISIONS_ADDRESS} 

`