import React, { useState, useEffect } from "react";
//Components
import PanelContainer from "../components/Layouts/PanelContainer";
import PageTitle from "../components/Admin/PageTitle";
import Table from "../components/Table";
import Loading from "../components/Loading";
//API
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const APIS = { get: "/get_all_users" };

const SupportsScreen = () => {
  const axiosPrivate = useAxiosPrivate();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  //Filters
  const [filteredData, setFilteredData] = useState([]);
  const [signFilter0, setSignFilter0] = useState("");
  const [signFilter1, setSignFilter1] = useState("");

  const values = [
    {
      title: "Ad",
      value: "name",
    },
    {
      title: "Soyad",
      value: "surname",
    },
    {
      title: "Telefon",
      value: "phone",
      is_phone: true,
    },
    {
      title: "Kayıt Tarihi",
      value: "created_at",
      is_birth: true,
      filter: {
        title: "Min Tarih",
        title1: "Max Tarih",
        state: signFilter0,
        setState: setSignFilter0,
        state1: signFilter1,
        setState1: setSignFilter1,
        type: "ages",
      },
    },
  ];

  useEffect(() => {
    const fetchDatas = async () => {
      setLoading(true);
      try {
        let parameters = {};
        const response = await axiosPrivate.post(
          APIS.get,
          JSON.stringify(parameters),
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        setLoading(false);
        if (response.status === 200) {
          setData(response.data.data);
        }
      } catch (err) {
        //alert(err);
        setLoading(false);
        // TODO: Errorhandling..
      }
    };

    fetchDatas();
  }, []);

  //FilterEffect
  useEffect(() => {
    if (signFilter0 === "" && signFilter1 === "") {
      setFilteredData(data);
    } else {
      let new_data = data;
      if (signFilter0 !== "") {
        new_data = new_data.filter(
          (i) =>
            parseInt(i.created_at.split("-")[0]) <
            parseInt(new Date().getFullYear()) - parseInt(signFilter0)
        );
      }
      if (signFilter1 !== "") {
        new_data = new_data.filter(
          (i) =>
            parseInt(i.created_at.split("-")[0]) >
            parseInt(new Date().getFullYear()) - parseInt(signFilter1)
        );
      }
      setFilteredData(new_data);
    }
  }, [data, signFilter0, signFilter1]);

  return (
    <PanelContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>Destekler burada olacak.</h1>
        </>
      )}
    </PanelContainer>
  );
};

export default SupportsScreen;
