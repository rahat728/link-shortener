import * as React from 'react';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Container />
      <Footer />
    </>
  )
};

export default App;
