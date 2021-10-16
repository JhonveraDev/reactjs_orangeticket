import React, { useState, useRef } from "react";
import { Formik, Form } from "formik";
import ReCAPTCHA from "react-google-recaptcha";

import {
  Wrapper,
  ContentMain,
  H4,
  ContentInput,
  FieldInput,
  Error,
  ContentSelect,
  FieldSelect,
  FieldDoc,
  FieldSelectVehicle,
  Label,
  FieldBox,
  StyledP,
  StyledU,
  WrapperBox,
  Button,
  ContentMainBox,
  Approved,
} from "../styles/Register";

const Register = () => {
  const [captchaTrue, setcaptchaTrue] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [tipoDoc, setTipoDoc] = useState(false);
  const [vehicle, setVehicle] = useState(false);
  const [gasoline, setGasoline] = useState(false);
  const [department, setDepartment] = useState(false);
  const [city, setCity] = useState(false);
  const [formSearched, setFormSearched] = useState(false);
  const captcha = useRef(null);

  const documentChange = (e) => {
    if (e.target.value === "disabled") {
      console.log("Valor no Permitido");
    } else {
      setTipoDoc(true);
    }
    //Se crea el estado lo pasa a positivo y asi se hace con los otros, luego comprueba todos los datos y realiza el ingreso
    //Si value es disabled entonces no gestiona el ingreso y colocar las letricas pequeñas debajo diciendo el error (Gestionar estados)
  };

  const vehicleChange = (e) => {
    if (e.target.value === "disabled") {
      console.log("Valor no Permitido");
    } else {
      console.log(e.target.value);
      setVehicle(true);
    }
  };

  const gasolineChange = (e) => {
    if (e.target.value === "disabled") {
      console.log("Valor no Permitido");
    } else {
      console.log(e.target.value);
      setGasoline(true);
    }
  };

  const departmentChange = (e) => {
    if (e.target.value === "disabled") {
      console.log("Valor no Permitido");
    } else {
      console.log(e.target.value);
      setDepartment(true);
    }
  };

  const cityChange = (e) => {
    if (e.target.value === "disabled") {
      console.log("Valor no Permitido");
    } else {
      console.log(e.target.value);
      setCity(true);
    }
  };

  const onChange = () => {
    if (captcha.current.getValue()) {
      setcaptchaTrue(true);
      console.log("Captcha valido y Aceptado");
    }
  };

  const agreement = () => {
    setCheckbox(true);
    console.log("Terminos y condiciones aceptados");
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          emailConfirm: "",
          nameUser: "",
          lastName: "",
          document: "",
          mobile: "",
        }}
        validate={(valores) => {
          let errores = {};

          if (!valores.email) {
            errores.email = "Por favor ingresa tú Correo Electrónico";
          }

          if (!valores.document) {
            errores.document = "Por favor ingresa tú Documento C.C";
          }

          if (!valores.emailConfirm) {
            errores.emailConfirm =
              "Por favor ingresa la confirmación de tú Correo Electrónico ";
          }

          if (!valores.nameUser) {
            errores.nameUser = "Por favor ingresa tú Nombre";
          }

          if (!valores.lastName) {
            errores.lastName = "Por favor ingresa tú Apellido";
          }

          if (!valores.mobile) {
            errores.mobile = "Por favor ingresa tú Número de Celular";
          }

          return errores;
        }}

        //Datos para enviar a la base de datos
        onSubmit={(valores, { resetForm }) => {
          if (captchaTrue && checkbox && tipoDoc && vehicle && gasoline && department && city === true) {
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
                <H4>Correo electrónico:</H4>
                <ContentInput>
                  <FieldInput type="email" name="email" id="email" />
                </ContentInput>
                {touched.email && errors.email && <Error>{errors.email}</Error>}
              </ContentMain>
              <ContentMain>
                <H4>Confirmar correo electrónico:</H4>
                <ContentInput>
                  <FieldInput
                    type="email"
                    name="emailConfirm"
                    id="emailConfirm"
                  />
                </ContentInput>
                {touched.emailConfirm && errors.emailConfirm && (
                  <Error>{errors.emailConfirm}</Error>
                )}
              </ContentMain>
            </Wrapper>

            <Wrapper>
              <ContentMain>
                <H4>Nombre:</H4>
                <ContentInput>
                  <FieldInput type="text" name="nameUser" id="nameUser" />
                </ContentInput>
                {touched.nameUser && errors.nameUser && (
                  <Error>{errors.nameUser}</Error>
                )}
              </ContentMain>
              <ContentMain>
                <H4>Apellidos:</H4>
                <ContentInput>
                  <FieldInput type="text" name="lastName" id="lastName" />
                </ContentInput>
                {touched.lastName && errors.lastName && (
                  <Error>{errors.lastName}</Error>
                )}
              </ContentMain>
            </Wrapper>

            <Wrapper>
              <ContentMain>
                <H4>Documento:</H4>
                <ContentSelect>
                  <FieldSelect as="select" id="ident" onChange={documentChange}>
                    <option value="disabled">Select</option>
                    <option value="cc">CC</option>
                    <option value="ce">CE</option>
                    <option value="pa">PA</option>
                  </FieldSelect>
                  <FieldDoc
                    type="number"
                    name="document"
                    id="document"
                    placeholder="Número de Documento"
                  />
                </ContentSelect>
                {touched.document && errors.document && (
                  <Error>{errors.document}</Error>
                )}
              </ContentMain>
              <ContentMain>
                <H4>Celular:</H4>
                <ContentInput>
                  <FieldInput name="mobile" id="mobile" />
                </ContentInput>
                {touched.mobile && errors.mobile && (
                  <Error>{errors.mobile}</Error>
                )}
              </ContentMain>
            </Wrapper>
            <Wrapper>
              <ContentMain>
                <H4>Tipo de Vehículo:</H4>
                <ContentInput>
                  <FieldSelectVehicle
                    as="select"
                    name="vehicle"
                    id="vehicle"
                    onChange={vehicleChange}
                  >
                    <option value="disabled">Select</option>
                    <option value="motocicleta">Motocicleta</option>
                    <option value="automovil">Automóvil</option>
                    <option value="camioneta">Camioneta</option>
                    <option value="camion">Camión</option>
                    <option value="tractomula">Tractomula</option>
                    <option value="otros">Otros</option>
                  </FieldSelectVehicle>
                </ContentInput>
              </ContentMain>
              <ContentMain>
                <H4>Tipo de combustible:</H4>
                <ContentInput>
                  <FieldSelectVehicle
                    as="select"
                    name="gasoline"
                    id="gasoline"
                    onChange={gasolineChange}
                  >
                    <option value="disabled">Select</option>
                    <option value="gasolina">Gasolina corriente</option>
                    <option value="gasolinagprix">Gasolina Extra G-Prix</option>
                    <option value="diesel">Diesel</option>
                    <option value="maxprodiesel">Max Pro Diesel</option>
                  </FieldSelectVehicle>
                </ContentInput>
              </ContentMain>
            </Wrapper>

            <Wrapper>
              <ContentMain>
                <H4>Departamento:</H4>
                <FieldSelectVehicle
                  as="select"
                  name="department"
                  id="department"
                  onChange={departmentChange}
                >
                  <option value="disabled">Select</option>
                  <option value="tolima">Tolima</option>
                  <option value="antioquia">Antioquia</option>
                  <option value="amazonas">Amazonas</option>

                </FieldSelectVehicle>
              </ContentMain>
              <ContentMain>
                <H4>Ciudad:</H4>
                <FieldSelectVehicle
                  as="select"
                  name="city"
                  id="city"
                  onChange={cityChange}
                >
                  <option value="disabled">Select</option>
                  <option value="ibague">Ibagué</option>
                  <option value="medellin">Medellin</option>
                  <option value="arauca">Arauca</option>
                </FieldSelectVehicle>
              </ContentMain>
            </Wrapper>

            <Wrapper>
              <ContentMain>
                <ReCAPTCHA
                  ref={captcha}
                  sitekey="6Lcq28gcAAAAAPFYz5vQEQO4rwP71-w10WcfD0eI"
                  onChange={onChange}
                />
              </ContentMain>
              <ContentMain></ContentMain>
            </Wrapper>
            <WrapperBox>
              <ContentMainBox>
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
              </ContentMainBox>
            </WrapperBox>
            <Wrapper>
              <ContentMain>
                <Button type="submit">Registrarme</Button>
                {formSearched ? <Approved>Registro Aprovado</Approved> : null}
              </ContentMain>
            </Wrapper>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Register;
