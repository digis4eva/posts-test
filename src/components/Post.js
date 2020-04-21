import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { changeRating } from '../state/posts'
import postShape from '../shapes/post'
import { formatRating } from '../utils'

const Container = styled.div`
  display: flex;
  margin-top: 15px;
`

const RatingColumn = styled.div`
  width: 70px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
  padding: 5px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  background: grey;

  > div {
    font-weight: bold;
  }

  > button {
    width: 40px;
    font-size: 20px;
  }

  > :not(:last-child) {
    margin-bottom: 5px;
  }
`

const PostColumn = styled.div`
  width: 500px;
  border-radius: 4px;
  border: 1px solid lightgray;
  box-shadow: 6px 4px 25px -10px rgba(0, 0, 0, 0.75);
`

const Title = styled.h3`
  padding: 0 10px;
`

const TextContainer = styled.div`
  padding: 5px 10px;

  p {
    font-size: 14px;
  }
`

const Post = ({ post, changeRating }) => {
  const { id, html: __html, imageSrc, rating, title } = post

  return (
    <Container>
      <RatingColumn>
        <div>{formatRating(rating)}</div>
        <button type="button" onClick={() => changeRating(id, true)}>
          &#8593;
        </button>
        <button type="button" onClick={() => changeRating(id, false)}>
          &#8595;
        </button>
      </RatingColumn>
      <PostColumn>
        <Title>{title}</Title>
        <TextContainer dangerouslySetInnerHTML={{ __html }} />
        <img src={imageSrc} alt="" height={200} width={500} />
      </PostColumn>
    </Container>
  )
}

Post.propTypes = {
  post: postShape,
  changeRating: PropTypes.func,
}

export default connect(null, { changeRating })(Post)
