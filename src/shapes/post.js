import PropTypes from 'prop-types'

const postShape = PropTypes.shape({
  id: PropTypes.string,
  rating: PropTypes.number,
  author: PropTypes.string,
  title: PropTypes.string,
  html: PropTypes.string,
  imageSrc: PropTypes.string,
})

export default postShape
