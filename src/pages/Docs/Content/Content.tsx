import React from 'react'
import styled from 'styled-components'
import { TYPE } from '../../../theme'
import ReactMarkdown from 'react-markdown'
import { useMarkDownContent } from './useMarkDownContent'

/*
html {
    scroll-behavior: smooth;
}
*/

const MarkDownWrapper = styled.div`
  max-width: 640px;
  overflow: hidden;
`

const SectionWrapper = styled.section`
  padding-bottom: 2rem;
`

const DivWrapper = styled.section`
  margin: 0;
`

export default function SideNavBar() {
  const Content = useMarkDownContent()

  return (
    <DivWrapper>
      <TYPE.largeHeader fontWeight={900}>Docs - Governance</TYPE.largeHeader>
      {Content.map((markup, i) => {
        return (
          <SectionWrapper key={i} id={`section-${i + 1}`}>
            <MarkDownWrapper>
              <ReactMarkdown key={i} source={markup} />
            </MarkDownWrapper>
          </SectionWrapper>
        )
      })}
    </DivWrapper>
  )
}
