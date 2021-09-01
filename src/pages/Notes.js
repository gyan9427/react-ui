import React from 'react'
import {
  Typography,
  ThemeProvider,
  createTheme,
  Button,
  Container,
} from '@material-ui/core'

const theme = createTheme()

theme.typography.h1 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
}

export default function Notes() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Typography variant='h1' align='left' gutterBottom>
          Notes page
        </Typography>
        <Button type='submit' color='primary'>
          Submit
        </Button>
        <Button type='submit' color='secondary' variant='outlined'>
          Submit
        </Button>
      </ThemeProvider>
    </Container>
  )
}
