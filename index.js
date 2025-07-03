const stars = document.querySelectorAll('.star');
const submitBtn = document.getElementById('submitRating');
const commentBox = document.getElementById('commentBox');
const popup = document.getElementById('thankYouPopup');
const popupMessage = document.getElementById('popupMessage');

let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = star.dataset.value;

    // Highlight selected stars
    stars.forEach(s => {
      s.innerHTML = s.dataset.value <= selectedRating ? '★' : '☆';
    });

    // Show comment box and button
    submitBtn.style.display = 'block';
    commentBox.style.display = 'block';
  });
});

submitBtn.addEventListener('click', () => {
  const userComment = commentBox.value.trim();

  if (!selectedRating) {
    alert("Please select a rating first.");
    return;
  }

  // Show Thank You popup
  popupMessage.innerText = `You rated us ${selectedRating} stars${userComment ? ' with comment: ' + userComment : ''}`;
  popup.style.display = 'block';

  // Auto-hide popup after 5 seconds
  setTimeout(() => {
    popup.style.display = 'none';
  }, 5000);

  // Reset form
  submitBtn.style.display = 'none';
  commentBox.value = '';
  commentBox.style.display = 'none';
  stars.forEach(s => s.innerHTML = '☆');
});

  const menuIcon = document.getElementById("menuIcon");
  const nav = document.querySelector("nav");

  menuIcon.addEventListener("click", () => {
    nav.style.display = (nav.style.display === "block") ? "none" : "block";
  });

