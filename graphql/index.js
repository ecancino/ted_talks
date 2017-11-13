const graphql = require('express-graphql')

const schema = require('./schema')
const context = require('./context')

module.exports = graphql(() => ({ schema, context, graphiql: true }))
