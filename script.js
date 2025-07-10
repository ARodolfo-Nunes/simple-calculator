const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const hora = document.getElementById("hora");

//Span para marcar a hora
const currentTime = () => {
  hora.textContent = new Date().toLocaleTimeString();
};

//Mostra a hora assim que carrega
currentTime();

//Mostra a hora em tempo real
setInterval(currentTime, 1000);

//Função dos botões
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const valor = button.getAttribute("data-value");
    if (valor === "=") {
      try {
        if (display.value.trim() === "") {
          display.value = "";
          return;
        }
        const expression = display.value
          .replace(/×/g, "*")
          .replace(/÷/g, "/")
          .replace(/–/g, "-").replace(/\^/g,"**");
        display.value = eval(expression);
      } catch (error) {
        display.value = "Error";
      }
    } else if (valor === "C") {
      display.value = "";
    } else if (valor === "delete") {
      display.value = display.value.slice(0, -1);
    } else {
      if (display.value === "0" || display.value === "Error") {
        display.value = valor;
      } else {
        display.value += valor;
      }
    }
  });
});
