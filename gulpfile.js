"use strict";

var Vue = require('vue');
var elixir = require('laravel-elixir');

elixir(function(mix){
    mix.browserify('example.js', 'example/js/app.js','src');
});

