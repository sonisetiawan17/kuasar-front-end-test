import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import Loader from '../../components/Loader';
import SearchBar from '../../components/SearchBar';
import NotFound from '../../components/NotFound';

import '../../styles/countries.css';

interface CountriesProps {
  name: string;
  code: string;
  capital: string;
  emoji: string;
  currency: string;
}

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
      capital
      emoji
      currency
    }
  }
`;

const Countries = () => {
  const { data, loading, error } = useQuery(LIST_COUNTRIES);
  const [search, setSearch] = useState('');

  const filteredCountries =
    data &&
    data.countries.filter((country: CountriesProps) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      <SearchBar value={search} onChange={handleSearch} />
      <div className="list_countries">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country: CountriesProps) => (
            <div key={country.code} className="country">
              <Link to={`/country/${country.code}`}>
                <div>
                  <h1 className="country_name">{country.name}</h1>
                  <p className="country_emoji">{country.emoji}</p>
                  <div className="country_information">
                    <p>
                      Capital :{' '}
                      {country.capital === null ? '-' : country.capital}
                    </p>
                    <p>
                      Currency :{' '}
                      {country.currency === null ? '-' : country.currency}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
};

export default Countries;
