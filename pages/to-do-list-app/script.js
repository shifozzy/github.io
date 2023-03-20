$(document).ready(function(){

	function initialState(){
		if (localStorage.getItem('comments')== null) {
			$('comments__none').show();
			}else{
				$('.comments__list').html(localStorage.getItem('comments'));
				$('.comments__none').hide();
			}
		}
		
		initialState()

		function addToStorage(){
			let listItems = $('.comments__list').html();
			localStorage.setItem('comments', listItems);
		}

 		function addComment () {
			let name = $('input').val(),	
		 		text = $('textarea').val()
		 		date = new Date().toLocaleString();

	 		if (name.length !== 0 && text.length !==0) {

				 $('.comments__none').hide();

				 $('input').removeClass('error');
				 $('textarea').removeClass('error');

				 $('.comments__list').append(`

					 <div class="comments__item">
						 <button class="comments__delete"></button>
						 <button class="comments__hide"></button>
						 <div class="comments__author">${name}</div>
						 <div class="comments__text">${text}</div>
						 <div class="comments__date">${date}</div>
					 </div>
					`);         

			 $('input').val('');
			 $('textarea').val('');
		 }else {
			 $('input').addClass('error');
			 $('textarea').addClass('error');
		  }

		 addToStorage();
 		}

	  $('.comments__add').on('click', function(e){
		  e.preventDefault();

		  addComment();
	  });

	 $('body').on('click', '.comments__delete', function(){   //делегирование

		  let item = $(this).parents('.comments__item');

		  item.remove();

		  let items= $('.comments__item');

			addToStorage();

		  if (items.length == 0) {
			  $('.comments__none').show();
			  localStorage.removeItem('comments');
		 }
	 });

	 $('body').on('click', '.comments__hide', function(){           //делегирование
		 $(this).parents('.comments__item').find('.comments__text, .comments__date').slideToggle();

	});

});