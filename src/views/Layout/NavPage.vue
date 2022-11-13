<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/" class="text-white">Home</router-link>
                  </li>
                  <li class="breadcrumb-item">
                    <router-link to="/product" class="text-white">Product</router-link>
                  </li>
                  <li class="breadcrumb-item">
                    <router-link to="/cart" class="text-white">
                      <i class="fas fa-cart-plus"></i>
                      <small class="badge bg-danger" style="font-size: 8px;">9+</small>
                    </router-link>
                  </li>
                </ol>
              </nav>
            </div>
          </nav>
    </div>
</template>

<script>
    export default {
        name:'NavPage',

        data(){
              return{
                  cart:[],
              }
        },
    }
</script>

<style lang="scss" scoped>

</style>