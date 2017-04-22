import { styled } from 'styletron-react';

export const Container = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px',
  backgroundColor: 'rgba(0, 0, 0, .9)',
  borderBottomStyle: 'solid',
  borderBottomWidth: '1px',
  borderColor: 'rgba(255, 255, 255, .1)',
});

export const NavItem = styled('a', {
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'opacity .15s ease-in',
  color: 'rgba(255, 255, 255, .7)',
  opacity: 1,
  marginRight: '16px',
  ':hover': {
    opacity: 0.5,
    transition: 'opacity .15s ease-in',
  },
});
