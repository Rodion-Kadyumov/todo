// @flow
import * as React from 'react'
import { PATH } from '../../common/routes/PATH'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'

export const ErrorPage = () => {
  return (
    <Grid container justifyContent={'center'}>
      <Grid item justifyContent={'center'}>
        <h1>Not found</h1>
        <Link to={PATH.ROOT}>
          
        </Link>
      </Grid>
    </Grid>
  )
}
