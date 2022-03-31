import React, {useEffect} from 'react'

function NotFound() {

	useEffect(()=> {
		document.title = "Instagram - 404 Not Found"
	}, [])

	return (
		<div>Not Found Page</div>
	)
}

export default NotFound;