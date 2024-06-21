import React from 'react'
import { Link } from 'react-router-dom'
import Chip from '../../../common/Chip'
import './styles.css'
import { motion } from 'framer-motion'

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
  },
}) => {
  return (
    <motion.div
      whileHover={{}}
      whileTap={{ scale: 0.9 }}
      className="blogItem-wrap"
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
