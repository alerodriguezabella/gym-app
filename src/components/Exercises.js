import React, { useRef, useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import { Box, Stack, Typography } from '@mui/material'
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises, setExercises, bodyPart}) => {
  const exercisesRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9

  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setCurrentPage(value)

    exercisesRef.current?.scrollIntoView()
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []
      try {
        if(bodyPart === 'all'){
          exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1500', exerciseOptions)
        } else {
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1500`, exerciseOptions)
        }
  
        setExercises(exercisesData)
      } catch (error) {
          console.log('Error', error)
      }
    }

    fetchExercisesData()
  }, [bodyPart])

  return (
    <Box ref={exercisesRef} id='exercises' sx={{mt:{ lg: '110px'}}} mt='50px' p='20px'>
      <Typography variant='h3' mb='46px'>
        Showing results
      </Typography>
      <Stack direction='row' sx={{gap: {lg: '110px', xs: '50px'}}} flexWrap='wrap' justifyContent='center'>
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
          {exercises.length > exercisesPerPage && (
            <Pagination
              color='standard'
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size='large'
            />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises