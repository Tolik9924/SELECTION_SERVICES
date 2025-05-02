import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Input } from "../Input/Input";

import styles from "./connectForm.module.css";
import { ButtonForm } from "../ButtonForm/ButtonForm";
import {
  NAME_ERROR_MESSAGE,
  PHONE_ERROR_MESSAGE,
} from "./constants/error-messages";
import { CHAT_ID, URL_TG } from "./constants/telegram-data";
import { NAME_REG, PHONE_REG } from "./constants/regs";

interface FormData {
  name: string;
  phone: string;
  message: string;
}

export const ConnectForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  });

  const [errorForm, setErrorForm] = useState({
    name: "",
    phone: "",
  });

  const validateField = (field: string, regex: RegExp) => {
    return regex.test(field);
  };

  const disabledButton = !(
    validateField(formData.name, NAME_REG) &&
    validateField(formData.phone, PHONE_REG)
  );

  useEffect(() => {
    const newErrors = { ...errorForm };

    if (formData.name && !validateField(formData.name, NAME_REG)) {
      newErrors.name = NAME_ERROR_MESSAGE;
    } else {
      newErrors.name = "";
    }

    if (formData.phone && !validateField(formData.phone, PHONE_REG)) {
      newErrors.phone = PHONE_ERROR_MESSAGE;
    } else {
      newErrors.phone = "";
    }

    setErrorForm(newErrors);
  }, [formData.name, formData.phone]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const text = `New Form Submission:\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;

    try {
      const res = await fetch(URL_TG, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
        }),
      });

      const data = await res.json();
      setFormData({
        name: "",
        phone: "",
        message: "",
      });

      if (!res.ok) {
        throw new Error(data.description || "Error sending message");
      }
    } catch (error) {
      console.error("Telegram API error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Зв'язатися з стилістом</h2>
      <div className={styles.content}>
        <div className={styles.formItems}>
          <div className={styles.formItem}>
            <Input
              label="Ім'я"
              variant="primary"
              size="m"
              name="name"
              value={formData.name}
              handleChange={handleChange}
              fullWidth
              error={errorForm.name}
              required
            />
          </div>
          <div className={styles.formItem}>
            {/* <label className={styles.label}>+38</label> */}
            <Input
              type="number"
              label="+38"
              size="m"
              name="phone"
              value={formData.phone}
              handleChange={handleChange}
              fullWidth
              error={errorForm.phone}
              required
            />
          </div>

          <div className={styles.formItem}>
            <textarea
              className={styles.textarea}
              placeholder="Коментар"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
            ></textarea>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <ButtonForm
            type="submit"
            size="l"
            variant="secondary"
            onclick={handleSubmit}
            fullWidth
            disabled={disabledButton}
          >
            НАДІСЛАТИ
          </ButtonForm>
        </div>
      </div>
    </form>
  );
};
