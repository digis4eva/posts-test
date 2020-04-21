import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Post from './components/Post'
import { loadPosts } from './state/posts'
import postShape from './shapes/post'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`

const Footer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  font-size: 20px;
`

const App = ({ posts, loading, loadPosts }) => {
  const loadingRef = useRef(loading)

  useEffect(() => {
    loadingRef.current = loading
  }, [loading])

  useEffect(() => {
    loadPosts()

    const scrollHandler = () => {
      const html = document.documentElement
      const scrollPosition = window.pageYOffset + window.innerHeight
      const documentHeight = Math.max(html.clientHeight, html.scrollHeight, html.offsetHeight)

      if (documentHeight - scrollPosition <= 2000 && !loadingRef.current) loadPosts()
    }

    window.addEventListener('scroll', scrollHandler)

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [loadPosts])

  return (
    <Container>
      {posts.map(p => (
        <Post key={p.id} post={p} />
      ))}
      <Footer>{loading && <div>Loading...</div>}</Footer>
    </Container>
  )
}

App.propTypes = {
  posts: PropTypes.arrayOf(postShape),
  loading: PropTypes.bool,
  loadPosts: PropTypes.func,
}

export default connect(
  state => ({
    posts: state.posts.posts,
    loading: state.posts.loading,
  }),
  {
    loadPosts,
  }
)(App)
