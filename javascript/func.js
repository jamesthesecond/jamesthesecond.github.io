
// The code starts here!

let iconsParent = $(".mainmobileNavIcon");  //the Icon variable. 
let iconsParentList = $(".mobilemenucontent"); //the content of the menu4Mobile

iconsParent.on("click", function(){
    iconsParentList.toggle(400);
    $($(iconsParent).children("div")[1]).toggleClass("moveIcon2 ",)
    $($(iconsParent).children("div")[0]).toggleClass("moveIcon1");
    $($(iconsParent).children("div")[0]).toggleClass("marginAdder");
    $($(iconsParent).children("div")[1]).toggleClass("marginAdder");
		$($(iconsParent).children("div")[2]).toggle();
		$($(iconsParent).children("div")[3]).toggle();
	
		
		

    
    
})



// For the About Page


// First a Div.. The div would have an image already,
// then every 2s animate the bacgroudn with jq animate method. 
// using a counter reduction... Let'sgo..


let slideMother = $(".ABOUTshowcase");
let counter = 0;
let mainBackgrounds = [
 	" linear-gradient(rgba(183, 5, 106, 0.536), rgba(199, 21, 134, 0.481) ), url('/images/slideOne.JPG')",
	" linear-gradient(rgba(183, 5, 106, 0.536), rgba(199, 21, 134, 0.481) ), url('/images/slideTwo.JPG')",
	" linear-gradient(rgba(183, 5, 106, 0.536), rgba(199, 21, 134, 0.481) ), url('/images/slideThree.JPG')"
]
setInterval(
	function(){
		
		slideMother.css({background: mainBackgrounds[counter] })
		slideMother.css({backgroundPosition: "center" })
		slideMother.css({backgroundSize: "cover" })
		counter++
		if(counter === 3){
			counter = 0;
		}

		
	}, 

	2000
)








