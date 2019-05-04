export const style = theme => ({
	container: {
		padding: 4,
		backgroundColor: theme.palette.palternativeBackground,
		minHeight: '100vh',
		maxWidth: '100%'
	},
	paper: {
		padding: 15,
		marginBottom: 5
	},
	linearProgress: {
		marginBottom: -4
	},
	createButton: {
		boxShadow: 'none'
	},
	pageTitle: {
		fontSize: 18,
		fontWeight: 500,
		color: theme.palette.primary.main,
		textTransform: 'capitalize'
	},
	itemDescriptionText: {
		fontWeight: 500,
		fontSize: 14,
		flex: 1,
		wordBreak: 'break-all',
		textAlign: 'justify',
		opacity: 0.9
	},
	centerText: {
		textAlign: 'center'
	}
})
