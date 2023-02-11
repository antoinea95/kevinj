import emailjs from "emailjs-com";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useEffect, useRef } from "react";
import { useState } from "react";
import gsap from "gsap";
import Social from "../composants/Social";
import Header from "../layout/Header";

export default function Contact() {
  const form = useRef();

  const [isSend, setIsSend] = useState()

  // Schéma Yup qui permet de contrôler le formulaire
  const ValidationSchema = Yup.object().shape({
    user_email: Yup.string()
      .email("Merci de renseigner un email valide")
      .required("Merci de renseigner votre email"),

    user_name: Yup.string()
      .required("Merci de saisir votre prénom")
      .matches("^[A-Za-zÀ-ÖØ-öø-ÿ-' ]{2,}$", "Prénom invalide"),

    user_subject: Yup.string()
      .required("Merci de saisir l'objet")
      .max(100, "Le texte est trop long (100 caractères maximum)"),

    message: Yup.string().required("Merci de saisir un message")
    .min(15, "Votre message est trop court (15 caractères minimum)")
    .max (1000, "Votre message est trop long (1000 caractères maximum)"),
  });

  // UseForm permet de gérer la validation du formulaire
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onBlur",
    resolver: yupResolver(ValidationSchema),
  });

  // stockage des erreurs
  const { errors } = formState;

  const onSubmit = (data) => {

    emailjs
      .sendForm(
        "service_p922juf",
        "template_6r86f0e",
        form.current,
        "dokrCavbX9egyqDtd"
      )
      .then((response) => {
        setIsSend(true)
        reset();
      })
      .catch((err) => {
        setIsSend(false);
      });
  };

  const showing = (elem) => {
    gsap.fromTo( elem, 
      {
        opacity: 0, 
        y: -600
      }, {
        opacity: 1, 
        y: 0,
        delay: 0.3,
        duration: 1,
      })
  }

  useEffect(() => {
      showing(".contact");
    }, [])

  return (
    <>
      <Header />
      <main>
        <article className="contact">
          <h2 className="contact--title"> Vous avez un projet visuel ? Contactez-moi</h2>
          { isSend ? <h3>Votre message a été envoyé</h3> : <form onSubmit={handleSubmit(onSubmit)} ref={form} className="contact--form">
            <div className="contact--form__div">
              <label htmlFor="name">Prénom & Nom</label>
              <input
                type="text"
                name="user_name"
                required
                id="name"
                {...register("user_name")}
              />
              <small>{errors.user_name?.message}</small>
            </div>

            <div className="contact--form__div">
              <label htmlFor="email">Email</label>
              <input
                type="emai"
                name="user_email"
                required
                id="email"
                {...register("user_email")}
              />
              <small>{errors.user_email?.message}</small>
            </div>

            <div className="contact--form__div">
              <label htmlFor="subject">Object</label>
              <input
                type="text"
                name="user_subject"
                required
                id="subject"
                {...register("user_subject")}
              />
              <small>{errors.user_subject?.message}</small>
            </div>

            <div className="contact--form__div">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                required
                cols="30"
                rows="10"
                {...register("message")}
              ></textarea>
              <small>{errors.message?.message}</small>
            </div>

            <button type="submit" value="send" className="contact--form__btn">
              Envoyer
            </button>
            
          </form> }
        <Social />
        </article>
      </main>
    </>
  );
}
