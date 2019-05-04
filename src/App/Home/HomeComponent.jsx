import React from 'react'
import { propTypes } from './propTypes'
import classnames from 'classnames'
import {
	Tooltip,
	Fab,
	Typography,
	LinearProgress,
	Paper
} from '@material-ui/core'
import { Message } from 'common/Message'
import { language } from 'language'
import { Query } from 'react-apollo'
import Add from '@material-ui/icons/Add'
import { GET_LISTS } from './gqls'
import { Container } from 'common/Container'
import { HeaderContent } from 'common/HeaderContent'

const ErrorTitle = ({ classes, code }) => (
	<Typography className={classes.centerText}>{code}</Typography>
)
const ErrorMessage = ({ classes, message }) => (
	<Typography color="error" className={classes.itemDescriptionText}>
		{message}
	</Typography>
)

const EmptyListMessage = ({ classes }) => (
	<Typography className={classes.itemDescriptionText}>
		{language.list.emptyList}
	</Typography>
)

const EmptyListTitle = ({ classes }) => (
	<Typography className={classnames(classes.pageTitle, classes.centerText)}>
		{language.ops}
	</Typography>
)

const Loading = ({ classes }) => (
	<LinearProgress className={classes.linearProgress} color="secondary" />
)

export const HomeComponent = props => {
	const { classes } = props
	return (
		<Query
			query={GET_LISTS}
			notifyOnNetworkStatusChange
			fetchPolicy="cache-and-network"
		>
			{({ data, error, loading }) => {
				if (error)
					return (
						<Container>
							<Message
								error
								titleComponent={
									<ErrorTitle classes={classes} code={error.code} />
								}
								messageComponent={
									<ErrorMessage classes={classes} message={error.message} />
								}
								textButton={language.reload}
								onButtonClick={() => window.location.reload()}
							/>
						</Container>
					)
				if (loading || !data.getLists) return <Loading classes={classes} />
				const { lists } = data.getLists

				return (
					<>
						<div className={classes.container}>
							{lists &&
								(lists.length ? (
									<Container>
										<HeaderContent
											text={language.list.plural + ':'}
											RightContent={
												<Tooltip
													placement="left"
													title={language.list.new}
													aria-label={language.list.new}
												>
													<Fab
														size="small"
														color="secondary"
														className={classes.createButton}
														// onClick={sendToNewList}
													>
														<Add />
													</Fab>
												</Tooltip>
											}
										/>
										{lists.map(list => (
											<Paper key={list.id} className={classes.paper}>
												<Typography>{list.name}</Typography>
											</Paper>
										))}
									</Container>
								) : (
									<Container>
										<Message
											titleComponent={<EmptyListTitle classes={classes} />}
											messageComponent={<EmptyListMessage classes={classes} />}
											textButton={language.list.new}
											onButtonClick={() => console.log('clicou')}
										/>
									</Container>
								))}
						</div>
					</>
				)
			}}
		</Query>
	)
}

HomeComponent.propTypes = propTypes
