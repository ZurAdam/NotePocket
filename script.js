$("#newNote").click(function() {
  console.log("clicked");
  $("#notes").append(
    "<li>" +
      "<textarea class='note-title' placeholder='Podaj tytuł' maxlength='15'/>" +
      "<textarea class='note-content' placeholder='Wprowadź treść'/>" +
      "<button class='close'/>" +
      "</li>"
  );

  $(".close").click(function() {
    console.log("clicked close button");
    $(this)
      .closest("li")
      .css("display", "none");
  });
});
