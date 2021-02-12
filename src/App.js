import React, { useState, useEffect } from 'react';
import './App.scss';

const calculateTimeLeft = () => {
	let difference = +new Date(2021, 3, 16) - +new Date();
	let timeLeft = {};

	if (difference > 0) {
		timeLeft = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
			minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
			seconds: (Math.floor((difference / 1000) % 60)).toString().padStart(2, '0'),
		};
	}

	return timeLeft;
};

function App() {
	const [time, setTime] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTime(calculateTimeLeft());
		}, 1000);
		return () => clearTimeout(timer);
	});

	return (
		<div className='Container'>
			<div className='Background'>
				<h1 className='Title'>WE'RE LAUNCHING SOON</h1>
				<div className='Digits'>
					<div>
						<h2>{time.days}</h2>
					</div>
					<div>
						<h2>{time.hours}</h2>
					</div>
					<div>
						<h2>{time.minutes}</h2>
					</div>
					<div>
						<h2>{time.seconds}</h2>
					</div>
				</div>
				<div className='Time'>
					<h2>DAYS</h2>
					<h2>HOURS</h2>
					<h2>MINUTES</h2>
					<h2>SECONDS</h2>
				</div>
			</div>
		</div>
	);
}

export default App;
