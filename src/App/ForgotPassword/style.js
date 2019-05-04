export const style = theme => ({
	background: {
		backgroundImage: theme.palette.gradient(),
		minHeight: '100vh',
		width: '100%'
	},
	titulo: {
		textAlign: 'center',
		color: theme.palette.primary.contrastText,
		fontWeight: 200,
		fontSize: 20,
		marginBottom: 5
	},
	descricao: {
		marginBottom: 10
	},
	root: { maxWidth: '100%', flexGrow: 1 },
	centralizeVerticaly: {
		padding: 10,
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
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
