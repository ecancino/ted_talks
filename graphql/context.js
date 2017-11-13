// const DataLoader = require('dataloader')
const { Talk } = require('./../db/')

// const createLoader = fetcher => new DataLoader(keys => Promise.all(keys.map(fetcher)))

const queryTalks = query => Talk.find(query, (err, talk) => talk)

module.exports = queryTalks
