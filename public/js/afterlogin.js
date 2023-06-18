 // Import the functions you need from the SDKs you need
 

console.log("SHIFT + CTRL + R TO CLEAR CASH")
console.log("THIS IS A NEW MESSAGE!")
 




var pre = [document.getElementById("pre00"), document.getElementById("pre01")];
var post = [document.getElementById("post00"), document.getElementById("post01")];
var inp = [document.getElementById("inp00"), document.getElementById("inp01")];


var lastnum = -1;


addEventListener("click", function(event) {
  var containerId = event.target.id;
  console.log("Clicked container ID: " + containerId);

  var num = parseInt(containerId.slice(3)); 
  var type = containerId.slice(0,3);
  if (type == "pic" ){
    console.log(lastnum);
    console.log("worked");

    if (lastnum >= 0 && lastnum != num){
      post[lastnum].classList.add("hideme");
      pre[lastnum].classList.remove("hideme");
    }
    console.log(num);
    post[num].classList.remove("hideme");
    pre[num].classList.add("hideme");
    lastnum = num;
  }

  if (type == "but"){
  var password = inp[num].value ;
  var fileUrl = "html/page"+ containerId.slice(3) + password +".html";

  fetch(fileUrl, { method: 'HEAD' })
    .then(function(response) {
      if (response.ok) {
        console.log('File exists.');
        console.log(fileUrl);
        window.location.href = fileUrl;

      } else {
        console.log('File does not exist.');
      }
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
  


  };

});




var itemId = "item-123";

// Extract the numeric part of the ID using slice
var numericPart = itemId.slice(0,5);
console.log("Numeric part:", numericPart);

  console.log("Imports completed i guesss")


