# jQuery.fancyTable

A jQuery plugin for making html tables searchable and sortable with pagination.

## Installation

Manually by including the script *after* the jQuery library

	<script src="/path/to/fancyTable.min.js"></script>

## Usage

	<script type="text/javascript">
		$(document).ready(function() {
			$(".sampleTable").fancyTable({
				sortColumn:0,
				pagination: true,
				perPage:10,
				globalSearch:true
			});		
		});
	</script>

## Options

**inputStyle** - Style attributes to use for <input>

    inputStyle: 'color:black;'

*Default: ''*

**inputPlaceholder** - Placeholder to use for <input>

    inputPlaceholder: 'Sök...'

*Default: 'Search...'*

**pagination** - Use pagination or not

    pagination: true

*Default: false*

**paginationClass** - CSS class to use for pagination buttons

    pagination: 'btn btn-primary'

*Default: 'btn btn-light'*

**paginationClassActive** - CSS class to use for active pagination buttons

    pagination: 'someClass'

*Default: 'active'*

**pagClosest** - Create pagination buttons for tbe n closest pages

    pagClosest: 5

*Default: 3*

**perPage** - Rows per page when using pagination

    perPage: 5

*Default: 10*

**sortable** - Should the table be sortable or not

    sortable: false

*Default: true*

**searchable** - Should the table be searchable or not

    searchable: false

*Default: true*
