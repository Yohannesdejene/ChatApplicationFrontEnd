// ALLOW DECREMENT & INCREMENT ACTIONS
// A PRODUCT WITH A COUNT OF 0 IS REMOVED FROM THE LOCAL STORAGE

///use cryptojs for ecrypion

// "unitPrice": 307.5,
// "quantity": 40,
// "productImage": "https://commercepal.s3.af-south-1.amazonaws.com/Web/SpecialOrder/SpecialOrder_1709189589304_467.jpeg",
// "productId": 12777,
// "totalPrice": 12300,
// "subProductId": 13487

export const AddToCartSpecialProduct = (data) => {
  console.log("datataatatatatattaattaatatatatattatatatat", data);

  let cartItems = [];
  const product = {
    ProductName: data.ProductName,
    ProductId: parseInt(data.ProductId),
    SubProductId: data.SubProductId,
    ProductParentCategoryId: data.ProductParentCategoryId,
    ProductSubCategoryId: data.ProductSubCategoryId,
    DiscountType: data.DiscountType,
    IsDiscounted: data.IsDiscounted,
    DiscountValue: data.DiscountValue,
    webImage: data.webImage,
    moq_value: data.moq_value,
    features: data.features,
    product_pricing: { ...data.product_pricing },
    UniqueId: data?.unique_id,
  };
  if (localStorage.getItem("cart") === null) {
    cartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  } else {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart.length < 1) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      const in_cart = findProductInCart(product.ProductId);
      if (in_cart) {
        const cart_items = cart.map((p, index) => {
          if (p.ProductId === product.ProductId) {
            p = product;
          }
          return p;
        });
        localStorage.setItem("cart", JSON.stringify(cart_items));
      } else {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
  }
  return cartItems;
};
export const AddToCart = (data, action) => {
  console.log("datataatatatatattaattaatatatatattatatatat", data);
  let cartItems = [];
  const product = {
    ProductName: data.productName,
    ProductId: parseInt(data.ProductId),
    SubProductId: data.SubProductId,
    ProductParentCategoryId: data.ProductParentCategoryId,
    ProductSubCategoryId: data.ProductSubCategoryId,
    DiscountType: data.DiscountType,
    IsDiscounted: data.IsDiscounted,
    DiscountValue: data.DiscountValue,
    webImage: data.webImage,
    moq_value: data.moq_value,
    features: data.features,
    product_pricing: { ...data.product_pricing },
    UniqueId: data?.unique_id,
  };
  if (localStorage.getItem("cart") === null) {
    cartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  } else {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart.length < 1) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      const in_cart = findProductInCart(product.ProductId);
      if (in_cart) {
        const cart_items = cart.map((p, index) => {
          if (p.ProductId === product.ProductId) {
            p = product;
          }
          return p;
        });
        localStorage.setItem("cart", JSON.stringify(cart_items));
      } else {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
  }
  return cartItems;
};

export const removeProductFromCart = (productID) => {
  if (localStorage.getItem("cart") !== null) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    const cart_items = cart.filter(
      (product) => product.ProductId !== productID
    );
    localStorage.setItem("cart", JSON.stringify(cart_items));
  }
};
export const getCartProducts = () => {
  if (localStorage.getItem("cart") === null) {
    return [];
  } else {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    return cartItems;
  }
};

export const getCartProductsTotal = () => {
  if (localStorage.getItem("cart") === null) {
    return 0;
  } else {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    return cartItems.length;
  }
};

export const deleteCartItems = () => {
  if (localStorage.getItem("cart") === null) {
  } else {
    localStorage.removeItem("cart");
  }
};

/////check it behuala
export const getCartProductData = (productID) => {
  if (localStorage.getItem("cart") === null) {
    return null;
  } else {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    console.log("cartItems", cartItems);
    const product_in_cart = cartItems.filter(
      (product) => product.ProductId === productID
    );

    if (product_in_cart.length >= 1) {
      return product_in_cart[0];
    } else {
      return null;
    }
  }
};

////find product
export const findProductInCart = (productID) => {
  // let inCart = false;
  if (localStorage.getItem("cart") === null) {
    return false;
  } else {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    const product_in_cart = cartItems.filter(
      (product) => product.ProductId === productID
    );
    if (product_in_cart.length >= 1) {
      return true;
    } else {
      return false;
    }
    // cartItems.map((product, index) => {
    //     if (product.ProductId === productID) {
    //         inCart = true;
    //     }
    //     return cartItems;
    // });
    // return inCart;
  }
};

function search(nameKey) {
  const myArray = JSON.parse(localStorage.getItem("cart"));
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].ProductId === nameKey) {
      return myArray[i];
    }
  }
}

export const getProductQuantity = (productID) => {
  if (localStorage.getItem("cart") === null) {
  } else {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems.length >= 1) {
      try {
        const res = search(productID);
        const quantity = res["product_pricing"]["Quantity"];
        return quantity;
      } catch (error) {
        return undefined;
      }
    }
  }
};

export const getProductPricing = (productID) => {
  if (localStorage.getItem("cart") === null) {
  } else {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems.length >= 1) {
      try {
        const { product_pricing } = search(productID);
        return product_pricing;
      } catch (error) {
        // let k = search(productID);
        return {};
      }
    }
  }
};

///check the total pricing
export const getCartTotalAmounts = (productList) => {
  if (productList.length < 1) {
    return { discounts: "0", sub_total: "0", total: "0" };
  } else {
    let discounts = 0;
    let sub_total = 0;
    let total = 0;
    if (productList.length >= 1) {
      productList.map((product, index) => {
        try {
          const { TotalDiscount, FinalPrice } = product.product_pricing;
          discounts += TotalDiscount;
          sub_total += FinalPrice;
          total += FinalPrice;
        } catch (error) {}
      });
    }
    return { discounts, sub_total, total };
  }
};

export const formatProductsToCheckout = () => {
  if (localStorage.getItem("cart") === null) {
    return [];
  } else {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    const products = cartItems.map((product) => {
      return {
        productId: `${product.ProductId}`,
        quantity: `${product["product_pricing"]["Quantity"]}`,
        subProductId: `${product.SubProductId}`,
      };
    });
    return products;
  }
};

////add enryption and decryption  function son us to hide the senstve data
export const getCartSubTotalAmounts = () => {
  if (localStorage.getItem("cart") === null) {
    return "0";
  } else {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    let total = 0;
    if (cartItems.length >= 1) {
      cartItems.map((product, index) => {
        try {
          const { FinalPrice } = product && product["product_pricing"];
          total += FinalPrice;
        } catch (error) {}
      });
    }
    return `${total}`;
  }
};
