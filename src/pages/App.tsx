import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import Polling from '../components/Header/Polling'
import Web3ReactManager from '../components/Web3ReactManager'
import Vote from './Vote'
import VotePage from './Vote/VotePage'
import DocsPage from './Docs/Content/DocsPage'
import AboutPage from './About/AboutPage'
import HowItWorksPage from './HowItWorks/HowItWorks'
import FaqPage from './FAQ/FaqPage'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 16px;
    padding-top: 2rem;
  `};

  z-index: 1;
`

const Marginer = styled.div`
  margin-top: 5rem;
`

export default function App() {
  return (
    <Suspense fallback={null}>
      <AppWrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <BodyWrapper>
          <Polling />
          <Web3ReactManager>
            <Switch>
              <Route exact strict path="/" component={Vote} />
              <Route exact strict path="/vote" component={Vote} />
              <Route exact strict path="/vote/:id" component={VotePage} />
              <Route exact strict path="/docs" component={DocsPage} />
              <Route exact strict path="/about" component={AboutPage} />
              <Route exact strict path="/how" component={HowItWorksPage} />
              <Route exact strict path="/faq" component={FaqPage} />
            </Switch>
          </Web3ReactManager>
          <Marginer />
        </BodyWrapper>
      </AppWrapper>
    </Suspense>
  )
}
