<template>
  <div>
    <MasterView>
      <!-- loading -->
      <LoaderPage v-if="isLoad" />
      <div v-show="!isLoad" class="container">
        <div class="row">

          <div v-for="(p,index) in products" :key="index"  class="col-md-4">
            <div class="card p-3 m-3 shadow" style="height:90%;">
              <div class="card-header">{{p.title}}</div>

              <div class="card-body text-center">
                    <img  :src="p.image" style="height:140px;"/>
              </div>

              <div class="card-footer">
                <span>Price : <small>$ {{ p.price }}</small></span>

                <button   class="btn btn-dark text-white float-end">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </MasterView>
  </div>
</template>

<script>
import LoaderPage from "../component/LoaderPage.vue";
import MasterView from "../Layout/MasterView.vue";
import axios from "axios";

export default {
  name: "ProductPage",
  components: { LoaderPage, MasterView },
  data() {
    return {
      isLoad: true,
      products: [],
      cart:[],
    };
  },

  

  created() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      this.products = response.data;
      this.isLoad = false;
    });
  },
};
</script>
