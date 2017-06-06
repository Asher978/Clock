var sound = new Audio("http://www.freespecialeffects.co.uk/soundfx/sirens/alarm_01.wav");
    sound.loop = true;

timeRefresh = function(){
	var currentTime = new Date(),//creates a variable cuurentTime that pulls the time	 hour = currentTime.getHours(); // assigning the value to variable hours
		minute = currentTime.getMinutes(), // assigning the value to variable minutes
		second = currentTime.getSeconds(), // assigning the value to variable seconds
		date = new Date(),
	    hour.innerHTML = date.getHours();
	    hour.value = hour.innerHTML;
	    minute.innerHTML = date.getMinutes(),
	    minute.value = minute.innerHTML,
	    second.innerHTML = date.getSeconds(),
	    second.value = second.innerHTML,
	    refreshTime = 500,
	    alarmTimer = null,
		aSwitch.On = false,
		aSwitch.value = "OFF";
    
    setTimeout("timeRefresh()", refreshTime);
};
timeRefresh();
        
        // This is called whenever the inputs are changed to stop invalid forms.
        numCap = function( obj, min, max){
            obj.value = Math.max(obj.min, Math.min(obj.max, obj.value) );
            
            alarmSet();// Starts up the alarm automatically when a value is changed.
        };

	var displayclock = document.getElementById('myClock'); //declaring and assigning a variable to the id of element where clock will appear
	displayclock.innerHTML = hour + ":" + minute + ":" + second + " " + amPm; //formatting of layout of clock and setting it to display
	setTimeout('digClock()', 1000);
}
digClock();








