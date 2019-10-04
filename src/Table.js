import React, {Component} from 'react';

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
        </tr>
        </thead>
    )
}

const TableBody = (props) => {
    let rows = props.items.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.job}</td>
            </tr>
        )
    })

    return (
        <tbody>
        {rows}
        </tbody>
    )
}

class Table extends Component {
    render() {
        let {items} = this.props
        return (
            <div>
                <table>
                    <TableHeader/>
                    <TableBody items={items} />
                </table>
            </div>
        );
    }
}

export default Table;