import emailjs from "emailjs-com";

export const sendEmail = (e, setLoading, play) => {
  e.preventDefault();
  setLoading(true);
  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      e.target,
      process.env.NEXT_PUBLIC_USER_ID
    )
    .then(
      (result) => {
        setLoading(false);
        play();
        alert("Thanks!");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong...");
      }
    );
};
