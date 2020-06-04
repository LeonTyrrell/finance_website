const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    //
    const billingCyclesService = require('../api/billingCycle/billingCycleService')
    billingCyclesService.register(router, '/billingCycles')

    const billingSummaryService = require('../api/billingSumary/billingSumaryService')
    router.route('/billingSumary').get(billingSummaryService.getSumary)
}