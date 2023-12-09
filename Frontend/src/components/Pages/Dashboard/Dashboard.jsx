import React from 'react'
import { Box, Container, Typography, Grid } from '@mui/material'
import Page from '../../common/Page'

// ----------------------------------------------------------------------


const Dashboard = () => {

	return (
		<Page title="TrackerTecsup | Dashboard">
			<Container maxWidth="xl">
				<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Typography sx={{ mt: 3, fontWeight: 'bold' }} variant='h5'>Bienvenido a</Typography>
					<Typography sx={{ mt: 3, fontWeight: 'bold' }} variant='h2'>TrackerTecsup || Students</Typography>
				</Box>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={12}>
					<img src='https://i.imgur.com/Hh4Vfmm.jpeg' alt='...' style={{ display: 'block', margin: 'auto', width: '100%', height: 'auto', marginTop: 30 }} />
					</Grid>
				</Grid>
			</Container>
		</Page>
	)
}

export default Dashboard