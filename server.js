var express = require("express");
var app = express();
var path = require("path");
var driver = require("node-ssh");

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});
app.get('/sitemap', function(req, res) {
    res.sendFile(path.join(__dirname + '/sitemap.html'));
});
app.listen(3000);
console.log("Running at Port 3000");

import { ssh } from 'node-ssh';

function copyFile() {
    alert('entroooo');
    //var fs = require('fs');
    //var driver, ssh;
    var ssh;
    //driver = require('node-ssh');
    ssh = new driver();
    alert('paso el require');
    ssh.connect({
            host: '10.101.0.78',
            username: 'root',
            privateKey: ''
        })
        .then(function() {
            ////////////////////////////////////////////
            //// origen, destino solo un documento//////
            ////////////////////////////////////////////
            var fileOrigen = 'DatosReinicio.txt';
            var rutaDestino = '/home/root/DatosReinicio.txt';
            ssh.putFile(fileOrigen, rutaDestino).then(function() {
                console.log("Archivo cargado en el servidor remoto");
            }, function(error) {
                console.log("Problema: " + error);
            });
        });
    alert('finnnnnn');
}