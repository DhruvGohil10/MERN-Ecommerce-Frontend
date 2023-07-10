import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const defaultTheme = createTheme();

export default function SignUp () {
	// const [ selectedImage, setSelectedImage ] = useState(null);

	let [ inputs, setInputs ] = useState({
		name: '',
		contact: '',
		password: '',
		email: '',
		about: '',
		selectedImage: null
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password')
		});
	};

	// const handleImageChange = (e) => {
	// 	setSelectedImage(e.target.files[0]);
	// };

	// const handleUpload = () => {
	// 	const formData = new FormData();
	// 	formData.append('image', selectedImage);

	// 	fetch('/upload', {
	// 		method: 'POST',
	// 		body: formData
	// 	})
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			// Handle response from the backend
	// 			console.log(data);
	// 		})
	// 		.catch((error) => {
	// 			// Handle error
	// 			console.error(error);
	// 		});
	// };

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
						Sign up
					</Typography>
					<Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
									autoComplete='given-name'
									name='firstName'
									required
									fullWidth
									id='firstName'
									label='First Name'
									autoFocus
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id='contact'
									onChange={(e) => setInputs({ ...inputs, contact: e.target.value })}
									label='contact'
									name='contact'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='email'
									onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
									label='Email Address'
									name='email'
									autoComplete='email'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name='password'
									onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
									label='Password'
									type='password'
									id='password'
									autoComplete='new-password'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									id='about'
									label='about'
									name='about'
									onChange={(e) => setInputs({ ...inputs, about: e.target.value })}
								/>
							</Grid>
						</Grid>
						<div>
							<input
								type='file'
								onChange={(e) => setInputs({ ...inputs, selectedImage: e.target.files[0] })}
							/>
							{/* <button onClick={handleUpload}>Upload</button> */}
						</div>
						<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
							Sign Up
						</Button>
						<Grid container justifyContent='flex-end'>
							<Grid item>
								<Link href='/login' variant='body2'>
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
