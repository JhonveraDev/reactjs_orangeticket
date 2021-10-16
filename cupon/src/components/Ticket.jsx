import React, { useState, useRef } from "react";
import { Formik, Form } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import Register from "./Register";
import {
  Wrapper,
  ContentMain,
  StyledH4,
  ContentInput,
  ContentIcon,
  FieldInput,
  Error,
  Label,
  FieldBox,
  StyledU,
  Button,
  WrapperBox,
  StyledP,
  Span,
  Approved,
} from "../styles/Ticket";

const Ticket = () => {
  // let url = "https://www.ganaconprimax.com/registrarse";
  //FormSearched se utilizara cuando el codigo se valida
  const [formSearched, setFormSearched] = useState(false);
  const [captchaTrue, setcaptchaTrue] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [register, setRegister] = useState(false);
  const captcha = useRef(null);

  const onChange = () => {
    if (captcha.current.getValue()) {
      setcaptchaTrue(true);
      console.log("Captcha valido y Aceptado");
      //Acciones que se realizan luego de aceptar el Captcha
    }
  };

  const agreement = () => {
    setCheckbox(true);
    console.log("Terminos y condiciones aceptados");
  };

  const pageRegister = () => {
    setRegister(true);
    console.log("Cambio de Pagina a Register");
  };

  return (
    <>
      {register ? (
        <Register />
      ) : (
        <Formik
          initialValues={{
            email: "",
            document: "",
            code: "",
          }}
          validate={(valores) => {
            let errores = {};

            if (!valores.email) {
              errores.email = "Por Favor ingresa tu Correo Electrónico";
            }

            if (!valores.code) {
              errores.code = "Por Favor ingresa tu Codigo";
            }

            if (!valores.document) {
              errores.document = "Por Favor ingresa tu Documento C.C";
            }

            return errores;
          }}
          //Datos para enviar a la base de datos
          onSubmit={(valores, { resetForm }) => {
            if (captchaTrue && checkbox === true) {
              setFormSearched(true);
              console.log("Formulario Enviado");
              console.log(valores);
              setTimeout(() => setFormSearched(false), 4000);
              resetForm();
            }
          }}
        >
          {({ errors, touched }) => (
            <Form className="formulario">
              <Wrapper>
                <ContentMain>
                  <StyledH4>Correo electrónico:</StyledH4>
                  <ContentInput>
                    <ContentIcon>
                      <i className="far fa-envelope"></i>
                    </ContentIcon>
                    <FieldInput type="email" name="email" id="email" />
                  </ContentInput>
                  {touched.email && errors.email && (
                    <Error>{errors.email}</Error>
                  )}
                </ContentMain>

                <ContentMain>
                  <StyledH4>Documento:</StyledH4>
                  <ContentInput>
                    <ContentIcon>
                      <i className="far fa-user"></i>
                    </ContentIcon>
                    <FieldInput type="document" name="document" id="document" />
                  </ContentInput>
                  {touched.document && errors.document && (
                    <Error>{errors.document}</Error>
                  )}
                </ContentMain>
              </Wrapper>

              <Wrapper>
                <ContentMain>
                  <StyledH4>Por favor ingresa tu código:</StyledH4>
                  <ContentInput>
                    <ContentIcon>
                      <i className="fas fa-qrcode"></i>
                    </ContentIcon>
                    <FieldInput type="code" name="code" id="code" />
                  </ContentInput>
                  {touched.code && errors.code && <Error>{errors.code}</Error>}
                </ContentMain>

                <ContentMain>
                  <ReCAPTCHA
                    ref={captcha}
                    sitekey="6Lcq28gcAAAAAPFYz5vQEQO4rwP71-w10WcfD0eI"
                    onChange={onChange}
                  />
                </ContentMain>
              </Wrapper>

              <WrapperBox>
                <Label onChange={agreement}>
                  <FieldBox
                    type="checkbox"
                    name="agreement"
                    value="agreement"
                  />
                  <StyledP>
                    He leído y acepto los{" "}
                    <StyledU>Términos y condiciones</StyledU> de la promoción y
                    la{" "}
                    <StyledU>
                      Política de tratamiento de datos de Primax Colombia.
                    </StyledU>
                  </StyledP>
                </Label>
              </WrapperBox>

              <Wrapper>
                <ContentMain>
                  <Button type="submit">Registrar código</Button>
                  {formSearched ? <Approved>Ticket Aprovado</Approved> : null}
                </ContentMain>
                <ContentMain>
                  <Span onClick={pageRegister}>
                    ¿Aún no estás registrado?, Regístrate aquí
                  </Span>
                </ContentMain>
              </Wrapper>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default Ticket;
