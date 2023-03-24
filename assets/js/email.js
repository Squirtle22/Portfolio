function () {
    emailjs.init('YOUR_PUBLIC_KEY')
}

form {
    display:flex;
    flex-direction: column;
}

label {
    margin-bottom: 10px;
  }

emailjs.sendform('contact_form', 'contact_form', this)