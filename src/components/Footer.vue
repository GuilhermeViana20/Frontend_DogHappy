<template>
    <div>
        <footer class="text-center text-lg-start bg-light text-muted">
            <section class="container d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div class="me-5 d-none d-lg-block">
                    <span>Siga nossas redes sociais:</span>
                </div>

                <div>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </section>
        
            <section class="">
                <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">

                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                <i class="fas fa-dog me-3"></i>Dog Happy
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>

                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Cachorros
                            </h6>
                            <p>
                                <a href="#!" class="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">React</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Vue</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Laravel</a>
                            </p>
                        </div>

                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Links Úteis
                            </h6>
                            <p>
                                <router-link class="link" to="/">Home</router-link>
                            </p>
                            <p>
                                <router-link class="link" to="/dogs">Dogs</router-link>
                            </p>
                        </div>

                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Contato
                            </h6>
                            <p><i class="fas fa-home me-3"></i>
                            Rua Morumbi, 248</p>
                            <p>
                                <i class="fas fa-envelope me-3"></i>
                                guilhermeviana347@gmail.com
                            </p>
                            <p><i class="fas fa-phone me-3"></i>
                            + 55 85 99188-7855</p>
                            <p><i class="fas fa-phone me-3"></i>
                            + 55 85 98781-4993</p>
                        </div>
                    </div>
                </div>
            </section>

            <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
                © 2021 Copyright:
                <a class="text-reset fw-bold" href="#">Guilherme Viana</a>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
    p .link {
        color: #757575 !important;
    }

    p .link:hover {
        color: #1266f1 !important;
    }
    
</style>