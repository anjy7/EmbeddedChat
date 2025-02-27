import React from 'react';
import PropTypes from 'prop-types';
import PlainSpan from './PlainSpan';
import ItalicSpan from './ItalicSpan';
import StrikeSpan from './StrikeSpan';

const BoldSpan = ({ contents }) => (
  <strong>
    {contents.map((content, index) => {
      switch (content.type) {
        case 'PLAIN_TEXT':
          return <PlainSpan key={index} contents={content.value} />;

        case 'STRIKE':
          return <StrikeSpan key={index} contents={content.value} />;

        case 'ITALIC':
          return <ItalicSpan key={index} contents={content.value} />;

        default:
          return null;
      }
    })}
  </strong>
);

export default BoldSpan;

BoldSpan.propTypes = {
  contents: PropTypes.any,
};
