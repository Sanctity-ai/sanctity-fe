import React from 'react'
import { useState } from 'react'
import './styles.css'
import { motion } from 'framer-motion'

const Header = () => {
  const text = [
    'S',
    'A',
    'N',
    'C',
    'T',
    'I',
    'T',
    'Y',
    `\t`,
    'B',
    'L',
    'O',
    'G',
    'S',
  ]

  const paragraphText = [
    'A',
    'w',
    'e',
    's',
    'o',
    'm',
    'e',
    ' ',
    'p',
    'l',
    'a',
    'c',
    'e',
    ' ',
    't',
    'o',
    ' ',
    'm',
    'a',
    'k',
    'e',
    ' ',
    'o',
    'n',
    'e',
    's',
    'e',
    'l',
    'f',
    ' ',
    <br key="br1" />,
    ' ',
    'p',
    'r',
    'o',
    'd',
    'u',
    'c',
    't',
    'i',
    'v',
    'e',
    ' ',
    'a',
    'n',
    'd',
    ' ',
    'e',
    'n',
    't',
    'e',
    'r',
    't',
    'a',
    'i',
    'n',
    'e',
    'd',
    ' ',
    't',
    'h',
    'r',
    'o',
    'u',
    'g',
    'h',
    ' ',
    'd',
    'a',
    'i',
    'l',
    'y',
    ' ',
    'u',
    'p',
    'd',
    'a',
    't',
    'e',
    's',
    '.',
  ]

  return (
    <header className="home-header">
      {/* <h2>Inc. This Morning</h2> */}
      <h1 class="sanctity_heading">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.0,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{' '}
          </motion.span>
        ))}
      </h1>
      <p>
        {paragraphText.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.0,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{' '}
          </motion.span>
        ))}
      </p>
    </header>
  )
}

export default Header
