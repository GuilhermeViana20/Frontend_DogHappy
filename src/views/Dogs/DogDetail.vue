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
                                    <router-link to="/dogs">Dogs</router-link>
                                </li>
                                <li class="breadcrumb-item">
                                    {{ dog.nome }}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </nav>

                <div class="col-sm-12 p-0 my-5">

                    <div class="row">

                        <div class="p-5 text-center bg-light">
                            <h2 class="mb-3">{{ dog.nome }}</h2>
                            <span class="mb-3">{{ dog.descricao }}</span>
                        </div>

                        <div class="col-sm-7 p-0">
                            <img :src="dog.imagem" class="img-fluid" alt="..." />
                        </div>

                        <div class="col-sm-5 p-0">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="accordionOne">
                                        <button class="accordion-button" type="button" data-mdb-toggle="collapse" data-mdb-target="#nome_cientifico" aria-expanded="true" aria-controls="nome_cientifico" >
                                            Nome Científico
                                        </button>
                                    </h2>
                                    <div id="nome_cientifico" class="accordion-collapse collapse show" aria-labelledby="accordionOne" data-mdb-parent="#accordionExample" >
                                        <div class="accordion-body">
                                            {{ dog.nome_cientifico }}
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="accordionTwo">
                                        <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#expectativa_vida" aria-expanded="false" aria-controls="expectativa_vida" >
                                            Expectativa de Vida
                                        </button>
                                    </h2>
                                    <div id="expectativa_vida" class="accordion-collapse collapse" aria-labelledby="accordionTwo" data-mdb-parent="#accordionExample" >
                                        <div class="accordion-body">
                                            {{ dog.expectativa_vida }}
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="accordionThree">
                                        <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#origem" aria-expanded="false" aria-controls="origem" >
                                            Origem
                                        </button>
                                    </h2>
                                    <div id="origem" class="accordion-collapse collapse" aria-labelledby="accordionThree" data-mdb-parent="#accordionExample" >
                                        <div class="accordion-body">
                                            {{ dog.origem }}
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="accordionFour">
                                        <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#altura" aria-expanded="false" aria-controls="altura" >
                                            Altura
                                        </button>
                                    </h2>
                                    <div id="altura" class="accordion-collapse collapse" aria-labelledby="accordionFour" data-mdb-parent="#accordionExample" >
                                        <div class="accordion-body">
                                            {{ dog.altura }}
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="accordionFive">
                                        <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#cores" aria-expanded="false" aria-controls="cores" >
                                            Cores
                                        </button>
                                    </h2>
                                    <div id="cores" class="accordion-collapse collapse" aria-labelledby="accordionFive" data-mdb-parent="#accordionExample" >
                                        <div class="accordion-body">
                                            {{ dog.cores }}
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="accordionSix">
                                        <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#personalidade" aria-expanded="false" aria-controls="personalidade" >
                                            Personalidade
                                        </button>
                                    </h2>
                                    <div id="personalidade" class="accordion-collapse collapse" aria-labelledby="accordionSix" data-mdb-parent="#accordionExample" >
                                        <div class="accordion-body">
                                            {{ dog.personalidade }}
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="accordionSeven">
                                        <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#peso" aria-expanded="false" aria-controls="peso" >
                                            Peso
                                        </button>
                                    </h2>
                                    <div id="peso" class="accordion-collapse collapse" aria-labelledby="accordionSeven" data-mdb-parent="#accordionExample" >
                                        <div class="accordion-body">
                                            {{ dog.peso }}
                                        </div>
                                    </div>
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

export default {
	name: 'DogDetail',
	components: {
	},
    data() {
        return {
            dog: [],
        }
    },

    mounted() {
        var currentRota = this.$router.options.history.state.current;
        var rota = currentRota.replace('/dog/', '');

        this.getDog(rota);
    },

    methods: {

        getDog(rota)
        {
            axios.get(urlApi + 'dogs/' + rota)
            .then(response => {
                console.log(response)
               this.dog = response.data
            })
            .catch(function (error) {
                console.log(error);
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