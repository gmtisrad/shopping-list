function handleForm () {
	$("#js-shopping-list-form").submit((event) => {
		event.preventDefault();
		let listItem = $('input[name=shopping-list-entry]');
		addTask(listItem.val());
		listItem.val('');
	});

	$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$(this).parent().parent().remove();
	});

	$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
		event.preventDefault();
		$(this).parent().prev().toggleClass('is-checked');
	});
}

function addTask (listItem) {
	$(".shopping-list").append(
		`<li>
			<span class=\"shopping-item\">${listItem}</span>
			<div class=\"shopping-item-controls\">
				<button class=\"shopping-item-toggle\">
            		<span class=\"button-label\">check</span>
          		</button>
          		<button class=\"shopping-item-delete\">
            		<span class=\"button-label\">delete</span>
          		</button>
        	</div>
      	</li>`);
}
$(handleForm());