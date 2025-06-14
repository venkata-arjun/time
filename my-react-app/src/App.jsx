import React, {useState, useEffect} from 'react';
import { FaSun, FaMoon } from "react-icons/fa";
import "./index.css";

function App() {
  
	const [time, setTime] = useState(new Date());
	const [darkMode, setDarkMode] = useState(true);

	useEffect(() => {
		const timer = setInterval(() => setTime(new Date()), 1000);
		return () => clearInterval(timer);
	}, []);

	const formatNumber = (num) => num.toString().padStart(2, '0');

	const formatTime = (date) => {
		let hours = date.getHours();
		const minutes = formatNumber(date.getMinutes());
		const seconds = formatNumber(date.getSeconds());
		const ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12 || 12;
		hours = formatNumber(hours);
		return `${hours} : ${minutes} : ${seconds} ${ampm}`;
	}

	const formatDate = (date) => date.toDateString();

	return (
    <div className={darkMode ? "app dark" : "app light"}>
      <div className="clock-container">
        <h1 className="time">{formatTime(time)}</h1>
        <p className="date">{formatDate(time)}</p>
        <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
          {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
      </div>
    </div>
  );

}

export default App;