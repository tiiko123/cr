import {useEffect, useState } from 'react';


import MovieService from '../services/MovieService';



const Movie = (props) => {
     

    const initialMovieState={
        id:null,
        title: '',
        cover:'',
        synopsis:'',
        year:0,
    };



    const [currentMovie, setCurrentMovie] = useState(initialMovieState);
    const [message, setMessage] = useState('');

    const getMovie = id =>{

        MovieService.getById(id).then(response=>{
            setCurrentMovie(response.data);
        }).catch(err =>{
            alert('Ocurrio un error');
            console.log(err);

        });
    }

    useEffect(()=>{
        getMovie(props.match.params.id)
    }, [props.match.params.id] );



    const handleInputChange = event =>{
        const {name, value } = event.target;

        setCurrentMovie({...currentMovie, [name]:value});
    }


    const updateMove = () =>{

    
        MovieService.update(currentMovie.id,currentMovie)
        .then(response =>{
       
            setMessage('La película fue actuailizada correctamente')
        }).catch(err =>{
            setMessage('error actuailizada ')

            console.log(err);

        });

    }

    const deleteMovie = () =>{
  
        if(!window.confirm('seguro que desea eliminar la pelicula?')){
            return;
        }
        MovieService.remove(currentMovie.id).then(response =>{

            props.history.push('/movies');
        }).catch(err =>{
            setMessage('error al eliminar ')

            console.log(err);

        });
    }

    return(

        <div className="submit-form"> 
            {!currentMovie ? (
                <div>
                    <h4>Por favor selecciona una pelicula</h4>
                </div>
            ):  (
                <div>
                    <div className ="form-group"> 
                        <label>Titulo</label>
                        <input
                            type ="text"
                            className="form-control"
                            id="title"
                            required
                            defaultValue={currentMovie.title}
                            onChange = {handleInputChange}
                            name="title"
                        
                        />

                        </div>
                        <div className ="form-group"> 
                        <table>Portada</table>
                        <input
                            type ="text"
                            className="form-control"
                            id="cover"
                            required
                            defaultValue={currentMovie.cover}
                            onChange = {handleInputChange}
                            name="cover"
                        
                        />

                        </div>
                        <div className ="form-group"> 
                        <table>Sinopsis</table>
                        <input
                            type ="text"
                            className="form-control"
                            id="synopsis"
                            required
                            defaultValue={currentMovie.synopsis}
                            onChange = {handleInputChange}
                            name="synopsis"
                        
                        />

                        </div>
                        <div className ="form-group"> 
                        <table>Año</table>
                        <input
                            type ="number"
                            className="form-control"
                            id="year"
                            required
                            defaultValue={currentMovie.year}
                            onChange = {handleInputChange}
                            name="year"
                        
                        />

                        </div>

                        <br/>
                        <button onClick={updateMove} className="btn btn-success">
                            Actuailizar Pelicula
                        </button>

                        <button onClick={deleteMovie} className="btn btn-danger">
                            Eliminar Pelicula
                        </button>
                        <div>
                            <p>
                                {message}
                            </p>
                            </div>

                </div>


            )}



        </div>


    )

};

export default Movie;