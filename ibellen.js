function ibellen() {
	document.getElementById('ilegend').innerHTML="<legend>Internet en Telefonie</legend>";
	kiestoon();
	function kiestoon() {
		var kiestoon = confirm("Hoor u een kiestoon?")
		if (kiestoon == true) {
			document.getElementById('kiestoon').innerHTML="<br>U kunt gewoon bellen met uw telefoon.";
			gebeldworden();
		}
		if (kiestoon == false) {
			document.getElementById('kiestoon').innerHTML="<br>Uw telefoon aansluiting doet het niet.";
			document.getElementById('k_oplossing').innerHTML="<br><a href='data/internetbellen/geen-kiestoon.html'>Oplossing</a>";
		}
	}

	function gebeldworden() {
		var gebeldworden = confirm("Kunt u gebeld worden op uw huistelefoon?")
		if (gebeldworden == true) {
			document.getElementById('gebeld').innerHTML="<br>U kunt gebeld worden op uw huistelefoon.";
			mobprobl();
		}
		else {
			document.getElementById('gebeld').innerHTML="Probleem: U kunt niet gebeld worden";
			document.getElementById('g_oplossing').innerHTML="<a href='data/internetbellen/gebeld-worden.html'>Oplossing</a>";
			mobprobl();
		}
	}

	function mobprobl() {
		var mobprobl = confirm("Heeft u problemen met het bellen naar een mobiele telefoon?")
		if (mobprobl == true) {
			document.getElementById('mobiel').innerHTML="<br>Probleem: Kan niet bellen naar mobiel";
			document.getElementById('m_oplossing').innerHTML="<br><a href='data/internetbellen/uit-bellen.html'>Oplossing</a>";
		}
		else {
			document.getElementById('mobiel').innerHTML="<br>Kan bellen naar mobiel";
		}
	}
}
