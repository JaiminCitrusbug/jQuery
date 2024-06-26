// document.getElementById("sumname").innerHTML=jsname;
// document.getElementById("sumemail").innerHTML=jsemail;
// document.getElementById("sumphone").innerHTML=jsphone;
// document.getElementById("sumzip").innerHTML=jszipcode;
// document.getElementById("sumbdate").innerHTML=jsbdate;
// document.getElementById("sumgender").innerHTML=jsradio;
/*
function validateForm() {
  let jsname = document.getElementById("name").value;
  let jsemail = document.getElementById("email").value;
  let jsphone = document.getElementById("phone").value;
  let jszipcode = document.getElementById("zip").value;
  let jsbdate = document.getElementById("date").value;
  let jsgender = document.getElementsByName("Gender");
  let jshobby = document.getElementsByName("hobby");
  let jstechno = document.getElementsByName("techno");

  if (jsname == "") {
    alert("Name must be filled out");
  }  if (jsemail == "") {
    alert("Email must be filled out");
  }  if (
    /^[a-z][a-z0-9\-\_]+@{1}[a-z0-9\-\_]+\.(com|mil|edu|gov|net|org|biz|name)$/.test(
      jsemail
    ) == false
  ) {
    alert("Please enter a valid email address");
  }  if (jsphone == "") {
    alert("Phone must be filled out");
    return false;
  }  if (/^(\+){0,1}\d{1,3}(\s){0,1}\d{5,10}$/.test(jsphone) == false) {
    alert("Please enter a valid phone number");
  }  if (jszipcode == "") {
    alert("Zipcode must be filled out");
    return false;
  } if (/^[0-9]{5,9}$/.test(jszipcode) == false) {
    alert("Please enter a valid zipcode");
  } if (jsbdate == "") {
    alert("Select the birthday");
  } if (
    !(jsgender[0].checked || jsgender[1].checked || jsgender[2].checked)
  ) {
    alert("Please select a gender");
  }
  let flag1 = true;
  let i = 0;
  while (i < 5) {
    if (jshobby[i].checked == false) {
      i++;
    } else if (jshobby[i].checked == true) {
      flag1 = false;
      break;
    }
  }
  if (flag1 == true) {
    alert("Please select at least one hobby");
  }
  let flag2 = true;
  let j = 0;
  while (j < 5) {
    if (jstechno[j].checked == false) {
      j++;
    } else if (jstechno[j].checked == true) {
      flag2 = false;
      break;
    }
  }
  if (flag2 == true) {
    alert("Please select at least one technology");
  }
}
*/
