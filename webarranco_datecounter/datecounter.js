class Counter {

	constructor(element, endDate) {

		this.element = '';
		this.end = new Date(endDate).getTime();
		this.time = 0;

		if(document.querySelector('.'+element) !== null) {
			this.element = document.querySelector('.'+element);
		}

		if(document.getElementById(element) !== null) {
			this.element = document.getElementById(element);
		}

		this.init();
	}

	init() {
		this.calculTime();
	}

	calculTime(callback) {

		var date = this.end - Date.now();
		this.time = this.convertTimestampToDatetime(date/1000);
		this.element.innerHTML = this.time;

		setTimeout(() => {
			this.calculTime();
		}, 1000);
	}

	convertTimestampToDatetime(unix_timestamp) {

		var date = new Date(unix_timestamp*1000);

		var months = date.getMonth(),
			days = date.getDate(),
			hours = date.getHours(),
			minutes = "0" + date.getMinutes(),
			seconds = "0" + date.getSeconds()
		;

		return months + 'm ' + days + 'j ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
	}
}

var countFunctions = new Counter('counter', '2016-08-01 08:00:00');
