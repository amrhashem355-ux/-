document.getElementById("order-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("n").value.trim();
  const phone = document.getElementById("p").value.trim();
  const service = document.getElementById("s").value;
  const details = document.getElementById("m").value.trim();
  const message = [
    "طلب جديد من موقع الجويلي",
    `الاسم: ${name}`,
    `رقم الموبايل: ${phone}`,
    `الخدمة المطلوبة: ${service}`,
    `تفاصيل الطلب: ${details || "لا توجد تفاصيل إضافية"}`
  ].join("\n");

  window.open(
    `https://wa.me/201116263151?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer"
  );
});

document.querySelectorAll(".image-slot img").forEach((image) => {
  const slot = image.closest(".image-slot");
  if (!slot) return;

  image.addEventListener("load", () => slot.classList.add("has-image"));
  image.addEventListener("error", () => slot.classList.remove("has-image"));

  if (image.complete && image.naturalWidth > 0) {
    slot.classList.add("has-image");
  }
});
