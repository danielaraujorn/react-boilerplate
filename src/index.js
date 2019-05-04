import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { LastLocationProvider } from 'react-router-last-location'
import { theme } from './utils/theme'
import { history } from './utils/history'
import { SnackbarProvider } from 'notistack'
import { App } from './App'
import * as serviceWorker from './serviceWorker'
import { language } from 'language'
import { ApolloProvider } from 'react-apollo'
import { client } from './api/apollo'

if (process.env.NODE_ENV === 'production') serviceWorker.register()

ReactDOM.render(
	<ApolloProvider client={client}>
		<Router history={history}>
			<MuiThemeProvider theme={theme}>
				<LastLocationProvider>
					<SnackbarProvider
						action={[
							<Button
								style={{ color: 'white', borderColor: 'white' }}
								variant="outlined"
								size="small"
							>
								{language.ok}
							</Button>
						]}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'center'
						}}
						preventDuplicate
						dense
						maxSnack={3}
					>
						<App />
					</SnackbarProvider>
				</LastLocationProvider>
			</MuiThemeProvider>
		</Router>
	</ApolloProvider>,
	document.getElementById('root')
)
