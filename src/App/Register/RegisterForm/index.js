import { RegisterFormComponent } from './RegisterFormComponent'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import { compose } from 'utils/compose'
import { withSnackbar } from 'notistack'
import { style } from './style'

export const RegisterForm = compose(
	withStyles(style),
	withSnackbar,
	withRouter
)(RegisterFormComponent)
