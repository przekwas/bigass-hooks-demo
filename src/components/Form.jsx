import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ addChirp }) => {
	const [username, setUsername] = React.useState('');
	const [message, setMessage] = React.useState('');

	const submitChirp = (e) => {
		e.preventDefault();
		addChirp({ id: uuidv4(), username, message });
		setUsername('');
		setMessage('');
	};

	return (
		<form className="form-group border rounded-lg p-3">
			<input
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				placeholder="Who be chirpin?"
				type="text"
				className="form-control shadow-sm"
			/>
			<textarea
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				placeholder="What you chirpin?"
				rows={7}
				className="form-control shadow-sm"
			/>
			<button onClick={submitChirp} className="btn btn-primary btn-block mt-3">
				Chirp It
			</button>
		</form>
	);
};

export default Form;
