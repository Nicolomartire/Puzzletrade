import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
	const users = await prisma.user1.findMany({ include: { pusselref: true } });

	const body = req.body;

	const newUser = await prisma.user1.create({
		data: {
			firstname: body.firstName,
			lastname: body.lastName,
			email: body.email,
			city: body.city,
			piece: body.piece,
			genre: body.genre
		},
	});

	res.status(200).json(newUser, { sucess: true });
	console.warn("Sucessfully created use:", newUser);
}
