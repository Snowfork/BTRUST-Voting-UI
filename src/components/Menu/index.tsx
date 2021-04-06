import React, { useRef } from 'react'
import { Package, FileText, DollarSign, HelpCircle, BookOpen, Code, Info, MessageCircle } from 'react-feather'
import styled from 'styled-components'
//import { useActiveWeb3React } from '../../hooks'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useToggleModal } from '../../state/application/hooks'
import { NavLink } from 'react-router-dom'

import { ExternalLink } from '../../theme'

// Note change below theme.b4 to theme.bg3
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

const MenuFlyout = styled.span`
  min-width: 8.125rem;
  background-color: ${({ theme }) => theme.bg3};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 4rem;
  right: 0rem;
  z-index: 100;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    top: -17.25rem;
  `};
`

const MenuItem = styled(ExternalLink)`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({ theme }) => theme.text2};
  :hover {
    color: ${({ theme }) => theme.white};
    cursor: pointer;
    text-decoration: underline;
    font-size: 1.2rem;
  }
  > svg {
    margin-right: 8px;
  }
`

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

const CODE_LINK = 'https://github.com/Uniswap/uniswap-interface'

export default function Menu() {
  //const { account } = useActiveWeb3React()

  const node = useRef<HTMLDivElement>()
  const open = useModalOpen(ApplicationModal.MENU)
  const toggle = useToggleModal(ApplicationModal.MENU)
  useOnClickOutside(node, open ? toggle : undefined)

  return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    <StyledMenu ref={node as any}>
      <StyledMenuButton onClick={toggle}>
        <PagesLinksText>About Governance</PagesLinksText>
      </StyledMenuButton>

      {open && (
        <MenuFlyout>
          <NavLink id={`stake-nav-link`} to={'/about'}>
            <MenuItem id="link" href="#">
              <Info size={14} />
              About
            </MenuItem>
          </NavLink>
          <NavLink id={`stake-nav-link`} to={'/btrust'}>
            <MenuItem id="link" href={'#'}>
              <DollarSign size={14} />
              BTRUST
            </MenuItem>
          </NavLink>
          <MenuItem id="link" href={'https://github.com/Snowfork/BTRUST-Voting-UI'}>
            <Code size={14} />
            Code-Frontend
          </MenuItem>
          <MenuItem id="link" href={'https://github.com/Snowfork/BTRUST-Contracts'}>
            <Code size={14} />
            Code-Blockend
          </MenuItem>
          <MenuItem id="link" href="https://discord.gg/FCfyBSbCU5">
            <MessageCircle size={14} />
            Discord
          </MenuItem>
          <NavLink id={`stake-nav-link`} to={'/docs'}>
            <MenuItem id="link" href="https://uniswap.org/docs/v2">
              <BookOpen size={14} />
              Docs
            </MenuItem>
          </NavLink>
          <NavLink id={`stake-nav-link`} to={'/faq'}>
            <MenuItem id="link" href={CODE_LINK}>
              <HelpCircle size={14} />
              FAQ
            </MenuItem>
          </NavLink>
          <MenuItem id="link" href="https://discord.gg/FCfyBSbCU5">
            <FileText size={14} />
            Pre-Voting
          </MenuItem>
          <NavLink id={`stake-nav-link`} to={'/propose'}>
            <MenuItem id="link" href="#">
              <FileText size={14} />
              Propose
            </MenuItem>
          </NavLink>
          <NavLink id={`stake-nav-link`} to={'/vote'}>
            <MenuItem id="link" href="#">
              <Package size={14} />
              Vote Portal
            </MenuItem>
          </NavLink>
        </MenuFlyout>
      )}
    </StyledMenu>
  )
}
