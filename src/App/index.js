import withWidth from '@material-ui/core/withWidth'
import { compose } from 'utils/compose'
import { AppComponent } from './AppComponent'
export const App = compose(withWidth())(AppComponent)
