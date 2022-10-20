import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
	const searchValue = req.query.value;

	const users = await prisma.puzzle1.findMany({
		where: {
			pieces: Number(searchValue),
		},
	});

	res.status(200).json({ users });
}
