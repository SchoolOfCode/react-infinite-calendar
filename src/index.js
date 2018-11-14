import React, {Component} from 'react';
import Calendar from './Calendar';
import {withDateSelection} from './Calendar/withDateSelection';

export {default as Calendar} from './Calendar';
export {withDateSelection} from './Calendar/withDateSelection';
export {withKeyboardSupport} from './Calendar/withKeyboardSupport';
export {withMultipleDates, defaultMultipleDateInterpolation} from './Calendar/withMultipleDates';
export {withRange, EVENT_TYPE} from './Calendar/withRange';

/*
 * By default, Calendar is a controlled component.
 * Export a sensible default for minimal setup
 */
export default class DefaultCalendar extends Component {
  static defaultProps = {
    Component: withDateSelection(Calendar),
  };
  render() {
    // eslint-disable-next-line no-unused-vars
    const {Component, ...props} = this.props;

    return (
      <Component
        {...props}
        onSelect={this.props.onSelect}
        selected={this.props.selected}
      />
    );
  }
}
