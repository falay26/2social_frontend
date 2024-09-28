import React, { useState, useEffect } from "react";
//Components
import PanelContainer from "../components/Layouts/PanelContainer";
import PageTitle from "../components/Admin/PageTitle";
import Table from "../components/Table";
import AddEdit from "../components/AddEdit";
import Loading from "../components/Loading";
//API
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const APIS = {
  get: "/get_all_categories",
  add: "/add_category",
  update: "/update_category",
  delete: "/delete_category",
  options: "/get_all_titles",
  options1: "/get_all_types",
};

const CategoriesScreen = () => {
  const axiosPrivate = useAxiosPrivate();

  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);
  const [options1, setOptions1] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const [id, setId] = useState();

  const [titleId, setTitleId] = useState("");
  const [typeId, setTypeId] = useState("");
  const [nameTR, setNameTR] = useState("");
  const [nameEN, setNameEN] = useState("");
  const [descriptionTR, setDescriptionTR] = useState("");
  const [descriptionEN, setDescriptionEN] = useState("");
  const [image, setImage] = useState("");
  const [step, setStep] = useState("");
  const [limit, setLimit] = useState("");

  useEffect(() => {
    fetchDatas();
    fetchOptions();
    fetchOptions1();
  }, [editOpen]);

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
      setLoading(false);
      // TODO: Errorhandling..
    }
  };

  const fetchOptions = async () => {
    try {
      let parameters = {};
      const response = await axiosPrivate.post(
        APIS.options,
        JSON.stringify(parameters),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        setOptions(response.data.data);
      }
    } catch (err) {
      // TODO: Errorhandling..
    }
  };

  const fetchOptions1 = async () => {
    try {
      let parameters = {};
      const response = await axiosPrivate.post(
        APIS.options1,
        JSON.stringify(parameters),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        setOptions1(response.data.data);
      }
    } catch (err) {
      // TODO: Errorhandling..
    }
  };

  const handleAdd = async () => {
    setLoading(true);
    try {
      let parameters = {
        title_id: titleId,
        type_id: typeId,
        name: {
          tr: nameTR,
          en: nameEN,
        },
        description: {
          tr: descriptionTR,
          en: descriptionEN,
        },
        image: image,
        step_number: step,
        daily_limit: limit,
      };
      const response = await axiosPrivate.post(
        APIS.add,
        JSON.stringify(parameters),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        setEditOpen(false);
        fetchDatas();
      }
    } catch (err) {
      setLoading(false);
      alert("Bir sorun oluştu, lütfen tekrar deneyiniz.");
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      let parameters = {
        category_id: id,
        title_id: titleId,
        type_id: typeId,
        name: {
          tr: nameTR,
          en: nameEN,
        },
        description: {
          tr: descriptionTR,
          en: descriptionEN,
        },
        image: image,
        step_number: step,
        daily_limit: limit,
      };
      const response = await axiosPrivate.post(
        APIS.update,
        JSON.stringify(parameters),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        setEditOpen(false);
        fetchDatas();
      }
    } catch (err) {
      setLoading(false);
      alert("Bir sorun oluştu, lütfen tekrar deneyiniz.");
    }
  };

  const deleteHandler = async () => {
    setLoading(true);
    try {
      let parameters = {
        category_id: id,
      };
      const response = await axiosPrivate.post(
        APIS.delete,
        JSON.stringify(parameters),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        fetchDatas();
      }
    } catch (err) {
      setLoading(false);
      alert("Bir sorun oluştu, lütfen tekrar deneyiniz.");
    }
  };

  const resetValues = (item) => {
    if (item !== undefined) {
      setId(item._id);
    }
    setTitleId(item === undefined ? "" : item.title_id);
    setTypeId(item === undefined ? "" : item.type_id);
    setNameTR(item === undefined ? "" : item.name.tr);
    setNameEN(item === undefined ? "" : item.name.en);
    setDescriptionTR(item === undefined ? "" : item.description.tr);
    setDescriptionEN(item === undefined ? "" : item.description.en);
    setImage(item === undefined ? "" : item.image);
    setStep(item === undefined ? "" : item.step_number);
    setLimit(item === undefined ? "" : item.daily_limit);
  };

  const values = [
    {
      title: "Resim",
      value: "image",
      is_category_image: true,
      type: "imageinput",
      state: image,
      setState: setImage,
    },
    {
      title: "Üst Başlık",
      value: "title_id",
      is_title: true,
      type: "choiceinput",
      state: titleId,
      setState: setTitleId,
      options: options,
      option_title: "name.tr",
    },
    {
      title: "Tür",
      value: "type_id",
      is_type: true,
      type: "choiceinput",
      state: typeId,
      setState: setTypeId,
      options: options1,
      option_title: "name.tr",
    },
    {
      title: "İsim (Türkçe)",
      value: "name.tr",
      type: "textinput",
      state: nameTR,
      setState: setNameTR,
    },
    {
      title: "İsim (İngilizce)",
      value: "name.en",
      not_visible: true,
      type: "textinput",
      state: nameEN,
      setState: setNameEN,
    },
    {
      title: "İçerik (Türkçe)",
      value: "description.tr",
      type: "textinput",
      state: descriptionTR,
      setState: setDescriptionTR,
    },
    {
      title: "İçerik (İngilizce)",
      value: "description.en",
      not_visible: true,
      type: "textinput",
      state: descriptionEN,
      setState: setDescriptionEN,
    },
    {
      title: "Adım Sayısı",
      value: "step_number",
      type: "textinput",
      state: step,
      setState: setStep,
    },
    {
      title: "Günlük Limit",
      value: "daily_limit",
      type: "textinput",
      state: limit,
      setState: setLimit,
    },
    {
      title: "Oluştulma Tarihi",
      value: "created_at",
      is_birth: true,
    },
    {
      title: "Kişiler",
      value: "owners",
      is_array: true,
    },
    {
      title: "Düzenle/Sil",
      value: null,
      is_edit: true,
    },
  ];

  return (
    <PanelContainer>
      {loading ? (
        <Loading />
      ) : editOpen ? (
        <AddEdit
          goBack={() => {
            setEditOpen(false);
          }}
          values={values}
          edit={edit}
          onEditPress={handleAdd}
          onUpdatePress={handleUpdate}
        />
      ) : (
        <>
          <PageTitle
            title={"Kategoriler"}
            addible={true}
            total={data.length}
            onPress={() => {
              resetValues();
              setEdit(true);
              setEditOpen(true);
            }}
          />
          <Table
            values={values}
            data={data}
            loading={false}
            onEdit={(item) => {
              resetValues(item);
              setEdit(false);
              setEditOpen(true);
            }}
            onDelete={deleteHandler}
            setId={setId}
          />
        </>
      )}
    </PanelContainer>
  );
};

export default CategoriesScreen;
