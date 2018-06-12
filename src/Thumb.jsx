import React from 'react'
import PropTypes from 'prop-types'

const Thumb = ({
  alt,
  imageUrl,
  overlayBackground,
  textBackground,
  textColor,
  title
}) => (
  <div className="grid-cell" style={{ backgroundColor: overlayBackground }}>
    <div
      className="square-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="text-wrapper">
      <div
        className="text"
        style={{ backgroundColor: textBackground, color: textColor }}
      >
        {title}
      </div>
    </div>
  </div>
)

Thumb.PropTypes = {
  alt: PropTypes.string,
  imageUrl: PropTypes.string,
  overlayBackground: PropTypes.string,
  textBackground: PropTypes.string,
  textColor: PropTypes.string,
  title: PropTypes.string
}

Thumb.defaultProps = {
  imageUrl: `https://source.unsplash.com/random`,
  overlayBackground: `#000`,
  textBackground: `transparent`,
  textColor: `#FFF`,
  title: ''
}

export default Thumb
