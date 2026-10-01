document.addEventListener("DOMContentLoaded", function () {

  const toc = document.querySelector(".post-toc");
  const content = document.querySelector(".post-content");
  const masthead = document.querySelector(".masthead");

  if (!toc || !content || !masthead) {
    return;
  }


  // 生成目录


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


  // 滚动时固定目录


  window.addEventListener("scroll", function () {

    if (window.scrollY >= masthead.offsetHeight) {
      toc.classList.add("is-fixed");
    } else {
      toc.classList.remove("is-fixed");
    }

  });

});




  // 移动端适配


document.addEventListener("DOMContentLoaded", function(){


    const button = document.querySelector(".toc-toggle");

    const toc = document.querySelector(".post-toc");


    if(button && toc){


        button.addEventListener("click", function(e){

          // 防止触发关闭
            e.stopPropagation();

            toc.classList.toggle("is-open");


        });


    }


    // 点击目录外的区域，关闭目录
    document.addEventListener("click", function(e){

        if (window.innerWidth > 768) return;
        if (!toc.classList.contains("is-open")) return;

        // 点在目录内部 → 不关闭
        if (toc.contains(e.target)) return;

        // 点在箭头按钮上 → 交给按钮自己的逻辑
        if (button.contains(e.target)) return;

        toc.classList.remove("is-open");

    });

    // 点击目录后自动关闭

    document.querySelectorAll(".post-toc a")
    .forEach(function(link){


        link.addEventListener("click",function(){


            if(window.innerWidth <= 768){

                toc.classList.remove("is-open");

            }


        });


    });


});

