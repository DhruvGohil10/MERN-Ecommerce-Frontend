import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Chip from '@mui/material/Chip';

const Dashboard = () => {
	let [ products, setProducts ] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:8001/product/get-all-products')
			.then(function (response) {
				// handle success
				// console.log(response.data.data);
				setProducts(response.data.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, []);

	const handleAddToCart = async (productId) => {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));

		axios
			.post('http://localhost:8001/cart/add-to-cart', {
				userID: currentUser._id,
				productID: productId
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', rowGap: '2rem' }}>
			{products.map((productObj, i) => {
				return (
					<Card sx={{ maxWidth: 345 }} key={i}>
						<CardMedia
							sx={{ height: 140 }}
							image={`http://localhost:8001/uploads/product/${productObj.image}`}
							title='green iguana'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								{productObj.name}
							</Typography>
							<Typography variant='subtitle2' gutterBottom>
								{'price: ' + productObj.price}
							</Typography>
							<Chip label={productObj.category.name} variant="outlined" />
							<Typography variant='body2' color='text.secondary'>
								{productObj.description}
							</Typography>
							<Rating
								name='text-feedback'
								value={productObj.rating}
								readOnly
								precision={0.5}
								emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
							/>
							<Button
								onClick={() => handleAddToCart(productObj._id)}
								sx={{ display: 'block', margin: '0 auto' }}
								variant='contained'
							>
								Add to cart
							</Button>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
};

export default Dashboard;
