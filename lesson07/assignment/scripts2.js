
window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({
  id: 5,
  cityid: '5809844',
  appid: 'edceab3dc505dc66289d3d18b0b1b542',
  units: 'metric',
	containerid: 'openweathermap-widget-5',
});

	(function() {
    var script = document.createElement('script');
    script.async = true;
		script.charset = "utf-8";
    script.src = 'http://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);
  })();
