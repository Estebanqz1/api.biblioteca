const errorHandler = (err, req, res, next) => {
    //verifica si tiene un cod de estado definido, sino le establece uno predeterminado
    const statusCode = err.statusCode || 500;

    //objeto de respuesta de error
    const errorResponse = {
        error: {
            message: err.message || "Error interno del servidor",
            code: err.code || "internal_error",
        },
    };

    // envia respuesta de error en formato JSON
    res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;