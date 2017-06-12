export default function Timerformater(time,type){
	const zerofill = (val) => val>=10 ? val : `0${val}`

	let date = new Date(time)
	let year = date.getFullYear()
	let month = date.getMonth()+1
	let day = date.getDate()
	let hours = date.getHours()
	let minutes = date.getMinutes()
	let seconds = date.getSeconds()

	switch(type){
		case 'MM-dd':
			return `${zerofill(month)}-${zerofill(day)}`
		case 'HH:mm':
			return `${zerofill(hours)}:${zerofill(minutes)}`
		case 'yyyy-MM-dd':
			return `${year}-${zerofill(month)}-${zerofill(day)}`
		case 'yyyy-MM-dd HH:mm':
			return `${year}-${zerofill(month)}-${zerofill(day)} ${zerofill(hours)}:${zerofill(minutes)}`
		case 'yyyy-MM-dd HH:mm:ss':
			return `${year}-${zerofill(month)}-${zerofill(day)} ${zerofill(hours)}:${zerofill(minutes)}:${zerofill(seconds)}`

	}
}