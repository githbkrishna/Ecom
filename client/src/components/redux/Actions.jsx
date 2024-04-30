export const Add = (item) => {
    return{
        type:"Add_to_card",
        payload:item
        // we send this to reeducers
    }
}


export const Remove = (id) =>{
    return{
        type:"Remove_from_card",
        payload:id
        // we send this to reeducers
    }
}


export const Decrement = (item) => {
    return{
        type:"Decrement",
        payload:item
        // we send this to reeducers
    }
}


export const Clearcart = ()=> {
    return{
        type:"Clear_cart", 
    }
}