export const style = theme => ({
	background: {
		backgroundImage: theme.palette.gradient(),
		minHeight: '100vh',
		width: '100%'
	},
	root: { maxWidth: '100%', flexGrow: 1 },
	centralizeVerticaly: {
		padding: 10,
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	titulo: {
		textAlign: 'center',
		color: theme.palette.primary.contrastText,
		fontWeight: 200,
		fontSize: 20,
		marginBottom: 5,
		textTransform: 'capitalize'
	},
	logoContainer: {
		textAlign: 'center',
		zIndex: 1,
		marginBottom: 15
	},
	formPaper: {
		zIndex: 1,
		padding: 15
	}
})
