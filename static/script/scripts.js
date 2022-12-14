

// var currentTab = 0; // Current tab is set to be the first tab (0)
// console.log("Current tab: " + currentTab);
// showTab(currentTab); // Display the current tab

// function showTab(n) {
//   // This function will display the specified tab of the form ...
//   var x = document.getElementsByClassName("tab");
//   x[n].style.display = "block";
//   var prevBtn = document.getElementById("prevBtn");
//   // ... and fix the Previous/Next buttons:
//   if (n == 0) {
//     prevBtn.style.display = "none";
//   } else {
//     prevBtn.style.display = "inline";
//   }
//   if (n == (x.length - 1)) {
//     document.getElementById("nextBtn").innerHTML = "Enviar";
//     document.getElementById("nextBtn").onclick = postAluno();
//   } else {
//     document.getElementById("nextBtn").innerHTML = "Próximo";
//   }
//   // ... and run a function that displays the correct step indicator:
//   fixStepIndicator(n)
// }

// function nextPrev(n) {
//   // This function will figure out which tab to display
//   var x = document.getElementsByClassName("tab");
//   // Exit the function if any field in the current tab is invalid:
//   // if (n == 1 && !validateForm()) return false;
//   // Hide the current tab:
//   x[currentTab].style.display = "none";
//   // Increase or decrease the current tab by 1:
//   currentTab = currentTab + n;
//   // if you have reached the end of the form... :
//   if (currentTab >= x.length) {
//     //...the form gets submitted:
//     document.getElementById("cadastroForm").submit();
//     return false;
//   }
//   // Otherwise, display the correct tab:
//   showTab(currentTab);

// }

// function validateForm() {
//   // This function deals with validation of the form fields
//   var x, y, i, valid = true;
//   x = document.getElementsByClassName("tab");
//   y = x[currentTab].getElementsByTagName("input");
//   // A loop that checks every input field in the current tab:
//   for (i = 0; i < y.length; i++) {
//     // If a field is empty...
//     if (y[i].value == "") {
//       // add an "invalid" class to the field:
//       y[i].className += " invalid";
//       // and set the current valid status to false:
//       valid = false;
//     }
//   }
//   // If the valid status is true, mark the step as finished and valid:
//   if (valid) {
//     document.getElementsByClassName("step")[currentTab].className += " finish";
//   }
//   return valid; // return the valid status
// }

// function fixStepIndicator(n) {
//   // This function removes the "active" class of all steps...
//   var i, x = document.getElementsByClassName("step");
//   for (i = 0; i < x.length; i++) {
//     x[i].className = x[i].className.replace(" active", "");
//   }
//   //... and adds the "active" class to the current step:
//   x[n].className += " active";
// }

// function mascara(i) {

//   var v = i.value;

//   if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
//     i.value = v.substring(0, v.length - 1);
//     return;
//   }

//   i.setAttribute("maxlength", "14");
//   if (v.length == 3 || v.length == 7) i.value += ".";
//   if (v.length == 11) i.value += "-";

// }
const form = document.getElementById('cadastroForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));
  console.log(jsonData);

  fetch('http://gerenciador-estagio.sa-east-1.elasticbeanstalk.com/alunos/add', {
    method: 'POST',
    body: jsonData,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      if (response.ok) {
        // Add a success message here
        alert('Cadastro realizado com sucesso!');
      } else {
        // Handle error here
        return response.json().then((error) => {
          alert(`Ocorreu um erro ao tentar realizar o cadastro: ${error.message}`);
        });
      }
    });
});
