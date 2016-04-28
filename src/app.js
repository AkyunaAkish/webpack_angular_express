import angular from 'angular'
import 'angular-ui-router'
import './style/main.scss'

import HomeController from './pages/home/home.js'
import AboutController from './pages/about/about.js'
import Router from './router.js'

angular.module('app', ['ui.router'])
  .controller( 'HomeController', HomeController )
  .controller( 'AboutController', AboutController )
  .config( Router )
