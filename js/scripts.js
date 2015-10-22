	    
		/* POPUP LANGUAGE */

		$(document).ready(function() {
		
			$('.overlay').overlay();

			$('.register').trigger('click');

			$('.modal-container a').click(function(){
				$('.overlay#register').trigger('hide');return false;

			});
		
		

		/*$(document).load(function(){
			
			$('.overlay#demo').show();

		})*/




		/* GOOGLE MAPS */

	    var locations = [
	      ['<img src="http://s9.postimg.org/xw3e7up2z/France_48.png?noCache=1444440860" width="30px" height="30px"/>', 59.284842, 18.019066],
	      ['<img src="http://s24.postimg.org/wbbjq3xm9/Germany_48.png?noCache=1444441395" width="30px" height="30px"/>', 59.291768, 18.016834],
	      ['<img src="http://s2.postimg.org/3unnzi211/India_48.png?noCache=1444441439" width="30px" height="30px"/>', 59.294486, 17.990055],
	      ['<img src=http://s4.postimg.org/yxok38mwp/USA_48.png?noCache=1444441468" width="30px" height="30px"/>', 59.283527, 17.972030],
	      ['<img src="http://s13.postimg.org/a5qj3b3tf/Spain_48.png?noCache=1444441549" width="30px" height="30px"/>', 59.291330, 18.029194],
	      ['<img src="http://s24.postimg.org/wbbjq3xm9/Germany_48.png?noCache=1444441395" width="30px" height="30px"/>', 59.307106, 18.022671],
	      ['<img src="http://s13.postimg.org/a5qj3b3tf/Spain_48.png?noCache=1444441549" width="30px" height="30px"/>', 59.316130, 18.040523],
	      ['<img src="http://s9.postimg.org/xw3e7up2z/France_48.png?noCache=1444440860" width="30px" height="30px"/>', 59.312801, 18.053398],
	      ['<img src="http://s2.postimg.org/3unnzi211/India_48.png?noCache=1444441439" width="30px" height="30px"/>', 59.313239, 18.060608],
	      ['<img src="http://s24.postimg.org/wbbjq3xm9/Germany_48.png?noCache=1444441395" width="30px" height="30px"/>', 59.278617, 17.973747],
	      ['<img src="http://s4.postimg.org/yxok38mwp/USA_48.png?noCache=1444441468" width="30px" height="30px"/>', 59.286903, 17.985163],
	      ['<img src="http://s2.postimg.org/3unnzi211/India_48.png?noCache=1444441439" width="30px" height="30px"/>', 59.277959, 17.987566],
	      ['<img src="http://s4.postimg.org/yxok38mwp/USA_48.png?noCache=1444441468" width="30px" height="30px"/>', 59.279514, 17.994984],
	      ['<img src="http://s24.postimg.org/wbbjq3xm9/Germany_48.png?noCache=1444441395" width="30px" height="30px"/>', 59.299444, 17.971772],
	      ['<img src="http://s4.postimg.org/yxok38mwp/USA_48.png?noCache=1444441468" width="30px" height="30px"/>', 59.290415, 17.990388],
	      ['<img src="http://s2.postimg.org/3unnzi211/India_48.png?noCache=1444441439" width="30px" height="30px"/>', 59.289341, 18.003085],
	      ['<img src="http://s9.postimg.org/xw3e7up2z/France_48.png?noCache=1444440860" width="30px" height="30px"/>', 59.284845, 18.009939],
	      ['<img src="http://s4.postimg.org/yxok38mwp/USA_48.png?noCache=1444441468" width="30px" height="30px"/>', 59.301034, 18.000514],
	      ['<img src="http://s24.postimg.org/wbbjq3xm9/Germany_48.png?noCache=1444441395" width="30px" height="30px"/>', 59.301551, 17.991011],
	      ['<img src="http://s2.postimg.org/3unnzi211/India_48.png?noCache=1444441439" width="30px" height="30px"/>', 59.299165, 17.983767],
	      ['<img src="http://s4.postimg.org/yxok38mwp/USA_48.png?noCache=1444441468" width="30px" height="30px"/>', 59.292961, 17.975978],
	      ['<img src="http://s9.postimg.org/xw3e7up2z/France_48.png?noCache=1444440860" width="30px" height="30px"/>', 59.274141, 17.963827],
	      ['<img src="http://s4.postimg.org/yxok38mwp/USA_48.png?noCache=1444441468" width="30px" height="30px"/>', 59.294790, 17.954558],
	      ['<img src="http://s24.postimg.org/wbbjq3xm9/Germany_48.png?noCache=1444441395" width="30px" height="30px"/>', 59.286039, 17.952065],
	      ['<img src="http://s2.postimg.org/3unnzi211/India_48.png?noCache=1444441439" width="30px" height="30px"/>', 59.277922, 17.935084],
	      ['<img src="http://s4.postimg.org/yxok38mwp/USA_48.png?noCache=1444441468" width="30px" height="30px"/>', 59.288903, 17.916702],
	      ['<img src="http://s9.postimg.org/xw3e7up2z/France_48.png?noCache=1444440860" width="30px" height="30px"/>', 59.308549, 17.936331],
	      ['<img src="http://s24.postimg.org/wbbjq3xm9/Germany_48.png?noCache=1444441395" width="30px" height="30px"/>', 59.273147, 18.019520],
	      ['<img src="http://s4.postimg.org/yxok38mwp/USA_48.png?noCache=1444441468" width="30px" height="30px"/>', 59.274022, 18.038838],
	      ['<img src="http://s2.postimg.org/3unnzi211/India_48.png?noCache=1444441439" width="30px" height="30px"/>', 59.264867, 17.985559],
	      ['<img src="http://s4.postimg.org/yxok38mwp/USA_48.png?noCache=1444441468" width="30px" height="30px"/>', 59.284686, 18.033853],
	      ['<img src="http://s24.postimg.org/wbbjq3xm9/Germany_48.png?noCache=1444441395" width="30px" height="30px"/>', 59.299801, 18.041486],
	      ['<img src="http://s2.postimg.org/3unnzi211/India_48.png?noCache=1444441439" width="30px" height="30px"/>', 59.269326, 17.949105],
	      ['<img src="http://s4.postimg.org/yxok38mwp/USA_48.png?noCache=1444441468" width="30px" height="30px"/>', 59.291449, 17.935552],
	      ['<img src="http://s24.postimg.org/wbbjq3xm9/Germany_48.png?noCache=1444441395" width="30px" height="30px"/>', 59.312048, 17.997554],
	      ['<img src="http://s9.postimg.org/xw3e7up2z/France_48.png?noCache=1444440860" width="30px" height="30px"/>', 59.315387, 18.013600],
	      ['<img src="http://s2.postimg.org/3unnzi211/India_48.png?noCache=1444441439" width="30px" height="30px"/>', 59.317454, 17.963749],
	      ['<img src="http://s4.postimg.org/yxok38mwp/USA_48.png?noCache=1444441468" width="30px" height="30px"/>', 59.322939, 17.943652],
	      ['<img src="http://s24.postimg.org/wbbjq3xm9/Germany_48.png?noCache=1444441395" width="30px" height="30px"/>', 59.326753, 17.973252],
	      ['<img src="http://s4.postimg.org/yxok38mwp/USA_48.png?noCache=1444441468" width="30px" height="30px"/>', 59.288903, 18.058467],
	      ['<img src="http://s2.postimg.org/3unnzi211/India_48.png?noCache=1444441439" width="30px" height="30px"/>', 59.279991, 18.053170],
	      ['<img src="http://s24.postimg.org/wbbjq3xm9/Germany_48.png?noCache=1444441395" width="30px" height="30px"/>', 59.273306, 18.073578],

	    ];

	    var map = new google.maps.Map(document.getElementById('map'), {
	      zoom: 13,
	      center: new google.maps.LatLng(59.297992, 18.009710),
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    });

	    // var infowindow = new google.maps.InfoWindow();
	    

		var infowindow = new google.maps.InfoWindow({
	    content: locations,
	    maxWidth: 30
	  	});

	    var marker, i;

	    for (i = 0; i < locations.length; i++) {  
	      marker = new google.maps.Marker({
	        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	        map: map,
	        icon: "http://s2.postimg.org/d8qqzu251/map_pin_small_green_1_X.png",
	      });

	      google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
	        return function() {
	          infowindow.setContent(locations[i][0]);
	          infowindow.open(map, marker);
	        }
	      })(marker, i));

	      google.maps.event.addListener(marker, 'mouseout', (function(marker, i) {
	        return function() {
	          infowindow.setContent(locations[i][0]);
	          infowindow.close()
	        }
	      })(marker, i));

	      marker.addListener('click', function() {
		    //Here you call your custom function to open the sidebar
		    OpenRightSidebar('.right-sidebar');
		  });


	    }

	    function OpenRightSidebar(){
	    	$(".right-sidebar").show();
	    }

	    // http://www2.psd100.com/ppp/2013/10/0501/Orange-push-pin-icon-positioning-1005121712.png


		$('.map').click(function () {
		    $('.maps iframe').css("pointer-events", "auto");

		});
	    

	  	/* RIGHT SIDEBAR HIDE */

	    $(".close-icon").click(function(){
	        $(".right-sidebar").hide();
	    });


	    /* LEFT SIDEBAR HIDE */

	    $(".menu-icon").click(function(){
	        $(".sidebar").hide();
	        $(".main").css({paddingLeft: 0});

	    });


	    /* LEFT SIDEBAR SHOW */

	    $(".top-menu-icon").click(function(){
	        $(".sidebar").show();
	        $(".main").css({paddingLeft: 250});

	    });

	    $(".button-bottom").click(function(){
	        $(".overlay1").hide();

	    });
});

		// Slide in and out effect animation
		// http://stackoverflow.com/questions/16989585/css-3-slide-in-from-left-transition