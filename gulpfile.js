"use strict";

var Vue = require('vue');
var elixir = require('laravel-elixir');

elixir(function(mix){
    mix.browserify('index.js', 'public/js/app.js','src');
});

