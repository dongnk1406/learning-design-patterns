/*
README:
- https://www.youtube.com/watch?v=sheV2IBlQkU&list=PLw0w5s5b9NK7TSuHpxOMvVtRuaEgHQczQ&index=2

*/

function preOrderPrice(originalPrice) {
  return originalPrice * 0.2;
}

function promotionPrice(originalPrice) {
  return originalPrice <= 200 ? originalPrice * 0.1 : originalPrice - 30;
}

function blackFridayPrice(originalPrice) {
  return originalPrice <= 200 ? originalPrice * 0.2 : originalPrice - 50;
}

function defaultPrice(originalPrice) {
  return originalPrice;
}

function getPriceWithStrategy(originalPrice, typePromotion = 'default') {
  const getPriceStrategies = {
    preOrder: preOrderPrice,
    promotion: promotionPrice,
    blackFriday: blackFridayPrice,
    default: defaultPrice,
  }

  if (!Object.keys(getPriceStrategies).includes(typePromotion)) {
    console.log('Undefined typePromotion: ', typePromotion)
    return
  }

  return getPriceStrategies[typePromotion](originalPrice);
}

console.log(getPriceWithStrategy(80, 'blackFriday'))