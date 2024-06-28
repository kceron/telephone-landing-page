import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { SignUpFormType } from "./types";
import { CONTACT_EMAIL } from "../EmailAnchor";
import Modal from "antd/es/modal/Modal";
import { PrimaryButton } from "../PrimaryButton";

const ALERT_TEXT = `If you continue to see this message please contact ${CONTACT_EMAIL} for help.`;

const SignUpForm = ({ step, setStep }) => {
  const formMethods = useForm<SignUpFormType>({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      country: "",
      city: "",
      city_lat: 0,
      city_long: 0,
      home_country: "",
      home_city: "",
      home_city_lat: 0,
      home_city_long: 0,
      artForm: "",
      abstract: "0",
      samples: [
        { name: "Sample 1", file: null, mediaLink: "" },
        { name: "Sample 2", file: null, mediaLink: "" },
        { name: "Sample 3", file: null, mediaLink: "" },
      ],
    },
    mode: "onTouched",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const csrfcookie = function () {
    // for django csrf protection
    let cookieValue = "",
      name = "csrftoken";
    if (document.cookie && document.cookie !== "") {
      let cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) == name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };

  const submitForm: SubmitHandler<SignUpFormType> = values => {
    setLoading(true);
    const csrf_token = csrfcookie();
    const formData = new FormData();

    formData.append("email", values.email);
    formData.append("first_name", values.firstName);
    formData.append("last_name", values.lastName);
    formData.append("country", values.country);
    formData.append("city", values.city);
    formData.append("city_lat", values.city_long.toString());
    formData.append("city_long", values.city_long.toString());
    if (values.home_country) {
      formData.append("home_country", values.home_country);
    }
    if (values.home_city) {
      formData.append("home_city", values.home_city);
    }
    if (values.home_city_lat) {
      formData.append("home_city", values.home_city_lat.toString());
    }
    if (values.home_city_long) {
      formData.append("home_city", values.home_city_long.toString());
    }
    formData.append("art_form", values.artForm.substring(0, 2).toUpperCase());
    formData.append("abstractness", values.abstract);

    values.samples.forEach((sample, i) => {
      sample.file
        ? formData.append(`file_${i + 1}`, sample.file)
        : formData.append(`link_${i + 1}`, sample.mediaLink);
    });

    fetch("/", {
      method: "POST",
      headers: {
        "X-CSRFToken": csrf_token,
      },
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok, status: ${response.status}`
          );
        }
        return response.json();
      })
      .then(data => {
        console.log("success... data--", data);
        setStep(5);
      })
      .catch(error => {
        // what do we want to do with the error?
        setError(error);
        setIsModalOpen(true);
      })
      .finally(() => setLoading(false));
  };

  return (
    <FormProvider {...formMethods}>
      <Modal
        title="Oops! Looks like something went wrong."
        open={isModalOpen}
        closable={false}
        centered
        footer={
          <PrimaryButton
            onClick={() => {
              setIsModalOpen(false);
            }}
            text={"OK"}
          />
        }
      >
        {ALERT_TEXT}
      </Modal>
      <form
        className="sign_up_form"
        onSubmit={formMethods.handleSubmit(submitForm)}
      >
        {step === 1 ? (
          <StepOne setStep={setStep} />
        ) : step === 2 ? (
          <StepTwo setStep={setStep} />
        ) : step === 3 ? (
          <StepThree setStep={setStep} />
        ) : step === 4 ? (
          <StepFour setStep={setStep} loading={loading} error={error} />
        ) : // : step === 5 ? (
        //   <FinalCard displayFaq={displayFaq} setDisplayFaq={setDisplayFaq} />
        // )
        null}
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
