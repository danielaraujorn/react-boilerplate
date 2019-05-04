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
	title: {
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
	},
	passwordRecoveryContainer: {
		textAlign: 'center'
	},
	passwordRecovery: {
		marginTop: 5,
		marginBottom: 5
	},
	secundaryButton: {
		textTransform: 'none'
	},
	margin: {
		marginTop: 8,
		marginBottom: 8
	}
})
