let inputs=document.querySelectorAll("input")

function formHandel() {
    let payload={
        name:inputs[0].value,
        email:inputs[1].value,
        phoneNo:inputs[2].value,
        password:inputs[4].value
    }
   fetch("http://localhost:5000/formData",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(payload)
   })
   .then((data)=>{return data.json()})
   .then((res)=>{console.log(res);})
   .catch(()=>{console.log("Failure");})
}