import { Prisma, PrismaClient } from "../src/generated/prisma";
import { DefaultArgs } from "../src/generated/prisma/runtime/library";

const prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs> = new PrismaClient();

console.log("[INFO] Seeding database...");
async function main() {
	await prisma.ruangan
		.createMany({
			data: [
				{ nama: "FST-301" },
				{ nama: "FST-302" },
				{ nama: "FST-303" },
				{ nama: "FST-304" },
				{ nama: "FST-305" },
				{ nama: "FST-306" },
				{ nama: "FST-307" },
				{ nama: "FST-308" },
			],
            skipDuplicates: true,
		})
    }
    
    main()
	.catch((e) => {
        return console.error(`[ERROR] ${e.message}`);
	})
	.finally(async () => {
        console.log("[INFO] Database seeded successfully!");
		await prisma.$disconnect();
	});