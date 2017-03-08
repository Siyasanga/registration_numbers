var addbtn = document.querySelector(".add");
var plate = document.querySelector(".nPlate");
var plateList = document.querySelector(".plates");
var regNum = document.querySelector("#regNumba");
addbtn.addEventListener('click',function() {
  if(regNum.value.length == 0){
    return;
  }
  var cpy = plate.cloneNode(true);
  cpy.innerHTML = regNum.value;
  plateList.appendChild(cpy);
  regNum.value = "";
});
function filter(loc){
  for(var i=0; i<plateList.children.length; i++){
    if(!plateList.children[i].innerHTML.startsWith(loc)){
      plateList.children[i].style.display = "none";
    }
    else {
      plateList.children[i].style.display = "block";
    }
  }
}
var r0 = document.querySelector("#r0");
r0.addEventListener("click",function() {
  document.getElementById("rr0").checked = true;
  filter("");
});
var r1 = document.querySelector("#r1");
r1.addEventListener("click",function() {
  document.getElementById("rr1").checked = true;
  filter("CA");
});
var r2 = document.querySelector("#r2");
r2.addEventListener("click",function() {
  document.getElementById("rr2").checked = true;
  filter("CJ");
});
var r3 = document.querySelector("#r3");
r3.addEventListener("click",function() {
  document.getElementById("rr3").checked = true;
  filter("EC");
});
