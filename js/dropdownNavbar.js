$(".dropdown-toggle[data-toggle='dropdown']").on('click', function(event) {
  event.preventDefault();
  const element = $(`dropdown-${event.currentTarget.id}`);
  if ($(element).is(':visible')) {
    $(element).hide();
  } else {
    $(element).show();
  }
});