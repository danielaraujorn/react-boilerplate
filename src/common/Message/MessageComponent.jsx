import React from 'react'
import { Paper, Button, Fade } from '@material-ui/core'
import propTypes from 'prop-types'

import wowFace from 'icons/wowFace.png' // trocar para svg
import errorIcon from 'icons/errorIcon.png' // trocar para svg
import classnames from 'classnames'

export const MessageComponent = props => {
	const {
		textButton,
		classes,
		onButtonClick,
		ImgComponent,
		titleComponent,
		messageComponent,
		error
	} = props

	const DefaultImage = error ? (
		<img src={errorIcon} alt="erro" width={130} />
	) : (
		<img src={wowFace} alt="empty" width={130} />
	)

	return (
		<Fade in>
			<Paper className={classes.paper}>
				<div className={error && classes.messageError}>
					<div className={classes.media}>
						{ImgComponent ? <ImgComponent /> : DefaultImage}
					</div>
					<div className={classes.margin}>{titleComponent}</div>
				</div>
				<div className={classes.margin}>{messageComponent}</div>
				<Button
					onClick={onButtonClick}
					variant="contained"
					color="secondary"
					className={classnames(classes.margin, classes.button)}
				>
					{textButton}
				</Button>
			</Paper>
		</Fade>
	)
}

MessageComponent.propTypes = {
	textButton: propTypes.string,
	onButtonClick: propTypes.func,
	ImgComponent: propTypes.string,
	titleComponent: propTypes.object,
	messageComponent: propTypes.object
}
