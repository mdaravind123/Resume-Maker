const addbtn=document.querySelector('#add')
const subbtn=document.querySelector("#subtract")
const olelement=document.getElementById("listitems")
const txt_name_input=document.getElementById("username")

function isAlphaOrSpace(c) {
  return typeof c === 'string' && c.length == 1 && ((c >= 'a' && c <= 'z') || (c>='A' && c <= 'Z') || c == ' ' || c=='' || c==null);
}


document.getElementById("reset").addEventListener("click",e=>{
    e.preventDefault();
    document.getElementById("username").value=""
    document.getElementById("password").value=""
})



function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function (e) {
        $('#blah').attr('src', e.target.result).width(150).height(200);
      };
  
      reader.readAsDataURL(input.files[0]);
    }
  }

function addtextbox(){
  const li=document.createElement('li')
  li.innerHTML='<form><input type="text" style="width:400px;width:15%;padding:12px;border:1px solid grey;border-radius:5px;margin:5px"><form>'
  olelement.appendChild(li)
}

function isAlphaOrSpace(c) {
  return typeof c === 'string' && c.length == 1 && ((c >= 'a' && c <= 'z') || (c>='A' && c <= 'Z') || c == ' ' || c=='' || c==null);
}

function containsSpecialSymbolAvailable(str_given) {
  var spl_symbols = /.,?<>;:"'}{[]|!@#$%^&()=+-/;
  return spl_symbols.test(str_given);
}
function containsDigit(str_given) {
  return /\d/.test(str_given);
}
function containsUpperCase(str_given) {
  return /[A-Z]/.test(str_given);
}
function containsLowerCase(str_given) {
  return /[a-z]/.test(str_given);
}
function containsThreeSameCharactersConsecutively(str_given) {
  for(var pos = 0; pos<str_given.length-2;pos++) {
    if(str_given.charAt(pos) == str_given.charAt(pos+1) && str_given.charAt(pos) == str_given.charAt(pos+2)) {
      return true;
    }
  }
  return false;
}
function getPasswordStrength(str_pwd) {
  var pwd_strength_magnitude = 0;
  if (str_pwd.length>7) pwd_strength_magnitude+=2;
  if (containsLowerCase(str_pwd)) pwd_strength_magnitude++;
  if (containsUpperCase(str_pwd)) pwd_strength_magnitude++;
  if (containsDigit(str_pwd)) pwd_strength_magnitude++;
  if (containsSpecialSymbolAvailable(str_pwd)) pwd_strength_magnitude+=2;
  if (!containsThreeSameCharactersConsecutively(str_pwd)) pwd_strength_magnitude+=2;
  if (pwd_strength_magnitude<4) return "Weak";
  else if(pwd_strength_magnitude<7) return "Medium";
  else if (pwd_strength_magnitude<8) return "Strong";
  return "Very Strong";
}





