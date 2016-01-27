(function($) {
	$(document).ready(function() {

		// функция выделяет переданное (starrating) количество звёзд в рейтинге (wrapper)
		function changeStarRatingView(wrapper, starrating) {
			var activeClass = 'starrating__item--active';

			// сбрасываем предыдущий рейтинг
			for (var i = 5; i > 0; i--) {
				wrapper.removeClass('starrating--active-' + i);
			}

			// устанавливаем новый рейтинг
			wrapper.addClass('starrating--active-' + starrating);
		}

		// функция сохраняет отправляет на сервер и запускает changeStarRatingView
		function saveStarRating(wrapper, starrating) {

			// тут мы сохраняем новый рейтинг (вероятно с помощью ajax)
			console.log('Сохраняем новый рейтинг = ' + starrating);

			// записываем сохранённый рейтинг в атрибут
			wrapper.data('starrating', starrating);

			// обновляем звёздочки визуально
			changeStarRatingView(wrapper, starrating);
		}

		// по клику на звезду - сохраняем новый рейтинг
		$('.starrating--input .starrating__item').on('click', function() {
			var wrapper = $(this).parent();
			var starrating = $(this).data('starrating');

			// сохраняем новый рейтинг
			saveStarRating(wrapper, starrating);
		});

		// по наведению на звезду - показываем как мог бы выглядеть рейтинг
		$('.starrating--input .starrating__item').on('mouseenter', function() {
			var wrapper = $(this).parent();
			var starrating = $(this).data('starrating');

			changeStarRatingView(wrapper, starrating);
		});

		// по уходу курсора от обёртки рейтинга - обновляем рейтинг визуально
		$('.starrating--input .starrating__item').on('mouseleave', function() {
			var wrapper = $(this).parent();
			var starrating = wrapper.data('starrating');

			changeStarRatingView(wrapper, starrating);
		});

	});
})(jQuery);
