
import  { useState } from 'react'
import { Grid, Container, Paper, Avatar,Typography,TextField,Button, CssBaseline } from '@mui/material'


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
			<Container component={Paper} elevation={5} maxWidth='xs' >
				<div>
					<Avatar>
        
					</Avatar>
					<Typography component='h1' variant='h5'>Sign In</Typography>
					<form >
						<TextField
							fullWidth
							autoFocus
							color='primary'
							margin='normal'
							variant='outlined'
							label='Nickname'
							name='nickname'
							value={body.nickname}
							onChange={handleChange}
						/>
						<TextField
							fullWidth
							type='password'
							color='primary'
							margin='normal'
							variant='outlined'
							label='Password'
							name='password'
							value={body.password}
							onChange={handleChange}
						/>
						<Button
							fullWidth
							variant='contained'
							color='secondary'
						
							onClick={() => onSubmit()}
						>
							Sign In
						</Button>
					</form>
				</div>
			</Container>
		</Grid>
    </div>
  )
}

export default Login
