import React, { Component } from 'react';
import Cart from './Cart';
import Products from './Products';
import styled, { css } from 'styled-components'

class App extends Component {
	render() {
		return (
			<StyledApp>
				<div className="container-fluid">
					<h2 className="shop">Fruits</h2>
					<Products/>
					<Cart/>
				</div>
			</StyledApp>
		);
	}
}

export default App;

const StyledApp = styled.div`
	.shop {
		background-color: #31c995;
		text-align: center;
		color: white;
		font-weight: 600;
		width: 200px;
		margin: 40px 0 0 30px;
	}
	.products {
		border-top: solid 2px #31c995;
		min-height: 80vh;	
	}
`


