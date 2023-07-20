function sum(tam,eng,mat,sci,soc,name)
{
	document.write("name="+name+"<br>");
	let total=tam+eng+mat+sci+soc;
	let average=(total/5);
	document.write("total="+total+"<br>")
	return "average="+average+"<br>";
	
}

var a=sum(93,72,80,96,76,"bhavani")
{
	document.write(a+"<br>"+"<br>");
}


var b=sum(67,70,80,76,79,"Priyanka")
{
	document.write(b+"<br>"+"<br>");
}