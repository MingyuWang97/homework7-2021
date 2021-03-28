var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});



document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector("#volume").innerHTML = "100%"
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("The current speed is:", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95;
	console.log("The current speed is:", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if( (video.currentTime + 15 ) > video.duration)
	{
		video.currentTime = 0;
	}
	else
	{
		video.currentTime += 15;
	}
	console.log("The current location is:", video.currentTime, "s");
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true)
	{
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else
	{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	var video_volume = document.querySelector("#slider").value;
	document.querySelector("#volume").innerHTML = video_volume + "%";
	video.volume = 0.01 * video_volume;
});


document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});