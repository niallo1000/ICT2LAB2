import React , { Component } from 'react';

export default class Module extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.description.name}</td>
                <td>{this.props.description.noLectures}</td>
                <td>{this.props.description.noPracticals}</td>
            </tr>
        );
    }

}