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



  function toggleChat() {
    const chatbox = document.getElementById("chatbox");
    chatbox.style.display = chatbox.style.display === "none" ? "block" : "none";
  }

  function handleKey(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  }

  function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (message === "") return;

    const messagesDiv = document.getElementById("chat-messages");
    messagesDiv.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
    input.value = "";

    setTimeout(() => {
      const reply = getBotReply(message);
      messagesDiv.innerHTML += `<div><strong>Bot:</strong> ${reply}</div>`;
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }, 1000);
  }

  function getBotReply(msg) {
    const text = msg.toLowerCase();
    if (text.includes("price") || text.includes("cost")) return "Our team will share pricing details shortly.";
    if (text.includes("contact")) return "You can reach us at support@example.com or +91-9876543210.";
    if (text.includes("hello") || text.includes("hi")) return "Hello! How can I assist you today?";
    return "Thank you! We will get back to you soon.";
  }


  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".product-card");

    cards.forEach((card) => {
      const applyField = card.querySelector("input[type='text']");
      const priceField = card.querySelector(".price");
      let originalPrice = parseFloat(priceField.textContent.replace(/[₹,]/g, ""));

      applyField.addEventListener("change", () => {
        const code = applyField.value.trim().toUpperCase();
        if (code === "MINI10") {
          const discount = originalPrice * 0.10;
          const newPrice = originalPrice - discount;
          priceField.textContent = `₹${newPrice.toFixed(2)} (10% OFF)`;
          applyField.disabled = true;
          applyField.value = "Applied";
        } else {
          alert("Invalid coupon code. Try MINI10");
        }
      });
    });
  });

    function acceptCookies() {
    document.getElementById("cookie-banner").style.display = "none";
    localStorage.setItem("cookiesAccepted", "true");
  }

  window.onload = function () {
    if (!localStorage.getItem("cookiesAccepted")) {
      document.getElementById("cookie-banner").style.display = "flex";
    } else {
      document.getElementById("cookie-banner").style.display = "none";
    }
  };

