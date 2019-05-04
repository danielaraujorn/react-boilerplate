import { HeaderContentComponent } from './HeaderContentComponent'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'
export const HeaderContent = compose(withStyles(style))(HeaderContentComponent)
