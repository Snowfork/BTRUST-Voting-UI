import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import ReactMarkdown from 'react-markdown'
import { DummyInfo } from './DummyInfo'

const PageWrapper = styled(AutoColumn)`
  width: 100%;
`

const ProposalInfo = styled(AutoColumn)`
  border: 1px solid black;
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  max-width: 640px;
  width: 100%;
`

const MarkDownWrapper = styled.div`
  max-width: 640px;
  overflow: hidden;
`

export default function FaqPage() {
  return (
    <PageWrapper gap="lg" justify="center">
      <ProposalInfo gap="lg" justify="start">
        <AutoColumn gap="md">
          <TYPE.mediumHeader fontWeight={600}>Propose</TYPE.mediumHeader>
          <MarkDownWrapper>
            <ReactMarkdown source={DummyInfo} />
          </MarkDownWrapper>
        </AutoColumn>
      </ProposalInfo>
    </PageWrapper>
  )
}

