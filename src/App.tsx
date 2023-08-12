import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Countries from './pages/home/Countries';
import Navbar from './components/Navbar';
import CountryDetail from './pages/detail/CountryDetail';
import Container from './components/Container';
import NotFoundPage from './components/404Page';

import './App.css';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com/',
  });

  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="/country/:id" element={<CountryDetail />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ApolloProvider>
  );
}

export default App;
