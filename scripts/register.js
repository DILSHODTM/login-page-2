"use strict";

const baseURL="https://task.samid.uz/v1/user";

$("#register").addEventListener('submit',async(e)=>{
    e.preventDefault();
    const userReg=$("#userReg").value.trim();
    const emailReg=$("#emailReg").value.trim();
    const passwordReg=$("#passwordReg").value.trim();
    
    if(userReg.length===0 || emailReg.length===0 || passwordReg.length===0){
        alert('Please enter forms')}
        else{
            const response=await fetch(`${baseURL}/sign-up`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    "username":userReg,
                    "email":emailReg,
                    "password":passwordReg
                })
            });
            const data=await response.json();
            if(data.code===1){
                alert(data.message);
                location.replace("./login.html");
            console.log(data);
        }
        else{
            alert(data.message);
        }
    }

})
