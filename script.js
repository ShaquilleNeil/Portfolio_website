function sendEmail(){
    const templateParams = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };
  emailjs.send("service_y6eazdo", "template_ub1t1gu", templateParams)
  .then(() => alert("Message sent successfully!").catch(() => alert("Failed to send email")));
}