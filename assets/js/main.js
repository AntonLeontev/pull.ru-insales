document.addEventListener("DOMContentLoaded", function () {
  function detectMob() {
    return window.innerWidth <= 567;
  }
  function detectDes() {
    return window.innerWidth >= 567;
  }
  let body = document.querySelector("body");

  if (detectDes()) {
    const catSwiper = new Swiper(".categories_swiper", {
      // Optional parameters

      loop: true,
      slidesPerView: 6,
      spaceBetween: 24,
      320: {
        slidesPerView: 1.9,
        spaceBetween: 24,
      },
      breakpoints: {
        767: {
          slidesPerView: 3.5,
          spaceBetween: 24,
        },
        999: {
          slidesPerView: 4.5,
          spaceBetween: 40,
        },
        1241: {
          slidesPerView: 6,
          spaceBetween: 40,
        },
        1441: {
          slidesPerView: 6,
          spaceBetween: 40,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: ".carousel_inner .swiper-button-next",
        prevEl: ".carousel_inner .swiper-button-prev",
      },
    });
  }

  const productSwiper = new Swiper(".products_swiper", {
    // Optional parameters

    loop: true,
    slidesPerView: 4,
    spaceBetween: 24,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      767: {
        slidesPerView: 2.3,
        spaceBetween: 24,
      },
      999: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1241: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1441: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: ".section-products-carousel .products_header .swiper-button-next",
      prevEl: ".section-products-carousel .products_header .swiper-button-prev",
    },
  });
  const similarProductSwiper = new Swiper(".similar_swiper", {
    // Optional parameters

    loop: true,
    slidesPerView: 4,
    spaceBetween: 24,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      767: {
        slidesPerView: 2.3,
        spaceBetween: 24,
      },
      999: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1241: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1441: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl:
        ".section-sim-products-carousel .products_header .swiper-button-next",
      prevEl:
        ".section-sim-products-carousel .products_header .swiper-button-prev",
    },
  });
  const productSwiper2 = new Swiper(".products_swiper_2", {
    // Optional parameters

    loop: true,
    slidesPerView: 4,
    spaceBetween: 24,
    // Navigation arrows
    navigation: {
      nextEl: ".section-products-carousel .products_header .swiper-button-next",
      prevEl: ".section-products-carousel .products_header .swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.9,
        spaceBetween: 24,
      },
      767: {
        slidesPerView: 2.3,
        spaceBetween: 24,
      },
      999: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1241: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1441: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
  const relevantSlider = new Swiper(".relevant_swiper", {
    // Optional parameters

    loop: true,
    slidesPerView: 3,
    spaceBetween: 24,
    // Navigation arrows
    navigation: {
      nextEl: ".section-relevant-carousel .products_header .swiper-button-next",
      prevEl:
        ".section-relevant-carousel  .products_header .swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 24,
      },
      767: {
        slidesPerView: 1.8,
        spaceBetween: 24,
      },
      999: {
        slidesPerView: 2.5,
        spaceBetween: 40,
      },
      1241: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1441: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
  const reviewHeaderSlider = new Swiper(".review_header_slider.swiper", {
    // Optional parameters

    loop: true,
    slidesPerView: 5,
    spaceBetween: 12,
    // Navigation arrows
    navigation: {
      nextEl: ".review_header_slider_wr .swiper-button-next",
      prevEl: ".review_header_slider_wr .swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 3.2,
        spaceBetween: 8,
      },
      767: {
        slidesPerView: 5,
        spaceBetween: 12,
      },
      999: {
        slidesPerView: 6,
        spaceBetween: 12,
      },
      1241: {
        slidesPerView: 5,
        spaceBetween: 12,
      },
      1441: {
        slidesPerView: 5,
        spaceBetween: 12,
      },
    },
  });
  // product-view swiper

  //   if (detectMob()) {
  //     let linkMore = document.querySelector(".categories_swiper .link_more");
  //     if (linkMore) {
  //       linkMore.addEventListener("click", function (e) {
  //         e.preventDefault();
  //         this.classList.toggle("active");
  //         if (this.classList.contains("active")) {
  //           this.innerHTML = "<span>Скрыть</span> ";
  //         } else {
  //           this.innerHTML = "<span>Показать ещё</span>  ";
  //         }

  //         let slides = document.querySelectorAll(".categories-slide.mb_hide");
  //         slides.forEach(function (slide) {
  //           slide.classList.toggle("active");
  //           if (slide.style.maxHeight) {
  //             //this is if the accordion is open
  //             slide.style.maxHeight = null;
  //           } else {
  //             //if the accordion is currently closed
  //             slide.style.maxHeight = slide.scrollHeight + "px";
  //           }
  //         });
  //       });
  //     }
  //   }
  let niceSelectS = document.querySelectorAll(".nice_select");
  if (niceSelectS) {
    niceSelectS.forEach(function (item) {
      NiceSelect.bind(item);
    });
  }
  let tabToggler = document.querySelectorAll(".tab_header_item");
  let tabBodyItem = document.querySelectorAll(".tab_body_item");
  tabToggler.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      tabToggler.forEach(function (it) {
        it.classList.remove("active");
      });
      tabBodyItem.forEach(function (it) {
        it.classList.remove("active");
      });

      this.classList.add("active");
      let targetTab = document.querySelector("." + this.dataset.tab);
      targetTab.classList.add("active");
    });
  });

  //   const accordionBtns = document.querySelectorAll(".accordion_link");
  //   const accordionHideBtns = document.querySelectorAll(".accordion_link_hide");

  //   accordionBtns.forEach((accordion) => {
  //     accordion.addEventListener("click", function (e) {
  //       e.preventDefault();
  //       this.classList.toggle("active");

  //       let content = this.parentElement.querySelector(".accordion_content");

  //       if (content.style.maxHeight) {
  //         //this is if the accordion is open
  //         content.style.maxHeight = null;
  //         content.classList.toggle("active");
  //         this.parentElement.classList.toggle("active");
  //       } else {
  //         //if the accordion is currently closed
  //         content.style.maxHeight = content.scrollHeight + "px";
  //         content.classList.toggle("active");
  //         this.parentElement.classList.toggle("active");
  //       }
  //     });
  //   });
  //   accordionHideBtns.forEach((accordion) => {
  //     accordion.addEventListener("click", function (e) {
  //       e.preventDefault();
  //       this.parentElement.parentElement
  //         .querySelector(".accordion_link")
  //         .classList.toggle("active");

  //       let content =
  //         this.parentElement.parentElement.querySelector(".accordion_content");

  //       if (content.style.maxHeight) {
  //         //this is if the accordion is open
  //         content.style.maxHeight = null;
  //         content.classList.toggle("active");
  //         this.parentElement.parentElement.classList.toggle("active");
  //       } else {
  //         //if the accordion is currently closed
  //         content.style.maxHeight = content.scrollHeight + "px";
  //         content.classList.toggle("active");
  //         this.parentElement.parentElement.classList.toggle("active");
  //       }
  //     });
  //   });

  // range slider

  //   const rangeInput = document.querySelectorAll(".range-input input"),
  //     priceInput = document.querySelectorAll(".price-input input"),
  //     range = document.querySelector(".slider .progress");
  //   let priceGap = 1000;

  //   priceInput.forEach((input) => {
  //     input.addEventListener("input", (e) => {
  //       let minPrice = parseInt(priceInput[0].value),
  //         maxPrice = parseInt(priceInput[1].value);

  //       if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
  //         if (e.target.className === "input-min") {
  //           rangeInput[0].value = minPrice;
  //           range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
  //         } else {
  //           rangeInput[1].value = maxPrice;
  //           range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
  //         }
  //       }
  //     });
  //   });

  //   rangeInput.forEach((input) => {
  //     input.addEventListener("input", (e) => {
  //       let minVal = parseInt(rangeInput[0].value),
  //         maxVal = parseInt(rangeInput[1].value);

  //       if (maxVal - minVal < priceGap) {
  //         if (e.target.className === "range-min") {
  //           rangeInput[0].value = maxVal - priceGap;
  //         } else {
  //           rangeInput[1].value = minVal + priceGap;
  //         }
  //       } else {
  //         priceInput[0].value = minVal;
  //         priceInput[1].value = maxVal;
  //         range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
  //         range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
  //       }
  //     });
  //   });

  let productSaveBtn = document.querySelectorAll(".product_save_btn a");
  productSaveBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentElement.classList.toggle("saved");
    });
  });

  let checkboxWrapperBlack = document.querySelectorAll(
    ".checkbox_wrapper.black"
  );
  let allSelect = document.querySelector(".all_select");
  if (allSelect) {
    allSelect.querySelector(".sel").addEventListener("input", function (e) {
      this.classList.toggle("checked");
      if (this.classList.contains("checked")) {
        checkboxWrapperBlack.forEach(function (inp) {
          console.log(inp);
          inp.querySelector("input").checked = true;
        });
      } else {
        checkboxWrapperBlack.forEach(function (inp) {
          console.log(inp);
          inp.querySelector("input").checked = false;
        });
      }
    });
  }
  let cancelAll = document.querySelector(".cancel_all");
  if (cancelAll) {
    cancelAll.addEventListener("click", function (e) {
      e.preventDefault();
      checkboxWrapperBlack.forEach(function (inp) {
        console.log(inp);
        inp.querySelector("input").checked = false;
      });
    });
  }
});
