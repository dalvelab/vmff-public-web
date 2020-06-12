const fbShareBtn = document.querySelector(".fb-share-btn");
const waShareBtn = document.querySelector(".wa-share-btn");
const tgShareBtn = document.querySelector(".tg-share-btn");
const emShareBtn = document.querySelector(".em-share-btn");

let url = window.location.href;

fbShareBtn.addEventListener("click", () => {
  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=" + url,
    "facebook-share-dialog",
    "width=800,height=600"
  );
  return false;
});

waShareBtn.addEventListener("click", () => {
  waShareBtn.href = `whatsapp://send?text=${url}`;
});

tgShareBtn.addEventListener("click", () => {
  tgShareBtn.href = `https://t.me/share/url?url=${url}`;
});

emShareBtn.addEventListener("click", () => {
  emShareBtn.href = `mailto:?subject=I wanted you to see this site&amp;body=Check out this site ${url}`;
});
