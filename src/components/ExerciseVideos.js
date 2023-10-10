import { Box, Typography } from '@mui/material'
import React from 'react'

const ExerciseVideos = ({exerciseVideos, name}) => {
  return (
    <Box sx={{marginTop: {lg: '200px', xs: '20px'}}} p='20px'>
      <Typography variant='h3' mb='30px'>
        Watch <span style={{color: '#ff2526', textTransform:'capitalize'}}>{name}</span> exercise videos
      </Typography>
    </Box>
  )
}

export default ExerciseVideos