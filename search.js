// project_root/js/search.js

document.addEventListener('DOMContentLoaded', function() {

    //  مدیریت زیرمجموعه‌ها در مودال فیلتر
    const categorySelect = document.getElementById('filter-category');
    const subcategorySelect = document.getElementById('filter-subcategory');

    if(categorySelect && subcategorySelect){
        categorySelect.addEventListener('change', function() {
            const selectedCategory = categorySelect.value;

            //  غیرفعال کردن select زیرمجموعه
            subcategorySelect.disabled = true;
            subcategorySelect.innerHTML = '<option value="">انتخاب کنید...</option>'; //  پاک کردن گزینه‌های قبلی

            if (selectedCategory) {
                //  در اینجا باید یک درخواست به سرور ارسال شود تا زیرمجموعه‌های مربوطه را دریافت کنیم
                //  فعلا به صورت دستی زیرمجموعه‌ها را اضافه می‌کنیم (برای تست)
                let subcategories = [];
                if (selectedCategory === 'handicrafts') {
                    subcategories = [
                        { value: 'carpet', text: 'فرش' },
                        { value: 'pottery', text: 'سفال' },
                        { value: 'woodcarving', text: 'منبت' },
                        { value: 'metalwork', text: 'فلزات' }
                    ];
                } else if (selectedCategory === 'food') {
                    subcategories = [
                        { value: 'agricultural', text: 'کشاورزی' },
                        { value: 'livestock', text: 'دام و طیور' },
                        { value: 'dairy', text: 'لبنیات' }
                    ];
                }  else if (selectedCategory === 'visualarts') {
                    subcategories = [
                      {value: 'painting', text: 'نقاشی'},
                      {value: 'sculpture', text: 'مجسمه سازی'},
                      {value: 'graphics', text: 'گرافیک'}
                    ];
                } else if(selectedCategory === 'services'){
                    subcategories = [
                      {value: 'education', text: 'آموزش'},
                      {value: 'design', text: 'طراحی'},
                      {value: 'events', text: 'برگزاری رویداد'}
                    ];
                }


                //  اضافه کردن زیرمجموعه‌ها به select
                subcategories.forEach(subcategory => {
                    const option = document.createElement('option');
                    option.value = subcategory.value;
                    option.textContent = subcategory.text;
                    subcategorySelect.appendChild(option);
                });

                //  فعال کردن select زیرمجموعه
                subcategorySelect.disabled = false;
            }
        });
    }

});