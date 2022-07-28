

const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const {q, nombre, apikey} = req.query;

    res.json({
        msg: 'get API - desde controller',
        q,
        nombre,
        apikey
    });

}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - desde controller',
        nombre,
        edad
    });

}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - desde controller',
        id
    });

}

const usuariosDelete = (req, res = response) => {

    res.json({
        msg: 'delete API - desde controller'
    });

}

const usuariosPatch = (req, res = response) => {

    res.json({
        msg: 'patch API - desde controller'
    });

}


module.exports =  {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}