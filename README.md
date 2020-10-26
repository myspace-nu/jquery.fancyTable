# jQuery.fancyTable

A jQuery plugin for making html tables searchable and sortable with pagination.

[![Build Status](https://travis-ci.com/myspace-nu/jquery.fancyTable.svg?branch=master)](https://travis-ci.com/myspace-nu/jquery.fancyTable)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/myspace-nu/jquery.fancyTable/blob/master/LICENSE)

## Live demo

See a live demo on [CodePen](https://codepen.io/myspace-nu/full/ZVEKyR)

## Installation

Using npm

	npm install jquery.fancytable --save

Using CDN

	<script src="https://cdn.jsdelivr.net/npm/jquery.fancytable/dist/fancyTable.min.js"></script>

Or manually by including the script *after* the jQuery library

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

**globalSearch** - Use global search for all columns

    globalSearch: false

*Default: false*

**globalSearchExcludeColumns** - Defines a number of columns to exclude from the global search.

    globalSearchExcludeColumns: [2,5] // Exclude 2nd and 5th column.

*Default: undefined*

**inputPlaceholder** - Placeholder to use for &lt;input&gt;

    inputPlaceholder: 'Sök...'

*Default: 'Search...'*

**inputStyle** - Style attributes to use for &lt;input&gt;

    inputStyle: 'color:black;'

*Default: ''*

**onInit** - Function called after initialization

	onInit:function(){
		console.log({ element:this });
	}

**onUpdate** - Function called after each update (sort and search)

	onUpdate:function(){
		console.log({ element:this });
	}

**pagination** - Use pagination or not

    pagination: true

*Default: false*

**paginationClass** - CSS class to use for pagination buttons

    pagination: 'btn btn-primary'

*Default: 'btn btn-light'*

**paginationClassActive** - CSS class to use for active pagination buttons

    pagination: 'someClass'

*Default: 'active'*

**paginationElement** - Selector for element to place pagination controls in.

    paginationElement: '#someElement'

*Default: undefined* - Undefined will create a (remove any existing) table footer to place controls in.

**pagClosest** - Create pagination buttons for tbe n closest pages

    pagClosest: 5

*Default: 3*

**perPage** - Rows per page when using pagination

    perPage: 5

*Default: 10*

**searchable** - Should the table be searchable or not

    searchable: false

*Default: true*

**sortable** - Should the table be sortable or not

    sortable: false

*Default: true*

**sortColumn** - Column number for initial sorting

    sortColumn: 5

*Default: undefined*

**sortOrder** - Initial sort order

    sortOrder: 'descending' // Valid values are 'desc', 'descending', 'asc', 'ascending', -1 (descending) and 1 (ascending)

*Default: 'ascending'*

## Data attributes

**data-sortas="numeric"** - Used in the table header element <th> to define that values in the column should be sorted in numerical order (..., 8, 9, 10, 10.1, 12, ...)

	<th data-sortas="numeric">

**data-sortas="case-insensitive"** - Used in the table header element <th> to define that values in the column should be sorted case insensitive (a, B, c, D, ...)

	<th data-sortas="case-insensitive">

**data-sortvalue="`<value>`"** - Used in the table data element <td> to define an alternate value to be used when sorting

	<td>1</td>
	<td data-sortvalue="2">Two</td>
	<td>3</td>

	<td>Ghost</td>
	<td data-sortvalue="Fox and the Hound, The">The Fox and the Hound</td>
	<td>I Know What You Did Last Summer</td>


### Author: [Johan Johansson](https://github.com/myspace-nu)
