const http = require("http");
const arrydata = require("./api");
http
  .createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "application/json" });
    resp.write(JSON.stringify(arrydata));
    resp.end();
  })
  .listen(3000, () => {
    console.log("server is running on port 3000");
  });
// const http = require("http");
// const ararydata=require("./api");
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(JSON.stringify(ararydata));
//     res.end();
//   })
//   .listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
//   });

// ---------------------------------------
// const colour=require("colours")
// console.log("hello world ki halll hy ".red); // hello world
// console.log("bhai chawlyna mara kr ")

// ---------------------------------------
// const http = require("http");
// http
//   .createServer((req, resp) => {
//     resp.write("<h1> This is node js server for practice </h1>");
//     resp.end();
//   })
//   .listen(4500);

// ---------------------------------------
// const fs=require("fs");
// fs.writeFileSync("hello.txt","hello world"); // hello world

// ---------------------------------------
// const app=require("./app.js");

// // console.log(app); // 20

// // var a=20;
// // var b=20;
// // var c=20;
// // console.log(a+b+c); // 60
// let arry=[1,2,3,4,5,6,7,8,9,10];
// arry.filter((item)=>{
// console.log(item); // 1 2 3 4 5 6 7 8 9 10
// })
