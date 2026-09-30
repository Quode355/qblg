document.addEventListener("DOMContentLoaded", function () {

  const toc = document.querySelector(".post-toc");
  const content = document.querySelector(".post-content");
  const masthead = document.querySelector(".masthead");

  if (!toc || !content || !masthead) {
    return;
  }


  // =================================
  // 1. 生成目录
  // =================================

  const tocList = document.querySelector("#toc");
  const headings = content.querySelectorAll("h2, h3, h4");

  headings.forEach(function (heading, index) {

  if (!heading.id) {
    heading.id = "heading-" + index;
  }

  const li = document.createElement("li");
  const link = document.createElement("a");

  link.textContent = heading.textContent;
  link.href = "#" + heading.id;

  const level = parseInt(heading.tagName.substring(1));

  li.style.paddingLeft = (level - 2) * 16 + "px";

  li.appendChild(link);
  tocList.appendChild(li);

});

//   headings.forEach(function (heading, index) {

//     // 如果标题没有 id，就给它创建一个
//     if (!heading.id) {
//       heading.id = "heading-" + index;
//     }

//     // 创建目录项目
//     const li = document.createElement("li");
//     const link = document.createElement("a");

//     link.textContent = heading.textContent;
//     link.href = "#" + heading.id;

//     li.appendChild(link);
//     tocList.appendChild(li);

//   });


  // =================================
  // 2. 滚动时固定目录
  // =================================

  window.addEventListener("scroll", function () {

    if (window.scrollY >= masthead.offsetHeight) {
      toc.classList.add("is-fixed");
    } else {
      toc.classList.remove("is-fixed");
    }

  });

});