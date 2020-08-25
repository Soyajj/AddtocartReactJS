import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';

export class MainPage extends Component {
    constructor(props){
        super(props);
        this.state={
            items : [
                {
                    id : uuid(),
                    title : 'Item1',
                    quantity : 0,
                    inCart : false,
                    message : `Add to Cart`
                },
                {
                    id : uuid(),
                    title : 'Item3',
                    quantity : 0,
                    inCart : false,
                    message : `Add to Cart`
                },
                {
                    id : uuid(),
                    title : 'Item4',
                    quantity : 0,
                    inCart : false,
                    message : `Add to Cart`
                },
                {
                    id : uuid(),
                    title : 'Item5',
                    quantity : 0,
                    inCart : false,
                    message : `Add to Cart`
                }
            ],
            cart : 0 , 
        }
    }

    decrement = (index) =>{  
      const items = [].concat(this.state.items);
      if(items[index].quantity >1){
          items[index].quantity -= 1
      }
      else{
          items[index].quantity = 0
          items[index].inCart = false
      }
      this.setState({
          items : items
      })        
    }

    increment = (index) =>{
        const items = [].concat(this.state.items);
        items[index].quantity += 1
        items[index].inCart = true
        this.setState({
            items : items
        })    
    }

    addToCart = (index) => {
       const items = [].concat(this.state.items)
       if(items[index].inCart === true){
            items[index].inCart = !items[index].inCart
            items[index].message = `Remove from Cart`
            this.setState({
                cart : this.state.cart + 1,
                items : items
            })
       }
       else if(items[index].inCart === false){
           items[index].inCart = !items[index].inCart
           items[index].quantity = 0
           items[index].message = `Add to Cart`
           this.setState({
               cart : this.state.cart -1
           })
       }
    }
    display = () =>{
        console.log(this.state.items)

    }

    render() {
        return (
            <div className = "mainpage"> 
                <button 
                    className = "btn btn-primary"
                    onClick = {this.display}>
                        Cart <span className = "badge badge-light"> {this.state.cart}</span>
                </button>
                <div>
                {this.state.items.map((item, index) =>(
                    <div key = {item.id}>
                        {item.title} -
                        <button 
                            className = "btn btn-secondary"
                            disabled = {item.message === 'Remove from Cart' ? true : false}
                            onClick ={() =>this.decrement(index)}>-
                        </button>
                        <span 
                            className = "badge badge-light" 
                            style ={{width : '2vw'}}>{item.quantity}
                        </span>
                        <button 
                            className = "btn btn-secondary"
                            disabled = {item.message === 'Remove from Cart' ? true : false}
                            onClick = {() =>this.increment(index)}>+
                        </button>
                        <button 
                            className ={item.message === 'Add to Cart' ? 'btn btn-success' : 'btn btn-danger'} 
                            disabled = {item.quantity > 0 ? false : true} 
                            onClick = {()=> this.addToCart(index)}>{item.message}
                        </button>
                    </div>
                ))} 
                </div>
            </div>
        )
    }
}

export default MainPage
