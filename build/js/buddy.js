'use strict';

document.addEventListener('DOMContentLoaded', function () {

  /********** iOS fix hover submenu **********/
  document.addEventListener('touchstart', function () {});
  /********** iOS fix hover submenu **********/

  /********** custom input number **********/
  var quantity = $('#quantity'),
      input = quantity.find('input[type="number"]'),
      btnUp = quantity.find('.quantity-up'),
      btnDown = quantity.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

  btnUp.click(function () {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    quantity.find("input").val(newVal);
    quantity.find("input").trigger("change");
  });

  btnDown.click(function () {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    quantity.find("input").val(newVal);
    quantity.find("input").trigger("change");
  });
  /********** custom input number **********/
}, false);
//# sourceMappingURL=buddy.js.map
