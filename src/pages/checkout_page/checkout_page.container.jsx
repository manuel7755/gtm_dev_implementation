import React, { useEffect, useContext, useState, useCallback } from "react";
import "./checkout_page.styles.scss";

import { CartContext } from "../../Contexts/Cart";
import CheckoutStepper from "../../components/CheckoutStepper/CheckoutStepper.component";

import TagManager from "react-gtm-module";

const CheckoutPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const [cartProductsExist, setCartProductsExist] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (cart && cart.cartProducts && cart.cartProducts.length > 0) {
      setCartProductsExist(true);
    } else {
      setCartProductsExist(false);
    }
  }, [cart]);

  const checkoutStepListener = useCallback(
    (activeStep) => {
      const checkoutStepName =
        activeStep === 0
          ? "billing"
          : activeStep === 1
          ? "payment"
          : activeStep === 2
          ? "order_review"
          : "";

      setActiveStep(activeStep);

      if (checkoutStepName) {
        TagManager.dataLayer({
          dataLayer: {
            event: "checkout",
            checkout_info: {
              name: "checkout_" + checkoutStepName,
              step: activeStep + 1,
            },
            pageType: "checkout",
          },
        });
      }
    },
    [activeStep]
  );
  //change
  return (
    <div className="page_section checkout_page_container">
      {cartProductsExist || activeStep > 2 ? (
        <CheckoutStepper
          checkoutStepListener={checkoutStepListener}
          cart={cart}
          setCart={setCart}
        />
      ) : (
        <h1 style={{ marginTop: "5rem" }}>
          Your cart is empty! add products to cart before checking out
        </h1>
      )}
    </div>
  );
};

export default CheckoutPage;
