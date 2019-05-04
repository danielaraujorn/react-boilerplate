import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { language } from 'language'
import { propTypes } from './propTypes'
import { PasswordField } from 'common/PasswordField'
import { Mutation } from 'react-apollo'
import { LOGIN_USER } from './gqls'
import { LoadingButton } from 'common/LoadingButton'
import Typography from '@material-ui/core/Typography'
import { isEmail } from 'utils/isEmail'
import { frontLogin } from 'utils/auth'

export class LoginFormComponent extends Component {
	static propTypes = propTypes

	state = {
		emailOrUsername: '',
		password: '',
		rememberMe: false,
		inputErrors: {
			emailOrUsername: '',
			password: ''
		}
	}

	validateInputEmail = value => {
		return value.includes('@') && !isEmail(value)
			? language.auth.erroEmailInvalido
			: ''
	}

	handleSubmit = postMutation => event => {
		const { emailOrUsername, password, rememberMe } = this.state
		const inputErrors = {
			emailOrUsername: this.validateInputEmail(emailOrUsername)
		}

		this.setState({ inputErrors })

		if (!Object.values(inputErrors).some(item => item)) {
			postMutation({ variables: { emailOrUsername, password, rememberMe } })
		}

		event.preventDefault()
	}

	handleOnChange = variable => event => {
		const value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value

		this.setState({
			[variable]: value,
			inputErrors: { [variable]: '' }
		})
	}

	render() {
		const { classes, lastLocation } = this.props
		const { emailOrUsername, password, rememberMe, inputErrors } = this.state
		return (
			<Mutation
				mutation={LOGIN_USER}
				onCompleted={() => {
					frontLogin(lastLocation)
				}}
				onError={() => {}}
			>
				{(postMutation, { loading, error }) => (
					<form
						onSubmit={this.handleSubmit(postMutation)}
						className={classes.margin}
					>
						<TextField
							required
							autoComplete="true"
							autoFocus
							name="email"
							className={classes.margin}
							variant="outlined"
							fullWidth
							label={language.auth.emailOuUsername}
							error={!!inputErrors.emailOrUsername}
							helperText={inputErrors.emailOrUsername}
							onChange={this.handleOnChange('emailOrUsername')}
							value={emailOrUsername}
						/>
						<PasswordField
							buttonString={language.auth.showPassword}
							required
							autoComplete="true"
							className={classes.margin}
							name="current-password"
							variant="outlined"
							fullWidth
							label={language.auth.password}
							error={!!inputErrors.password}
							helperText={inputErrors.password}
							onChange={this.handleOnChange('password')}
							value={password}
							warnCapsLock
						/>
						<FormControlLabel
							control={
								<Checkbox
									name="remember-me"
									checked={rememberMe}
									value="remember-me"
									onChange={this.handleOnChange('rememberMe')}
									color="secondary"
								/>
							}
							label={language.auth.rememberMe}
						/>

						{error && (
							<Typography color="error">
								{language.auth.erroAoSubmeterLogin}
							</Typography>
						)}
						<LoadingButton
							loading={loading}
							className={classes.actionButton}
							color="secondary"
							variant="contained"
							fullWidth
							type="submit"
						>
							{language.auth.entrar}
						</LoadingButton>
					</form>
				)}
			</Mutation>
		)
	}
}
