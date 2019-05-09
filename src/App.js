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
  componentWillMount(){
    animationNumber: 1
  }
  setTimeout(this.startNextAnimation, 500);
  setTimeout(this.startNextAnimation, 1000);
  setTimeout(this.startNextAnimation, 1500);
}
  startNextAnimation = () => {
    this.setState({
      animationNumber: this.state.animationNumber + 1,
    })
  }

  render(){
    const {
      animationNumber,
    } = this.state;

    return (
    <Wrapper>
      <ImageBox>
        <BlackBoxAnimated
          heightPercentage={10}
          reverseDirection={false}
          startAnimation={animationNumber > 1}
          />
        <BlackBoxAnimated
          heightPercentage={10}
          reverseDirection={true}
          startAnimation={animationNumber > 2}
          />
        <BlackBoxAnimated
          heightPercentage={10}
          reverseDirection={false}
          startAnimation={animationNumber > 3}
          />
        <BlackBoxAnimated
          heightPercentage={10}
          reverseDirection={true}
          startAnimation={animationNumber > 4}
          />
      </ImageBox>
    </Wrapper>
    );
  }
}

export default App;
