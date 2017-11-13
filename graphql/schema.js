const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require('graphql')

const talkFields = () => ({
  _id: { type: GraphQLString },
  title: { type: GraphQLString },
  description: { type: GraphQLString },
  duration: { type: GraphQLInt },
  speaker: { type: GraphQLString },
  speaker_occupation: { type: GraphQLString },
  'event': { type: GraphQLString },
  filmed: { type: GraphQLInt },
  published: { type: GraphQLInt },
  url: { type: GraphQLString },
  tags: { type: new GraphQLList(GraphQLString) }
})

const TalkType = new GraphQLObjectType({
  name: 'Talk',
  description: '...',
  fields: talkFields()
})

const queryFields = () => ({
  talks: {
    type: new GraphQLList(TalkType),
    args: talkFields(),
    resolve: (root, args, find) => find(args)
  }
})

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: queryFields()
})

module.exports = new GraphQLSchema({ query: QueryType })
