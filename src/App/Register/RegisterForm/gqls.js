import gql from 'graphql-tag'

export const CREATE_USER = gql`
	mutation createUser(
		$name: String!
		$username: String!
		$email: String!
		$password: String!
	) {
		createUser(
			name: $name
			username: $username
			email: $email
			password: $password
		) {
			id
		}
	}
`
