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

                    <div class="col-md-4 col-sm-3">
                        <div class="card">
                            <img src="https://mdbootstrap.com/img/new/standard/city/062.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div class="card-body">
                                <a href="#" class="btn btn-primary btn-rounded">Button</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-sm-3">
                        <div class="card">
                            <img src="https://mdbootstrap.com/img/new/standard/city/062.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div class="card-body">
                                <a href="#" class="btn btn-primary btn-rounded">Button</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-3">
                        <div class="card">
                            <img src="https://mdbootstrap.com/img/new/standard/city/062.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div class="card-body">
                                <a href="#" class="btn btn-primary btn-rounded">Button</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

	</div>
</template>

<script>

export default {
	name: 'Home',
	components: {
	},
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000',
        }
    },

    mounted() {

        this.getDogs();

    },

    methods: {

        getDogs()
        {
            this.$http.get( this.apiUrl + 'dogs' )
            .then(function (response) {
                console.log(response);
            });
        }

    }
}

</script>

<style>

</style>