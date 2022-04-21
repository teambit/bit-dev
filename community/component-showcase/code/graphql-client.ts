import { GraphqlProvider } from '@teambit/graphql.contexts.graphql-provider';

export const client = (scope: string) => {
    return GraphqlProvider.getClient({API_URL: scope, subscriptionUri: ''})
}

