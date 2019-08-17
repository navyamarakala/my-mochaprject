var should = require("should");
var request = require("request");

//var expect = require("chai").expect;
var chai = require('chai');
var chaiHttp=require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var baseUrl = "https://reqres.in";

var util = require("util");

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
	let param='https://reqres.in/api/users'
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
  url:     'https://reqres.in/api/users',
  body:    "name= morpheus,job= Team leader"
}, function(error, response, body){
  console.log(body);
  done();
});
});
});

describe("login",function(){
  it("login",function(done){
request.post({
  headers: {'content-type' : 'application/x-www-form-urlencoded'},
  url:     'https://reqres.in/api/login',
  body:    "email= eve.holt@reqres.in,password: cityslicka"
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
request.del("https://reqres.in/api/users/2",function(error,response,body){
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
	/*var fs=require('fs');
	describe('data driven', () => {
    it('it should take data from csv file', (done) => {
      chai.request(baseUrl)
        .post('/api/users')
        .send(fs.readFile('test1.csv',function(err,data)) {
        .end((err, res) => { 
         expect(res.statusCode).to.equal(200);
		});
	});
	});
	});*/
          
	