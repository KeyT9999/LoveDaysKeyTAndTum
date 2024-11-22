// Mật khẩu của trái tim
const correctPassword = "01042024";

// Set start date
const startDate = new Date("2024-04-01T00:00:00");
const countdownElement = document.querySelector(".days");
const clockElement = document.querySelector(".time");

// Hiển thị giao diện chính khi mật khẩu đúng
function unlockContent() {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").style.display = "flex";
    document.getElementById("music-player").style.display = "block";
    createFlowers("main-content"); // Thêm hoa vào giao diện chính
    updateDisplay();
    setInterval(updateDisplay, 1000);

    // Set random music
    const musicList = [
        'ido.mp3', 
        'noinaycoanh.mp3', 
        'nguoiamphu.mp3', 
        'forya.mp3', 
        'iuladay.mp3', 
        'nhattrendoi.mp3', 
        'tinhka.mp3', 
        'yeuem.mp3', 
        'tam.mp3', 
        'dunglam.mp3', 
        'lovestory.mp3', 
        'lover.mp3'
    ];
    const audio = document.querySelector('audio');
    const randomSong = musicList[Math.floor(Math.random() * musicList.length)];
    audio.src = randomSong;
}

// Cập nhật số ngày và giờ
function updateDisplay() {
    const now = new Date();
    const diffTime = now - startDate;

    // Tính số ngày
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    countdownElement.textContent = `Chúng mình đã bên nhau được ${days} ngày`;

    // Tính giờ, phút, giây
    const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
    const minutes = Math.floor((diffTime / (1000 * 60)) % 60).toString().padStart(2, '0');
    const seconds = Math.floor((diffTime / 1000) % 60).toString().padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Hiệu ứng bông hoa
// Hiệu ứng bông hoa
// Hiệu ứng bông hoa với hình ảnh đã xóa nền
function createFlowers(targetId) {
      const target = document.getElementById(targetId);
      for (let i = 0; i < 10; i++) {
          const flower = document.createElement("img");
          flower.src = "xoanenhoa.png"; // Đường dẫn tới hình ảnh bông hoa PNG
          flower.classList.add("flower");
          flower.style.top = `${Math.random() * 100}%`;
          flower.style.left = `${Math.random() * 100}%`;
          flower.style.animationDelay = `${Math.random() * 5}s`;
          target.appendChild(flower);
      }
  }
  
  

// Xử lý sự kiện nhập mật khẩu
document.getElementById("submit-btn").addEventListener("click", () => {
    const passwordInput = document.getElementById("password-input").value.toLowerCase();
    const errorMessage = document.getElementById("error-message");

    if (passwordInput === correctPassword) {
        createFlowers("main-content"); // Thêm hoa vào giao diện chính
        unlockContent();
    } else {
        errorMessage.textContent = "Bạn ey, nhập lại đii 😅";
    }
});

// Khởi chạy bông hoa cho giao diện nhập mật khẩu
document.addEventListener("DOMContentLoaded", () => {
    createFlowers("password-screen");
});


