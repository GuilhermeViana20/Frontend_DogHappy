<template>
    <div id="Create" class="fixed-sn black-skin">
        
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

                <div class="col-sm-12 p-0">

                    <div class="row mt-3 mb-3">

                        <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                            <div class="form-outline">
                                <input v-model="form.nome.value" type="text" id="nome" class="form-control" />
                                <label class="form-label" for="nome">{{ form.nome.title }}</label>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                            <div class="form-outline">
                                <input v-model="form.nome_cientifico.value" type="text" id="nome_cientifico" class="form-control" />
                                <label class="form-label" for="nome_cientifico">{{ form.nome_cientifico.title }}</label>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                            <div class="form-outline">
                                <input v-model="form.imagem.value" type="text" id="imagem" class="form-control" />
                                <label class="form-label" for="imagem">{{ form.imagem.title }}</label>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                            <!-- Text input -->
                            <div class="form-outline">
                                <input v-model="form.expectativa_vida.value" type="text" id="expectativa_vida" class="form-control" />
                                <label class="form-label" for="expectativa_vida">{{ form.expectativa_vida.title }}</label>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                            <!-- Text input -->
                            <div class="form-outline">
                                <input v-model="form.origem.value" type="text" id="origem" class="form-control" />
                                <label class="form-label" for="origem">{{ form.origem.title }}</label>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                            <!-- Email input -->
                            <div class="form-outline">
                                <input v-model="form.altura.value" type="text" id="altura" class="form-control" />
                                <label class="form-label" for="altura">{{ form.altura.title }}</label>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                            <!-- Number input -->
                            <div class="form-outline">
                                <input v-model="form.cores.value" type="text" id="cores" class="form-control" />
                                <label class="form-label" for="cores">{{ form.cores.title }}</label>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                            <!-- Number input -->
                            <div class="form-outline">
                                <input v-model="form.personalidade.value" type="text" id="personalidade" class="form-control" />
                                <label class="form-label" for="personalidade">{{ form.personalidade.title }}</label>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                            <!-- Number input -->
                            <div class="form-outline">
                                <input v-model="form.peso.value" type="text" id="peso" class="form-control" />
                                <label class="form-label" for="peso">{{ form.peso.title }}</label>
                            </div>
                        </div>

                        <!-- Message input -->
                        <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
                            <div class="form-outline">
                                <textarea v-model="form.descricao.value" class="form-control" id="descricao" rows="4"></textarea>
                                <label class="form-label" for="descricao">{{ form.descricao.title }}</label>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <!-- Submit button -->
                            <button @click="cadastrar()" class="btn btn-primary btn-block mb-4">{{ form.button.title }}</button>
                        </div>

                    </div>

                </div>

            </div>

            <div id="alertCadastro" :class="{ 'alert-success' : themeAlert === true, 'alert-danger' : themeAlert === false }" class="alert alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

        </div>
    </div>
</template>

<script>
import urlApi from "@/router/urlApi";
import axios from 'axios';

export default {
    name: 'Create',
    data() {
        return {
            form: {
                nome: { title: 'Nome', value: '' },
                nome_cientifico: { title: 'Nome Científico', value: '' },
                imagem: { title: 'Imagem URL', value: '' },
                expectativa_vida: { title: 'Expectativa de Vida', value: '' },
                origem: { title: 'Origem', value: '' },
                altura: { title: 'Altura', value: '' },
                cores: { title: 'Cores', value: '' },
                personalidade: { title: 'Personalidade', value: '' },
                peso: { title: 'Peso', value: '' },
                descricao: { title: 'Descrição', value: '' },
                button: { title: 'Cadastrar' },
            },
            themeAlert: true,
        }
    },

    methods: {
        cadastrar() {
            var data = {
                nome: this.form.nome.value,
                nome_cientifico: this.form.nome_cientifico.value,
                imagem: this.form.imagem.value,
                expectativa_vida: this.form.expectativa_vida.value,
                origem: this.form.origem.value,
                altura: this.form.altura.value,
                cores: this.form.cores.value,
                personalidade: this.form.personalidade.value,
                peso: this.form.peso.value,
                descricao: this.form.descricao.value,
            };

            axios.post(urlApi + 'dogs/create', data)
            .then(response => {
                console.log(response)
                this.themeAlert = true;
            })
            .catch(function (error) {
                console.log(error);
                this.themeAlert = false;
            })
        }
    }
}
</script>

<style scoped>

    #alertCadastro {
        width: auto !important;
        position: fixed;
        top: 15%;
        right: 5%;
        z-index: 999999;
    }

    #alertCadastro.alert-dismissible {
        padding: 15px;
    }

    #alertCadastro .close {
        font-size: calc(1.275rem + 0.5vw) !important;
        vertical-align: middle;
    }
</style>