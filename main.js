// گرفتن همه دکمه‌های مشاهده پروژه
const projectButtons = document.querySelectorAll("section a");

// ایجاد یک modal
const modal = document.createElement("div");
modal.className =
  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden";
modal.innerHTML = `
  <div class="bg-white p-6 rounded-lg max-w-md w-full">
    <h2 id="modalTitle" class="text-xl font-bold mb-4"></h2>
    <p id="modalDescription" class="text-gray-700 mb-4"></p>
    <button id="closeModal" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">بستن</button>
  </div>
`;
document.body.appendChild(modal);

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

projectButtons.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // جلوگیری از رفتن به لینک #

    // تعیین عنوان و توضیح بر اساس index پروژه
    const titles = [
      "وبسایت فروشگاهی",
      "اپلیکیشن مدیریت کارها",
      "ماشین حساب پیشرفته",
    ];
    const descriptions = [
      "یک وبسایت فروشگاهی با امکانات کامل سبد خرید و طراحی ریسپانسیو",
      "یک اپلیکیشن مدیریت وظایف با استفاده از JavaScript و Tailwind",
      "ماشین حساب پیشرفته با امکانات جمع، تفریق، ضرب، تقسیم و درصد",
    ];

    modalTitle.textContent = titles[index];
    modalDescription.textContent = descriptions[index];
    modal.classList.remove("hidden"); // نمایش modal
  });
});

// بستن modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

   // فیلتر کردن پروژه‌ها بر اساس دسته بندی
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-filter');

        // تغییر رنگ دکمه فعال
        filterButtons.forEach(b => b.classList.replace('bg-blue-600', 'bg-gray-200'));
        filterButtons.forEach(b => b.classList.replace('text-white', 'text-black'));
        btn.classList.add('bg-blue-600', 'text-white');

        projectCards.forEach(card => {
          if(category === 'all' || card.getAttribute('data-category') === category) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });

    