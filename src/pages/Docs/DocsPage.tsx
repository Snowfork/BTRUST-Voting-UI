import React from 'react'
import styled from 'styled-components'
import SideNavBar from './Navigation/SideNavBar'
import Content from './Content/Content'

const PageWrapper = styled.main`
  width: 100%;
  background-color: white;
`
const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 15em;
  max-width: 90vw;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  h2 {
    color: rgba(24, 30, 71, 1);
  }
  ul {
    color: rgba(24, 30, 71, 1);
  }
`
export default function DocsPage() {
  return (
    <PageWrapper>
      <MainWrapper>
        <Content />
        <SideNavBar />
      </MainWrapper>
    </PageWrapper>
  )
}
