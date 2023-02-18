<template>
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true" :class="{'show': mostrarToast}">
        <div class="toast-header">
          <!-- <img src="..." class="rounded me-2" alt="..."> -->
          <strong class="me-auto" :class="clase">{{ titulo }}</strong>          
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body text-info" :class="clase">
          {{mensaje}}
        </div>
      </div>
    </div>
</template>
<script>

export default{    
    name: 'toast-vue',
    props:['mensaje','titulo','mostrar','clase'],
    data(){
        return {
            mostrarToast: false
        }
    },
    created(){
        //console.log("mostrar: ", this.mostrar)
        //console.log("mostrarToast: ", this.mostrarToast)
        this.mostrarToast = this.mostrar
    },
    methods:{
        ocultarToast(){         
            //console.log(this.mostrarToast)   
            this.mostrarToast = true
            setTimeout(() => {
                this.mostrarToast = false
                //alert("Cerrar toast")
            }, 3000)      
        }
    },
    watch:{
        mostrar: function (valorNuevo, valorAnterior ){
            console.log("anterior:", valorAnterior)
            console.log("nuevo: ",valorNuevo)
            this.ocultarToast()
        }
    }
}
</script>