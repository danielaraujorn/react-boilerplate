import gql from 'graphql-tag'

export const LOGIN_USER = gql`
	mutation loginUser(
		$emailOrUsername: String!
		$password: String!
		$rememberMe: Boolean!
	) {
		loginUser(
			emailOrUsername: $emailOrUsername
			password: $password
			rememberMe: $rememberMe
		) {
			id
		}
	}
`
