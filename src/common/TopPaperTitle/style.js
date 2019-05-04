export const style = theme => ({
	paper: {
		marginBottom: -1.5 * theme.borderRadius,
		paddingTop: 4,
		paddingBottom: 1.5 * theme.borderRadius + 4
	},
	pageTitle: {
		textAlign: 'center',
		textTransform: 'capitalize'
	},
	primaryTitle: {
		color: theme.palette.primary.contrastText
	},
	secondaryTitle: {
		color: theme.palette.secondary.contrastText
	},
	primaryPaper: {
		backgroundColor: theme.palette.primary.main
	},
	secondaryPaper: {
		backgroundColor: theme.palette.secondary.main
	}
})
