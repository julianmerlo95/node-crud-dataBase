
let controllerDefault = {
    getRootPath: function(req, res){
        return res.send('Ruta raiz de la app');
    },

    getRootDefault: function(req, res){
        return res.send('Cannot get found route');
    }
}

module.exports = controllerDefault;