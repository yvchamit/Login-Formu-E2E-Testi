import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Button,
  Label,
  Input,
  Card,
  CardBody,
  CardHeader,
  FormFeedback,
} from "reactstrap";


const initialValues = {
  email: "",
  password: "",
};

export const errMsg = {
  email: "Lütfen geçerli bir e-mail adresi giriniz.",
  password: "Parola en az 8 karakterden oluşmalı, büyük/küçük harf,\nrakam (0-9) ve özel semboller (örn: ?, !, @, #, %) içermelidir!",
};

let regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

export default function Login({ setUsername }) {

  const history = useHistory();


  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const [formData, setFormData] = useState(initialValues);
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const [isValid, setIsValid] = useState(false);

  useEffect (() => {
    if(validateEmail(formData.email) && regex.test(formData.password)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);
  
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name == "email") {
      if (validateEmail(value)) {
        ~setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    if (name == "password") {
      if (regex.test(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;
    setUsername(formData.email);
    history.push('/Success');
  };

  return (
    <Card>
      <CardHeader>Kayit Ol</CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="email">Email: </Label>
            <Input
              id="email"
              name="email"
              placeholder="mesela@ornek.com"
              type="email"
              onChange={handleChange}
              value={formData.email}
              invalid={errors.email}
              data-cy="email-input"
            />
            {errors.email && <FormFeedback data-cy="error-message">{errMsg.email}</FormFeedback>}
          </FormGroup>
          <FormGroup>
            <Label for="password">Password: </Label>
            <Input
              id="password"
              name="password"
              placeholder="Güçlü bir şifre belirleyiniz.."
              type="password"
              onChange={handleChange}
              value={formData.password}
              invalid={errors.password}
              data-cy="password-input"
            />
            {errors.password && <FormFeedback style={{ whiteSpace: "pre-line" }} data-cy="error-message">{errMsg.password}</FormFeedback>}
          </FormGroup>
          <FormGroup check>
            <Input type="checkbox" disabled={!isValid} onChange={(e) => setTerms(e.target.checked)} data-cy="terms-checkbox"/>{" "}
            <Label check>Şartları ve koşulları kabul ediyorum</Label>
          </FormGroup>
          <Button type="submit" disabled={!isValid || !terms} data-cy="submit-button">Kayit Ol</Button>
        </Form>
      </CardBody>
    </Card>
  );
}
