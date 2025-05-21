import prisma from "../infrastructures/db.infrastructure";
import { RepositoryPendaftaranInstansiInterface, RepositoryPendaftaranKPMahasiswaInterface, RepositoryPendaftaranKPInterface, RepositoryRiwayatPendaftaranKPInterface, RepositoryDetailPendaftaranKPMahasiswa, GetAllDataInstansiRepository } from "../types/daftar-kp/repository.type";
import MahasiswaHelper from "../helpers/mahasiswa.helper"
import { APIError } from "../utils/api-error.util";
import { instansi, option, pendaftaran_kp, status_instansi } from "../generated/prisma";

export default class DaftarKPRepository {

    public static async postTanggalDaftarKP(tanggalMulaiDaftarKP : string, tanggalTerakhirDaftarKP : string) {
        await prisma.option.update({
            where : {
                id : 999
            }, 
            data : {
                tanggal_mulai_pendaftaran_kp : tanggalMulaiDaftarKP, 
                tanggal_akhir_pendaftaran_kp : tanggalTerakhirDaftarKP
            }
        })

        const time = new Date(tanggalTerakhirDaftarKP).getTime() - new Date().getTime()

        setTimeout(async function() {
            await prisma.pendaftaran_kp.updateMany({
                where : {
                    level_akses : {
                        gte : 1,
                        lte : 9
                    }
                }, data : {
                    status : "Gagal"
                }
            })
        }, time)
    }

    public static async postTanggalDaftarKPLanjut(tanggalMulaiDaftarKP : string, tanggalTerakhirDaftarKP : string) {
        await prisma.option.update({
            where : {
                id : 999
            }, 
            data : {
                tanggal_mulai_pendaftaran_kp_lanjut : tanggalMulaiDaftarKP, 
                tanggal_akhir_pendaftaran_kp_lanjut : tanggalTerakhirDaftarKP
            }
        })
    }

    public static async getTanggalDaftarKP() : Promise<option | null> {
        return await prisma.option.findUnique({
            where : {
                id : 999
            }
        })
    }

    public static async getDataDetailInstansi(idInstansi : string) : Promise<instansi | null> {
        return await prisma.instansi.findUnique({
            where : {
                id : idInstansi
            }
        })
    }

    public static async getDataKPDetailMahasiswa(idKP : string) : Promise<RepositoryDetailPendaftaranKPMahasiswa | null> {
        return await prisma.pendaftaran_kp.findUnique({
            where : {
                id : idKP
            },
            include : {
                mahasiswa : true,
                dosen_pembimbing : true,
                instansi : {
                    include : {
                        pembimbing_instansi : true
                    }
                }
            }
        })
    }

    public static async getDataKPMahasiswa() : Promise<RepositoryPendaftaranKPMahasiswaInterface[]> {
        return await prisma.pendaftaran_kp.findMany({
        select : {
            id : true,
            tanggal_mulai : true,
            status : true,
            id_tahun_ajaran : true,
            mahasiswa : {
                select : {
                    nama : true,
                    nim : true,
                }
            },
        },    
    });
    }

    public static async postTolakBerkasMahasiswa(id : string, message : string) : Promise<void> {
        await prisma.pendaftaran_kp.update({
            where : {
                id
            }, 
            data : { // bagaimana kalau status kp tetap "baru", di front end kita cuma melihat catatan_penolakan saja, setelah diperbarui oleh mahasiswa, catatan_penolakan dikosongkan lagi
                level_akses : {
                    decrement : 1
                },
                catatan_penolakan : message
            }
        })
    }

    public static async deleteDataInstansi(id : string) : Promise<void> {
        await prisma.instansi.delete({
            where : {
                id
            }
        })
    }

    public static async postEditDataInstansi(id : string, status : string) : Promise<void> {
        await prisma.instansi.update({
            where : {
                id
            },
            data : {
                status : status as "Aktif" | "Pending" | "Tidak_Aktif"
            }
        })
    }

    public static async findInstansiById(id : string) : Promise<instansi | null> {
        return await prisma.instansi.findUnique({
            where : {
                id
            }
        });
    }

    public static async getAllDataInstansi() : Promise<GetAllDataInstansiRepository[]> {
        const data = await prisma.instansi.findMany({
            select : {
                id : true,
                nama : true,
                jenis : true,
                status : true,
            }
        })

        return data
    }

    public static async getKPTerbaruMahasiswa(nim : string) : Promise<pendaftaran_kp | null> {
        const data = await prisma.pendaftaran_kp.findFirst({
            where : {
                nim,
                status : "Baru",
            }
        })

        return data;
    }

