import React, { useState } from "react";
import { useForm } from "react-hook-form";
//Components
import Navbar from "../components/Home/navbar";
//Term
import Term from "../terms/Term";

const ContactScreen = ({ language, setLanguage }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      //TODO: send them to backend, maybe?

      // Display success alert
      toggleAlert("Başarıyla iletildi!", "success");
    } catch (e) {
      // Display error alert
      toggleAlert("Bir sorun oldu.", "danger");
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <div className="App">
      <Navbar term={true} />
      <div className="term_container">
        <div className="App1">
          <div className="container">
            <h1 className="text-center">Bize Ulaşın</h1>
            <div className="ContactForm">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <div className="contactForm">
                      <form
                        id="contact-form"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                      >
                        {/* Row 1 of form */}
                        <div className="row formRow">
                          <div className="col-6">
                            <input
                              type="text"
                              name="name"
                              {...register("name", {
                                required: {
                                  value: true,
                                  message: "Lütfen adınızı giriniz",
                                },
                                maxLength: {
                                  value: 30,
                                  message: "30 karakteri geçemez",
                                },
                              })}
                              className="form-control formInput"
                              placeholder="Ad"
                            ></input>
                            {errors.name && (
                              <span className="errorMessage">
                                {errors.name.message}
                              </span>
                            )}
                          </div>
                          <div className="col-6">
                            <input
                              type="email"
                              name="email"
                              {...register("email", {
                                required: true,
                                pattern:
                                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                              })}
                              className="form-control formInput"
                              placeholder="E-posta Adresi"
                            ></input>
                            {errors.email && (
                              <span className="errorMessage">
                                Lütfen geçerli bir e-posta adresi giriniz.
                              </span>
                            )}
                          </div>
                        </div>
                        {/* Row 2 of form */}
                        <div className="row formRow">
                          <div className="col">
                            <input
                              type="text"
                              name="subject"
                              {...register("subject", {
                                required: {
                                  value: true,
                                  message: "Lütfen konu giriniz",
                                },
                                maxLength: {
                                  value: 75,
                                  message: "Konu 75 karakteri geçemez",
                                },
                              })}
                              className="form-control formInput"
                              placeholder="Konu"
                            ></input>
                            {errors.subject && (
                              <span className="errorMessage">
                                {errors.subject.message}
                              </span>
                            )}
                          </div>
                        </div>
                        {/* Row 3 of form */}
                        <div className="row formRow">
                          <div className="col">
                            <textarea
                              rows={3}
                              name="message"
                              {...register("message", {
                                required: true,
                              })}
                              className="form-control formInput"
                              placeholder="Mesajınız"
                            ></textarea>
                            {errors.message && (
                              <span className="errorMessage">
                                Lütfen mesajınızı giriniz.
                              </span>
                            )}
                          </div>
                        </div>

                        <button
                          className="submit-btn btn"
                          disabled={disabled}
                          type="submit"
                        >
                          Gönder
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {alertInfo.display && (
                <div
                  className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
                  role="alert"
                >
                  {alertInfo.message}
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() =>
                      setAlertInfo({ display: false, message: "", type: "" })
                    } // Clear the alert when close button is clicked
                  ></button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
