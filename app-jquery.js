$(document).ready(() => {
  // nav-bar
  var check = false;
  $("#responsive-button-navbar").click(() => {
    $(".navbar-collapse").toggle(0.3, "linear", () => {
      if (check === false) {
        $(".line-1").css("transform", "rotate(45deg) translate(5px, 0px)");
        $(".line-2").hide();
        $(".line-3").css("transform", "rotate(-45deg) translate(4px, 1px)");
        check = true;
      } else {
        $(".line-1").css("transform", "rotate(0) translate(0, 0)");
        $(".line-2").show();
        $(".line-3").css("transform", "rotate(0) translate(0, 0)");
        check = false;
      }
    });
  });

  //validate

  $(".download-button").click(() => {
    if ($("#input-name").val().trim() === "") {
      $("#validate-name").show();
      $("#validate-name").html("Name is required !");
    } else $("#validate-name").hide();
    if ($("#input-email").val().trim().length < 8) {
      $("#validate-email").show();
      $("#validate-email").html("Email must be at least 8 characters !");
    } else $("#validate-email").hide();
    if ($("#input-password").val().trim().length < 8) {
      $("#validate-password").show();
      $("#validate-password").html("Password must be at least 8 characters !");
    } else $("#validate-password").hide();

    // On Submit
    if (
      $("#input-name").val().trim() &&
      $("#input-email").val().trim().length >= 8 &&
      $("#input-password").val().trim().length >= 8
    ) {
      console.log(
        "name: ",
        $("#input-name").val().trim(),
        "\n",
        "email: ",
        $("#input-email").val().trim(),
        "\n",
        "password: ",
        $("#input-password").val().trim()
      );
      $(".download-button").attr("disabled", true);
      $.post("http://localhost:3001/api/login", {
        username: $("#input-name").val().trim(),
        password: $("#input-password").val().trim(),
      })
        .done((data) => {
          console.log(data);
          $("#validate-success").show();
          $("#validate-fail").hide();
          $("#validate-success").html(data.message);
          $(".download-button").attr("disabled", false);
        })
        .fail((xhr, status, error) => {
          $("#validate-success").hide();
          $("#validate-fail").show();
          $("#validate-fail").html(
            xhr.responseJSON.error || xhr.responseJSON.message
          );
          console.log(xhr, status, error);
          $(".download-button").attr("disabled", false);
        });
    }
  });

  //Slide Show
  var i = 0;
  const arr = [
    {
      imageSrc: "https://landkit.goodthemes.co/assets/img/photos/photo-1.jpg",
      iconTitle:
        "https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png",
      comment:
        "Landkit is hands down the most useful front end Bootstrap theme I have ever used. I can not wait to use it again for my next project.",
      footer: "Dave Gamache",
    },
    {
      imageSrc: "https://landkit.goodthemes.co/assets/img/photos/photo-26.jpg",
      iconTitle:
        "https://www.pngitem.com/pimgs/m/108-1087591_instagram-text-png-instagram-logo-png-horizontal-transparent.png",
      comment:
        "        I've never used a theme as versatile and flexible as Landkit. It's my go to for building landing sites on almost any project.",

      footer: "Rus D'SA",
    },
    {
      imageSrc: "https://landkit.goodthemes.co/assets/img/photos/photo-26.jpg",
      iconTitle:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png",
      comment:
        "        I've never used a theme as versatile and flexible as Landkit. It's my go to for building landing sites on almost any project.",

      footer: "dsadsadsa",
    },
  ];
  const showSlide = (i) => {
    $("#imageSrc").attr("src", arr[i].imageSrc);
    $("#headerImageSrc").attr("src", arr[i].iconTitle);
    $("#testimonial-comment").html(arr[i].comment);
    $("#comment-footer").html(arr[i].footer);
    $(".testimonial-row-2").toggleClass(function () {
      return $(this).is(".loaded, .preloaded") ? "loaded preloaded" : "loaded";
    });

    $("#pre-button").click(() => {
      if (i > 0) {
        i--;
      } else {
        i = arr.length - 1;
      }
      $(".testimonial-row-2").toggleClass(function () {
        return $(this).is(".loaded, .preloaded")
          ? "loaded preloaded"
          : "loaded";
      });
      $("#imageSrc").attr("src", arr[i].imageSrc);
      $("#headerImageSrc").attr("src", arr[i].iconTitle);
      $("#testimonial-comment").html(arr[i].comment);
      $("#comment-footer").html(arr[i].footer);
    });
    $("#next-button").click(() => {
      if (i < arr.length - 1) {
        i++;
      } else {
        i = 0;
      }
      $(".testimonial-row-2").toggleClass(function () {
        return $(this).is(".loaded, .preloaded")
          ? "loaded preloaded"
          : "loaded";
      });
      $("#imageSrc").attr("src", arr[i].imageSrc);
      $("#headerImageSrc").attr("src", arr[i].iconTitle);
      $("#testimonial-comment").html(arr[i].comment);
      $("#comment-footer").html(arr[i].footer);
    });
  };
  setInterval(() => {
    if (i < arr.length - 1) {
      i++;
    } else {
      i = 0;
    }
    showSlide(i);
  }, 2000);

  //type texting animation
  var a = 0;
  var stringArr = ["designers.", "founders.", "developers."];
  function typeWriter(string) {
    console.log(string);
    return new Promise((resolve, reject) => {
      var x = 0;
      var result = "";
      //type text
      function type(s) {
        if (x < s.length) {
          result += s.charAt(x);
          $(".texting").html(result);
          x++;
          setTimeout(() => type(s), 200);
        } else resolve();
      }
      type(string);
    });
  }
  var index = 0;
  const loop = async () => {
    if (index < stringArr.length) {
      const str = stringArr[index];
      await typeWriter(str);
      setTimeout(() => {
        index++;
        loop();
      }, 2000);
    } else {
      index = 0;
      loop();
    }
  };
  loop();
});
