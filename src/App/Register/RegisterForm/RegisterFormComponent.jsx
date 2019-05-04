import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { language } from 'language'
import { propTypes } from './propTypes'
import Typography from '@material-ui/core/Typography'
import { isEmail } from 'utils/isEmail'
import { Mutation } from 'react-apollo'
import { CREATE_USER } from './gqls'
import { LoadingButton } from 'common/LoadingButton'
import { PasswordField } from 'common/PasswordField'
import { publicRoutes } from 'App/routes'

export class RegisterFormComponent extends Component {
	static propTypes = propTypes

	state = {
		name: '',
		username: '',
		email: '',
		password: '',
		inputErrors: {
			name: '',
			username: '',
			email: '',
			password: ''
		}
	}

	validateInputUserName = value => {
		if (value.length > 16) return language.auth.erroUserLongo
		if (!/^[\w]+$/g.test(value)) return language.auth.erroUserInvalido
		return ''
	}

	validateInputEmail = value => {
		if (!isEmail(value)) return language.auth.erroEmailInvalido
		if (value.length > 254) return language.auth.erroEmailLongo
		return ''
	}

	validateInputPassword = value => {
		if (value.length < 8) return language.auth.erroSenhaCurta
		if (!(/\d/.test(value) && /[a-z]/i.test(value))) {
			return language.auth.erroSenhaInsegura
		}
		if (value.length > 128) return language.auth.erroSenhaLonga
		return ''
	}

	validateInputLength = (value, max = 160) => {
		return value.length > max ? language.service.erroCampoMuitoGrande : ''
	}

	handleSubmit = postMutation => event => {
		event.preventDefault()
		if (!Object.values(this.state.inputErrors).some(item => item !== '')) {
			const { name, username, email, password } = this.state
			postMutation({ variables: { name, username, email, password } })
		}
	}

	handleOnChange = (variable, validate) => event => {
		const { value } = event.target
		const inputErrors = {
			...this.state.inputErrors,
			[variable]: validate ? validate(value) : ''
		}
		const inputData = { [variable]: value }
		this.setState({
			...inputData,
			inputErrors
		})
	}

	render() {
		const { classes, history, enqueueSnackbar } = this.props
		const { name, username, email, password, inputErrors } = this.state
		return (
			<Mutation
				mutation={CREATE_USER}
				onCompleted={() => {
					history.push(publicRoutes.routes.login.path)
					enqueueSnackbar(language.auth.sucessoRegistro, {
						variant: 'success'
					})
				}}
				onError={() => { }}
			>
				{(postMutation, { loading, error }) => (
					<form onSubmit={this.handleSubmit(postMutation)}>
						<TextField
							required
							name="name"
							value={name}
							autoFocus
							className={classes.margin}
							variant="outlined"
							fullWidth
							label={language.name}
							error={!!inputErrors.name}
							helperText={inputErrors.name}
							onChange={this.handleOnChange('name', this.validateInputLength)}
						/>
						<TextField
							required
							name="username"
							value={username}
							className={classes.margin}
							variant="outlined"
							fullWidth
							label={language.auth.username}
							error={!!inputErrors.username}
							helperText={inputErrors.username}
							onChange={this.handleOnChange('username', this.validateInputUserName)}
						/>
						<TextField
							required
							name="email"
							value={email}
							className={classes.margin}
							variant="outlined"
							fullWidth
							label={language.auth.email}
							error={!!inputErrors.email}
							helperText={inputErrors.email}
							placeholder={language.auth.emailExemplo}
							onChange={this.handleOnChange('email', this.validateInputEmail)}
						/>
						<PasswordField
							buttonString={language.auth.showPassword}
							required
							name="password"
							value={password}
							type="password"
							className={classes.margin}
							variant="outlined"
							fullWidth
							label={language.auth.password}
							error={!!inputErrors.password}
							helperText={inputErrors.password}
							onChange={this.handleOnChange('password', this.validateInputPassword)}
						/>
						<div className={classes.margin}>
							<Typography className={classes.margin}>
								{language.auth.aceitarTermos}
							</Typography>
						</div>
						<div className={classes.margin}>
							<LoadingButton
								loading={loading}
								className={classes.actionButton}
								color="secondary"
								variant="contained"
								fullWidth
								type="submit"
							>
								{language.auth.aceitarERegistrar}
							</LoadingButton>
							{error && (
								<Typography color="error">
									{language.auth.erroAoSubmeterRegistro}
								</Typography>
							)}
						</div>
					</form>
				)}
			</Mutation>
		)
	}
}
