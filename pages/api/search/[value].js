import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// http://localhost:3000/api/search/100?type=puzzle&field=pieces
// http://localhost:3000/api/search/Stockh?type=puzzle&field=city
// http://localhost:3000/api/search/Stockh?type=user&field=city

export default async function handler(req, res) {
	const {value = '', type = '', field = ''} = req.query

	const table = {
		'user': 'user1',
		'puzzle': 'puzzle1',
	}[type] || 'user1'

	const searchField = {
		'city': 'city',
		'pieces': 'pieces',
		// Need more search fields? Add them here
	}[field] || 'city'

	const searchObj = isNaN(value) ? {
		startsWith: value,
	} : {
		gte: Number(value)
	}

	const result = await prisma[table].findMany({
		where: {
			[searchField]: {
				...searchObj
			},
		},
		// select: {
		// 	firstname: true,
		// 	lastname: true,
		// }
	});

	res.status(200).json({ result });
}
