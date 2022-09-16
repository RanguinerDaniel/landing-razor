function selected(id, state) {
   var state = state;
   if (state == true) {
      showSelection(id);

   } else {
      hideSelection(id);
      state = true;
   }

}

function hideSelection(id){
   if (id == 1 || id == 2 || id == 3 || id == 4) {
      if (id == 4) {
         document.getElementById("virtuos-selector").src = "../project/assets/img/virtuos-select.png";
      }
      if (id == 3) {
         document.getElementById("prodigy-selector").src = "../project/assets/img/prodigy-select.png";
      }
      if (id == 2) {
         document.getElementById("talent-selector").src = "../project/assets/img/talent.jpg";
      }
      if (id == 1) {
         document.getElementById("lean-selector").src = "../project/assets/img/lean-select.png";
      }
   } else {
      alert("Desculpe! Houve um erro inesperado ao selecionar a máquina");
      document.location.reload(true);
   }
}



function showSelection(id) {
   if (id == 1 || id == 2 || id == 3 || id == 4) {
      if (id == 4) {
         document.getElementById("virtuos-selector").src = "../project/assets/img/virtuos-select.png";
      }
      if (id == 3) {
         document.getElementById("prodigy-selector").src = "../project/assets/img/prodigy-select.png";
      }
      if (id == 2) {
         document.getElementById("talent-selector").src = "../project/assets/img/talent-select.png";
      }
      if (id == 1) {
         document.getElementById("lean-selector").src = "../project/assets/img/lean-select.png";
      }
   } else {
      alert("Desculpe! Houve um erro inesperado ao selecionar a máquina");
      document.location.reload(true);
   }
}
