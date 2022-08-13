import React from 'react'
import  { useState } from 'react'
import { Grid, Container, Paper,Typography,TextField,Button, CssBaseline } from '@mui/material'
import SpaSharpIcon from '@mui/icons-material/SpaSharp';


const Login = () => {
    const [body, setBody] = useState({ nickname: '', password: '' })
  
    
	const handleChange = e => {
		setBody({
			...body,
			[e.target.name]: e.target.value
		})
	}

	const onSubmit = () => {
		console.log(body)
	}

    return (
    <div>
      <Grid container component='main' >
			<CssBaseline />
			<Container component={Paper} elevation={5} maxWidth='xs' sx={{ 
				bgcolor: '#004d40',
				borderRadius: 2,
			      }} >
				<div>
					<SpaSharpIcon sx={{ 
						fontSize: "30px", 
						color: "white", 
						position:"relative", 
						top:"85px", 
						left:'95px'  }}/>
					<Typography
					component='h1' 
					variant='h5' 
					sx={{textAlign:'center', 
					     fontSize:'30px', 
					     color:'white', 
					     marginTop:'50px', 
					     marginBottom:'40px',
						 marginLeft:'30px',
						 fontFamily:'Roboto' }} > PLANTASIA</Typography>
					<form >
						<TextField
						sx={{
							marginBottom:'30px',
							marginTop:'30px',
							
						}}
							fullWidth
							autoFocus
							color='primary'
							margin='normal'
							variant='standard'
							label='Email'
							name='Email'
							value={body.email}
							onChange={handleChange}
						/>
						<TextField
							fullWidth
							autoFocus
							type='password'
							color='primary'
							margin='normal'
							variant='standard'
							label='Password'
							name='password'
							value={body.password}
							onChange={handleChange}
						/>
						<Button sx={{
							marginTop:'50px',
							marginBottom:'100px',
							bgcolor:'transparent',
							width:'50%',
							marginLeft:'100px',
							fontSize:'20px'
						}}
							fullWidth
							variant='contained'
							color='primary'
						
							onClick={() => onSubmit()}
						>
							Iniciar Sesión
						</Button>
					</form>
				</div>
			</Container>
		</Grid>
    </div>
  )
}

export default Login
