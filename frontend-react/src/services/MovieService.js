import http from '../http-common';

const getAll = () =>{


    return http.get('movies');;

}

const getById= (id) => {


    return http.get(`movies/${id}`)


}

const create = (data) => {


    return http.post(`movies`, data)


}

const update = (id, data) => {


    return http.put(`movies/${id}`, data)


}

const remove = (id) =>{

    return http.delete(`movies/${id}`);

}

export default{
    getAll,
    getById,
    create,
    update,
    remove
};