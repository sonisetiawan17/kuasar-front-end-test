import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import Loader from '../../components/Loader';
import Container from '../../components/Container';
import Breadcrumb from '../../components/Breadcrumb';

import '../../styles/country-detail.css';

interface CountriesProps {
  name: string;
  code: string;
  capital: string;
  emoji: string;
  currency: string;
  language: string;
}

const COUNTRIES = gql`
  {
    countries {
      name
      code
      capital
      emoji
      currency
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;

const CountryDetail = () => {
  const params = useParams();
  const { data, loading, error } = useQuery(COUNTRIES);

  const country =
    data &&
    data.countries.find(
      (country: CountriesProps) => country.code === params.id
    );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Container>
      <Breadcrumb name={country.name} />
      <div className="country_detail">
        <h1>{country.name}</h1>
        <div className="country_detail_information">
          <p>
            Capital : <span>{country.capital}</span>
          </p>
          <p>
            Currency : <span>{country.capital}</span>
          </p>
          <p>
            Languages :{' '}
            <span>
              {country.languages.map(
                (language: CountriesProps) => language.name
              )}
            </span>
          </p>
          <p>
            Continent : <span>{country.continent.name}</span>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default CountryDetail;
