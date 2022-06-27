import React, { Component } from 'react'
import { FaAllergies } from 'react-icons/fa'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'chair',
                    name: 'стул'
                },
                {
                    key: 'table',
                    name: 'стол'
                },
                {
                    key: 'cupboard',
                    name: 'шкаф'
                },
                {
                    key: 'bed',
                    name: 'кровать'
                },
                {
                    key: 'armchair',
                    name: 'кресло'
                },
                {
                    key: 'sofa',
                    name: 'диван'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
        <div key={el.key} onClick={() => this.props.chooseCategories(el.key)}>
            {el.name}
        </div>
        ))}
      </div>
    )
  }
}

export default Categories