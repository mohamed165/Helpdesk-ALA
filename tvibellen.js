function tvibellen(){
	document.getElementById('tvilegend').innerHTML="TV, Internet en Telefonie";
	tv();
	function tv() {
		var tv = prompt("Hoeveel tv's heeft u?")
		document.getElementById('aantal').innerHTML="<br>Klant heeft " + tv + " tv('s).";
		if (tv >1) {
			splitter();
		}
		else {
			setupbox();
		}
	}

	function splitter() {
		var splitter = confirm("Is uw splitter goed aangesloten?")
		if (splitter == true) {
			document.getElementById('splitter').innerHTML="<br>Splitter is goed aangesloten.";
			setupbox();
		}
		else {
			document.getElementById('splitter').innerHTML="<br>Probleem: Splitter is niet goed aangesloten.";
			document.document.getElementById('s_oplossing').innerHTML="<br><a href='data/internetbellentelevisie/splitter-aangesloten.html'>Oplossing</a>";
			setupbox();
		}
	}

	function setupbox() {
		var setupbox = confirm("Is uw settopbox goed aangesloten?");
		if (setupbox == true) {
			document.getElementById('setupbox').innerHTML="<br>Uw settopbox is goed aangesloten.";
			zenders();
		}
		else {
			document.getElementById('setupbox').innerHTML="<br>Probleem: Uw settopbox is niet goed aangesloten.";
			document.getElementById('setup_oplossing').innerHTML="<br><a href='data/internetbellentelevisie/settopbox-aangesloten.html'>Oplossing</a>";
		}
	}

	function zenders() {
		var zenders = confirm("Worden de zenders gevonden?");
		if (zenders == true) {
			document.getElementById('zenders').innerHTML="<br>Zenders worden gevonden<br>U heeft geen probleem met uw tv('s).";
		}
		else {
			document.getElementById('zenders').innerHTML="Zenders worden niet gevonden.";
			document.getElementById('z_oplossing').innerHTML="<br><a href='data/internetbellentelevisie/zenders-niet-gevonden.html'>Oplossing</a>";
		}
	}
}
