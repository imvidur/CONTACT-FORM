const form = document.getElementById('guviContactForm') as HTMLFormElement;
const msgresponse = document.getElementById('response') as HTMLElement;

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = {
    name: (document.getElementById('name') as HTMLInputElement).value,
    email: (document.getElementById('email') as HTMLInputElement).value,
    contact: (document.getElementById('contact') as HTMLInputElement).value,
    subject: (document.getElementById('subject') as HTMLInputElement).value,
    message: (document.getElementById('message') as HTMLTextAreaElement).value,
  };

  try {
    const response = await fetch('https://67137e8a6c5f5ced662698af.mockapi.io/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      msgresponse.textContent = 'Form Submitted Successfully!';
      msgresponse.style.color = 'green';
    } else {
      throw new Error('Submission Failed');
    }
  } catch (error) {
    msgresponse.textContent = 'Submission Failed. Please try again.';
    msgresponse.style.color = 'red';
  }
});
