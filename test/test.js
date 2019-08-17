var should = require("should");
var request = require("request");

//var expect = require("chai").expect;
var chai = require('chai');
var chaiHttp=require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var baseUrl = "https://reqres.in";

var util = require("util");
// describe.skip for pending test suite execution,it.skip for pending testcase execution
//describe.only and it.only for running those test suite and testcases only
describe('single user', function() {

    it('returns single user', function(done) {

        request.get({ url: baseUrl + '/api/users/2' },

            function(error, response, body) {

            		var bodyObj = JSON.parse(body);
					expect(bodyObj.data.id).to.equal(2);
            		expect(bodyObj.data.first_name).to.deep.equal("Janet");
					expect(bodyObj.data.last_name).to.equal("Weaver");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);

                done();

            });
    });
});

describe('list users', function() {

    it('list users', function(done) {

        request.get({ url: baseUrl + '/api/users?page=2' },

            function(error, response, body) {

            		var bodyObj = JSON.parse(body);
					/*expect(bodyObj.data.id).to.equal(2);
            		expect(bodyObj.data.first_name).to.deep.equal("Janet");
					expect(bodyObj.data.last_name).to.equal("Weaver");*/
                    expect(response.statusCode).to.equal(200);
                    console.log(body);

                done();

            });
    });
});



describe('Single user not found', function() {

    it(' single user not found', function(done) {

        request.get({ url: baseUrl + '/api/users/23' },
            function(error, response, body) {
            		var bodyObj = JSON.parse(body);
                    expect(response.statusCode).to.equal(404);
                    console.log(body);
                done();

            });
    });
});

describe('list of user', function() {

    it('list of users', function(done) {

        request.get({ url: baseUrl + '/api/unknown' },

            function(error, response, body) {

            		var bodyObj = JSON.parse(body);
					/*expect(bodyObj.data.id).to.equal(2);
            		expect(bodyObj.data.first_name).to.deep.equal("Janet");
					expect(bodyObj.data.last_name).to.equal("Weaver");*/
                    expect(response.statusCode).to.equal(200);

                    console.log(body);

                done();

            });
    });
});
describe('single user list', function() {

    it('single user list', function(done) {

        request.get({ url: baseUrl + '/api/unknown/2' },

            function(error, response, body) {

            		var bodyObj = JSON.parse(body);
					//expect(bodyObj.data.id).to.equal(2);
            		//expect(bodyObj.data.name).to.deep.equal("fuchsia rose");
					//expect(bodyObj.data.last_name).to.equal("");
                    expect(response.statusCode).to.equal(200);

                    console.log(body);

                done();

            });
    });
});

/*describe("create new post",()=>{
	let param="/api/users"
	it("post method",(done)=>{
		
		let data={
			name : "morpheus",
			job : "leader"
		}
		//request({ url: param, method: 'PUT', json: {foo: "bar", woo: "car"}}, callback)
		expect.request(baseUrl).post(param).send(data).end((err,res) => {
		expect(response.statusCode).to.equal(200);
		expect(bodyObj.name).to.deep.equal("morpheus");
		console.log(body);
		done();
	})
	})
})

describe("create new post",function(){
	let param= baseUrl+'/api/users'
  it("create new post",function(done){
	  
    request
    .post(param)
    .send({name: "morpheus", job: "leader"})
    .expect("Content-type",/json/)
    .expect(201)
    .end(function(err,res){
     expect(response.statusCode).to.equal(200);
	expect(bodyObj.name).to.deep.equal("morpheus");
	console.log(body);
		done();
    });
  });

});*/


describe("create new post",function(){
  it("create new post",function(done){
request.post({
  headers: {'content-type' : 'application/x-www-form-urlencoded'},
  url:     baseUrl+'/api/users',
  body:    "name= morpheus,job= Team leader"
}, function(error, response, body){
  console.log(body);
  done();
});
});
});

describe("login fail",function(){
  it("login",function(done){
request.post({
  headers: {'content-type' : 'application/x-www-form-urlencoded'},
  url:     baseUrl+'/api/login',
  body:    "email= eve.holt@reqres.in"
}, function(error, response, body){
  console.log(body);
  done();
});
});
});


/*describe("login successful",function(){
  it("login successful",function(done){
const auserCredentials = {
  email: 'eve.holt@reqres.in', 
  password: 'cityslicka'
}
 request.post({
  headers: {'content-type' : 'application/x-www-form-urlencoded'},
  url:     'https://reqres.in/api/login',
  body:    auserCredentials
 }, 
 function(error, response, body){
	// var bodyObj = JSON.parse(body);
      //expect(response.statusCode).to.equal(200);
	  //expect(response.statusCode).to.equal(200);

	  	//expect(bodyObj.token).to.deep.equal("QpwL5tke4Pnpja7X4");
		console.log(body);
      done();
    });
});
  */

  
describe("put is for changing the complete data(replacement of resource) ",function(){
  it("replacement of resource",function(done){
var data = {name: "morpheus",job: "zion resident"};
request({
   method: 'PUT',
   uri: baseUrl+'/api/users/2',
   multipart: [{
       'content-type':'application/json',
       body: JSON.stringify(data) 
   }]
}, function(error, request, body){
   console.log(body);
   done();
});
  });
});

