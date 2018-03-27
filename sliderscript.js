

$(“.slidercontent”).hide();

$(“.slidercontent:nth-child(1)”).fadeIn(“slow”); 

var current = 1; var max = $( “li” ).length +1; 

function changeUp() { 

	$(“.slidercontent”).hide(); 
	current += 1; 

   if (current === max) { 
       current = 1; 
	} 
	$(“.slidercontent:nth-child(“ + current + “)”).fadeIn(“slow”); }

function changeDown() { 
	$(“.slidercontent”).hide(); 
	current -= 1;
    if (current === 0) { 
	current = max — 1; 
   	}

$(“.slidercontent:nth-child(“ + current + “)”).fadeIn(“slow”); } 

$(“.sliderspot2”).click(function() { changeUp(); });

$(“.sliderspot”).click(function() { changeDown(); }); 

function startChange() { changeIt = setInterval(function(){ changeUp(); }, 10000); }; 

function stopChange() { clearInterval(changeIt); } 
$(“.sliderspot2”).click(function() { stopChange(); changeUp(); startChange(); });

$(“.sliderspot”).click(function() { stopChange(); changeDown(); startChange(); }); 

