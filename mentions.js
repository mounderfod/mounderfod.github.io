jQuery(function ($) {
  $("*[data-webmention-count]").each(function (i, e) {
    $.getJSON(
      "https://webmention.io/api/count",
      {
        target: $(e).data("url"),
      },
      function (data) {
        $(e).text(data.count + " mentions");
      }
    );
  });
});
