import { GraphqlProvider } from '@teambit/graphql.contexts.graphql-provider';

export const client = (scope: string) => GraphqlProvider.getClient({API_URL: scope, subscriptionUri: ''})

