import React from 'react'
import styled from 'styled-components'
import { TYPE } from '../../../theme'
import ReactMarkdown from 'react-markdown'
import { useMarkDownContent } from './useMarkDownContent'

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

export default function SideNavBar() {
  const Content = useMarkDownContent()

  return (
    <DivWrapper>
      <TYPE.largeHeader fontWeight={900}>Docs - Governance</TYPE.largeHeader>
      <hr></hr>
      {Content.map((markup, i) => {
        return (
          <SectionWrapper key={i} id={`section-${i + 1}`}>
            <MarkDownWrapper key={i}>
              <ReactMarkdown key={i} source={markup} />
            </MarkDownWrapper>
            <hr></hr>
          </SectionWrapper>
        )
      })}
    </DivWrapper>
  )
}
