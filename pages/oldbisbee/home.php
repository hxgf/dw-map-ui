
<? // <div id="map"></div> ?>

<div id="gmap" data-id="home" class="std loading map-home"></div>


<div class="home-content">

	<div class="col col-1">
		{{#business_list_1}}
			{{#category}}
				<h3>{{category_title}}</h3>
				<ul>
					{{#business_list}}
					<li><a href="{{url}}">{{title}}</a></li>
					{{/business_list}}
				</ul>
			{{/category}}
		{{/business_list_1}}
	</div>
	
	
	<div class="col col-2">
		{{#business_list_3}}
			{{#category}}
				<h3>{{category_title}}</h3>
				<ul>
					{{#business_list}}
					<li><a href="{{url}}">{{title}}</a></li>
					{{/business_list}}
				</ul>
			{{/category}}
		{{/business_list_3}}
	</div>


	<div class="col col-3 home-events">
		<h3>What's happening</h3>
		<ul>
			{{#events_home}}
			<li><span class="date">{{date}}</span><span class="title"><a href="{{url}}">{{title}}</a></span></li>
			{{/events_home}}
		</ul>

<!-- fixit
		- sign up
		- social links
-->
	</div>


	
	<div class="clear"></div>

</div>