// code for fetch item through api from get usere button
let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content");

function getData() {
  URL = "https://reqres.in/api/users?page=1";
  fetch(URL)
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      console.log(data);
    });
}
getData();

// code for fetch data for See more details buttons
let myDataBtn = document.getElementById("myDataBtn");
let contentData = document.getElementById("contentData");

function getContent() {
  URL = "myData.txt";
  fetch(URL)
    .then((Response) => {
      return Response.text();
    })
    .then((data) => {
      console.log(data);
    });
}
getContent();

// code for loder at get user data
document.getElementById("load").style.display = "none";
function loadData() {
  document.getElementById("myBtn").style.display = "none";
  document.getElementById("load").style.display = "block";
  setTimeout(function () {
    document.getElementById("myBtn").style.display = "block";
    document.getElementById("load").style.display = "none";
  }, 1000);
}
loadData();
