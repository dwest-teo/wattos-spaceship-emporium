import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import App from '../components/app';

const Header = styled('div', {
  backgroundColor: '#e8e8e8',
  color: 'blue',
  fontSize: '32px',
  fontWeight: 700,
});

const ProductGrid = styled('div', {
  display: 'flex',
  flexFlow: 'row wrap',
  padding: '12px',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const ProductCard = styled('article', {
  maxWidth: '256px',
  borderRadius: '3px',
  padding: '12px',
  marginBottom: '12px',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'rgba(0, 0, 0, .1)',
});

const ProductCardInner = styled('div', {
  textAlign: 'center',
});

const ProductCardImg = styled('img', {
  borderRadius: '100%',
  height: '128px',
  width: '128px',
  display: 'inline-block',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'rgba(0, 0, 0, .05)',
  padding: '6px',
});

const ProductCardTitle = styled('h3', {
  fontSize: '24px',
  marginBottom: '16px',
});

const ProductCardPrice = styled('h4', {
  fontSize: '16px',
  fontWeight: 400,
  color: '#777',
  marginTop: 0,
});

const Home = props => (
  <App>
    <Header>{props.name}s Space Emporium</Header>
    <ProductGrid>
      <ProductCard>
        <ProductCardInner>
          <ProductCardImg src="https://www.stevensegallery.com/150/150" />
          <ProductCardTitle>Twin Ion Engine Starfighter</ProductCardTitle>
          <ProductCardPrice>149,999 credits</ProductCardPrice>
        </ProductCardInner>
      </ProductCard>
      <ProductCard>
        <ProductCardInner>
          <ProductCardImg src="https://www.stevensegallery.com/150/150" />
          <ProductCardTitle>Twin Ion Engine Starfighter</ProductCardTitle>
          <ProductCardPrice>149,999 credits</ProductCardPrice>
        </ProductCardInner>
      </ProductCard>
      <ProductCard>
        <ProductCardInner>
          <ProductCardImg src="https://www.stevensegallery.com/150/150" />
          <ProductCardTitle>Twin Ion Engine Starfighter</ProductCardTitle>
          <ProductCardPrice>149,999 credits</ProductCardPrice>
        </ProductCardInner>
      </ProductCard>
      <ProductCard>
        <ProductCardInner>
          <ProductCardImg src="https://www.stevensegallery.com/150/150" />
          <ProductCardTitle>Twin Ion Engine Starfighter</ProductCardTitle>
          <ProductCardPrice>149,999 credits</ProductCardPrice>
        </ProductCardInner>
      </ProductCard>
      <ProductCard>
        <ProductCardInner>
          <ProductCardImg src="https://www.stevensegallery.com/150/150" />
          <ProductCardTitle>Twin Ion Engine Starfighter</ProductCardTitle>
          <ProductCardPrice>149,999 credits</ProductCardPrice>
        </ProductCardInner>
      </ProductCard>
    </ProductGrid>
  </App>
);

Home.propTypes = {
  name: PropTypes.string,
};

Home.defaultProps = {
  name: 'Watto',
};

export default Home;
