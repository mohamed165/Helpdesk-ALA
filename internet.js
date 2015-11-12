function internet() {
	document.getElementById('intlegend').innerHTML="Internet";
	browser();
	function browser()
	{
		var browser = confirm("Kunt u browsen naar www.nu.nl?");
		if (browser == true)
		{
			document.getElementById('browsen').innerHTML="<br />Browsen naar www.nu.nl lukt.";
			ladensnel();
		}
		if (browser == false)
		{
			document.getElementById('browsen').innerHTML="<br />Probleem: Browsen naar www.nu.nl lukt niet.";
			document.getElementById('b_oplossing').innerHTML="<br><a href='data/Internet/internet-laden.html'>Oplossing</a>";
		}
	}

	function ladensnel()
	{
		var ladensnel = confirm("Reageert de pagina snel na het indrukken van F5?")
		if (ladensnel == true)
		{
			document.getElementById('laden').innerHTML="<br />Uw internet laadt goed.";
		}
		if (ladensnel == false)
		{
			document.getElementById('laden').innerHTML="<br />U heeft traag internet.";
			document.getElementById('l_oplossing').innerHTML="<br><a href='data/internet/snelheid-laden.html'>Oplossing</a>";
		}
	}
}
