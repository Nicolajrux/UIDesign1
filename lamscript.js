// this part creates the canvas image link to the html

		const btnDownload = document.querySelector("#btnDownload");
		const btnSubmit =document.querySelector("#btnSubmit");

		const myCanvas = document.getElementById("myCanvas");
		const ctx = myCanvas.getContext("2d");

		const audio = document.getElementById("audio");
		const audioSources = ["audio/click.mp3", "audio/fart01.mp3", "audio/alphastein-nein.mp3", "audio/anime-wow-sound-effect.mp3",
			"audio/error_CDOxCYm.mp3", "audio/fart-with-reverb.mp3","audio/katon.mp3", "audio/loading-lost-connection-green-screen-with-sound-effect-2.mp3",
			  "audio/taddddaaaaa_1.mp3", "audio/y2mate_5gbydy1.mp3"];


		// animation for the canvas to fade in
		let opacity = 0;
		function fadeIn() {
		  opacity += 0.01;
		  myCanvas.style.opacity = opacity;
		  if (opacity < 1) {
		    requestAnimationFrame(fadeIn);
		  }
		}


		// No its time for the mathematical part muhahahhaha

		function write_square(image, pos, loc){
			// image is the variable of the canvas
			// pos is an integer giving the position of the middle square to edit
			// loc is an integer between 0 and 8 and gives the location of the small quare inside the moddle square

			// this function edites a middle square in the canvas

			let n = 16;
			let x = pos % n;
			let y = (pos-x)/n;

			let a = loc % 3;
			let b = (loc-a)/3;

			image.fillRect((3*x+a)*10,(3*y+b)*10,10,10);
		}

		function decode(text,image){

			let N = text.length;

			if (N>256) {
				console.log("You used more then 256 characters!")
				return 1
			}

			image.fillStyle ="#000";
			for (let pos = 0; pos < N; pos++) {
  				if (text.charAt(pos) == "A") {
  					write_square(ctx,pos,0);
  					write_square(ctx,pos,1);

				} else if (text.charAt(pos) == "B") {
  					write_square(ctx,pos,0);
  					write_square(ctx,pos,2);
  				
  				} else if (text.charAt(pos) == "C") {
  					write_square(ctx,pos,0);
  					write_square(ctx,pos,3);
  				
  				} else if (text.charAt(pos) == "D") {
  					write_square(ctx,pos,0);
  					write_square(ctx,pos,4);
  				
  				} else if (text.charAt(pos) == "E") {
  					write_square(ctx,pos,0);
  					write_square(ctx,pos,5);
  				
  				} else if (text.charAt(pos) == "F") {
  					write_square(ctx,pos,0);
  					write_square(ctx,pos,6);
  				
  				} else if (text.charAt(pos) == "G") {
  					write_square(ctx,pos,0);
  					write_square(ctx,pos,7);

  				} else if (text.charAt(pos) == "H") {
  					write_square(ctx,pos,0);
  					write_square(ctx,pos,8);
  				
  				} else if (text.charAt(pos) == "I") {
  					write_square(ctx,pos,1);
  					write_square(ctx,pos,2);
  				
  				} else if (text.charAt(pos) == "J") {
  					write_square(ctx,pos,1);
  					write_square(ctx,pos,3);
  				
  				} else if (text.charAt(pos) == "K") {
  					write_square(ctx,pos,1);
  					write_square(ctx,pos,4);
  				
  				} else if (text.charAt(pos) == "L") {
  					write_square(ctx,pos,1);
  					write_square(ctx,pos,5);
  				
  				} else if (text.charAt(pos) == "M") {
  					write_square(ctx,pos,1);
  					write_square(ctx,pos,6);
  				
  				} else if (text.charAt(pos) == "N") {
  					write_square(ctx,pos,1);
  					write_square(ctx,pos,7);
  				
  				} else if (text.charAt(pos) == "O") {
  					write_square(ctx,pos,1);
  					write_square(ctx,pos,8);

  				} else if (text.charAt(pos) == "P") {
  					write_square(ctx,pos,2);
  					write_square(ctx,pos,3);
  				
  				} else if (text.charAt(pos) == "Q") {
  					write_square(ctx,pos,2);
  					write_square(ctx,pos,4);
  				
  				} else if (text.charAt(pos) == "R") {
  					write_square(ctx,pos,2);
  					write_square(ctx,pos,5);
  				
  				} else if (text.charAt(pos) == "S") {
  					write_square(ctx,pos,2);
  					write_square(ctx,pos,6);
  				
  				} else if (text.charAt(pos) == "T") {
  					write_square(ctx,pos,2);
  					write_square(ctx,pos,7);
  				
  				} else if (text.charAt(pos) == "U") {
  					write_square(ctx,pos,2);
  					write_square(ctx,pos,8);
  				
  				} else if (text.charAt(pos) == "V") {
  					write_square(ctx,pos,3);
  					write_square(ctx,pos,4);
  				
  				} else if (text.charAt(pos) == "W") {
  					write_square(ctx,pos,3);
  					write_square(ctx,pos,5);
  				
  				} else if (text.charAt(pos) == "X") {
  					write_square(ctx,pos,3);
  					write_square(ctx,pos,6);
  				
  				} else if (text.charAt(pos) == "Y") {
  					write_square(ctx,pos,3);
  					write_square(ctx,pos,7);
  				
  				} else if (text.charAt(pos) == "Z") {
  					write_square(ctx,pos,3);
  					write_square(ctx,pos,8);
  				
  				} else if (text.charAt(pos) == "Ü") {
  					write_square(ctx,pos,4);
  					write_square(ctx,pos,5);
  				
  				} else if (text.charAt(pos) == "Ä") {
  					write_square(ctx,pos,4);
  					write_square(ctx,pos,6);
  				
  				} else if (text.charAt(pos) == "Ö") {
  					write_square(ctx,pos,4);
  					write_square(ctx,pos,7);
  				
  				} else if (text.charAt(pos) == "ß") {
  					write_square(ctx,pos,4);
  					write_square(ctx,pos,8);
  				
  				} else if (text.charAt(pos) == ".") {
  					write_square(ctx,pos,5);
  					write_square(ctx,pos,6);

  				} else if (text.charAt(pos) == ",") {
  					write_square(ctx,pos,5);
  					write_square(ctx,pos,7);
  				
  				} else if (text.charAt(pos) == "!") {
  					write_square(ctx,pos,5);
  					write_square(ctx,pos,8);
  				
  				} else if (text.charAt(pos) == "?") {
  					write_square(ctx,pos,6);
  					write_square(ctx,pos,7);
  				
  				} else if (text.charAt(pos) == ")") {
  					write_square(ctx,pos,6);
  					write_square(ctx,pos,8);
  				
  				} else if (text.charAt(pos) == "(") {
  					write_square(ctx,pos,7);
  					write_square(ctx,pos,8);
  				
				} else {
					console.log("Something Went wrong you pushed a unkown character"); // have to write some error message here !!! TODO
				}
			} //for loop
		

			image.fillStyle = "#111111";
			for (let x =0; x<16; x++) {
				image.fillRect(0,x*3*10,480,1);
				image.fillRect(x*3*10,0,1,480);
			}

		

		}// function


		btnSubmit.addEventListener("click",function (){
			let userInput = document.querySelector("#userInput");
			
			const randomIndex = Math.floor(Math.random() * audioSources.length);
			const randomAudioSource = audioSources[randomIndex];
			document.getElementById("audio-source").src = randomAudioSource;
			audio.load();
			audio.play();

			let text = String(userInput.value);                                    // chast insput object to string
			text = text.replace(/\s+/g, '')                                        // remove spaces
			text = text.toUpperCase();                                             // only use upper chase characters
			ctx.fillStyle = "#009600";
			ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
			ctx.fillStyle = "#FFFFFF";

			decode(text,ctx);
			userInput.classList.add('fade-out');
			console.log('Waiting...');
			setTimeout(() => {
  			console.log('5 seconds have passed!');
  			// Additional code to execute after 5 seconds
  			userInput.style.display = "none";


			
			myCanvas.style.display = "block";
			console.log("Canvas has been updated !")
			fadeIn();

			}, 1000);

		});


		btnDownload.addEventListener("click",function (){
			if (window.navigator.msSaveBlob){
				window.navigator.msSaveBlob(myCanvas.msToBlob(), "canva-image.png");
		} else {
			const a = document.createElement("a");

			document.body.appendChild(a);
			a.href = myCanvas.toDataURL();
			a.download  = "canva-image.png";
			a.click();
			document.body.removeChild(a);
		}
		});



