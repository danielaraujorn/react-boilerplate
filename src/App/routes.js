import { InsertEmoticon } from '@material-ui/icons'
import { Login } from './Login'
import { Register } from './Register'
import { ForgotPassword } from './ForgotPassword'
import { RedefinePassword } from './RedefinePassword'
import { Home } from './Home'
import { language } from 'language'

export const adminRoutes = {
	defaultRedirect: language.list.listRoute,
	routes: {
		listas: {
			showInMenu: true,
			name: language.list.plural,
			icon: InsertEmoticon,
			path: language.list.listRoute,
			regexPath: language.list.regex,
			component: Home
		}
	}
}
export const userRoutes = {
	defaultRedirect: language.home.selectedRoute,
	routes: {
		home: {
			showInMenu: true,
			name: language.home.singular,
			icon: InsertEmoticon,
			path: language.home.selectedRoute,
			regexPath: language.home.regex,
			component: Home
		}
	}
}
export const publicRoutes = {
	defaultRedirect: language.auth.loginRoute,
	routes: {
		login: {
			path: language.auth.loginRoute,
			component: Login
		},
		register: {
			path: language.auth.registerRoute,
			component: Register
		},
		forgotPassword: {
			path: language.auth.forgotPasswordRoute,
			component: ForgotPassword
		},
		redefinePassword: {
			path: language.auth.redefinePasswordRoute,
			component: RedefinePassword
		}
	}
}
