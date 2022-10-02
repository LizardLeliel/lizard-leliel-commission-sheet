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
		name: 		 "Pencil Sketch",
		description: "Graphite pencil drawing with contour boldly outlined.",
		USDPrice:	 15,
		imgURL: 	 "https://cdn.discordapp.com/attachments/720790291317260401/805290879136301056/20210131_001314.jpg",
	},
	{
		name: 		 "Charcoal",
		description: "Character will be drawn with charcoal, giving the piece rich black-and-white values",
		USDPrice:	 50,
		imgURL: 	 "https://cdn.discordapp.com/attachments/720790291317260401/924127041467600956/20211224_215931.jpg",
	},
	{
		name: 		 "Midtone Paper Charcoal",
		description: "Character will be drawn with charcoal and chalk on midtone paper, giving greather depth to the range of tones.",
		USDPrice:	 60,
		imgURL: 	 "https://cdn.discordapp.com/attachments/720790291317260401/993668447923863573/20220704_205004.jpg",
	},
];