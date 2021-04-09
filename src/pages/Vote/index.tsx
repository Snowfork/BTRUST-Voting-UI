import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE, ExternalLink } from '../../theme'
import { RowBetween, RowFixed } from '../../components/Row'
import { Link } from 'react-router-dom'
import { ProposalStatus } from '../styled'
import { ButtonPrimary } from '../../components/Button'

import { Button } from 'rebass/styled-components'
import { darken } from 'polished'
import { CardSection, DataCard, CardNoise } from '../../components/earn/styled'
import { useAllProposalData, ProposalData, useUserVotes, useUserDelegatee } from '../../state/governance/hooks'
import DelegateModal from '../../components/vote/DelegateModal'
import { useTokenBalance } from '../../state/wallet/hooks'
import { useActiveWeb3React } from '../../hooks'
import { BTRUST, ZERO_ADDRESS } from '../../constants'
import { JSBI, TokenAmount, ChainId } from '@uniswap/sdk'
import { shortenAddress, getEtherscanLink } from '../../utils'
import Loader from '../../components/Loader'
import FormattedCurrencyAmount from '../../components/FormattedCurrencyAmount'
import { useModalOpen, useToggleDelegateModal } from '../../state/application/hooks'
import { ApplicationModal } from '../../state/application/actions'
//import { unwrapResult } from '@reduxjs/toolkit'

const PageWrapper = styled(AutoColumn)``

const TopSection = styled(AutoColumn)`
  max-width: 640px;
  width: 100%;
`

const Proposal = styled(Button)`
  padding: 0.75rem 1rem;
  width: 100%;
  margin-top: 1rem;
  border: 1px solid #181e47;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 48px 1fr 120px;
  align-items: center;
  text-align: left;
  outline: #181e47;
  cursor: pointer;
  color: ${({ theme }) => theme.text1};
  text-decoration: none;
  background-color: ${({ theme }) => theme.bg1};
  &:focus {
    background-color: ${({ theme }) => darken(0.05, theme.bg1)};
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.bg1)};
  }
`

const ProposalNumber = styled.span`
  opacity: 0.6;
`

const ProposalTitle = styled.span`
  font-weight: 600;
`

const VoteCard = styled(DataCard)`
  overflow: hidden;
`

const WrapSmall = styled(RowBetween)`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-wrap: wrap;
  
  `};
`

const TextButton = styled(TYPE.main)`
  color: #181e47;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const AddressButton = styled.div`
  border: 1px solid ${({ theme }) => theme.bg3};
  padding: 2px 4px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledExternalLink = styled(ExternalLink)`
  color: ${({ theme }) => theme.text1};
`

const EmptyProposals = styled.div`
  border: 1px solid ${({ theme }) => theme.text1};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Vote() {
  const { account, chainId } = useActiveWeb3React()

  // toggle for showing delegation modal
  const showDelegateModal = useModalOpen(ApplicationModal.DELEGATE)
  const toggleDelegateModal = useToggleDelegateModal()

  // get data to list all proposals
  const allProposals: ProposalData[] = useAllProposalData()

  // user data
  const availableVotes: TokenAmount | undefined = useUserVotes()
  const bTrustBalance: TokenAmount | undefined = useTokenBalance(
    account ?? undefined,
    chainId ? BTRUST[chainId] : undefined
  )
  const userDelegatee: string | undefined = useUserDelegatee()

  // show delegation option if they have have a balance, but have not delegated
  const showUnlockVoting = Boolean(
    bTrustBalance && JSBI.notEqual(bTrustBalance.raw, JSBI.BigInt(0)) && userDelegatee === ZERO_ADDRESS
  )

  return (
    <PageWrapper gap="lg" justify="center">
      <DelegateModal
        isOpen={showDelegateModal}
        onDismiss={toggleDelegateModal}
        title={showUnlockVoting ? 'Unlock Votes' : 'Update Delegation'}
      />
      <TopSection gap="md">
        <VoteCard>
          <CardNoise />
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontWeight={600}>BTRUST Governance</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  BTRUST tokens represent voting shares in BTRUST governance. You can vote on each proposal yourself or
                  delegate your votes to a third party.
                </TYPE.white>
              </RowBetween>
            </AutoColumn>
          </CardSection>
          <CardNoise />
        </VoteCard>
      </TopSection>
      <TopSection gap="2px">
        <WrapSmall>
          <TYPE.mediumHeader style={{ margin: '0.5rem 0.5rem 0.5rem 0', flexShrink: 0 }}>
            Total Proposals: {allProposals ? allProposals.length : 0}
          </TYPE.mediumHeader>
          {(!allProposals || allProposals.length === 0) && !availableVotes && <Loader />}
          {showUnlockVoting ? (
            <ButtonPrimary
              style={{ width: 'fit-content' }}
              padding="8px"
              borderRadius="8px"
              onClick={toggleDelegateModal}
            >
              Unlock Voting
            </ButtonPrimary>
          ) : availableVotes && JSBI.notEqual(JSBI.BigInt(0), availableVotes?.raw) ? (
            <TYPE.body fontWeight={500} mr="6px">
              <FormattedCurrencyAmount currencyAmount={availableVotes} /> Votes
            </TYPE.body>
          ) : bTrustBalance &&
            userDelegatee &&
            userDelegatee !== ZERO_ADDRESS &&
            JSBI.notEqual(JSBI.BigInt(0), bTrustBalance?.raw) ? (
            <TYPE.body fontWeight={500} mr="6px">
              <FormattedCurrencyAmount currencyAmount={bTrustBalance} /> Votes
            </TYPE.body>
          ) : (
            ''
          )}
        </WrapSmall>
        {!showUnlockVoting && (
          <RowBetween>
            <div />
            {userDelegatee && userDelegatee !== ZERO_ADDRESS ? (
              <RowFixed>
                <TYPE.body fontWeight={500} mr="4px">
                  Delegated to:
                </TYPE.body>
                <AddressButton>
                  <StyledExternalLink
                    href={getEtherscanLink(ChainId.MAINNET, userDelegatee, 'address')}
                    style={{ margin: '0 4px' }}
                  >
                    {userDelegatee === account ? 'Self' : shortenAddress(userDelegatee)}
                  </StyledExternalLink>
                  <TextButton onClick={toggleDelegateModal} style={{ marginLeft: '4px' }}>
                    (edit)
                  </TextButton>
                </AddressButton>
              </RowFixed>
            ) : (
              ''
            )}
          </RowBetween>
        )}
        {allProposals?.length === 0 && (
          <EmptyProposals>
            <TYPE.body style={{ marginBottom: '8px' }}>No proposals found.</TYPE.body>
            <TYPE.subHeader>
              <i>Proposals submitted by community members will appear here.</i>
            </TYPE.subHeader>
          </EmptyProposals>
        )}
        {allProposals?.map((p: ProposalData, i) => {
          return (
            <Proposal as={Link} to={'/vote/' + p.id} key={i}>
              <ProposalNumber>{p.id} </ProposalNumber>
              <ProposalTitle>{p.title} </ProposalTitle>
              <ProposalStatus status={p.status}>{p.status}</ProposalStatus>
            </Proposal>
          )
        })}
      </TopSection>
      <TYPE.subHeader color="text3">
        A minimum threshhold of 1% of the total BTRUST supply is required to submit proposals
      </TYPE.subHeader>
    </PageWrapper>
  )
}
