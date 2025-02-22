//  project_root/js/main.js

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    mobileMenuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('show'); // اضافه یا حذف کلاس 'show'
    });

    // بستن منو هنگام کلیک روی لینک‌های داخل منو (برای موبایل)
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) { // فقط در موبایل
          mainNav.classList.remove('show');
        }
      });
    });

    // تکمیل خودکار (Autocomplete) -  فعلا یک پیاده‌سازی ساده
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', function() {
        // در اینجا می‌توانید درخواست AJAX به سرور برای دریافت پیشنهادات ارسال کنید
        // فعلا فقط یک کنسول لاگ ساده:
        console.log('پیشنهادات جستجو برای: ', searchInput.value);
    });
});