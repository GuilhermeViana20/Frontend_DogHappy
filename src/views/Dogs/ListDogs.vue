<template>
	<div id="Home" class="fixed-sn black-skin">

        <div class="container">

            <div class="row my-5">

                <nav class="navbar navbar-expand-lg navbar-light mt-5">
                    <div class="container-fluid">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <router-link to="/">Home</router-link>
                                </li>
                                <li class="breadcrumb-item">
                                    Dogs
                                </li>
                            </ol>
                        </nav>
                    </div>
                </nav>

                <div class="col-sm-12 p-0 my-5">

                    <div v-if="loadingListDogs" class="row text-center">
                        <div class="col-sm-12">
                            <div class="spinner-border text-primary" style="width: 5rem; height: 5rem;" role="status">
                                <span class="visually-hidden">Carregando...</span>
                            </div>
                        </div>
                    </div>

                    <div v-else class="row">

                        <div v-for="(dog, index) in dogs" :key="index" class="col-md-4 col-sm-3">
                            <div class="card dog mb-5">
                                <img :src="dog.imagem" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{{ dog.nome }}</h5>
                                    <p class="card-text" limit="50">{{ dog.descricao.substring(0,100) }}...</p>
                                </div>
                                <div class="card-body">
                                    <a @click="getDetailDog(dog)" class="btn btn-primary btn-rounded">Ler mais</a>
                                </div> 
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        
        </div>

	</div>
</template>

<script>
import urlApi from "@/router/urlApi";
import axios from 'axios';
import router from '@/router/router'

export default {
	name: 'Home',
	components: {
	},
    data() {
        return {
            dogs: [],
            loadingListDogs: false
        }
    },

    mounted() {
        this.getDogs();
    },

    methods: {

        getDogs()
        {
            this.loadingListDogs = true;
            axios.get(urlApi + 'dogs')
            .then(response => {
               this.dogs = response.data
               this.loadingListDogs = false;
            })
            .catch(function (error) {
                console.log(error);
                this.loadingListDogs = false;
            })
        },

        getDetailDog(dog)
        {
            router.push({
                name: 'DogDetail',
                params: { id: dog.id }
            })
        }

    }
}

</script>

<style scoped>

    @media (min-width: 768px) {
        .dog img {
            height: 240px;
        }
    }

</style>