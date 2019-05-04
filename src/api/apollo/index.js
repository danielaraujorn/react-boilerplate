import { ApolloClient } from 'apollo-client'
import { ApolloLink, split } from 'apollo-link'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { WebSocketLink } from 'apollo-link-ws'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'
import { frontLogout } from 'utils/auth'

const hasSubscriptionOperation = ({ query: { definitions } }) =>
	definitions.some(
		({ kind, operation }) =>
			kind === 'OperationDefinition' && operation === 'subscription'
	)

const wsClient = new SubscriptionClient(process.env.REACT_APP_WSHOST, {
	reconnect: true
})

const errorLink = onError(({ networkError, graphQLErrors }) => {
	if (graphQLErrors) {
		graphQLErrors.forEach(({ message, extensions, locations, path }) => {
			if (extensions.code === 'UNAUTHENTICATED') {
				frontLogout()
			}
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
			)
		})
	}
	if (networkError) console.log(`[Network error]: ${networkError}`)
})
const splitLink = split(
	hasSubscriptionOperation,
	new WebSocketLink(wsClient),
	createHttpLink({
		uri: process.env.REACT_APP_HOST,
		fetchOptions: {
			credentials:
				process.env.NODE_ENV === 'production' ? 'same-origin' : 'include'
		}
	})
)

const link = ApolloLink.from([errorLink, splitLink])

const cache = new InMemoryCache({
	dataIdFromObject: object => {
		switch (object.__typename) {
			default:
				return object.id || defaultDataIdFromObject(object) // fall back to default handling
		}
	}
})

export const client = new ApolloClient({
	connectToDevTools: process.env.NODE_ENV === 'development',
	link,
	cache
})
