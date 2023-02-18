<template>
    <div class="container">
    
      <formulario-de-persona @guardarPersona="guardarPersona" :editarPersona="person" />

    <div class="card">
        <div class="card-header">
          <h1>Personas</h1>
        </div>
        <div class="card-body">
          <div v-if="!isError">
            <div v-if="persons.length == 0">
              <div class="text-center">
                <div class="spinner-border text-primary" role="status"></div>
                <span class="sr-only text-primary">Cargando...</span>                
              </div>
            </div>            
          </div>
          
          <div v-if="persons.length != 0">
          <table class="table">
            <tbody>
              <tr v-for="person in persons" :key="person.id">
                <td>{{ person.name }}</td>
                <td>{{ person.lastName }}</td>
                <td>{{ person.genere }}</td>
                <td>{{ person.birthday }}</td>
                <td>                  
                  <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#personDeleteModal">
                    Borrar
                  </button>
                  <button type="button" class="btn btn-warning text-white mx-2" data-bs-toggle="modal" data-bs-target="#formularioDePersonaModal" @click="editarPersona(person)">
                    Editar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
    </div>
  </div>

  <!-- <personDelete/> -->
  
  <toast :clase="toast.clase" :mensaje="toast.mensaje" :mostrar="toast.mostrar" :titulo="toast.titulo"/>
</template>

<script>
import personService from '@/services/PersonsService'
//import personDelete from '@/components/PersonDelete.vue'
import Toast from '@/components/Toast.vue'
import FormularioDePersona from './FormularioDePersona.vue'

export default{
    components:{
      //personDelete,
      FormularioDePersona,
      Toast    
    },
    name: 'person-vue',
    data(){
        return{
          persons:[],
          person:{
            id:0,
            name:'',
            lastName:'',
            genere:'',
            birthday: ''
          },
          isLoading: false,
          isError: false,          
          toast:{
            mensaje:'',
            clase:'',
            mostrar: false,
            titulo: ''
          },
        }
    }, 
    created(){
      this.getAllPersons()      
      console.log(this.objeto)
    },
    methods:{
      async getAllPersons(){       
        try{
          this.persons = await personService.getPersonsAsync()
          //console.log(this.persons)
          this.toast.titulo = 'Aviso'
          this.toast.mensaje = "Lista cargada"
          this.toast.clase = "text-primary"
          this.toast.mostrar = true
        } catch(error){
          this.isError = true 
          //toast
          this.toast.titulo = 'Error'
          this.toast.mensaje = "Error al cargar los datos."
          this.toast.clase = "text-danger"
          this.toast.mostrar = true         
        }        
      }, 
      editarPersona(person){
        this.person = person
      },
      deletePerson(person){
        console.log(person)
      },
      guardarPersona(persona){
        console.log('persona guardada')
        console.log(persona)
        var personaAgregada = Object.assign({}, persona)
        this.persons.push(personaAgregada)
      }
    }    
}
</script>
