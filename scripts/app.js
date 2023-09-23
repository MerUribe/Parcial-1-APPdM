Vue.component('menu-card',{
	data:function(){ 
	    return {
			titulo:"Vida Saludable",
			banner:"img/banner.jpg",
			descripcion:"Imagen de elementos de lo cotidiano para llevar una vida saludable",

			menus: [
			{
				id:1,
				title: 'comenzar un estilo de vida saludable',
				texto:"Plan de alimentación generalizado, ideal si querés comenzar un cambio de hábitos, tips básicos, consejos, lista de compras, entre otras cosas más que te ayudarán a comenzar este cambio, para luego ir en busca de tus objetivos, si así lo deseas, con un plan personalizado. No se realiza videollamada, ya que no es un plan personalizado.",
				image:'img/id1.png',
				alt:"Imagen de dos personas haciendo ejercicio"
			},
			{
				id:2,
				title: 'mosaicos semanales para un mes + lista de compras + derribando mitos',
				texto:"Menú semanal por un mes, para poder variar tu alimentación siendo completa y equilibrada, fácil y práctica. Cuenta con todos los grupos de alimentos y algunos reemplazos para aquellas personas que no consuman carnes.",
				image:'img/id2.jpg',
				alt:"Imagen de una mujer haciendo ejercicio"
			},
			{
				id:3,
				title: 'plan de alimentación personalizado',
				texto:"Plan de alimentación personalizado. Se coordina una consulta por videollamada (acordamos la fecha y hora por WhatsApp), nos conocemos y planteamos objetivos. Luego se recibe la planilla de control (con mediciones y peso) registro de 24 horas para completar todo lo que vas consumiendo. A la semana de la consulta sebrinda el plan de alimentación acorde a tu requerimiento y objetivo, gustos y preferencias. Cuando se envía el plan de alimentación se envía el turno control que será dentro de 15 o 20 días, de acuerdo a lo deseado.",
				image:'',
				alt:""
			}
			],
		}//fin data
	},
	template:`
		<div>
			<h1>{{titulo}}</h1>

			<img v-bind:src ="banner" v-bind:alt="descripcion"/>


			<componente-hijo v-for="x in menus"
				v-bind:key="x.id"
				v-bind:title="x.title"
				v-bind:image="x.image"
				v-bind:texto="x.texto"
				v-bind:id="x.id"
  				v-bind:alt="x.alt">
			</componente-hijo>

			
		</div>
	`
}) //cierre componente
Vue.component('componente-hijo', {
	props:["image", "title", "texto"],
	template:`
		<div class="menus">
			<img :src="image" :alt="title"/>
			<h2>{{ title }}</h2>
			<p> {{ texto }} </p>
		</div>
	`,
})

Vue.component('form-data', {
	data:function(){
		return {
			form_data:{
				tema:"",
				nombre:"",
				apellido:""
			}	
		}
	},
	template:`
		<div class="form">
			<form v-on:submit.prevent>
				<label>Nombre</label>
				<input type="text" v-model="form_data.nombre"  placeholder="Ingrese su Nombre"/>
			    
				<label>Apellido</label>
				<input type="text" v-model="form_data.apellido"  placeholder="Ingrese su apellido"/>
	
				<button @click="guardar(form_data)">Guardar</button>

				<label>tema1
					<input type="radio" value="Plan 1" v-model="form_data.tema">
				</label>
				<label>tema2
  					<input type="radio" value="Plan 2" v-model="form_data.tema">
				</label>
				<label>tema3
  					<input type="radio" value="Plan 3" v-model="form_data.tema">
				</label>
				<p>Eligió:{{form_data.tema}}</p>
			</form>	
		</div>`,	

	});	
	

//Se declara la instancia
var app= new Vue({
	el: ".contenedor",
	data: {

	}
	
})//fin instancia root


