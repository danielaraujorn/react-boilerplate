import { ForgotPasswordComponent } from './ForgotPasswordComponent'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'

export const ForgotPassword = compose(withStyles(style))(
	ForgotPasswordComponent
)
