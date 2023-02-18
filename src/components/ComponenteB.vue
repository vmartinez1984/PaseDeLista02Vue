<template>
  <div>   
      <p>Nombre: {{ nombre }}</p>
      <p>Edad: {{ edad }}</p>    
  </div>
</template>

<script>
export default {
  name:'componente-b',
  props:[
    'nombre',
    'edad',
    'testProp'
  ],
  methods:{
    saludar(){
      alert("Hola")
    }
  },
  watch:{
    testProp: function(newval, oldval){
      console.log(newval)
      console.log(oldval)
      this.saludar()
    }
  }

}
</script>