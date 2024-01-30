import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { useUsersStore } from "./usersStore.ts";
import { BASE_URL, SET_DATA_HEADERS, AUTH_DATA_HEADERS } from "../constants.ts";
import type {user} from "./usersStore.ts";
// import internal from "stream";


interface card {
  _id: string;
  productName: string;
  description: string;
  articleNumber: number;
  pictureBig: string[];
  pictureSmall: string;
  price: number;
  amount: number;
  size: string;
  material: string;
}

interface cardWithQuantity {
  _id: string;
  productName: string;
  description: string;
  articleNumber: number;
  pictureBig: string[];
  pictureSmall: string;
  price: number;
  amount: number;
  size: string;
  material: string;
  quantity: number;
}

 export interface errorResp  {
  message: string
}
  type cardId=string [];

export const useCardsStore = defineStore("cards", () => {
  const isError = reactive({
    exist: false,
    message: "",
  });
  const _checkRes = <T>(res: Response)=> {
    return res.ok ? res.json() as Promise<T> : res.json().then((err) => Promise.reject(err));
    
  };
    const userStore = useUsersStore();

    

    type userResp = user 

  const getCards = () => {
    return fetch(BASE_URL + "/cards", {
      method: "GET",
      credentials: "include",
      headers: SET_DATA_HEADERS,
    }).then((res) => _checkRes<card[]>(res));
  };

  const addToBasket = (cardId: string) => {
    const href = BASE_URL + `/users/me/basket/${cardId}`;
    return fetch(href,
      {  method: 'PUT',
        credentials: 'include',
        headers:
        AUTH_DATA_HEADERS,

    })
    .then((res) =>
    _checkRes<userResp>(res)
    );
  };

  const delFromBasket = (cardId: string)=> {
    debugger;
    const href = BASE_URL + `/users/me/basket/${cardId}`;
    return fetch(href,
      {  method: 'DELETE',
        credentials: 'include',
        headers:
        AUTH_DATA_HEADERS,

      })
      .then((res) =>
    _checkRes<userResp>(res)
    );
  };

  const delSevFromBasket = (cards: cardId)=> {
    debugger;
    const href = BASE_URL + '/users/me/basket/cards';
    return fetch(href,
      {  method: 'PATCH',
        credentials: 'include',
        headers:
        AUTH_DATA_HEADERS,
        body: JSON.stringify({basket: cards}),
 
      })
      .then((res) =>
    _checkRes<userResp>(res)
    );
  };

  const cardsArray = ref<card[]>([]);
  const fetchData = () => getCards().then((data: card[]) => (cardsArray.value = data));
  fetchData();
  const getCardById = (id: string) => {
    return cardsArray.value.find((card) => card._id === id);
  };

  const basketArray = useLocalStorage<card[]>("basket", []);
  let basketArrayWithQuantity = useLocalStorage<cardWithQuantity[]>("basketQuantity", []);
  const updateBasketArrayWithQuantity = () => {
    basketArrayWithQuantity.value = basketArray.value.reduce(
      (acc: cardWithQuantity[], curr: card) => {
        const existingIndex = acc.findIndex((item) => item._id === curr._id);
        if (existingIndex !== -1) {
          acc[existingIndex] = {
            ...curr,
            quantity: acc[existingIndex].quantity + 1,
          };
        } else {
          acc.push({ ...curr, quantity: 1 });
        }
        return acc;
      },
      []
    );
  };
  const countBasketSum = () => basketArray.value.reduce((sum, item) => sum + item.price, 0);
  const basketSumm = ref<number>(countBasketSum());
  const addBasketArray = (id: string) => {
    const card = getCardById(id);
    if(!userStore.isLoggedIn){
      if (card) {
        basketArray.value.push(card);
        // basketSumm.value = countBasketSum();
        // updateBasketArrayWithQuantity();
        
      }
    }
    else {
      addToBasket(id)
      .then((user) => {
        basketArray.value = user.basket;
        userStore.user = user;
        // Здесь также можно обновить basketSumm и вызов updateBasketArrayWithQuantity, если необходимо
        debugger;
        console.log("basket", user.basket );
      })
      .catch((err:errorResp ) => {
        isError.exist= true;
        isError.message=err.message;
        console.log(err);
      });
    }
    return basketArray.value;
  };
  const removeBasketArray = (id: string) => {
    if(!userStore.isLoggedIn){
      basketArray.value = basketArray.value.filter((card) => card._id !== id);
      // basketSumm.value = countBasketSum();
      // updateBasketArrayWithQuantity();
    }
    else{
     ;
      let basket =basketArray.value.filter((card) => card._id === id).map((card)=>card._id)
      delSevFromBasket(basket)
      .then((user) => {
        basketArray.value = user.basket;
        userStore.user = user;
        // Здесь также можно обновить basketSumm и вызов updateBasketArrayWithQuantity, если необходимо
        debugger;
        console.log("basket", user.basket );
      })
      .catch((err:errorResp ) => {
        isError.exist= true;
        isError.message=err.message;
        console.log(err);
      });

 
    }
   
    return basketArray.value;
  };

  const removeOneItemBasketArray = (id: string) => {
    const cardToDelete = basketArray.value.find((card) => card._id === id);
    if(!userStore.isLoggedIn) {
      if (cardToDelete) {
        basketArray.value.splice(basketArray.value.indexOf(cardToDelete), 1);
        // basketSumm.value = countBasketSum();
        // updateBasketArrayWithQuantity();
        return basketArray.value;
    }

    }
    else {
      delFromBasket(id)
      .then((user) => {
        debugger;
        basketArray.value = user.basket;
        userStore.user = user;
        // Здесь также можно обновить basketSumm и вызов updateBasketArrayWithQuantity, если необходимо
        debugger;
        console.log("basket", user.basket );
        return basketArray.value;
      })
      .catch((err:errorResp ) => {
        isError.exist= true;
        isError.message=err.message;
        console.log(err);
      });

    }

    
  };
  const clearBasket = () =>{ if(!userStore.isLoggedIn) {
    basketArray.value.splice(0, basketArray.value.length);
  }}

  const fetchClearBasket = ():userResp=> {
    
  
   if(!userStore.isLoggedIn) {
    clearBasket();
  }
  else { 
    userStore.updateBasket([])
    .then((user)=> { 
      userStore.user = user;
      basketArray.value = user.basket;
    } )

  }
    return userStore.user;
  } 
  
  watch(basketArray, () => {
    updateBasketArrayWithQuantity();
    basketSumm.value = countBasketSum();
    console.log('basketArray');
  }, {deep: true});

  return {
    cardsArray,
    getCardById,
    addBasketArray,
    removeBasketArray,
    basketArray,
    removeOneItemBasketArray,
    basketSumm,
    basketArrayWithQuantity,
    clearBasket,
    getCards,
    fetchData,
    updateBasketArrayWithQuantity,
    isError,
    fetchClearBasket,
  };
});
