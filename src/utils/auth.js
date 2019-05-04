import { client } from 'api/apollo'
import gql from 'graphql-tag'
import { history } from 'utils/history'
const LOGIN_VARIABLE_NAME = 'isLogged'
// caso a constante mude, deverá ser mudado a query

export const IS_LOGGED_IN = gql`
	query IsUserLogged {
		isLogged @client
	}
`

export const isLoggedFromStorage = () =>
	!!localStorage.getItem(LOGIN_VARIABLE_NAME)

client.writeData({
	data: {
		[LOGIN_VARIABLE_NAME]: isLoggedFromStorage()
	}
})

export const isLogged = () => {
	const data = client.readQuery({ query: IS_LOGGED_IN })
	return data[LOGIN_VARIABLE_NAME]
}

export const frontLogin = lastLocation => {
	localStorage.setItem(LOGIN_VARIABLE_NAME, 'true')
	client.writeData({
		data: {
			[LOGIN_VARIABLE_NAME]: true
		}
	})
	if (!!lastLocation && !!lastLocation.key) history.goBack()
	else history.push('/')
}

export const frontLogout = () => {
	localStorage.removeItem(LOGIN_VARIABLE_NAME)
	client.writeData({
		data: {
			[LOGIN_VARIABLE_NAME]: false
		}
	})
	history.push('/')
}
