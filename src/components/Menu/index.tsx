import React, { useRef } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { ExternalLink, Menu as MenuOpener } from 'react-feather'
import { useModalOpen, useToggleModal } from '../../state/application/hooks'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { ApplicationModal } from '../../state/application/actions'

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
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.bg1};

  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    border: 1px solid #181e47;
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
  right: -5rem;
  z-index: 100;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    top: -17.25rem;
  `};
`

export default function Menu() {
  const node = useRef<HTMLDivElement>()
  const open = useModalOpen(ApplicationModal.MENU)
  const toggle = useToggleModal(ApplicationModal.MENU)
  useOnClickOutside(node, open ? toggle : undefined)

  return (
    <StyledMenu ref={node as any}>
      <StyledMenuButton onClick={toggle}>
        <MenuOpener />
      </StyledMenuButton>
      {open && (
        <MenuFlyout>
          <a
            href={'https://docs.google.com/document/d/1Jn_-sgSac73nVHmOFZ16FjTjQH8pZAlO/edit#'}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            <StyledMenuButton>
              <PagesLinksText>
                About <ExternalLink size={'1rem'} />
              </PagesLinksText>
            </StyledMenuButton>
          </a>
          <a
            href={'https://docs.google.com/document/d/1Jn_-sgSac73nVHmOFZ16FjTjQH8pZAlO/edit#'}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            <StyledMenuButton>
              <PagesLinksText>
                How it works <ExternalLink size={'1rem'} />
              </PagesLinksText>
            </StyledMenuButton>
          </a>
          <a
            href={'https://docs.google.com/document/d/142pP1qcKJwTIze0tKZYr-UKX4Yoz--J6BSWeXELZ8x4/edit'}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            <StyledMenuButton>
              <PagesLinksText>
                FAQs <ExternalLink size={'1rem'} />
              </PagesLinksText>
            </StyledMenuButton>
          </a>
          <a href={'https://discord.gg/ppGSrXPFGq'} target={'_blank'} rel={'noopener noreferrer'}>
            <StyledMenuButton>
              <PagesLinksText>
                Chat room (Discord) <ExternalLink size={'1rem'} />
              </PagesLinksText>
            </StyledMenuButton>
          </a>
          <a href={'https://snapshot.org/#/usebraintrustropsten.eth'} target={'_blank'} rel={'noopener noreferrer'}>
            <StyledMenuButton>
              <PagesLinksText>
                Pre-vote (Snapshot) <ExternalLink size={'1rem'} />
              </PagesLinksText>
            </StyledMenuButton>
          </a>
          <NavLink id={`stake-nav-link`} to={'/vote'}>
            <StyledMenuButton>
              <PagesLinksText>Vote</PagesLinksText>
            </StyledMenuButton>
          </NavLink>
          <NavLink id={`stake-nav-link`} to={'/docs'}>
            <StyledMenuButton>
              <PagesLinksText>Docs</PagesLinksText>
            </StyledMenuButton>
          </NavLink>
        </MenuFlyout>
      )}
    </StyledMenu>
  )
}
