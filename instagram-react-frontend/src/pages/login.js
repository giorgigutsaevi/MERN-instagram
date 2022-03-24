/* eslint-disable no-unused-vars */
import { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";

export default function Login() {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);

	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");

	const [error, setError] = useState("");

	const isInvalid = password === "" || emailAddress === "";

	const handleLogin = (e) => {
		
	};

	const handleEmailChange = (e) => {
		const { value, name } = e.target;
		setEmailAddress(prevEmailAddress => value)
	}

	const handlePasswordChange = (e) => {
		const { value, name } = e.target;
		setPassword(prevPassword => value)
	}


	useEffect(() => {
		document.title = "Login - Instagram";
	}, [])

	return (
		<div className='container flex mx-auto max-w-screen-md items-center h-screen'>
			<div className='flex w-3/5'>
				<img src='/images/iphone-with-profile.jpeg' alt='iphone-img' />
			</div>
			<div className='flex flex-col w-2/5'>
				<div className='flex flex-col items-center bg-white p-4 border border-gray-button mb-4'>
					<h1 className="flex justify-center w-full">
						<img src='/images/logo.png' alt='ig-logo' className='mt-2 w-6/12 mb-4' />
					</h1>
					{error && <p className='mb-4 text-xs text-red-primary'>{error}</p>}

					<form onSubmit={handleLogin} method="POST">
						<input
							type="email"
							placeholder="Email address"
							className='text-small text-gray base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
							onChange={handleEmailChange}
							value={emailAddress}
						/>
						<input
							type="password"
							placeholder="Password"
							className='text-small text-gray base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
							onChange={handlePasswordChange}
							value={password}
						/>
						<button disabled={isInvalid} className='bg-blue-500 text-white w-full rounded h-8 font-bold'>Log In</button>
					</form>
				</div>
				<div className='flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary'>
					<p className='text-sm'>Dont' have an account?
						<Link to='/signup' className='font-bold text-blue-medium'>
							Sign up
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}