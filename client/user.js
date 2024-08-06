let inputs=document.querySelectorAll("input")
let section=document.querySelector("section")
function formHandel() {
   fetch("http://localhost:5000/users")
   .then((res)=>{return res.json()})
   .then((data)=>{console.log(data);


      section.innerHTML=`${data.map((user)=>{
         return `
         <article>
         <h1>UserName : ${user.name}</h1>
         <button onclick="goToProfile('${user._id}')">Clickto Profile<?button>
         </article>`
      })}`


   // data.map((user)=>{
   //  let h1=document.createElement("h1")
   //  let section=document.createElement("section")
   //  let article=document.createElement("article")
   //  let btn=document.createElement("button")
   // section.style.height="40vh"
   // section.style.width="100%"
   // section.style.display="flex"
   // section.style.flexWrap="wrap"
   // section.style.justifyContent="space-evenly"
   // article.style.height="200px"
   // article.style.width="200px"
   // article.style.border="2px solid black"
   // article.style.textAlign="center"
   // article.style.color="white"
   // article.style.paddingTop="50px"
   // h1.style.marginBottom="20px"
   // btn.style




   //  h1.innerText=`UserName: ${user.name}`
   //  btn.innerText="Profile"

   //  article.append(h1,btn)
   //  section.append(article)
   //  document.body.append(section)
   // })



})
   .catch(()=>{console.log("Failure");})
}
formHandel()
function goToProfile(id){
   // console.log(id);
   window.location.assign(`./userProfile.html?id=${id}`)
}
