import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ViewPager, Frame, Track, View, AnimatedView } from 'react-view-pager';
import { Image } from '../base';

const styles = {
  viewport: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  frame: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  track: {
    display: 'flex',
  },
  view: {
    flex: 1,
    userSelect: 'none',
  },
  progressContainer: {
    width: '100%',
    height: 3,
    position: 'relative',
    background: '#e6e6e6',
  },
  progressBar: {
    width: '100%',
    height: '100%',
    background: '#0f0f0f',
    transformOrigin: 'left center',
    position: 'absolute',
  },
  pager: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '6px 0px',
  },
  page: {
    width: 70,
    height: 50,
    cursor: 'pointer',
    marginRight: 12,
  },
};

class ProgressView extends Component {
  render() {
    return (
      <View style={styles.view} {...this.props}>
        <AnimatedView
          animations={[ {
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
          } ]}
        >
          {this.props.children}
        </AnimatedView>
      </View>
    );
  }
}

ProgressView.propTypes = {
  children: PropTypes.node,
};

ProgressView.displayName = 'ProgressView';

const ProgressBar = ({ progress }) => (
  <div style={styles.progressContainer}>
    <div
      style={{
        ...styles.progressBar,
        transform: `scaleX(${Math.max(0, Math.min(1, progress))})`,
      }}
    />
  </div>
);

ProgressBar.propTypes = {
  progress: PropTypes.number,
};

ProgressBar.displayName = 'ProgressBar';

const ProgressPage = ({ index, children, onClick }) => (
  <AnimatedView
    key={index}
    index={index}
    animations={[ {
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
    } ]}
    style={styles.page}
    onClick={(e) => {
      onClick(e);
    }}
  >
    {children}
  </AnimatedView>
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

  // _handleScroll(progress, trackPosition) {
  //   this.setState({ progress });
  // }

  _handleScroll(progress) {
    this.setState({ progress });
  }

  render() {
    const { currentView, progress } = this.state;
    return (
      <ViewPager style={styles.viewport}>
        <Frame
          ref={c => this.frame = c}
          style={styles.frame}
        >
          <Track
            infinite
            currentView={currentView}
            style={styles.track}
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
          </Track>
          <ProgressBar progress={progress} />
        </Frame>
        <nav style={styles.pager}>
          {this.props.images.map((image, i) =>
            <ProgressPage
              key={i}
              index={i}
              onClick={() => this.setState({ currentView: i })}
            >
              <Image src={`/static/images/product/${image.replace('.jpg', '-s.jpg')}`} />
            </ProgressPage>
          )}
        </nav>
      </ViewPager>
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  productId: PropTypes.string,
};

Carousel.displayName = 'Carousel';

export default Carousel;
