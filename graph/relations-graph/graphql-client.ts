import { ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import 'subscriptions-transport-ws';
import fetch from 'cross-fetch';

// TODO - export these functions separately in bit and use here
const API_URL = 'https://symphony.bit.dev/graphql';

/**
 * create a link which splits routes data depending on type of operation.
 * @param httpLink http link for apollo graphql
 * @param wsLink web socket link for apollo graphql
 */
function createSplitLink(httpLink: HttpLink, wsLink: WebSocketLink) {
  console.log('httpLink', httpLink);
  return split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpLink
  );
}

function createLink(uri: string, { subscriptionUri }: { subscriptionUri?: string } = {}) {
  const httpLink = new HttpLink({ credentials: 'include', uri: uri, fetch: fetch });
  console.log('uri', uri, httpLink);
  const subsLink = subscriptionUri
    ? new WebSocketLink({
        uri: subscriptionUri,
        options: { reconnect: true },
      })
    : undefined;

  const hybridLink = subsLink ? createSplitLink(httpLink, subsLink) : httpLink;

  return hybridLink;
}

export const client = new ApolloClient({
  link: createLink(API_URL, {}),
  cache: new InMemoryCache(),
});

export default client;
