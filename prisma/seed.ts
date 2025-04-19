import prisma from "../src/infrastructures/db.infrastructure";

console.log("[INFO] Seeding database...");

async function main() {
	console.log("[DEBUG] Running createMany...");
	const result = await prisma.ruangan.createMany({
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
	});

	console.log("[DEBUG] Result of inserted ruangan createMany:", result.count > 0 ? result : "Data was inserted previously, no new data inserted.");
}

main()
	.catch((e) => {
		console.error(`[ERROR] ${e.message}`);
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		console.log("[INFO] Seeding finished, disconnecting...");
		await prisma.$disconnect();
		process.exit(0);
	});