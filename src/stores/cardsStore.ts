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



export const useCardsStore = defineStore("cards", () => {
  
  const cardsArray = ref<card[]>([
    {
      _id: "650180920d7ae0668c58d70b",
      productName: "сумка",
      description: "Плетеная сумка ручной работы выделит Вас из толпы",
      articleNumber: 3,
      pictureBig: [
        "https://sun9-70.userapi.com/impg/Xu9Z8YwcomRO65bqODMORANH9tfY_7EnYlCf6w/8juzr3ERgEU.jpg?size=1035x1270&quality=95&sign=47d6ed30b03ad252ea5b090e17b0b903&type=album",
        "https://sun9-73.userapi.com/impg/Zgx0heKI9VnbaGKEdoJz28zHFjr5Eq-EN8nkYQ/zFBl4yEs0dE.jpg?size=786x1369&quality=95&sign=d0728a4f16b77cf3e481aa90665d4428&type=album",
        "https://sun9-60.userapi.com/impg/WkIADTbw1gX6fjddCyNmwIwzN20qoM7TMTwgQQ/zIh3q_Dbqf8.jpg?size=1600x1487&quality=95&sign=991d038d32380df56748eb7d629c8767&type=album",
      ],
      pictureSmall:
        "https://sun9-37.userapi.com/impg/nIeWECDDWTvidj9QoMBVb3ARsc5jwbg52Tm_Kg/nmZGdIpdVsU.jpg?size=1689x2160&quality=95&sign=a63181aabd77bf83abe3387a9a23506e&type=album",
      price: 4000,
      amount: 8,
      size: "60см X 40см X 30см",
      material: "100% эко-лоза",
    },
    {
      _id: "650180c00d7ae0668c58d70d",
      productName: "поднос",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla purus aliquet tellus aliquet eleifend. In hac habitasse platea dictumst. Donec enim elit, pharetra in velit sed, ornare vehicula lorem. Aenean pretium dui dolor, quis gravida quam condimentum a. Ut id sapien nec nunc feugiat eleifend id a libero. Suspendisse ac egestas ipsum, nec venenatis leo. Nam elementum dictum aliquet. Nunc ultricies, nunc vitae dictum congue, felis sapien lacinia nisl, in ultricies felis risus vel orci. Nam non efficitur neque, eu suscipit risus. Sed hendrerit ut turpis et tempor. Nam pretium, odio id volutpat rhoncus, est diam tincidunt enim, nec gravida lectus sem vitae nulla. Pellentesque aliquam turpis ut enim sagittis bibendum. Sed consectetur dui accumsan arcu molestie, vel tincidunt lorem porta.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla purus aliquet tellus aliquet eleifend. In hac habitasse platea dictumst. Donec enim elit, pharetra in velit sed, ornare vehicula lorem. Aenean pretium dui dolor, quis gravida quam condimentum a. Ut id sapien nec nunc feugiat eleifend id a libero. Suspendisse ac egestas ipsum, nec venenatis leo. Nam elementum dictum aliquet. Nunc ultricies, nunc vitae dictum congue, felis sapien lacinia nisl, in ultricies felis risus vel orci. Nam non efficitur neque, eu suscipit risus. Sed hendrerit ut turpis et tempor. Nam pretium, odio id volutpat rhoncus, est diam tincidunt enim, nec gravida lectus sem vitae nulla. Pellentesque aliquam turpis ut enim sagittis bibendum. Sed consectetur dui accumsan arcu molestie, vel tincidunt lorem porta.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla purus aliquet tellus aliquet eleifend. In hac habitasse platea dictumst. Donec enim elit, pharetra in velit sed, ornare vehicula lorem. Aenean pretium dui dolor, quis gravida quam condimentum a. Ut id sapien nec nunc feugiat eleifend id a libero. Suspendisse ac egestas ipsum, nec venenatis leo. Nam elementum dictum aliquet. Nunc ultricies, nunc vitae dictum congue, felis sapien lacinia nisl, in ultricies felis risus vel orci. Nam non efficitur neque, eu suscipit risus. Sed hendrerit ut turpis et tempor. Nam pretium, odio id volutpat rhoncus, est diam tincidunt enim, nec gravida lectus sem vitae nulla. Pellentesque aliquam turpis ut enim sagittis bibendum. Sed consectetur dui accumsan arcu molestie, vel tincidunt lorem porta.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla purus aliquet tellus aliquet eleifend. In hac habitasse platea dictumst. Donec enim elit, pharetra in velit sed, ornare vehicula lorem. Aenean pretium dui dolor, quis gravida quam condimentum a. Ut id sapien nec nunc feugiat eleifend id a libero. Suspendisse ac egestas ipsum, nec venenatis leo. Nam elementum dictum aliquet. Nunc ultricies, nunc vitae dictum congue, felis sapien lacinia nisl, in ultricies felis risus vel orci. Nam non efficitur neque, eu suscipit risus. Sed hendrerit ut turpis et tempor. Nam pretium, odio id volutpat rhoncus, est diam tincidunt enim, nec gravida lectus sem vitae nulla. Pellentesque aliquam turpis ut enim sagittis bibendum. Sed consectetur dui accumsan arcu molestie, vel tincidunt lorem porta.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla purus aliquet tellus aliquet eleifend. In hac habitasse platea dictumst. Donec enim elit, pharetra in velit sed, ornare vehicula lorem. Aenean pretium dui dolor, quis gravida quam condimentum a. Ut id sapien nec nunc feugiat eleifend id a libero. Suspendisse ac egestas ipsum, nec venenatis leo. Nam elementum dictum aliquet. Nunc ultricies, nunc vitae dictum congue, felis sapien lacinia nisl, in ultricies felis risus vel orci. Nam non efficitur neque, eu suscipit risus. Sed hendrerit ut turpis et tempor. Nam pretium, odio id volutpat rhoncus, est diam tincidunt enim, nec gravida lectus sem vitae nulla. Pellentesque aliquam turpis ut enim sagittis bibendum. Sed consectetur dui accumsan arcu molestie, vel tincidunt lorem porta.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla purus aliquet tellus aliquet eleifend. In hac habitasse platea dictumst. Donec enim elit, pharetra in velit sed, ornare vehicula lorem. Aenean pretium dui dolor, quis gravida quam condimentum a. Ut id sapien nec nunc feugiat eleifend id a libero. Suspendisse ac egestas ipsum, nec venenatis leo. Nam elementum dictum aliquet. Nunc ultricies, nunc vitae dictum congue, felis sapien lacinia nisl, in ultricies felis risus vel orci. Nam non efficitur neque, eu suscipit risus. Sed hendrerit ut turpis et tempor. Nam pretium, odio id volutpat rhoncus, est diam tincidunt enim, nec gravida lectus sem vitae nulla. Pellentesque aliquam turpis ut enim sagittis bibendum. Sed consectetur dui accumsan arcu molestie, vel tincidunt lorem porta.",
      articleNumber: 11,
      pictureBig: [
        "https://sun9-56.userapi.com/impg/TqRzTS77LzzJVuEH4RE_Z-9kz7DxspdXw0V_Qw/wwFHZKWV6Rg.jpg?size=1887x2160&quality=95&sign=d828b4a237021f0c2bfe60fde9c902aa&type=album",
        "https://sun9-37.userapi.com/impg/nIeWECDDWTvidj9QoMBVb3ARsc5jwbg52Tm_Kg/nmZGdIpdVsU.jpg?size=1689x2160&quality=95&sign=a63181aabd77bf83abe3387a9a23506e&type=album",
      ],
      pictureSmall:
        "https://sun9-37.userapi.com/impg/nIeWECDDWTvidj9QoMBVb3ARsc5jwbg52Tm_Kg/nmZGdIpdVsU.jpg?size=1689x2160&quality=95&sign=a63181aabd77bf83abe3387a9a23506e&type=album",
      price: 6300,
      amount: 16,
      size: "60см X 40см X 30см",
      material: "100% эко-лоза",
    },
    {
      _id: "6502ce4867ccd9d6284e40b0",
      productName: "поднос",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla purus aliquet tellus aliquet eleifend. In hac habitasse platea dictumst. Donec enim elit, pharetra in velit sed, ornare vehicula lorem. Aenean pretium dui dolor, quis gravida quam condimentum a. Ut id sapien nec nunc feugiat eleifend id a libero. Suspendisse ac egestas ipsum, nec venenatis leo. Nam elementum dictum aliquet. Nunc ultricies, nunc vitae dictum congue, felis sapien lacinia nisl, in ultricies felis risus vel orci. Nam non efficitur neque, eu suscipit risus. Sed hendrerit ut turpis et tempor. Nam pretium, odio id volutpat rhoncus, est diam tincidunt enim, nec gravida lectus sem vitae nulla. Pellentesque aliquam turpis ut enim sagittis bibendum. Sed consectetur dui accumsan arcu molestie, vel tincidunt lorem porta.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla purus aliquet tellus aliquet eleifend. In hac habitasse platea dictumst. Donec enim elit, pharetra in velit sed, ornare vehicula lorem. Aenean pretium dui dolor, quis gravida quam condimentum a. Ut id sapien nec nunc feugiat eleifend id a libero. Suspendisse ac egestas ipsum, nec venenatis leo. Nam elementum dictum aliquet. Nunc ultricies, nunc vitae dictum congue, felis sapien lacinia nisl, in ultricies felis risus vel orci. Nam non efficitur neque, eu suscipit risus. Sed hendrerit ut turpis et tempor. Nam pretium, odio id volutpat rhoncus, est diam tincidunt enim, nec gravida lectus sem vitae nulla. Pellentesque aliquam turpis ut enim sagittis bibendum. Sed consectetur dui accumsan arcu molestie, vel tincidunt lorem portaLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla purus aliquet tellus aliquet eleifend. In hac habitasse platea dictumst. Donec enim elit, pharetra in velit sed, ornare vehicula lorem. Aenean pretium dui dolor, quis gravida quam condimentum a. Ut id sapien nec nunc feugiat eleifend id a libero. Suspendisse ac egestas ipsum, nec venenatis leo. Nam elementum dictum aliquet. Nunc ultricies, nunc vitae dictum congue, felis sapien lacinia nisl, in ultricies felis risus vel orci. Nam non efficitur neque, eu suscipit risus. Sed hendrerit ut turpis et tempor. Nam pretium, odio id volutpat rhoncus, est diam tincidunt enim, nec gravida lectus sem vitae nulla. Pellentesque aliquam turpis ut enim sagittis bibendum. Sed consectetur dui accumsan arcu molestie, vel tincidunt lorem porta.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla purus aliquet tellus aliquet eleifend. In hac habitasse platea dictumst. Donec enim elit, pharetra in velit sed, ornare vehicula lorem. Aenean pretium dui dolor, quis gravida quam condimentum a. Ut id sapien nec nunc feugiat eleifend id a libero. Suspendisse ac egestas ipsum, nec venenatis leo. Nam elementum dictum aliquet. Nunc ultricies, nunc vitae dictum congue, felis sapien lacinia nisl, in ultricies felis risus vel orci. Nam non efficitur neque, eu suscipit risus. Sed hendrerit ut turpis et tempor. Nam pretium, odio id volutpat rhoncus, est diam tincidunt enim, nec gravida lectus sem vitae nulla. Pellentesque aliquam turpis ut enim sagittis bibendum. Sed consectetur dui accumsan arcu molestie, vel tincidunt lorem porta",
      articleNumber: 11,
      pictureBig: [
        "https://sun9-56.userapi.com/impg/TqRzTS77LzzJVuEH4RE_Z-9kz7DxspdXw0V_Qw/wwFHZKWV6Rg.jpg?size=1887x2160&quality=95&sign=d828b4a237021f0c2bfe60fde9c902aa&type=album",
        "https://sun9-37.userapi.com/impg/nIeWECDDWTvidj9QoMBVb3ARsc5jwbg52Tm_Kg/nmZGdIpdVsU.jpg?size=1689x2160&quality=95&sign=a63181aabd77bf83abe3387a9a23506e&type=album",
      ],
      pictureSmall:
        "https://sun9-37.userapi.com/impg/nIeWECDDWTvidj9QoMBVb3ARsc5jwbg52Tm_Kg/nmZGdIpdVsU.jpg?size=1689x2160&quality=95&sign=a63181aabd77bf83abe3387a9a23506e&type=album",
      price: 6300,
      amount: 35,
      size: "60см X 40см X 30см",
      material: "100% эко-лоза",
    },
    {
      _id: "65150651907588fe1b217d04",
      productName: "корзина",
      description: "Корзина для пикника",
      articleNumber: 4,
      pictureBig: [
        "https://sun9-64.userapi.com/impg/ksjz5wGocKtXtsLBX1OGoVpUB93rnAFmCsTPvg/Dw7k5pX4JYM.jpg?size=1914x2160&quality=95&sign=f2aa7ab5ff393c8c1b06cfb386a7766e&type=album",
      ],
      pictureSmall:
        "https://sun9-16.userapi.com/impg/2prJ4_cexYR_Xg04AcYClyUn7A8II_w4YXHlBQ/TfEQI-jT-yQ.jpg?size=1080x778&quality=95&sign=9412e01617b672874d5b2cb88e9d5a63&type=album",
      price: 5500,
      amount: 8,
      size: "60см X 40см X 25см",
      material: "100% эко-лоза",
    },
    {
      _id: "65152448bd7fbbfe9fd3300a",
      productName: "поднос",
      description: "Небольшая поднос",
      articleNumber: 14,
      pictureBig: [
        "https://sun9-56.userapi.com/impg/TqRzTS77LzzJVuEH4RE_Z-9kz7DxspdXw0V_Qw/wwFHZKWV6Rg.jpg?size=1887x2160&quality=95&sign=d828b4a237021f0c2bfe60fde9c902aa&type=album",
        "https://sun9-37.userapi.com/impg/nIeWECDDWTvidj9QoMBVb3ARsc5jwbg52Tm_Kg/nmZGdIpdVsU.jpg?size=1689x2160&quality=95&sign=a63181aabd77bf83abe3387a9a23506e&type=album",
      ],
      pictureSmall:
        "https://sun9-37.userapi.com/impg/nIeWECDDWTvidj9QoMBVb3ARsc5jwbg52Tm_Kg/nmZGdIpdVsU.jpg?size=1689x2160&quality=95&sign=a63181aabd77bf83abe3387a9a23506e&type=album",
      price: 6300,
      amount: 12,
      size: "60см X 40см X 30см",
      material: "100% эко-лоза",
    },
  ]);
  const getCardById = (id: string) => {
    return cardsArray.value.find((card) => card._id === id);
  };

  const basketArray = useLocalStorage<card[]>('basket',[]);
  const addBasketArray = (id: string) => { 
    const card = getCardById(id);
    if(card){
      return basketArray.value.push(card);
    }
    
  }
  const removeBasketArray = (id:string) =>{
   return basketArray.value=basketArray.value.filter((card)=> card._id!==id)
  }

  const removeOneItemBasketArray = (id:string) =>{
      const cardToDelete = basketArray.value.find((card) => card._id===id);
      if(cardToDelete){
        basketArray.value.splice(basketArray.value.indexOf(cardToDelete), 1);
      }
       
       return basketArray.value;
   }
   
  
  return { cardsArray, getCardById, addBasketArray, removeBasketArray, basketArray, removeOneItemBasketArray };
});
