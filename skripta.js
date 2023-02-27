function submit(){
	document.getElementById('novo').append(document.getElementById('textBox').value);
	document.getElementById('textBox').value = "";
	document.getElementById('novo').append("\n");
}