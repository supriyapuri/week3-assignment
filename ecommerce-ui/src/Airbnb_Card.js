import React from 'react';

export default class Airbnb_card extends React.Component {
    render(){

        const description= this.props.card.payment.description;
        const isSuperhost= this.props.card.host.isSuperhost;

        return(
            
            <div className= "each_card"> 
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"></link>
                <img className= "image" src = {this.props.card.image} />
                <div className= "card_text">
                    <div>
                        <p className= "house_type">{this.props.card.houseType} in {this.props.card.location.city}, {this.props.card.location.country}</p>
                        <h2>{this.props.card.title}</h2>
                        
                    </div>
                    <div className= "house_cost">
                        {description ? (<p>${this.props.card.payment.cost}, {description}</p>): (<p>${this.props.card.payment.cost}</p>)}
                    </div>
                    <div className ="additional_details"> 
                        <div>
                            <p><i className="material-icons">star</i>  {this.props.card.rating.stars} ({this.props.card.rating.reviews})</p>
                        </div>
                            <p><i className="material-icons">person</i> 
                            {isSuperhost? (<em>{this.props.card.host.name} (Superhost)</em>) : (<em>{this.props.card.host.name}</em>)}</p>
                        <div>
                            <button>Add</button>
                        </div>
                        
                    </div>
                </div>


            </div>
        );
    }
}