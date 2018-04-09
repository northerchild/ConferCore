//MAP API

let api = "AIzaSyDzdHUIzETXWp-i-9rlJguJ2s_M_ZwPA7M"


      function initMap() {
      	let latLng ={
      		lat:4.684079,
    		lng:-74.041489
      	}
        let map = new google.maps.Map(document.getElementById('mapa'), {
          "center": latLng,
          "zoom": 16,
          "mapTypeId": google.maps.MapTypeId.ROADMAP
        });
        let marker = new google.maps.Marker({
        	position:latLng,
        	map:map,
        	tittle: "CONFERCORE"
        })
        let contenido = "<h2>CONFERCORE</h2>"+"<p>Del 10 al 12 de Diciembre</p>"+"<p>Visitanos</p>"
        let informacion = new google.maps.InfoWindow({
        	content: contenido
        })

        marker.addListener("click",()=>{
        	informacion.open(map, marker)
        })
      }


(function(){
	"use strict"
	document.addEventListener("DOMContentLoaded",function(){

	//Datos Usuario	
	const nombre = document.getElementById('nombre')
	const apellido = document.getElementById('apellido')
	const email = document.getElementById('email')
	//Campos pases
	const pase_dia = document.getElementById('pase_dia')
	const pase_dosdia = document.getElementById('pase_dosdias')
	const pase_completo = document.getElementById('pase_completo')
	//Botones y divs
	const calcular = document.getElementById('calcular')
	const errorDiv = document.getElementById('error')
	const botonRegistro = document.getElementById('btnRegistro')
	const lista_productos = document.getElementById('lista_productos')
	const regalos = document.getElementById('regalo')
	const suma = document.getElementById('suma-total')
	//Extras
	const camisas = document.getElementById('camisa_evento')
	const etiquetas = document.getElementById('etiquetas')
	
	nombre.addEventListener("blur", validarCampos)
	apellido.addEventListener("blur", validarCampos)
	email.addEventListener("blur", validarCampos)
	email.addEventListener("blur", validarEmail)

	//Validacion de campos del formulario
	function validarCampos(){
		if (this.value === "") {
			errorDiv.style.display = "block"
			errorDiv.innerHTML = "Este campo es obligatorio"
			this.style.border = "1px solid red"
			errorDiv.style.border = "1px solid red"
		}
		else
		{
			errorDiv.style.display = "none"
			this.style.border = "1px solid #ccc"
		}
	}
	function validarEmail(){
		if (email.value.includes("@")) {
			errorDiv.style.display = "none"
			this.style.border = "1px solid #ccc"
		}
		else
		{
			errorDiv.style.display = "block"
			errorDiv.innerHTML = "Este campo debe contar con una @"
			this.style.border = "1px solid red"
			errorDiv.style.border = "1px solid red"
		}
	}

	pase_dia.addEventListener('blur',mostrarDias)
	pase_dosdia.addEventListener('blur',mostrarDias)
	pase_completo.addEventListener('blur',mostrarDias)

	//Funcion para mostrar dia dependiendo el boleto
	function mostrarDias(){
		let boletoDia = parseInt(pase_dia.value, 10)|| 0,
			boletDosDias = parseInt(pase_dosdia.value, 10)|| 0,
			boletoCompleto = parseInt(pase_completo.value, 10)|| 0
		let diasElegidos = []
		if (boletoDia >= 1) {diasElegidos.push("viernes")}
		if (boletDosDias >= 1) {diasElegidos.push("viernes","sabado")}
		if (boletoCompleto >= 1) {diasElegidos.push("viernes","sabado","domingo")}
		for (let i = 0; i<diasElegidos.length; i++) {
				document.getElementById(diasElegidos[i]).style.display = "block"
			}
	}

	//Funcion para calcular montos
	calcular.addEventListener("click",(e)=>{
		e.preventDefault()
		if (regalos.value === "") {
			alert("Por favor escoge tu regalo")
			regalos.focus()
		}else{
			let boletoDia = parseInt(pase_dia.value, 10)|| 0,
				boletDosDias = parseInt(pase_dosdia.value, 10)|| 0,
				boletoCompleto = parseInt(pase_completo.value, 10)|| 0,
				canEtiquetas = parseInt(etiquetas.value, 10)|| 0,
				canCamisas = parseInt(camisas.value, 10)|| 0
			let totalPagar = (boletoDia * 30) + (boletDosDias * 45) + (boletoCompleto * 50) + ((canCamisas * 10) * .93) + (canEtiquetas *2)
			totalPagar.toFixed(2)
			let listadoProductos = []
			 if (boletoDia >= 1) {listadoProductos.push(`${boletoDia} Pase por día`)} 
		 	 if (boletDosDias >= 1) {listadoProductos.push(`${boletDosDias} Pase por 2 días`)}
			 if (boletoCompleto >= 1) {listadoProductos.push(`${boletoCompleto} Pases completos`)}
			 if (canCamisas >= 1) {listadoProductos.push(`${canCamisas} Camisas`)}
			 if (canEtiquetas >= 1) {listadoProductos.push(`${canEtiquetas} Etiquetas`)}
			lista_productos.innerHTML = ""
			for (let i = 0; i < listadoProductos.length; i++) {
				 lista_productos.innerHTML += listadoProductos[i] + "<br />"
			suma.innerHTML = `$ ${totalPagar}` 
			}
		}
	})

	})//DOM CONTENT LOADED
})()


//Jquery

$(function(){

	//Menu movil
	let windowHeight = $(window).height();
	let barraAltura = $('.barra').innerHeight()
	$(window).scroll(()=>{
		let scroll = $(window).scrollTop()
		if (scroll > windowHeight) {
			$(".barra").addClass("fixed")
			$("body").css({"margin-top":barraAltura+"px"})
		}else{
			$(".barra").removeClass("fixed")
			$("body").css({"margin-top":"0px"})
		}		
	})

	//Controlador de la sección conferencias//
	$(".programa-evento .info-cursos:first").show();
	$(".menu-programa a:first").addClass("activo");
	$(".menu-programa a").on("click", function()
	{
		$(".menu-programa a").removeClass("activo");
		$(this).addClass("activo");
		$(".ocultar").hide();
		let enlace = $(this).attr("href");
		$(enlace).fadeIn(1000);
		return false;
	});

	//Menu responsive
	$('.menu-movil').on('click',()=>{
		$('.navegacion-principal').slideToggle()
	})

	//Animaciones para los números resumen evento
	$(".resumen-evento li:nth-child(1) p").animateNumber({number: 6},1500)
	$(".resumen-evento li:nth-child(2) p").animateNumber({number: 15},1500)
	$(".resumen-evento li:nth-child(3) p").animateNumber({number: 3},1500)
	$(".resumen-evento li:nth-child(4) p").animateNumber({number: 9},1500)

	//cuenta regresiva
	$(".cuenta-regresiva").countdown('2018/12/10 09:00:00', (e)=>{
		$("#dias").html(e.strftime('%D'))
		$("#horas").html(e.strftime('%H'))
		$("#minutos").html(e.strftime('%M'))
		$("#segundos").html(e.strftime('%S'))
	})
})