"use client";
import { FormEvent, useState } from "react";
import "./NewsSubscriber.scss";
import {
  validationNewsLetter,
  handleChange,
  handleSubmit,
} from "@/utils/lib/zod";
import { SubscriberSuccess } from "@/components/modal";
import { useModal } from "@nextui-org/react";

type FormData = {
  email: string;
};

type IErrors = {
  email?: string;
};

const NewsSubscriber = () => {
  const [errors, setErrors] = useState<IErrors>({} as IErrors);
  const [formData, setFormData] = useState<FormData>({} as FormData);
  const { setVisible, bindings } = useModal();

  return (
    <>
      <form
        className="newsletter-form form"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          handleSubmit(
            form,
            setErrors,
            formData,
            validationNewsLetter,
            setVisible
          );
        }}
      >
        <fieldset className="newsletter-form__container">
          <div className="newsletter-form__col">
            <label htmlFor="email">E-mail address</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email@company.com"
              onChange={(e) => {
                handleChange(e, setFormData);
              }}
              className={errors?.email && "newsletter-form__input-error"}
            />
            {errors?.email && (
              <span className="newsletter-form__error">{errors.email}</span>
            )}
          </div>
        </fieldset>
        <button className="newsletter-form__submit" type="submit">
          Subscribe to monthly newsletter
        </button>
      </form>
      <SubscriberSuccess
        setVisible={setVisible}
        bindings={bindings}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  );
};

export { NewsSubscriber };
