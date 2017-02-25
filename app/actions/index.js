import * as BookActions from './books'
import * as NavigationActions from './navigation'

export const ActionCreators = {
  ...BookActions,
  ...NavigationActions,
}
