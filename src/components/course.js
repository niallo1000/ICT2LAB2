import React , { Component } from 'react';
import Module from './module'

export default class Course extends Component {
    render() {
        let list = this.props.modules.map(
            (module, index) => <Module key={index} description={module} />
        );
        return (
            <div>
                <h1>{`${this.props.title} modules table`} </h1>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>No lectures</th>
                        <th>No practicals</th>
                    </tr>
                    </thead>
                    <tbody >
                    {list}
                    </tbody >
                </table>
            </div>
        );
    }

}