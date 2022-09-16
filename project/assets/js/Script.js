
const virtuosSelectorOriginal = document.querySelector("#virtuos-selector").getAttribute("src");
let virtuosSelector = document.querySelector("#virtuos-selector");

virtuosSelector.addEventListener("click",function (e) {
 let img = e.target.src.split('/');
 let nomeImg = img[img.length - 1];

   if(nomeImg == 'virtuos-select.png') {
      virtuosSelector.setAttribute("src", virtuosSelectorOriginal);
   } 

   if(nomeImg == 'virtuos.jpg') {
      virtuosSelector.setAttribute("src", "../project/assets/img/virtuos-select.png");
   }

});


const prodigySelectorOriginal = document.querySelector("#prodigy-selector").getAttribute("src");
let prodigySelector = document.querySelector("#prodigy-selector");

prodigySelector.addEventListener("click",function (e) {
 let img = e.target.src.split('/');
 let nomeImg = img[img.length - 1];

   if(nomeImg == 'prodigy-select.png') {
      prodigySelector.setAttribute("src", prodigySelectorOriginal);
   } 

   if(nomeImg == 'prodigy.jpg') {
      prodigySelector.setAttribute("src", "../project/assets/img/prodigy-select.png");
   }

});


const talentSelectorOriginal = document.querySelector("#talent-selector").getAttribute("src");
let talentSelector = document.querySelector("#talent-selector");

talentSelector.addEventListener("click",function (e) {
 let img = e.target.src.split('/');
 let nomeImg = img[img.length - 1];

   if(nomeImg == 'talent-select.png') {
      talentSelector.setAttribute("src", talentSelectorOriginal);
   } 

   if(nomeImg == 'talent.jpg') {
      talentSelector.setAttribute("src", "../project/assets/img/talent-select.png");
   }

});

const leanSelectorOriginal = document.querySelector("#lean-selector").getAttribute("src");
let leanSelector = document.querySelector("#lean-selector");

leanSelector.addEventListener("click",function (e) {
   let img = e.target.src.split('/');
   let nomeImg = img[img.length - 1];
   console.log(nomeImg);
   if(nomeImg == 'lean-select.png') {
      leanSelector.setAttribute("src", leanSelectorOriginal);
   } 

   if(nomeImg == 'lean.jpg') {
      leanSelector.setAttribute("src", "../project/assets/img/lean-select.png");
   }

});
