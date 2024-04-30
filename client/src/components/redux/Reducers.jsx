const initialstate = {
    cart:[]
}

const Reducers = (state = initialstate , action) =>{

    switch (action.type) {

        // this is for Add to cart
        case "Add_to_card":
            
            // return {
            //     ...state,
            //     // use spred operator  

            //     // cart:[...state,action.payload]
            //     // state is not iterable so we use .cart because cart is stored in state
            //     cart:[...state.cart,action.payload]
            // }


            // now we solve the issue with quantity
            let cardindex = state.cart.findIndex((item)=>item.id == action.payload.id)
            // console.log("Bawaaal");
            console.log(cardindex);

            if (cardindex >= 0) {
                state.cart[cardindex].quantity += 1
            }
            else{
                let staticdata = {...action.payload, quantity:1}
                return {
                    ...state,

                    // cart:[...state.cart,action.payload]
                    cart:[...state.cart,staticdata]
                }
            }

        // this is for Add to cart
        case "Remove_from_card":
            
            // we apply logic to filter the data
            let deldata = state.cart.filter((filt)=>filt.id != action.payload)

            return{
                ...state,
                cart:deldata
                // filter gives the data in the form of new array to we have directly passed the deldata
            }




        // this is to decrease the quantity 
        case "Decrement" :

            let quantityindex = state.cart.findIndex((item)=>item.id == action.payload.id)
            console.log(quantityindex);

            if (state.cart[quantityindex].quantity >= 1) {
                state.cart[quantityindex].quantity -= 1
                return{
                    ...state,
                    cart:[...state.cart]
                }
            }

            else if(state.cart[quantityindex].quantity == 1){

                // we added remove to cart functinality here
                let deldata = state.cart.filter((filt)=>filt.id != action.payload)
                return{
                    ...state,
                    cart:deldata
                }
            }


        case "Clear_cart":
                
            return {
                ...state,
                cart: []
            }


        default:
            return state;
    }
}

export default Reducers