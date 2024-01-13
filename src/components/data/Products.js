export const products = [
    {
      id: 1,
      title: 'VIPS',
      desc: 'VIP en todos los canales (Youtube, Twitch y Discord)',
      price: 1.5,
      
    },
    {
      id: 2,
      title: 'MIEMBRO DE YOUTUBE',
      desc: 'Membresia de Youtube',
      price: 1.5,
  
    },
    {
      id: 3,
      title: 'SUSCRIPSION A TWITCH',
      desc: 'Suscripsion al canal de Twitch',
      price: 2,
   
    },
    {
      id: 4,
      title: 'YOUTUBE + VIP',
      desc: 'Membresia de Youtube + VIP en todos los canales',
      price: 2.5,
     
    },
    {
      id: 5,
      title: 'TWITCH + VIP',
      desc: 'Suscripsion de Twitch + VIP en todos los canales',
      price: 3,
     
    },
    {
      id: 6,
      title: 'SUSCIPSION TOTAL',
      desc: 'Membresia de Youtube + Suscripcion de Twitch',
      price: 3,
    
    },
    {
      id: 7,
      title: 'ULTRA SUSCRIPSION',
      desc: 'Membresia de Youtube + Suscripcion de Twitch + VIP en todos los canales',
      price: 5,
      
    },
   
  ];
  
  export const TotalProducts = products.length;
  
  export const Products = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
  
    acc[product.category] = [...acc[product.category], product];
  
    return acc;
  }, {});