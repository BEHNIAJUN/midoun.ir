// project_root/js/ad-details.js

document.addEventListener('DOMContentLoaded', function() {

    //  مدیریت مودال‌ها
    const modalOpenButtons = document.querySelectorAll('[data-modal-target]');
    const modalCloseButtons = document.querySelectorAll('[data-modal-close]');

    modalOpenButtons.forEach(button => {
        button.addEventListener('click', () => {
// project_root/js/ad-details.js

// ... (ادامه از کامنت قبلی) ...

document.addEventListener('DOMContentLoaded', function() {

    //  مدیریت مودال‌ها
    const modalOpenButtons = document.querySelectorAll('[data-modal-target]');
    const modalCloseButtons = document.querySelectorAll('[data-modal-close]');

    modalOpenButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.dataset.modalTarget;
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'flex'; //  نمایش مودال
            }
        });
    });

    modalCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.dataset.modalClose;
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'none'; //  مخفی کردن مودال
            }
        });
    });

    // بستن مودال با کلیک بیرون از آن
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    //  تغییر تصویر اصلی با کلیک روی تصاویر بندانگشتی
    const mainImage = document.querySelector('.main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            //  تغییر src تصویر اصلی
            mainImage.src = thumbnail.src;
            mainImage.alt = thumbnail.alt;

            //  حذف کلاس 'active' از تمام تصاویر بندانگشتی
            thumbnails.forEach(thumb => thumb.classList.remove('active'));

            //  اضافه کردن کلاس 'active' به تصویر بندانگشتی کلیک‌شده
            thumbnail.classList.add('active');
        });
    });
});