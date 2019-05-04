import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { propTypes } from './propTypes'
import { defaultProps } from './defaultProps'
import { LogoWithName } from 'icons/LogoWithName'
import classnames from 'classnames'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

export class MobileMenuComponent extends Component {
	static propTypes = propTypes
	static defaultProps = defaultProps
	state = {
		auth: false,
		anchorEl: null,
		openDialog: false
	}

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget })
	}

	handleClose = () => {
		this.setState({ anchorEl: null })
	}
	toggleDialog = openDialog => () => this.setState({ openDialog })
	render() {
		const { classes, routesGroups, location, history, children } = this.props
		const { auth, anchorEl, openDialog } = this.state
		const open = Boolean(anchorEl)

		const sideList = (
			<List className={classes.list}>
				{routesGroups.map((routes, index) => (
					<div key={index}>
						{index > 0 && <Divider className={classes.divider} />}

						{routes.map(route => {
							const isSelected =
								!!route.regexPath && route.regexPath.test(location.pathname)
							return (
								<div key={route.path} className={classes.buttonPadding}>
									<ListItem
										onClick={() => history.push(route.path)}
										button
										className={classnames(
											classes.item,
											isSelected && classes.botaoRotaSelecionado
										)}
									>
										<ListItemIcon
											className={classnames(
												classes.routeIcon,
												isSelected && classes.routeIconSelected
											)}
										>
											<route.icon />
										</ListItemIcon>
										<ListItemText
											className={classes.routeItemText}
											primary={
												<span
													className={classnames(
														classes.routeText,
														isSelected && classes.routeTextSelected
													)}
												>
													{route.name}
												</span>
											}
										/>
									</ListItem>
								</div>
							)
						})}
					</div>
				))}{' '}
			</List>
		)
		return (
			<div className={classes.root}>
				<SwipeableDrawer
					classes={{
						paper: classes.paperDrawer
					}}
					open={this.state.openDialog}
					onClose={this.toggleDialog(!openDialog)}
					onOpen={this.toggleDialog(!openDialog)}
				>
					<div
						tabIndex={0}
						role="button"
						onClick={this.toggleDialog(!openDialog)}
						onKeyDown={this.toggleDialog(!openDialog)}
					>
						{sideList}
					</div>
				</SwipeableDrawer>
				<AppBar position="sticky">
					<Toolbar>
						<IconButton
							onClick={this.toggleDialog(true)}
							className={classes.menuButton}
							color="inherit"
							aria-label="Menu"
						>
							<MenuIcon />
						</IconButton>
						<LogoWithName svgStyle={{ height: 30 }} />
						{auth && (
							<div>
								<IconButton
									aria-owns={open ? 'menu-appbar' : undefined}
									aria-haspopup="true"
									onClick={this.handleMenu}
									color="inherit"
								>
									<AccountCircle />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right'
									}}
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right'
									}}
									open={open}
									onClose={this.handleClose}
								>
									<MenuItem onClick={this.handleClose}>Profile</MenuItem>
									<MenuItem onClick={this.handleClose}>My account</MenuItem>
								</Menu>
							</div>
						)}
					</Toolbar>
				</AppBar>
				<div className={classes.children}>{children}</div>
			</div>
		)
	}
}
