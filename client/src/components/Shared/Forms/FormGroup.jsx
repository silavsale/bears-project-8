import React from 'react';
import PropTypes from 'prop-types';
import { WithContext as ReactTags } from 'react-tag-input';
import Checkbox from './Checkbox/Checkbox';
import {
	StyledFormGroup,
	Input,
	Label,
	Textarea,
	StyledDropdown,
	StyledTagInput,
	ErrorText,
	InputDescription,
} from './Form.styled';
import { $dangerRed } from '../../../assets/styledVars';
import defaultTags from '../../../assets/defaultTags';

const FormGroup = props => {
	const {
		placeholder,
		size,
		name,
		title,
		required,
		type,
		onChange,
		tags,
		onTagDelete,
		onTagAdd,
		onTagDrag,
		errors,
		description,
	} = props;
	const width = size < 4 ? `${size * 25 - 2}%` : `100%`;
	let component;
	switch (type) {
		case 'textarea': {
			component = <Textarea {...props} />;
			break;
		}
		case 'dropdown': {
			component = (
				<StyledDropdown
					{...props}
					// calls prop onChange with a regular e.target name and value
					onChange={({ value }) => onChange({ target: { name, value } })}
				/>
			);
			break;
		}
		case 'tagInput': {
			const tagSuggestions = defaultTags.map(tag => ({
				id: tag,
				text: tag,
			}));
			// TODO: Further populate tag suggestions with the current user's custom tags
			component = (
				<StyledTagInput>
					<ReactTags
						tags={tags}
						suggestions={tagSuggestions}
						handleDelete={onTagDelete}
						handleAddition={onTagAdd}
						handleDrag={onTagDrag}
						// what separates tags -- keycodes for enter, comma and tab
						delimiters={[188, 13, 9]}
						autofocus={false}
						minQueryLength={1}
						placeholder={placeholder}
					/>
				</StyledTagInput>
			);
			break;
		}
		case 'checkboxes': {
			component = <Checkbox {...props} />;
			break;
		}
		default: {
			component = <Input type={type} {...props} noValidate />;
		}
	}
	return (
		<StyledFormGroup width={width}>
			<Label htmlFor={name}>
				{title} {required && <span style={{ color: $dangerRed }}>*</span>}
			</Label>
			{description && <InputDescription>{description}</InputDescription>}
			{component}
			<ErrorText>{errors}</ErrorText>
		</StyledFormGroup>
	);
};

FormGroup.propTypes = {
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
	onChange: PropTypes.func,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string,
	size: PropTypes.oneOf([1, 2, 4]),
	required: PropTypes.bool,
	description: PropTypes.string,
};

FormGroup.defaultProps = {
	type: 'text',
	value: '',
	// size of element defaults to fill the screen, i.e. four 'quarters'
	size: 4,
	required: false,
	onChange: () => null,
	description: '',
};

export default FormGroup;
