import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import Signin from './pages/signin';
import Signup from './pages/signup';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signin" element={<Signin />} />
			<Route path="/signup" element={<Signup />} />
		</Routes>
	);
}

export default App;
