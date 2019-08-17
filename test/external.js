/*var XLSX = require('xlsx')
var workbook = XLSX.readFile('data.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.log(xlData);*/
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
 it("external data",function(done){
 wb.xlsx.readFile(filePath).then(function(){

	function Cal_Test(a,b){
		console.log("hello11");
	request.post({
		headers: {'content-type':'application/x-www-form-urlencoded'},
		url: 'https://reqres.in/api/users',
		body: a,b
    },function(error,response,body){
		console.log(body);
		
	});
		}
		
	/*it('retrives data',function(done) {
		Promise.resolve(gDb.Collection(CollectionName))
		.then(function(collection) {
			return Promise.resolve(collection.find().toarray());
		})
		.then(function(data)
		{
			expect(_.size(data[0])).tot.be.above(0);
			done();
		});
	});*/
describe("external data",function(){
  
	for (i = 1; i <= sh.rowCount; i++) {
       var a= sh.getRow(i).getCell(1).value;
        var b=sh.getRow(i).getCell(2).value;
		console.log("hello");
		Call_Test(a,b);
	}
		done();
	
});
});
});

