import React from 'react'
import styled from 'styled-components'
import { NavItems } from './NavItems'
import { HashLink as Link } from 'react-router-hash-link'
import { ArrowLeft } from 'react-feather'
import { RowBetween } from '../../../components/Row'
import { StyledInternalLink } from '../../../theme'


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
  :hover {
    font-weight: 500;
    background-color: gray;
  }
  :focus {
    font-weight: 500;
    background-color: gray;
  }
  :active {
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

export default function SideNavBar() {
  const NavItemsLinks = NavItems.map((item, i) => {
    return (
      <NavListWrapper key={i}>
        <Link key={i} to={`docs#section-${i + 1}`}>
          {item}
        </Link>
      </NavListWrapper>
    )
  })
  return (
    <NavWrapper>
      <SectionNavWrapper>
        <RowBetween style={{ width: '100%' }}>
          <ArrowWrapper to="/vote">
            <ArrowLeft size={20} /> Vote Portal
          </ArrowWrapper>
        </RowBetween>
        {NavItemsLinks}
      </SectionNavWrapper>
    </NavWrapper>
  )
}
