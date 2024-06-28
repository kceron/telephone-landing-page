import React from "react";
import { FileUploadInput } from "./FileUploadInput";
import "../../styles/stepFour.css";
import { SignUpFormType } from "./types";
import { useFormContext } from "react-hook-form";
import { FaInfoCircle } from "react-icons/fa";
import { Skeleton, Spin } from "antd";

type Props = {
  setStep: (step: number) => void;
  loading: boolean;
  error?: Error;
};

const StepFour = ({ setStep, loading, error }: Props) => {
  const {
    formState: { errors },
  } = useFormContext<SignUpFormType>();
  return (
    <>
      <div className="fields_box">
        <section className="field_header">
          <label
            htmlFor=""
            className="input_label question_label"
            style={{ padding: "0" }}
          >
            <h1>Work samples</h1>
          </label>
          <p>Upload or share a link for 2-3 samples of your artwork.</p>
        </section>
        <Skeleton loading={loading} paragraph={{ rows: 7 }}>
          <section className="files_upload_group">
            {[0, 1, 2].map((sample, i) => {
              return (
                <FileUploadInput
                  key={`sample_${sample}${i}`}
                  sampleId={sample}
                />
              );
            })}
            <section className="files_notice">
              <span style={{ padding: "0 12px " }}>
                <FaInfoCircle style={{ height: "4vw", width: "4vw" }} />
              </span>
              <p style={{ fontSize: "clamp(13px, 2vw, 1.5rem)" }}>
                Each file has a 20mb limit
              </p>
            </section>
          </section>
        </Skeleton>
      </div>
      {loading ? <Spin tip="Loading......" fullscreen /> : null}

      <div className="next_btn_box">
        <button className="main_btn" type="submit">
          Apply
        </button>
      </div>
    </>
  );
};

export default StepFour;
