$(() => {
  $(window).on('load', function () {
    $('.preloader__wrp').fadeOut();
  });
});

$(() => {
  $('.js-tel').mask("+7 (999) 999-99-99");
  $('.js-mask-four-symbols').mask("9999");
  $('.js-mask-six-symbols').mask("999999");
  $('.js-mask-eleven-symbols').mask("99999999999");
  $('.js-mask-snils').mask("999-999-999 99");
  $('.js-mask-card').mask("9999 9999 9999 9999");
  $('.js-mask-card-period').mask("99 / 99");
});

$(() => {
  if ($(window).width() < 1200) {
    $('.nav-wrapper').hide();
    $('.js-toggle-nav').fadeIn();
  }

  $(window).resize(function() {
    if ($(window).width() < 1200) {
      $('.nav-wrapper').hide();
      $('.js-toggle-nav').fadeIn();
    } else {
      $('.js-toggle-nav').hide();
      $('.nav-wrapper').fadeIn();
    }
  })
})

$(() => {
  if ($("input[type='date']").val() != "") {
    $("input[type='date']").addClass('filled')
  }
  $("input[type='date']").change(function() {
    if ($(this).val() != "") {
      $(this).addClass('filled');
    } else {
      $(this).removeClass('filled');
    }
  });
});

$(() => {
  $(".js-upload-file").change(function() {
    if ($(this)[0].files && $(this)[0].files[0]) {
      const input = $(this);

      var reader = new FileReader();

      reader.onload = function (e) {
        console.log($(this));
        input
          .parents('.file')
          .addClass('file--uploaded')
          .find('.file__picture')
          .attr('src', e.target.result)
      };

      reader.readAsDataURL($(this)[0].files[0]);
    }
  });
})

$(() => {
  $('.js-toggle-bill-mode').on('click', function (e) {
    e.preventDefault();
    $(this).hide().next('.bill-form').fadeIn();
  })
});

$(() => {
  $('.js-tariff-2').hide();
  $('.tariff').on('click', function () {
    if (!($(this).hasClass('tariff--active'))) {
      $('.tariff').removeClass('tariff--active');
      $(this).addClass('tariff--active');

      if ($(this).attr('data-tariff') == 2) {
        $('.js-tariff-1').hide();
        $('.js-tariff-2').fadeIn();
      } else {
        $('.js-tariff-1').fadeIn();
        $('.js-tariff-2').hide();
      }
    }
  })
});

$(() => {
  $.fn.select2.amd.define('select2/i18n/ru',[],function () {
    // Russian
    return {
      errorLoading: function () {
        return 'Результат не может быть загружен.';
      },
      inputTooLong: function (args) {
        var overChars = args.input.length - args.maximum;
        var message = 'Пожалуйста, удалите ' + overChars + ' символ';
        if (overChars >= 2 && overChars <= 4) {
          message += 'а';
        } else if (overChars >= 5) {
          message += 'ов';
        }
        return message;
      },
      inputTooShort: function (args) {
        var remainingChars = args.minimum - args.input.length;

        var message = 'Пожалуйста, введите ' + remainingChars + ' или более символов';

        return message;
      },
      loadingMore: function () {
        return 'Загружаем ещё ресурсы…';
      },
      maximumSelected: function (args) {
        var message = 'Вы можете выбрать ' + args.maximum + ' элемент';

        if (args.maximum  >= 2 && args.maximum <= 4) {
          message += 'а';
        } else if (args.maximum >= 5) {
          message += 'ов';
        }

        return message;
      },
      noResults: function () {
        return 'Ничего не найдено';
      },
      searching: function () {
        return 'Поиск…';
      }
    };
  });
  $(".js-company-select").select2({
    placeholder: 'Название компании',
    language: 'ru'
  });
  $(".js-common-select").select2({
    minimumResultsForSearch: -1,
  });
});

$(() => {
  $('.payment-content__item:not(:first-child)').hide();
  $('.js-payment-select').on('select2:select', function (e) {
    const data = e.params.data;
    $('.payment-content__item')
        .hide();
    $(`.payment-content__item[data-payment=${data.id}]`)
        .fadeIn();
  });
});

$(() => {
  $('[data-fancybox]').fancybox({
    animationDuration: 600,
    animationEffect: 'slide-in-in',
    touch: false,
    scrolling: true,
  });
  // $(document).on('click', function (e) {
  //   const container = $('.header');
  //   if (!container.is(e.target) && container.has(e.target).length === 0) {
  //     $('.burger').removeClass('active');
  //     $('body').removeClass('menu-open fixed');
  //     $('.js-toggle-search').removeClass('active');
  //     $('.header-search').fadeOut();
  //   }
  // });
});

$(() => {
  // todo: delete on build
  window.goBack = function (e){
    var defaultLocation = "http://localhost:3000/";
    var oldHash = window.location.hash;

    history.back();

    var newHash = window.location.hash;

    if(
        newHash === oldHash &&
        (typeof(document.referrer) !== "string" || document.referrer  === "")
    ){
      window.setTimeout(function(){
        // redirect to default location
        window.location.href = defaultLocation;
      },1000); // set timeout in ms
    }
    if(e){
      if(e.preventDefault)
        e.preventDefault();
      if(e.preventPropagation)
        e.preventPropagation();
    }
    return false; // stop event propagation and browser default event
  }

  $('.js-history-back').on('click', function (e) {
    e.preventDefault;
    goBack();
  })
});
