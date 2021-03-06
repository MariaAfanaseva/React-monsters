import React from 'react';
import './card.styles.css';

export class Card extends React.Component {
    state = {
        likes: 0
    };

    setLike = () => {
        this.setState((prevState, prevProps) => 
        {
            return {likes: prevState.likes + 1}
        },
            () => console.log(this.state.likes))
        }

    render() {
        return (
          <div className='card-container'>
            <img alt='cat' src={`https://robohash.org/${this.props.cat.id}?set=set4&size=180x280&bgset=bg1 `}/>
            <h2>{ this.props.cat.username }</h2>
            <p>{ this.props.cat.email }</p>
            <p>Likes: {this.state.likes}</p>
            <p className='add-like-button' onClick={this.setLike}>Add like</p>
          </div>
        )
    }
    
}
