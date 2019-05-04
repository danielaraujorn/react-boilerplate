export const style = theme => ({
	children: {
		minHeight: 'calc( 100vh - 56px);',
		backgroundColor: theme.palette.alternativeBackground,
		width: '100%'
	},
	paperDrawer: {
		backgroundImage: theme.palette.gradientLight(),
		backgroundColor: theme.palette.primary.main
	},
	routeIcon: { margin: 0, color: theme.palette.primary.contrastText },
	routeIconSelected: { color: theme.palette.primary.main },
	routeItemText: { paddingLeft: 8, paddingRight: 8 },
	routeText: {
		fontWeight: 500,
		color: theme.palette.primary.contrastText,
		fontSize: '0.875rem',
		textTransform: 'capitalize'
	},
	routeTextSelected: {
		color: theme.palette.primary.main
	},
	divider: { marginTop: 5, marginBottom: 5 },
	list: { paddingTop: 10, paddingBottom: 10 },
	buttonPadding: {
		paddingLeft: 15,
		paddingRight: 15,
		width: '100%'
	},
	item: {
		marginTop: 3,
		marginBottom: 3,
		paddingTop: 6,
		paddingBottom: 6,
		borderRadius: theme.borderRadius
	},
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 5
	},
	botaoRotaSelecionado: {
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.white
	}
})
