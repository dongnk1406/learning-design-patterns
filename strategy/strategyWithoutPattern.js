/*
README:
- https://www.youtube.com/watch?v=sheV2IBlQkU&list=PLw0w5s5b9NK7TSuHpxOMvVtRuaEgHQczQ&index=2

*/

function getPriceWithoutStrategy(originalPrice = 0, typePromotion = "default") {
    if (typePromotion === "preOrder") {
        return originalPrice * 0.8;
    }
    if (typePromotion === "promotion") {
        return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
    }
    if (typePromotion === "blackFriday") {
        return originalPrice <= 200 ? originalPrice * 0.8 : originalPrice - 50;
    }

    return originalPrice;
}

console.log(getPriceWithoutStrategy(10, "promotion"));

