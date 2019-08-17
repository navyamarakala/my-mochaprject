var fs=require('fs');
var csv=require('fast-csv');
var ws=fs.createWriteStream('my.csv');

csv.
	write([
		["a1","a2"],
		["b1","b2"],
		["c1","c2"]
		],{headers:true})
		.pipe(ws)
	
