const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'O nome do crédito é obrigatório, por favor informe o nome'] },
    value: { type: Number, min: 0, required: [true, 'O valor do crédito é obrigatório, por favor informe o valor'] }
})

const debtSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Nome do débito é obrigatório, por favor informe o nome!!'] },
    value: { type: Number, min: 0, required: [true, 'O valor do débito é obrigatório, por favor informe o valor!']},
    status: { type: String, required: false, uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'O nome é obrigatório, por favor informe o nome do erro!!']},
    month: { type: Number, min: 1, max: 12, required: [true, 'O mês é obrigatório, por favor informe o número do mês!!'] },
    year: { type: Number, min: 1970, max: 2100, require: [true, 'O ano é obrigatório, por favor informe o ano do débito']},
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)

