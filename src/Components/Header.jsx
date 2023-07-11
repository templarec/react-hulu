import {Link, useLocation, useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export function Header() {
	const location = useLocation();
	const pathname = location.pathname.split('/')[1]
	const navigate = useNavigate()
	return (
		<>
			<header
				className="fixed flex flex-row border-b border-green-400 justify-items-start mx-auto mb-10 top-0 bg-slate-900 w-full z-40">
				{pathname !== '' && <div onClick={() => navigate(-1)}
										 className={"self-start absolute cursor-pointer pl-5 left-0 top-1/2 transform -translate-y-1/2 hover:text-red-800"}>
					<ArrowBackIcon sx={{fontSize: 60}}/>
				</div>}
				<img className={"mx-auto w-96"} src="/logo.png" alt="logo"/>
			</header>
		</>
	)
}