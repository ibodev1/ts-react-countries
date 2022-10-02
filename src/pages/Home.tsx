import axios from "axios";
import React, { useState, useEffect } from "react";
import Country from "../components/Country";
import Layout from "../components/Layout";
import { CountryType } from "../types";

function Home() {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const getCountries = async () => {
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.com/v3.1/all"
      );
      setCountries(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getCountries();
  }, []);

  return (
    <Layout>
      {loading ? (
        <div>Loading..</div>
      ) : error ? (
        <div>Error!!</div>
      ) : countries && countries.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-auto gap-6">
          {countries.map((country, index) => (
            <Country key={index} data={country} />
          ))}
        </div>
      ) : null}
    </Layout>
  );
}

export default Home;
