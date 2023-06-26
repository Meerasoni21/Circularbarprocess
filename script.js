const numb = document.querySelector(".numb");
let counter = 0;
setInterval(()=>
{
	if (counter == 100) 
	{
		cleaeInterval();
	}
	else
	{
		counter+=1;
		numb.textContent = counter + "%";
	}
}, 80);
