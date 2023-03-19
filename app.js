const submit = document.getElementById("btn");
const message = document.querySelector(".message");

let row;

//submit data
submit.addEventListener("click",submitFn);
 

function submitFn(e){
  e.preventDefault()
  let userData = getData();
  let storedata = storeDataFn(userData);
  if(row == null){
    displayData(storedata);
    message.innerHTML = "Data Inserted"
  }else{
    updateFn();
    message.innerHTML = "Data Updated"
  }
 
  //console.log(storedata);
}

function getData(){
  const userName= document.getElementById("username").value;
  const userEmail = document.getElementById("emailid").value;
  const userAge = document.getElementById("age").value;

  let arr = [userName,userEmail,userAge]
   return arr;
}


function storeDataFn(userData){

 let data1 = localStorage.setItem("user",userData[0])
 let data2 =  localStorage.setItem("emailid",userData[1])
 let data3 =  localStorage.setItem("age",userData[2])

  //getlocalData

  let userEl = localStorage.getItem("user");
  let emailEl = localStorage.getItem("emailid");
  let ageEl = localStorage.getItem("age");

  let arrData = [userEl,emailEl,ageEl];

  return arrData
}



function displayData(storedata){
  const tableEl = document.getElementById("table");
  let row = tableEl.insertRow();

  row.insertCell(0).innerHTML = storedata[0];
  row.insertCell(1).innerHTML = storedata[1];
  row.insertCell(2).innerHTML = storedata[2];
  row.insertCell(3).innerHTML = `<button id="edit" onclick = editFn(this)>Edit</button>  <button id="delete" onclick = deleteFn(this)>Delete</button>`;

}

function editFn(thisrow){
  row = thisrow.parentElement.parentElement;
  document.getElementById("username").value = row.cells[0].innerHTML;
  document.getElementById("emailid").value  = row.cells[1].innerHTML;
  document.getElementById("age").value = row.cells[2].innerHTML;
  const inputbtn = document.querySelectorAll(".inputbtn");
  inputbtn.forEach((ele)=>{
    ele.setAttribute("class","editactive")
  })
  
  alert("Enter your Changes");
 
}


function updateFn(){
  row.cells[0].innerHTML = document.getElementById("username").value;
  row.cells[1].innerHTML = document.getElementById("emailid").value;
  row.cells[2].innerHTML = document.getElementById("age").value;
  row = null;
}


function deleteFn(thisbtn){
 let msg =  confirm("Are you sure you want to Delete this Data")
  if(msg == true){
  
    deleteel = thisbtn.parentElement.parentElement.remove();

  }
   
}