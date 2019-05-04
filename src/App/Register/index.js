import { RegisterComponent } from './RegisterComponent'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'
import { withRouter } from 'react-router'

export const Register = compose(
	withStyles(style),
	withRouter
)(RegisterComponent)
