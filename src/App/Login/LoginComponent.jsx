import React from 'react'
import { propTypes } from './propTypes'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden'
import { LogoWithName } from 'icons/LogoWithName'
import { LoginForm } from './LoginForm'
import classnames from 'classnames'
import { language } from 'language'
import Typography from '@material-ui/core/Typography'
import { publicRoutes } from 'App/routes'
import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/ButtonBase'

export const LoginComponent = ({ classes, history }) => (
	<div className={classes.background}>
		<Grid container className={classes.root}>
			<Hidden xsDown>
				<Grid item sm={2} md={4} lg={4} />
			</Hidden>
			<Grid className={classes.item} item xs={12} sm={8} md={5} lg={4}>
				<div className={classes.centralizeVertically}>
					<div className={classes.logoContainer}>
						<LogoWithName svgStyle={{ height: 50 }} />
					</div>
					<Typography className={classes.title} variant="h5">
						{language.auth.entrar}
					</Typography>
					<Paper className={classes.formPaper}>
						<LoginForm />
						<div
							className={classnames(
								classes.passwordRecoveryContainer,
								classes.margin
							)}
						>
							<ButtonBase
								onClick={() =>
									history.push(publicRoutes.routes.forgotPassword.path)
								}
								disableRipple
								className={classes.passwordRecovery}
							>
								{language.auth.esqueceuSenha}
							</ButtonBase>
						</div>
						<Button
							onClick={() => history.push(publicRoutes.routes.register.path)}
							className={classes.secundaryButton}
							fullWidth
						>
							{language.auth.naoCadastrado} {language.clickHere}
						</Button>
					</Paper>
				</div>
			</Grid>
			<Hidden xsDown>
				<Grid item sm={2} md={4} lg={4} />
			</Hidden>
		</Grid>
	</div>
)

LoginComponent.propTypes = propTypes
