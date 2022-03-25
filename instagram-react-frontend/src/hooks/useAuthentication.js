import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase';

const useAuthListener = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
	const { firebase } = useContext(FirebaseContext);

	useEffect(() => {
		const listener = firebase.auth().onAuthStateChanged((authenticatedUser) => {
			// we have a user who is authenticated
			if (authenticatedUser) {
				// store the user in local storage to persist his data across the website
				localStorage.setItem("authUser", JSON.stringify(authenticatedUser));
				setUser(authenticatedUser)
			} else {
				// we don't have an authUser, so clear the localstorage and setUser to null
				localStorage.removeItem("authUser");
				setUser(null);
			}
		});

		// cleaning up the listener function
		return () => listener();
	}, [firebase]);

	return { user };
}

export default useAuthListener;