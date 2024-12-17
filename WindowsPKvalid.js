//This code was written by Jonathan brahmi 

function CheckProductKey() {
	const inputText = document.getElementById('inputText').value;
	const productkeypattern = /[a-zA-Z0-9]/g; 
	const check = inputText.match(productkeypattern);

              if (check && check.length > 0)  {
                  if (check.length > 25 || check.length < 25)
                  {
		document.getElementById('vsymbol').innerHTML = "\u274C PASS";
                   }
	    else if(check.length == 25)
	    {
	    	document.getElementById('vsymbol').innerHTML = "\u2714 PASS";
                   }
                   else  
                   {
		document.getElementById('vsymbol').innerHTML = ")-:  Error  ";
	     }
          }
}