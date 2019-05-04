import React, { Component } from 'react'
import { propTypes } from './propTypes'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden'
import { LogoWithName } from 'icons/LogoWithName'
import { RedefinePasswordForm } from './RedefinePasswordForm'
import { Typography } from '@material-ui/core'
import { language } from 'language'
export class RedefinePasswordComponent extends Component {
	static propTypes = propTypes
	render() {
		const { classes } = this.props
		return (
			<div className={classes.background}>
				<Grid container className={classes.root}>
					<Hidden xsDown>
						<Grid className={classes.item} item sm={2} md={4} lg={4} />
					</Hidden>
					<Grid className={classes.item} item xs={12} sm={8} md={5} lg={4}>
						<div className={classes.centralizeVerticaly}>
							<div className={classes.logoContainer}>
								<LogoWithName svgStyle={{ height: 50 }} />
							</div>
							<Typography className={classes.titulo} variant="h5">
								{language.auth.redefinirSenha}
							</Typography>
							<Paper className={classes.formPaper}>
								<RedefinePasswordForm />
							</Paper>
						</div>
					</Grid>
					<Hidden xsDown>
						<Grid className={classes.item} item sm={2} md={4} lg={4} />
					</Hidden>
				</Grid>
			</div>
		)
	}
}
