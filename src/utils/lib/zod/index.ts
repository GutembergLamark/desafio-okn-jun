"use client";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from "react";
import { z } from "zod";

export type FormData = {
  email: string;
};

type IErrors = {
  email?: string;
};

export const validationNewsLetter = z.object({
  email: z
    .string({
      required_error: "E-mail is required",
    })
    .email({ message: "Please enter a valid email address" })
    .nonempty({ message: "E-mail is required" }),
});

const handleChange = (
  e: ChangeEvent<HTMLInputElement>,
  setFormData: Dispatch<SetStateAction<FormData>>
) => {
  const { name, value } = e.target;
  setFormData((prevData: FormData | any) => ({
    ...prevData,
    [name]: value,
  }));
};

const handleSubmit = async (
  setErrors: Dispatch<SetStateAction<IErrors>>,
  formData: FormData,
  validation: z.ZodObject<{}>,
  setVisible: Dispatch<SetStateAction<boolean>> | null = null
) => {
  try {
    const validatedData = await validation.spa(formData);

    if (validatedData.success) {
      setVisible && setVisible(true);

      setErrors({});
    }

    if (!validatedData.success) {
      validatedData.error.issues.forEach((error: any) => {
        const { path, message } = error;

        setErrors({
          [path[0]]: message,
        });
      });
    }
  } catch (error: any) {
    console.log(error);
  }
};

export { handleChange, handleSubmit };
