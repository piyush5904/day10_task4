const passwordEl = document.getElementById("password");
const lenInput = document.getElementById("length");
const lenVal = document.getElementById("lenVal");
const charsCheck = document.getElementById("includeChars");
const numsCheck = document.getElementById("includeNums");

function generatePassword() {
  const length = lenInput.value;
  let chars = "";
  if (charsCheck.checked) {
    chars += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()[]{}<>?/";
  }
  if (numsCheck.checked) {
    chars += "0123456789";
  }
  let pass = "";
  for (let i = 0; i < length; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  passwordEl.value = pass;
}

function copyPassword() {
  passwordEl.select();
  document.execCommand("copy");
}

lenInput.addEventListener("input", () => {
  lenVal.textContent = lenInput.value;
  generatePassword();
});

charsCheck.addEventListener("change", generatePassword);
numsCheck.addEventListener("change", generatePassword);

window.onload = generatePassword;
