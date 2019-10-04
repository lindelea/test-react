import React from "react";
import Table from "./Table";

class App extends React.Component {
    state = {
        data: [
            {
                name: "dfgdsfgsdfg",
                job: "fffff"
            },
            {
                name: "aaaaaa",
                job: "bbbbb"
            }
        ]
    }

    addItem = () => {
        this.setState(old => ({
            data: old.data.concat({
                name: "gsdfasdfasdfdf",
                job: "dsgfsdfdsaf"
            })
        }))
    }

    render() {
        let {data} = this.state
        return (
            <div>
                <Table items={data}></Table>
                <button onClick={() => this.addItem()}>Add</button>
            </div>
        )
    }
}

export default App