import React, { Component } from 'react';
import styled, { css } from 'styled-components'

class Item extends Component {
	render() {
		let item = this.props.item;
		let index = this.props.index;
		return (
			<StyledItem key={index} className="col-md-3 col-lg-4">
				<div className="item-box">
					<img src={item.imgSrc} alt={item.itemName}/> 
					<p>{item.itemName.charAt(0).toUpperCase() + item.itemName.slice(1) }</p>
					<div className="price"> 
						<i className="fa fa-usd" aria-hidden="true"><span> {item.price} </span></i>
						
						{
							item.quantityRemaining >0 ? 
								<span> {item.quantityRemaining} In Stock</span>	
								:
								<span> Out of Stock</span>	
						}
					</div>

					<button onClick={item.quantityRemaining > 0 ? () => this.props.addToCart(item) : () => alert("Out of stock!")}>
						Add To Cart
					</button>
				</div>
			</StyledItem>
		);
	}
}
export default Item;

const StyledItem = styled.div`
	text-align: center;
	.item-box {
		margin: 15px 0;
		padding: 10px;
		min-height: 250px;
		box-shadow: 0 1px 3px #31c995, 0 1px 2px #31c995;
		transition: all 0.3s cubic-bezier(.25,.8,.25,1);
	}
	p {
		max-width: 150px;
		text-align: center;
		margin: 10px auto;
		overflow: hidden;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	img {
		height: 150px;
		max-width: 100%;	
	}
	i {
		font-size: 16px;
		margin: 0 5px 0 0;
	}
	i span {
		font-weight: 600;
	}
	.item-box:hover {
		box-shadow: 0 14px 28px #31c995, 0 10px 10px #31c995;
	}
	.cart img {
		height: 50px;
		text-align: right;
	}
	button {
		background-color: #31c995;
		width: 70%;
		border-radius: 5px;
		padding: 5px;
		margin: 10px auto;
		cursor: pointer;
	}
	button:hover {
		background-color: #00df93;		
	}
`;