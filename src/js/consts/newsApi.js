 	const key='ec6527c5735a46ef9160f129e37285aa';
	const data = new Date();
	const currentMonth = data.getMonth()+1;
	const currentDay = data.getDate();
	const currentYear = data.getFullYear();

	data.setDate(data.getDate()-7)
	const pastMonth = data.getMonth()+1;
	const pastDay = data.getDate();
	const pastYear = data.getFullYear();
	const from = pastYear+'-'+pastMonth+'-'+pastDay;
	const to = currentYear+'-'+currentMonth+'-'+currentDay;
	const pageSize = '100';
export	const newsParams = {from, to, pageSize,key}
