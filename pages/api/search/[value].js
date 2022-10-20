import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
	const {value, type = 'user'} = req.query

	// const id = req.query.id;

	// const puzzles = await prisma.puzzle1.delete({
	// 	where: {
	// 		id: id
	// 	}
	// })

	const queryType = {
		'user': 'user1',
		'puzzle': 'puzzle1',
	}[type]

	const searchType = {
		'user': 'city',
		'puzzle': 'pieces',
	}[type]

	const searchObj = type === 'puzzle' ? {
		gte: Number(value)
	} : {
		startsWith: value,
	}

	const result = await prisma[queryType].findMany({
		where: {
			[searchType]: {
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
