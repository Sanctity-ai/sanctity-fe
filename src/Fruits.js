import './styles8.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

function Card({ imgSrc, route }) {
  const navigate = useNavigate()

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        whileHover={{ rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        className="card"
        variants={cardVariants}
        onClick={() => navigate(route)}
        style={{ cursor: 'pointer' }}
      >
        <img src={imgSrc} alt="Card content" className="card-image" />
      </motion.div>
    </motion.div>
  )
}

const images = [
  { src: '/assets/images/AI_ETHICS.png', route: '/blog/ai-ethics' },
  { src: '/assets/images/AI_BASICS.png', route: '/blog/ai-basics' },
  { src: '/assets/images/AI_NEWS.png', route: '/blog/ai-news' },
]

export default function Fruits() {
  return images.map((img, index) => (
    <Card imgSrc={img.src} route={img.route} key={index} />
  ))
}
