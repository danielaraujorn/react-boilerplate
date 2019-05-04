import { ForgotPasswordFormComponent } from './ForgotPasswordFormComponent'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import { compose } from 'utils/compose'
import { style } from './style'

export const ForgotPasswordForm = compose(
	withStyles(style),
	withRouter
)(ForgotPasswordFormComponent)
