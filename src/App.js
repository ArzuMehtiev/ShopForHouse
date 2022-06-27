import React from 'react';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Items from './components/Items';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул',
          img: 'chair.jpeg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'chair',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.jpeg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'table',
          price: '149.99'
        },
        {
          id: 3,
          title: 'Шкаф',
          img: 'cupboard.jpeg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'cupboard',
          price: '239.99'
        },
        {
          id: 4,
          title: 'Кресло',
          img: 'armchair.jpeg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'armchair',
          price: '69.99'
        },
        {
          id: 5,
          title: 'Диван',
          img: 'sofa.jpeg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'sofa',
          price: '169.99'
        },
        {
          id: 6,
          title: 'Кровать',
          img: 'bed.jpeg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'bed',
          price: '679.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategories = this.chooseCategories.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  

  render () {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategories={this.chooseCategories}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && 
        <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem}/>}
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }
  chooseCategories(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({currentItems: this.state.items.filter(el => el.category === category)})
  }
  addToOrder(item) {
    let isInOrders = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) {isInOrders = true}
    })
    if (!isInOrders) {
      this.setState({orders: [...this.state.orders, item]})
    } 
  }
  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

}

export default App;
