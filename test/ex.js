var Excel = require('exceljs');

var wb = new Excel.Workbook();
var path = require('path');
var filePath = path.resolve('data.xlsx');
var should = require("should");
var request = require("request");

//var expect = require("chai").expect;
var chai = require('chai');
var chaiHttp=require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var baseUrl = "https://reqres.in";

var util = require("util");
var sh = wb.getWorksheet("Sheet1");


   // i is now within the function scope and won't change anymore
   
	
   //var test = converter.main(test_array[i]);
   //assert.equal(test, against[i]);
    wb.xlsx.readFile(filePath).then(function(){

describe('Time Converter', function() {
 //describe('main()', function() {
	 console.log("hello1");
	 function call_Test(a,b) {
	 it(test_array[i]  + ' should convert to ' + against[i], function() {
	   request.post({
		headers: {'content-type':'application/x-www-form-urlencoded'},
		url: 'https://reqres.in/api/users',
		body: a,b
    },function(error,response,body){
		console.log(body);
		
	});
	  for (i = 1; i <= 2; i++) {
       var a= sh.getRow(i).getCell(1).value;
        var b=sh.getRow(i).getCell(2).value;
		console.log("hello");
		Call_Test(a,b);
		done();
	};
  });
 };
});
});
	

