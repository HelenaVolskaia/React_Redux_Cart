import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, addToCart, emptyCart, removeItemFromCart } from '../actions/cartActions';
import styled from 'styled-components';

class Cart extends Component {
	render() {
		console.log("Cart: ", this.props.cart)
		let total = 0;
		let totalQuantity = 0;
		const cartList = this.props.cart.map(( item, index ) => {
				total = (total + item.price*item.quantity);
				totalQuantity = totalQuantity +item.quantity;
				return (
					<div key={index} className="item-in-cart row">
						<div className="pull-left ">
							<img src={item.imgSrc} alt={item.itemName} />
							<div className="quantity">@<i className="fa fa-usd" aria-hidden="true"></i>{ item.price + item.itemName + " = " } <i className="fa fa-usd" aria-hidden="true"></i>{ item.price*item.quantity }</div>
						</div>
						<div className="toggle col-sm-2">
							<span className="remove" onClick={ () => this.props.dispatch(removeFromCart(item))}>-</span>
							<span>{item.quantity}</span>
							<span className="add" onClick={() => this.props.dispatch(addToCart(item))}>+</span>
						</div>
						<div>
							<h6 onClick={ () => this.props.dispatch(removeItemFromCart(item))} className="pull-right">Delete</h6>
						</div><br/>
					</div>
				)
		});
		return (
			<StyledCart className= "products col-md-3">
				<div>
					<h2> Shopping Cart </h2>
					<h3> {totalQuantity && totalQuantity}</h3>
						{this.props.cart.length > 0 ? cartList : <h3 className="no-item-in-cart">Nothing in your cart, start shopping</h3>}
					<div className="total">
						<h3><span className="pull-left"> Total:</span> <i className="fa fa-usd" aria-hidden="true"></i>  { parseFloat(total.toFixed(2)) }</h3>
					</div>
						<div className="btn btn-back" onClick={ () => this.props.dispatch(emptyCart())} >
							Confirm Purchase
						</div>
				</div>
			</StyledCart>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		cart: state.cart
	};
}

export default connect(mapStateToProps)(Cart);

const StyledCart = styled.div`
	background-color: #31c995;
	 img {
		height: 50px;
		text-align: right;
	  }
	  .cart {
		text-align: right;
	  }
	  .cart .button {
		  padding: 5px 10px;
		  margin: 15px 10px;
		}
		h2, h5 {
			color: white;
			text-align: center;
		}
	   h3 {
			text-align: center;
			margin: 10px;
			padding-bottom: 10px;
			color: white;
	  }
	  .item-in-cart {
			text-align: center;
			background: rgba(255, 255, 255, 0.5);
			background: white;
			margin-top: 5px;
		}
		.quantity {
			width: 160px;
			overflow-x: scroll;
			white-space: nowrap;
		}
		.no.item-in-cart {
			padding: 30px;
		}
	  .item-in-cart i {
			margin-left: 5px;
		}
		.total {
			border-top: solid 2px white;
			width: 80%;
			float: right;
			margin-top: 20px;
		}
		.toggle {
			font-size: 20px;
			position: relative;
			top: 20px;
		}
		.remove, .add {
			background-color: #31c995;
			padding: 2px 10px;
			margin: 5px;
		}
	  .btn-back {
			padding: 10px;
			color: grey;
			margin: 30px auto;
			width: 100%;
			border:none;
			background: rgba(255, 255, 255, 0.5);
			color: black
			outline: none;
		}
		@media (max-width: 700px) {
			// background: palevioletred;
		}
`