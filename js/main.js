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
	const resultado = document.getElementById('lista-productos')
	const regalos = document.getElementById('regalo')
	//Extras
	const camisas = document.getElementById('camisa_evento')
	const etiquetas = document.getElementById('etiquetas')

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
			console.log(totalPagar)
		}
	})

	})//DOM CONTENT LOADED
})()