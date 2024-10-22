var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.getElementById('guviContactForm');
const msgresponse = document.getElementById('response');
form.addEventListener('submit', (event) => __awaiter(this, void 0, void 0, function* () {
    event.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        contact: document.getElementById('contact').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };
    try {
        const response = yield fetch('https://67137e8a6c5f5ced662698af.mockapi.io/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            msgresponse.textContent = 'Form Submitted Successfully!';
            msgresponse.style.color = 'green';
        }
        else {
            throw new Error('Submission Failed');
        }
    }
    catch (error) {
        msgresponse.textContent = 'Submission Failed. Please try again.';
        msgresponse.style.color = 'red';
    }
}));
