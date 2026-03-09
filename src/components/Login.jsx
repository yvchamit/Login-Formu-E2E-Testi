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
} from "reactstrap";

export default function Login() {

  return (
    <Card>
      <CardHeader>Kayit Ol</CardHeader>
      <CardBody>
        <Form>
          <FormGroup>
            <Label for="email">Email: </Label>
            <Input
              id="email"
              name="email"
              placeholder="mesela@ornek.com"
              type="email"

            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password: </Label>
            <Input
              id="password"
              name="password"
              placeholder="Güçlü bir şifre belirleyiniz.."
              type="password"

            />
          </FormGroup>
          <FormGroup check>
            <Input type="checkbox" />{" "}
            <Label check>Şartları ve koşulları kabul ediyorum</Label>
          </FormGroup>
          <Button type="submit">Kayit Ol</Button>
        </Form>
      </CardBody>
    </Card>
  );
}
