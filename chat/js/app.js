var stagger
document.getElementById('send').onclick = function(){
//get item and add it to the list with a delete button included
  var message = document.getElementById('message').value;
  var d = document.createElement('div');
  if(stagger){
    d.innerHTML = "<div class='col-md-5 left'>"+message+"<span class = 'remove'>delete</span></div>"
    d.className = "row";
    stagger = 0;
  }else{
    d.innerHTML = "<div class='col-md-5 col-md-offset-7 right'>"+message+"<span class='remove'>delete</span></div>"
    d.className = "row";
    stagger = 1;
  }
  var div = document.getElementById('thread');
  div.appendChild(d);

  //clear input
  document.getElementById('message').value = "";
  //call function add event listeners to list item buttons
  addListener();
};

//cycle through the list at each addition and make the delete buttons respond to clicks by calling
//the remove function
function addListener(){
  var deletables = document.getElementsByClassName("remove");
  for (var i = 0; i < deletables.length; i++) {
    deletables[i].addEventListener('click', remove, false);
  }
}

//when the delete buttons are clicked, find the list and the item, then delete the item as a child of the list
function remove(){
  var list = this.parentNode.parentNode
  var item = this.parentNode;
  list.removeChild(item);
}