describe("patch for modifying existing data",function(){
  it("patch for modifying existing data",function(done){
var data = {name: "morpheus",job: "zion resident"};
request({
   method: 'PATCH',
   uri: 'https://reqres.in/api/users/2',
   multipart: [{
       'content-type':'application/json',
       body: JSON.stringify(data) 
   }]
}, function(error, request, body){
   console.log(body);
   done();
});
  });
});

describe("delete data",function(){
  it("delete data",function(done){
//var data = {name: "morpheus",job: "zion resident"};
//var request=require("request");
request.del(baseUrl+"/api/users/2",function(error,response,body){
if(error){
                  console.log(error);
             }else{
                 // console.log(response);
                  console.log(body);
				 expect(response.statusCode).to.equal(204);
            }
			done();
});
  });
});


/*describe('PUT /tasks/:id', function() {
        it('updates a task', function(done) {
            request({ url: 'https://reqres.in/api/users/2', method: 'PUT', json: { name: "morpheus",job: "zion resident"}})
           /* request.put('https://reqres.in/api/users/2')
                .send({
                    name: "morpheus",
					job: "zion resident"
                })
                .expect(200)
                .end(function(err, res) {
                    done(err);
		expect(response.statusCode).to.equal(200);
		expect(bodyObj.name).to.deep.equal("morpheus");
		console.log(body);
		done();
                });
        });*/
    
	
	describe('/POST Register', () => {
		let register_details = {
			'email': 'eve.holt@reqres.in',
			'password': 'pistol'
		};
		let login_details={
					email: 'eve.holt@reqres.in',
					password: 'cityslicka'
				};

    it('it should register Login, and check token', (done) => {
		/*var controller = new createController();
    expect(controller).toBeDefined();*/

      chai.request(baseUrl)
        .post('/api/register')
        .send(register_details) 
        .end((err, res) => { 
         expect(res.statusCode).to.equal(200);
          //expect(res.body.state).to.be.true;
			          // follow up with login
          chai.request(baseUrl)
            .post('/api/login')
            .send(login_details)
            .end((err, res) => {
              console.log('this was run the login part');
              //res.should.have.status(200);
			  expect(res.statusCode).to.equal(200);
             // expect(res.body.state).to.be.true;
              res.body.should.have.property('token'); 
			  //console.log(token);
              
              let token = res.body.token;
              // follow up with requesting user protected page
              chai.request(baseUrl)
                .get('/api/login')
                // we set the auth header with our token
                .set('Authorization', token)
                .end((err, res) => {
					//var bodyObj = JSON.parse(body);
					expect(res.statusCode).to.equal(200);
                  //res.should.have.status(200);
                 // expect(res.body.state).to.be.true;
                  //res.body.data.should.be.an('object');
					console.log(token);
                  done(); // Don't forget the done callback to indicate we're done!
                });
            });
 
        });
    });
  });
  
  
/*describe('/POST Register', () => {
    it('it should register Login, and check token', (done) => {
		/*var controller = new createController();
    expect(controller).toBeDefined();*/

     /* chai.request(baseUrl)
        .post('/api/users')
        .send() 
        .end((err, res) => { 
         expect(res.statusCode).to.equal(200);
          //expect(res.body.state).to.be.true;
			          // follow up with login
          chai.request(baseUrl)
            .post('/api/login')
            .send(login_details)
            .end((err, res) => {
              console.log('this was run the login part');
              //res.should.have.status(200);
			  expect(res.statusCode).to.equal(200);
             // expect(res.body.state).to.be.true*/
    
/*describe('/POST Register', () => {
    it('it should register Login, and check token', (done) => {
	
var csv = require('csv'); 
// loads the csv module referenced above.
​
var obj = csv(); 
// gets the csv module to access the required functionality
​
function MyCSV(Fone, Ftwo, Fthree) {
    this.FieldOne = Fone;
    this.FieldTwo = Ftwo;
    this.FieldThree = Fthree;
}; 
// Define the MyCSV object with parameterized constructor, this will be used for storing the data read from the csv into an array of MyCSV. You will need to define each field as shown above.
​
var MyData = []; 
// MyData array will contain the data from the CSV file and it will be sent to the clients request over HTTP. 
​
obj.from.path('C:\Users\home\Desktop\MochaChai\test\test1.csv').to.array(function (data) {
    for (var index = 0; index < data.length; index++) {
        MyData.push(new MyCSV(data[index][0], data[index][1], data[index][2]));
    }
    console.log(MyData);
});
//Reads the CSV file from the path you specify, and the data is stored in the array we specified using callback function.  This function iterates through an array and each line from the CSV file will be pushed as a record to another array called MyData , and logs the data into the console to ensure it worked.
​
var http = require('http');
//Load the http module.
​
var server = http.createServer(function (req, resp) {
    resp.writeHead(200, { 'content-type': 'application/json' });
    resp.end(JSON.stringify(MyData));
});
// Create a webserver with a request listener callback.  This will write the response header with the content type as json, and end the response by sending the MyData array in JSON format.
​
server.listen(8080);
done();
	});
});*/

/*require('./sample.js');
describe('writing to file', () => {
    it('should write to file', (done) => {*/
		