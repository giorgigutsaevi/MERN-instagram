/* eslint-disable jsx-a11y/alt-text */
import { useContext } from "react";
import { Link } from "react-router-dom"
import FirebaseContext from "../context/firebase";

const Header = () => {

	const { firebase } = useContext(FirebaseContext)
	const user = null;

	return (
		<header className="h-16 bg-white border-b mb-8">
			<div className="container mx-auto max-width-lg h-full">
				<div className="flex justify-between h-full">
					<div className="text-gray-300 text-center flex items-center align-items cursor-pointer">
						<Link to='/'>
							<img
								src='/images/logo.png'
								alt='ig-logo'
								className="mt-2 w-6/12"
							/>
						</Link>
					</div>
					<div className="text-gray text-center flex items-center align-items">
						{user ? (
							<>
								<Link to="/">
									<p>Home</p>
								</Link>

								<button
									type="button"
									title="SIgn Out"
									onClick={() => firebase.auth().signOut()}

								>
									Sign out
								</button>
								<div className="flex items-center cursor-pointer">
									<Link to={`/p/${user.displayName}`}>
										<img
											className="rounded-full h-8 w-8 flex"
											src='#'
										/>
									</Link>
								</div>
							</>
						)
							: (
								<>
									<Link to='/login'>
										<button
											type="button"
											className="text-white bg-blue-medium font-bold text-sm rounded w-20 h-8">
											Login
										</button>
									</Link>
									<Link to="/signup">
										<button
											type="button"
											className="font-bold text-sm rounded text-blue-medium w-20 h-8"
										>
											Sign Up
										</button>
									</Link>
								</>
							)
						}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;