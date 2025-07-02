import prisma from "../src/infrastructures/db.infrastructure";

console.log("[INFO] Seeding database...");

async function main() {
	console.log("[DEBUG] Running createMany...");
	
	const resultKriteria = await prisma.kriteria_pendaftaran_kp.createMany({
		data: [
			{
				id: 0,
				nama: "surat penolakan instansi",
			},
			{
				id: 1,
				nama: "surat pengantar instansi",
			},
			{ id: 2, nama: "surat balasan dari instansi" },
			{ id: 3, nama: "id penunjukkan dosen pembimbing" },
			{ id: 4, nama: "surat penunjukkan dosen pembimbing" },
			{
				id: 5,
				nama: "surat perpanjangan kerja praktik",
			},
		],
		skipDuplicates: true,
	});
	
	console.log(
		"[DEBUG] Result of inserted ruangan createMany:",
		resultKriteria.count > 0
			? resultKriteria
			: "Data was inserted previously, no new data inserted."
	);

	const resultRuangan = await prisma.ruangan.createMany({
		data: [
			{ nama: "FST-301" },
			{ nama: "FST-302" },
			{ nama: "FST-303" },
			{ nama: "FST-304" },
			{ nama: "FST-305" },
			{ nama: "FST-306" },
		],
		skipDuplicates: true,
	});

	console.log(
		"[DEBUG] Result of inserted ruangan createMany:",
		resultRuangan.count > 0
			? resultRuangan
			: "Data was inserted previously, no new data inserted."
	);
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
