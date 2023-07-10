import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function Login () {
	let [ inputs, setInputs ] = useState({
		password: '',
		email: ''
	});
	let navigate = useNavigate();

	const handleSignIn = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.post('http://localhost:8001/user/sign-in', {
				email: inputs.email,
				password: inputs.password
			});

			// Request was successful
			// console.log(response.data); // Do something with the response data
			 localStorage.setItem('token', JSON.stringify(response.data.token));
			localStorage.setItem('currentUser', JSON.stringify(response.data.data));
			navigate('/');
		} catch (error) {
			// Request failed
			console.log('Error:', error.response.status);
		}
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center'
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>
					<Box component='form' noValidate sx={{ mt: 1 }}>
						<TextField
							margin='normal'
							onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoFocus
						/>
						<TextField
							margin='normal'
							required
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
						/>
						<Button
							onClick={(event) => handleSignIn(event)}
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href='#' variant='body2'>
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href='/signUp' variant='body2'>
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
