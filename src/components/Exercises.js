import React from 'react'
import { Pagination } from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'


import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
const Exercises = ({ setExercises, bodyPart, exercises }) => {
  return (
    <Box id='exercises'
      mt='50px'
      p='20px'
      sx={{ mt: { lg: '110px' } }}
    >
      <Typography mb='46px' variant='h3'>Showing Results</Typography>
      <Stack sx={{ gap: { lg: '110px', xs: '50px' } }} direction='row' flexwrap='wrap' justifyContent='center'>
        {
          exercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))
        }
      </Stack>
    </Box>
  )
}

export default Exercises