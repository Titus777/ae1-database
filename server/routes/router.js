const express = require('express')
const route = express.Router()

const services = require('../services/render');

/**
 *  @description Root Route
 *  @method GET /
 */

route.get('/',services.homeRoutes);

/**
 *  @description add_anime
 *  @method GET / add_anime
 */

route.get('/add_anime',services.add_anime)

/**
 *  @description update_anime
 *  @method GET / update_anime
 */

route.get('/update_anime',services.update_anime)

module.exports = route 