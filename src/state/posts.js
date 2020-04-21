import Chance from 'chance'
import { getRandomIntInclusive } from '../utils'
import { PAGE_SIZE, CHANCE_SEED } from '../constants'

const chance = Chance(CHANCE_SEED)

const LOAD_POSTS = 'LOAD_POSTS'
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS/SUCCESS'
const LOAD_POSTS_FAIL = 'LOAD_POSTS/FAIL'

const CHANGE_RATING = 'CHANGE_RATING'

const generatePost = () => {
  const post = {
    id: chance.hash(),
    rating: getRandomIntInclusive(0, 1000),
    author: chance.name(),
    title: chance.sentence(),
    html: '',
    imageSrc: 'https://picsum.photos/200/500',
  }
  const paragraphCount = getRandomIntInclusive(2, 5)
  for (let i = 0; i < paragraphCount; i++) {
    post.html += `<p>${chance.paragraph()}</p>`
  }

  return post
}

const getArrayWithReplacedPost = (posts, post) => {
  if (!post || !post.id) return posts

  const index = posts.findIndex(p => p.id === post.id)
  const postsShallowCopy = posts.slice()
  postsShallowCopy[index] = post
  return postsShallowCopy
}

export const loadPosts = () => dispatch => {
  dispatch({ type: LOAD_POSTS })

  const delay = getRandomIntInclusive(0.2, 0.5) * 1000

  setTimeout(() => {
    const posts = []
    for (let i = 0; i < PAGE_SIZE; i++) {
      posts.push(generatePost())
    }

    dispatch({ type: LOAD_POSTS_SUCCESS, posts })
  }, delay)
}

export const changeRating = (postId, isIncrease = false) => (dispatch, getState) => {
  const state = getState()
  const post = state.posts.posts.find(p => p.id === postId)
  if (isIncrease) {
    post.rating++
  } else {
    post.rating--
  }

  dispatch({ type: CHANGE_RATING, post: { ...post } })
}

const initialState = {
  posts: [],
  loading: false,
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return { ...state, loading: true }
    case LOAD_POSTS_SUCCESS:
      return { ...state, loading: false, posts: [...state.posts, ...action.posts] }
    case LOAD_POSTS_FAIL:
      return { ...state, loading: false }
    case CHANGE_RATING:
      return { ...state, posts: getArrayWithReplacedPost(state.posts, action.post) }
    default:
      return state
  }
}

export default postsReducer
