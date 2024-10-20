//Freeboard.io Widget to create a simple button which fires a REST POST Event to control a sensor

(function()
{	
	var buttonWidget = function (settings) {
		var self = this;
		var currentSettings = settings;
        <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script>

        var mqttClient = freeboard.getPluginInstance('paho-mqtt');
        var myScript = $("<script>function buttonFunction() { mqttClient.publish('" + currentSettings.topic + "', '" + currentSettings.message + "'); }</script>");

		//TODO: implement payload

		function updateState() {
			//TODO: implement changes and re-render button

		}

		this.render = function (containerElement) {
			$(containerElement).append(myButton);
			$(containerElement).append(myScript);
		}		

		this.onSettingsChanged = function (newSettings) {
			currentSettings = newSettings;
			updateState();	
		}

		this.onCalculatedValueChanged = function (settingName, newValue) {
         // no input so no change ever :-)
     }

     this.onDispose = function () {
     }

     this.getHeight = function () {    
     	return 1;
     }

     this.onSettingsChanged(settings);
 };

 freeboard.loadWidgetPlugin({
 	type_name: "button_widget",
 	display_name: "MQTT Button Widget",
 	settings: [
    {
        name: "topic",
        display_name: "MQTT Topic",
        type: "text"
        },
        {
        name: "message",
        display_name: "MQTT Message",
        type: "text"
        },
 	{
 		name: "button_name",
 		display_name: "Button Name",
 		type: "text"
 	}
 	],
 	newInstance: function (settings, newInstanceCallback) {
 		newInstanceCallback(new buttonWidget(settings));
 	}
 });
}());