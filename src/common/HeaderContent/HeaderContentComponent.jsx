import React from 'react'
import { Typography, Divider, LinearProgress } from '@material-ui/core'
import propTypes from 'prop-types'
export const HeaderContentComponent = props => {
	const { classes, text, RightContent, loading } = props
	return (
		<>
			<div className={classes.paper}>
				<Typography className={classes.pageTitle}>{text}</Typography>
				{!!RightContent && RightContent}
			</div>
			{loading ? (
				<LinearProgress color="secondary" className={classes.divider} />
			) : (
				<Divider className={classes.divider} />
			)}
		</>
	)
}

HeaderContentComponent.propTypes = {
	text: propTypes.string.isRequired,
	RightContent: propTypes.object,
	loading: propTypes.bool
}
HeaderContentComponent.defaultProps = {
	loading: false
}
