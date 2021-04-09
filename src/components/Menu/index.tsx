import React from 'react'
import styled from 'styled-components'
//import { useActiveWeb3React } from '../../hooks'
import { NavLink } from 'react-router-dom'

// Note change below theme.b4 to theme.bg3
const PagesLinksText = styled.p`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 0.5rem 0 0.25rem;
  font-size: 1rem;
  width: fit-content;
  font-weight: 500;
`

const StyledMenuButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.bg1};

  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    color: white;
    outline: none;
    background-color: ${({ theme }) => theme.bg3};
  }

  svg {
    margin-top: 2px;
  }
`

const StyledMenu = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`

export default function Menu() {
  //const { account } = useActiveWeb3React()
  return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    <StyledMenu>
      <StyledMenuButton>
        <PagesLinksText>
          <NavLink id={`stake-nav-link`} to={'/docs'}>
            Docs
          </NavLink>
        </PagesLinksText>
      </StyledMenuButton>
    </StyledMenu>
  )
}
