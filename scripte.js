let allSpan = document.querySelectorAll(".buttons span");
let result = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");
let number = document.querySelector('.number');

allSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      checkItems();
    }
    if (e.target.classList.contains("add-item")) {
      addtems();
    }
    if (e.target.classList.contains("delete-item")) {
      delelteItems();
    }
    if (e.target.classList.contains("show-items")) {
      showItems();
    }
  });
});

function showMsg() {
    result.innerHTML = "Input Cant be Empty";
}
function checkItems() {
    if(theInput.value !==''){
        if (localStorage.getItem(theInput.value)) {
            result.innerHTML = `Found local Storage Called <span>${theInput.value}</span>`;

        } else {
            result.innerHTML = `No  local Storage Item Whith The Name  <span>${theInput.value}</span>`;
        }
    }
    else{
        showMsg();
    }
    number.style.display = 'none';
    theInput.value = '';
}






function addtems() {
      if(theInput.value !==''){
        localStorage.setItem(theInput.value, 'Test');
        result.innerHTML=`Local Storage Item <span>${theInput.value} Added </span>`;
}
else{
    showMsg();
}
number.style.display = 'none';
theInput.value = '';
}


function delelteItems() {

    if(theInput.value !==''){
        if (localStorage.getItem(theInput.value)) {
            localStorage.removeItem(theInput.value);
            result.innerHTML = `<span>${theInput.value}</span> is Removed`;          

        } else {
            result.innerHTML = `No  local Storage Item Whith The Name  <span>${theInput.value}</span>`
        }

}
else{
    showMsg();
}
number.style.display = 'none';
theInput.value = '';
}

function showItems() {

    if (localStorage.length) {
        result.innerHTML = '';
        for(let [key , value] of Object.entries(localStorage)){
            result.innerHTML += `<span>  ${key} </span>`;
        }
  
    } else {
        result.innerHTML = `Local Storage Is Empty`;
    }
    number.style.display = 'inline-block';
    number.innerHTML =  `# ${localStorage.length}`;
    theInput.value = '';
}
