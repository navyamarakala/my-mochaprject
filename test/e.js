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








describe('Time Converter', function() {
  describe('main()', function() {

      // test_array = // insert array inside closure;
       //against = //insert array inside closure;
		wb.xlsx.readFile(filePath).then(function(){
       callback = function () {
		request.post({
		headers: {'content-type':'application/x-www-form-urlencoded'},
		url: 'https://reqres.in/api/users',
		body: a,b
    },function(error,response,body){
		console.log(body);
	});
        //var test = converter.main (test_array[i]);
        //assert.equal(test, against[i]);
       }

       for(i = 0; i < 2; i++) {

          it(  ' should convert to ', callback);
		   var a= sh.getRow(i).getCell(1).value;
        var b=sh.getRow(i).getCell(2).value;
		console.log("hello");
		callback;
        }
      })
    })