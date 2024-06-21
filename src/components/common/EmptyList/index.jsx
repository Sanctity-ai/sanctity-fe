import React, { useState } from 'react'
import { motion } from 'framer-motion'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import './styles.css'

const EmptyList = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        transform: 'translateY(-30%)', // Adjust this value to move it further up or down
      }}
    >
      <CircularProgress />
    </Box>
  )
}
export default EmptyList
