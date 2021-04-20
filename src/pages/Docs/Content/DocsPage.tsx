import React, { useRef } from 'react'
import styled from 'styled-components'
import { TYPE } from '../../../theme'
import ReactMarkdown from 'react-markdown'
import { useMarkDownContent } from './useMarkDownContent'
import { NavItems } from './NavItems'
import { HashLink as Link } from 'react-router-hash-link'
import { ArrowLeft } from 'react-feather'
import { RowBetween } from '../../../components/Row'
import { StyledInternalLink } from '../../../theme'
import useScrollSpy from 'react-use-scrollspy'

const NavWrapper = styled.nav`
  top: 2rem;
  align-self: start;
`
const SectionNavWrapper = styled.ul`
  padding-left: 0;
  border-left: 2px solid rgba(24, 30, 71, 1);
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
`

const NavListWrapper = styled.li`
  margin-left: 1rem;
  transition: all 50ms ease-in-out;
  &:focus {
    font-weight: 500;
    background-color: gray;
  }
  &:hover {
    font-weight: 500;
    background-color: gray;
  }
  &.active {
    font-weight: 500;
    background-color: gray;
  }
`

const ArrowWrapper = styled(StyledInternalLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 24px;
  margin: 15px;
  color: ${({ theme }) => theme.text1};

  a {
    color: ${({ theme }) => theme.text1};
    text-decoration: none;
  }
  :hover {
    text-decoration: none;
  }
`

const MarkDownWrapper = styled.div`
  max-width: 70vw;
  word-wrap: break-word;
`

const SectionWrapper = styled.section`
  padding-bottom: 2rem;
  overflow-x: scroll;
  code {
    background: #f8f8fa;
    border-radius: 50px;
    padding: 3px;
    margin: 1px;
  }
`

const DivWrapper = styled.section`
  margin: 0;
  max-height: 80vh;
  overflow-y: scroll;
`

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
  const Content: any = useMarkDownContent()

  const sectionRefs = Array(Content.length).fill(useRef(null))

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80
  })

  const Navs = NavItems.map((item, i) => {
    return (
      <NavListWrapper key={i}>
        <Link
          className={activeSection === i ? 'active' : ''}
          key={i}
          to={`docs#section-${i + 1}`}
          href={`docs#section-${i + 1}`}
        >
          {item}
        </Link>
      </NavListWrapper>
    )
  })

  const Sections = Content.map((markup: any, i: number) => {
    return (
      <SectionWrapper ref={sectionRefs[i]} key={i} id={`section-${i + 1}`}>
        <MarkDownWrapper key={i}>
          <ReactMarkdown key={i} source={markup} />
        </MarkDownWrapper>
        <hr></hr>
      </SectionWrapper>
    )
  })

  return (
    <PageWrapper>
      <MainWrapper>
        <DivWrapper>
          <TYPE.largeHeader fontWeight={900}>Docs - Governance</TYPE.largeHeader>
          <hr></hr>
          {Sections}
        </DivWrapper>
        <NavWrapper>
          <SectionNavWrapper>
            <RowBetween style={{ width: '100%' }}>
              <ArrowWrapper to="/vote">
                <ArrowLeft size={20} /> Vote Portal
              </ArrowWrapper>
            </RowBetween>
            {Navs}
          </SectionNavWrapper>
        </NavWrapper>
      </MainWrapper>
    </PageWrapper>
  )
}
