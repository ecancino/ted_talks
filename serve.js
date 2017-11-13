const app = require('express')()
const graphql = require('./graphql')

app.use('/graphql', graphql)
app.listen(4000)
