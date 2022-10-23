import { StyleCommissionInfo } from '../models/commission-info';


// Don't forget to give these approximate USD values...
export const DIGITAL_STYLES: StyleCommissionInfo[] = [
	{
		name: 		 "Line Art",
		description: "Line Art of your character. Fill and outline colour may be specified.",
		USDPrice:	 20,
		imgURL: 	 "https://cdn.discordapp.com/attachments/868662317238349874/955597187843252285/Hector_Illustration_No_Sketch_Layer.png",
	},
	{
		name: 		 "Flat Colour",
		description: "Character line art with basic colouring, no shading.",
		USDPrice:	 25,
		imgURL: 	 "https://cdn.discordapp.com/attachments/1007697754023284907/1021402610730803231/Mark_and_Layla_Jumping_Crop.png",
	},
	{
		name: 		 "Fully Shaded",
		description: "Clean line art and fully coloured, giving the character depth and texture.",
		USDPrice:	 40,
		imgURL: 	 "https://cdn.discordapp.com/attachments/720790291317260401/1021479558987395153/Hybris.png",
	},
];

export const TRADITIONAL_STYLES: StyleCommissionInfo[] = [
	{
		name: 		 "Clean Sketch",
		description: "Graphite pencil drawing with contour boldly outlined.",
		USDPrice:	 15,
		// imgURL: 	 "https://cdn.discordapp.com/attachments/720790291317260401/805290879136301056/20210131_001314.jpg",
		imgURL: 	 "/assets/styleTradSketch.png",
	},
	{
		name: 		 "Shaded Graphite",
		description: "Graphite pencil drawing with shading, bold contour outlining.",
		USDPrice:	 35,
		imgURL: 	 "/assets/styleTradShaded.png"
	},
	{
		name: 		 "Charcoal",
		description: "Character will be drawn with charcoal, giving the piece rich black-and-white values",
		USDPrice:	 50,
		imgURL: 	 "/assets/styleTradCharcoal.png",
	},
	{
		name: 		 "Midtone Paper Charcoal",
		description: "Character will be drawn with charcoal and chalk on midtone paper, giving greather depth to the range of tones.",
		USDPrice:	 55,
		imgURL: 	 "/assets/styleTradMidtone.png",
	},
];

export const ADDITIONAL_INFO: { [key: string]: number } = {
	bustShot: 0,
	fullBody: 10,
	fullBodySketch: 5,

	simpleBackground: 0,
	complicatedBackground: 15,
	complicatedBackgroundSketch: 10,
}


// Bust shot vs. full framing
// Complciated background vs. simple background
// multiple characters
// PMD discount


// What about Reference sheets, covers, and emotes?
//  Will be treated as normal commissions. I am currently not commissioning emotes.

//