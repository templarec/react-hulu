import {Link, useLocation} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export function Header() {
	const location = useLocation();
	const pathname = location.pathname.split('/')[1]

	return (
		<>
		<header className="container flex flex-row justify-items-start mx-auto mb-14 mt-5">
			{pathname !== '' && <Link to={"/"} className={"self-start"}>
				<ArrowBackIcon sx={{fontSize: 60}}/>
			</Link>}
			<h1 className="font-nova text-7xl mx-auto text-center">React Hulu</h1>
		</header>
		</>
	)
}