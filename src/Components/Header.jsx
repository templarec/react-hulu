import {Link, Outlet, useLocation, useOutletContext, useParams} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useState} from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DownloadIcon from '@mui/icons-material/Download';

export function Header() {
	const location = useLocation();
	const pathname = location.pathname.split('/')[1]
	// const [bookmarks, setBookmarks] = useState([]);

	const params = useParams();
	const addBookmark = () => {
		// if (!bookmarks.includes(params.id)) {
		// 	setBookmarks(prev => [...prev, params.id])
		// } else {
		// 	setBookmarks(prev => prev.filter(el => el !== params.id))
		// }

	};

	return (
		<>
			<header className="container relative flex flex-row justify-items-start mx-auto mb-10 mt-5">
				{pathname !== '' && <Link to={"/"} className={"self-start absolute left-0 top-0"}>
					<ArrowBackIcon sx={{fontSize: 60}}/>
				</Link>}
				<img className={"mx-auto w-96"} src="../../public/logo.png" alt="logo"/>
			</header>
			{pathname === 'movie' &&
				<div className={"container flex flex-col mx-auto"}>
					<div className={"flex flex-row gap-6 justify-center"}>
						{/*<div onClick={addBookmark}>*/}
						{/*	{bookmarks.includes(params.id) ? <FavoriteIcon/> : <FavoriteBorderIcon/> }*/}
						{/*</div>*/}
						<div>
							<Link to={`/bookmarks/`}>
								<DownloadIcon/>
							</Link>
						</div>
					</div>
					<div className={"flex justify-center"}>
						<ul className={"flex gap-2"}>
							{/*{*/}
							{/*	bookmarks.map((el, i) => (*/}
							{/*		<li key={i}>{el}</li>*/}
							{/*	))*/}
							{/*}*/}
						</ul>
					</div>

				</div>


			}
		</>
	)
}