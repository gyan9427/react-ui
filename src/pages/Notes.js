import React from 'react'
import { Typography, ThemeProvider, createTheme } from '@material-ui/core'

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
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant='h1' align='left' gutterBottom>
          Notes page
        </Typography>
      </ThemeProvider>
    </div>
  )
}
