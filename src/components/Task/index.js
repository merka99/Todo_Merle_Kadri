import React, { Component } from 'react';

// Task component - represents a single todo item
export default class Task extends Component {
    toggleChecked() {
        // Set the checked property to the opposite of its current value
    }

    deleteThisTask() {

    }

    render() {
        const taskClassName = this.props.task.checked ? 'checked' : '';
        return (
            <li className={taskClassName}>
                <button className="delete" onClick={this.deleteThisTask.bind(this)}>
                    &times;
                </button>

                <input
                    type="checkbox"
                    readOnly
                    checked={!!this.props.task.checked}
                    onClick={this.toggleChecked.bind(this)}

                />

                <span className="text">
                    {this.props.task.text}
                 </span>
                <span>
                <strong className="taskUser">{this.props.task.username} </strong>
            </span>
            </li>
        );
    }
}