var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 85%",
    end: "70% 50%",
    scrub: true,
  },
});

tl.to(
  "#fanta",
  {
    top: "105%",
    left: "0%",
  },
  "orange"
);
tl.to(
  "#orange-cut",
  {
    top: "160%",
    left: "23%",
  },
  "orange"
);
tl.to(
  "#orange",
  {
    width: "15%",
    top: "160%",
    right: "10%",
  },
  "orange"
);
tl.to(
  "#leaf",
  {
    top: "110%",
    rotate: "130deg",
    left: "70%",
  },
  "orange"
);
tl.to(
  "#leaf2",
  {
    top: "110%",
    rotate: "130deg",
    left: "0%",
  },
  "orange"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
  },
});

tl2.to(
  "#fanta",
  {
    width: "30%",
    top: "200%",
    left: "35%",
  },
  "ca"
);
