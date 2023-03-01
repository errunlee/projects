
const reducer=(state,action)=>{
    if(action.type==='increase'){  
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
              return { ...cartItem, amount: cartItem.amount + 1 }
            }
            return cartItem
          })
          return { ...state, cart: tempCart }
    }
    if(action.type==='decrease'){
       let tempCart=state.cart.map((cartItem)=>{
        if(cartItem.id===action.payload){
            return {...cartItem,amount:cartItem.amount-1}
        }
        return  {...cartItem}
       }).filter((cartItem)=>cartItem.amount!==0)
       return {...state,cart:tempCart}
    }
     if (action.type === 'DISPLAY_ITEMS') {
            return { ...state, cart: action.payload, loading: false }
          }

    if(action.type==='REMOVE'){
        let tempCart=state.cart.filter((cartItem)=>{
            return cartItem.id!==action.payload
        })        
        return {...state,cart:tempCart}
    }
    if(action.type==='CLEAR'){
        return {...state,cart:[]}
    }


    if (action.type === 'GET_TOTALS') {
        let { total, amount } = state.cart.reduce(
          (cartTotal, cartItem) => {
            const { price, amount } = cartItem
            const itemTotal = price * amount
    
            cartTotal.total += itemTotal
            cartTotal.amount += amount
            return cartTotal
          },
          {
            total: 0,
            amount: 0,
          }
        )
        total = parseFloat(total.toFixed(2))
    
        return { ...state, total, amount }
      }
}
export default reducer;