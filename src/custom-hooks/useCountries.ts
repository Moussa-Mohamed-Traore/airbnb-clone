import countries from "world-countries";

export interface Country {
  value: string;
  label: string;
  latlng: [number, number];
  region: string;
}

const formattedCountries: Country[] = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  latlng: country.latlng,
  region: country.region,
}));

const useCountries = () => {
  const getAllCountries = () => formattedCountries;

  const getByValue = (value: string) => {
    return formattedCountries.find((item) => item.value === value);
  };

  return { getAllCountries, getByValue };
};

export default useCountries;
