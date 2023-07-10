import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {
	let [ products, setProducts ] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));

		try {
			const userid = currentUser._id;
			const response = await axios.get(
				`http://localhost:8001/cart/get-carts-by-userid/${userid}`
			);

			setProducts(response.data.data);
		} catch (error) {
			// Handle errors
			console.error(error);
		}
	};

	const handleAdd = async (id) => {
		try{
			const response = await axios.put(
				`http://localhost:8001/cart/update-quantity/${id}`,
				{
					type: 'increment'
				}
			);

			getData();
		}catch(err){
			console.log(err)
		}
	};

	const handleMinus = async (id) => {
		try{
			const response = await axios.put(
				`http://localhost:8001/cart/update-quantity/${id}`,
				{
					type: 'asdfg'
				}
			);

			getData();
		}catch(err){
			console.log(err)
		}
	}

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
							<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
								<Button onClick={() => handleAdd(productObj._id)} variant='contained'>
									<AddIcon />
								</Button>
								<Typography variant='subtitle2' gutterBottom>
									{productObj.quantity}
								</Typography>
								<Button onClick={() => handleMinus(productObj._id)} variant='contained'>
									<RemoveIcon />
								</Button>
							</div>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
};

export default Cart;
