function calculate() {
   let num1 = Number(document.getElementById("firstNumber").value);
   let num2 = Number(document.getElementById("secondNumber").value);
   let operator = document.getElementById("operatorSelect").value;
   let result;

   // Only positive integers (>= 0)
   if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
      alert("Erro :( - You need to enter only positive integers.");
      return;
   }

   // Division or modulo by zero
   if ((operator === "/" || operator === "%") && num2 === 0) { // Check for division/modulo by zero
      alert("É maior que 9000!");
      return;
   }

   switch (operator) {
      case "+":
            result = num1 + num2;
            break;
      case "-":
            result = num1 - num2;
            break;
      case "*":
            result = num1 * num2;
            break;
      case "/":
            result = num1 / num2;
            break;
      case "%":
            result = num1 % num2;
            break;
      default:
            alert("Erro :(");
            return;
   }

   alert("Result: " + result); // Display result in an alert
   console.log("Result:", result); // Log result to console
}

// Clear input fields
function clearFields() {
   document.getElementById("firstNumber").value = "";
   document.getElementById("secondNumber").value = "";
   document.getElementById("operatorSelect").selectedIndex = 0;
}

// Alert every 30 seconds
setInterval(() => {
   alert("Please use me...");
}, 30000);