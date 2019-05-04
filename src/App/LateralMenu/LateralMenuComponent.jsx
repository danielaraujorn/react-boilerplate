import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import LeftIcon from '@material-ui/icons/ArrowLeft'
import RightIcon from '@material-ui/icons/ArrowRight'
import { LogoWithName } from 'icons/LogoWithName'
import { Logo } from 'icons/Logo'
import classnames from 'classnames'
import { propTypes } from './propTypes'
import { defaultProps } from './defaultProps'
import { language } from 'language'
export class LateralMenuComponent extends Component {
	static propTypes = propTypes
	static defaultProps = defaultProps
	state = { expanded: this.props.defaultExpanded }
	changeExpand = expanded => () => this.setState({ expanded })
	render() {
		const { expanded } = this.state
		const { classes, location, routesGroups, history, children } = this.props
		return (
			<div className={classes.container}>
				<div
					className={classnames(
						classes.menu,
						expanded ? classes.menuExpanded : classes.menuNotExpanded
					)}
				>
					<div className={classes.logo}>
						{expanded ? (
							<LogoWithName svgStyle={{ height: 30 }} />
						) : (
							<Logo svgStyle={{ height: 30 }} />
						)}
					</div>
					<div className={classes.rotas}>
						{routesGroups.map((routes, index) => (
							<div key={index}>
								{index > 0 && <Divider className={classes.divider} />}
								{routes.map(route => {
									return (
										<div
											key={route.path}
											className={
												expanded
													? classes.buttonPadding
													: classes.buttonPaddingNotExpanded
											}
										>
											<Button
												fullWidth
												onClick={() => history.push(route.path)}
												classes={{
													root: classnames(
														classes.botao,
														!expanded && classes.botaoContraido,
														!!route.regexPath &&
															route.regexPath.test(location.pathname)
															? classes.botaoRotaSelecionado
															: classes.botaoRota
													),
													label: classes.botaoLabel
												}}
											>
												<route.icon />
												{expanded && (
													<span className={classes.routeText}>
														{route.name}
													</span>
												)}
											</Button>
										</div>
									)
								})}
							</div>
						))}
					</div>
					<Button
						onClick={this.changeExpand(!expanded)}
						fullWidth
						className={classnames(classes.botao, classes.collapseButton)}
					>
						{expanded ? (
							<>
								<LeftIcon />
								<span className={classes.routeText}>{language.menu.hide}</span>
							</>
						) : (
							<RightIcon />
						)}
					</Button>
				</div>
				<div className={classes.children}>{children}</div>
			</div>
		)
	}
}
