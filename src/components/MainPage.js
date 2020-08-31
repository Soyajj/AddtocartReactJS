import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';
import shoe from  './shoe.png'

export class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: uuid(),
                    title: 'Item1',
                    quantity: 0,
                    inCart: false,
                    message: `Add to Cart`
                },
                {
                    id: uuid(),
                    title: 'Item2',
                    quantity: 0,
                    inCart: false,
                    message: `Add to Cart`
                },
                {
                    id: uuid(),
                    title: 'Item3',
                    quantity: 0,
                    inCart: false,
                    message: `Add to Cart`
                },
                {
                    id: uuid(),
                    title: 'Item4',
                    quantity: 0,
                    inCart: false,
                    message: `Add to Cart`
                }
            ],
            cart: 0 , 
        }
    }

    decrement = (index) => {  
      const items = [...this.state.items];
      if(items[index].quantity >1){
          items[index].quantity -= 1
      }
      else{
          items[index].quantity = 0
          items[index].inCart = false
      }
      this.setState({
          items: items
      })        
    }

    increment = (index) => {
      const items = [...this.state.items];
      items[index].quantity += 1
        items[index].inCart = true
        this.setState({
            items: items
        })    
    }

    addToCart = (index) => {
      const items = [...this.state.items];
      if(items[index].inCart === true){
            items[index].inCart = !items[index].inCart
            items[index].message = `Remove from Cart`
            this.setState({
                cart: this.state.cart + 1,
                items: items
            })
       }
       else if(items[index].inCart === false){
           items[index].inCart = !items[index].inCart
           items[index].quantity = 0
           items[index].message = `Add to Cart`
           this.setState({
               cart: this.state.cart -1
           })
       }
    }
    display = () => {
        console.log(this.state.items)
    }

    render() {
        return (
            <div>
                <center>
                <button 
                    className="btn btn-primary"
                    onClick={this.display}
                    id="cart">
                    Cart <span className="badge badge-light">{this.state.cart}</span>
                </button>
                </center>
                <div className="mainpage"> 
                    {this.state.items.map((item, index) => (
                        <div key={item.id} className="item">
                            <img src={shoe} alt="shoe" className="shoe"/>
                            <span className="itemTitle">{item.title}</span>
                            <div className = "indc">
                            <button 
                                className="btn btn-secondary"
                                id="decrease"
                                disabled={item.message === 'Remove from Cart' ? true : false}
                                onClick={() => this.decrement(index)}>-
                            </button>
                            <span className = "itemQuantity">{item.quantity}
                            </span>
                            <button 
                                id="increase"
                                className="btn btn-secondary"
                                disabled={item.message === 'Remove from Cart' ? true : false}
                                onClick={() => this.increment(index)}>+
                            </button>
                            </div>
                            <button
                                className={item.message === 'Add to Cart' ? 'btn btn-success' : 'btn btn-danger'} 
                                disabled={item.quantity > 0 ? false : true} 
                                onClick={() => this.addToCart(index)}>{item.message}
                            </button>
                        </div>
                    ))} 
                </div>
            </div>
        )
    }
}

export default MainPage
