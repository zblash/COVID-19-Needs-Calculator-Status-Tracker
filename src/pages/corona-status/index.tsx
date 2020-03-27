import * as React from 'react';
import { getTotalCoronaData, CoronaTotalData, CountryCoronaData } from '~/functions';
import { useParams } from 'react-router';
import { Container } from '~/components/container';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface RouteParams {
  country?: string;
}

const StyledCard = styled.div`
  width: 30%;
  float: left;
  margin: 5px 1% 20px 1%;
  border-radius: 8px;
  background-image: -webkit-linear-gradient(90deg, #3f5efb 0%, #fc466b 100%);
  > h2 {
    font-weight: 300;
    color: #fff;
    font-size: 36px;
    line-height: 1;
    margin-bottom: 10px;
  }
  > p {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const StyledWrapper = styled.div`
  width: 96%;
  padding: 2%;
  text-align: center;
`;
const StyledTable = styled.table`
  padding: 10px 0 10px 0;
  border-radius: 8px;
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: #261da8;
  color: #fff;
  > th,
  td {
    text-align: center;
    padding: 8px;
  }
`;

const StyledLink = styled(NavLink)`
  color: #fff;
  cursor: pointer;
  text-decoration: underline;
`;

const CoronaStatusPage: React.SFC = () => {
  const { country } = useParams<RouteParams>();
  const [totalData, setTotalData] = React.useState<CoronaTotalData>();
  const [countryData, setCountryData] = React.useState<CountryCoronaData>();
  const countries = ['Italy', 'United States of America', 'Turkey', 'China', 'Germany', 'France', 'Iran'];

  const getCountryData = (totalData: CoronaTotalData, countryName: string) => {
    return totalData.results.find(country => country.provinceEnglishName === countryName);
  };

  const fetchTotalData = React.useCallback(async (countryName: string) => {
    const response = await getTotalCoronaData();
    if (response && response.success) {
      setTotalData(response);
      setCountryData(getCountryData(response, countryName));
    }
  }, []);

  React.useEffect(() => {
    fetchTotalData(country ? country : 'Turkey');
  }, [country, fetchTotalData]);
  return (
    <Container title="COVID-19 status in world and specify country">
      <StyledWrapper>
        {countryData && (
          <>
            <h1>{countryData.provinceEnglishName}&apos;s COVID-19 Status</h1>
            <StyledCard>
              <h2>{countryData.confirmedCount}</h2>
              <p>Confirmed Case</p>
            </StyledCard>
            <StyledCard>
              <h2>{countryData.curedCount}</h2>
              <p>Cured Count</p>
            </StyledCard>
            <StyledCard>
              <h2>{countryData.deadCount}</h2>
              <p>Death Count</p>
            </StyledCard>
          </>
        )}
        <h1>World&apos;s COVID-19 Status</h1>
        <StyledTable>
          <thead>
            <tr>
              <th>Country</th>
              <th>Confirmed Case</th>
              <th>Confirmed Deaths</th>
            </tr>
          </thead>
          <tbody>
            {totalData &&
              totalData.success &&
              totalData.results
                .filter(country => countries.includes(country.provinceEnglishName))
                .map(country => (
                  <tr key={country.countryEnglishName}>
                    <td>
                      <StyledLink to={`/status/${country.countryEnglishName}`}>{country.countryEnglishName}</StyledLink>
                    </td>
                    <td>{country.confirmedCount}</td>
                    <td>{country.deadCount}</td>
                  </tr>
                ))}
          </tbody>
        </StyledTable>
      </StyledWrapper>
    </Container>
  );
};

const PureCoronaStatusPage = React.memo(CoronaStatusPage);

export { PureCoronaStatusPage as CoronaStatusPage };
