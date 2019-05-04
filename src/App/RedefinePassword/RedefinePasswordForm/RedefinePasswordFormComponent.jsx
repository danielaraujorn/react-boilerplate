import React, { Component } from 'react'
import { language } from 'language'
import { propTypes } from './propTypes'
import Typography from '@material-ui/core/Typography'
// import { publicRoutes } from 'routes'
import { PasswordField } from 'common/PasswordField'
import { Mutation } from 'react-apollo'
import { REDEFINE_PASSWORD } from './gqls'
import { LoadingButton } from 'common/LoadingButton'

export class RedefinePasswordFormComponent extends Component {
	static propTypes = propTypes

	state = {
		password: '',
		confirmPassword: '',
		inputErrors: { password: '', confirmPassword: '' }
	}
	validateInputPassword = value => {
		if (value === '') return language.auth.erroSenhaVazio
		if (value.length < 8) return language.auth.erroSenhaCurta
		if (!(/\d/.test(value) && /[a-z]/i.test(value))) {
			return language.auth.erroSenhaInsegura
		}
		if (value.length > 128) return language.auth.erroSenhaLonga
		return ''
	}
	validateConfirmPassword = (password, confirmPassword) => {
		if (password && confirmPassword !== password)
			return language.auth.erroConfirmacaoSenhaDiferente
		return ''
	}
	handleSubmit = postMutation => event => {
		event.preventDefault()

		const { password, confirmPassword } = this.state

		const inputErrors = {
			confirmPassword: this.validateConfirmPassword(password, confirmPassword),
			password: this.validateInputPassword(password)
		}

		this.setState({ inputErrors })
		if (!Object.values(inputErrors).some(item => item !== '')) {
			postMutation() // envia para o servidor
		}
	}
	handleOnChange = variable => event => {
		const { value } = event.target
		const { inputErrors } = this.state
		const inputData = { [variable]: value }

		if (!inputErrors[variable]) return this.setState(inputData)

		this.setState({
			...inputData,
			inputErrors: { ...inputErrors, [variable]: '' }
		})
	}
	render() {
		const { classes } = this.props
		const { password, confirmPassword, inputErrors } = this.state
		return (
			<Mutation
				mutation={REDEFINE_PASSWORD}
				variables={{ password, confirmPassword }}
				onCompleted={() => console.log('registrado')} // depois do submit
			>
				{(postMutation, { loading, error }) => (
					<form onSubmit={this.handleSubmit(postMutation)}>
						<div className={classes.margin}>
							<PasswordField
								buttonString={language.auth.showPassword}
								required
								className={classes.margin}
								name="password"
								variant="outlined"
								fullWidth
								label={language.auth.password}
								value={password}
								error={!!inputErrors.password}
								helperText={inputErrors.password}
								onChange={this.handleOnChange('password')}
							/>
							<PasswordField
								buttonString={language.auth.showPassword}
								required
								className={classes.margin}
								name="passwordConfirmation"
								variant="outlined"
								fullWidth
								label={language.auth.confirmarSenha}
								value={confirmPassword}
								error={!!inputErrors.confirmPassword}
								helperText={inputErrors.confirmPassword}
								onChange={this.handleOnChange('confirmPassword')}
							/>
							{error && (
								<Typography color="error">
									{language.auth.erroAoSubmeterRedefinicao}
								</Typography>
							)}
						</div>
						<LoadingButton
							loading={loading}
							className={classes.actionButton}
							color="secondary"
							variant="contained"
							fullWidth
							type="submit"
						>
							{language.auth.redefinirSenha}
						</LoadingButton>
					</form>
				)}
			</Mutation>
		)
	}
}
