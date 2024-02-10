<script>
  import { loadScript } from "@paypal/paypal-js";
  import { onMount } from "svelte";
  export let cartTotal = 0.01;

  let isLoading = true;

  // sandbox
  // const CLIENT_ID =
  //   "AVnPr2rbx-Fp12BEWW2NJZecDHcx83aAO_vaEAKUogEFk4UqrmN5aqxQO_n0EuM2YMnEV-b1UaK3q1yK";
  
  // live
  const CLIENT_ID =
    "AeTCqW1pVqJVd6TMwArHeIPWo8_PeYmW9IxwLu5KxtvEqNEaMWhHM1ETsx2b_h1JHHdzu8VthSmoYcA8";

  onMount(async () => {
    const paypal = await loadScript({
      "client-id": CLIENT_ID,
      currency: "AUD",
    });

    paypal
      .Buttons({
        style: {
          color: "gold",
          shape: "pill",
        },
        createOrder: function (data, actions) {
          console.log("createOrder() -> ", data, actions);
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: cartTotal,
                },
              },
            ],
          });
        },
        onApprove: function (data, actions) {
          console.log("onApprove() -> ", data, actions);
          return actions.order.capture().then(function (details) {
            alert("Payment successful!");
          });
        },
        onError: function (err) {
          alert("Something went wrong");
          console.log("Something went wrong", err);
        },
      })
      .render("#paypal-button-container");

    isLoading = false;
  });
</script>

<div id="paypal-button-container"></div>
