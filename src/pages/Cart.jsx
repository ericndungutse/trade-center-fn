import React from 'react';
import CartItems from '../components/CartItems';
import Container from '../components/Container';
import PageLaout from '../components/PageLaout';

export default function Cart() {
  return (
    <PageLaout>
      <Container>
        <CartItems />
      </Container>
    </PageLaout>
  );
}
