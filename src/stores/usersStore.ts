import { ref, computed } from "vue";
import { defineStore } from "pinia";
import {useLocalStorage} from "@vueuse/core";

interface card {
    _id: string;
    productName: string;
    description: string;
    articleNumber: number;
    pictureBig: string [];
    pictureSmall: string;
    price: number;
    amount: number;
    size: string;
    material: string;
  };

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
  };
interface user 
    {
     _id: string;
      name: string;
      email: string;
      customerName: string;
      customerSurName: string;
      customerFathersName: string;
      basket: card[];
      orders: string[];
      verified: boolean;
      phone: number;
    };




export const useUsersStore = defineStore("user", () => {
  
  const user = ref<user>({
      _id: "651505f163c9338d5616a4b3",
      name: "Валери",
      email: "yrkova_ea@inbox.ru",
      customerName: "Валерия",
      customerSurName: "Новикова",
      customerFathersName: "Александровна",
      basket: [
          {
              "_id": "650180c00d7ae0668c58d70d",
              "productName": "поднос",
              "description": "Небольшая поднос",
              "articleNumber": 11,
              "pictureBig": [
                  "https://sun9-56.userapi.com/impg/TqRzTS77LzzJVuEH4RE_Z-9kz7DxspdXw0V_Qw/wwFHZKWV6Rg.jpg?size=1887x2160&quality=95&sign=d828b4a237021f0c2bfe60fde9c902aa&type=album",
                  "https://sun9-37.userapi.com/impg/nIeWECDDWTvidj9QoMBVb3ARsc5jwbg52Tm_Kg/nmZGdIpdVsU.jpg?size=1689x2160&quality=95&sign=a63181aabd77bf83abe3387a9a23506e&type=album"
              ],
              "pictureSmall": "https://sun9-37.userapi.com/impg/nIeWECDDWTvidj9QoMBVb3ARsc5jwbg52Tm_Kg/nmZGdIpdVsU.jpg?size=1689x2160&quality=95&sign=a63181aabd77bf83abe3387a9a23506e&type=album",
              "price": 6300,
              "amount": 11,
              "size": "60см X 40см X 30см",
              "material": "100% эко-лоза"
          },
          {
              "_id": "650180c00d7ae0668c58d70d",
              "productName": "поднос",
              "description": "Небольшая поднос",
              "articleNumber": 11,
              "pictureBig": [
                  "https://sun9-56.userapi.com/impg/TqRzTS77LzzJVuEH4RE_Z-9kz7DxspdXw0V_Qw/wwFHZKWV6Rg.jpg?size=1887x2160&quality=95&sign=d828b4a237021f0c2bfe60fde9c902aa&type=album",
                  "https://sun9-37.userapi.com/impg/nIeWECDDWTvidj9QoMBVb3ARsc5jwbg52Tm_Kg/nmZGdIpdVsU.jpg?size=1689x2160&quality=95&sign=a63181aabd77bf83abe3387a9a23506e&type=album"
              ],
              "pictureSmall": "https://sun9-37.userapi.com/impg/nIeWECDDWTvidj9QoMBVb3ARsc5jwbg52Tm_Kg/nmZGdIpdVsU.jpg?size=1689x2160&quality=95&sign=a63181aabd77bf83abe3387a9a23506e&type=album",
              "price": 6300,
              "amount": 11,
              "size": "60см X 40см X 30см",
              "material": "100% эко-лоза"
          },
          {
              "_id": "650180c00d7ae0668c58d70d",
              "productName": "поднос",
              "description": "Небольшая поднос",
              "articleNumber": 11,
              "pictureBig": [
                  "https://sun9-56.userapi.com/impg/TqRzTS77LzzJVuEH4RE_Z-9kz7DxspdXw0V_Qw/wwFHZKWV6Rg.jpg?size=1887x2160&quality=95&sign=d828b4a237021f0c2bfe60fde9c902aa&type=album",
                  "https://sun9-37.userapi.com/impg/nIeWECDDWTvidj9QoMBVb3ARsc5jwbg52Tm_Kg/nmZGdIpdVsU.jpg?size=1689x2160&quality=95&sign=a63181aabd77bf83abe3387a9a23506e&type=album"
              ],
              "pictureSmall": "https://sun9-37.userapi.com/impg/nIeWECDDWTvidj9QoMBVb3ARsc5jwbg52Tm_Kg/nmZGdIpdVsU.jpg?size=1689x2160&quality=95&sign=a63181aabd77bf83abe3387a9a23506e&type=album",
              "price": 6300,
              "amount": 11,
              "size": "60см X 40см X 30см",
              "material": "100% эко-лоза"
          },
          {
              "_id": "650180c00d7ae0668c58d70d",
              "productName": "поднос",
              "description": "Небольшая поднос",
              "articleNumber": 11,
              "pictureBig": [
                  "https://sun9-56.userapi.com/impg/TqRzTS77LzzJVuEH4RE_Z-9kz7DxspdXw0V_Qw/wwFHZKWV6Rg.jpg?size=1887x2160&quality=95&sign=d828b4a237021f0c2bfe60fde9c902aa&type=album",
                  "https://sun9-37.userapi.com/impg/nIeWECDDWTvidj9QoMBVb3ARsc5jwbg52Tm_Kg/nmZGdIpdVsU.jpg?size=1689x2160&quality=95&sign=a63181aabd77bf83abe3387a9a23506e&type=album"
              ],
              "pictureSmall": "https://sun9-37.userapi.com/impg/nIeWECDDWTvidj9QoMBVb3ARsc5jwbg52Tm_Kg/nmZGdIpdVsU.jpg?size=1689x2160&quality=95&sign=a63181aabd77bf83abe3387a9a23506e&type=album",
              "price": 6300,
              "amount": 11,
              "size": "60см X 40см X 30см",
              "material": "100% эко-лоза"
          },
          {
              "_id": "650180c00d7ae0668c58d70d",
              "productName": "поднос",
              "description": "Небольшая поднос",
              "articleNumber": 11,
              "pictureBig": [
                  "https://sun9-56.userapi.com/impg/TqRzTS77LzzJVuEH4RE_Z-9kz7DxspdXw0V_Qw/wwFHZKWV6Rg.jpg?size=1887x2160&quality=95&sign=d828b4a237021f0c2bfe60fde9c902aa&type=album",
                  "https://sun9-37.userapi.com/impg/nIeWECDDWTvidj9QoMBVb3ARsc5jwbg52Tm_Kg/nmZGdIpdVsU.jpg?size=1689x2160&quality=95&sign=a63181aabd77bf83abe3387a9a23506e&type=album"
              ],
              "pictureSmall": "https://sun9-37.userapi.com/impg/nIeWECDDWTvidj9QoMBVb3ARsc5jwbg52Tm_Kg/nmZGdIpdVsU.jpg?size=1689x2160&quality=95&sign=a63181aabd77bf83abe3387a9a23506e&type=album",
              "price": 6300,
              "amount": 11,
              "size": "60см X 40см X 30см",
              "material": "100% эко-лоза"
          }
      ],
      orders: [
          "65150d792e566fe672e0adc1",
          "6515252a16e59af4ebf43a32",
          "6515253416e59af4ebf43a3b"
      ],
      verified: true,
      phone: 6014,
      
  });
 
//   const getUserInfo= () => {

//     return user.value;
//   }
  return { user };
});
