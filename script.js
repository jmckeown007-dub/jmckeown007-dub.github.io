function showMessage() {
  alert("I love you more than the beauty of the colors of my hair and your eyes combined 💕");
}
function openModal() {
  document.getElementById("loveModal").style.display = "block";
}

function closeModal() {
  document.getElementById("loveModal").style.display = "none";
}

function openModal2() {
  document.getElementById("loveModal2").style.display = "block";
}

function closeModal2() {
  document.getElementById("loveModal2").style.display = "none";
}


const modal = document.getElementById("modalimg1");
const modalImg = document.getElementById("modalImage");
const img = document.getElementById("hhBday");
const closeBtn = modal.querySelector(".close");

img.onclick = function() {
  modal.style.display = "flex";
  modalImg.src = this.src;
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

modal.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

const heart = document.getElementById('heartCursor');

window.addEventListener('mousemove', e => {
  // Offset by half cursor size to center it on pointer
  heart.style.left = (e.clientX - 16) + 'px';
  heart.style.top = (e.clientY - 16) + 'px';

  // For getting element under mouse
  const hoveredElem = document.elementFromPoint(e.clientX, e.clientY);


  // add glow if hovered element is button or link
  if (hoveredElem && (hoveredElem.tagName === 'BUTTON' || 
    hoveredElem.tagName === 'A' ||
    hoveredElem.classList.contains('close')) ||
    hoveredElem.classList.contains('close-image')
    ) 
    {
    heart.classList.add('fish');
  } else {
    heart.classList.remove('fish');
  }
});


