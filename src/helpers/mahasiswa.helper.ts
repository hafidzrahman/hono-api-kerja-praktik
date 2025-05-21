export default class MahasiswaHelper {
	public static getSemesterByNIM(nim: string): number {
        const angkatan = nim.substring(1, 3);
        const tahunMasuk = 2000 + Number(angkatan)

        const tahunSekarang = new Date().getFullYear();
        const bulanSekarang = new Date().getMonth();

        let tahunLewat = tahunSekarang - tahunMasuk;
        let semester = tahunLewat * 2;

        if (bulanSekarang >= 7) {
            semester += 1;
        }
        return semester;
    }

    public static getTahunAjaran(): number {
        // kalau memang masih pakai table, berarti harus query find data pada tahun table ajaran, jika tidak ada maka prisma.create
        const date = new Date();
        if (date.getMonth() >= 7) {
            return (date.getFullYear() * 10000 + (date.getFullYear() + 1) * 10 + 1)
        }
        
        return ((date.getFullYear() - 1) * 10000 + date.getFullYear()) * 10 + 1
    }

}

