import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
//import { TYPE } from '../../theme'
//import ReactMarkdown from 'react-markdown'
//import { DocsInfo } from './DocsInfo'
//import { ArrowLeft } from 'react-feather'
//import { RowBetween } from '../../components/Row'
//import { StyledInternalLink } from '../../theme'
import SideNavBar from './Navigation/SideNavBar'
import Content from './Content/Content'

const PageWrapper = styled(AutoColumn)`
  width: 100%;
`
const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 15em;
  max-width: 100em;
  width: 90%;
  margin: 0 auto;
`
export default function DocsPage() {
  return (
    <PageWrapper gap="lg" justify="center">
      <MainWrapper>
        <Content />
        <SideNavBar />
      </MainWrapper>
    </PageWrapper>
  )
}
