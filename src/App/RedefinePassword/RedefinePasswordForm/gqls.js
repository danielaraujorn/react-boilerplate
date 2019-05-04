import gql from 'graphql-tag'

export const REDEFINE_PASSWORD = gql`
	mutation redefinePassword($password: String!, $confirmPassword: String!) {
		redefinePassword(password: $password, confirmPassword: $confirmPassword) {
			id
		}
	}
`
