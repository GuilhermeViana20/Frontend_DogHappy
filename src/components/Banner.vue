<template>
    <div>
        <div id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel" >
            <div class="carousel-indicators">
                <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" ></button>
                <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="1" aria-label="Slide 2" ></button>
                <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="2" aria-label="Slide 3" ></button>
            </div>

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://tudovet.com.br/blog/wp-content/uploads/2020/03/racas-de-cachorro.jpeg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </div>

                <div class="carousel-item">
                    <img src="https://www.pulsoseguros.com.br/wp-content/uploads/2018/08/lydia-torrey-563689-unsplash_2-2048x1024.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div class="carousel-item">
                    <img src="https://s1.1zoom.me/b6658/8/Dogs_White_Puppy_Husky_Grass_520512_1920x1080.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev" >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next" >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
	components: {
	}
}
</script>

<style scoped>
    .carousel-item img {
        height: 70vh;
        display: block;
        width: 100vw;
        object-fit: cover;
    }
</style>