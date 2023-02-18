<template>
    <!-- Modal -->
    <form>
        <div class="modal fade" id="personDeleteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" data-bs-autohide="true" data-bs-delay="5000">
          <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">¿Desea borrar la persona?</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="buttonCloseModal"></button>
              </div>
              <div class="modal-body">

                  <!-- <div class="form-group">
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
                </div> -->
              </div>
                </div>
            </div>
        </div>
      </form>
</template>