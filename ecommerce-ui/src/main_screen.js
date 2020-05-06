import React from 'react';
import PropTypes from 'prop-types';
import airbnb_details from './airbnbs.json';
import Airbnb_list from './Airbnb_list';
import Cart from './Cart';





class Main_screen extends React.Component {
    static propTypes = {
        airbnb_details: PropTypes.arrayOf(
            PropTypes.shape({
            title: PropTypes.string.isRequired,
            houseType: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            location:PropTypes.arrayOf(
                PropTypes.shape({
                    city: PropTypes.string.isRequired,
                    country: PropTypes.string.isRequired,
                })),
            payment:PropTypes.arrayOf(
                    PropTypes.shape({
                        cost: PropTypes.number.isRequired,
                        description: PropTypes.string.isRequired,
                })),
            host:PropTypes.arrayOf(
                        PropTypes.shape({
                            name: PropTypes.number.isRequired,
                            isSuperhost: PropTypes.bool.isRequired,
                })),
            rating:PropTypes.arrayOf(
                        PropTypes.shape({
                                stars: PropTypes.number.isRequired,
                                reviews: PropTypes.number.isRequired,
                 })),
        })),


    }

    constructor(props){
        super(props);
        this.state={
            airbnb_details: airbnb_details,
            cartList: [],
            hide: true,
            showForm: false,
            new_airbnb_details:[]
         
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
       
    }

    handleClick(e, id) {
        
        
        let thisCard = document.getElementById(id);
        let thisCardTitle = document.getElementById(id+"-title");
        let thisCardCost = document.getElementById(id+"-cost");
        
        let itemClicked = {
            "id": id,
            "title": thisCardTitle.innerText,
            "cost": thisCardCost.innerText
        }
        let itemAlreadyInCart = false;
       this.setState(prevState=>{

           
           const cartList= prevState.cartList;
           //this.state.hide= true;
           cartList.forEach(item => {
               
               if(item.id === id){
                   itemAlreadyInCart = true;
                   
               }
           });
           
           if(!itemAlreadyInCart){

                cartList.push(itemClicked);
           }

           return cartList;
           
       });
    
      this.state.hide = false;
    }


    handleRemoveFromCart(e,item){
        
        this.setState(prevState=>{
           const cartList= prevState.cartList.filter(elm => elm.id!= item.id)
           return {cartList}
  
        });
 
   
    }

    renderForm () {
        
        return (
            
            
            <div> 
              <form id= "add-app" >
                <label>Title: </label>
                <input type="text" required />

                <label> House Type : </label>
                <input type= "text" />
     
                <label>Location: </label>
                <input type="text" />

                <label>Image:</label>
                <input type= "url" />
     
              <button type="submit" >Create</button>
               </form>
           </div>
        );
     }

    



    renderAirbnb_list(){
        return <Airbnb_list airbnb_details={this.state.airbnb_details} onClick={this.handleClick}/>
    }
    renderCart(){
        return <Cart cartList= {this.state.cartList} handleRemoveFromCart= {this.handleRemoveFromCart} />
    
    }

    render(){
        const { hidden} = this.state.hide;
        return(
            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"></link>
                <hr></hr >
                <div className= "main_page">
                    <i className="material-icons">house</i>
                    <h2 className= "heading">@Home Rentals</h2>
                    <div>
                        <button className= "host" onClick={() => this.setState({showForm: true})}>Host your rental </button>
                        {this.state.showForm && this.renderForm()}
                    </div>
                    
                </div>
                <hr />
                <div className= "section">
                {this.renderAirbnb_list()}  
                {this.state.hide? null: <div>{this.renderCart()}</div>}
                {/* {this.renderCart()}  */}
                </div>

            </div>
            
        
            
        );
    }

    
    
}

export default Main_screen;
