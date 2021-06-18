
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
