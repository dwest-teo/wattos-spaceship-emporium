import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, withAxs } from 'axs';
import { ViewPager, Frame, Track, View, AnimatedView } from 'react-view-pager';
import { Image } from '../base';

const StyledViewPager = withAxs(ViewPager);
const StyledFrame = withAxs(Frame);
const StyledTrack = withAxs(Track);
const StyledView = withAxs(View);
const StyledAnimatedView = withAxs(AnimatedView);

const thumb = image => image.replace('.jpg', '-s.jpg');

const styles = {
  viewport: {
    maxWidth: 800,
    margin: '0 auto',
  },
  frame: {
    maxWidth: 800,
    margin: '0 auto',
  },
  view: {
    userSelect: 'none',
  },
  progressContainer: {
    height: 3,
    position: 'relative',
  },
  progressBar: {
    height: '100%',
    transformOrigin: 'left center',
    position: 'absolute',
  },
  page: {
    height: 50,
    cursor: 'pointer',
  },
};

class ProgressView extends Component {
  render() {
    return (
      <StyledView flexAuto css={styles.view} {...this.props}>
        <AnimatedView
          animations={[
            {
              prop: 'opacity',
              stops: [
                [ -200, 0 ],
                [ 0, 1 ],
                [ 200, 0 ],
              ],
            }, {
              prop: 'translateY',
              stops: [
                [ -200, 50 ],
                [ 0, 0 ],
                [ 200, 50 ],
              ],
            },
          ]}
        >
          {this.props.children}
        </AnimatedView>
      </StyledView>
    );
  }
}

ProgressView.propTypes = {
  children: PropTypes.node,
};

ProgressView.displayName = 'ProgressView';

const ProgressBar = ({ progress }) => (
  <Box bgGray3 width={1} css={styles.progressContainer}>
    <Box
      bgGray9
      width={1}
      css={{
        ...styles.progressBar,
        transform: `scaleX(${Math.max(0, Math.min(1, progress))})`,
      }}
    />
  </Box>
);

ProgressBar.propTypes = {
  progress: PropTypes.number,
};

ProgressBar.displayName = 'ProgressBar';

const ProgressPage = ({ index, children, onClick }) => (
  <StyledAnimatedView
    mr2
    key={index}
    index={index}
    animations={[
      {
        prop: 'scale',
        stops: [
          [ -300, 0.75 ],
          [ 0, 1 ],
          [ 300, 0.75 ],
        ],
      }, {
        prop: 'opacity',
        stops: [
          [ -300, 0.5 ],
          [ 0, 1 ],
          [ 300, 0.5 ],
        ],
      },
    ]}
    width={70}
    css={styles.page}
    onClick={(e) => {
      onClick(e);
    }}
  >
    {children}
  </StyledAnimatedView>
);

ProgressPage.propTypes = {
  index: PropTypes.number,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

ProgressPage.displayName = 'ProgressPage';

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
        flexDirection="column"
        css={styles.viewport}
      >
        <StyledFrame
          width={1}
          // eslint-disable-next-line no-return-assign
          ref={c => this.frame = c}
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
              <ProgressView key={i}>
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
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          is="nav"
        >
          {this.props.images.map((image, i) =>
            <ProgressPage
              key={i}
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
