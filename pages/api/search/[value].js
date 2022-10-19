import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const searchValue = req.query.value


	const users = await prisma.user1.findMany({ 
		where: { 
			firstname: {
				startsWith: searchValue
			}
		}
	});


	res.status(200).json({ users });
}
