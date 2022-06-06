import { gql } from '@apollo/client';

export const GET_SCOPE = gql`
  query GET_SCOPE($id: String!) {
    getScopeAPIs(id: $id) {
      graphql
    }
  }
`;
