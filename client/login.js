let inputs=document.querySelectorAll("input")
function formHandel() {
    event.preventDefault()
    let payload={
        username:inputs[0].value,
        password:inputs[1].value
    }
   fetch("http://localhost:5000/loginData",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(payload)
   })
   .then(()=>{console.log("successfully login");})
   .catch(()=>{console.log("Failure");})
}