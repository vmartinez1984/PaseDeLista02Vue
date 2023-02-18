<template>
          <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#formularioDePersonaModal">
        Agregar persona
      </button>

        <!-- Modal -->
      <form @submit.prevent="savePerson">
        <div class="modal fade" id="formularioDePersonaModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" data-bs-autohide="true" data-bs-delay="5000">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Persona</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="buttonCloseModal"></button>
              </div>
              <div class="modal-body">

                  <div class="form-group">
                    <label for="name">Nombre</label>
                    <input type="text" class="form-control" placeholder="Nombre" v-model="person.name"  :disabled="isLoading">                    
                  </div>
                  <div class="form-group">
                    <label for="lastName">Apellidos</label>
                    <input type="text" class="form-control" placeholder="Apellidos" v-model="person.lastName" :disabled="isLoading">
                  </div>
                  <div class="form-group">
                    <label for="birthday">Fecha de nacimiento</label>
                    <input type="date" class="form-control" placeholder="Fecha de nacimiento" v-model="person.birthday" :disabled="isLoading">
                  </div>     
                  <div class="form-group">
                    <label for="genere">Genero</label>
                    <select name="genere" class="form-select" v-model="person.genere" :disabled="isLoading">
                      <option value="">Seleccione</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                    </select>
                  </div>                    
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" :disabled="isLoading" @click="resetPerson" id="formClose">Cerrar</button>
                  <button type="submit" class="btn btn-primary" :disabled="isLoading">
                    <span v-if="!isLoading">Guardar</span>                   
                    <span v-if="isLoading">Un momento &nbsp;</span>
                    <span v-if="isLoading">
                      <div class="spinner-border spinner-border-sm text-white" role="status"></div>
                    </span>

                  </button>        
                </div>
              </div>
            </div>
        </div>
      </form>
      <toast :clase="toast.clase" :mensaje="toast.mensaje" :mostrar="toast.mostrar" :titulo="toast.titulo"/>
</template>

<script>
import personService from '@/services/PersonsService'
import Toast from '../Toast.vue'

export default{
  components:{
    Toast
  },
  props:['editarPersona'],
  data(){
    return{
      isLoading: false,
      person:{
        id:0,
        name:'',
        lastName:'',
        genere:'',
        birthday: ''
      },
      toast:{
        mensaje:'',
        clase:'',
        mostrar: false,
        titulo: ''
      }
    }
  }, 
  methods:{
    async savePerson(){
        //console.log(this.person)
      if(this.person.id == 0){
        this.isLoading = true          
        try{
          const data = await personService.setPersonAsync(this.person)
          this.person.id = data.id
          console.log(this.person)       
          this.$emit('guardarPersona', this.person)
          this.isLoading = false   
          //Datos para mostrar el toast
          this.toast.titulo = 'Aviso'
          this.toast.mensaje = "Datos registrados"
          this.toast.clase = "text-info"
          this.toast.mostrar = true
          //se cierra el modal
          document.getElementById('buttonCloseModal').click()
          this.resetPerson()            
        }catch(error){
          console.log(error)
          this.isError = true
          alert("Ocurrio un error")            
          this.closeModal()
        }
      }else{
        console.log("Not implement")
      }
    },
    resetPerson(){
      this.person.id = 0
      this.person.genere = ''
      this.person.name = ''
      this.person.lastName = ''
      this.person.birthday = ''
      this.isLoading = false
    },
    closeModal(){
      document.getElementById('buttonCloseModal').click()
    },
  },
  emits:['guardarPersona'],
  watch:{
    editarPersona: function(valorNuevo, valorAnterior){
      console.log(valorNuevo)
      console.log(valorAnterior)
      this.person = Object.assign({}, valorNuevo)
      // var fecha = Date.parse(valorNuevo.birthday)   
      // console.log(fecha.toTimeString())         
      // this.person.birthday = fecha.getDate()+'/'+fecha.getMonth()+'/'+fecha.getFullYear();
      this.person.birthday = valorNuevo.birthday.substring(0,10)
    }
  }
}
</script>