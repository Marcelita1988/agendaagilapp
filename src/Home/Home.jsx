import"./Home.css"




import basedatos from "../utils/basedatos.json"



export function Home(){

    console.log(basedatos[0])

   
    return(//zona de renderizado
    <>
        <section className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h3 ><span className="fuente">Servicios a un clic</span></h3>
                    <h2 className="text-muted">HOLA <span className="fuente">{basedatos[0].nombreUsuario}</span></h2>
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
                        <p>Medico familia:{basedatos[0].medicoDeFamilia}</p>
                    </div>
               </div>
               <div className="row">
                <div className="col-12 col-md-2 mt-5">
                <i class="bi bi-person-arms-up fs-1 fuente"></i>
                </div>
                <div className="col-12 col-md-10 mt-5">
                    <br />
                    <p>Grupo de Ingresos:{basedatos[0].grupoDeIngreso}</p>
                </div>

               </div>
               <div className="row">
               <div className="col-12 col-md-2 mt-5">
               <i class="bi bi-bag-plus-fill fs-1 fuente"></i>
                </div>
                <div className="col-12 col-md-10 mt-5">
                    <br />
                    <p>Ips:{basedatos[0].ips}</p>
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
        <hr />
        <section className="container">
            <div className="row">
                <div className="col-12 col-md-5">
                    <h5>PACIENTE {basedatos[0].nombreUsuario}, estas son tus proximas citas:</h5>

                </div>
            </div>

        </section>
        <section>
            <section className="container my-5">
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        basedatos[0].citasMedicas.map(function(cita){
                            return(
                                <div className="col">
                                    <div className="card h-100 shadow px-2">
                                        <h3>{cita.especialidad}</h3>
                                        <h4>{cita.fecha}</h4>
                                        <h4>{cita.direccion}</h4>

                                    </div>
                                </div>
                            )

                        })
                    }

                </div>
            </section>
        </section>
     
    </>
    )
}