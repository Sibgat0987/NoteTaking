const notesContainer=document.querySelector(".notes-container")
const notebutton=document.getElementById("note-btn");
let notes=document.querySelectorAll(".input-box");
function showNotes(){
  notesContainer.innerHTML= localStorage.getItem("notes");
}
showNotes();
function storage(){
  localStorage.setItem("notes",notesContainer.innerHTML);
}
notebutton.addEventListener("click",function(){
  let inputBox=document.createElement("p");
  let img=document.createElement("img");
  inputBox.className="input-box";
  inputBox.setAttribute("contenteditable","true");
  img.src="delete.png";
  img.className="inputbox-img";
  notesContainer.appendChild(inputBox).appendChild(img);
})
notesContainer.addEventListener("click",function(e){
if (e.target.tagName === "IMG") {
  e.target.parentElement.remove();
  storage();
}
else if (e.target.tagName=== "P") {
  notes=document.querySelectorAll(".input-box");
  notes.forEach(nt => {
    nt.onkeyup=function(){
      storage();
    }
  })
}
})
document.addEventListener("keydown",event =>{
  if(event.key === "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})