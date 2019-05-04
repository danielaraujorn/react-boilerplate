import React, { useState } from 'react'
import {
	TextField,
	MenuItem,
	Paper,
	InputAdornment,
	Popper,
	ClickAwayListener
} from '@material-ui/core'
import PropTypes from 'prop-types'

export const AutoSuggestComponent = props => {
	const [openSuggests, setOpenSuggests] = useState(false)
	const [anchorEl, setAnchorEl] = useState()
	const {
		classes,
		value,
		fullWidth,
		variant,
		label,
		onChange,
		options,
		optionComponent,
		onSelect,
		className,
		disabled,
		StartAdornment,
		EndAdornment,
		error,
		InputProps,
		inputRef,
		helperText,
		autoFocus
	} = props
	const closeOnEsc = event => event.keyCode === 27 && setOpenSuggests(false)
	const isVisiblePopper =
		!disabled && openSuggests && !!value && options.length > 0
	return (
		<div className={className}>
			<ClickAwayListener onClickAway={() => setOpenSuggests(false)}>
				<>
					<div
						onFocus={() => setOpenSuggests(true)}
						ref={setAnchorEl}
						style={{ width: fullWidth ? '100%' : 'initial' }}
					>
						<TextField
							autoFocus={autoFocus}
							disabled={disabled}
							value={value}
							onChange={onChange}
							label={label}
							fullWidth={fullWidth}
							variant={variant}
							error={error}
							inputRef={inputRef}
							helperText={helperText}
							onKeyDown={closeOnEsc}
							InputProps={{
								...InputProps,
								startAdornment: !!StartAdornment && (
									<InputAdornment position="start">
										<StartAdornment />
									</InputAdornment>
								),
								endAdornment: !!EndAdornment && (
									<InputAdornment position="end">
										<EndAdornment />
									</InputAdornment>
								)
							}}
						/>
					</div>
					<Popper open={isVisiblePopper} container={anchorEl}>
						<Paper
							className={classes.paper}
							style={{
								width: anchorEl ? anchorEl.clientWidth : null
							}}
						>
							{options.map(option => (
								<MenuItem
									key={JSON.stringify(option)}
									onClick={() => {
										onSelect(option)
										setOpenSuggests(false)
									}}
									component="div"
									style={{
										marginTop: 0,
										height: 'inherit'
										// fontWeight: isSelected ? 500 : 400
									}}
								>
									{optionComponent(option)}
								</MenuItem>
							))}
						</Paper>
					</Popper>
				</>
			</ClickAwayListener>
		</div>
	)
}

AutoSuggestComponent.propTypes = {
	options: PropTypes.array,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onSelect: PropTypes.func.isRequired,
	optionComponent: PropTypes.func.isRequired,
	StartAdornment: PropTypes.func,
	EndAdornment: PropTypes.func,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	helperText: PropTypes.string,
	InputProps: PropTypes.object,
	autoFocus: PropTypes.bool,
	inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
}

AutoSuggestComponent.defaultProps = {
	options: [],
	disabled: false
}
