import { RedefinePasswordComponent } from './RedefinePasswordComponent'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'

export const RedefinePassword = compose(withStyles(style))(
	RedefinePasswordComponent
)
