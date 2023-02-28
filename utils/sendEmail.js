import emailjs from "emailjs-com";

export const sendEmail = (e, setLoading) => {
  e.preventDefault();
  setLoading(true);
  emailjs
    .sendForm(
      "service_vubqzu9",
      "template_bg3j9q9",
      e.target,
      "Q7UCrPjB9lUFde00W"
    )
    .then(
      (result) => {
        setLoading(false);
        alert("Thanks!");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong...");
      }
    );
};
