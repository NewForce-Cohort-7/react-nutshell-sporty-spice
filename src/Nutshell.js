import { Route, Routes} from 'react-router-dom';
import './Nutshell.css';
import { Register } from './Components/Auth/Registar';
import { Login } from './Components/Auth/Login';
import { NavBar } from './Components/Nav/NavBar';
import { ApplicationViews } from './Components/Views/ApplicationViews';
import { Authorized } from './Components/Views/Authorized';


export const Nutshell = () => {
	return <Routes>
		<Route path="/login" element={<Login/>} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
          <NavBar/>
          <ApplicationViews/>
        </>
			</Authorized>


		} />
	</Routes>
}
