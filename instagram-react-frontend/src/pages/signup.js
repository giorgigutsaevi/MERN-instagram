/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { firebase } from "../lib/firebase"

export default function Login() {
	const history = useHistory();
	const [formData, setFormData] = useState({
		username: "",
		fullName: "",
		emailAddress: "",
		password: "",
	})

	const [error, setError] = useState("");

	const isInvalid = formData.password === "" || formData.emailAddress === "";


	const handleChange = (e) => {
		const { value, name } = e.target;
		setFormData(prevState => (
			{
				...prevState,
				[name]: value
			}
		))
	}

	const handleSignup = async (event) => {
		event.preventDefault();
		try {
			const createdUser = await firebase.auth().createUserWithEmailAndPassword(formData.emailAddress, formData.password)

			await firebase.firestore().collection("users").add({
				userId: createdUser.user.uid,
				username: formData.username.toLowerCase(),
				fullName: formData.fullName,
				emailAddress: formData.emailAddress.toLowerCase(),
				following: [],
				followers: [],
				dateCreated: Date.now()
			})

		} catch (error) {
			setFormData(prevState => (
				{
					...prevState,
					username: "",
					fullName: "",
					emailAddress: "",
					password: "",
				}
			))
			setError(error.message)
		}

	};

	useEffect(() => {
		document.title = "SignUp - Instagram";
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

					<form onSubmit={handleSignup} method="POST">
						<input
							type="text"
							placeholder="Username"
							className='text-small text-gray base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
							onChange={handleChange}
							value={formData.username}
							name="username"
						/>
						<input
							type="text"
							placeholder="Full Name"
							className='text-small text-gray base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
							onChange={handleChange}
							value={formData.fullName}
							name="fullName"
						/>
						<input
							type="email"
							placeholder="Email address"
							className='text-small text-gray base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
							onChange={handleChange}
							value={formData.emailAddress}
							name="emailAddress"
						/>
						<input
							type="password"
							placeholder="Password"
							className='text-small text-gray base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
							onChange={handleChange}
							value={formData.password}
							name='password'
						/>
						<button disabled={isInvalid} className='bg-blue-medium text-white w-full rounded h-8 font-bold'>Sign up</button>
					</form>
				</div>
				<div className='flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary'>
					<p className='text-sm'>Have an accountt?
						<Link to='/login' className='font-bold text-blue-medium ml-1 '>
							Login
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}