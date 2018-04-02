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

	pase_dia.addEventListener('blur',mostrarDias)
	pase_dosdia.addEventListener('blur',mostrarDias)
	pase_completo.addEventListener('blur',mostrarDias)

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

	nombre.addEventListener("blur", validarCampos)
	apellido.addEventListener("blur", validarCampos)
	email.addEventListener("blur", validarCampos)
	email.addEventListener("blur", validarEmail)


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