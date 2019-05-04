import { LateralMenuComponent } from './LateralMenuComponent'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'
export const LateralMenu = compose(
	withStyles(style),
	withRouter
)(LateralMenuComponent)
