import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        Page: {
          merge(existing = {}, incoming, { mergeObjects }) {
            return mergeObjects(existing, incoming);
          },
        },
      },
    },
    Page: {
      fields: {
        media: {
          merge(existing = [], incoming) {
            return [...existing, ...incoming];
          },
        },
      },
    },
    CharacterImage: {
      merge(existing, incoming) {
        return { ...existing, ...incoming };
      },
    },
  },
});

export const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache,
});
