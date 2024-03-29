import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { useCardsStore } from "./cardsStore.ts";
import { BASE_URL, SET_DATA_HEADERS, AUTH_DATA_HEADERS } from "../constants.ts";
import type { errorResp } from "./cardsStore.ts";

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

interface order {
  _id: string;
  orderItems: card[];
  owner: string;
  postIndex: number;
  city: string;
  street: string;
  house: string;
  flat: number;
  paid: boolean;
  status: string;
}

interface fetchOrder extends Omit<order, "_id" | "paid" | "status" | "owner" | "orderItems"> {}
export interface user {
  _id: string;
  name: string;
  email: string;
  customerName: string;
  customerSurName: string;
  customerFathersName: string;
  basket: card[];
  orders: order[];
  verified: boolean;
  phone: string;
}

interface passwordObj {
  password: string;
  newPassword: string;
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

interface authorizationParams {
  email: string;
  password: string;
}
interface createUserParams {
  name: string;
  email: string;
  customerName: string;
  customerSurName: string;
  customerFathersName: string;
  phone: number;
  password: string;
}
type updateUserParams = Omit<createUserParams, "password">;
const orderArray = useLocalStorage<order[]>("orderArray", []);
// orderArray.value = [];
type basket = string[];
// const cardsStore = useCardsStore();
const newOrder = useLocalStorage<order>("newOrder", {
  _id: "",
  orderItems: [],
  owner: "",
  postIndex: 0,
  city: "",
  street: "",
  house: "",
  flat: 0,
  paid: false,
  status: "",
});

const initialOrder: order = {
  _id: "",
  orderItems: [],
  owner: "",
  postIndex: 0,
  city: "",
  street: "",
  house: "",
  flat: "",
  paid: false,
  status: "",
};
export const useUsersStore = defineStore("user", () => {
  const cardsStore = useCardsStore();
  const isError = reactive({
    exist: false,
    message: "",
  });

  const user = ref<user>({
    _id: "",
    name: "",
    email: "",
    customerName: "",
    customerSurName: "",
    customerFathersName: "",
    basket: [],
    orders: [],
    verified: false,
    phone: "",
  });
  const isLoggedIn = ref(false);

  const setUser =(userdata:user)=>{
  user.value = userdata;
  orderArray.value = userdata.orders;
  isLoggedIn.value =!!userdata;
  }

  const _checkRes = <T>(res: Response) => {
    return res.ok ? (res.json() as Promise<T>) : res.json().then((err) => Promise.reject(err));
  };
  const authorize = ({ email, password }: authorizationParams) => {
    const href = BASE_URL + "/signin";
    return fetch(href, {
      method: "POST",
      credentials: "include",
      headers: SET_DATA_HEADERS,
      body: JSON.stringify({ email, password }),
    }).then((res) => _checkRes<user>(res))
    .then((user)=> setUser(user));
  };
  const createUser = ({
    name,
    email,
    customerName,
    customerSurName,
    customerFathersName,
    phone,
    password,
  }: createUserParams) => {
    const href = BASE_URL + "/signup";
    return fetch(href, {
      method: "POST",
      credentials: "include",
      headers: SET_DATA_HEADERS,
      body: JSON.stringify({
        name,
        email,
        customerName,
        customerSurName,
        customerFathersName,
        phone,
        password,
      }),
    }).then((res) => _checkRes(res));
  };

  const getUserInfo = () => {
    const href = BASE_URL + "/users/me";
    
    return fetch(href, { method: "GET", credentials: "include", headers: AUTH_DATA_HEADERS })
      .then((res) => _checkRes<user>(res))
      .then((servdata) => {
        user.value = servdata;
       
        orderArray.value = servdata.orders;
        isLoggedIn.value = true;
        ;
        return servdata;
      })
      .catch((err) => {
        console.log(err);
        isLoggedIn.value = false;
      });
  };

  const signOut = () => {
    const href = BASE_URL + "/signout";
    orderArray.value =[];
    return fetch(href, { method: "GET", credentials: "include", headers: AUTH_DATA_HEADERS }).then(
      (res) => _checkRes(res)
    )
    .then(()=>{
      ;
      isLoggedIn.value = false;
      user.value = {
            _id: '',
            name: '',
            email: '',
            customerName: '',
            customerSurName: '',
            customerFathersName: '',
            basket: [],
            orders: [],
            verified: false,
            phone: '',
          };
    })
  };

  const updateUserInfo = ({
    name,
    email,
    customerName,
    customerSurName,
    customerFathersName,
    phone,
  }: updateUserParams): Promise<user | Error> => {
    const href = BASE_URL + "/users/me";
    return fetch(href, {
      method: "PATCH",
      credentials: "include",
      headers: AUTH_DATA_HEADERS,
      body: JSON.stringify({
        name,
        email,
        customerName,
        customerSurName,
        customerFathersName,
        phone,
      }),
    }).then((res) => _checkRes<user>(res));
  };

  const updateBasket = (basketArray: basket) => {
    console.log("body", JSON.stringify({ basket: basketArray }));
    const href = BASE_URL + "/users/me/basket";
    return fetch(href, {
      method: "PATCH",
      credentials: "include",
      headers: AUTH_DATA_HEADERS,
      body: JSON.stringify({ basket: basketArray }),
    }).then((res) => _checkRes<user>(res));
  };

  const isAuthorized = async () => {
    if (!isLoggedIn.value) await getUserInfo();
    return isLoggedIn.value;
  };

  const createNewOrder = (orderAdress: fetchOrder) => {
    const orderInfo = { ...orderAdress, basket: user.value.basket };

    if (!user.value.basket.length) throw new Error("Ваша корзина пуста!");
    const href = BASE_URL + "/orders";
    return fetch(href, {
      method: "POST",
      credentials: "include",
      headers: AUTH_DATA_HEADERS,
      body: JSON.stringify(orderInfo),
    })
      .then((res) => _checkRes<order>(res))
      .then((order) => {
        newOrder.value = order;
        orderArray.value.push(newOrder.value);
        orderArray.value.reverse();
        return newOrder.value;
      });
  };

  const repeatOrder = (id: string) => {
    const href = BASE_URL + `/orders/${id}`;
    return fetch(href, { method: "POST", credentials: "include", headers: AUTH_DATA_HEADERS })
      .then((res) => _checkRes<order>(res))
      .then((order) => {
        newOrder.value = order;
        orderArray.value.push(newOrder.value);
        orderArray.value.reverse();
        return newOrder.value;
      });
  };

  const changePassword = ({ password, newPassword }: passwordObj) => {
    const href = BASE_URL + "/users/me/password";
    return fetch(href, {
      method: "POST",
      credentials: "include",
      headers: AUTH_DATA_HEADERS,
      body: JSON.stringify({ password, newPassword }),
    }).then((res) => _checkRes<user>(res));
  };

  return {
    user,
    createNewOrder,
    orderArray,
    newOrder,
    updateUserInfo,
    authorize,
    _checkRes,
    createUser,
    isLoggedIn,
    signOut,
    updateBasket,
    isAuthorized,
    isError,
    repeatOrder,
    changePassword,
    initialOrder,
    setUser,
  };
});
