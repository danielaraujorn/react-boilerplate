import { TopPaperTitleComponent } from './TopPaperTitleComponent'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'
export const TopPaperTitle = compose(withStyles(style))(TopPaperTitleComponent)
