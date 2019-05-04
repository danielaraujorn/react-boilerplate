import { HomeComponent } from './HomeComponent'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'

export const Home = compose(withStyles(style))(HomeComponent)
