// declare an obj for sounds with corresponding letters
soundReferences = {w:"tom-1",a:"tom-2",s:"tom-3",d:"tom-4",
j:"snare",k:"crash",l:"kick-bass"};

// add event listener for click

const n = document.querySelectorAll(".drum").length;
for (var count=0; count < n; count++){
  document.querySelectorAll(".drum")[count].addEventListener("click",function(event){
    makeSound(event.currentTarget.innerHTML);
    addAnimation(event.currentTarget.innerHTML);}
  );
}

// add key press event listener
// we add the listener not to a single element but to the whole document
document.addEventListener("keydown",function(event) {
  makeSound(event.key);
  addAnimation(event.key);
})
// function for playing sounds
function makeSound(myKey){
  if (soundReferences[myKey] !== undefined){
    filepath = "sounds/" + soundReferences[myKey] +".mp3";
    const music = new Audio(filepath);
    music.play()
  }
}

// function to add animation
function addAnimation(myKey){
  if (soundReferences[myKey] !== undefined){
    myClass = "." + myKey;
    document.querySelector(myClass).classList.add("pressed");
    setTimeout(function(){
      document.querySelector(myClass).classList.remove("pressed");
    },200);
  }
}
