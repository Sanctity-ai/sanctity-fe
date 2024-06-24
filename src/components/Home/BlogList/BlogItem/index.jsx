import './styles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Chip from '../../../common/Chip'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
    content,
    slug,
  },
}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/blog/${slug}/${id}`, { state: { id } })
  }
  return (
    <motion.div
      whileHover={{
        scale: 0.8,
        rotate: -5,
      }}
      whileTap={{ scale: 0.9, rotate: -1 }}
      className="blogItem-wrap"
      onClick={handleClick}
    >
      <motion.img className="blogItem-cover" src={cover} alt="cover" />
      <Chip label={category} />
      <h3 className="blogItem-title">{title}</h3>
      <p className="blogItem-desc">{description}</p>
      <footer>
        <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6 className="authorname">{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className="blogItem-link" to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </motion.div>
  )
}

export default BlogItem
