import React from 'react'

export const ContainerComponent = props => {
	const { classes, children } = props
	return <div className={classes.container}>{children}</div>
}
