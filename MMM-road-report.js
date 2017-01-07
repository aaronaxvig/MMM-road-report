/* global Module */

/* Magic Mirror
 * Module: MMM-road-report
 *
 * By Aaron Axvig https://github.com/aaronaxvig
 * MIT Licensed
 */

Module.register("MMM-road-report", {
	defaults: {
		location: "ND",
		maxImageHeight: '200px',
		maxImageWidth: '200px',
		updateInterval: 10 * 60 * 1000 // 10 minutes
	},

	start: function () {
		self = this;
		this.url = '';
		this.urls = {
			'ND': 'http://www.dot.nd.gov/travel-info-v2/downloads/roads-printable.gif'
		}
		this.url = this.urls[this.config.location];

		setInterval(function () {
			self.updateDom(1000);
		}, this.config.updateInterval);
	},

	getStyles: function () {
		return ["MMM-road-report.css"]
	},

	getDom: function () {
		var wrapper = document.createElement("div");
		var image = document.createElement("img");
		if (this.config.ownImagePath != '') {
			image.src = this.url;
		} else {
			image.src = this.url + '?' + new Date().getTime();
		}

		image.className = 'MMM-road-report-image';
		image.style.maxHeight = this.config.maxImageHeight.toString();
		image.style.maxWidth = this.config.maxImageWidth.toString();

		wrapper.appendChild(image);
		return wrapper;
	}
});
