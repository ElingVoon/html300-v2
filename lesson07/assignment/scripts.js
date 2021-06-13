	//
  // window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({
  //   id: 5,
  //   cityid: '5809844',
  //   appid: 'edceab3dc505dc66289d3d18b0b1b542',
  //   units: 'metric',
	// 	containerid: 'openweathermap-widget-5',
	// });
	//
	// 	(function() {
  //     var script = document.createElement('script');
	//     script.async = true;
	// 		script.charset = "utf-8";
	//     script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
	//     var s = document.getElementsByTagName('script')[0];
	//     s.parentNode.insertBefore(script, s);
  //   })();

	 //
	 window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
	 window.weatherWidgetConfig.push({
			 selector:".weatherForecastWidget",
			 apiKey:"MBV3H2EP9GUJWZVWVCS6PY55F", //Sign up for your personal key
			 location:"Seattle, WA, USA", //Enter an address
			 unitGroup:"us", //"us" or "metric"
			 // forecastDays:7, //how many days forecast to show
			 // title:"Seattle, USA", //optional title to show in the
			 // showTitle:true,
			 // showConditions:true
	 });

	 (function() {
 		var d = document, s = d.createElement('script');
 		s.src = 'https://www.visualcrossing.com/widgets/forecast/weather-forecast-widget-d3.js';
 		s.setAttribute('data-timestamp', +new Date());
 		(d.head || d.body).appendChild(s);
 		})();
