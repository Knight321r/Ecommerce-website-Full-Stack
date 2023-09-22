export const initialState = {
    basket: [],
    user : null,
  };
  
export const getbaskettotal = (basket) => 
   basket?.reduce((amount, item) => amount + item.price, 0)

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket : [...state.basket, action.item],
            }
        
        case "EMPTY_BASKET":
            return{
                ...state,
                basket : []
            }

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketitem) => basketitem.id === action.id
            )
            let newbasket = [...state.basket]
            if(index >= 0){
                newbasket.splice(index, 1);
            }
            else{
                console.warn(
                    `Cant remove product (id : ${action.id} as its not in basket!)`  
                    // + console.log(state.basket) + console.log(`index is ${index}`)
                )
            }
            return {
                ...state,
                basket: newbasket
            }

        case "SET_USER":
            return {
                ...state,
                user : action.user
            }

        default:
            return state;
    }
};
  
  export default reducer;