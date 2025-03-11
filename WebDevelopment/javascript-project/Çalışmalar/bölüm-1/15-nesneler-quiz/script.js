// Uygulama: Nesneler (Objects)

/* 
    1- Sipariş bilgilerini object içerisinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %20)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2025
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 
        ürün id: 5
        ürün başlığı: IPhone 16 Pro
        ürün url: http://abc.com/iphone-16-pro
        ürün fiyatı: 75000

        ürün id: 6
        ürün başlığı: IPhone 16 Pro Max
        ürün url: http://abc.com/iphone-16-pro-max
        ürün fiyatı: 85000

    müşteri:
        müşteri id: 12


    sipariş id: 102
    sipariş tarihi: 30.11.2025
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 

        ürün id: 6
        ürün başlığı: IPhone 16 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 85000

    müşteri:
        müşteri id: 12    

*/

let order_1 = {
  id: 101,
  order_date: "31.12.2025",
  payment_method: "credit card",
  address: { city: "kocaeli", district: "izmit", street: "yahya kaptan" },
  purchased_items: [
    {
      item_id: 5,
      item_name: "IPhone 16 Pro Max",
      item_url: "http://abc.com/iphone-16-pro-max",
      item_price: 85000,
    },
    {
      item_id: 6,
      item_name: "IPhone 16 Pro ",
      item_url: "http://abc.com/iphone-16-pro",
      item_price: 75000,
    },
  ],
};

let order_2 = {
  id: 102,
  order_date: "30.12.2025",
  payment_method: "credit card",
  address: { city: "kocaeli", district: "izmit", street: "yahya kaptan" },
  purchased_items: {
    item_id: 5,
    item_name: "IPhone 16 Pro Max",
    item_url: "http://abc.com/iphone-16-pro-max",
    item_price: 85000,
  },
};
console.log(order_details);
