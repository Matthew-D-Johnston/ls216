"use strict";

function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

processOrder(100);      // 126.5


// Alternative implementation

function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}


// The edge case where these functions have unintended consequences is when one
// of the additional arguments is given the value 0. Since 0 evaluates to false,
// the conditional if statements will evaluate to true so that the argument is
// reassigned. In some cases, such as the discount, it won't matter, but for
// quantity, serviceCharge, and tax, the argument will be reassigned from the
// intended zero to some positive value.