import React, {Component} from 'react';
import BlackBoxAnimated from './BlackBoxAnimated';
import styled from 'styled-components';

const Wrapper = styled.div`

`;


const ImageBox = styled.div`
  width: 600px;
  height: 400px;
  background-image: url('https://cdn.shopify.com/s/files/1/0598/4081/products/Frenchie-Bulldog-Reversible-Duo-Harness-Magical-Unicorn-6.jpg?v=1542336257');
  background-size: cover;
  backgroud-position: center;
`;

class App extends Component {
  render(){
    return (
    <Wrapper>
      <ImageBox>
        <BlackBoxAnimated/>
      </ImageBox>
    </Wrapper>
    );
  }
}

export default App;
