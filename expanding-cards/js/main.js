// 获取文档中 class="panel" 的所有元素
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  //添加点击事件
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

//移除活动元素
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
