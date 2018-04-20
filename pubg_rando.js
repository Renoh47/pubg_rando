"use strict";
var outputText = document.getElementById("outputText");
var p;
var u;
var b;
var g;
loadTextFiles();

function loadTextFiles() 
{
	var req = new XMLHttpRequest();
	req.onload = function(){
	    p = processText(this.responseText);
	};
	req.open('GET', './p.txt');
	req.send();
	req = new XMLHttpRequest();
	req.onload = function(){
	    u = processText(this.responseText);
	};
	req.open('GET', './u.txt');
	req.send();
	req = new XMLHttpRequest();
	req.onload = function(){
	    b = processText(this.responseText);
	};
	req.open('GET', './b.txt');
	req.send();
	req = new XMLHttpRequest();
	req.onload = function(){
	    g = processText(this.responseText);
	};
	req.open('GET', './g.txt');
	req.send();
}

function processText(responseText)
{
	var list = responseText.split("\n");
	return list;
}

function generateNew()
{
	var pString = p[getRandomInt(0,p.length)];
	var uString = u[getRandomInt(0,u.length)];
	var bString = b[getRandomInt(0,b.length)];
	var gString = g[getRandomInt(0,g.length)];
	pString = capitalize(pString);
	uString = capitalize(uString);
	bString = capitalize(bString);
	gString = capitalize(gString);
	outputText.innerHTML = pString + " " + uString + " " + bString + " " + gString;
}

function capitalize(str)
{
	return str[0].toUpperCase() + str.substr(1);
}
function getRandomInt(min, max) 
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
