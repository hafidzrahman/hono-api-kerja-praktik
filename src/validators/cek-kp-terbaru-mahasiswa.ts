import { pendaftaran_kp } from "../generated/prisma";
import prisma from "../infrastructures/db.infrastructure";

export async function cekKPTerbaruMahasiswa(
  nim: string
): Promise<pendaftaran_kp | null | undefined> {
  return await prisma.pendaftaran_kp.findFirst({
    where: {
      OR: [{ status: "Baru" }, { status: "Lanjut" }],
      nim,
    },
  });
}
