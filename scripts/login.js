"use strict";
const baseURL="https://samid.uz/v1/user/sign-in";
$("#login").addEventListener('submit',async(e)=>{
    e.preventDefault();
    const username=$("#username").value.trim();
    const password=$("#password").value.trim();
    if(username.length===0 || password.length===0){
        alert('Please enter forms')
    }else{
        const response = await fetch(`${baseURL}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "username":username,
                "password":password
            })
        });
        const data=await response.json();
        if(data.code===1){
            alert(data.message);
            localStorage.setItem("token",data.data.token);
            localStorage.setItem("username",data.data.username);
            location.replace("./index.html");
        console.log(data);
    }
   else{
        alert(data.message);
   }
}
})