function doPickup(familyid) {	jConfirm('Are you sure you want to confirm this pickup?', 'Complete Pickup', function(r) {		if (r) {		$.post('/pantry/client/pickups/'+familyid, { did_submit: 'yes' },			function(data){				window.location = 'http://localhost/pantry/client/pickups';			});		}	});}function doDelivery(familyid) {	jConfirm('Are you sure you want to confirm this delivery?', 'Complete Delivery', function(r) {		if (r) {		$.post('/pantry/client/deliveries/'+familyid, { did_submit: 'yes' },			function(data){				window.location = 'http://localhost/pantry/client/deliveries';			});		}	});}function doDropoff(formid) {	jConfirm('Are you sure you want to confirm this drop off?', 'Complete Drop Off', function(r) {		if (r) {			$("#"+formid).submit();			window.location = 'http://localhost/pantry/client/records';		}	});}