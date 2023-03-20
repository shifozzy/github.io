$(function(){ 

    $('.header-course').click(function(){
      $('.popup-container').fadeIn(500);
      $('body').addClass('stop-scrolling');
      $('.popup').animate({
        width: '300px',
        height: '200'
      } ,400);
    });

    $('.popup-delete').click(function(){
      $('.popup-container').fadeOut(400);
      $('body').removeClass('stop-scrolling');
      $('.popup').animate({
        width: 0,
        height: 0
      } ,400);
    });
  });

      ///новая функция :

      $(function(){
        function changeAttr (elements, newAttr, newValue){
          let NewClass = "."+elements;
          $(NewClass).attr(newAttr, newValue);
        }
        changeAttr('header-course', 'title','Узнать курс');
      });

$(function(){

  $('header').append(
    $.get
      ('http://data.fixer.io/api/latest',
      {'access_key': '8096079344a4c8982368fe673508318a'}, 
        function(response){
              
          $('.pop-euro').text(response.rates.RUB.toFixed(2));
              
          $('.pop-dollar').text((response.rates.RUB/response.rates.USD).toFixed(2));

      })
    );

    $('.bar-date-time').append(
      new Date().toLocaleString()
    )

   /////новая функция:
   $('.news-link').click(function(){
    let w = $(this).width();
    alert (w);

    let h = $(this).height();
    alert (h);
  });

   function widthHeight (element) {
     let ClassName= "."+element ;
     let w = $ (ClassName).width();
     let h = $ (ClassName).height();
     $('.news-title').text('Ширина:'+ w +' Высота: '+h);
   }
   widthHeight ('left__button');

   ////новая функция :

    $(function(){
      $('.top-news-title').fadeTo(4000, 0.5).fadeTo(2000, 8);

      $('.search-btn').click(function(e){
        let = answer = confirm('Вы действительно хотите отправить данные?');
         if(!answer){
           e.preventDefault();
         }
       })
    });
  
   ///новая функция :

    $('.left__button-click').click(function(){
      let Clone= $('.news-link')
      $(this).clone(Clone);
      $('#column-right').after( Clone);
    });
  
  
});


