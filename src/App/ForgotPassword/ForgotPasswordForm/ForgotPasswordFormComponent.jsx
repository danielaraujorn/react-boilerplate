import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { language } from 'language'
import { propTypes } from './propTypes'
import Typography from '@material-ui/core/Typography'
// import { publicRoutes } from 'routes'
import { isEmail } from 'utils/isEmail'
import { Mutation } from 'react-apollo'
import { FORGOT_PASSWORD } from './gqls'
import { LoadingButton } from 'common/LoadingButton'

export class ForgotPasswordFormComponent extends Component {
	static propTypes = propTypes

	state = {
		email: '',
		inputErrors: {
			email: ''
		}
	}

	validateInputEmail = value => {
		if (value === '') return language.auth.erroEmailVazio
		if (!isEmail(value)) return language.auth.erroEmailInvalido
		return ''
	}

	handleOnChange = variable => event => {
		const { value } = event.target
		const inputErrors = this.state.inputErrors
		const inputData = { [variable]: value }

		if (!inputErrors[variable]) return this.setState(inputData)

		this.setState({
			...inputData,
			inputErrors: { ...inputErrors, [variable]: '' }
		})
	}

	handleSubmit = postMutation => event => {
		event.preventDefault()

		const { email } = this.state

		const inputErrors = {
			email: this.validateInputEmail(email)
		}

		this.setState({ inputErrors })
		if (!Object.values(inputErrors).some(item => item !== '')) {
			postMutation()
		}
	}

	render() {
		const { classes } = this.props
		const { email, inputErrors } = this.state

		return (
			<Mutation
				mutation={FORGOT_PASSWORD}
				variables={{ email }}
				onCompleted={() => {}} 
			>
				{(postMutation, { loading, error }) => (
					<form onSubmit={this.handleSubmit(postMutation)}>
						<div className={classes.margin}>
							<TextField
								required
								autoFocus
								name="email"
								className={classes.margin}
								variant="outlined"
								fullWidth
								label={language.auth.email}
								value={email}
								error={!!inputErrors.email}
								helperText={inputErrors.email}
								onChange={this.handleOnChange('email')}
							/>
						</div>
						{error && (
							<Typography color="error">
								{language.auth.erroAoSubmeterResgate}
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
							{language.auth.resgatarSenha}
						</LoadingButton>
					</form>
				)}
			</Mutation>
		)
	}
}
