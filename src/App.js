import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import Login from './components/auth/Login';
import Home from './components/Home';
import ProtectedRoute from './components/authRoutes/ProtectedRoute';
import PublicRoute from './components/authRoutes/PublicRoute';
import SignUp from './components/auth/SignUp';


function App () {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<ProtectedRoute />}>
						<Route path='/' element={<Products />} />
						<Route path='/cart' element={<Cart />} />
					</Route>

					<Route path='/' element={<PublicRoute />}>
						<Route path='/login' element={<Login />} />
						<Route path='/signUp' element={<SignUp />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
