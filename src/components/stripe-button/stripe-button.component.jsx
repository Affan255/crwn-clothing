import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const onToken = (token) => {
  console.log(token)
  alert('Payment Successful!!')
}

const StripeButton = ({ price }) => {
  const priceForStripe = 100 * price
  const publishableKey =
    'pk_test_51KRup6SHK2mT5dzZ6miffuxjIBJd1evYSi5wVMT2JNLqCzCyXhQrMCk7o43q9I5o0xO1KS6ZGhgODQiY5Qt4ZRrZ00NYo9n6Jb'
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton
