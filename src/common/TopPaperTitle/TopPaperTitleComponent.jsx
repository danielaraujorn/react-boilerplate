import React from 'react'
import { Typography, Paper } from '@material-ui/core'
import propTypes from 'prop-types'
import classnames from 'classnames'

export const TopPaperTitleComponent = props => {
	const { classes, title, color, shadow } = props
	return (
		<>
			<Paper
				className={classnames(
					classes.paper,
					color === 'primary' ? classes.primaryPaper : classes.secondaryPaper
				)}
				style={{ boxShadow: !shadow && 'none' }}
			>
				<Typography
					className={classnames(
						classes.pageTitle,
						color === 'primary' ? classes.primaryTitle : classes.secondaryTitle
					)}
				>
					{title}
				</Typography>
			</Paper>
		</>
	)
}

TopPaperTitleComponent.propTypes = {
	title: propTypes.string.isRequired,
	color: propTypes.oneOf(['primary', 'secondary']),
	shadow: propTypes.bool
}
TopPaperTitleComponent.defaultProps = {
	color: 'primary',
	shadow: true
}
