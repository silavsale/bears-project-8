/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addHabit } from '../../actions/habitActions';

import PageContainer from '../Shared/PageContainer/PageContainer';
import { Header, Footer } from './HabitForm.styled';
import Views from './Views/Views';
import { LeftButtons, RightButtons } from './Buttons/Buttons';
import ProgressCircles from '../Shared/ProgressCircles/ProgressCircles';

export class _HabitForm extends Component {
	state = {
		step: 0,

		name: '',
		tags: [],
		description: '',
		times: '',
		period: '',
		reminderEvery: '',
		reminderTypes: {
			email: false,
			inApp: false,
			push: false,
		},
		difficulty: '',
		habitType: '',
		habitStart: '',
	};

	static propTypes = {
		addHabit: PropTypes.func.isRequired,
	};

	handleChange = ({ target }) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	};

	handleSubmit = () => {
		const { steps, ...habit } = this.state;
		habit.tags = habit.tags.map(t => t.text);

		return this.props.addHabit(habit, this.props.history);
	};

	setStep = step => {
		this.setState({ step });
	};

	setReminderType = type => {
		this.setState(prevState => ({
			reminderTypes: { ...prevState.reminderTypes, [type]: !prevState.reminderTypes[type] },
		}));
	};

	// Tag input functions
	handleTagDelete = i => {
		this.setState(prevState => ({
			tags: prevState.tags.filter((tag, index) => index !== i),
		}));
	};

	handleTagAdd = tag => {
		this.setState(prevState => ({ tags: [...prevState.tags, tag] }));
	};

	handleTagDrag = (tag, currPos, newPos) => {
		const { tags } = this.state;
		const newTags = [...tags];

		newTags.splice(currPos, 1);
		newTags.splice(newPos, 0, tag);

		this.setState({ tags: newTags });
	};

	render() {
		const { step } = this.state;
		const { history } = this.props;

		return (
			<PageContainer
				breadCrumbs={{
					crumbHistory: [{ name: 'Dashboard', link: '/dashboard' }],
					current: 'Habit Form',
				}}
				history={history}
			>
				<Header>Add a New Habit</Header>
				<Views
					{...this.state}
					onChange={this.handleChange}
					setReminderType={this.setReminderType}
					onTagDelete={this.handleTagDelete}
					onTagAdd={this.handleTagAdd}
					onTagDrag={this.handleTagDrag}
				/>
				<Footer>
					<LeftButtons step={step} setStep={this.setStep} />
					<ProgressCircles step={step} totalSteps={3} setStep={this.setStep} />
					<RightButtons
						step={step}
						totalSteps={3}
						setStep={this.setStep}
						onSubmit={this.handleSubmit}
					/>
				</Footer>
			</PageContainer>
		);
	}
}

export default withRouter(
	connect(
		null,
		{ addHabit }
	)(_HabitForm)
);
