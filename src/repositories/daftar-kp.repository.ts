import prisma from "../infrastructures/db.infrastructure";
import { RepositoryPendaftaranInstansiInterface, RepositoryPendaftaranKPInterface, RepositoryRiwayatPendaftaranKPInterface } from "../types/daftar-kp/repository.type";
import MahasiswaHelper from "../helpers/mahasiswa.helper"
import { APIError } from "../utils/api-error.util";
import { pendaftaran_kp } from "../generated/prisma";

export default class DaftarKPRepository {

    public static async createPermomohonanKP({nim, idInstansi, tujuanSuratInstansi, tanggalMulai} : RepositoryPendaftaranKPInterface ) : Promise<void> {
        console.log(MahasiswaHelper.getTahunAjaran())
        await prisma.pendaftaran_kp.create({
            data : {
                nim,
                tanggal_pengajuan : new Date(),
                tanggal_mulai : tanggalMulai,
                id_instansi : idInstansi,
                tujuan_surat_instansi : tujuanSuratInstansi,
                id_tahun_ajaran : MahasiswaHelper.getTahunAjaran(),
                level_akses : 1
            }
        })
    }

    public static async createPermomohonanInstansi({nim, namaInstansi, alamatInstansi, namaPenanggungJawabInstansi, telpPenanggungJawabInstansi, jenisInstansi, longitude, latitude, profilSingkat} : RepositoryPendaftaranInstansiInterface ) : Promise<void> {
        await prisma.instansi.create({
            data : {
                nama : namaInstansi,
                alamat : alamatInstansi,
                longitude,
                latitude,
                jenis : jenisInstansi,
                profil_singkat : profilSingkat,
                nama_pj : namaPenanggungJawabInstansi,
                no_hp_pj : telpPenanggungJawabInstansi
            }
        })
    }

    public static async getRiwayatPendaftaranKP(nim : string) : Promise<RepositoryRiwayatPendaftaranKPInterface[] | null> {
        const data =  await prisma.pendaftaran_kp.findMany({
            where : {
                nim
            },
            select : {
                status : true,
                tanggal_mulai : true,
                instansi : {
                    select : {
                        nama : true
                    }
                }
            }
        })

        

        return data
    }

    public static async postSuratPengantarKP(nim : string, linkSuratPengantarKP : string) : Promise<void> {
        const dataKPTerbaru = await prisma.pendaftaran_kp.findFirst({
            where : {
                nim
            },
            orderBy : {
                tanggal_pengajuan : 'desc'
            }
            ,
            take : 1
        })

        // jika 0 berarti gagal, 9 berarti udh lulus pendaftaran dan punya akses utk lanjut kp (jika perpanjangan sudah dibuka oleh Koordinator KP)

        if (!dataKPTerbaru || !(dataKPTerbaru.level_akses === 1)) {
            throw new APIError("Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait")
        }

        await prisma.pendaftaran_kp.update({
            where : {
                id : dataKPTerbaru.id
            },
            data : {
                link_surat_pengantar : linkSuratPengantarKP,
                level_akses : dataKPTerbaru.level_akses + 1
            }
        })

    }

    public static async postSuratBalasanKP(nim : string, linkSuratBalasanKP : string) : Promise<void> {
        const dataKPTerbaru = await prisma.pendaftaran_kp.findFirst({
            where : {
                nim
            },
            orderBy : {
                tanggal_pengajuan : 'desc'
            }
            ,
            take : 1
        })

        // jika 0 berarti gagal, 9 berarti udh lulus pendaftaran dan punya akses utk lanjut kp (jika perpanjangan sudah dibuka oleh Koordinator KP)

        if (!dataKPTerbaru || !(dataKPTerbaru.level_akses === 3)) {
            throw new APIError("Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait")
        }

        await prisma.pendaftaran_kp.update({
            where : {
                id : dataKPTerbaru.id
            },
            data : {
                link_surat_balasan : linkSuratBalasanKP,
                level_akses : dataKPTerbaru.level_akses + 1
            }
        })

    }

