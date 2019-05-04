export const style = theme => ({
	background: {
		backgroundImage: theme.palette.gradient(),
		minHeight: '100vh',
		width: '100%'
	},
	root: { maxWidth: '100%', flexGrow: 1 },
	centralizeVertically: {
		padding: 10,
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	logoContainer: {
		zIndex: 1,
		marginBottom: 10,
		textAlign: 'center'
	},
	formPaper: {
		zIndex: 1,
		padding: 15
	},
	mainText: {
		zIndex: 1,
		fontSize: '4.5em',
		fontWeight: 500,
		letterSpacing: 1,
		color: theme.palette.primary.contrastText
	},
	subText: {
		zIndex: 1,
		fontSize: '1.2em',
		fontWeight: 300,
		letterSpacing: 1,
		color: theme.palette.primary.contrastText
	},
	stylePolygon: {
		zIndex: 0,
		position: 'fixed',
		minHeight: '100vh'
	},
	leftPolygon: {
		marginLeft: -120,
		transform: 'skew(16deg)',
		width: 260,
		backgroundImage: theme.palette.gradientWhite()
	},
	rightPolygon: {
		right: 0,
		marginRight: -70,
		transform: 'skew(-10deg)',
		width: 330,
		backgroundImage: theme.palette.gradientWhite()
	},
	secundaryButton: {
		textTransform: 'none'
	}
})
