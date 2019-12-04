import "../styles/index.scss";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.scss";
import "bootstrap/dist/js/bootstrap.bundle";

window.$ = $;

function leaves() {
  $(".leaves").css({
    top: -$(document).scrollTop() / 2
  });
  $(document).on("scroll", function() {
    $(".leaves").css({
      top: -$(document).scrollTop() / 2
    });
  });
}

function bmrCalc() {
  const $height = $(`#height`);
  const $weight = $(`#weight`);
  const $age = $(`#age`);
  const $gender = $(`#gender`);
  const values = [Array(160).fill(), Array(200).fill(), Array(99).fill()];
  // remove console.log
  //console.log($height, $weight, $age);
  
  values.forEach((entry, i) => {
    console.log(entry);
    switch (i) {
      case 0:
        entry.forEach((x, y) => {
          $height.append(`<option value="${y + 100}">${y + 100}</option>`);
        });
        break;
      case 1:
        entry.forEach((x, y) => {
          $weight.append(`<option value="${y + 1}">${y + 1}</option>`);
        });
        break;
      case 2:
        entry.forEach((x, y) => {
          $age.append(`<option value="${y + 1}">${y + 1}</option>`);
        });
        break;
    }
  });
  $("#bmrCalc").on("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    var object = {};
    formData.forEach(function(value, key) {
      object[key] = value;
    });
    const { age, weight, height, gender } = object;
    let bmr = 0;
    if (gender == "male") {
      bmr =
        10 * parseInt(weight) + 6.25 * parseInt(height) - 5 * parseInt(age) + 5;
    } else {
      bmr =
        10 * parseInt(weight) +
        6.25 * parseInt(height) -
        5 * parseInt(age) -
        161;
    }
    $("#kcalOutput").text(bmr);
  });
}

function searchForm() {
  $(".search-button").on("click", function(e) {
    e.preventDefault();
    $(".search-form").toggle();
  });
  $(document).on("click", function(e) {
    if (!$(e.target).closest(".search-button").length) {
      $(".search-form").hide();
    }
  });
  $(".search-form").on("click", function(e) {
    e.stopPropagation();
  });
}

$(() => {
  leaves();
  searchForm();
  bmrCalc();
  $(".slider").slick({
    // normal options...
    infinite: false,
    prevArrow: false,
    nextArrow: false,
    // the magic
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: true
        }
      }
    ]
  });
});
