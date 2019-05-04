import { MobileMenuComponent } from './MobileMenuComponent'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'
export const MobileMenu = compose(
	withStyles(style),
	withRouter
)(MobileMenuComponent)
