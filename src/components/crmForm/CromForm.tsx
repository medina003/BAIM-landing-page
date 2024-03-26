import { Button } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import styles from "./crmForm.module.css";

interface FormErrors {
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const CrmForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurame] = useState("");
  const [email, setEmail] = useState("");
  const initialCountryCode = "+994";
  const [phone, setPhone] = useState(initialCountryCode);
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (count != 0) {
      validateForm();
      console.log(phone);
    }
  }, [name, surname, email, phone, message, count]);

  const validateForm = () => {
    let newErrors: FormErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneNumberRegex =
      /^(?:\+994\s?)?(?:50|51|55|70|77)\s?\d{3}-\d{2}-\d{2}$/;

    if (!name) {
      newErrors.name = "Необходимо заполнить «Имя»";
    }
    if (!surname) {
      newErrors.surname = "Необходимо заполнить «Фамилия»";
    }
    if (!message) {
      newErrors.message = "Необходимо заполнить «Комментарий»";
    }

    if (!email) {
      newErrors.email = "Необходимо заполнить «E-mail»";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Введите правильный E-mail";
    }

    if (phone.length < 5) {
      newErrors.phone = "Необходимо заполнить «Номер телефона»";
    } else if (phone.length !== 17 || !phoneNumberRegex.test(phone)) {
      newErrors.phone = "Введите правильный номер телефона";
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  const handleSubmit = () => {
    setCount((prevCount) => prevCount + 1);
    if (isFormValid) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };
  const handlevalueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = "+" + value;
    if (!value.startsWith("+994")) {
      if (value.length > 4) {
        value = "+994" + phone.substring(5);
      } else if (phone.length === 4) {
        value = "+994";
      }
    }

    if (value.length >= 4) {
      value = value.replace(/^(\+\d{3})?(\d{1,2})/, (_, prefix, rest) => {
        return prefix ? prefix + " " + rest : rest;
      });
    }

    if (value.length >= 7) {
      value = value.replace(
        /^(\+\d{3}\s\d{2})?(\d{1,3})/,
        (_, prefix, rest) => {
          return prefix ? prefix + " " + rest : rest;
        }
      );
    }

    if (value.length >= 10) {
      value = value.replace(
        /^(\+\d{3}\s\d{2}\s\d{3})?(\d{1,2})/,
        (_, prefix, rest) => {
          return prefix ? prefix + "-" + rest : rest;
        }
      );
    }

    if (value.length >= 13) {
      value = value.replace(
        /^(\+\d{3}\s\d{2}\s\d{3}-\d{2})?(\d{1,2})/,
        (_, prefix, rest) => {
          return prefix ? prefix + "-" + rest : rest;
        }
      );
    }

    setPhone(value.substring(0, 17));
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.form}>
          <div className={styles.headings}>
            <h1 className={styles.heading}>Обратная связь</h1>
            <div className={styles.subheadingContainer}>
              <h3 className={styles.subHeading}>
                Поделитесь мнением о нашей работе или задайте нам любой
                интересующий вас вопрос в поле комментарий
              </h3>
            </div>
          </div>
          <div className={styles.inputs}>
            <div className={styles.box}>
              <input
                className={styles.value}
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div className={styles.box}>
              <input
                className={styles.value}
                placeholder="Фамилия"
                value={surname}
                onChange={(e) => setSurame(e.target.value)}
              />
              {errors.surname && (
                <p className={styles.error}>{errors.surname}</p>
              )}
            </div>
            <div className={styles.box}>
              <input
                className={styles.value}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
            <div className={styles.box}>
              <input
                className={styles.value}
                value={phone}
                type="tel"
                pattern="[0-9]*"
                onChange={handlevalueChange}
              />
              {errors.phone && <p className={styles.error}>{errors.phone}</p>}
            </div>
          </div>
          <div className={styles.box1}>
            <textarea
              className={styles.comment}
              value={message}
              placeholder="Комментарий"
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && (
              <p className={styles.errorComment}>{errors.message}</p>
            )}
          </div>

          <label className={styles.terms}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <text>I accept the Terms and Conditions</text>
          </label>
          <button
            className={styles.button}
            disabled={!isChecked}
            onClick={handleSubmit}
          >
            Отправить
          </button>
        </div>
        {/* {errors.acceptTerms && <p>{errors.acceptTerms.message}</p>} */}
        {/* <button
          className={styles.button}
          disabled={!isChecked}
          onClick={handleSubmit}
        >
          Submit
        </button> */}
      </div>
    </div>
  );
};

// const styles: { [key: string]: React.CSSProperties } = {
//   container: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     minHeight: "100vh",
//     backgroundColor: "#f0f0f0",
//   },
//   heading: {
//     fontWeight: "bold",
//     fontSize: "25px",
//     color: "green",
//     textAlign: "center",
//   },
//   subHeading: {
//     fontWeight: "bold",
//     fontSize: "25px",
//     textAlign: "center",
//   },
//   form: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//     width: "100%",
//     maxWidth: "400px",
//     margin: "0 auto",
//   },
//   value: {
//     width: "100%",
//     padding: "12px",
//     marginBottom: "12px",
//     border: "1px solid #ccc",
//     borderRadius: "10px",
//     fontSize: "16px",
//     transition: "border-color 0.2s ease",
//     color: "black",
//   },
//   button: {
//     backgroundColor: "green",
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: "16px",
//     padding: "12px",
//     border: "none",
//     borderRadius: "10px",
//     cursor: "pointer",

//     width: "40%",
//     transition: "opacity 0.2s ease",
//   },
// };

export default CrmForm;
