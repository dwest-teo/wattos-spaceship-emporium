import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ViewPager, Frame, Track, View } from 'react-view-pager';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      // size: '50%'
    };
  }

  render() {
    const { activeIndex, size } = this.state;
    return (
      <div>
        <div>
          <button onClick={() => this.slider.prev()}>
            Prev
          </button>
          <input
            type="range"
            min={0}
            max={this.props.images.length}
            value={Number(activeIndex)}
            onChange={e => this.setState({ activeIndex: Number(e.target.value) })}
          />
          <button onClick={() => this.slider.next()}>
            Next
          </button>
        </div>
        current view: {activeIndex + 1}
        <ViewPager>
          <Frame
            autoSize="height"
            className="frame"
            style={{ margin: '0 auto', outline: 0 }}
          >
            <Track
              ref={c => this.slider = c}
              currentView={activeIndex}
              viewsToShow={1}
              viewsToMove={1}
              align={0.5}
              // axis="y"
              // infinite
              contain
              className="track"
              onViewChange={(currentIndicies) => {
                this.setState({ activeIndex: currentIndicies[0] });
              }}
              onRest={() => console.log('after view change')}
            >
              {this.props.images.map((image, i) => (
                <View key={i} tag="img" src={`/static/images/product/${image}`} />
              ))}
            </Track>
          </Frame>
        </ViewPager>
      </div>
    );
  }
}

export default Carousel;
