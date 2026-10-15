// ==========================================
// 1. Header Scroll Effect (تغير الـ Header عند النزول)
// ==========================================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";
    header.style.padding = "12px 100px";
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
    header.style.padding = "15px 100px";
  }
});

// ==========================================
// 2. Typing Effect for Frontend Developer
// ==========================================
const typingElement = document.querySelector(".main h2 span");

if (typingElement) {
  const words = ["frontend developer", "web developer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 100 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000; // وقفة لما الكلمة تكتمل
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
  }

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
  });
}

// ==========================================
// 3. Scroll to Top Button (زر العودة للأعلى)
// ==========================================
const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.id = "scrollTopBtn";
document.body.appendChild(scrollTopBtn);

scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #3af4c6;
    color: #000000;
    border: none;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
`;

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.opacity = "1";
    scrollTopBtn.style.visibility = "visible";
  } else {
    scrollTopBtn.style.opacity = "0";
    scrollTopBtn.style.visibility = "hidden";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

scrollTopBtn.addEventListener("mouseenter", () => {
  scrollTopBtn.style.transform = "scale(1.1)";
});
scrollTopBtn.addEventListener("mouseleave", () => {
  scrollTopBtn.style.transform = "scale(1)";
});

// ==========================================
// 4. Section Fade In / Fade Out Scroll Effect
// ==========================================
const sections = document.querySelectorAll("section");

const sectionObserverOptions = {
  threshold: 0.25,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      entry.target.style.filter = "blur(0px)";
    } else {
      entry.target.style.opacity = "0.2";
      entry.target.style.transform = "translateY(-30px)";
      entry.target.style.filter = "blur(3px)";
    }
  });
}, sectionObserverOptions);

sections.forEach((section) => {
  if (!section.classList.contains("main")) {
    section.style.opacity = "0.2";
    section.style.transform = "translateY(30px)";
    section.style.filter = "blur(3px)";
    section.style.transition =
      "opacity 0.8s ease, transform 0.8s ease, filter 0.8s ease";
    sectionObserver.observe(section);
  }
});
