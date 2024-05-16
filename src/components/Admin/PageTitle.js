import Button from "@mui/material/Button";

const PageTitle = ({ title, total, onPress, addible }) => {
  return (
    <div className="page_title_container">
      <h1>{title} Sayfası</h1>
      {total ? <h1>Toplam: {total}</h1> : null}
      {addible === true ? (
        <Button onClick={onPress} color="primary" variant="text">
          Ekle
        </Button>
      ) : null}
    </div>
  );
};

export default PageTitle;
