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
}
