const products = [
    {
        "show_advanced": true,
        "id": 4538159,
        "name": "Sony FE 90mm F/2.8G Macro OSS OUTLET ",
        "sku": "12458322",
        "product_id": 482887,
        "spli_guid": "09fc3f3a-9c5c-46f2-b316-61a957f40318",
        "brand": "Sony",
        "brand_logo": "/media/70e424af-3029-44e9-b488-8d0338c80155/sony-logo.png.png",
        "media": "/media/5d731237-d777-4ed8-94be-90334039b961/sony-fe-90mm-f2-8g-macro-oss-1-jpg.jpg",
        "price": 899,
        "manufacturers_suggested_retail_price": 989,
        "amount_pre_order": null,
        "price_after_cash_discount": 899,
        "in_stock": true,
        "total_reviews": 0,
        "price_after_cashback_discount": 899,
        "rating_number": null,
        "first_promotion": null,
        "has_blackfriday_deal": false,
        "url": "/sony-fe-90mm-f-2-8g-macro-oss-outlet-",
        "category": "Prime lenzen",
        "category_id": 358,
        "status": "Op voorraad",
        "status_reference": null,
        "can_be_ordered": true,
        "spli_id": 3163329,
        "is_occasion": false
    },
]


const baseUrl = 'https://kamera-express.nl';

for (const product of products) {
  const imageUrl = product.media;
  const a = document.createElement('a');
  a.target = '_blank'
  a.href = imageUrl;
  a.download = imageUrl.split('/').pop();
  a.click();
  await new Promise(res => setTimeout(res, 250)) // dirty way to make sure there are never more than 10 simultanious downloads
}
