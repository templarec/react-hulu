import {Link, useLocation} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export function Header() {
	const location = useLocation();
	const pathname = location.pathname.split('/')[1]

	return (
		<>
			<header className="container relative flex flex-row justify-items-start mx-auto mb-10 mt-5">
				{pathname !== '' && <Link to={"/"} className={"self-start absolute left-0 top-0"}>
					<ArrowBackIcon sx={{fontSize: 60}}/>
				</Link>}
				<img className={"mx-auto w-96"} src="../../public/logo.png" alt="logo"/>
			</header>
		</>
	)
}