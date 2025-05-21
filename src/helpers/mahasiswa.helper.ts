export default class MahasiswaHelper {
	// Static helper untuk decode JWT payload
	public static getSemesterByNIM(nim: string): number {
        const angkatan = nim.substring(0, 2);
        const tahunSekarang = new Date().getFullYear().toString().substring(2, 4);
        let semester = (Number(angkatan) - Number(tahunSekarang)) * 2;
        if (new Date().getMonth() >= 7) {
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

