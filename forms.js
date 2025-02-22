// project_root/js/forms.js

document.addEventListener('DOMContentLoaded', function() {

    //  اعتبارسنجی فرم تماس (Contact Form)
    const contactForm = document.getElementById('contact-form');

    if (contactForm) { //  اگر فرم تماس وجود داشت
        contactForm.addEventListener('submit', function(event) {
            let isValid = true;

            //  اعتبارسنجی نام
            const nameInput = document.getElementById('name');
            if (nameInput.value.trim() === '') {
                showError(nameInput, 'لطفا نام خود را وارد کنید.');
                isValid = false;
              event.preventDefault(); // جلوگیری از ارسال فرم
            } else {
                hideError(nameInput);
            }

            //  اعتبارسنجی ایمیل
            const emailInput = document.getElementById('email');
            if (!isValidEmail(emailInput.value)) {
                showError(emailInput, 'لطفا یک ایمیل معتبر وارد کنید.');
                isValid = false;
              event.preventDefault();
            } else {
                hideError(emailInput);
            }

            //  اعتبارسنجی موضوع
            const subjectInput = document.getElementById('subject');
            if(subjectInput.value.trim() === ''){
                showError(subjectInput, 'لطفا موضوع پیام را وارد کنید.');
                isValid = false;
                event.preventDefault();
            } else {
                hideError(subjectInput);
            }

            //  اعتبارسنجی متن پیام
            const messageInput = document.getElementById('message');
            if (messageInput.value.trim() === '') {
                showError(messageInput, 'لطفا متن پیام خود را وارد کنید.');
                isValid = false;
              event.preventDefault();
            } else {
                hideError(messageInput);
            }


            if (!isValid) {
                event.preventDefault(); // جلوگیری از ارسال فرم در صورت وجود خطا
            }
        });
    }


    //  تابع کمکی برای نمایش خطا
    function showError(inputElement, errorMessage) {
        const errorSpan = document.createElement('span');
        errorSpan.className = 'error-message';
        errorSpan.textContent = errorMessage;
        errorSpan.style.color = 'red'; // رنگ قرمز برای پیام خطا

        const parentDiv = inputElement.parentElement;
        // اگر قبلا پیام خطایی وجود داشته باشد، آن را حذف می‌کنیم
        const existingError = parentDiv.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        parentDiv.appendChild(errorSpan); // اضافه کردن پیام خطا به صفحه
        inputElement.style.borderColor = 'red';
    }

    //  تابع کمکی برای پنهان کردن خطا
    function hideError(inputElement) {
         const parentDiv = inputElement.parentElement;
        const errorSpan = parentDiv.querySelector('.error-message');
        if (errorSpan) {
            errorSpan.remove();
             inputElement.style.borderColor = '#ccc'; //  برگرداندن رنگ حاشیه به حالت عادی
        }
    }

    //  تابع کمکی برای بررسی معتبر بودن ایمیل
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});