import { RedefinePasswordFormComponent } from './RedefinePasswordFormComponent'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import { compose } from 'utils/compose'
import { style } from './style'

export const RedefinePasswordForm = compose(
	withStyles(style),
	withRouter
)(RedefinePasswordFormComponent)
