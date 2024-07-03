// Lap.js 
import React from "react"; 

export default function Laps({ laps }) { 
	const calculateTimeDifference = (timeString1, timeString2) => { 
		const time1 = new Date(`1970-01-01T${timeString1}Z`); 
		const time2 = new Date(`1970-01-01T${timeString2}Z`); 
		const timeDiff = Math.abs(time2 - time1); 
		const hour = Math.floor(timeDiff / 3600000).toString().padStart(2, '0'); 
		const min = Math.floor((timeDiff % 3600000) / 60000).toString().padStart(2, '0'); 
		const sec = Math.floor((timeDiff % 60000) / 1000).toString().padStart(2, '0'); 
		const milisec = ((timeDiff % 1000) / 10).toString().padStart(2, '0'); 
		const resultString = `${hour}:${min}:${sec}.${milisec}`; 
		return resultString; 
	} 

	return ( 
		<div className="laps" style={{ display: (laps.length) ? 'block' : 'none' }}> 
			<h3><span>Lap</span><span>Time</span><span>Total Time</span></h3> 
			<ul> 
				{laps.map((lap, index) => ( 
					<li key={index}> 
						<span>{`Lap ${index + 1}`}</span> 
						<span>{calculateTimeDifference(lap, (index !== 0) ? laps[index - 1] : "00:00:00.00")}</span> 
						<span>{lap}</span> 
					</li> 
				))} 
			</ul> 
		</div> 
	); 
};
