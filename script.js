(function($) {
	$(document).ready(function() {

		// функция выделяет переданное (rate) количество звёзд в рейтинге (wrapper)
		function changeRateView(wrapper, rate) {
			var activeClass = 'rate__star--active';

			// сбрасываем предыдущий рейтинг
			for (var i = 5; i > 0; i--) {
				wrapper.removeClass('rate--active-' + i);
			}

			// устанавливаем новый рейтинг
			wrapper.addClass('rate--active-' + rate);
		}

		// функция сохраняет отправляет на сервер и запускает changeRateView
		function saveRate(wrapper, rate) {

			// тут мы сохраняем новый рейтинг (вероятно с помощью ajax)
			console.log('Сохраняем новый рейтинг = ' + rate);

			// записываем сохранённый рейтинг в атрибут
			wrapper.data('rate', rate);

			// обновляем звёздочки визуально
			changeRateView(wrapper, rate);
		}

		// по клику на звезду - сохраняем новый рейтинг
		$('.rate--input .rate__star').on('click', function() {
			var wrapper = $(this).parent();
			var rate = $(this).data('rate');

			// сохраняем новый рейтинг
			saveRate(wrapper, rate);
		});

		// по наведению на звезду - показываем как мог бы выглядеть рейтинг
		$('.rate--input .rate__star').on('mouseenter', function() {
			var wrapper = $(this).parent();
			var rate = $(this).data('rate');

			changeRateView(wrapper, rate);
		});

		// по уходу курсора от обёртки рейтинга - обновляем рейтинг визуально
		$('.rate--input .rate__star').on('mouseleave', function() {
			var wrapper = $(this).parent();
			var rate = wrapper.data('rate');

			changeRateView(wrapper, rate);
		});

	});
})(jQuery);