    public static async createPermomohonanKP({nim, idInstansi, tujuanSuratInstansi, tanggalMulai} : RepositoryPendaftaranKPInterface ) : Promise<void> {
        await prisma.pendaftaran_kp.create({
            data : {
                nim,
                tanggal_pengajuan : new Date(),
                tanggal_mulai : tanggalMulai,
                id_instansi : idInstansi,
                tujuan_surat_instansi : tujuanSuratInstansi,
                id_tahun_ajaran : MahasiswaHelper.getTahunAjaran(),
                level_akses : 1,
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
                level_akses : true,
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
        const dataKPTerbaru = await DaftarKPRepository.getKPTerbaruMahasiswa(nim)

        // jika 0 berarti gagal, 9 berarti udh lulus pendaftaran dan punya akses utk lanjut kp (jika perpanjangan sudah dibuka oleh Koordinator KP)

        if (!dataKPTerbaru || !(dataKPTerbaru.level_akses === 1)) {
            throw new APIError("Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait")
        }

        await prisma.pendaftaran_kp.update({
            where : {
                id : dataKPTerbaru.id
            },
            data : {
                catatan_penolakan : null,
                link_surat_pengantar : linkSuratPengantarKP,
                level_akses : dataKPTerbaru.level_akses + 1
            }
        })

    }

    public static async postSuratBalasanKP(nim : string, linkSuratBalasanKP : string) : Promise<void> {
        const dataKPTerbaru = await DaftarKPRepository.getKPTerbaruMahasiswa(nim)

        // jika 0 berarti gagal, 9 berarti udh lulus pendaftaran dan punya akses utk lanjut kp (jika perpanjangan sudah dibuka oleh Koordinator KP)

        if (!dataKPTerbaru || !(dataKPTerbaru.level_akses === 3)) {
            throw new APIError("Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait")
        }

        await prisma.pendaftaran_kp.update({
            where : {
                id : dataKPTerbaru.id
            },
            data : {
                catatan_penolakan : null,
                link_surat_balasan : linkSuratBalasanKP,
                level_akses : dataKPTerbaru.level_akses + 1
            }
        })

    }

    public static async postIdPengajuanDosenPembimbingKP(nim : string, idPengajuanDosenPembimbingKP : string) : Promise<void> {
        const dataKPTerbaru = await DaftarKPRepository.getKPTerbaruMahasiswa(nim)

        // jika 0 berarti gagal, 9 berarti udh lulus pendaftaran dan punya akses utk lanjut kp (jika perpanjangan sudah dibuka oleh Koordinator KP)

        if (!dataKPTerbaru || !(dataKPTerbaru.level_akses === 5)) {
            throw new APIError("Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait")
        }

        await prisma.pendaftaran_kp.update({
            where : {
                id : dataKPTerbaru.id
            },
            data : {
                catatan_penolakan : null,
                id_surat_pengajuan_dospem : idPengajuanDosenPembimbingKP,
                level_akses : dataKPTerbaru.level_akses + 1
            }
        })

    }

    public static async postSuratPenunjukkanDosenPembimbing(nim : string, linkSuratPenunjukkanDosenPembimbingKP : string) : Promise<void> {
        const dataKPTerbaru = await DaftarKPRepository.getKPTerbaruMahasiswa(nim)

        // jika 0 berarti gagal, 9 berarti udh lulus pendaftaran dan punya akses utk lanjut kp (jika perpanjangan sudah dibuka oleh Koordinator KP)

        if (!dataKPTerbaru || !(dataKPTerbaru.level_akses === 7)) {
            throw new APIError("Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait")
        }

        await prisma.pendaftaran_kp.update({
            where : {
                id : dataKPTerbaru.id
            },
            data : {
                catatan_penolakan : null,
                link_surat_penunjukan_dospem : linkSuratPenunjukkanDosenPembimbingKP,
                level_akses : dataKPTerbaru.level_akses + 1
            }
        })

    }

    public static async getDataInstansi() {
        const data = await prisma.instansi.findMany({
            where : {
                status : "Aktif"
            }
        })

        return data
    }

    // sementara pake surat + link dulu
    public static async postSuratPerpanjanganKP(nim : string, linkSuratPerpanjanganKP : string) : Promise<void> {
        const dataKPTerbaru = await DaftarKPRepository.getKPTerbaruMahasiswa(nim)

        // jika 0 berarti gagal, 11 berarti sudah melakukan perpanjangan KP

        if (!dataKPTerbaru || !(dataKPTerbaru.level_akses === 9)) {
            throw new APIError("Anda mungkin tidak punya hak akses atau sudah mengunggah berkas yang terkait")
        }

        await prisma.pendaftaran_kp.update({
            where : {
                id : dataKPTerbaru.id
            },
            data : {
                catatan_penolakan : null,
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
            },
            include : {
                mahasiswa : true
            }
        })

        return data
    }

    public static async getBerkasSuratBalasanMahasiswa() : Promise<pendaftaran_kp[]> {
        const data = await prisma.pendaftaran_kp.findMany({
            where : {
                level_akses : 4
            },
            include : {
                mahasiswa : true
            }
        })

        return data
    }

    public static async getBerkasIdPengajuanDosenPembimbingMahasiswa() : Promise<pendaftaran_kp[]> {
        const data = await prisma.pendaftaran_kp.findMany({
            where : {
                level_akses : 6
            },
            include : {
                mahasiswa : true
            }
        })

        return data
    }

    public static async getBerkasPenunjukkanDosenPembimbingMahasiswa() : Promise<pendaftaran_kp[]> {
        const data = await prisma.pendaftaran_kp.findMany({
            where : {
                level_akses : 8
            },
            include : {
                mahasiswa : true
            }
        })

        return data
    }

    public static async getBerkasSuratPerpanjanganKPMahasiswa() : Promise<pendaftaran_kp[]> {
        const data = await prisma.pendaftaran_kp.findMany({
            where : {
                level_akses : 10
            },
            include : {
                mahasiswa : true
            }
        })

        return data
    }

    // public static async getPendaftaranKPTerbaru(nim : string) {
    //     const data = await prisma.pendaftaran_kp.findFirst({
    //         where : {
    //             nim,
    //             level_akses : {
    //                 not : 0
    //             }
    //         },
    //         take : 1
    //     })

    //     if (!data) {
    //         throw new APIError("Data pendaftaran KP tidak ditemukan", 404)
    //     }

    //     return data
    // }

}