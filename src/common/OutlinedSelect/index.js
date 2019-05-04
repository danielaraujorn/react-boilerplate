import { OutlinedSelectComponent } from './OutlinedSelectComponent'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'
export const OutlinedSelect = compose(withStyles(style))(
	OutlinedSelectComponent
)
