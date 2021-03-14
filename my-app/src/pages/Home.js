import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


import { useDispatch } from 'react-redux'
import { setUser } from './../redux/state/user'

const Home = () => {
  const dispatch = useDispatch()
  const [posts, setPosts] = useState([])
  const [photos, setPhotos] = useState([])

  const [isLoadingPosts, setIsLoadingPosts] = useState(true)

  const fetchPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_start=10&_limit=5')
      .then(response => {
        setPosts(response.data)
        setIsLoadingPosts(false)
      })
      .catch(() => {
        setIsLoadingPosts(false)
      })
  }

  const fetchPhotos = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_start=10&_limit=10')
      .then(response => {
        setPhotos(response.data)
      })
  }

  const logout = () => {
    dispatch(
      setUser(null)
    )
  }

  useEffect(() => {
    fetchPosts()
    fetchPhotos()
  }, [])

  return (
    <>
      <h1>home page</h1>
      <button onClick={logout}>Logout</button>

      <h2>Danh sách bài viết nổi bật</h2>
      {
        isLoadingPosts && <p>Loading ...</p>
      }

      {
        posts.map(post => (
          <div className="item" key={post.id}>
            <Link to={'/posts/' + post.id}>{post.title}</Link>
          </div>
        ))
      }


      <h2>Danh sách ảnh nổi bật</h2>

      {
        photos.map(photo => (
          <div className="item" key={photo.id}>
            <img src={photo.thumbnailUrl} alt='' />
          </div>
        ))
      }
    </>
  )
}

export default Home
