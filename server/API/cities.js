var express = require('express');
var Cities = require('../models/cities');

var router = express.Router();

router.get('/', function(err, res){
    Cities.retrieveAll(function(err, cities){
        if (err)
            return res.json(err);
        return res.json(citites)
    })
})