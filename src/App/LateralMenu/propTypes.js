import PropTypes from 'prop-types'

export const propTypes = {
	defaultExpanded: PropTypes.bool,
	classes: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	routesGroups: PropTypes.array
}
