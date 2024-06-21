import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EmptyList from '../../components/common/EmptyList'
import BlogList from '../../components/Home/BlogList'
import Header from '../../components/Home/Header'
import SearchBar from '../../components/Home/SearchBar'
import axios from 'axios'

export const blogList = []

const Home = () => {
  const { slug } = useParams() // Get the slug from the URL
  const [blogs, setBlogs] = useState(blogList)
  const [searchKey, setSearchKey] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    console.log(`Current URL slug: ${slug}`) // Print the current slug inside useEffect

    axios
      .post('http://localhost:5000', { slug })
      .then((response) => {
        const transformedPosts = response.data.map((item) => {
          // Create a new object for each item
          return {
            id: item.id,
            title: item.title.rendered, // Assuming `title.rendered` is the correct path
            content: item.content.rendered, // Example: Assuming there's a `content.rendered`
            createdAt: item.date,
            category: 'AI',
            subCategory: item.categories,
            description: item.excerpt.rendered.split('>')[1],
            authorName: item.author_info_v2.name,
            authorAvatar: '/assets/images/author.jpg',
            cover: item.featured_image_urls_v2.tenweb_optimizer_mobile[0],
          }
        })

        setPosts(response.data)
        setBlogs(transformedPosts)
      })
      .catch((error) => {
        console.error('There was an error fetching the posts!', error)
      })
  }, []) // Add slug as a dependency to run useEffect when slug changes

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault()
    handleSearchResults()
  }

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()),
    )
    setBlogs(filteredBlogs)
  }

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList)
    setSearchKey('')
  }

  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}

      {/* Display the current slug */}
      {slug && <div>Current URL slug: {slug}</div>}
    </div>
  )
}

export default Home
