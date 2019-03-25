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

**inputPlaceholder** - Placeholder to use for <input>

    inputPlaceholder: 'Sök...'

*Default: 'Search...'*

**inputStyle** - Style attributes to use for <input>

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

### Author: [Johan Johansson](https://github.com/myspace-nu)
