$(this).datepicker({
    changeMonth: true,
    changeYear: true,
    dateFormat: "M yy",
    showButtonPanel: true,
    currentText: "This Month",
    onChangeMonthYear: function (year, month, inst) {
      $(this).val($.datepicker.formatDate('M yy', new Date(year, month - 1, 1)));
    },
    onClose: function(dateText, inst) {
      var month = $(".ui-datepicker-month :selected").val();
      var year = $(".ui-datepicker-year :selected").val();
      $(this).val($.datepicker.formatDate('M yy', new Date(year, month, 1)));
    }
  }).focus(function () {
    $(".ui-datepicker-calendar").hide();
  });