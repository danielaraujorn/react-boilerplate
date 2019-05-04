export const style = theme => ({
	container: {
		minHeight: '100vh',
		display: 'flex'
	},
	children: {
		maxHeight: '100vh',
		minHeight: 'calc( 100vh - 56px);',
		overflowY: 'auto',
		backgroundColor: theme.palette.alternativeBackground,
		width: '100%'
	},
	logo: {
		textAlign: 'center',
		height: 30
	},
	menu: {
		paddingTop: 15,
		backgroundImage: theme.palette.gradientLight(),
		display: 'flex',
		flexDirection: 'column'
	},
	menuExpanded: {
		transitionDuration: 100,
		width: 200
	},
	menuNotExpanded: {
		transitionDuration: 100,
		width: 46
	},
	divider: { marginTop: 3, marginBottom: 3 },
	rotas: {
		marginTop: 30,
		display: 'flex',
		flexDirection: 'column'
	},
	botao: {
		margin: 0,
		minWidth: 36
	},
	botaoContraido: {
		padding: 6
	},
	botaoLabel: { justifyContent: 'end' },
	buttonPadding: {
		paddingLeft: 15,
		paddingRight: 15,
		width: '100%'
	},
	buttonPaddingNotExpanded: {
		paddingLeft: 5,
		paddingRight: 5,
		width: '100%'
	},
	collapseButton: {
		marginTop: 'auto',
		textTransform: 'capitalize',
		color: theme.palette.primary.contrastText,
		borderRadius: 0
	},
	routeText: { paddingLeft: 8, paddingRight: 8 },
	botaoRota: {
		marginTop: 3,
		marginBottom: 3,
		textTransform: 'capitalize',
		color: theme.palette.primary.contrastText
	},
	botaoRotaSelecionado: {
		transitionDuration: 100,
		'&:hover': {
			transitionDuration: 100,
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.primary.contrastText
		},
		marginTop: 3,
		marginBottom: 3,
		textTransform: 'capitalize',
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.white
	},
	nameRota: {
		marginLeft: 5
	}
})
