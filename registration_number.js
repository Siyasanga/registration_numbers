var addbtn = document.querySelector(".add");
var plate = document.querySelector(".nPlate");
var plateList = document.querySelector(".plates");
var regNum = document.querySelector("#regNumba");
addbtn.addEventListener('click',function() {
  var cpy = plate.cloneNode(true);
  cpy.innerHTML = regNum.value;
  plateList.appendChild(cpy);
  regNum.value = "";
});
