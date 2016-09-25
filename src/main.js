/*
 * The MIT License
 *
 * Copyright 2016 Eli Davis.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var angular = require('angular');

require('angular-material');
require('rx-angular');

var app = angular.module('Juke-Jitsu', ['ngMaterial', 'rx'])
    .config(function($mdThemingProvider) {
        var blacklight = {
           '50'  : '#cc45ee',
           '100' : '#c52dec',
           '200' : '#bf16ea',
           '300' : '#ac13d3',
           '400' : '#9911bb',
           '500' : '#860fa4',
           '600' : '#730d8d',
           '700' : '#600b75',
           '800' : '#4d095e',
           '900' : '#3a0647',
           'A100': '#d25cf0',
           'A200': '#d973f2',
           'A400': '#df8bf4',
           'A700': '#27042f'
        };
        $mdThemingProvider.definePalette('blacklight', blacklight);
        $mdThemingProvider.theme('default')
            .primaryPalette('blacklight')
            .dark();
    });

require('./filters');
require('./services');
require('./directives');

angular.bootstrap(document, ['Juke-Jitsu']);
