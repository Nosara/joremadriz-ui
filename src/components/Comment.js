import '../App.css';
import Tween from 'rc-tween-one';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';
import React from 'react';
import PropTypes from 'prop-types';

Tween.plugins.push(BezierPlugin);

const container = window;

function getContainerDimensions() {
  if (container === window) {
    return {'height': container.innerHeight, 'width': container.innerWidth};
  } else {
    return {'height': container.clientHeight, 'width': container.clientWidth};
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function generateNewPosition() {
  const containerSize = getContainerDimensions();
  const availableHeight = containerSize.height;
  const availableWidth = containerSize.width;
  // Pick a random place in the space
  const y = getRndInteger(-availableHeight, availableHeight);
  const x = getRndInteger(-availableWidth, availableWidth);

  return {x: x, y: y};
}

function Comment({value}) {
  return (
    <Tween
      animation={[
        {x: generateNewPosition().x, y: generateNewPosition().y},
        {opacity: 1, duration: 5000},
        {bezier: {
          type: 'soft',
          vars: [
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
            generateNewPosition(),
          ],
        },
        repeat: -1,
        yoyo: true,
        duration: 100000,
        },

      ]}
      className="Comment"
      style={{opacity: 0}}
    >
      {value}
    </Tween>
  );
}

export default Comment;

Comment.propTypes = {
  value: PropTypes.string,
};
