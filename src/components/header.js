import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
	width:100%;
	height:50px;
	background:rgb(109,109,109);
	color:white;
	text-align:center;
`

class Header extends Component {
	render(){
		return(
			<HeaderContainer>
			<h1 style = {{margin:'0'}}>Welcome to my learning react site</h1>
			</HeaderContainer>
			)
	}
}

export default Header