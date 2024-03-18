import"./Home.css"
export function Home(){
    return(
    <>
        <section className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h3 ><span className="fuente">Servicios a un clic</span></h3>
                    <h2 className="text-muted">HOLA <span className="fuente">LINA</span></h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum alias consectetur perferendis doloribus! Voluptatibus doloremque soluta omnis aut tempora nobis harum cum assumenda ea aliquam voluptate odio ut tenetur qui nesciunt beatae ipsa, et possimus dolorum esse quos repellat animi quasi earum? Itaque laborum cumque ex dolores fugiat perspiciatis temporibus.</p>
                </div>
                <div className="col-12 col-md-6">
                <select class="form-select" aria-label="Default select example">
                <option selected>Tu Grupo Familiar</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
               <div className="row">
                    <div className="col-12 col-md-2 mt-5">
                    <i class="bi bi-person-heart fs-1 fuente "></i>
                    </div>
                    <div className="col-12 col-md-10 mt-5">
                        <br />
                        <p>Dr Miguel Restrepo Toriyama</p>
                    </div>
               </div>
               <div className="row">
                <div className="col-12 col-md-2 mt-5">
                <i class="bi bi-person-arms-up fs-1 fuente"></i>
                </div>
                <div className="col-12 col-md-10 mt-5">
                    <br />
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

               </div>
               <div className="row">
               <div className="col-12 col-md-2 mt-5">
               <i class="bi bi-bag-plus-fill fs-1 fuente"></i>
                </div>
                <div className="col-12 col-md-10 mt-5">
                    <br />
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

               </div>
               <div className="row">
               <div className="col-12 col-md-2 mt-5">
               <i class="bi bi-building fs-1 fuente"></i>
                </div>
                <div className="col-12 col-md-10 mt-5">
                    <br />
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

               </div>

                </div>
            </div>
            
        </section>
     
    </>
    )
}