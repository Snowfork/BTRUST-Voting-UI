import React from 'react'
import styled from 'styled-components'
import { NavItems } from './NavItems'
import { HashLink as Link } from 'react-router-hash-link'
import { ArrowLeft } from 'react-feather'
import { RowBetween } from '../../../components/Row'
import { StyledInternalLink } from '../../../theme'

/*
html {
    scroll-behavior: smooth;
}
*/

const NavWrapper = styled.nav`
  position: sticky;
  width: 100%;
  tip: 2rem;
  align-self: start;
`

const SectionNavWrapper = styled.ul`
  padding-left: 0;
  border-left: 2px solid rgba(24, 30, 71, 1);
  list-style-type: none;
  margin: 0;
  padding: 0;
`
const NavLinkWrapper = styled.a`
  text-decoration: none;
  display: block;
  padding: 0.125rem 0;
  color: rgba(24, 30, 71, 1);
  transition: all 50ms ease-in-out;
  :hover {
    color: white;
    background-color: rgba(24, 30, 71, 1);
  }
  :focus {
    color: white;
    background-color: rgba(24, 30, 71, 1);
  }
`

const NavListWrapper = styled.li`
  margin-left: 1rem;
  :active {
    color: white;
    font-weight: 1000;
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

export default function SideNavBar() {
  return (
    <NavWrapper>
      <SectionNavWrapper>
        <RowBetween style={{ width: '100%' }}>
          <ArrowWrapper to="/vote">
            <ArrowLeft size={20} /> Vote Portal
          </ArrowWrapper>
        </RowBetween>
        {NavItems.map((item, i) => {
          return (
            <NavListWrapper key={i}>
              <NavLinkWrapper>
                <Link to={`docs#section-${i + 1}`}>{item}</Link>
              </NavLinkWrapper>
            </NavListWrapper>
          )
        })}
        <RowBetween style={{ width: '100%' }}>
          <ArrowWrapper to="/vote">
            <ArrowLeft size={20} /> Vote Portal
          </ArrowWrapper>
        </RowBetween>
      </SectionNavWrapper>
    </NavWrapper>
  )
}
