import { AutoSuggestComponent } from './AutoSuggestComponent'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'
export const AutoSuggest = compose(withStyles(style))(AutoSuggestComponent)
