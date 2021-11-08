<template>
	<div id="Home" class="fixed-sn black-skin">

        <div class="row my-3">

            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Dogs</a></li>
                        </ol>
                    </nav>
                </div>
            </nav>

            <div class="col-sm-12 p-0 my-3">

                <div class="row">

                    <div v-for="(dog, index) in dogs" :key="index" class="col-md-4 col-sm-3">
                        <div class="card">
                            <img src="https://www.petz.com.br/cachorro/racas/husky-siberiano/img/husky-siberiano-caracteristicas-guia-racas.webp" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{{ dog.nome }}</h5>
                                <p class="card-text" limit="50">{{ dog.descricao.substring(0,100) }}...</p>
                            </div>
                            <div class="card-body">
                                <a href="#" class="btn btn-primary btn-rounded">Ler mais</a>
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

export default {
	name: 'Home',
	components: {
	},
    data() {
        return {
            dogs: [],
        }
    },

    mounted() {
        this.getDogs();
    },

    methods: {

        getDogs()
        {
            axios.get(urlApi + 'dogs')
            .then(response => {
               this.dogs = response.data
            })
            .catch(function (error) {
                console.log(error);
            })
        }

    }
}

</script>

<style>

</style>