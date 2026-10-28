let prev = document.getElementById("prev");
let next = document.getElementById("next");
let list = document.querySelectorAll(".item")

//count é igual a 3
// itens : 0, 1, 2

let count = list.length; //3
let active = 0;

next.onclick = () =>{
    let activeOld = document.querySelectorAll(".active");
    activeOld.classList.remove("active")
}

prev.onclick = () =>{
      let activeOld = document.querySelectorAll(".active");
    activeOld.classList.remove("active")
}