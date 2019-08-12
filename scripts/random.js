const input = document.querySelector("#todo");
const button = document.querySelector(".addbutton");

/* if in  html you create a list and give it an id = mylist
<ul id="mylist">  </ul> */
const mylist=document.querySelector("#mylist");
const arr=[];
function CreateTodo (){
    arr.push(input.value)
    //console.log(arr)
    const myli =
    document.createElement("li");
    myli.className = 'list';
    const delbtn =document.createElement("button");
    delbtn.innerHTML ="delete";
    

    arr.forEach(function(e,i){
        myli.innerHTML = e;
        myli.appendChild(delbtn);
        mylist.appendChild(myli);
    console.log(mylist);

    });


 }

button.onclick = CreateTodo;



console.log(input);
console.log(button);
