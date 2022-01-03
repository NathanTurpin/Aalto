import { useState } from "react";
import { fetchAPI } from "utils/api";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import Button from "../elements/button";

const LeadForm = ({ data }) => {
  const [loading, setLoading] = useState(false);

  const LeadSchema = yup.object().shape({
    email: yup.string().email().required(),
  });

  return (
    <section className="contact-page bg-yellow-10">
      <div className="container">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="w-900 mb-250">
              Une idée de projet à réaliser ?? <br />{" "}
              <span className="text-yellow-100">Contactez-nous</span>
            </h1>
            <div className="grid grid-cols-2">
              <div>
                <div className="subtitle uppercase tracking-wide mb-10">
                  Adresse
                </div>
                <div className="mb-10">
                  14 Place Clovis Tiers59700 <br />
                  Marcq-en-baroeul
                </div>
              </div>
              <div className="justify-self-end ">
                <div className="subtitle uppercase tracking-wide mb-10">
                  appelez-nous
                </div>
                <div className="mb-10">+33 20 51 80 36</div>
              </div>

              <div></div>
            </div>
          </div>

          <div className="justify-self-end flex flex-col items-center">
            <Formik
              initialValues={{ email: "" }}
              validationSchema={LeadSchema}
              onSubmit={async (values, { setSubmitting, setErrors }) => {
                setLoading(true);

                try {
                  setErrors({ api: null });
                  await fetchAPI(
                    "/lead-form-submissions",
                    {},
                    {
                      method: "POST",
                      body: JSON.stringify({
                        email: values.email,
                        location: data.location,
                      }),
                    }
                  );
                } catch (err) {
                  setErrors({ api: err.message });
                }

                setLoading(false);
                setSubmitting(false);
              }}
            >
              {({ errors, touched, isSubmitting }) => (
                <div>
                  <Form className="flex flex-col gap-5 w-500">
                    <label className="uppercase" htmlFor="email">
                      prénom et nom
                    </label>
                    <Field
                      className="text-base focus:outline-none py-4 md:py-0 px-4 border-2 rounded-md"
                      type="text"
                      name="name"
                      placeholder="Votre prénom et nom"
                    />
                    <label className="uppercase" htmlFor="email">
                      Email
                    </label>
                    <Field
                      className="text-base focus:outline-none py-4 md:py-0 px-4 border-2 rounded-md"
                      type="email"
                      name="email"
                      placeholder="Votre email"
                    />
                    <label className="uppercase" htmlFor="email">
                      société
                    </label>
                    <Field
                      className="text-base focus:outline-none py-4 md:py-0 px-4 border-2 rounded-md"
                      type="text"
                      name="societe"
                      placeholder="Nom de la société"
                    />
                    <label className="uppercase" htmlFor="email">
                      téléphone
                    </label>
                    <Field
                      className="text-base focus:outline-none py-4 md:py-0 px-4 border-2 rounded-md"
                      type="text"
                      name="phone"
                      placeholder="Votre téléphone"
                    />
                    <label className="uppercase" htmlFor="email">
                      message
                    </label>
                    <Field
                      className="text-base focus:outline-none py-4 md:py-0 px-4 border-2 rounded-md"
                      type="textarea"
                      name="message"
                      placeholder="Votre message"
                    />
                    <Button
                      type="submit"
                      button={data.submitButton}
                      disabled={isSubmitting}
                      loading={loading}
                    />
                  </Form>
                  <p className="text-red-500 h-12 text-sm mt-1 ml-2 text-left">
                    {(errors.email && touched.email && errors.email) ||
                      errors.api}
                  </p>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
