import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { propTypes } from './propTypes'
import { publicRoutes, adminRoutes, userRoutes } from './routes'
import { LateralMenu } from './LateralMenu'
import { MobileMenu } from './MobileMenu'
import { isLogged } from 'utils/auth'

const MenuSwitch = width => {
	switch (width) {
		case 'xs':
			return MobileMenu
		default:
			return LateralMenu
	}
}

export const AppComponent = props => {
	const publicRoutesInstancia = publicRoutes
	const defaultExpanded = props.width !== 'sm'
	const Menu = MenuSwitch(props.width)
	if (isLogged()) {
		const menuProps = {
			routesGroups: [
				Object.values(adminRoutes.routes).filter(
					({ showInMenu }) => !!showInMenu
				),
				Object.values(userRoutes.routes).filter(
					({ showInMenu }) => !!showInMenu
				)
			],
			defaultExpanded
		}
		return (
			<Switch>
				<Menu {...menuProps}>
					{Object.values(adminRoutes.routes).map(route => (
						<Route exact {...route} key={route.path} />
					))}
					{Object.values(userRoutes.routes).map(route => (
						<Route exact {...route} key={route.path} />
					))}
				</Menu>
				<Redirect to={adminRoutes.defaultRedirect} />
				<Redirect to={userRoutes.defaultRedirect} />
			</Switch>
		)
	}
	return (
		<Switch>
			{Object.values(publicRoutesInstancia.routes).map(route => (
				<Route exact {...route} key={route.path} />
			))}
			<Redirect to={publicRoutesInstancia.defaultRedirect} />
		</Switch>
	)
}

AppComponent.propTypes = propTypes
