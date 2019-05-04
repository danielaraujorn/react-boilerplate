import React from 'react'
import { propTypes } from './propTypes'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden'
import { LogoWithName } from 'icons/LogoWithName'
import Typography from '@material-ui/core/Typography'
import { RegisterForm } from './RegisterForm'
import { language } from 'language'
import Button from '@material-ui/core/Button'
import { publicRoutes } from 'App/routes'

export const RegisterComponent = ({ classes, history }) => (
	<div className={classes.background}>
		<Grid container className={classes.root}>
			<Hidden smDown>
				<Grid className={classes.item} item md={1} lg={1} />
			</Hidden>
			<Hidden smDown>
				<Grid className={classes.item} item md={5} lg={5}>
					<div className={classes.centralizeVertically}>
						<Typography className={classes.mainText} align="left" variant="h1">
							{language.auth.textoPrincipalRegistro}
						</Typography>
						<Typography
							className={classes.subText}
							align="left"
							variant="subtitle1"
						>
							{language.auth.textoSecundarioRegistro}
						</Typography>
					</div>
				</Grid>
			</Hidden>
			<Hidden xsDown mdUp>
				<Grid className={classes.item} item sm={2} />
			</Hidden>
			<Grid className={classes.item} item xs={12} sm={8} md={5} lg={4}>
				<div className={classes.centralizeVertically}>
					<div className={classes.logoContainer}>
						<LogoWithName svgStyle={{ height: 50 }} />
					</div>
					<Paper className={classes.formPaper}>
						<RegisterForm />
						<Button
							onClick={() => history.push(publicRoutes.routes.login.path)}
							className={classes.secundaryButton}
							fullWidth
						>
							{language.auth.jaCadastrado} {language.clickHere}
						</Button>
					</Paper>
				</div>
			</Grid>
			<Hidden xsDown mdUp>
				<Grid className={classes.item} item sm={2} />
			</Hidden>
			<Hidden smDown>
				<Grid className={classes.item} item xs={false} md={1} lg={2} />
			</Hidden>
		</Grid>
	</div>
)

RegisterComponent.propTypes = propTypes
