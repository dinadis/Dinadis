$("form :input").focus(function() {
  $("label[for='" + this.id + "']").addClass("labelfocus");
}).blur(function() {
  if ( !$(this).val().length ) $("label[for='" + this.id + "']").removeClass("labelfocus");
});