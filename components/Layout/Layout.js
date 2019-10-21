import Header from 'components/Header/Header';
import Flex from 'components/Flex/Flex';

function withLayout(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Header />
          <Flex padding="0 50px">
            <WrappedComponent />
          </Flex>
        </React.Fragment>
      );
    }
  }
}

export default withLayout;