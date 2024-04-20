"using strict";

let showMsg = document.querySelector(".message");
let msgBox = document.querySelector(".msg-box");

const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialChar = "~!@#$%^&*()_+{}|][`-*/.";

const arrAlpha = alphabets.split("");
const arrNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const arrSpecialChar = specialChar.split("");

const pswGenrator = function () {
  const alphaNumb = Number(document.querySelector(".chars").value);
  const Numbs = Number(document.querySelector(".numbs").value);
  const spclChar = Number(document.querySelector(".spclChar").value);

  const pswdLen = alphaNumb + Numbs + spclChar;

  let finalPswd = [];
  let generatedPswd = "";

  // Function with 3 arrguments to genrate a random word.
  const randGenrator = function (pswdType, pswdLength) {
    for (let i = 0; i < pswdLength; i++) {
      const rand = Math.trunc(Math.random() * pswdType.length);
      finalPswd += pswdType[rand];
    }
  };

  randGenrator(arrAlpha, alphaNumb);
  randGenrator(arrNumb, Numbs);
  randGenrator(arrSpecialChar, spclChar);

  let finalArrPswd = finalPswd.split("");

  finalArrPswd.sort(() => 0.5 - Math.random());
  for (let x = 0; x < finalArrPswd.length; x++) {
    generatedPswd += finalArrPswd[x];
  }
  showMsg.textContent = generatedPswd;
  msgBox.style.backgroundColor = "green";
};

document.querySelector(".generate").addEventListener("click", pswGenrator);
