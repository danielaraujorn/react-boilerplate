import { MessageComponent } from './MessageComponent'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'
export const Message = compose(withStyles(style))(MessageComponent)
