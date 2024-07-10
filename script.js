let btn=document.querySelector('button');
let ul=document.querySelector('ul');
let inp=document.querySelector('input');

btn.addEventListener("click",function(event){
    let input=document.createElement("li");
    input.innerText=inp.value;
    alert('successfully Added !');
    let del=document.createElement("span");
     del.innerText="\u00d7";
    del.classList.add("del");
    input.appendChild(del);
    
    ul.appendChild(input);
    input.value="";

    input.addEventListener("click",function(event){
        input.className="checked";
        
        alert('Congratulation !');
    });
    del.addEventListener("click",function(){
        this.parentElement.remove(input);
        event.stopPropagation();
        alert('Confirm !');
    });
});




