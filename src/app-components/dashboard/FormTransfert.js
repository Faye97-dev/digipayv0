import "./formik-demo.css";
import React from "react";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { Button, Row, Col, Label } from "reactstrap";

const objectAttributeExist = (item, value) => {
  if (!item) {
    return false;
  } else {
    return item.value === value;
  }
};

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    transaction_type: Yup.object().required(
      "Type de transaction est obligatoire!"
    ),
    agence_destination: Yup.object().required(
      "Agence destination est obligatoire !"
    ),
    destinataire: Yup.object().required("Destinataire est obligatoire!"),
    expediteur: Yup.object().when("transaction_type", {
      //is: (transaction_type) => transaction_type.value === "SUP_3000",
      is: (transaction_type) =>
        objectAttributeExist(transaction_type, "SUP_3000"),
      then: Yup.object().required("Expediteur est obligatoire!"),
      //otherwise: Yup.string()
    }),

    montant: Yup.number().when("transaction_type", {
      is: (transaction_type) =>
        objectAttributeExist(transaction_type, "SUP_3000"),

      then: Yup.number()
        .min(3001, "Montant doit etre plus 3000 MRU")
        .required("Montant est obligatoire!"),
      otherwise: Yup.number()
        .min(0, "Montant invalid")
        .max(3000, "Montant ne peut depasser 3000 MRU")
        .required("Montant est obligatoire!"),
    }),

    frais_origine: Yup.number()
      .min(0, "Frais origine invalid")
      .required("Frais destination est obligatoire!"),
    frais_destination: Yup.number()
      .min(0, "Frais_destination invalid")
      .required("Frais_destination est obligatoire!"),
  }),
  mapPropsToValues: (props) => ({
    transaction_type: "",
    agence_destination: "",
    destinataire: "",
    expediteur: "",
    montant: 0,
    frais_origine: 0,
    frais_destination: 0,
    remarque: "",
    note: "",
  }),
  handleSubmit: (values, { setSubmitting, resetForm }) => {
    const payload = {
      ...values,
      agence_destination: { ...values.agence_destination },
      destinataire: { ...values.destinataire },
      expediteur: { ...values.expediteur },
      transaction_type: { ...values.transaction_type },
    };
    setTimeout(() => {
      alert(JSON.stringify(payload, null, 2));
      setSubmitting(false);
      resetForm();
    }, 1000);
  },
  displayName: "MyForm",
});

const MyForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
  } = props;
  return (
    <Form onSubmit={handleSubmit} className="px-5">
      <Row>
        <Col xl="12">
          <MySelect
            label="Type de transaction"
            name="transaction_type"
            option={[
              { value: "INF_3000", label: "Inferieure a 3000 MRU" },
              { value: "SUP_3000", label: "Superieure a 3000 MRU" },
            ]}
            value={values.transaction_type}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            error={values.transaction_type !== "" && errors.transaction_type}
            touched={touched.transaction_type}
            placeholder="Selectionner le type de la transaction ..."
          />
        </Col>
      </Row>
      {values.transaction_type !== "" && (
        <>
          <Row>
            <Col xl="12">
              <MySelect
                label="Agence de destination"
                name="agence_destination"
                option={[
                  { value: "agence 1", label: "Agence 1" },
                  { value: "agence 2", label: "Agence 2" },
                  { value: "agence 3", label: "Agence 3" },
                  { value: "agence 4", label: "Agence 4" },
                  { value: "agence 5", label: "Agence 5" },
                ]}
                value={values.agence_destination}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.agence_destination}
                touched={touched.agence_destination}
                placeholder="Selectionner une agence ..."
              />
            </Col>
          </Row>
          <Row>
            {values.transaction_type.value === "SUP_3000" ? (
              <>
                <Col xl="6">
                  <MySelect
                    label="Destinataire"
                    name="destinataire"
                    option={[
                      { value: "client 1", label: "Client 1" },
                      { value: "client 2", label: "Client 2" },
                      { value: "client 3", label: "Client 3" },
                      { value: "client 4", label: "Client 4" },
                      { value: "client 5", label: "Client 5" },
                    ]}
                    value={values.destinataire}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    error={errors.destinataire}
                    touched={touched.destinataire}
                    placeholder="Selectionner un destinataire ..."
                  />
                </Col>
                <Col xl="6">
                  <MySelect
                    label="Expediteur"
                    name="expediteur"
                    option={[
                      { value: "client 1", label: "Client 1" },
                      { value: "client 2", label: "Client 2" },
                      { value: "client 3", label: "Client 3" },
                      { value: "client 4", label: "Client 4" },
                      { value: "client 5", label: "Client 5" },
                    ]}
                    value={values.expediteur}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    error={errors.expediteur}
                    touched={touched.expediteur}
                    placeholder="Selectionner un expediteur ..."
                  />
                </Col>
              </>
            ) : (
              <Col xl="12">
                <MySelect
                  label="Destinataire"
                  name="destinataire"
                  option={[
                    { value: "client 1", label: "Client 1" },
                    { value: "client 2", label: "Client 2" },
                    { value: "client 3", label: "Client 3" },
                    { value: "client 4", label: "Client 4" },
                    { value: "client 5", label: "Client 5" },
                  ]}
                  value={values.destinataire}
                  onChange={setFieldValue}
                  onBlur={setFieldTouched}
                  error={errors.destinataire}
                  touched={touched.destinataire}
                  placeholder="Selectionner un destinataire ..."
                />
              </Col>
            )}
          </Row>

          <Row>
            <Col xl="6" style={{ margin: "12px 0" }}>
              <Label for="montant">Montant</Label>
              <Field name="montant" type="number" />

              {errors.montant && touched.montant && (
                <div style={{ color: "red", marginTop: ".5rem" }}>
                  {errors.montant}
                </div>
              )}
            </Col>
            <Col xl="6" style={{ margin: "12px 0" }}>
              <Label for="frais_origine">Frais d'origine</Label>
              <Field name="frais_origine" type="number" />

              {errors.frais_origine && touched.frais_origine && (
                <div style={{ color: "red", marginTop: ".5rem" }}>
                  {errors.frais_origine}
                </div>
              )}
            </Col>
            <Col xl="6" style={{ margin: "12px 0" }}>
              <Label for="frais_destination">Frais de destination</Label>
              <Field name="frais_destination" type="number" />

              {errors.frais_destination && touched.frais_destination && (
                <div style={{ color: "red", marginTop: ".5rem" }}>
                  {errors.frais_destination}
                </div>
              )}
            </Col>
          </Row>
          <Row>
            <Col xl="12" style={{ margin: "12px 0" }}>
              <Label for="remarque">Remarque</Label>
              <Field name="remarque" type="text" placeholder="remarques ...." />

              {errors.remarque && touched.remarque && (
                <div style={{ color: "red", marginTop: ".5rem" }}>
                  {errors.remarque}
                </div>
              )}
            </Col>
            <Col xl="12" style={{ margin: "12px 0" }}>
              <Label for="note">Note</Label>
              <Field name="note" type="text" placeholder="notes ...." />

              {errors.note && touched.note && (
                <div style={{ color: "red", marginTop: ".5rem" }}>
                  {errors.note}
                </div>
              )}
            </Col>
          </Row>
          <Row>
            <Col xl="12" style={{ margin: "12px 0" }}>
              <Button color="primary" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Col>
          </Row>
        </>
      )}
    </Form>
  );
};

class MySelect extends React.Component {
  handleChange = (item) => {
    // this is going to call setFieldValue and manually update values.topcis
    //console.log(item);
    this.props.onChange(this.props.name, item);
  };

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur(this.props.name, true);
  };

  render() {
    return (
      <div style={{ margin: "12px 0" }}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <Select
          id={this.props.name}
          options={this.props.option}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
          placeholder={this.props.placeholder}
        />
        {!!this.props.error && this.props.touched && (
          <div style={{ color: "red", marginTop: ".5rem" }}>
            {this.props.error}
          </div>
        )}
      </div>
    );
  }
}

const MyEnhancedForm = formikEnhancer(MyForm);

const FormTransfert = () => <MyEnhancedForm />;

export default FormTransfert;
