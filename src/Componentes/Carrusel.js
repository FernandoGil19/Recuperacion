const Carrusel = () => {
    return (
        <div className="container">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={require("../Imagenes/N2.jpg")} class="d-block w-100" alt="Naruto1"/>
                    </div>
                    <div class="carousel-item">
                        <img src={require("../Imagenes/N4.jpg")} class="d-block w-100" alt="Naruto4"/>
                    </div>
                    <div class="carousel-item">
                        <img src={require("../Imagenes/naruto.jpg")} class="d-block w-100" alt="Naruto"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Carrusel