"use strict";





const baseURL="http://localhost:8080";
const fetchData=async()=>{
    const response=await fetch(`${baseURL}/task`)
    const data=await response.json();
    console.log(data);
    dataRender(data)
}

localStorage.getItem("token") ? fetchData() : location.replace("./login.html");

const usernameLoc= localStorage.getItem("username")
console.log(usernameLoc);
$('#username').innerHTML=usernameLoc;


function dataRender(data=[]){
    data.length>0 ? data.forEach((el,i)=>{
        const tr=createElement('tr','item', `
        <td>${i+1}</td> <td>${el.title}</td> 
        <td>${el.desc}</td>

        <td>${el.date}</td>
        <td><button class="btn btn-warning" data-edit="${el.id}">Edit</button></td>
        <td><button class="btn btn-danger" data-del="${el.id}">Delete</button></td>
        `); 
        $("#data").appendChild(tr);
    }):$("#data").innerHTML="NOT FOUND";
}
const addTask=()=>{
    const taskTitle=$('#taskTitle').value.trim();
    const taskDesc=$('#taskDesc').value.trim();
    const taskDate=$('#taskDate').value.trim();

  if(taskTitle.length===0 || taskDesc.length===0 ||taskDate.length===0 ){
    alert('Please enter task forms')
  }{
    fetch(`${baseURL}/task`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
                "title":taskTitle,
                "desc":taskDesc,
                "date":taskDate
            }),
    });
  }


};



$("#add").addEventListener('submit',()=>{
    addTask();

});

$("#logout").addEventListener('click',()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    location.replace("./login.html");
})

