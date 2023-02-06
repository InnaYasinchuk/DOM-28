"use strict";

//1

document.querySelector("h2").nextElementSibling.innerHTML =
  "DOM method description";


//2

console.log(document.querySelectorAll('a[href*="/ua/"]'));


//3

let list = document.querySelector("ul");
let liFirst = document.querySelector("li");
let liThird = document.querySelector("li");

let liNull = document.createElement("li");
let liSecond = document.createElement("li");
let liFourth = document.createElement("li");

liNull.innerHTML = "0";
liNull.id = "null";
liFirst.before(liNull)
// list.prepend(liNull);

liSecond.innerHTML = "2";
liSecond.id = "second";
liFirst.after(liSecond);

liFourth.innerHTML = "4";
liFourth.id = "fourth";
liThird.after(liFourth);
// list.append(liFourth);

console.log(ul.outerHTML);


//4

let a = document.createElement("a");
let h1 = document.querySelectorAll("h1")[1];

a.id = "link";
a.href = "/https://dom.spec.whatwg.org";

a.innerHTML = h1.outerHTML;
console.log(a.outerHTML);

ul.after(a);
h1.remove();
