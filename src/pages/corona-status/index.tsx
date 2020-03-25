import * as React from "react";
import { useParams } from "react-router";
import { getTotalCoronaData, getCoronaDataByCountry } from "../../functions";

export interface ICoronaStatusPageProps {}
interface RouteParams {
  country?: string;
}

function CoronaStatusPage(props: ICoronaStatusPageProps) {
  const { country } = useParams<RouteParams>();
  const [totalData, setTotalData] = React.useState();
  const [countryData, setCountryData] = React.useState();
  const fetchTotalData = async () => {
    const response = await getTotalCoronaData();
    setTotalData(response);
  };

  const fetchCountryData = async (selectedCountry: string) => {
    let str =
      selectedCountry.charAt(0).toUpperCase() +
      selectedCountry.slice(1).toLowerCase();
    console.log(str);
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
    <div>
      {totalData && totalData.totalDeaths} dd{" "}
      {countryData && countryData.totalDeaths}
    </div>
  );
}

const PureCoronaStatusPage = React.memo(CoronaStatusPage);
export { PureCoronaStatusPage as CoronaStatusPage };
