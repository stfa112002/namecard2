document.addEventListener("DOMContentLoaded", function () {
  const skillData = {
    courses: [
      "✅ 資訊科學教育",
      "✅ 程式解題：C++ / Python",
      "✅ 網頁程式：HTML / CSS / JavaScript / Node.js / SQL"
    ],
    skills: [
      { name: "邏輯力", level: 80 },
      { name: "講述能力", level: 90 },
      { name: "美感", level: 70 }
    ]
  };
  // 定義原始的圖片 URL
  let imageUrls = [
    "https://memeprod.ap-south-1.linodeobjects.com/user-gif/cba385f44a593a51169e988c8a596f6d.gif",
    "https://www.gifcen.com/wp-content/uploads/2022/12/pokemon-gif-10.gif",
    "https://media.tenor.com/9Fi8d9L09UMAAAAM/exciting-usagi.gif"
  ];
  // 取得 #courses 和 #skills
  const coursesSection = document.getElementById("courses");
  const skillsSection = document.getElementById("skills");

  // 生成「授課內容」HTML
  coursesSection.innerHTML = `
      <h4>授課內容</h4>
      <ul>
        ${skillData.courses.map((course) => `<li>${course}</li>`).join("")}
      </ul>
    `;

  // 生成「技能條」HTML
  skillsSection.innerHTML = `
      <h4>技能條</h4>
      ${skillData.skills
        .map(
          (skill) => `
        <div class="skill-bar">
          <label>${skill.name}</label>
          <div class="bar">
            <div class="level" style="width: ${skill.level}%;"></div>
          </div>
        </div>
      `
        )
        .join("")}
    `;
  
  // 取得 .square-image
  const squareImages = document.querySelectorAll(".square-image");
  // 初始化圖片背景
  function initializeImages() {
    squareImages.forEach((img, index) => {
      img.style.backgroundImage = `url('${imageUrls[index]}')`;
    });
  }
  // 初始化圖片
  initializeImages();
  
  // 隨機排列圖片背景
  function shuffleImages() {
    let shuffledUrls = [...imageUrls].sort(() => Math.random() - 0.5);
    squareImages.forEach((img, index) => {
      img.style.backgroundImage = `url('${shuffledUrls[index]}')`;
    });
  }
  // 綁定點擊事件
  document.querySelector(".square-images").addEventListener("click", shuffleImages);
});