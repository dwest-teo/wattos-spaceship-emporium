import { styled } from 'styletron-react';

export const CardContainer = styled('article', {
  maxWidth: '256px',
  borderRadius: '3px',
  padding: '12px',
  marginBottom: '12px',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'rgba(0, 0, 0, .1)',
});

export const CardInner = styled('div', {
  textAlign: 'center',
});

export const CardImg = styled('img', {
  borderRadius: '100%',
  height: '128px',
  width: '128px',
  display: 'inline-block',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'rgba(0, 0, 0, .05)',
  padding: '6px',
});

export const CardTitle = styled('h3', {
  fontSize: '24px',
  marginBottom: '16px',
});

export const CardPrice = styled('h4', {
  fontSize: '16px',
  fontWeight: 400,
  color: '#777',
  marginTop: 0,
});
