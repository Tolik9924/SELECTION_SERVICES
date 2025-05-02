import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "../Input/Input";

import styles from "./connectForm.module.css";
import { ButtonForm } from "../ButtonForm/ButtonForm";

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const botToken = "5562222512:AAHwhCRMXgpzP0AVNTPWK9U2ZhOUWznlB1U";
    const chatId = 385330221;
    const text = `New Form Submission:\nName: ${formData.name}\nMessage: ${formData.message}\nPhone: ${formData.phone}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.description || "Error sending message");
      }
    } catch (error) {
      console.error("Telegram API error:", error);
    }
  };

  console.log("FORM DATA NAME: ", formData.name.length);

  return (
    <div className={styles.connectContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Зв'язатися з стилістом</h2>
        <div className={styles.content}>
          <div className={styles.formItems}>
            <div className={styles.formItem}>
              {/* <label className={styles.label}>Name</label> */}
              <Input
                label="Ім'я"
                variant="primary"
                size="m"
                name="name"
                value={formData.name}
                handleChange={handleChange}
                fullWidth
                required
              />
            </div>
            <div className={styles.formItem}>
              {/* <label className={styles.label}>Phone</label> */}
              <Input
                label="Номер"
                size="m"
                name="phone"
                value={formData.phone}
                handleChange={handleChange}
                fullWidth
                error=""
                required
              />
            </div>

            <div className={styles.formItem}>
              {/* <label className={styles.label}>Message</label> */}
              <textarea
                placeholder="Коментар"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={styles.textarea}
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
              disabled={
                !(
                  formData.message.length > 0 &&
                  formData.name.length > 0 &&
                  formData.phone.length > 0
                )
              }
            >
              НАДІСЛАТИ
            </ButtonForm>
          </div>
        </div>
      </form>
    </div>
  );
};
