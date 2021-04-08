var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video")
	video.play()
	document.querySelector("#volume").innerHTML=video.volume *100 +"%"
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
	console.log("Pause Video")
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .95
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= .95
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location is " + video.currentTime)

	if (video.currentTime < (video.duration - 15)){
		video.currentTime += 15
		console.log("New location: " +video.currentTime)
	}

	else {
		video.currentTime = 0
		console.log("Going back to beginning")
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){
		video.muted = true
		console.log("Muted")
		this.innerHTML = "Unmute"
	}

	else {
		video.muted = false
		console.log("Unmuted")
		this.innerHTML = "Mute"
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value /100
	document.querySelector("#volume").innerHTML=video.volume *100 + "%"
	console.log("Volume is now at " +video.volume *100 + "%")
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Added Old School");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Removed OldSchool");
	video.classList.remove("oldSchool")
});