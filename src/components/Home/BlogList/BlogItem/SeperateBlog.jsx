import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { parseHtml } from './htmlParser' // Adjust the import path accordingly
import './styles11.css'
import './styles.css'
import axios from 'axios'
import EmptyList from '../../../common/EmptyList'

export const SeperateBlog = (props) => {
  // Use the useParams hook to get the id from the URL
  const { id } = useParams()
  const [content, setContent] = useState('')
  const [imageUrl, setImageUrl] = useState('') // State for image URL
  const [title, setTitle] = useState('')
  const [isLoading, setIsLoading] = useState(true) // Loading state

  useEffect(() => {
    axios
      .post('http://localhost:5000/bloginfo', { id })
      .then((response) => {
        console.log(response.data)
        setContent(response.data.content.rendered)
        setImageUrl(
          response.data.featured_image_urls_v2.tenweb_optimizer_mobile[0],
        ) // Assuming the image URL is in response.data.imageUrl
        setTitle(response.data.title.rendered)
        setIsLoading(false) // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('There was an error fetching the posts!', error)
        setIsLoading(false) // Set loading to false even if there's an error
      })
  }, [id]) // Added id as a dependency to ensure the effect runs when id changes

  if (isLoading) {
    return <EmptyList /> // Show a loading indicator while fetching data
  }

  return (
    <div>
      {content ? (
        <>
          <hr className="headingHR"></hr>
          <h1 className="MainHeading">{title}</h1>
          {parseHtml(content)}
        </>
      ) : (
        <EmptyList />
      )}
    </div>
  )
}

export default SeperateBlog
