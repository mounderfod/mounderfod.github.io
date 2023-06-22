updateDate = () => {
  const d = new Date();
  $("#timedate").text(
    `The time is ${(d.getHours() < 10 ? "0" : "") + d.getHours()}:${
      (d.getMinutes() < 10 ? "0" : "") + d.getMinutes()
    }:${
      (d.getSeconds() < 10 ? "0" : "") + d.getSeconds()
    } and the date is ${d.toLocaleString("en-us", {
      weekday: "long",
    })} ${d.getDate()} ${d.toLocaleString("en-us", {
      month: "long",
    })} ${d.getFullYear()}`
  );
};
time = setInterval(updateDate, 1000);
