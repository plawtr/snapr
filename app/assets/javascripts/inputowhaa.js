$('#snap_tag_name').inputosaurus({
			width: '350px',
			allowDuplicates: false,
			inputDelimiters: [',', ';', ' '],
			outputDelimiter: [' '],
			change : function(ev){
				$('#widget1_reflect').val(ev.target.value);
			}
		});
