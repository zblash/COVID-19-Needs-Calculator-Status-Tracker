import * as React from 'react';
import { getTotalCoronaData, getCoronaDataByCountry, TotalDataValue, CountryDataValue } from '~/functions';
import { useParams } from 'react-router';
import { Container } from '~/components/container';

interface RouteParams {
  country?: string;
}

const CoronaStatusPage: React.SFC = () => {
  const { country } = useParams<RouteParams>();
  const [totalData, setTotalData] = React.useState<TotalDataValue>();
  const [countryData, setCountryData] = React.useState<CountryDataValue>();
  const fetchTotalData = async () => {
    const response = await getTotalCoronaData();
    setTotalData(response);
  };

  const fetchCountryData = async (selectedCountry: string) => {
    const str = selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1).toLowerCase();
    const response = await getCoronaDataByCountry(str);
    setCountryData(response);
  };

  React.useEffect(() => {
    if (country) {
      fetchCountryData(country);
    }
    fetchTotalData();
  }, [country]);

  return (
    <Container title="COVID-19 status in world and specify country">
      <>
        {totalData && totalData.result.totalDeaths} dd
        {countryData && countryData.result[0].totalDeaths}
      </>
    </Container>
  );
};

const PureCoronaStatusPage = React.memo(CoronaStatusPage);

export { PureCoronaStatusPage as CoronaStatusPage };
