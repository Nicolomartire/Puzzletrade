import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
	const id = req.query.id

	const newUser = await prisma.user1.delete({
		where: {
			id: id,
		},
	});

	res.status(200).json(newUser, { sucess: true });

	console.warn("Sucessfully deleted user:", newUser);
}
