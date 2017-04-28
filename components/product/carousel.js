import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'axs';
import { Image } from '../base';
import { StyledViewPager, StyledFrame, StyledTrack } from './carousel-hocs';
import ProgressPage from './progress-page';
import ProgressView from './progress-view';
import ProgressBar from './progress-bar';

const thumb = image => image.replace('.jpg', '-s.jpg');

const styles = {
  viewport: {
    maxWidth: 800,
    margin: '0 auto',
    flexDirection: 'column',
  },
  frame: {
    maxWidth: 800,
    margin: '0 auto',
  },
  pageNav: {
    flexDirection: 'row',
  },
};

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 0,
      progress: 0,
    };

    this._handleScroll = this._handleScroll.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.productId !== nextProps.productId) {
      this.setState({ currentView: 0, progress: 0 });
    }
  }

  _handleScroll(progress) {
    this.setState({ progress });
  }

  render() {
    const { currentView, progress } = this.state;

    return (
      <StyledViewPager
        width={1}
        display="flex"
        css={styles.viewport}
      >
        <StyledFrame
          width={1}
          ref={c => this.frame = c} // eslint-disable-line no-return-assign
          css={styles.frame}
        >
          <StyledTrack
            display="flex"
            currentView={currentView}
            onScroll={this._handleScroll}
            onViewChange={(currentIndicies) => {
              this.setState({ currentView: currentIndicies[0] });
            }}
          >
            {this.props.images.map((image, i) => (
              <ProgressView key={`${this.props.productId}_${i}`}>
                <Image src={`/static/images/product/${image}`} />
              </ProgressView>
            ))}
          </StyledTrack>
          <ProgressBar progress={progress} />
        </StyledFrame>
        <Box
          my1
          mx0
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          is="nav"
          css={styles.pageNav}
        >
          {this.props.images.map((image, i) =>
            <ProgressPage
              key={`${this.props.productId}_s_${i}`}
              index={i}
              onClick={() => this.setState({ currentView: i })}
            >
              <Image src={`/static/images/product/${thumb(image)}`} />
            </ProgressPage>
          )}
        </Box>
      </StyledViewPager>
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  productId: PropTypes.string,
};

Carousel.displayName = 'Carousel';

export default Carousel;
