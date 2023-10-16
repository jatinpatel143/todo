let form = document.querySelector("form")
let  input = document.querySelector("input")
let ul = document.querySelector(".list-group") 



const myFunc = (e) => {
    e.preventDefault();

    let stop = document.createElement("li")
    // console.log(li)
    stop.style.fontSize="50px"
    stop.style.width="50%"
    ul.style.display="flex"
    ul.style.alignItems="center"
    ul.style.justifyContent="center"
    stop.textContent = input.value
    stop.className = 'list-group-item rounded p-3 float-end '
    ul.appendChild(stop);

    
   let button = document.createElement("button")
   button.innerText= "delete"
//    dele.className= "btn btn-danger flod-end"
   button.className =" btn btn-danger float-end"

   stop.appendChild(button)
form.reset()

}
form.addEventListener("submit", myFunc)



function stor(e){

    if(e.target.className.includes("btn-danger")){

        li = e.target.parentElement
        li.remove()
    }}
    ul.addEventListener('click' , stor)

