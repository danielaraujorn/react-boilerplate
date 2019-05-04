import gql from 'graphql-tag'

export const GET_LISTS = gql`
	query {
		getLists {
			lists {
				id
				name
				updatedAt
			}
			count
		}
	}
`
