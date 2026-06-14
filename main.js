// Tab switching / Cambio de pestañas
document.querySelectorAll('.edu-tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.edu-tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
  });
});

// Source toggles / Alternadores de fuente
document.querySelectorAll('.source-toggle').forEach(toggle => {
  toggle.addEventListener('click', function() {
    this.classList.toggle('off');
  });
});
 
// Scroll animations / Animaciones al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });
 
document.querySelectorAll('.step-item, .platform-card, .course-card, .beca-card, .job-card, .profile-feature, .ia-feature').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});

// ======================================================
// CREAR PERFIL
// ======================================================

let perfilUsuario = {};

const profileForm = document.getElementById("profileForm");

if (profileForm) {

  profileForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const nombre = document.getElementById("pf-nombre").value;
    const edad = document.getElementById("pf-edad").value;
    const ciudad = document.getElementById("pf-ciudad").value;
    const provincia = document.getElementById("pf-provincia").value;
    const email = document.getElementById("pf-email").value;
    const redProfesional = document.getElementById("pf-red").value;

    const nivelEducativo = document.getElementById("pf-nivel").value;
    const carrera = document.getElementById("pf-carrera").value;

    const habilidades = document.getElementById("pf-habilidades").value
      .split(",")
      .map(h => h.trim())
      .filter(h => h !== "");

    const interesesProfesionales = document.getElementById("pf-intereses").value
      .split(",")
      .map(i => i.trim())
      .filter(i => i !== "");

    const objetivoProfesional = document.getElementById("pf-objetivo").value;

    perfilUsuario = {
      datosPersonales: { nombre, edad, ciudad, provincia, email, redProfesional },
      formacion: { nivelEducativo, carrera },
      habilidades,
      interesesProfesionales,
      objetivoProfesional
    };

    console.log(perfilUsuario);

    document.getElementById("modalPerfil").classList.add("oculto");

    completarPaso(1);
    activarPaso(2);

  });
}

// ======================================================
// FLUJO DE LOGIN / REGISTRO (PASO 1)
// ======================================================

// Click en "Creá tu perfil" -> abre modal de login/registro
document.getElementById("step1").addEventListener("click", function(){
  document.getElementById("modalLogin").classList.remove("oculto");
});

// Continuar con email -> muestra el formulario manual de registro/login
document.getElementById("btnEmailContinue").addEventListener("click", function(){
  document.getElementById("socialLogin").classList.add("oculto");
  document.getElementById("loginDivider").classList.add("oculto");
  document.getElementById("manualLoginSection").classList.remove("oculto");
});

// Crear cuenta / Ingresar -> cierra login y abre el formulario de perfil
document.getElementById("btnCrearCuenta").addEventListener("click", function(e){
  e.preventDefault();
  const input = document.getElementById("emailRegistro");
  const error = document.getElementById("errorEmailRegistro");

  if (!validarEmail(input, error)) return;

  document.getElementById("modalLogin").classList.add("oculto");
  document.getElementById("modalPerfil").classList.remove("oculto");
});

// Ingresar -> valida el email; si no es válido, muestra el error y NO avanza
document.getElementById("btnIngresar").addEventListener("click", function(e){
  e.preventDefault();
  const input = document.getElementById("emailSesion");
  const error = document.getElementById("errorEmailSesion");

  if (!validarEmail(input, error)) return;
  
  document.getElementById("modalLogin").classList.add("oculto");
  document.getElementById("modalPerfil").classList.remove("oculto");
});

// Cerrar modal de perfil
document.getElementById("cerrarModalPerfil").addEventListener("click", function(){
  document.getElementById("modalPerfil").classList.add("oculto");
});


// ======================================================
// CURSOS
// ======================================================

// Mostrar cursos recomendados
// Filtrar por categoría
// Buscar cursos


// ======================================================
// BECAS
// ======================================================

// Mostrar becas disponibles
// Filtrar becas
// Recomendar becas compatibles

// ======================================================
// EMPLEABILIDAD
// ======================================================

// Calcular porcentaje de compatibilidad
// Ordenar empleos por afinidad
// Filtrar por modalidad
// Filtrar por nivel
// Mostrar empleos recomendados

// Abrir modal login
document.getElementById("abrirLogin").addEventListener("click", function(){
  document.getElementById("modalLogin").classList.remove("oculto");
});

document.getElementById("abrirLogin2").addEventListener("click", function(){
  document.getElementById("modalLogin").classList.remove("oculto");
});

// Cerrar modal login
document.getElementById("cerrarModal").addEventListener("click", function(){
  document.getElementById("modalLogin").classList.add("oculto");
});

// Cambiar a iniciar sesión
document.getElementById("btnSesion").addEventListener("click", function(){

  document.getElementById("sesionForm").style.display = "block";
  document.getElementById("registroForm").style.display = "none";

  this.classList.add("active");
  document.getElementById("btnRegistro").classList.remove("active");

});

// Cambiar a registro
document.getElementById("btnRegistro").addEventListener("click", function(){

  document.getElementById("registroForm").style.display = "block";
  document.getElementById("sesionForm").style.display = "none";

  this.classList.add("active");
  document.getElementById("btnSesion").classList.remove("active");

});

document.getElementById("backToSocial").addEventListener("click", function(){
  document.getElementById("manualLoginSection").classList.add("oculto");
  document.getElementById("vistaSocial").classList.remove("oculto");
});

document.getElementById("backToLogin").addEventListener("click", function(){
  document.getElementById("modalPerfil").classList.add("oculto");
  document.getElementById("modalLogin").classList.remove("oculto");
});

function validarEmail(input, errorSpan){
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valido = regex.test(input.value.trim());

  if (!valido){
    input.classList.add("input-error");
    errorSpan.classList.remove("oculto");
  } else {
    input.classList.remove("input-error");
    errorSpan.classList.add("oculto");
  }

  return valido;
}

// Validar al crear cuenta
document.getElementById("btnCrearCuenta").addEventListener("click", function(e){
  e.preventDefault();

  const input = document.getElementById("emailRegistro");
  const error = document.getElementById("errorEmailRegistro");

  if (!validarEmail(input, error)) return;

  document.getElementById("modalLogin").classList.add("oculto");
  document.getElementById("modalPerfil").classList.remove("oculto");
});

// Validar al iniciar sesión
document.getElementById("btnIngresar").addEventListener("click", function(e){
  e.preventDefault();

  const input = document.getElementById("emailSesion");
  const error = document.getElementById("errorEmailSesion");

  if (!validarEmail(input, error)) return;

  document.getElementById("modalLogin").classList.add("oculto");
  document.getElementById("modalPerfil").classList.remove("oculto");
});

// Validar email en el formulario de perfil
profileForm.addEventListener("submit", function(e){
  e.preventDefault();

  const input = document.getElementById("pf-email");
  const error = document.getElementById("errorPfEmail");

  if (!validarEmail(input, error)) return;

});

// ======================================================
// FOOTER - SUSCRIPCIÓN POR EMAIL
// ======================================================

const footerEmailBtn = document.getElementById("footerEmailBtn");

if (footerEmailBtn) {

  footerEmailBtn.addEventListener("click", function(e){

    e.preventDefault();

    const input = document.getElementById("footerEmail");
    const error = document.getElementById("errorFooterEmail");

    if (!validarEmail(input, error)) return;

    alert("¡Listo! Vamos a avisarte a " + input.value + " sobre nuevas becas, cursos y empleos.");

    input.value = "";

  });

}