    public static async postIdPengajuanDosenPembimbingKP(nim : string, idPengajuanDosenPembimbingKP : string) : Promise<void> {
        const dataKPTerbaru = await prisma.pendaftaran_kp.findFirst({
            where : {
                nim
            },
            orderBy : {
                tanggal_pengajuan : 'desc'
            }
            ,
            take : 1
        })

        // jika 0 berarti gagal, 9 berarti udh lulus pendaftaran dan punya akses utk lanjut kp (jika perpanjangan sudah dibuka oleh Koordinator KP)

        if (!dataKPTerbaru || !(dataKPTerbaru.level_akses === 5)) {
            throw new APIError("Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait")
        }

        await prisma.pendaftaran_kp.update({
            where : {
                id : dataKPTerbaru.id
            },
            data : {
                id_surat_pengajuan_dospem : idPengajuanDosenPembimbingKP,
                level_akses : dataKPTerbaru.level_akses + 1
            }
        })

    }

    public static async postSuratPenunjukkanDosenPembimbing(nim : string, linkSuratPenunjukkanDosenPembimbingKP : string) : Promise<void> {
        const dataKPTerbaru = await prisma.pendaftaran_kp.findFirst({
            where : {
                nim
            },
            orderBy : {
                tanggal_pengajuan : 'desc'
            }
            ,
            take : 1
        })

        // jika 0 berarti gagal, 9 berarti udh lulus pendaftaran dan punya akses utk lanjut kp (jika perpanjangan sudah dibuka oleh Koordinator KP)

        if (!dataKPTerbaru || !(dataKPTerbaru.level_akses === 7)) {
            throw new APIError("Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait")
        }

        await prisma.pendaftaran_kp.update({
            where : {
                id : dataKPTerbaru.id
            },
            data : {
                link_surat_penunjukan_dospem : linkSuratPenunjukkanDosenPembimbingKP,
                level_akses : dataKPTerbaru.level_akses + 1
            }
        })

    }

    // sementara pake surat + link dulu
    public static async postSuratPerpanjanganKP(nim : string, linkSuratPerpanjanganKP : string) : Promise<void> {
        const dataKPTerbaru = await prisma.pendaftaran_kp.findFirst({
            where : {
                nim
            },
            orderBy : {
                tanggal_pengajuan : 'desc'
            }
            ,
            take : 1
        })

        // jika 0 berarti gagal, 11 berarti udh lulus pendaftaran

        if (!dataKPTerbaru || !(dataKPTerbaru.level_akses === 9)) {
            throw new APIError("Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait")
        }

        await prisma.pendaftaran_kp.update({
            where : {
                id : dataKPTerbaru.id
            },
            data : {
                link_surat_perpanjangan_kp : linkSuratPerpanjanganKP,
                level_akses : dataKPTerbaru.level_akses + 1
            }
        })

    }

    public static async getPendaftaranKPById(id : string) : Promise<pendaftaran_kp | null> {
        const dataKP = await prisma.pendaftaran_kp.findUnique({
            where : {
                id
            }
        })

        return dataKP
    }

    public static async postBerkasMahasiswa(id : string, levelAkses : number) {
        await prisma.pendaftaran_kp.update({
            where : {
                id
            }, 
            data : {
                level_akses : levelAkses + 1
            }
        })

    }

    // berkas KP harusnya
    public static async getBerkasSuratPengantarMahasiswa() : Promise<pendaftaran_kp[]> {
        const data = await prisma.pendaftaran_kp.findMany({
            where : {
                level_akses : 2
            }
        })

        return data
    }

    public static async getBerkasSuratBalasanMahasiswa() : Promise<pendaftaran_kp[]> {
        const data = await prisma.pendaftaran_kp.findMany({
            where : {
                level_akses : 4
            }
        })

        return data
    }

    public static async getBerkasIdPengajuanDosenPembimbingMahasiswa() : Promise<pendaftaran_kp[]> {
        const data = await prisma.pendaftaran_kp.findMany({
            where : {
                level_akses : 6
            }
        })

        return data
    }

    public static async getBerkasPenunjukkanDosenPembimbingMahasiswa() : Promise<pendaftaran_kp[]> {
        const data = await prisma.pendaftaran_kp.findMany({
            where : {
                level_akses : 8
            }
        })

        return data
    }

    public static async getBerkasSuratPerpanjanganKPMahasiswa() : Promise<pendaftaran_kp[]> {
        const data = await prisma.pendaftaran_kp.findMany({
            where : {
                level_akses : 10
            }
        })

        return data
    }

}