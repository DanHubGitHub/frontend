module.exports = {
  client: {
    service: {
      name: 'bergflix',
      // URL to the GraphQL API
      url: 'https://api.bergflix.de/graphql',
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.ts',
    ],
  },
}