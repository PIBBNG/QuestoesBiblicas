import React from 'react';


class SelectQuestion extends React.Component {
    render () {
        const teste = ""
        return(
            <div key={this.props.index} className={"list-group-item list-group-item-action "+teste} active="true">
                {this.props.question.id}
            </div>
        )
    }
}

class Navigation extends React.Component {
    render(){
    
        const questions = [
            {
                "id": 0,
                "winner": 1,
                "active": true
            },
            {
                "id": 1,
                "winner": 2,
                "active": false
            },
            {
                "id": 2,
                "winner": 1,
                "active": false
            },
            {
                "id": 3,
                "winner": 1,
                "active": false
            },
            {
                "id": 4,
                "winner": 2,
                "active": false
            },
            {
                "id": 5,
                "winner": 2,
                "active": false
            },
            {
                "id": 6,
                "winner": 2,
                "active": false
            },
            {
                "id": 7,
                "winner": 3,
                "active": false
            },
            {
                "id": 8,
                "winner": 3,
                "active": false
            },
            {
                "id": 9,
                "winner": 3,
                "active": false
            },
            {
                "id": 10,
                "winner": 1,
                "active": false,
            },
            {
                "id": 11,
                "winner": 3,
                "active": false
            },
            {
                "id": 12,
                "winner": 3,
                "active": false
            },
            {
                "id": 13,
                "winner": 2,
                "active": false
            },
            {
                "id": 14,
                "winner": 2,
                "active": false
            },
            {
                "id": 15,
                "winner": 1,
                "active": false
            },
            {
                "id": 16,
                "winner": 0,
                "active": false
            },
            {
                "id": 17,
                "winner": 0,
                "active": false
            },
            {
                "id": 18,
                "winner": 0,
                "active": false
            },
            {
                "id": 19,
                "winner": 0,
                "active": false
            },
            {
                "id": 20,
                "winner": 0,
                "active": false
            },
            {
                "id": 21,
                "winner": 0,
                "active": false
            },
            {
                "id": 22,
                "winner": 0,
                "active": false
            },
            {
                "id": 23,
                "winner": 0,
                "active": false
            },
            {
                "id": 24,
                "winner": 0,
                "active": false
            },
        ];

        return(
            <div className="list-group list-group-horizontal-sm" id="list-tab">
                {questions.map((question, index) =>
                    <SelectQuestion
                        question={question}
                        index={index}
                    />
                )}
            </div>
        )
    }
}

export default Navigation