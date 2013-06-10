$ ->
	$('#nav nav').on 'click','a:not(.active)', (event) ->
		$('.active',event.delegateTarget).removeClass 'active'
		$(@).addClass 'active'
