import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "../Input/Input";

import styles from "./connectForm.module.css";

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add API call or other submission logic here
  };

  return (
    <div className={styles.connectContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <div className={styles.content}>
          <div className={styles.formItems}>
            <div className={styles.formItem}>
              <label className={styles.label}>Name</label>
              <Input
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
              <label className={styles.label}>Phone</label>
              <Input
                size="m"
                type="phone"
                name="phone"
                value={formData.phone}
                handleChange={handleChange}
                fullWidth
                required
              />
            </div>

            <div className={styles.formItem}>
              <label className={styles.label}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border rounded-lg px-3 py-2"
                required
              ></textarea>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
