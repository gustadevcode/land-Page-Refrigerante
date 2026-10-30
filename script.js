let prev = document.getElementById("prev");
let next = document.getElementById("next");
let list = document.querySelectorAll(".item")

function rolagem(){
    if(active >= count -1 ){
          active = 0 
    }else{
        active++;
    }
}

//count é igual a 3
// itens : 0, 1, 2

let count = list.length; //3
let active = 0;

next.onclick = () =>{
   
    let activeOld = document.querySelector(".active");
    activeOld.classList.remove('active')

    list[active].classList.add('active')

    rolagem();
  
}

prev.onclick = () =>{
      let activeOld = document.querySelector(".active");
    activeOld.classList.remove("active")

    active = active <= 0 ? count -1 : active-1;
    list[active].classList.add('active')
}