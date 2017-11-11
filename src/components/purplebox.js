import React, { Component } from 'react'
import styled from 'styled-components'
import request from 'superagent'

const PurpleBox = styled.div`
	height:auto;
	width:500px;
	background:purple;
	color:green;
	padding: 20px;
	text-align:center;
	margin:auto;
`
const Button = styled.button `
	background: ${({disabled}) => disabled ? 'rgba(234,233,233,0.61)' : 'transparent'};
	border-radius: 5px;
	color: white;
	padding: 8px 12px;
	font-size: 16px;
	margin-left: 1rem;
	margin-right: 1rem;
	curser: pointer;
	&: focus {
		outline: none;
	}
	&: active {
		outline: none;
	}
	&: hover{
		background: rgba(0,0,0,0.41);
	}

`
const ButtonContainer = styled.div `
	display: flex;
`
const Gallery = styled.div `
	margin-top: 1rem;
	width: 100%;
	height: 400px;
	background: black;
	display: flex;
	flex-direction: row;
	overflow-x: scroll;
	overflow-y: hidden;
`

const Dog = styled.img`
	border-radius: 3px;
	height:200px;
	width:200px;
	flex: 1 1 200px;
	margin-top: 1rem;
	margin-right: 1rem;
	margin-left: 1rem;
`

class Box extends Component {
	state = {
		dogs: null,
		disabled: false
	}

	fetchData = (breed) =>{
		this.setState({disabled: true})
		if(breed === 'tibetan'){
			request.get(`https://dog.ceo/api/breed/terrier/${breed}/images`)
			.then(({body}) => {
				this.setState({dogs:body.message, disabled: false})
			})
		}else{
			request.get(`https://dog.ceo/api/breed/${breed}/images`)
			.then(({body}) => {
				this.setState({dogs:body.message, disabled: false})
			})
	}
}

	handleClick = event =>{
		const breed = event.target.id;
		this.fetchData(breed);
	}

	render(){
		let { dogs, disabled } = this.state
		return(
			<PurpleBox>
				<h2>Like Dogs?</h2>
				<h3>Click your favorite breed</h3>
				<ButtonContainer>
					<Button onClick = {this.handleClick} id = "african" disabled={disabled}>African</Button>
					<Button onClick = {this.handleClick} id = "beagle" disabled={disabled}>Beagle</Button>
					<Button onClick = {this.handleClick} id = "tibetan" disabled={disabled}>Tibetan Terrier</Button>
					<Button onClick = {this.handleClick} id = "redbone" disabled={disabled}>Redbone</Button>
				</ButtonContainer>
				<Gallery>
				{
					dogs &&
					dogs.map((dog, i) =>
						<Dog key={i} src={dog} />
						)
				}
				</Gallery>
			</PurpleBox>
			)
	}
}

export default Box