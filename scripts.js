const darkModeButton = document.getElementById("dark-mode-button");

darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.querySelector("nav").classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode");
  document.querySelector("section").classList.toggle("dark-mode");
});

const bars = document.querySelectorAll('.bar');

bars.forEach(bar => {
  const width = bar.style.width;
  bar.parentElement.querySelector('.percent').innerText = width;
});

function enviarFormulario() {
  document.getElementById("form").submit();

  document.getElementById("mensaje-exito").style.display = "block";
}

function formSubmit(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;

  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Por favor, completa todos los campos del formulario.");
    return;
  }

  enviarFormulario();
}