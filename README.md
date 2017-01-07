MMM-road-report
===================
This a module for the [MagicMirror](https://github.com/MichMich/MagicMirror) project. It displays a graphical road report for the area (state) that you choose.

## Installation
1. Clone this repository into the Magic Mirror `modules` folder.
2. Put an entry as shown below in your `config.js` file.

## Config
The entry in `config.js` can include the following options:

|Option|Description|
|---|---|
|`location`|Specify your location.<br><br>**Type:** `string`<br>**Possible values:** `ND` (more coming soon)
|`maxImageHeight`|The maximum height you want the image to have (preserves aspect ratio). <br><br>**Type:** `string`<br>**Default value:** `400px`|
|`maxImageWidth`|The maximum width you want the image to have (preserves aspect ratio). <br><br>**Type:** `string`<br>**Default value:** `400px`|
|`updateInterval`|How often a new image is retrieved, in milliseconds.<br><br>**Type:** `integer`<br>**Default value:** `10 * 60 * 1000` (every 10 minutes)|

Here is an example of an entry in `config.js`
```
{
	module: 'MMM-road-report',
	position: 'bottom_right',
	config: {
		location: 'ND',
		maxImageHeight: '400px',
		maxImageWidth: '400px',
		updateInterval: 10*60*1000
	}
},
```