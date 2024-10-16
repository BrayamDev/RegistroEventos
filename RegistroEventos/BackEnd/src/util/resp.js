exports.success = function (req, resp, status, msj, data = null) {
    resp.status(status).send({
        done: true,
        status: status,
        msg: msj,
        body: req.body,
        data: data // Devolver el array completo en la respuesta
    });
};

exports.error = function (req, resp, status, msj) {
    resp.status(status).send({
        error: true,
        status: status,
        msg: msj,
        body: req.body
    });
};
