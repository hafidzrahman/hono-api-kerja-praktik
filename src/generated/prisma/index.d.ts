
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model bimbingan
 * 
 */
export type bimbingan = $Result.DefaultSelection<Prisma.$bimbinganPayload>
/**
 * Model daily_report
 * 
 */
export type daily_report = $Result.DefaultSelection<Prisma.$daily_reportPayload>
/**
 * Model detail_daily_report
 * 
 */
export type detail_daily_report = $Result.DefaultSelection<Prisma.$detail_daily_reportPayload>
/**
 * Model dokumen
 * 
 */
export type dokumen = $Result.DefaultSelection<Prisma.$dokumenPayload>
/**
 * Model dosen
 * 
 */
export type dosen = $Result.DefaultSelection<Prisma.$dosenPayload>
/**
 * Model instansi
 * 
 */
export type instansi = $Result.DefaultSelection<Prisma.$instansiPayload>
/**
 * Model jadwal
 * 
 */
export type jadwal = $Result.DefaultSelection<Prisma.$jadwalPayload>
/**
 * Model log_jadwal
 * 
 */
export type log_jadwal = $Result.DefaultSelection<Prisma.$log_jadwalPayload>
/**
 * Model mahasiswa
 * 
 */
export type mahasiswa = $Result.DefaultSelection<Prisma.$mahasiswaPayload>
/**
 * Model nilai
 * 
 */
export type nilai = $Result.DefaultSelection<Prisma.$nilaiPayload>
/**
 * Model nilai_instansi
 * 
 */
export type nilai_instansi = $Result.DefaultSelection<Prisma.$nilai_instansiPayload>
/**
 * Model pembimbing_instansi
 * 
 */
export type pembimbing_instansi = $Result.DefaultSelection<Prisma.$pembimbing_instansiPayload>
/**
 * Model pendaftaran_kp
 * 
 */
export type pendaftaran_kp = $Result.DefaultSelection<Prisma.$pendaftaran_kpPayload>
/**
 * Model ruangan
 * 
 */
export type ruangan = $Result.DefaultSelection<Prisma.$ruanganPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DokumenStatus: {
  submitted: 'submitted',
  verified: 'verified',
  rejected: 'rejected'
};

export type DokumenStatus = (typeof DokumenStatus)[keyof typeof DokumenStatus]


export const JenisDokumen: {
  SURAT_KETERANGAN_SELESAI_KP: 'SURAT_KETERANGAN_SELESAI_KP',
  LAPORAN_TAMBAHAN_KP: 'LAPORAN_TAMBAHAN_KP',
  ID_SURAT_UNDANGAN: 'ID_SURAT_UNDANGAN',
  FORM_KEHADIRAN_SEMINAR: 'FORM_KEHADIRAN_SEMINAR',
  SURAT_UNDANGAN_SEMINAR_HASIL: 'SURAT_UNDANGAN_SEMINAR_HASIL',
  BERITA_ACARA_SEMINAR: 'BERITA_ACARA_SEMINAR',
  DAFTAR_HADIR_SEMINAR: 'DAFTAR_HADIR_SEMINAR',
  LEMBAR_PENGESAHAN_KP: 'LEMBAR_PENGESAHAN_KP',
  REVISI_DAILY_REPORT: 'REVISI_DAILY_REPORT',
  REVISI_LAPORAN_TAMBAHAN: 'REVISI_LAPORAN_TAMBAHAN',
  SISTEM_KP_FINAL: 'SISTEM_KP_FINAL'
};

export type JenisDokumen = (typeof JenisDokumen)[keyof typeof JenisDokumen]


export const JenisInstansi: {
  SWASTA: 'SWASTA',
  PEMERINTAHAN: 'PEMERINTAHAN',
  PENDIDIKAN: 'PENDIDIKAN',
  UMKM: 'UMKM'
};

export type JenisInstansi = (typeof JenisInstansi)[keyof typeof JenisInstansi]


export const LogType: {
  created: 'created',
  updated: 'updated',
  cancelled: 'cancelled',
  rescheduled: 'rescheduled'
};

export type LogType = (typeof LogType)[keyof typeof LogType]


export const StatusInstansi: {
  PENDING: 'PENDING',
  AKTIF: 'AKTIF',
  TIDAK_AKTIF: 'TIDAK_AKTIF'
};

export type StatusInstansi = (typeof StatusInstansi)[keyof typeof StatusInstansi]


export const StatusSeminar: {
  pending: 'pending',
  scheduled: 'scheduled',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type StatusSeminar = (typeof StatusSeminar)[keyof typeof StatusSeminar]


export const StatusValidasi: {
  MENUNGGU: 'MENUNGGU',
  VALID: 'VALID',
  REVISI: 'REVISI'
};

export type StatusValidasi = (typeof StatusValidasi)[keyof typeof StatusValidasi]

}

export type DokumenStatus = $Enums.DokumenStatus

export const DokumenStatus: typeof $Enums.DokumenStatus

export type JenisDokumen = $Enums.JenisDokumen

export const JenisDokumen: typeof $Enums.JenisDokumen

export type JenisInstansi = $Enums.JenisInstansi

export const JenisInstansi: typeof $Enums.JenisInstansi

export type LogType = $Enums.LogType

export const LogType: typeof $Enums.LogType

export type StatusInstansi = $Enums.StatusInstansi

export const StatusInstansi: typeof $Enums.StatusInstansi

export type StatusSeminar = $Enums.StatusSeminar

export const StatusSeminar: typeof $Enums.StatusSeminar

export type StatusValidasi = $Enums.StatusValidasi

export const StatusValidasi: typeof $Enums.StatusValidasi

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bimbingans
 * const bimbingans = await prisma.bimbingan.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bimbingans
   * const bimbingans = await prisma.bimbingan.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bimbingan`: Exposes CRUD operations for the **bimbingan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bimbingans
    * const bimbingans = await prisma.bimbingan.findMany()
    * ```
    */
  get bimbingan(): Prisma.bimbinganDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.daily_report`: Exposes CRUD operations for the **daily_report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Daily_reports
    * const daily_reports = await prisma.daily_report.findMany()
    * ```
    */
  get daily_report(): Prisma.daily_reportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detail_daily_report`: Exposes CRUD operations for the **detail_daily_report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detail_daily_reports
    * const detail_daily_reports = await prisma.detail_daily_report.findMany()
    * ```
    */
  get detail_daily_report(): Prisma.detail_daily_reportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dokumen`: Exposes CRUD operations for the **dokumen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dokumen
    * const dokumen = await prisma.dokumen.findMany()
    * ```
    */
  get dokumen(): Prisma.dokumenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dosen`: Exposes CRUD operations for the **dosen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dosens
    * const dosens = await prisma.dosen.findMany()
    * ```
    */
  get dosen(): Prisma.dosenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instansi`: Exposes CRUD operations for the **instansi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instansis
    * const instansis = await prisma.instansi.findMany()
    * ```
    */
  get instansi(): Prisma.instansiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jadwal`: Exposes CRUD operations for the **jadwal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jadwals
    * const jadwals = await prisma.jadwal.findMany()
    * ```
    */
  get jadwal(): Prisma.jadwalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log_jadwal`: Exposes CRUD operations for the **log_jadwal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Log_jadwals
    * const log_jadwals = await prisma.log_jadwal.findMany()
    * ```
    */
  get log_jadwal(): Prisma.log_jadwalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mahasiswa`: Exposes CRUD operations for the **mahasiswa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mahasiswas
    * const mahasiswas = await prisma.mahasiswa.findMany()
    * ```
    */
  get mahasiswa(): Prisma.mahasiswaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nilai`: Exposes CRUD operations for the **nilai** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nilais
    * const nilais = await prisma.nilai.findMany()
    * ```
    */
  get nilai(): Prisma.nilaiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nilai_instansi`: Exposes CRUD operations for the **nilai_instansi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nilai_instansis
    * const nilai_instansis = await prisma.nilai_instansi.findMany()
    * ```
    */
  get nilai_instansi(): Prisma.nilai_instansiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pembimbing_instansi`: Exposes CRUD operations for the **pembimbing_instansi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pembimbing_instansis
    * const pembimbing_instansis = await prisma.pembimbing_instansi.findMany()
    * ```
    */
  get pembimbing_instansi(): Prisma.pembimbing_instansiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pendaftaran_kp`: Exposes CRUD operations for the **pendaftaran_kp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pendaftaran_kps
    * const pendaftaran_kps = await prisma.pendaftaran_kp.findMany()
    * ```
    */
  get pendaftaran_kp(): Prisma.pendaftaran_kpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ruangan`: Exposes CRUD operations for the **ruangan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ruangans
    * const ruangans = await prisma.ruangan.findMany()
    * ```
    */
  get ruangan(): Prisma.ruanganDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    bimbingan: 'bimbingan',
    daily_report: 'daily_report',
    detail_daily_report: 'detail_daily_report',
    dokumen: 'dokumen',
    dosen: 'dosen',
    instansi: 'instansi',
    jadwal: 'jadwal',
    log_jadwal: 'log_jadwal',
    mahasiswa: 'mahasiswa',
    nilai: 'nilai',
    nilai_instansi: 'nilai_instansi',
    pembimbing_instansi: 'pembimbing_instansi',
    pendaftaran_kp: 'pendaftaran_kp',
    ruangan: 'ruangan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bimbingan" | "daily_report" | "detail_daily_report" | "dokumen" | "dosen" | "instansi" | "jadwal" | "log_jadwal" | "mahasiswa" | "nilai" | "nilai_instansi" | "pembimbing_instansi" | "pendaftaran_kp" | "ruangan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      bimbingan: {
        payload: Prisma.$bimbinganPayload<ExtArgs>
        fields: Prisma.bimbinganFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bimbinganFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bimbinganPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bimbinganFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bimbinganPayload>
          }
          findFirst: {
            args: Prisma.bimbinganFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bimbinganPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bimbinganFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bimbinganPayload>
          }
          findMany: {
            args: Prisma.bimbinganFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bimbinganPayload>[]
          }
          create: {
            args: Prisma.bimbinganCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bimbinganPayload>
          }
          createMany: {
            args: Prisma.bimbinganCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bimbinganCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bimbinganPayload>[]
          }
          delete: {
            args: Prisma.bimbinganDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bimbinganPayload>
          }
          update: {
            args: Prisma.bimbinganUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bimbinganPayload>
          }
          deleteMany: {
            args: Prisma.bimbinganDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bimbinganUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bimbinganUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bimbinganPayload>[]
          }
          upsert: {
            args: Prisma.bimbinganUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bimbinganPayload>
          }
          aggregate: {
            args: Prisma.BimbinganAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBimbingan>
          }
          groupBy: {
            args: Prisma.bimbinganGroupByArgs<ExtArgs>
            result: $Utils.Optional<BimbinganGroupByOutputType>[]
          }
          count: {
            args: Prisma.bimbinganCountArgs<ExtArgs>
            result: $Utils.Optional<BimbinganCountAggregateOutputType> | number
          }
        }
      }
      daily_report: {
        payload: Prisma.$daily_reportPayload<ExtArgs>
        fields: Prisma.daily_reportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.daily_reportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_reportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.daily_reportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_reportPayload>
          }
          findFirst: {
            args: Prisma.daily_reportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_reportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.daily_reportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_reportPayload>
          }
          findMany: {
            args: Prisma.daily_reportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_reportPayload>[]
          }
          create: {
            args: Prisma.daily_reportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_reportPayload>
          }
          createMany: {
            args: Prisma.daily_reportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.daily_reportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_reportPayload>[]
          }
          delete: {
            args: Prisma.daily_reportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_reportPayload>
          }
          update: {
            args: Prisma.daily_reportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_reportPayload>
          }
          deleteMany: {
            args: Prisma.daily_reportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.daily_reportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.daily_reportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_reportPayload>[]
          }
          upsert: {
            args: Prisma.daily_reportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_reportPayload>
          }
          aggregate: {
            args: Prisma.Daily_reportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDaily_report>
          }
          groupBy: {
            args: Prisma.daily_reportGroupByArgs<ExtArgs>
            result: $Utils.Optional<Daily_reportGroupByOutputType>[]
          }
          count: {
            args: Prisma.daily_reportCountArgs<ExtArgs>
            result: $Utils.Optional<Daily_reportCountAggregateOutputType> | number
          }
        }
      }
      detail_daily_report: {
        payload: Prisma.$detail_daily_reportPayload<ExtArgs>
        fields: Prisma.detail_daily_reportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detail_daily_reportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_daily_reportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detail_daily_reportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_daily_reportPayload>
          }
          findFirst: {
            args: Prisma.detail_daily_reportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_daily_reportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detail_daily_reportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_daily_reportPayload>
          }
          findMany: {
            args: Prisma.detail_daily_reportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_daily_reportPayload>[]
          }
          create: {
            args: Prisma.detail_daily_reportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_daily_reportPayload>
          }
          createMany: {
            args: Prisma.detail_daily_reportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.detail_daily_reportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_daily_reportPayload>[]
          }
          delete: {
            args: Prisma.detail_daily_reportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_daily_reportPayload>
          }
          update: {
            args: Prisma.detail_daily_reportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_daily_reportPayload>
          }
          deleteMany: {
            args: Prisma.detail_daily_reportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detail_daily_reportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.detail_daily_reportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_daily_reportPayload>[]
          }
          upsert: {
            args: Prisma.detail_daily_reportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_daily_reportPayload>
          }
          aggregate: {
            args: Prisma.Detail_daily_reportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetail_daily_report>
          }
          groupBy: {
            args: Prisma.detail_daily_reportGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detail_daily_reportGroupByOutputType>[]
          }
          count: {
            args: Prisma.detail_daily_reportCountArgs<ExtArgs>
            result: $Utils.Optional<Detail_daily_reportCountAggregateOutputType> | number
          }
        }
      }
      dokumen: {
        payload: Prisma.$dokumenPayload<ExtArgs>
        fields: Prisma.dokumenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dokumenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dokumenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dokumenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dokumenPayload>
          }
          findFirst: {
            args: Prisma.dokumenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dokumenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dokumenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dokumenPayload>
          }
          findMany: {
            args: Prisma.dokumenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dokumenPayload>[]
          }
          create: {
            args: Prisma.dokumenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dokumenPayload>
          }
          createMany: {
            args: Prisma.dokumenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dokumenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dokumenPayload>[]
          }
          delete: {
            args: Prisma.dokumenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dokumenPayload>
          }
          update: {
            args: Prisma.dokumenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dokumenPayload>
          }
          deleteMany: {
            args: Prisma.dokumenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dokumenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.dokumenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dokumenPayload>[]
          }
          upsert: {
            args: Prisma.dokumenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dokumenPayload>
          }
          aggregate: {
            args: Prisma.DokumenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDokumen>
          }
          groupBy: {
            args: Prisma.dokumenGroupByArgs<ExtArgs>
            result: $Utils.Optional<DokumenGroupByOutputType>[]
          }
          count: {
            args: Prisma.dokumenCountArgs<ExtArgs>
            result: $Utils.Optional<DokumenCountAggregateOutputType> | number
          }
        }
      }
      dosen: {
        payload: Prisma.$dosenPayload<ExtArgs>
        fields: Prisma.dosenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dosenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dosenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          findFirst: {
            args: Prisma.dosenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dosenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          findMany: {
            args: Prisma.dosenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>[]
          }
          create: {
            args: Prisma.dosenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          createMany: {
            args: Prisma.dosenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dosenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>[]
          }
          delete: {
            args: Prisma.dosenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          update: {
            args: Prisma.dosenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          deleteMany: {
            args: Prisma.dosenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dosenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.dosenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>[]
          }
          upsert: {
            args: Prisma.dosenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          aggregate: {
            args: Prisma.DosenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDosen>
          }
          groupBy: {
            args: Prisma.dosenGroupByArgs<ExtArgs>
            result: $Utils.Optional<DosenGroupByOutputType>[]
          }
          count: {
            args: Prisma.dosenCountArgs<ExtArgs>
            result: $Utils.Optional<DosenCountAggregateOutputType> | number
          }
        }
      }
      instansi: {
        payload: Prisma.$instansiPayload<ExtArgs>
        fields: Prisma.instansiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.instansiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instansiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.instansiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instansiPayload>
          }
          findFirst: {
            args: Prisma.instansiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instansiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.instansiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instansiPayload>
          }
          findMany: {
            args: Prisma.instansiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instansiPayload>[]
          }
          create: {
            args: Prisma.instansiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instansiPayload>
          }
          createMany: {
            args: Prisma.instansiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.instansiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instansiPayload>[]
          }
          delete: {
            args: Prisma.instansiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instansiPayload>
          }
          update: {
            args: Prisma.instansiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instansiPayload>
          }
          deleteMany: {
            args: Prisma.instansiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.instansiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.instansiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instansiPayload>[]
          }
          upsert: {
            args: Prisma.instansiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instansiPayload>
          }
          aggregate: {
            args: Prisma.InstansiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstansi>
          }
          groupBy: {
            args: Prisma.instansiGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstansiGroupByOutputType>[]
          }
          count: {
            args: Prisma.instansiCountArgs<ExtArgs>
            result: $Utils.Optional<InstansiCountAggregateOutputType> | number
          }
        }
      }
      jadwal: {
        payload: Prisma.$jadwalPayload<ExtArgs>
        fields: Prisma.jadwalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jadwalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jadwalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwalPayload>
          }
          findFirst: {
            args: Prisma.jadwalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jadwalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwalPayload>
          }
          findMany: {
            args: Prisma.jadwalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwalPayload>[]
          }
          create: {
            args: Prisma.jadwalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwalPayload>
          }
          createMany: {
            args: Prisma.jadwalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.jadwalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwalPayload>[]
          }
          delete: {
            args: Prisma.jadwalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwalPayload>
          }
          update: {
            args: Prisma.jadwalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwalPayload>
          }
          deleteMany: {
            args: Prisma.jadwalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jadwalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.jadwalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwalPayload>[]
          }
          upsert: {
            args: Prisma.jadwalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwalPayload>
          }
          aggregate: {
            args: Prisma.JadwalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJadwal>
          }
          groupBy: {
            args: Prisma.jadwalGroupByArgs<ExtArgs>
            result: $Utils.Optional<JadwalGroupByOutputType>[]
          }
          count: {
            args: Prisma.jadwalCountArgs<ExtArgs>
            result: $Utils.Optional<JadwalCountAggregateOutputType> | number
          }
        }
      }
      log_jadwal: {
        payload: Prisma.$log_jadwalPayload<ExtArgs>
        fields: Prisma.log_jadwalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.log_jadwalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_jadwalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.log_jadwalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_jadwalPayload>
          }
          findFirst: {
            args: Prisma.log_jadwalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_jadwalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.log_jadwalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_jadwalPayload>
          }
          findMany: {
            args: Prisma.log_jadwalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_jadwalPayload>[]
          }
          create: {
            args: Prisma.log_jadwalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_jadwalPayload>
          }
          createMany: {
            args: Prisma.log_jadwalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.log_jadwalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_jadwalPayload>[]
          }
          delete: {
            args: Prisma.log_jadwalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_jadwalPayload>
          }
          update: {
            args: Prisma.log_jadwalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_jadwalPayload>
          }
          deleteMany: {
            args: Prisma.log_jadwalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.log_jadwalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.log_jadwalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_jadwalPayload>[]
          }
          upsert: {
            args: Prisma.log_jadwalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_jadwalPayload>
          }
          aggregate: {
            args: Prisma.Log_jadwalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog_jadwal>
          }
          groupBy: {
            args: Prisma.log_jadwalGroupByArgs<ExtArgs>
            result: $Utils.Optional<Log_jadwalGroupByOutputType>[]
          }
          count: {
            args: Prisma.log_jadwalCountArgs<ExtArgs>
            result: $Utils.Optional<Log_jadwalCountAggregateOutputType> | number
          }
        }
      }
      mahasiswa: {
        payload: Prisma.$mahasiswaPayload<ExtArgs>
        fields: Prisma.mahasiswaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mahasiswaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mahasiswaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          findFirst: {
            args: Prisma.mahasiswaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mahasiswaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          findMany: {
            args: Prisma.mahasiswaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>[]
          }
          create: {
            args: Prisma.mahasiswaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          createMany: {
            args: Prisma.mahasiswaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mahasiswaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>[]
          }
          delete: {
            args: Prisma.mahasiswaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          update: {
            args: Prisma.mahasiswaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          deleteMany: {
            args: Prisma.mahasiswaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mahasiswaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mahasiswaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>[]
          }
          upsert: {
            args: Prisma.mahasiswaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          aggregate: {
            args: Prisma.MahasiswaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMahasiswa>
          }
          groupBy: {
            args: Prisma.mahasiswaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaGroupByOutputType>[]
          }
          count: {
            args: Prisma.mahasiswaCountArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaCountAggregateOutputType> | number
          }
        }
      }
      nilai: {
        payload: Prisma.$nilaiPayload<ExtArgs>
        fields: Prisma.nilaiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.nilaiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilaiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.nilaiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilaiPayload>
          }
          findFirst: {
            args: Prisma.nilaiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilaiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.nilaiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilaiPayload>
          }
          findMany: {
            args: Prisma.nilaiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilaiPayload>[]
          }
          create: {
            args: Prisma.nilaiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilaiPayload>
          }
          createMany: {
            args: Prisma.nilaiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.nilaiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilaiPayload>[]
          }
          delete: {
            args: Prisma.nilaiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilaiPayload>
          }
          update: {
            args: Prisma.nilaiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilaiPayload>
          }
          deleteMany: {
            args: Prisma.nilaiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.nilaiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.nilaiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilaiPayload>[]
          }
          upsert: {
            args: Prisma.nilaiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilaiPayload>
          }
          aggregate: {
            args: Prisma.NilaiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNilai>
          }
          groupBy: {
            args: Prisma.nilaiGroupByArgs<ExtArgs>
            result: $Utils.Optional<NilaiGroupByOutputType>[]
          }
          count: {
            args: Prisma.nilaiCountArgs<ExtArgs>
            result: $Utils.Optional<NilaiCountAggregateOutputType> | number
          }
        }
      }
      nilai_instansi: {
        payload: Prisma.$nilai_instansiPayload<ExtArgs>
        fields: Prisma.nilai_instansiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.nilai_instansiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilai_instansiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.nilai_instansiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilai_instansiPayload>
          }
          findFirst: {
            args: Prisma.nilai_instansiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilai_instansiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.nilai_instansiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilai_instansiPayload>
          }
          findMany: {
            args: Prisma.nilai_instansiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilai_instansiPayload>[]
          }
          create: {
            args: Prisma.nilai_instansiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilai_instansiPayload>
          }
          createMany: {
            args: Prisma.nilai_instansiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.nilai_instansiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilai_instansiPayload>[]
          }
          delete: {
            args: Prisma.nilai_instansiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilai_instansiPayload>
          }
          update: {
            args: Prisma.nilai_instansiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilai_instansiPayload>
          }
          deleteMany: {
            args: Prisma.nilai_instansiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.nilai_instansiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.nilai_instansiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilai_instansiPayload>[]
          }
          upsert: {
            args: Prisma.nilai_instansiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nilai_instansiPayload>
          }
          aggregate: {
            args: Prisma.Nilai_instansiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNilai_instansi>
          }
          groupBy: {
            args: Prisma.nilai_instansiGroupByArgs<ExtArgs>
            result: $Utils.Optional<Nilai_instansiGroupByOutputType>[]
          }
          count: {
            args: Prisma.nilai_instansiCountArgs<ExtArgs>
            result: $Utils.Optional<Nilai_instansiCountAggregateOutputType> | number
          }
        }
      }
      pembimbing_instansi: {
        payload: Prisma.$pembimbing_instansiPayload<ExtArgs>
        fields: Prisma.pembimbing_instansiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pembimbing_instansiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pembimbing_instansiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pembimbing_instansiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pembimbing_instansiPayload>
          }
          findFirst: {
            args: Prisma.pembimbing_instansiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pembimbing_instansiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pembimbing_instansiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pembimbing_instansiPayload>
          }
          findMany: {
            args: Prisma.pembimbing_instansiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pembimbing_instansiPayload>[]
          }
          create: {
            args: Prisma.pembimbing_instansiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pembimbing_instansiPayload>
          }
          createMany: {
            args: Prisma.pembimbing_instansiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pembimbing_instansiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pembimbing_instansiPayload>[]
          }
          delete: {
            args: Prisma.pembimbing_instansiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pembimbing_instansiPayload>
          }
          update: {
            args: Prisma.pembimbing_instansiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pembimbing_instansiPayload>
          }
          deleteMany: {
            args: Prisma.pembimbing_instansiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pembimbing_instansiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pembimbing_instansiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pembimbing_instansiPayload>[]
          }
          upsert: {
            args: Prisma.pembimbing_instansiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pembimbing_instansiPayload>
          }
          aggregate: {
            args: Prisma.Pembimbing_instansiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePembimbing_instansi>
          }
          groupBy: {
            args: Prisma.pembimbing_instansiGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pembimbing_instansiGroupByOutputType>[]
          }
          count: {
            args: Prisma.pembimbing_instansiCountArgs<ExtArgs>
            result: $Utils.Optional<Pembimbing_instansiCountAggregateOutputType> | number
          }
        }
      }
      pendaftaran_kp: {
        payload: Prisma.$pendaftaran_kpPayload<ExtArgs>
        fields: Prisma.pendaftaran_kpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pendaftaran_kpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaran_kpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pendaftaran_kpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaran_kpPayload>
          }
          findFirst: {
            args: Prisma.pendaftaran_kpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaran_kpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pendaftaran_kpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaran_kpPayload>
          }
          findMany: {
            args: Prisma.pendaftaran_kpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaran_kpPayload>[]
          }
          create: {
            args: Prisma.pendaftaran_kpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaran_kpPayload>
          }
          createMany: {
            args: Prisma.pendaftaran_kpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pendaftaran_kpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaran_kpPayload>[]
          }
          delete: {
            args: Prisma.pendaftaran_kpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaran_kpPayload>
          }
          update: {
            args: Prisma.pendaftaran_kpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaran_kpPayload>
          }
          deleteMany: {
            args: Prisma.pendaftaran_kpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pendaftaran_kpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pendaftaran_kpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaran_kpPayload>[]
          }
          upsert: {
            args: Prisma.pendaftaran_kpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaran_kpPayload>
          }
          aggregate: {
            args: Prisma.Pendaftaran_kpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendaftaran_kp>
          }
          groupBy: {
            args: Prisma.pendaftaran_kpGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pendaftaran_kpGroupByOutputType>[]
          }
          count: {
            args: Prisma.pendaftaran_kpCountArgs<ExtArgs>
            result: $Utils.Optional<Pendaftaran_kpCountAggregateOutputType> | number
          }
        }
      }
      ruangan: {
        payload: Prisma.$ruanganPayload<ExtArgs>
        fields: Prisma.ruanganFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ruanganFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ruanganPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ruanganFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ruanganPayload>
          }
          findFirst: {
            args: Prisma.ruanganFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ruanganPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ruanganFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ruanganPayload>
          }
          findMany: {
            args: Prisma.ruanganFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ruanganPayload>[]
          }
          create: {
            args: Prisma.ruanganCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ruanganPayload>
          }
          createMany: {
            args: Prisma.ruanganCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ruanganCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ruanganPayload>[]
          }
          delete: {
            args: Prisma.ruanganDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ruanganPayload>
          }
          update: {
            args: Prisma.ruanganUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ruanganPayload>
          }
          deleteMany: {
            args: Prisma.ruanganDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ruanganUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ruanganUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ruanganPayload>[]
          }
          upsert: {
            args: Prisma.ruanganUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ruanganPayload>
          }
          aggregate: {
            args: Prisma.RuanganAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRuangan>
          }
          groupBy: {
            args: Prisma.ruanganGroupByArgs<ExtArgs>
            result: $Utils.Optional<RuanganGroupByOutputType>[]
          }
          count: {
            args: Prisma.ruanganCountArgs<ExtArgs>
            result: $Utils.Optional<RuanganCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    bimbingan?: bimbinganOmit
    daily_report?: daily_reportOmit
    detail_daily_report?: detail_daily_reportOmit
    dokumen?: dokumenOmit
    dosen?: dosenOmit
    instansi?: instansiOmit
    jadwal?: jadwalOmit
    log_jadwal?: log_jadwalOmit
    mahasiswa?: mahasiswaOmit
    nilai?: nilaiOmit
    nilai_instansi?: nilai_instansiOmit
    pembimbing_instansi?: pembimbing_instansiOmit
    pendaftaran_kp?: pendaftaran_kpOmit
    ruangan?: ruanganOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Daily_reportCountOutputType
   */

  export type Daily_reportCountOutputType = {
    detail_daily_report: number
  }

  export type Daily_reportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail_daily_report?: boolean | Daily_reportCountOutputTypeCountDetail_daily_reportArgs
  }

  // Custom InputTypes
  /**
   * Daily_reportCountOutputType without action
   */
  export type Daily_reportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daily_reportCountOutputType
     */
    select?: Daily_reportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Daily_reportCountOutputType without action
   */
  export type Daily_reportCountOutputTypeCountDetail_daily_reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_daily_reportWhereInput
  }


  /**
   * Count Type DosenCountOutputType
   */

  export type DosenCountOutputType = {
    bimbingan: number
    jadwal: number
    nilai_penguji: number
    nilai_pembimbing: number
    pendaftaran_kp: number
  }

  export type DosenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bimbingan?: boolean | DosenCountOutputTypeCountBimbinganArgs
    jadwal?: boolean | DosenCountOutputTypeCountJadwalArgs
    nilai_penguji?: boolean | DosenCountOutputTypeCountNilai_pengujiArgs
    nilai_pembimbing?: boolean | DosenCountOutputTypeCountNilai_pembimbingArgs
    pendaftaran_kp?: boolean | DosenCountOutputTypeCountPendaftaran_kpArgs
  }

  // Custom InputTypes
  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosenCountOutputType
     */
    select?: DosenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountBimbinganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bimbinganWhereInput
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountJadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jadwalWhereInput
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountNilai_pengujiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nilaiWhereInput
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountNilai_pembimbingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nilaiWhereInput
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountPendaftaran_kpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pendaftaran_kpWhereInput
  }


  /**
   * Count Type InstansiCountOutputType
   */

  export type InstansiCountOutputType = {
    pembimbing_instansi: number
  }

  export type InstansiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembimbing_instansi?: boolean | InstansiCountOutputTypeCountPembimbing_instansiArgs
  }

  // Custom InputTypes
  /**
   * InstansiCountOutputType without action
   */
  export type InstansiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstansiCountOutputType
     */
    select?: InstansiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstansiCountOutputType without action
   */
  export type InstansiCountOutputTypeCountPembimbing_instansiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pembimbing_instansiWhereInput
  }


  /**
   * Count Type MahasiswaCountOutputType
   */

  export type MahasiswaCountOutputType = {
    bimbingan: number
    daily_report: number
    dokumen: number
    jadwal: number
    pendaftaran_kp: number
    nilai: number
  }

  export type MahasiswaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bimbingan?: boolean | MahasiswaCountOutputTypeCountBimbinganArgs
    daily_report?: boolean | MahasiswaCountOutputTypeCountDaily_reportArgs
    dokumen?: boolean | MahasiswaCountOutputTypeCountDokumenArgs
    jadwal?: boolean | MahasiswaCountOutputTypeCountJadwalArgs
    pendaftaran_kp?: boolean | MahasiswaCountOutputTypeCountPendaftaran_kpArgs
    nilai?: boolean | MahasiswaCountOutputTypeCountNilaiArgs
  }

  // Custom InputTypes
  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaCountOutputType
     */
    select?: MahasiswaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountBimbinganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bimbinganWhereInput
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountDaily_reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: daily_reportWhereInput
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountDokumenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dokumenWhereInput
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountJadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jadwalWhereInput
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountPendaftaran_kpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pendaftaran_kpWhereInput
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountNilaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nilaiWhereInput
  }


  /**
   * Count Type NilaiCountOutputType
   */

  export type NilaiCountOutputType = {
    mahasiswa: number
  }

  export type NilaiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | NilaiCountOutputTypeCountMahasiswaArgs
  }

  // Custom InputTypes
  /**
   * NilaiCountOutputType without action
   */
  export type NilaiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NilaiCountOutputType
     */
    select?: NilaiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NilaiCountOutputType without action
   */
  export type NilaiCountOutputTypeCountMahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mahasiswaWhereInput
  }


  /**
   * Count Type Pembimbing_instansiCountOutputType
   */

  export type Pembimbing_instansiCountOutputType = {
    nilai_instansi: number
    pendaftaran_kp: number
  }

  export type Pembimbing_instansiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nilai_instansi?: boolean | Pembimbing_instansiCountOutputTypeCountNilai_instansiArgs
    pendaftaran_kp?: boolean | Pembimbing_instansiCountOutputTypeCountPendaftaran_kpArgs
  }

  // Custom InputTypes
  /**
   * Pembimbing_instansiCountOutputType without action
   */
  export type Pembimbing_instansiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembimbing_instansiCountOutputType
     */
    select?: Pembimbing_instansiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Pembimbing_instansiCountOutputType without action
   */
  export type Pembimbing_instansiCountOutputTypeCountNilai_instansiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nilai_instansiWhereInput
  }

  /**
   * Pembimbing_instansiCountOutputType without action
   */
  export type Pembimbing_instansiCountOutputTypeCountPendaftaran_kpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pendaftaran_kpWhereInput
  }


  /**
   * Count Type RuanganCountOutputType
   */

  export type RuanganCountOutputType = {
    jadwal: number
  }

  export type RuanganCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | RuanganCountOutputTypeCountJadwalArgs
  }

  // Custom InputTypes
  /**
   * RuanganCountOutputType without action
   */
  export type RuanganCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuanganCountOutputType
     */
    select?: RuanganCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RuanganCountOutputType without action
   */
  export type RuanganCountOutputTypeCountJadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jadwalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model bimbingan
   */

  export type AggregateBimbingan = {
    _count: BimbinganCountAggregateOutputType | null
    _min: BimbinganMinAggregateOutputType | null
    _max: BimbinganMaxAggregateOutputType | null
  }

  export type BimbinganMinAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    catatan: string | null
    status: $Enums.StatusValidasi | null
    nim: string | null
    nip: string | null
  }

  export type BimbinganMaxAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    catatan: string | null
    status: $Enums.StatusValidasi | null
    nim: string | null
    nip: string | null
  }

  export type BimbinganCountAggregateOutputType = {
    id: number
    tanggal: number
    catatan: number
    status: number
    nim: number
    nip: number
    _all: number
  }


  export type BimbinganMinAggregateInputType = {
    id?: true
    tanggal?: true
    catatan?: true
    status?: true
    nim?: true
    nip?: true
  }

  export type BimbinganMaxAggregateInputType = {
    id?: true
    tanggal?: true
    catatan?: true
    status?: true
    nim?: true
    nip?: true
  }

  export type BimbinganCountAggregateInputType = {
    id?: true
    tanggal?: true
    catatan?: true
    status?: true
    nim?: true
    nip?: true
    _all?: true
  }

  export type BimbinganAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bimbingan to aggregate.
     */
    where?: bimbinganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bimbingans to fetch.
     */
    orderBy?: bimbinganOrderByWithRelationInput | bimbinganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bimbinganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bimbingans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bimbingans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bimbingans
    **/
    _count?: true | BimbinganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BimbinganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BimbinganMaxAggregateInputType
  }

  export type GetBimbinganAggregateType<T extends BimbinganAggregateArgs> = {
        [P in keyof T & keyof AggregateBimbingan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBimbingan[P]>
      : GetScalarType<T[P], AggregateBimbingan[P]>
  }




  export type bimbinganGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bimbinganWhereInput
    orderBy?: bimbinganOrderByWithAggregationInput | bimbinganOrderByWithAggregationInput[]
    by: BimbinganScalarFieldEnum[] | BimbinganScalarFieldEnum
    having?: bimbinganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BimbinganCountAggregateInputType | true
    _min?: BimbinganMinAggregateInputType
    _max?: BimbinganMaxAggregateInputType
  }

  export type BimbinganGroupByOutputType = {
    id: string
    tanggal: Date
    catatan: string
    status: $Enums.StatusValidasi
    nim: string
    nip: string
    _count: BimbinganCountAggregateOutputType | null
    _min: BimbinganMinAggregateOutputType | null
    _max: BimbinganMaxAggregateOutputType | null
  }

  type GetBimbinganGroupByPayload<T extends bimbinganGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BimbinganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BimbinganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BimbinganGroupByOutputType[P]>
            : GetScalarType<T[P], BimbinganGroupByOutputType[P]>
        }
      >
    >


  export type bimbinganSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    catatan?: boolean
    status?: boolean
    nim?: boolean
    nip?: boolean
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bimbingan"]>

  export type bimbinganSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    catatan?: boolean
    status?: boolean
    nim?: boolean
    nip?: boolean
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bimbingan"]>

  export type bimbinganSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    catatan?: boolean
    status?: boolean
    nim?: boolean
    nip?: boolean
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bimbingan"]>

  export type bimbinganSelectScalar = {
    id?: boolean
    tanggal?: boolean
    catatan?: boolean
    status?: boolean
    nim?: boolean
    nip?: boolean
  }

  export type bimbinganOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanggal" | "catatan" | "status" | "nim" | "nip", ExtArgs["result"]["bimbingan"]>
  export type bimbinganInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
  }
  export type bimbinganIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
  }
  export type bimbinganIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
  }

  export type $bimbinganPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bimbingan"
    objects: {
      mahasiswa: Prisma.$mahasiswaPayload<ExtArgs>
      dosen: Prisma.$dosenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanggal: Date
      catatan: string
      status: $Enums.StatusValidasi
      nim: string
      nip: string
    }, ExtArgs["result"]["bimbingan"]>
    composites: {}
  }

  type bimbinganGetPayload<S extends boolean | null | undefined | bimbinganDefaultArgs> = $Result.GetResult<Prisma.$bimbinganPayload, S>

  type bimbinganCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bimbinganFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BimbinganCountAggregateInputType | true
    }

  export interface bimbinganDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bimbingan'], meta: { name: 'bimbingan' } }
    /**
     * Find zero or one Bimbingan that matches the filter.
     * @param {bimbinganFindUniqueArgs} args - Arguments to find a Bimbingan
     * @example
     * // Get one Bimbingan
     * const bimbingan = await prisma.bimbingan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bimbinganFindUniqueArgs>(args: SelectSubset<T, bimbinganFindUniqueArgs<ExtArgs>>): Prisma__bimbinganClient<$Result.GetResult<Prisma.$bimbinganPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bimbingan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bimbinganFindUniqueOrThrowArgs} args - Arguments to find a Bimbingan
     * @example
     * // Get one Bimbingan
     * const bimbingan = await prisma.bimbingan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bimbinganFindUniqueOrThrowArgs>(args: SelectSubset<T, bimbinganFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bimbinganClient<$Result.GetResult<Prisma.$bimbinganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bimbingan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bimbinganFindFirstArgs} args - Arguments to find a Bimbingan
     * @example
     * // Get one Bimbingan
     * const bimbingan = await prisma.bimbingan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bimbinganFindFirstArgs>(args?: SelectSubset<T, bimbinganFindFirstArgs<ExtArgs>>): Prisma__bimbinganClient<$Result.GetResult<Prisma.$bimbinganPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bimbingan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bimbinganFindFirstOrThrowArgs} args - Arguments to find a Bimbingan
     * @example
     * // Get one Bimbingan
     * const bimbingan = await prisma.bimbingan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bimbinganFindFirstOrThrowArgs>(args?: SelectSubset<T, bimbinganFindFirstOrThrowArgs<ExtArgs>>): Prisma__bimbinganClient<$Result.GetResult<Prisma.$bimbinganPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bimbingans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bimbinganFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bimbingans
     * const bimbingans = await prisma.bimbingan.findMany()
     * 
     * // Get first 10 Bimbingans
     * const bimbingans = await prisma.bimbingan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bimbinganWithIdOnly = await prisma.bimbingan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bimbinganFindManyArgs>(args?: SelectSubset<T, bimbinganFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bimbinganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bimbingan.
     * @param {bimbinganCreateArgs} args - Arguments to create a Bimbingan.
     * @example
     * // Create one Bimbingan
     * const Bimbingan = await prisma.bimbingan.create({
     *   data: {
     *     // ... data to create a Bimbingan
     *   }
     * })
     * 
     */
    create<T extends bimbinganCreateArgs>(args: SelectSubset<T, bimbinganCreateArgs<ExtArgs>>): Prisma__bimbinganClient<$Result.GetResult<Prisma.$bimbinganPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bimbingans.
     * @param {bimbinganCreateManyArgs} args - Arguments to create many Bimbingans.
     * @example
     * // Create many Bimbingans
     * const bimbingan = await prisma.bimbingan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bimbinganCreateManyArgs>(args?: SelectSubset<T, bimbinganCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bimbingans and returns the data saved in the database.
     * @param {bimbinganCreateManyAndReturnArgs} args - Arguments to create many Bimbingans.
     * @example
     * // Create many Bimbingans
     * const bimbingan = await prisma.bimbingan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bimbingans and only return the `id`
     * const bimbinganWithIdOnly = await prisma.bimbingan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bimbinganCreateManyAndReturnArgs>(args?: SelectSubset<T, bimbinganCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bimbinganPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bimbingan.
     * @param {bimbinganDeleteArgs} args - Arguments to delete one Bimbingan.
     * @example
     * // Delete one Bimbingan
     * const Bimbingan = await prisma.bimbingan.delete({
     *   where: {
     *     // ... filter to delete one Bimbingan
     *   }
     * })
     * 
     */
    delete<T extends bimbinganDeleteArgs>(args: SelectSubset<T, bimbinganDeleteArgs<ExtArgs>>): Prisma__bimbinganClient<$Result.GetResult<Prisma.$bimbinganPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bimbingan.
     * @param {bimbinganUpdateArgs} args - Arguments to update one Bimbingan.
     * @example
     * // Update one Bimbingan
     * const bimbingan = await prisma.bimbingan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bimbinganUpdateArgs>(args: SelectSubset<T, bimbinganUpdateArgs<ExtArgs>>): Prisma__bimbinganClient<$Result.GetResult<Prisma.$bimbinganPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bimbingans.
     * @param {bimbinganDeleteManyArgs} args - Arguments to filter Bimbingans to delete.
     * @example
     * // Delete a few Bimbingans
     * const { count } = await prisma.bimbingan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bimbinganDeleteManyArgs>(args?: SelectSubset<T, bimbinganDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bimbingans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bimbinganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bimbingans
     * const bimbingan = await prisma.bimbingan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bimbinganUpdateManyArgs>(args: SelectSubset<T, bimbinganUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bimbingans and returns the data updated in the database.
     * @param {bimbinganUpdateManyAndReturnArgs} args - Arguments to update many Bimbingans.
     * @example
     * // Update many Bimbingans
     * const bimbingan = await prisma.bimbingan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bimbingans and only return the `id`
     * const bimbinganWithIdOnly = await prisma.bimbingan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bimbinganUpdateManyAndReturnArgs>(args: SelectSubset<T, bimbinganUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bimbinganPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bimbingan.
     * @param {bimbinganUpsertArgs} args - Arguments to update or create a Bimbingan.
     * @example
     * // Update or create a Bimbingan
     * const bimbingan = await prisma.bimbingan.upsert({
     *   create: {
     *     // ... data to create a Bimbingan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bimbingan we want to update
     *   }
     * })
     */
    upsert<T extends bimbinganUpsertArgs>(args: SelectSubset<T, bimbinganUpsertArgs<ExtArgs>>): Prisma__bimbinganClient<$Result.GetResult<Prisma.$bimbinganPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bimbingans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bimbinganCountArgs} args - Arguments to filter Bimbingans to count.
     * @example
     * // Count the number of Bimbingans
     * const count = await prisma.bimbingan.count({
     *   where: {
     *     // ... the filter for the Bimbingans we want to count
     *   }
     * })
    **/
    count<T extends bimbinganCountArgs>(
      args?: Subset<T, bimbinganCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BimbinganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bimbingan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BimbinganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BimbinganAggregateArgs>(args: Subset<T, BimbinganAggregateArgs>): Prisma.PrismaPromise<GetBimbinganAggregateType<T>>

    /**
     * Group by Bimbingan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bimbinganGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bimbinganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bimbinganGroupByArgs['orderBy'] }
        : { orderBy?: bimbinganGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bimbinganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBimbinganGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bimbingan model
   */
  readonly fields: bimbinganFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bimbingan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bimbinganClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mahasiswa<T extends mahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswaDefaultArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dosen<T extends dosenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, dosenDefaultArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bimbingan model
   */
  interface bimbinganFieldRefs {
    readonly id: FieldRef<"bimbingan", 'String'>
    readonly tanggal: FieldRef<"bimbingan", 'DateTime'>
    readonly catatan: FieldRef<"bimbingan", 'String'>
    readonly status: FieldRef<"bimbingan", 'StatusValidasi'>
    readonly nim: FieldRef<"bimbingan", 'String'>
    readonly nip: FieldRef<"bimbingan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * bimbingan findUnique
   */
  export type bimbinganFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bimbingan
     */
    select?: bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bimbingan
     */
    omit?: bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bimbinganInclude<ExtArgs> | null
    /**
     * Filter, which bimbingan to fetch.
     */
    where: bimbinganWhereUniqueInput
  }

  /**
   * bimbingan findUniqueOrThrow
   */
  export type bimbinganFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bimbingan
     */
    select?: bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bimbingan
     */
    omit?: bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bimbinganInclude<ExtArgs> | null
    /**
     * Filter, which bimbingan to fetch.
     */
    where: bimbinganWhereUniqueInput
  }

  /**
   * bimbingan findFirst
   */
  export type bimbinganFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bimbingan
     */
    select?: bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bimbingan
     */
    omit?: bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bimbinganInclude<ExtArgs> | null
    /**
     * Filter, which bimbingan to fetch.
     */
    where?: bimbinganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bimbingans to fetch.
     */
    orderBy?: bimbinganOrderByWithRelationInput | bimbinganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bimbingans.
     */
    cursor?: bimbinganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bimbingans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bimbingans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bimbingans.
     */
    distinct?: BimbinganScalarFieldEnum | BimbinganScalarFieldEnum[]
  }

  /**
   * bimbingan findFirstOrThrow
   */
  export type bimbinganFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bimbingan
     */
    select?: bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bimbingan
     */
    omit?: bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bimbinganInclude<ExtArgs> | null
    /**
     * Filter, which bimbingan to fetch.
     */
    where?: bimbinganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bimbingans to fetch.
     */
    orderBy?: bimbinganOrderByWithRelationInput | bimbinganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bimbingans.
     */
    cursor?: bimbinganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bimbingans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bimbingans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bimbingans.
     */
    distinct?: BimbinganScalarFieldEnum | BimbinganScalarFieldEnum[]
  }

  /**
   * bimbingan findMany
   */
  export type bimbinganFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bimbingan
     */
    select?: bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bimbingan
     */
    omit?: bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bimbinganInclude<ExtArgs> | null
    /**
     * Filter, which bimbingans to fetch.
     */
    where?: bimbinganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bimbingans to fetch.
     */
    orderBy?: bimbinganOrderByWithRelationInput | bimbinganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bimbingans.
     */
    cursor?: bimbinganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bimbingans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bimbingans.
     */
    skip?: number
    distinct?: BimbinganScalarFieldEnum | BimbinganScalarFieldEnum[]
  }

  /**
   * bimbingan create
   */
  export type bimbinganCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bimbingan
     */
    select?: bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bimbingan
     */
    omit?: bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bimbinganInclude<ExtArgs> | null
    /**
     * The data needed to create a bimbingan.
     */
    data: XOR<bimbinganCreateInput, bimbinganUncheckedCreateInput>
  }

  /**
   * bimbingan createMany
   */
  export type bimbinganCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bimbingans.
     */
    data: bimbinganCreateManyInput | bimbinganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bimbingan createManyAndReturn
   */
  export type bimbinganCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bimbingan
     */
    select?: bimbinganSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bimbingan
     */
    omit?: bimbinganOmit<ExtArgs> | null
    /**
     * The data used to create many bimbingans.
     */
    data: bimbinganCreateManyInput | bimbinganCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bimbinganIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bimbingan update
   */
  export type bimbinganUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bimbingan
     */
    select?: bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bimbingan
     */
    omit?: bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bimbinganInclude<ExtArgs> | null
    /**
     * The data needed to update a bimbingan.
     */
    data: XOR<bimbinganUpdateInput, bimbinganUncheckedUpdateInput>
    /**
     * Choose, which bimbingan to update.
     */
    where: bimbinganWhereUniqueInput
  }

  /**
   * bimbingan updateMany
   */
  export type bimbinganUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bimbingans.
     */
    data: XOR<bimbinganUpdateManyMutationInput, bimbinganUncheckedUpdateManyInput>
    /**
     * Filter which bimbingans to update
     */
    where?: bimbinganWhereInput
    /**
     * Limit how many bimbingans to update.
     */
    limit?: number
  }

  /**
   * bimbingan updateManyAndReturn
   */
  export type bimbinganUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bimbingan
     */
    select?: bimbinganSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bimbingan
     */
    omit?: bimbinganOmit<ExtArgs> | null
    /**
     * The data used to update bimbingans.
     */
    data: XOR<bimbinganUpdateManyMutationInput, bimbinganUncheckedUpdateManyInput>
    /**
     * Filter which bimbingans to update
     */
    where?: bimbinganWhereInput
    /**
     * Limit how many bimbingans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bimbinganIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bimbingan upsert
   */
  export type bimbinganUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bimbingan
     */
    select?: bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bimbingan
     */
    omit?: bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bimbinganInclude<ExtArgs> | null
    /**
     * The filter to search for the bimbingan to update in case it exists.
     */
    where: bimbinganWhereUniqueInput
    /**
     * In case the bimbingan found by the `where` argument doesn't exist, create a new bimbingan with this data.
     */
    create: XOR<bimbinganCreateInput, bimbinganUncheckedCreateInput>
    /**
     * In case the bimbingan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bimbinganUpdateInput, bimbinganUncheckedUpdateInput>
  }

  /**
   * bimbingan delete
   */
  export type bimbinganDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bimbingan
     */
    select?: bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bimbingan
     */
    omit?: bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bimbinganInclude<ExtArgs> | null
    /**
     * Filter which bimbingan to delete.
     */
    where: bimbinganWhereUniqueInput
  }

  /**
   * bimbingan deleteMany
   */
  export type bimbinganDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bimbingans to delete
     */
    where?: bimbinganWhereInput
    /**
     * Limit how many bimbingans to delete.
     */
    limit?: number
  }

  /**
   * bimbingan without action
   */
  export type bimbinganDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bimbingan
     */
    select?: bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bimbingan
     */
    omit?: bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bimbinganInclude<ExtArgs> | null
  }


  /**
   * Model daily_report
   */

  export type AggregateDaily_report = {
    _count: Daily_reportCountAggregateOutputType | null
    _avg: Daily_reportAvgAggregateOutputType | null
    _sum: Daily_reportSumAggregateOutputType | null
    _min: Daily_reportMinAggregateOutputType | null
    _max: Daily_reportMaxAggregateOutputType | null
  }

  export type Daily_reportAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type Daily_reportSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type Daily_reportMinAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    status: $Enums.StatusValidasi | null
    catatan: string | null
    latitude: number | null
    longitude: number | null
    nim: string | null
  }

  export type Daily_reportMaxAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    status: $Enums.StatusValidasi | null
    catatan: string | null
    latitude: number | null
    longitude: number | null
    nim: string | null
  }

  export type Daily_reportCountAggregateOutputType = {
    id: number
    tanggal: number
    status: number
    catatan: number
    latitude: number
    longitude: number
    nim: number
    _all: number
  }


  export type Daily_reportAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type Daily_reportSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type Daily_reportMinAggregateInputType = {
    id?: true
    tanggal?: true
    status?: true
    catatan?: true
    latitude?: true
    longitude?: true
    nim?: true
  }

  export type Daily_reportMaxAggregateInputType = {
    id?: true
    tanggal?: true
    status?: true
    catatan?: true
    latitude?: true
    longitude?: true
    nim?: true
  }

  export type Daily_reportCountAggregateInputType = {
    id?: true
    tanggal?: true
    status?: true
    catatan?: true
    latitude?: true
    longitude?: true
    nim?: true
    _all?: true
  }

  export type Daily_reportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which daily_report to aggregate.
     */
    where?: daily_reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of daily_reports to fetch.
     */
    orderBy?: daily_reportOrderByWithRelationInput | daily_reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: daily_reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` daily_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` daily_reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned daily_reports
    **/
    _count?: true | Daily_reportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Daily_reportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Daily_reportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Daily_reportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Daily_reportMaxAggregateInputType
  }

  export type GetDaily_reportAggregateType<T extends Daily_reportAggregateArgs> = {
        [P in keyof T & keyof AggregateDaily_report]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDaily_report[P]>
      : GetScalarType<T[P], AggregateDaily_report[P]>
  }




  export type daily_reportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: daily_reportWhereInput
    orderBy?: daily_reportOrderByWithAggregationInput | daily_reportOrderByWithAggregationInput[]
    by: Daily_reportScalarFieldEnum[] | Daily_reportScalarFieldEnum
    having?: daily_reportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Daily_reportCountAggregateInputType | true
    _avg?: Daily_reportAvgAggregateInputType
    _sum?: Daily_reportSumAggregateInputType
    _min?: Daily_reportMinAggregateInputType
    _max?: Daily_reportMaxAggregateInputType
  }

  export type Daily_reportGroupByOutputType = {
    id: string
    tanggal: Date
    status: $Enums.StatusValidasi
    catatan: string | null
    latitude: number
    longitude: number
    nim: string
    _count: Daily_reportCountAggregateOutputType | null
    _avg: Daily_reportAvgAggregateOutputType | null
    _sum: Daily_reportSumAggregateOutputType | null
    _min: Daily_reportMinAggregateOutputType | null
    _max: Daily_reportMaxAggregateOutputType | null
  }

  type GetDaily_reportGroupByPayload<T extends daily_reportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Daily_reportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Daily_reportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Daily_reportGroupByOutputType[P]>
            : GetScalarType<T[P], Daily_reportGroupByOutputType[P]>
        }
      >
    >


  export type daily_reportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    status?: boolean
    catatan?: boolean
    latitude?: boolean
    longitude?: boolean
    nim?: boolean
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    detail_daily_report?: boolean | daily_report$detail_daily_reportArgs<ExtArgs>
    _count?: boolean | Daily_reportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["daily_report"]>

  export type daily_reportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    status?: boolean
    catatan?: boolean
    latitude?: boolean
    longitude?: boolean
    nim?: boolean
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["daily_report"]>

  export type daily_reportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    status?: boolean
    catatan?: boolean
    latitude?: boolean
    longitude?: boolean
    nim?: boolean
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["daily_report"]>

  export type daily_reportSelectScalar = {
    id?: boolean
    tanggal?: boolean
    status?: boolean
    catatan?: boolean
    latitude?: boolean
    longitude?: boolean
    nim?: boolean
  }

  export type daily_reportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanggal" | "status" | "catatan" | "latitude" | "longitude" | "nim", ExtArgs["result"]["daily_report"]>
  export type daily_reportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    detail_daily_report?: boolean | daily_report$detail_daily_reportArgs<ExtArgs>
    _count?: boolean | Daily_reportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type daily_reportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }
  export type daily_reportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }

  export type $daily_reportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "daily_report"
    objects: {
      mahasiswa: Prisma.$mahasiswaPayload<ExtArgs>
      detail_daily_report: Prisma.$detail_daily_reportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanggal: Date
      status: $Enums.StatusValidasi
      catatan: string | null
      latitude: number
      longitude: number
      nim: string
    }, ExtArgs["result"]["daily_report"]>
    composites: {}
  }

  type daily_reportGetPayload<S extends boolean | null | undefined | daily_reportDefaultArgs> = $Result.GetResult<Prisma.$daily_reportPayload, S>

  type daily_reportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<daily_reportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Daily_reportCountAggregateInputType | true
    }

  export interface daily_reportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['daily_report'], meta: { name: 'daily_report' } }
    /**
     * Find zero or one Daily_report that matches the filter.
     * @param {daily_reportFindUniqueArgs} args - Arguments to find a Daily_report
     * @example
     * // Get one Daily_report
     * const daily_report = await prisma.daily_report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends daily_reportFindUniqueArgs>(args: SelectSubset<T, daily_reportFindUniqueArgs<ExtArgs>>): Prisma__daily_reportClient<$Result.GetResult<Prisma.$daily_reportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Daily_report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {daily_reportFindUniqueOrThrowArgs} args - Arguments to find a Daily_report
     * @example
     * // Get one Daily_report
     * const daily_report = await prisma.daily_report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends daily_reportFindUniqueOrThrowArgs>(args: SelectSubset<T, daily_reportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__daily_reportClient<$Result.GetResult<Prisma.$daily_reportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Daily_report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_reportFindFirstArgs} args - Arguments to find a Daily_report
     * @example
     * // Get one Daily_report
     * const daily_report = await prisma.daily_report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends daily_reportFindFirstArgs>(args?: SelectSubset<T, daily_reportFindFirstArgs<ExtArgs>>): Prisma__daily_reportClient<$Result.GetResult<Prisma.$daily_reportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Daily_report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_reportFindFirstOrThrowArgs} args - Arguments to find a Daily_report
     * @example
     * // Get one Daily_report
     * const daily_report = await prisma.daily_report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends daily_reportFindFirstOrThrowArgs>(args?: SelectSubset<T, daily_reportFindFirstOrThrowArgs<ExtArgs>>): Prisma__daily_reportClient<$Result.GetResult<Prisma.$daily_reportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Daily_reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_reportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Daily_reports
     * const daily_reports = await prisma.daily_report.findMany()
     * 
     * // Get first 10 Daily_reports
     * const daily_reports = await prisma.daily_report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const daily_reportWithIdOnly = await prisma.daily_report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends daily_reportFindManyArgs>(args?: SelectSubset<T, daily_reportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$daily_reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Daily_report.
     * @param {daily_reportCreateArgs} args - Arguments to create a Daily_report.
     * @example
     * // Create one Daily_report
     * const Daily_report = await prisma.daily_report.create({
     *   data: {
     *     // ... data to create a Daily_report
     *   }
     * })
     * 
     */
    create<T extends daily_reportCreateArgs>(args: SelectSubset<T, daily_reportCreateArgs<ExtArgs>>): Prisma__daily_reportClient<$Result.GetResult<Prisma.$daily_reportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Daily_reports.
     * @param {daily_reportCreateManyArgs} args - Arguments to create many Daily_reports.
     * @example
     * // Create many Daily_reports
     * const daily_report = await prisma.daily_report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends daily_reportCreateManyArgs>(args?: SelectSubset<T, daily_reportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Daily_reports and returns the data saved in the database.
     * @param {daily_reportCreateManyAndReturnArgs} args - Arguments to create many Daily_reports.
     * @example
     * // Create many Daily_reports
     * const daily_report = await prisma.daily_report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Daily_reports and only return the `id`
     * const daily_reportWithIdOnly = await prisma.daily_report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends daily_reportCreateManyAndReturnArgs>(args?: SelectSubset<T, daily_reportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$daily_reportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Daily_report.
     * @param {daily_reportDeleteArgs} args - Arguments to delete one Daily_report.
     * @example
     * // Delete one Daily_report
     * const Daily_report = await prisma.daily_report.delete({
     *   where: {
     *     // ... filter to delete one Daily_report
     *   }
     * })
     * 
     */
    delete<T extends daily_reportDeleteArgs>(args: SelectSubset<T, daily_reportDeleteArgs<ExtArgs>>): Prisma__daily_reportClient<$Result.GetResult<Prisma.$daily_reportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Daily_report.
     * @param {daily_reportUpdateArgs} args - Arguments to update one Daily_report.
     * @example
     * // Update one Daily_report
     * const daily_report = await prisma.daily_report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends daily_reportUpdateArgs>(args: SelectSubset<T, daily_reportUpdateArgs<ExtArgs>>): Prisma__daily_reportClient<$Result.GetResult<Prisma.$daily_reportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Daily_reports.
     * @param {daily_reportDeleteManyArgs} args - Arguments to filter Daily_reports to delete.
     * @example
     * // Delete a few Daily_reports
     * const { count } = await prisma.daily_report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends daily_reportDeleteManyArgs>(args?: SelectSubset<T, daily_reportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Daily_reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_reportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Daily_reports
     * const daily_report = await prisma.daily_report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends daily_reportUpdateManyArgs>(args: SelectSubset<T, daily_reportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Daily_reports and returns the data updated in the database.
     * @param {daily_reportUpdateManyAndReturnArgs} args - Arguments to update many Daily_reports.
     * @example
     * // Update many Daily_reports
     * const daily_report = await prisma.daily_report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Daily_reports and only return the `id`
     * const daily_reportWithIdOnly = await prisma.daily_report.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends daily_reportUpdateManyAndReturnArgs>(args: SelectSubset<T, daily_reportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$daily_reportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Daily_report.
     * @param {daily_reportUpsertArgs} args - Arguments to update or create a Daily_report.
     * @example
     * // Update or create a Daily_report
     * const daily_report = await prisma.daily_report.upsert({
     *   create: {
     *     // ... data to create a Daily_report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Daily_report we want to update
     *   }
     * })
     */
    upsert<T extends daily_reportUpsertArgs>(args: SelectSubset<T, daily_reportUpsertArgs<ExtArgs>>): Prisma__daily_reportClient<$Result.GetResult<Prisma.$daily_reportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Daily_reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_reportCountArgs} args - Arguments to filter Daily_reports to count.
     * @example
     * // Count the number of Daily_reports
     * const count = await prisma.daily_report.count({
     *   where: {
     *     // ... the filter for the Daily_reports we want to count
     *   }
     * })
    **/
    count<T extends daily_reportCountArgs>(
      args?: Subset<T, daily_reportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Daily_reportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Daily_report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Daily_reportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Daily_reportAggregateArgs>(args: Subset<T, Daily_reportAggregateArgs>): Prisma.PrismaPromise<GetDaily_reportAggregateType<T>>

    /**
     * Group by Daily_report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_reportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends daily_reportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: daily_reportGroupByArgs['orderBy'] }
        : { orderBy?: daily_reportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, daily_reportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDaily_reportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the daily_report model
   */
  readonly fields: daily_reportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for daily_report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__daily_reportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mahasiswa<T extends mahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswaDefaultArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detail_daily_report<T extends daily_report$detail_daily_reportArgs<ExtArgs> = {}>(args?: Subset<T, daily_report$detail_daily_reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_daily_reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the daily_report model
   */
  interface daily_reportFieldRefs {
    readonly id: FieldRef<"daily_report", 'String'>
    readonly tanggal: FieldRef<"daily_report", 'DateTime'>
    readonly status: FieldRef<"daily_report", 'StatusValidasi'>
    readonly catatan: FieldRef<"daily_report", 'String'>
    readonly latitude: FieldRef<"daily_report", 'Float'>
    readonly longitude: FieldRef<"daily_report", 'Float'>
    readonly nim: FieldRef<"daily_report", 'String'>
  }
    

  // Custom InputTypes
  /**
   * daily_report findUnique
   */
  export type daily_reportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_report
     */
    select?: daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_report
     */
    omit?: daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_reportInclude<ExtArgs> | null
    /**
     * Filter, which daily_report to fetch.
     */
    where: daily_reportWhereUniqueInput
  }

  /**
   * daily_report findUniqueOrThrow
   */
  export type daily_reportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_report
     */
    select?: daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_report
     */
    omit?: daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_reportInclude<ExtArgs> | null
    /**
     * Filter, which daily_report to fetch.
     */
    where: daily_reportWhereUniqueInput
  }

  /**
   * daily_report findFirst
   */
  export type daily_reportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_report
     */
    select?: daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_report
     */
    omit?: daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_reportInclude<ExtArgs> | null
    /**
     * Filter, which daily_report to fetch.
     */
    where?: daily_reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of daily_reports to fetch.
     */
    orderBy?: daily_reportOrderByWithRelationInput | daily_reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for daily_reports.
     */
    cursor?: daily_reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` daily_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` daily_reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of daily_reports.
     */
    distinct?: Daily_reportScalarFieldEnum | Daily_reportScalarFieldEnum[]
  }

  /**
   * daily_report findFirstOrThrow
   */
  export type daily_reportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_report
     */
    select?: daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_report
     */
    omit?: daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_reportInclude<ExtArgs> | null
    /**
     * Filter, which daily_report to fetch.
     */
    where?: daily_reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of daily_reports to fetch.
     */
    orderBy?: daily_reportOrderByWithRelationInput | daily_reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for daily_reports.
     */
    cursor?: daily_reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` daily_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` daily_reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of daily_reports.
     */
    distinct?: Daily_reportScalarFieldEnum | Daily_reportScalarFieldEnum[]
  }

  /**
   * daily_report findMany
   */
  export type daily_reportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_report
     */
    select?: daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_report
     */
    omit?: daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_reportInclude<ExtArgs> | null
    /**
     * Filter, which daily_reports to fetch.
     */
    where?: daily_reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of daily_reports to fetch.
     */
    orderBy?: daily_reportOrderByWithRelationInput | daily_reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing daily_reports.
     */
    cursor?: daily_reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` daily_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` daily_reports.
     */
    skip?: number
    distinct?: Daily_reportScalarFieldEnum | Daily_reportScalarFieldEnum[]
  }

  /**
   * daily_report create
   */
  export type daily_reportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_report
     */
    select?: daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_report
     */
    omit?: daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_reportInclude<ExtArgs> | null
    /**
     * The data needed to create a daily_report.
     */
    data: XOR<daily_reportCreateInput, daily_reportUncheckedCreateInput>
  }

  /**
   * daily_report createMany
   */
  export type daily_reportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many daily_reports.
     */
    data: daily_reportCreateManyInput | daily_reportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * daily_report createManyAndReturn
   */
  export type daily_reportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_report
     */
    select?: daily_reportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the daily_report
     */
    omit?: daily_reportOmit<ExtArgs> | null
    /**
     * The data used to create many daily_reports.
     */
    data: daily_reportCreateManyInput | daily_reportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_reportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * daily_report update
   */
  export type daily_reportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_report
     */
    select?: daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_report
     */
    omit?: daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_reportInclude<ExtArgs> | null
    /**
     * The data needed to update a daily_report.
     */
    data: XOR<daily_reportUpdateInput, daily_reportUncheckedUpdateInput>
    /**
     * Choose, which daily_report to update.
     */
    where: daily_reportWhereUniqueInput
  }

  /**
   * daily_report updateMany
   */
  export type daily_reportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update daily_reports.
     */
    data: XOR<daily_reportUpdateManyMutationInput, daily_reportUncheckedUpdateManyInput>
    /**
     * Filter which daily_reports to update
     */
    where?: daily_reportWhereInput
    /**
     * Limit how many daily_reports to update.
     */
    limit?: number
  }

  /**
   * daily_report updateManyAndReturn
   */
  export type daily_reportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_report
     */
    select?: daily_reportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the daily_report
     */
    omit?: daily_reportOmit<ExtArgs> | null
    /**
     * The data used to update daily_reports.
     */
    data: XOR<daily_reportUpdateManyMutationInput, daily_reportUncheckedUpdateManyInput>
    /**
     * Filter which daily_reports to update
     */
    where?: daily_reportWhereInput
    /**
     * Limit how many daily_reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_reportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * daily_report upsert
   */
  export type daily_reportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_report
     */
    select?: daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_report
     */
    omit?: daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_reportInclude<ExtArgs> | null
    /**
     * The filter to search for the daily_report to update in case it exists.
     */
    where: daily_reportWhereUniqueInput
    /**
     * In case the daily_report found by the `where` argument doesn't exist, create a new daily_report with this data.
     */
    create: XOR<daily_reportCreateInput, daily_reportUncheckedCreateInput>
    /**
     * In case the daily_report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<daily_reportUpdateInput, daily_reportUncheckedUpdateInput>
  }

  /**
   * daily_report delete
   */
  export type daily_reportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_report
     */
    select?: daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_report
     */
    omit?: daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_reportInclude<ExtArgs> | null
    /**
     * Filter which daily_report to delete.
     */
    where: daily_reportWhereUniqueInput
  }

  /**
   * daily_report deleteMany
   */
  export type daily_reportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which daily_reports to delete
     */
    where?: daily_reportWhereInput
    /**
     * Limit how many daily_reports to delete.
     */
    limit?: number
  }

  /**
   * daily_report.detail_daily_report
   */
  export type daily_report$detail_daily_reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_daily_report
     */
    select?: detail_daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_daily_report
     */
    omit?: detail_daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_daily_reportInclude<ExtArgs> | null
    where?: detail_daily_reportWhereInput
    orderBy?: detail_daily_reportOrderByWithRelationInput | detail_daily_reportOrderByWithRelationInput[]
    cursor?: detail_daily_reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detail_daily_reportScalarFieldEnum | Detail_daily_reportScalarFieldEnum[]
  }

  /**
   * daily_report without action
   */
  export type daily_reportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_report
     */
    select?: daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_report
     */
    omit?: daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_reportInclude<ExtArgs> | null
  }


  /**
   * Model detail_daily_report
   */

  export type AggregateDetail_daily_report = {
    _count: Detail_daily_reportCountAggregateOutputType | null
    _avg: Detail_daily_reportAvgAggregateOutputType | null
    _sum: Detail_daily_reportSumAggregateOutputType | null
    _min: Detail_daily_reportMinAggregateOutputType | null
    _max: Detail_daily_reportMaxAggregateOutputType | null
  }

  export type Detail_daily_reportAvgAggregateOutputType = {
    id: number | null
  }

  export type Detail_daily_reportSumAggregateOutputType = {
    id: number | null
  }

  export type Detail_daily_reportMinAggregateOutputType = {
    id: number | null
    judul_kegiatan: string | null
    deskripsi_kegiatan: string | null
    waktu: Date | null
    id_daily_report: string | null
  }

  export type Detail_daily_reportMaxAggregateOutputType = {
    id: number | null
    judul_kegiatan: string | null
    deskripsi_kegiatan: string | null
    waktu: Date | null
    id_daily_report: string | null
  }

  export type Detail_daily_reportCountAggregateOutputType = {
    id: number
    judul_kegiatan: number
    deskripsi_kegiatan: number
    waktu: number
    id_daily_report: number
    _all: number
  }


  export type Detail_daily_reportAvgAggregateInputType = {
    id?: true
  }

  export type Detail_daily_reportSumAggregateInputType = {
    id?: true
  }

  export type Detail_daily_reportMinAggregateInputType = {
    id?: true
    judul_kegiatan?: true
    deskripsi_kegiatan?: true
    waktu?: true
    id_daily_report?: true
  }

  export type Detail_daily_reportMaxAggregateInputType = {
    id?: true
    judul_kegiatan?: true
    deskripsi_kegiatan?: true
    waktu?: true
    id_daily_report?: true
  }

  export type Detail_daily_reportCountAggregateInputType = {
    id?: true
    judul_kegiatan?: true
    deskripsi_kegiatan?: true
    waktu?: true
    id_daily_report?: true
    _all?: true
  }

  export type Detail_daily_reportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detail_daily_report to aggregate.
     */
    where?: detail_daily_reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_daily_reports to fetch.
     */
    orderBy?: detail_daily_reportOrderByWithRelationInput | detail_daily_reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detail_daily_reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_daily_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_daily_reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detail_daily_reports
    **/
    _count?: true | Detail_daily_reportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detail_daily_reportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detail_daily_reportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detail_daily_reportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detail_daily_reportMaxAggregateInputType
  }

  export type GetDetail_daily_reportAggregateType<T extends Detail_daily_reportAggregateArgs> = {
        [P in keyof T & keyof AggregateDetail_daily_report]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetail_daily_report[P]>
      : GetScalarType<T[P], AggregateDetail_daily_report[P]>
  }




  export type detail_daily_reportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_daily_reportWhereInput
    orderBy?: detail_daily_reportOrderByWithAggregationInput | detail_daily_reportOrderByWithAggregationInput[]
    by: Detail_daily_reportScalarFieldEnum[] | Detail_daily_reportScalarFieldEnum
    having?: detail_daily_reportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detail_daily_reportCountAggregateInputType | true
    _avg?: Detail_daily_reportAvgAggregateInputType
    _sum?: Detail_daily_reportSumAggregateInputType
    _min?: Detail_daily_reportMinAggregateInputType
    _max?: Detail_daily_reportMaxAggregateInputType
  }

  export type Detail_daily_reportGroupByOutputType = {
    id: number
    judul_kegiatan: string
    deskripsi_kegiatan: string
    waktu: Date
    id_daily_report: string
    _count: Detail_daily_reportCountAggregateOutputType | null
    _avg: Detail_daily_reportAvgAggregateOutputType | null
    _sum: Detail_daily_reportSumAggregateOutputType | null
    _min: Detail_daily_reportMinAggregateOutputType | null
    _max: Detail_daily_reportMaxAggregateOutputType | null
  }

  type GetDetail_daily_reportGroupByPayload<T extends detail_daily_reportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detail_daily_reportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detail_daily_reportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detail_daily_reportGroupByOutputType[P]>
            : GetScalarType<T[P], Detail_daily_reportGroupByOutputType[P]>
        }
      >
    >


  export type detail_daily_reportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul_kegiatan?: boolean
    deskripsi_kegiatan?: boolean
    waktu?: boolean
    id_daily_report?: boolean
    daily_report?: boolean | daily_reportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detail_daily_report"]>

  export type detail_daily_reportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul_kegiatan?: boolean
    deskripsi_kegiatan?: boolean
    waktu?: boolean
    id_daily_report?: boolean
    daily_report?: boolean | daily_reportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detail_daily_report"]>

  export type detail_daily_reportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul_kegiatan?: boolean
    deskripsi_kegiatan?: boolean
    waktu?: boolean
    id_daily_report?: boolean
    daily_report?: boolean | daily_reportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detail_daily_report"]>

  export type detail_daily_reportSelectScalar = {
    id?: boolean
    judul_kegiatan?: boolean
    deskripsi_kegiatan?: boolean
    waktu?: boolean
    id_daily_report?: boolean
  }

  export type detail_daily_reportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul_kegiatan" | "deskripsi_kegiatan" | "waktu" | "id_daily_report", ExtArgs["result"]["detail_daily_report"]>
  export type detail_daily_reportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    daily_report?: boolean | daily_reportDefaultArgs<ExtArgs>
  }
  export type detail_daily_reportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    daily_report?: boolean | daily_reportDefaultArgs<ExtArgs>
  }
  export type detail_daily_reportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    daily_report?: boolean | daily_reportDefaultArgs<ExtArgs>
  }

  export type $detail_daily_reportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detail_daily_report"
    objects: {
      daily_report: Prisma.$daily_reportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      judul_kegiatan: string
      deskripsi_kegiatan: string
      waktu: Date
      id_daily_report: string
    }, ExtArgs["result"]["detail_daily_report"]>
    composites: {}
  }

  type detail_daily_reportGetPayload<S extends boolean | null | undefined | detail_daily_reportDefaultArgs> = $Result.GetResult<Prisma.$detail_daily_reportPayload, S>

  type detail_daily_reportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detail_daily_reportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detail_daily_reportCountAggregateInputType | true
    }

  export interface detail_daily_reportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detail_daily_report'], meta: { name: 'detail_daily_report' } }
    /**
     * Find zero or one Detail_daily_report that matches the filter.
     * @param {detail_daily_reportFindUniqueArgs} args - Arguments to find a Detail_daily_report
     * @example
     * // Get one Detail_daily_report
     * const detail_daily_report = await prisma.detail_daily_report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detail_daily_reportFindUniqueArgs>(args: SelectSubset<T, detail_daily_reportFindUniqueArgs<ExtArgs>>): Prisma__detail_daily_reportClient<$Result.GetResult<Prisma.$detail_daily_reportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detail_daily_report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detail_daily_reportFindUniqueOrThrowArgs} args - Arguments to find a Detail_daily_report
     * @example
     * // Get one Detail_daily_report
     * const detail_daily_report = await prisma.detail_daily_report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detail_daily_reportFindUniqueOrThrowArgs>(args: SelectSubset<T, detail_daily_reportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detail_daily_reportClient<$Result.GetResult<Prisma.$detail_daily_reportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detail_daily_report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_daily_reportFindFirstArgs} args - Arguments to find a Detail_daily_report
     * @example
     * // Get one Detail_daily_report
     * const detail_daily_report = await prisma.detail_daily_report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detail_daily_reportFindFirstArgs>(args?: SelectSubset<T, detail_daily_reportFindFirstArgs<ExtArgs>>): Prisma__detail_daily_reportClient<$Result.GetResult<Prisma.$detail_daily_reportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detail_daily_report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_daily_reportFindFirstOrThrowArgs} args - Arguments to find a Detail_daily_report
     * @example
     * // Get one Detail_daily_report
     * const detail_daily_report = await prisma.detail_daily_report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detail_daily_reportFindFirstOrThrowArgs>(args?: SelectSubset<T, detail_daily_reportFindFirstOrThrowArgs<ExtArgs>>): Prisma__detail_daily_reportClient<$Result.GetResult<Prisma.$detail_daily_reportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detail_daily_reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_daily_reportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detail_daily_reports
     * const detail_daily_reports = await prisma.detail_daily_report.findMany()
     * 
     * // Get first 10 Detail_daily_reports
     * const detail_daily_reports = await prisma.detail_daily_report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detail_daily_reportWithIdOnly = await prisma.detail_daily_report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends detail_daily_reportFindManyArgs>(args?: SelectSubset<T, detail_daily_reportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_daily_reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detail_daily_report.
     * @param {detail_daily_reportCreateArgs} args - Arguments to create a Detail_daily_report.
     * @example
     * // Create one Detail_daily_report
     * const Detail_daily_report = await prisma.detail_daily_report.create({
     *   data: {
     *     // ... data to create a Detail_daily_report
     *   }
     * })
     * 
     */
    create<T extends detail_daily_reportCreateArgs>(args: SelectSubset<T, detail_daily_reportCreateArgs<ExtArgs>>): Prisma__detail_daily_reportClient<$Result.GetResult<Prisma.$detail_daily_reportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detail_daily_reports.
     * @param {detail_daily_reportCreateManyArgs} args - Arguments to create many Detail_daily_reports.
     * @example
     * // Create many Detail_daily_reports
     * const detail_daily_report = await prisma.detail_daily_report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detail_daily_reportCreateManyArgs>(args?: SelectSubset<T, detail_daily_reportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Detail_daily_reports and returns the data saved in the database.
     * @param {detail_daily_reportCreateManyAndReturnArgs} args - Arguments to create many Detail_daily_reports.
     * @example
     * // Create many Detail_daily_reports
     * const detail_daily_report = await prisma.detail_daily_report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Detail_daily_reports and only return the `id`
     * const detail_daily_reportWithIdOnly = await prisma.detail_daily_report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends detail_daily_reportCreateManyAndReturnArgs>(args?: SelectSubset<T, detail_daily_reportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_daily_reportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Detail_daily_report.
     * @param {detail_daily_reportDeleteArgs} args - Arguments to delete one Detail_daily_report.
     * @example
     * // Delete one Detail_daily_report
     * const Detail_daily_report = await prisma.detail_daily_report.delete({
     *   where: {
     *     // ... filter to delete one Detail_daily_report
     *   }
     * })
     * 
     */
    delete<T extends detail_daily_reportDeleteArgs>(args: SelectSubset<T, detail_daily_reportDeleteArgs<ExtArgs>>): Prisma__detail_daily_reportClient<$Result.GetResult<Prisma.$detail_daily_reportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detail_daily_report.
     * @param {detail_daily_reportUpdateArgs} args - Arguments to update one Detail_daily_report.
     * @example
     * // Update one Detail_daily_report
     * const detail_daily_report = await prisma.detail_daily_report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detail_daily_reportUpdateArgs>(args: SelectSubset<T, detail_daily_reportUpdateArgs<ExtArgs>>): Prisma__detail_daily_reportClient<$Result.GetResult<Prisma.$detail_daily_reportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detail_daily_reports.
     * @param {detail_daily_reportDeleteManyArgs} args - Arguments to filter Detail_daily_reports to delete.
     * @example
     * // Delete a few Detail_daily_reports
     * const { count } = await prisma.detail_daily_report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detail_daily_reportDeleteManyArgs>(args?: SelectSubset<T, detail_daily_reportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detail_daily_reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_daily_reportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detail_daily_reports
     * const detail_daily_report = await prisma.detail_daily_report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detail_daily_reportUpdateManyArgs>(args: SelectSubset<T, detail_daily_reportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detail_daily_reports and returns the data updated in the database.
     * @param {detail_daily_reportUpdateManyAndReturnArgs} args - Arguments to update many Detail_daily_reports.
     * @example
     * // Update many Detail_daily_reports
     * const detail_daily_report = await prisma.detail_daily_report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Detail_daily_reports and only return the `id`
     * const detail_daily_reportWithIdOnly = await prisma.detail_daily_report.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends detail_daily_reportUpdateManyAndReturnArgs>(args: SelectSubset<T, detail_daily_reportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_daily_reportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Detail_daily_report.
     * @param {detail_daily_reportUpsertArgs} args - Arguments to update or create a Detail_daily_report.
     * @example
     * // Update or create a Detail_daily_report
     * const detail_daily_report = await prisma.detail_daily_report.upsert({
     *   create: {
     *     // ... data to create a Detail_daily_report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detail_daily_report we want to update
     *   }
     * })
     */
    upsert<T extends detail_daily_reportUpsertArgs>(args: SelectSubset<T, detail_daily_reportUpsertArgs<ExtArgs>>): Prisma__detail_daily_reportClient<$Result.GetResult<Prisma.$detail_daily_reportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detail_daily_reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_daily_reportCountArgs} args - Arguments to filter Detail_daily_reports to count.
     * @example
     * // Count the number of Detail_daily_reports
     * const count = await prisma.detail_daily_report.count({
     *   where: {
     *     // ... the filter for the Detail_daily_reports we want to count
     *   }
     * })
    **/
    count<T extends detail_daily_reportCountArgs>(
      args?: Subset<T, detail_daily_reportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detail_daily_reportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detail_daily_report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detail_daily_reportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detail_daily_reportAggregateArgs>(args: Subset<T, Detail_daily_reportAggregateArgs>): Prisma.PrismaPromise<GetDetail_daily_reportAggregateType<T>>

    /**
     * Group by Detail_daily_report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_daily_reportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends detail_daily_reportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detail_daily_reportGroupByArgs['orderBy'] }
        : { orderBy?: detail_daily_reportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, detail_daily_reportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetail_daily_reportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detail_daily_report model
   */
  readonly fields: detail_daily_reportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detail_daily_report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detail_daily_reportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    daily_report<T extends daily_reportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, daily_reportDefaultArgs<ExtArgs>>): Prisma__daily_reportClient<$Result.GetResult<Prisma.$daily_reportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the detail_daily_report model
   */
  interface detail_daily_reportFieldRefs {
    readonly id: FieldRef<"detail_daily_report", 'Int'>
    readonly judul_kegiatan: FieldRef<"detail_daily_report", 'String'>
    readonly deskripsi_kegiatan: FieldRef<"detail_daily_report", 'String'>
    readonly waktu: FieldRef<"detail_daily_report", 'DateTime'>
    readonly id_daily_report: FieldRef<"detail_daily_report", 'String'>
  }
    

  // Custom InputTypes
  /**
   * detail_daily_report findUnique
   */
  export type detail_daily_reportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_daily_report
     */
    select?: detail_daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_daily_report
     */
    omit?: detail_daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_daily_reportInclude<ExtArgs> | null
    /**
     * Filter, which detail_daily_report to fetch.
     */
    where: detail_daily_reportWhereUniqueInput
  }

  /**
   * detail_daily_report findUniqueOrThrow
   */
  export type detail_daily_reportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_daily_report
     */
    select?: detail_daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_daily_report
     */
    omit?: detail_daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_daily_reportInclude<ExtArgs> | null
    /**
     * Filter, which detail_daily_report to fetch.
     */
    where: detail_daily_reportWhereUniqueInput
  }

  /**
   * detail_daily_report findFirst
   */
  export type detail_daily_reportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_daily_report
     */
    select?: detail_daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_daily_report
     */
    omit?: detail_daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_daily_reportInclude<ExtArgs> | null
    /**
     * Filter, which detail_daily_report to fetch.
     */
    where?: detail_daily_reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_daily_reports to fetch.
     */
    orderBy?: detail_daily_reportOrderByWithRelationInput | detail_daily_reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detail_daily_reports.
     */
    cursor?: detail_daily_reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_daily_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_daily_reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detail_daily_reports.
     */
    distinct?: Detail_daily_reportScalarFieldEnum | Detail_daily_reportScalarFieldEnum[]
  }

  /**
   * detail_daily_report findFirstOrThrow
   */
  export type detail_daily_reportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_daily_report
     */
    select?: detail_daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_daily_report
     */
    omit?: detail_daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_daily_reportInclude<ExtArgs> | null
    /**
     * Filter, which detail_daily_report to fetch.
     */
    where?: detail_daily_reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_daily_reports to fetch.
     */
    orderBy?: detail_daily_reportOrderByWithRelationInput | detail_daily_reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detail_daily_reports.
     */
    cursor?: detail_daily_reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_daily_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_daily_reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detail_daily_reports.
     */
    distinct?: Detail_daily_reportScalarFieldEnum | Detail_daily_reportScalarFieldEnum[]
  }

  /**
   * detail_daily_report findMany
   */
  export type detail_daily_reportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_daily_report
     */
    select?: detail_daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_daily_report
     */
    omit?: detail_daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_daily_reportInclude<ExtArgs> | null
    /**
     * Filter, which detail_daily_reports to fetch.
     */
    where?: detail_daily_reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_daily_reports to fetch.
     */
    orderBy?: detail_daily_reportOrderByWithRelationInput | detail_daily_reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detail_daily_reports.
     */
    cursor?: detail_daily_reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_daily_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_daily_reports.
     */
    skip?: number
    distinct?: Detail_daily_reportScalarFieldEnum | Detail_daily_reportScalarFieldEnum[]
  }

  /**
   * detail_daily_report create
   */
  export type detail_daily_reportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_daily_report
     */
    select?: detail_daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_daily_report
     */
    omit?: detail_daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_daily_reportInclude<ExtArgs> | null
    /**
     * The data needed to create a detail_daily_report.
     */
    data: XOR<detail_daily_reportCreateInput, detail_daily_reportUncheckedCreateInput>
  }

  /**
   * detail_daily_report createMany
   */
  export type detail_daily_reportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detail_daily_reports.
     */
    data: detail_daily_reportCreateManyInput | detail_daily_reportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detail_daily_report createManyAndReturn
   */
  export type detail_daily_reportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_daily_report
     */
    select?: detail_daily_reportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detail_daily_report
     */
    omit?: detail_daily_reportOmit<ExtArgs> | null
    /**
     * The data used to create many detail_daily_reports.
     */
    data: detail_daily_reportCreateManyInput | detail_daily_reportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_daily_reportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * detail_daily_report update
   */
  export type detail_daily_reportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_daily_report
     */
    select?: detail_daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_daily_report
     */
    omit?: detail_daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_daily_reportInclude<ExtArgs> | null
    /**
     * The data needed to update a detail_daily_report.
     */
    data: XOR<detail_daily_reportUpdateInput, detail_daily_reportUncheckedUpdateInput>
    /**
     * Choose, which detail_daily_report to update.
     */
    where: detail_daily_reportWhereUniqueInput
  }

  /**
   * detail_daily_report updateMany
   */
  export type detail_daily_reportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detail_daily_reports.
     */
    data: XOR<detail_daily_reportUpdateManyMutationInput, detail_daily_reportUncheckedUpdateManyInput>
    /**
     * Filter which detail_daily_reports to update
     */
    where?: detail_daily_reportWhereInput
    /**
     * Limit how many detail_daily_reports to update.
     */
    limit?: number
  }

  /**
   * detail_daily_report updateManyAndReturn
   */
  export type detail_daily_reportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_daily_report
     */
    select?: detail_daily_reportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detail_daily_report
     */
    omit?: detail_daily_reportOmit<ExtArgs> | null
    /**
     * The data used to update detail_daily_reports.
     */
    data: XOR<detail_daily_reportUpdateManyMutationInput, detail_daily_reportUncheckedUpdateManyInput>
    /**
     * Filter which detail_daily_reports to update
     */
    where?: detail_daily_reportWhereInput
    /**
     * Limit how many detail_daily_reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_daily_reportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * detail_daily_report upsert
   */
  export type detail_daily_reportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_daily_report
     */
    select?: detail_daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_daily_report
     */
    omit?: detail_daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_daily_reportInclude<ExtArgs> | null
    /**
     * The filter to search for the detail_daily_report to update in case it exists.
     */
    where: detail_daily_reportWhereUniqueInput
    /**
     * In case the detail_daily_report found by the `where` argument doesn't exist, create a new detail_daily_report with this data.
     */
    create: XOR<detail_daily_reportCreateInput, detail_daily_reportUncheckedCreateInput>
    /**
     * In case the detail_daily_report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detail_daily_reportUpdateInput, detail_daily_reportUncheckedUpdateInput>
  }

  /**
   * detail_daily_report delete
   */
  export type detail_daily_reportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_daily_report
     */
    select?: detail_daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_daily_report
     */
    omit?: detail_daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_daily_reportInclude<ExtArgs> | null
    /**
     * Filter which detail_daily_report to delete.
     */
    where: detail_daily_reportWhereUniqueInput
  }

  /**
   * detail_daily_report deleteMany
   */
  export type detail_daily_reportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detail_daily_reports to delete
     */
    where?: detail_daily_reportWhereInput
    /**
     * Limit how many detail_daily_reports to delete.
     */
    limit?: number
  }

  /**
   * detail_daily_report without action
   */
  export type detail_daily_reportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_daily_report
     */
    select?: detail_daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_daily_report
     */
    omit?: detail_daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_daily_reportInclude<ExtArgs> | null
  }


  /**
   * Model dokumen
   */

  export type AggregateDokumen = {
    _count: DokumenCountAggregateOutputType | null
    _min: DokumenMinAggregateOutputType | null
    _max: DokumenMaxAggregateOutputType | null
  }

  export type DokumenMinAggregateOutputType = {
    id: string | null
    nim: string | null
    jenis_dokumen: $Enums.JenisDokumen | null
    file_path: string | null
    tanggal_upload: Date | null
    status: $Enums.DokumenStatus | null
    komentar: string | null
  }

  export type DokumenMaxAggregateOutputType = {
    id: string | null
    nim: string | null
    jenis_dokumen: $Enums.JenisDokumen | null
    file_path: string | null
    tanggal_upload: Date | null
    status: $Enums.DokumenStatus | null
    komentar: string | null
  }

  export type DokumenCountAggregateOutputType = {
    id: number
    nim: number
    jenis_dokumen: number
    file_path: number
    tanggal_upload: number
    status: number
    komentar: number
    _all: number
  }


  export type DokumenMinAggregateInputType = {
    id?: true
    nim?: true
    jenis_dokumen?: true
    file_path?: true
    tanggal_upload?: true
    status?: true
    komentar?: true
  }

  export type DokumenMaxAggregateInputType = {
    id?: true
    nim?: true
    jenis_dokumen?: true
    file_path?: true
    tanggal_upload?: true
    status?: true
    komentar?: true
  }

  export type DokumenCountAggregateInputType = {
    id?: true
    nim?: true
    jenis_dokumen?: true
    file_path?: true
    tanggal_upload?: true
    status?: true
    komentar?: true
    _all?: true
  }

  export type DokumenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dokumen to aggregate.
     */
    where?: dokumenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dokumen to fetch.
     */
    orderBy?: dokumenOrderByWithRelationInput | dokumenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dokumenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dokumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dokumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dokumen
    **/
    _count?: true | DokumenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DokumenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DokumenMaxAggregateInputType
  }

  export type GetDokumenAggregateType<T extends DokumenAggregateArgs> = {
        [P in keyof T & keyof AggregateDokumen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDokumen[P]>
      : GetScalarType<T[P], AggregateDokumen[P]>
  }




  export type dokumenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dokumenWhereInput
    orderBy?: dokumenOrderByWithAggregationInput | dokumenOrderByWithAggregationInput[]
    by: DokumenScalarFieldEnum[] | DokumenScalarFieldEnum
    having?: dokumenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DokumenCountAggregateInputType | true
    _min?: DokumenMinAggregateInputType
    _max?: DokumenMaxAggregateInputType
  }

  export type DokumenGroupByOutputType = {
    id: string
    nim: string
    jenis_dokumen: $Enums.JenisDokumen
    file_path: string
    tanggal_upload: Date
    status: $Enums.DokumenStatus
    komentar: string | null
    _count: DokumenCountAggregateOutputType | null
    _min: DokumenMinAggregateOutputType | null
    _max: DokumenMaxAggregateOutputType | null
  }

  type GetDokumenGroupByPayload<T extends dokumenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DokumenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DokumenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DokumenGroupByOutputType[P]>
            : GetScalarType<T[P], DokumenGroupByOutputType[P]>
        }
      >
    >


  export type dokumenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    jenis_dokumen?: boolean
    file_path?: boolean
    tanggal_upload?: boolean
    status?: boolean
    komentar?: boolean
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dokumen"]>

  export type dokumenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    jenis_dokumen?: boolean
    file_path?: boolean
    tanggal_upload?: boolean
    status?: boolean
    komentar?: boolean
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dokumen"]>

  export type dokumenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    jenis_dokumen?: boolean
    file_path?: boolean
    tanggal_upload?: boolean
    status?: boolean
    komentar?: boolean
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dokumen"]>

  export type dokumenSelectScalar = {
    id?: boolean
    nim?: boolean
    jenis_dokumen?: boolean
    file_path?: boolean
    tanggal_upload?: boolean
    status?: boolean
    komentar?: boolean
  }

  export type dokumenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nim" | "jenis_dokumen" | "file_path" | "tanggal_upload" | "status" | "komentar", ExtArgs["result"]["dokumen"]>
  export type dokumenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }
  export type dokumenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }
  export type dokumenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }

  export type $dokumenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dokumen"
    objects: {
      mahasiswa: Prisma.$mahasiswaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nim: string
      jenis_dokumen: $Enums.JenisDokumen
      file_path: string
      tanggal_upload: Date
      status: $Enums.DokumenStatus
      komentar: string | null
    }, ExtArgs["result"]["dokumen"]>
    composites: {}
  }

  type dokumenGetPayload<S extends boolean | null | undefined | dokumenDefaultArgs> = $Result.GetResult<Prisma.$dokumenPayload, S>

  type dokumenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dokumenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DokumenCountAggregateInputType | true
    }

  export interface dokumenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dokumen'], meta: { name: 'dokumen' } }
    /**
     * Find zero or one Dokumen that matches the filter.
     * @param {dokumenFindUniqueArgs} args - Arguments to find a Dokumen
     * @example
     * // Get one Dokumen
     * const dokumen = await prisma.dokumen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dokumenFindUniqueArgs>(args: SelectSubset<T, dokumenFindUniqueArgs<ExtArgs>>): Prisma__dokumenClient<$Result.GetResult<Prisma.$dokumenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dokumen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dokumenFindUniqueOrThrowArgs} args - Arguments to find a Dokumen
     * @example
     * // Get one Dokumen
     * const dokumen = await prisma.dokumen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dokumenFindUniqueOrThrowArgs>(args: SelectSubset<T, dokumenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dokumenClient<$Result.GetResult<Prisma.$dokumenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dokumen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dokumenFindFirstArgs} args - Arguments to find a Dokumen
     * @example
     * // Get one Dokumen
     * const dokumen = await prisma.dokumen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dokumenFindFirstArgs>(args?: SelectSubset<T, dokumenFindFirstArgs<ExtArgs>>): Prisma__dokumenClient<$Result.GetResult<Prisma.$dokumenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dokumen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dokumenFindFirstOrThrowArgs} args - Arguments to find a Dokumen
     * @example
     * // Get one Dokumen
     * const dokumen = await prisma.dokumen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dokumenFindFirstOrThrowArgs>(args?: SelectSubset<T, dokumenFindFirstOrThrowArgs<ExtArgs>>): Prisma__dokumenClient<$Result.GetResult<Prisma.$dokumenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dokumen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dokumenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dokumen
     * const dokumen = await prisma.dokumen.findMany()
     * 
     * // Get first 10 Dokumen
     * const dokumen = await prisma.dokumen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dokumenWithIdOnly = await prisma.dokumen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends dokumenFindManyArgs>(args?: SelectSubset<T, dokumenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dokumenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dokumen.
     * @param {dokumenCreateArgs} args - Arguments to create a Dokumen.
     * @example
     * // Create one Dokumen
     * const Dokumen = await prisma.dokumen.create({
     *   data: {
     *     // ... data to create a Dokumen
     *   }
     * })
     * 
     */
    create<T extends dokumenCreateArgs>(args: SelectSubset<T, dokumenCreateArgs<ExtArgs>>): Prisma__dokumenClient<$Result.GetResult<Prisma.$dokumenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dokumen.
     * @param {dokumenCreateManyArgs} args - Arguments to create many Dokumen.
     * @example
     * // Create many Dokumen
     * const dokumen = await prisma.dokumen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dokumenCreateManyArgs>(args?: SelectSubset<T, dokumenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dokumen and returns the data saved in the database.
     * @param {dokumenCreateManyAndReturnArgs} args - Arguments to create many Dokumen.
     * @example
     * // Create many Dokumen
     * const dokumen = await prisma.dokumen.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dokumen and only return the `id`
     * const dokumenWithIdOnly = await prisma.dokumen.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dokumenCreateManyAndReturnArgs>(args?: SelectSubset<T, dokumenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dokumenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dokumen.
     * @param {dokumenDeleteArgs} args - Arguments to delete one Dokumen.
     * @example
     * // Delete one Dokumen
     * const Dokumen = await prisma.dokumen.delete({
     *   where: {
     *     // ... filter to delete one Dokumen
     *   }
     * })
     * 
     */
    delete<T extends dokumenDeleteArgs>(args: SelectSubset<T, dokumenDeleteArgs<ExtArgs>>): Prisma__dokumenClient<$Result.GetResult<Prisma.$dokumenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dokumen.
     * @param {dokumenUpdateArgs} args - Arguments to update one Dokumen.
     * @example
     * // Update one Dokumen
     * const dokumen = await prisma.dokumen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dokumenUpdateArgs>(args: SelectSubset<T, dokumenUpdateArgs<ExtArgs>>): Prisma__dokumenClient<$Result.GetResult<Prisma.$dokumenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dokumen.
     * @param {dokumenDeleteManyArgs} args - Arguments to filter Dokumen to delete.
     * @example
     * // Delete a few Dokumen
     * const { count } = await prisma.dokumen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dokumenDeleteManyArgs>(args?: SelectSubset<T, dokumenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dokumen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dokumenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dokumen
     * const dokumen = await prisma.dokumen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dokumenUpdateManyArgs>(args: SelectSubset<T, dokumenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dokumen and returns the data updated in the database.
     * @param {dokumenUpdateManyAndReturnArgs} args - Arguments to update many Dokumen.
     * @example
     * // Update many Dokumen
     * const dokumen = await prisma.dokumen.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dokumen and only return the `id`
     * const dokumenWithIdOnly = await prisma.dokumen.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends dokumenUpdateManyAndReturnArgs>(args: SelectSubset<T, dokumenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dokumenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dokumen.
     * @param {dokumenUpsertArgs} args - Arguments to update or create a Dokumen.
     * @example
     * // Update or create a Dokumen
     * const dokumen = await prisma.dokumen.upsert({
     *   create: {
     *     // ... data to create a Dokumen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dokumen we want to update
     *   }
     * })
     */
    upsert<T extends dokumenUpsertArgs>(args: SelectSubset<T, dokumenUpsertArgs<ExtArgs>>): Prisma__dokumenClient<$Result.GetResult<Prisma.$dokumenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dokumen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dokumenCountArgs} args - Arguments to filter Dokumen to count.
     * @example
     * // Count the number of Dokumen
     * const count = await prisma.dokumen.count({
     *   where: {
     *     // ... the filter for the Dokumen we want to count
     *   }
     * })
    **/
    count<T extends dokumenCountArgs>(
      args?: Subset<T, dokumenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DokumenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dokumen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DokumenAggregateArgs>(args: Subset<T, DokumenAggregateArgs>): Prisma.PrismaPromise<GetDokumenAggregateType<T>>

    /**
     * Group by Dokumen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dokumenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends dokumenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dokumenGroupByArgs['orderBy'] }
        : { orderBy?: dokumenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, dokumenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDokumenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dokumen model
   */
  readonly fields: dokumenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dokumen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dokumenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mahasiswa<T extends mahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswaDefaultArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the dokumen model
   */
  interface dokumenFieldRefs {
    readonly id: FieldRef<"dokumen", 'String'>
    readonly nim: FieldRef<"dokumen", 'String'>
    readonly jenis_dokumen: FieldRef<"dokumen", 'JenisDokumen'>
    readonly file_path: FieldRef<"dokumen", 'String'>
    readonly tanggal_upload: FieldRef<"dokumen", 'DateTime'>
    readonly status: FieldRef<"dokumen", 'DokumenStatus'>
    readonly komentar: FieldRef<"dokumen", 'String'>
  }
    

  // Custom InputTypes
  /**
   * dokumen findUnique
   */
  export type dokumenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dokumen
     */
    select?: dokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dokumen
     */
    omit?: dokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dokumenInclude<ExtArgs> | null
    /**
     * Filter, which dokumen to fetch.
     */
    where: dokumenWhereUniqueInput
  }

  /**
   * dokumen findUniqueOrThrow
   */
  export type dokumenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dokumen
     */
    select?: dokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dokumen
     */
    omit?: dokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dokumenInclude<ExtArgs> | null
    /**
     * Filter, which dokumen to fetch.
     */
    where: dokumenWhereUniqueInput
  }

  /**
   * dokumen findFirst
   */
  export type dokumenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dokumen
     */
    select?: dokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dokumen
     */
    omit?: dokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dokumenInclude<ExtArgs> | null
    /**
     * Filter, which dokumen to fetch.
     */
    where?: dokumenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dokumen to fetch.
     */
    orderBy?: dokumenOrderByWithRelationInput | dokumenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dokumen.
     */
    cursor?: dokumenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dokumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dokumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dokumen.
     */
    distinct?: DokumenScalarFieldEnum | DokumenScalarFieldEnum[]
  }

  /**
   * dokumen findFirstOrThrow
   */
  export type dokumenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dokumen
     */
    select?: dokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dokumen
     */
    omit?: dokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dokumenInclude<ExtArgs> | null
    /**
     * Filter, which dokumen to fetch.
     */
    where?: dokumenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dokumen to fetch.
     */
    orderBy?: dokumenOrderByWithRelationInput | dokumenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dokumen.
     */
    cursor?: dokumenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dokumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dokumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dokumen.
     */
    distinct?: DokumenScalarFieldEnum | DokumenScalarFieldEnum[]
  }

  /**
   * dokumen findMany
   */
  export type dokumenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dokumen
     */
    select?: dokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dokumen
     */
    omit?: dokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dokumenInclude<ExtArgs> | null
    /**
     * Filter, which dokumen to fetch.
     */
    where?: dokumenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dokumen to fetch.
     */
    orderBy?: dokumenOrderByWithRelationInput | dokumenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dokumen.
     */
    cursor?: dokumenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dokumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dokumen.
     */
    skip?: number
    distinct?: DokumenScalarFieldEnum | DokumenScalarFieldEnum[]
  }

  /**
   * dokumen create
   */
  export type dokumenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dokumen
     */
    select?: dokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dokumen
     */
    omit?: dokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dokumenInclude<ExtArgs> | null
    /**
     * The data needed to create a dokumen.
     */
    data: XOR<dokumenCreateInput, dokumenUncheckedCreateInput>
  }

  /**
   * dokumen createMany
   */
  export type dokumenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dokumen.
     */
    data: dokumenCreateManyInput | dokumenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dokumen createManyAndReturn
   */
  export type dokumenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dokumen
     */
    select?: dokumenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dokumen
     */
    omit?: dokumenOmit<ExtArgs> | null
    /**
     * The data used to create many dokumen.
     */
    data: dokumenCreateManyInput | dokumenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dokumenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * dokumen update
   */
  export type dokumenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dokumen
     */
    select?: dokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dokumen
     */
    omit?: dokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dokumenInclude<ExtArgs> | null
    /**
     * The data needed to update a dokumen.
     */
    data: XOR<dokumenUpdateInput, dokumenUncheckedUpdateInput>
    /**
     * Choose, which dokumen to update.
     */
    where: dokumenWhereUniqueInput
  }

  /**
   * dokumen updateMany
   */
  export type dokumenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dokumen.
     */
    data: XOR<dokumenUpdateManyMutationInput, dokumenUncheckedUpdateManyInput>
    /**
     * Filter which dokumen to update
     */
    where?: dokumenWhereInput
    /**
     * Limit how many dokumen to update.
     */
    limit?: number
  }

  /**
   * dokumen updateManyAndReturn
   */
  export type dokumenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dokumen
     */
    select?: dokumenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dokumen
     */
    omit?: dokumenOmit<ExtArgs> | null
    /**
     * The data used to update dokumen.
     */
    data: XOR<dokumenUpdateManyMutationInput, dokumenUncheckedUpdateManyInput>
    /**
     * Filter which dokumen to update
     */
    where?: dokumenWhereInput
    /**
     * Limit how many dokumen to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dokumenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * dokumen upsert
   */
  export type dokumenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dokumen
     */
    select?: dokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dokumen
     */
    omit?: dokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dokumenInclude<ExtArgs> | null
    /**
     * The filter to search for the dokumen to update in case it exists.
     */
    where: dokumenWhereUniqueInput
    /**
     * In case the dokumen found by the `where` argument doesn't exist, create a new dokumen with this data.
     */
    create: XOR<dokumenCreateInput, dokumenUncheckedCreateInput>
    /**
     * In case the dokumen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dokumenUpdateInput, dokumenUncheckedUpdateInput>
  }

  /**
   * dokumen delete
   */
  export type dokumenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dokumen
     */
    select?: dokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dokumen
     */
    omit?: dokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dokumenInclude<ExtArgs> | null
    /**
     * Filter which dokumen to delete.
     */
    where: dokumenWhereUniqueInput
  }

  /**
   * dokumen deleteMany
   */
  export type dokumenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dokumen to delete
     */
    where?: dokumenWhereInput
    /**
     * Limit how many dokumen to delete.
     */
    limit?: number
  }

  /**
   * dokumen without action
   */
  export type dokumenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dokumen
     */
    select?: dokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dokumen
     */
    omit?: dokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dokumenInclude<ExtArgs> | null
  }


  /**
   * Model dosen
   */

  export type AggregateDosen = {
    _count: DosenCountAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  export type DosenMinAggregateOutputType = {
    nip: string | null
    nama: string | null
    email: string | null
    no_hp: string | null
    id_telegram: string | null
  }

  export type DosenMaxAggregateOutputType = {
    nip: string | null
    nama: string | null
    email: string | null
    no_hp: string | null
    id_telegram: string | null
  }

  export type DosenCountAggregateOutputType = {
    nip: number
    nama: number
    email: number
    no_hp: number
    id_telegram: number
    _all: number
  }


  export type DosenMinAggregateInputType = {
    nip?: true
    nama?: true
    email?: true
    no_hp?: true
    id_telegram?: true
  }

  export type DosenMaxAggregateInputType = {
    nip?: true
    nama?: true
    email?: true
    no_hp?: true
    id_telegram?: true
  }

  export type DosenCountAggregateInputType = {
    nip?: true
    nama?: true
    email?: true
    no_hp?: true
    id_telegram?: true
    _all?: true
  }

  export type DosenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dosen to aggregate.
     */
    where?: dosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dosens to fetch.
     */
    orderBy?: dosenOrderByWithRelationInput | dosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dosens
    **/
    _count?: true | DosenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DosenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DosenMaxAggregateInputType
  }

  export type GetDosenAggregateType<T extends DosenAggregateArgs> = {
        [P in keyof T & keyof AggregateDosen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDosen[P]>
      : GetScalarType<T[P], AggregateDosen[P]>
  }




  export type dosenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dosenWhereInput
    orderBy?: dosenOrderByWithAggregationInput | dosenOrderByWithAggregationInput[]
    by: DosenScalarFieldEnum[] | DosenScalarFieldEnum
    having?: dosenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DosenCountAggregateInputType | true
    _min?: DosenMinAggregateInputType
    _max?: DosenMaxAggregateInputType
  }

  export type DosenGroupByOutputType = {
    nip: string
    nama: string
    email: string
    no_hp: string
    id_telegram: string
    _count: DosenCountAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  type GetDosenGroupByPayload<T extends dosenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DosenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DosenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DosenGroupByOutputType[P]>
            : GetScalarType<T[P], DosenGroupByOutputType[P]>
        }
      >
    >


  export type dosenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nip?: boolean
    nama?: boolean
    email?: boolean
    no_hp?: boolean
    id_telegram?: boolean
    bimbingan?: boolean | dosen$bimbinganArgs<ExtArgs>
    jadwal?: boolean | dosen$jadwalArgs<ExtArgs>
    nilai_penguji?: boolean | dosen$nilai_pengujiArgs<ExtArgs>
    nilai_pembimbing?: boolean | dosen$nilai_pembimbingArgs<ExtArgs>
    pendaftaran_kp?: boolean | dosen$pendaftaran_kpArgs<ExtArgs>
    _count?: boolean | DosenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dosen"]>

  export type dosenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nip?: boolean
    nama?: boolean
    email?: boolean
    no_hp?: boolean
    id_telegram?: boolean
  }, ExtArgs["result"]["dosen"]>

  export type dosenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nip?: boolean
    nama?: boolean
    email?: boolean
    no_hp?: boolean
    id_telegram?: boolean
  }, ExtArgs["result"]["dosen"]>

  export type dosenSelectScalar = {
    nip?: boolean
    nama?: boolean
    email?: boolean
    no_hp?: boolean
    id_telegram?: boolean
  }

  export type dosenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nip" | "nama" | "email" | "no_hp" | "id_telegram", ExtArgs["result"]["dosen"]>
  export type dosenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bimbingan?: boolean | dosen$bimbinganArgs<ExtArgs>
    jadwal?: boolean | dosen$jadwalArgs<ExtArgs>
    nilai_penguji?: boolean | dosen$nilai_pengujiArgs<ExtArgs>
    nilai_pembimbing?: boolean | dosen$nilai_pembimbingArgs<ExtArgs>
    pendaftaran_kp?: boolean | dosen$pendaftaran_kpArgs<ExtArgs>
    _count?: boolean | DosenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type dosenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type dosenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $dosenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dosen"
    objects: {
      bimbingan: Prisma.$bimbinganPayload<ExtArgs>[]
      jadwal: Prisma.$jadwalPayload<ExtArgs>[]
      nilai_penguji: Prisma.$nilaiPayload<ExtArgs>[]
      nilai_pembimbing: Prisma.$nilaiPayload<ExtArgs>[]
      pendaftaran_kp: Prisma.$pendaftaran_kpPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nip: string
      nama: string
      email: string
      no_hp: string
      id_telegram: string
    }, ExtArgs["result"]["dosen"]>
    composites: {}
  }

  type dosenGetPayload<S extends boolean | null | undefined | dosenDefaultArgs> = $Result.GetResult<Prisma.$dosenPayload, S>

  type dosenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dosenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DosenCountAggregateInputType | true
    }

  export interface dosenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dosen'], meta: { name: 'dosen' } }
    /**
     * Find zero or one Dosen that matches the filter.
     * @param {dosenFindUniqueArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dosenFindUniqueArgs>(args: SelectSubset<T, dosenFindUniqueArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dosen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dosenFindUniqueOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dosenFindUniqueOrThrowArgs>(args: SelectSubset<T, dosenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dosen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenFindFirstArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dosenFindFirstArgs>(args?: SelectSubset<T, dosenFindFirstArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dosen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenFindFirstOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dosenFindFirstOrThrowArgs>(args?: SelectSubset<T, dosenFindFirstOrThrowArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dosens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dosens
     * const dosens = await prisma.dosen.findMany()
     * 
     * // Get first 10 Dosens
     * const dosens = await prisma.dosen.findMany({ take: 10 })
     * 
     * // Only select the `nip`
     * const dosenWithNipOnly = await prisma.dosen.findMany({ select: { nip: true } })
     * 
     */
    findMany<T extends dosenFindManyArgs>(args?: SelectSubset<T, dosenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dosen.
     * @param {dosenCreateArgs} args - Arguments to create a Dosen.
     * @example
     * // Create one Dosen
     * const Dosen = await prisma.dosen.create({
     *   data: {
     *     // ... data to create a Dosen
     *   }
     * })
     * 
     */
    create<T extends dosenCreateArgs>(args: SelectSubset<T, dosenCreateArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dosens.
     * @param {dosenCreateManyArgs} args - Arguments to create many Dosens.
     * @example
     * // Create many Dosens
     * const dosen = await prisma.dosen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dosenCreateManyArgs>(args?: SelectSubset<T, dosenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dosens and returns the data saved in the database.
     * @param {dosenCreateManyAndReturnArgs} args - Arguments to create many Dosens.
     * @example
     * // Create many Dosens
     * const dosen = await prisma.dosen.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dosens and only return the `nip`
     * const dosenWithNipOnly = await prisma.dosen.createManyAndReturn({
     *   select: { nip: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dosenCreateManyAndReturnArgs>(args?: SelectSubset<T, dosenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dosen.
     * @param {dosenDeleteArgs} args - Arguments to delete one Dosen.
     * @example
     * // Delete one Dosen
     * const Dosen = await prisma.dosen.delete({
     *   where: {
     *     // ... filter to delete one Dosen
     *   }
     * })
     * 
     */
    delete<T extends dosenDeleteArgs>(args: SelectSubset<T, dosenDeleteArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dosen.
     * @param {dosenUpdateArgs} args - Arguments to update one Dosen.
     * @example
     * // Update one Dosen
     * const dosen = await prisma.dosen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dosenUpdateArgs>(args: SelectSubset<T, dosenUpdateArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dosens.
     * @param {dosenDeleteManyArgs} args - Arguments to filter Dosens to delete.
     * @example
     * // Delete a few Dosens
     * const { count } = await prisma.dosen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dosenDeleteManyArgs>(args?: SelectSubset<T, dosenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dosens
     * const dosen = await prisma.dosen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dosenUpdateManyArgs>(args: SelectSubset<T, dosenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dosens and returns the data updated in the database.
     * @param {dosenUpdateManyAndReturnArgs} args - Arguments to update many Dosens.
     * @example
     * // Update many Dosens
     * const dosen = await prisma.dosen.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dosens and only return the `nip`
     * const dosenWithNipOnly = await prisma.dosen.updateManyAndReturn({
     *   select: { nip: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends dosenUpdateManyAndReturnArgs>(args: SelectSubset<T, dosenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dosen.
     * @param {dosenUpsertArgs} args - Arguments to update or create a Dosen.
     * @example
     * // Update or create a Dosen
     * const dosen = await prisma.dosen.upsert({
     *   create: {
     *     // ... data to create a Dosen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dosen we want to update
     *   }
     * })
     */
    upsert<T extends dosenUpsertArgs>(args: SelectSubset<T, dosenUpsertArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenCountArgs} args - Arguments to filter Dosens to count.
     * @example
     * // Count the number of Dosens
     * const count = await prisma.dosen.count({
     *   where: {
     *     // ... the filter for the Dosens we want to count
     *   }
     * })
    **/
    count<T extends dosenCountArgs>(
      args?: Subset<T, dosenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DosenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DosenAggregateArgs>(args: Subset<T, DosenAggregateArgs>): Prisma.PrismaPromise<GetDosenAggregateType<T>>

    /**
     * Group by Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends dosenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dosenGroupByArgs['orderBy'] }
        : { orderBy?: dosenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, dosenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDosenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dosen model
   */
  readonly fields: dosenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dosen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dosenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bimbingan<T extends dosen$bimbinganArgs<ExtArgs> = {}>(args?: Subset<T, dosen$bimbinganArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bimbinganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jadwal<T extends dosen$jadwalArgs<ExtArgs> = {}>(args?: Subset<T, dosen$jadwalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nilai_penguji<T extends dosen$nilai_pengujiArgs<ExtArgs> = {}>(args?: Subset<T, dosen$nilai_pengujiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nilaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nilai_pembimbing<T extends dosen$nilai_pembimbingArgs<ExtArgs> = {}>(args?: Subset<T, dosen$nilai_pembimbingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nilaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pendaftaran_kp<T extends dosen$pendaftaran_kpArgs<ExtArgs> = {}>(args?: Subset<T, dosen$pendaftaran_kpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendaftaran_kpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the dosen model
   */
  interface dosenFieldRefs {
    readonly nip: FieldRef<"dosen", 'String'>
    readonly nama: FieldRef<"dosen", 'String'>
    readonly email: FieldRef<"dosen", 'String'>
    readonly no_hp: FieldRef<"dosen", 'String'>
    readonly id_telegram: FieldRef<"dosen", 'String'>
  }
    

  // Custom InputTypes
  /**
   * dosen findUnique
   */
  export type dosenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter, which dosen to fetch.
     */
    where: dosenWhereUniqueInput
  }

  /**
   * dosen findUniqueOrThrow
   */
  export type dosenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter, which dosen to fetch.
     */
    where: dosenWhereUniqueInput
  }

  /**
   * dosen findFirst
   */
  export type dosenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter, which dosen to fetch.
     */
    where?: dosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dosens to fetch.
     */
    orderBy?: dosenOrderByWithRelationInput | dosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dosens.
     */
    cursor?: dosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dosens.
     */
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * dosen findFirstOrThrow
   */
  export type dosenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter, which dosen to fetch.
     */
    where?: dosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dosens to fetch.
     */
    orderBy?: dosenOrderByWithRelationInput | dosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dosens.
     */
    cursor?: dosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dosens.
     */
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * dosen findMany
   */
  export type dosenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter, which dosens to fetch.
     */
    where?: dosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dosens to fetch.
     */
    orderBy?: dosenOrderByWithRelationInput | dosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dosens.
     */
    cursor?: dosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dosens.
     */
    skip?: number
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * dosen create
   */
  export type dosenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * The data needed to create a dosen.
     */
    data: XOR<dosenCreateInput, dosenUncheckedCreateInput>
  }

  /**
   * dosen createMany
   */
  export type dosenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dosens.
     */
    data: dosenCreateManyInput | dosenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dosen createManyAndReturn
   */
  export type dosenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * The data used to create many dosens.
     */
    data: dosenCreateManyInput | dosenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dosen update
   */
  export type dosenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * The data needed to update a dosen.
     */
    data: XOR<dosenUpdateInput, dosenUncheckedUpdateInput>
    /**
     * Choose, which dosen to update.
     */
    where: dosenWhereUniqueInput
  }

  /**
   * dosen updateMany
   */
  export type dosenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dosens.
     */
    data: XOR<dosenUpdateManyMutationInput, dosenUncheckedUpdateManyInput>
    /**
     * Filter which dosens to update
     */
    where?: dosenWhereInput
    /**
     * Limit how many dosens to update.
     */
    limit?: number
  }

  /**
   * dosen updateManyAndReturn
   */
  export type dosenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * The data used to update dosens.
     */
    data: XOR<dosenUpdateManyMutationInput, dosenUncheckedUpdateManyInput>
    /**
     * Filter which dosens to update
     */
    where?: dosenWhereInput
    /**
     * Limit how many dosens to update.
     */
    limit?: number
  }

  /**
   * dosen upsert
   */
  export type dosenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * The filter to search for the dosen to update in case it exists.
     */
    where: dosenWhereUniqueInput
    /**
     * In case the dosen found by the `where` argument doesn't exist, create a new dosen with this data.
     */
    create: XOR<dosenCreateInput, dosenUncheckedCreateInput>
    /**
     * In case the dosen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dosenUpdateInput, dosenUncheckedUpdateInput>
  }

  /**
   * dosen delete
   */
  export type dosenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter which dosen to delete.
     */
    where: dosenWhereUniqueInput
  }

  /**
   * dosen deleteMany
   */
  export type dosenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dosens to delete
     */
    where?: dosenWhereInput
    /**
     * Limit how many dosens to delete.
     */
    limit?: number
  }

  /**
   * dosen.bimbingan
   */
  export type dosen$bimbinganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bimbingan
     */
    select?: bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bimbingan
     */
    omit?: bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bimbinganInclude<ExtArgs> | null
    where?: bimbinganWhereInput
    orderBy?: bimbinganOrderByWithRelationInput | bimbinganOrderByWithRelationInput[]
    cursor?: bimbinganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BimbinganScalarFieldEnum | BimbinganScalarFieldEnum[]
  }

  /**
   * dosen.jadwal
   */
  export type dosen$jadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    where?: jadwalWhereInput
    orderBy?: jadwalOrderByWithRelationInput | jadwalOrderByWithRelationInput[]
    cursor?: jadwalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * dosen.nilai_penguji
   */
  export type dosen$nilai_pengujiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai
     */
    select?: nilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai
     */
    omit?: nilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilaiInclude<ExtArgs> | null
    where?: nilaiWhereInput
    orderBy?: nilaiOrderByWithRelationInput | nilaiOrderByWithRelationInput[]
    cursor?: nilaiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NilaiScalarFieldEnum | NilaiScalarFieldEnum[]
  }

  /**
   * dosen.nilai_pembimbing
   */
  export type dosen$nilai_pembimbingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai
     */
    select?: nilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai
     */
    omit?: nilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilaiInclude<ExtArgs> | null
    where?: nilaiWhereInput
    orderBy?: nilaiOrderByWithRelationInput | nilaiOrderByWithRelationInput[]
    cursor?: nilaiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NilaiScalarFieldEnum | NilaiScalarFieldEnum[]
  }

  /**
   * dosen.pendaftaran_kp
   */
  export type dosen$pendaftaran_kpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran_kp
     */
    select?: pendaftaran_kpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran_kp
     */
    omit?: pendaftaran_kpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaran_kpInclude<ExtArgs> | null
    where?: pendaftaran_kpWhereInput
    orderBy?: pendaftaran_kpOrderByWithRelationInput | pendaftaran_kpOrderByWithRelationInput[]
    cursor?: pendaftaran_kpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pendaftaran_kpScalarFieldEnum | Pendaftaran_kpScalarFieldEnum[]
  }

  /**
   * dosen without action
   */
  export type dosenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
  }


  /**
   * Model instansi
   */

  export type AggregateInstansi = {
    _count: InstansiCountAggregateOutputType | null
    _avg: InstansiAvgAggregateOutputType | null
    _sum: InstansiSumAggregateOutputType | null
    _min: InstansiMinAggregateOutputType | null
    _max: InstansiMaxAggregateOutputType | null
  }

  export type InstansiAvgAggregateOutputType = {
    id: number | null
  }

  export type InstansiSumAggregateOutputType = {
    id: number | null
  }

  export type InstansiMinAggregateOutputType = {
    id: number | null
    nama: string | null
    alamat: string | null
    jenis: $Enums.JenisInstansi | null
    profil_singkat: string | null
    status: $Enums.StatusInstansi | null
  }

  export type InstansiMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    alamat: string | null
    jenis: $Enums.JenisInstansi | null
    profil_singkat: string | null
    status: $Enums.StatusInstansi | null
  }

  export type InstansiCountAggregateOutputType = {
    id: number
    nama: number
    alamat: number
    jenis: number
    profil_singkat: number
    status: number
    _all: number
  }


  export type InstansiAvgAggregateInputType = {
    id?: true
  }

  export type InstansiSumAggregateInputType = {
    id?: true
  }

  export type InstansiMinAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    jenis?: true
    profil_singkat?: true
    status?: true
  }

  export type InstansiMaxAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    jenis?: true
    profil_singkat?: true
    status?: true
  }

  export type InstansiCountAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    jenis?: true
    profil_singkat?: true
    status?: true
    _all?: true
  }

  export type InstansiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which instansi to aggregate.
     */
    where?: instansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instansis to fetch.
     */
    orderBy?: instansiOrderByWithRelationInput | instansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: instansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned instansis
    **/
    _count?: true | InstansiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstansiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstansiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstansiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstansiMaxAggregateInputType
  }

  export type GetInstansiAggregateType<T extends InstansiAggregateArgs> = {
        [P in keyof T & keyof AggregateInstansi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstansi[P]>
      : GetScalarType<T[P], AggregateInstansi[P]>
  }




  export type instansiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: instansiWhereInput
    orderBy?: instansiOrderByWithAggregationInput | instansiOrderByWithAggregationInput[]
    by: InstansiScalarFieldEnum[] | InstansiScalarFieldEnum
    having?: instansiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstansiCountAggregateInputType | true
    _avg?: InstansiAvgAggregateInputType
    _sum?: InstansiSumAggregateInputType
    _min?: InstansiMinAggregateInputType
    _max?: InstansiMaxAggregateInputType
  }

  export type InstansiGroupByOutputType = {
    id: number
    nama: string
    alamat: string
    jenis: $Enums.JenisInstansi
    profil_singkat: string
    status: $Enums.StatusInstansi
    _count: InstansiCountAggregateOutputType | null
    _avg: InstansiAvgAggregateOutputType | null
    _sum: InstansiSumAggregateOutputType | null
    _min: InstansiMinAggregateOutputType | null
    _max: InstansiMaxAggregateOutputType | null
  }

  type GetInstansiGroupByPayload<T extends instansiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstansiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstansiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstansiGroupByOutputType[P]>
            : GetScalarType<T[P], InstansiGroupByOutputType[P]>
        }
      >
    >


  export type instansiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    alamat?: boolean
    jenis?: boolean
    profil_singkat?: boolean
    status?: boolean
    pembimbing_instansi?: boolean | instansi$pembimbing_instansiArgs<ExtArgs>
    _count?: boolean | InstansiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instansi"]>

  export type instansiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    alamat?: boolean
    jenis?: boolean
    profil_singkat?: boolean
    status?: boolean
  }, ExtArgs["result"]["instansi"]>

  export type instansiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    alamat?: boolean
    jenis?: boolean
    profil_singkat?: boolean
    status?: boolean
  }, ExtArgs["result"]["instansi"]>

  export type instansiSelectScalar = {
    id?: boolean
    nama?: boolean
    alamat?: boolean
    jenis?: boolean
    profil_singkat?: boolean
    status?: boolean
  }

  export type instansiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "alamat" | "jenis" | "profil_singkat" | "status", ExtArgs["result"]["instansi"]>
  export type instansiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembimbing_instansi?: boolean | instansi$pembimbing_instansiArgs<ExtArgs>
    _count?: boolean | InstansiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type instansiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type instansiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $instansiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "instansi"
    objects: {
      pembimbing_instansi: Prisma.$pembimbing_instansiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      alamat: string
      jenis: $Enums.JenisInstansi
      profil_singkat: string
      status: $Enums.StatusInstansi
    }, ExtArgs["result"]["instansi"]>
    composites: {}
  }

  type instansiGetPayload<S extends boolean | null | undefined | instansiDefaultArgs> = $Result.GetResult<Prisma.$instansiPayload, S>

  type instansiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<instansiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstansiCountAggregateInputType | true
    }

  export interface instansiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['instansi'], meta: { name: 'instansi' } }
    /**
     * Find zero or one Instansi that matches the filter.
     * @param {instansiFindUniqueArgs} args - Arguments to find a Instansi
     * @example
     * // Get one Instansi
     * const instansi = await prisma.instansi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends instansiFindUniqueArgs>(args: SelectSubset<T, instansiFindUniqueArgs<ExtArgs>>): Prisma__instansiClient<$Result.GetResult<Prisma.$instansiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instansi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {instansiFindUniqueOrThrowArgs} args - Arguments to find a Instansi
     * @example
     * // Get one Instansi
     * const instansi = await prisma.instansi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends instansiFindUniqueOrThrowArgs>(args: SelectSubset<T, instansiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__instansiClient<$Result.GetResult<Prisma.$instansiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instansi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instansiFindFirstArgs} args - Arguments to find a Instansi
     * @example
     * // Get one Instansi
     * const instansi = await prisma.instansi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends instansiFindFirstArgs>(args?: SelectSubset<T, instansiFindFirstArgs<ExtArgs>>): Prisma__instansiClient<$Result.GetResult<Prisma.$instansiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instansi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instansiFindFirstOrThrowArgs} args - Arguments to find a Instansi
     * @example
     * // Get one Instansi
     * const instansi = await prisma.instansi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends instansiFindFirstOrThrowArgs>(args?: SelectSubset<T, instansiFindFirstOrThrowArgs<ExtArgs>>): Prisma__instansiClient<$Result.GetResult<Prisma.$instansiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instansis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instansiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instansis
     * const instansis = await prisma.instansi.findMany()
     * 
     * // Get first 10 Instansis
     * const instansis = await prisma.instansi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instansiWithIdOnly = await prisma.instansi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends instansiFindManyArgs>(args?: SelectSubset<T, instansiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$instansiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instansi.
     * @param {instansiCreateArgs} args - Arguments to create a Instansi.
     * @example
     * // Create one Instansi
     * const Instansi = await prisma.instansi.create({
     *   data: {
     *     // ... data to create a Instansi
     *   }
     * })
     * 
     */
    create<T extends instansiCreateArgs>(args: SelectSubset<T, instansiCreateArgs<ExtArgs>>): Prisma__instansiClient<$Result.GetResult<Prisma.$instansiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instansis.
     * @param {instansiCreateManyArgs} args - Arguments to create many Instansis.
     * @example
     * // Create many Instansis
     * const instansi = await prisma.instansi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends instansiCreateManyArgs>(args?: SelectSubset<T, instansiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instansis and returns the data saved in the database.
     * @param {instansiCreateManyAndReturnArgs} args - Arguments to create many Instansis.
     * @example
     * // Create many Instansis
     * const instansi = await prisma.instansi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instansis and only return the `id`
     * const instansiWithIdOnly = await prisma.instansi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends instansiCreateManyAndReturnArgs>(args?: SelectSubset<T, instansiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$instansiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instansi.
     * @param {instansiDeleteArgs} args - Arguments to delete one Instansi.
     * @example
     * // Delete one Instansi
     * const Instansi = await prisma.instansi.delete({
     *   where: {
     *     // ... filter to delete one Instansi
     *   }
     * })
     * 
     */
    delete<T extends instansiDeleteArgs>(args: SelectSubset<T, instansiDeleteArgs<ExtArgs>>): Prisma__instansiClient<$Result.GetResult<Prisma.$instansiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instansi.
     * @param {instansiUpdateArgs} args - Arguments to update one Instansi.
     * @example
     * // Update one Instansi
     * const instansi = await prisma.instansi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends instansiUpdateArgs>(args: SelectSubset<T, instansiUpdateArgs<ExtArgs>>): Prisma__instansiClient<$Result.GetResult<Prisma.$instansiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instansis.
     * @param {instansiDeleteManyArgs} args - Arguments to filter Instansis to delete.
     * @example
     * // Delete a few Instansis
     * const { count } = await prisma.instansi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends instansiDeleteManyArgs>(args?: SelectSubset<T, instansiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instansis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instansiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instansis
     * const instansi = await prisma.instansi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends instansiUpdateManyArgs>(args: SelectSubset<T, instansiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instansis and returns the data updated in the database.
     * @param {instansiUpdateManyAndReturnArgs} args - Arguments to update many Instansis.
     * @example
     * // Update many Instansis
     * const instansi = await prisma.instansi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instansis and only return the `id`
     * const instansiWithIdOnly = await prisma.instansi.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends instansiUpdateManyAndReturnArgs>(args: SelectSubset<T, instansiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$instansiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instansi.
     * @param {instansiUpsertArgs} args - Arguments to update or create a Instansi.
     * @example
     * // Update or create a Instansi
     * const instansi = await prisma.instansi.upsert({
     *   create: {
     *     // ... data to create a Instansi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instansi we want to update
     *   }
     * })
     */
    upsert<T extends instansiUpsertArgs>(args: SelectSubset<T, instansiUpsertArgs<ExtArgs>>): Prisma__instansiClient<$Result.GetResult<Prisma.$instansiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instansis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instansiCountArgs} args - Arguments to filter Instansis to count.
     * @example
     * // Count the number of Instansis
     * const count = await prisma.instansi.count({
     *   where: {
     *     // ... the filter for the Instansis we want to count
     *   }
     * })
    **/
    count<T extends instansiCountArgs>(
      args?: Subset<T, instansiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstansiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instansi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstansiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstansiAggregateArgs>(args: Subset<T, InstansiAggregateArgs>): Prisma.PrismaPromise<GetInstansiAggregateType<T>>

    /**
     * Group by Instansi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instansiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends instansiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: instansiGroupByArgs['orderBy'] }
        : { orderBy?: instansiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, instansiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstansiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the instansi model
   */
  readonly fields: instansiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for instansi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__instansiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pembimbing_instansi<T extends instansi$pembimbing_instansiArgs<ExtArgs> = {}>(args?: Subset<T, instansi$pembimbing_instansiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pembimbing_instansiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the instansi model
   */
  interface instansiFieldRefs {
    readonly id: FieldRef<"instansi", 'Int'>
    readonly nama: FieldRef<"instansi", 'String'>
    readonly alamat: FieldRef<"instansi", 'String'>
    readonly jenis: FieldRef<"instansi", 'JenisInstansi'>
    readonly profil_singkat: FieldRef<"instansi", 'String'>
    readonly status: FieldRef<"instansi", 'StatusInstansi'>
  }
    

  // Custom InputTypes
  /**
   * instansi findUnique
   */
  export type instansiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instansi
     */
    select?: instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instansi
     */
    omit?: instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instansiInclude<ExtArgs> | null
    /**
     * Filter, which instansi to fetch.
     */
    where: instansiWhereUniqueInput
  }

  /**
   * instansi findUniqueOrThrow
   */
  export type instansiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instansi
     */
    select?: instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instansi
     */
    omit?: instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instansiInclude<ExtArgs> | null
    /**
     * Filter, which instansi to fetch.
     */
    where: instansiWhereUniqueInput
  }

  /**
   * instansi findFirst
   */
  export type instansiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instansi
     */
    select?: instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instansi
     */
    omit?: instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instansiInclude<ExtArgs> | null
    /**
     * Filter, which instansi to fetch.
     */
    where?: instansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instansis to fetch.
     */
    orderBy?: instansiOrderByWithRelationInput | instansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for instansis.
     */
    cursor?: instansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of instansis.
     */
    distinct?: InstansiScalarFieldEnum | InstansiScalarFieldEnum[]
  }

  /**
   * instansi findFirstOrThrow
   */
  export type instansiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instansi
     */
    select?: instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instansi
     */
    omit?: instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instansiInclude<ExtArgs> | null
    /**
     * Filter, which instansi to fetch.
     */
    where?: instansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instansis to fetch.
     */
    orderBy?: instansiOrderByWithRelationInput | instansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for instansis.
     */
    cursor?: instansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of instansis.
     */
    distinct?: InstansiScalarFieldEnum | InstansiScalarFieldEnum[]
  }

  /**
   * instansi findMany
   */
  export type instansiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instansi
     */
    select?: instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instansi
     */
    omit?: instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instansiInclude<ExtArgs> | null
    /**
     * Filter, which instansis to fetch.
     */
    where?: instansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instansis to fetch.
     */
    orderBy?: instansiOrderByWithRelationInput | instansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing instansis.
     */
    cursor?: instansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instansis.
     */
    skip?: number
    distinct?: InstansiScalarFieldEnum | InstansiScalarFieldEnum[]
  }

  /**
   * instansi create
   */
  export type instansiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instansi
     */
    select?: instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instansi
     */
    omit?: instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instansiInclude<ExtArgs> | null
    /**
     * The data needed to create a instansi.
     */
    data: XOR<instansiCreateInput, instansiUncheckedCreateInput>
  }

  /**
   * instansi createMany
   */
  export type instansiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many instansis.
     */
    data: instansiCreateManyInput | instansiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * instansi createManyAndReturn
   */
  export type instansiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instansi
     */
    select?: instansiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the instansi
     */
    omit?: instansiOmit<ExtArgs> | null
    /**
     * The data used to create many instansis.
     */
    data: instansiCreateManyInput | instansiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * instansi update
   */
  export type instansiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instansi
     */
    select?: instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instansi
     */
    omit?: instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instansiInclude<ExtArgs> | null
    /**
     * The data needed to update a instansi.
     */
    data: XOR<instansiUpdateInput, instansiUncheckedUpdateInput>
    /**
     * Choose, which instansi to update.
     */
    where: instansiWhereUniqueInput
  }

  /**
   * instansi updateMany
   */
  export type instansiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update instansis.
     */
    data: XOR<instansiUpdateManyMutationInput, instansiUncheckedUpdateManyInput>
    /**
     * Filter which instansis to update
     */
    where?: instansiWhereInput
    /**
     * Limit how many instansis to update.
     */
    limit?: number
  }

  /**
   * instansi updateManyAndReturn
   */
  export type instansiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instansi
     */
    select?: instansiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the instansi
     */
    omit?: instansiOmit<ExtArgs> | null
    /**
     * The data used to update instansis.
     */
    data: XOR<instansiUpdateManyMutationInput, instansiUncheckedUpdateManyInput>
    /**
     * Filter which instansis to update
     */
    where?: instansiWhereInput
    /**
     * Limit how many instansis to update.
     */
    limit?: number
  }

  /**
   * instansi upsert
   */
  export type instansiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instansi
     */
    select?: instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instansi
     */
    omit?: instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instansiInclude<ExtArgs> | null
    /**
     * The filter to search for the instansi to update in case it exists.
     */
    where: instansiWhereUniqueInput
    /**
     * In case the instansi found by the `where` argument doesn't exist, create a new instansi with this data.
     */
    create: XOR<instansiCreateInput, instansiUncheckedCreateInput>
    /**
     * In case the instansi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<instansiUpdateInput, instansiUncheckedUpdateInput>
  }

  /**
   * instansi delete
   */
  export type instansiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instansi
     */
    select?: instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instansi
     */
    omit?: instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instansiInclude<ExtArgs> | null
    /**
     * Filter which instansi to delete.
     */
    where: instansiWhereUniqueInput
  }

  /**
   * instansi deleteMany
   */
  export type instansiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which instansis to delete
     */
    where?: instansiWhereInput
    /**
     * Limit how many instansis to delete.
     */
    limit?: number
  }

  /**
   * instansi.pembimbing_instansi
   */
  export type instansi$pembimbing_instansiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembimbing_instansi
     */
    select?: pembimbing_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembimbing_instansi
     */
    omit?: pembimbing_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembimbing_instansiInclude<ExtArgs> | null
    where?: pembimbing_instansiWhereInput
    orderBy?: pembimbing_instansiOrderByWithRelationInput | pembimbing_instansiOrderByWithRelationInput[]
    cursor?: pembimbing_instansiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pembimbing_instansiScalarFieldEnum | Pembimbing_instansiScalarFieldEnum[]
  }

  /**
   * instansi without action
   */
  export type instansiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instansi
     */
    select?: instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instansi
     */
    omit?: instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instansiInclude<ExtArgs> | null
  }


  /**
   * Model jadwal
   */

  export type AggregateJadwal = {
    _count: JadwalCountAggregateOutputType | null
    _min: JadwalMinAggregateOutputType | null
    _max: JadwalMaxAggregateOutputType | null
  }

  export type JadwalMinAggregateOutputType = {
    id: string | null
    nim: string | null
    nip: string | null
    tanggal: Date | null
    waktu_mulai: Date | null
    waktu_selesai: Date | null
    ruangan_nama: string | null
    status: $Enums.StatusSeminar | null
  }

  export type JadwalMaxAggregateOutputType = {
    id: string | null
    nim: string | null
    nip: string | null
    tanggal: Date | null
    waktu_mulai: Date | null
    waktu_selesai: Date | null
    ruangan_nama: string | null
    status: $Enums.StatusSeminar | null
  }

  export type JadwalCountAggregateOutputType = {
    id: number
    nim: number
    nip: number
    tanggal: number
    waktu_mulai: number
    waktu_selesai: number
    ruangan_nama: number
    status: number
    _all: number
  }


  export type JadwalMinAggregateInputType = {
    id?: true
    nim?: true
    nip?: true
    tanggal?: true
    waktu_mulai?: true
    waktu_selesai?: true
    ruangan_nama?: true
    status?: true
  }

  export type JadwalMaxAggregateInputType = {
    id?: true
    nim?: true
    nip?: true
    tanggal?: true
    waktu_mulai?: true
    waktu_selesai?: true
    ruangan_nama?: true
    status?: true
  }

  export type JadwalCountAggregateInputType = {
    id?: true
    nim?: true
    nip?: true
    tanggal?: true
    waktu_mulai?: true
    waktu_selesai?: true
    ruangan_nama?: true
    status?: true
    _all?: true
  }

  export type JadwalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jadwal to aggregate.
     */
    where?: jadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jadwals to fetch.
     */
    orderBy?: jadwalOrderByWithRelationInput | jadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jadwals
    **/
    _count?: true | JadwalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JadwalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JadwalMaxAggregateInputType
  }

  export type GetJadwalAggregateType<T extends JadwalAggregateArgs> = {
        [P in keyof T & keyof AggregateJadwal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJadwal[P]>
      : GetScalarType<T[P], AggregateJadwal[P]>
  }




  export type jadwalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jadwalWhereInput
    orderBy?: jadwalOrderByWithAggregationInput | jadwalOrderByWithAggregationInput[]
    by: JadwalScalarFieldEnum[] | JadwalScalarFieldEnum
    having?: jadwalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JadwalCountAggregateInputType | true
    _min?: JadwalMinAggregateInputType
    _max?: JadwalMaxAggregateInputType
  }

  export type JadwalGroupByOutputType = {
    id: string
    nim: string
    nip: string
    tanggal: Date
    waktu_mulai: Date
    waktu_selesai: Date
    ruangan_nama: string
    status: $Enums.StatusSeminar
    _count: JadwalCountAggregateOutputType | null
    _min: JadwalMinAggregateOutputType | null
    _max: JadwalMaxAggregateOutputType | null
  }

  type GetJadwalGroupByPayload<T extends jadwalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JadwalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JadwalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JadwalGroupByOutputType[P]>
            : GetScalarType<T[P], JadwalGroupByOutputType[P]>
        }
      >
    >


  export type jadwalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    nip?: boolean
    tanggal?: boolean
    waktu_mulai?: boolean
    waktu_selesai?: boolean
    ruangan_nama?: boolean
    status?: boolean
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
    ruangan?: boolean | ruanganDefaultArgs<ExtArgs>
    nilai?: boolean | jadwal$nilaiArgs<ExtArgs>
  }, ExtArgs["result"]["jadwal"]>

  export type jadwalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    nip?: boolean
    tanggal?: boolean
    waktu_mulai?: boolean
    waktu_selesai?: boolean
    ruangan_nama?: boolean
    status?: boolean
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
    ruangan?: boolean | ruanganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwal"]>

  export type jadwalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    nip?: boolean
    tanggal?: boolean
    waktu_mulai?: boolean
    waktu_selesai?: boolean
    ruangan_nama?: boolean
    status?: boolean
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
    ruangan?: boolean | ruanganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwal"]>

  export type jadwalSelectScalar = {
    id?: boolean
    nim?: boolean
    nip?: boolean
    tanggal?: boolean
    waktu_mulai?: boolean
    waktu_selesai?: boolean
    ruangan_nama?: boolean
    status?: boolean
  }

  export type jadwalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nim" | "nip" | "tanggal" | "waktu_mulai" | "waktu_selesai" | "ruangan_nama" | "status", ExtArgs["result"]["jadwal"]>
  export type jadwalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
    ruangan?: boolean | ruanganDefaultArgs<ExtArgs>
    nilai?: boolean | jadwal$nilaiArgs<ExtArgs>
  }
  export type jadwalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
    ruangan?: boolean | ruanganDefaultArgs<ExtArgs>
  }
  export type jadwalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
    ruangan?: boolean | ruanganDefaultArgs<ExtArgs>
  }

  export type $jadwalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jadwal"
    objects: {
      mahasiswa: Prisma.$mahasiswaPayload<ExtArgs>
      dosen: Prisma.$dosenPayload<ExtArgs>
      ruangan: Prisma.$ruanganPayload<ExtArgs>
      nilai: Prisma.$nilaiPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nim: string
      nip: string
      tanggal: Date
      waktu_mulai: Date
      waktu_selesai: Date
      ruangan_nama: string
      status: $Enums.StatusSeminar
    }, ExtArgs["result"]["jadwal"]>
    composites: {}
  }

  type jadwalGetPayload<S extends boolean | null | undefined | jadwalDefaultArgs> = $Result.GetResult<Prisma.$jadwalPayload, S>

  type jadwalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jadwalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JadwalCountAggregateInputType | true
    }

  export interface jadwalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jadwal'], meta: { name: 'jadwal' } }
    /**
     * Find zero or one Jadwal that matches the filter.
     * @param {jadwalFindUniqueArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jadwalFindUniqueArgs>(args: SelectSubset<T, jadwalFindUniqueArgs<ExtArgs>>): Prisma__jadwalClient<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jadwal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jadwalFindUniqueOrThrowArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jadwalFindUniqueOrThrowArgs>(args: SelectSubset<T, jadwalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jadwalClient<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwalFindFirstArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jadwalFindFirstArgs>(args?: SelectSubset<T, jadwalFindFirstArgs<ExtArgs>>): Prisma__jadwalClient<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwalFindFirstOrThrowArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jadwalFindFirstOrThrowArgs>(args?: SelectSubset<T, jadwalFindFirstOrThrowArgs<ExtArgs>>): Prisma__jadwalClient<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jadwals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jadwals
     * const jadwals = await prisma.jadwal.findMany()
     * 
     * // Get first 10 Jadwals
     * const jadwals = await prisma.jadwal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jadwalWithIdOnly = await prisma.jadwal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jadwalFindManyArgs>(args?: SelectSubset<T, jadwalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jadwal.
     * @param {jadwalCreateArgs} args - Arguments to create a Jadwal.
     * @example
     * // Create one Jadwal
     * const Jadwal = await prisma.jadwal.create({
     *   data: {
     *     // ... data to create a Jadwal
     *   }
     * })
     * 
     */
    create<T extends jadwalCreateArgs>(args: SelectSubset<T, jadwalCreateArgs<ExtArgs>>): Prisma__jadwalClient<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jadwals.
     * @param {jadwalCreateManyArgs} args - Arguments to create many Jadwals.
     * @example
     * // Create many Jadwals
     * const jadwal = await prisma.jadwal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jadwalCreateManyArgs>(args?: SelectSubset<T, jadwalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jadwals and returns the data saved in the database.
     * @param {jadwalCreateManyAndReturnArgs} args - Arguments to create many Jadwals.
     * @example
     * // Create many Jadwals
     * const jadwal = await prisma.jadwal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jadwals and only return the `id`
     * const jadwalWithIdOnly = await prisma.jadwal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends jadwalCreateManyAndReturnArgs>(args?: SelectSubset<T, jadwalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jadwal.
     * @param {jadwalDeleteArgs} args - Arguments to delete one Jadwal.
     * @example
     * // Delete one Jadwal
     * const Jadwal = await prisma.jadwal.delete({
     *   where: {
     *     // ... filter to delete one Jadwal
     *   }
     * })
     * 
     */
    delete<T extends jadwalDeleteArgs>(args: SelectSubset<T, jadwalDeleteArgs<ExtArgs>>): Prisma__jadwalClient<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jadwal.
     * @param {jadwalUpdateArgs} args - Arguments to update one Jadwal.
     * @example
     * // Update one Jadwal
     * const jadwal = await prisma.jadwal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jadwalUpdateArgs>(args: SelectSubset<T, jadwalUpdateArgs<ExtArgs>>): Prisma__jadwalClient<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jadwals.
     * @param {jadwalDeleteManyArgs} args - Arguments to filter Jadwals to delete.
     * @example
     * // Delete a few Jadwals
     * const { count } = await prisma.jadwal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jadwalDeleteManyArgs>(args?: SelectSubset<T, jadwalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jadwals
     * const jadwal = await prisma.jadwal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jadwalUpdateManyArgs>(args: SelectSubset<T, jadwalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jadwals and returns the data updated in the database.
     * @param {jadwalUpdateManyAndReturnArgs} args - Arguments to update many Jadwals.
     * @example
     * // Update many Jadwals
     * const jadwal = await prisma.jadwal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jadwals and only return the `id`
     * const jadwalWithIdOnly = await prisma.jadwal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends jadwalUpdateManyAndReturnArgs>(args: SelectSubset<T, jadwalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jadwal.
     * @param {jadwalUpsertArgs} args - Arguments to update or create a Jadwal.
     * @example
     * // Update or create a Jadwal
     * const jadwal = await prisma.jadwal.upsert({
     *   create: {
     *     // ... data to create a Jadwal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jadwal we want to update
     *   }
     * })
     */
    upsert<T extends jadwalUpsertArgs>(args: SelectSubset<T, jadwalUpsertArgs<ExtArgs>>): Prisma__jadwalClient<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwalCountArgs} args - Arguments to filter Jadwals to count.
     * @example
     * // Count the number of Jadwals
     * const count = await prisma.jadwal.count({
     *   where: {
     *     // ... the filter for the Jadwals we want to count
     *   }
     * })
    **/
    count<T extends jadwalCountArgs>(
      args?: Subset<T, jadwalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JadwalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JadwalAggregateArgs>(args: Subset<T, JadwalAggregateArgs>): Prisma.PrismaPromise<GetJadwalAggregateType<T>>

    /**
     * Group by Jadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends jadwalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jadwalGroupByArgs['orderBy'] }
        : { orderBy?: jadwalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, jadwalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJadwalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jadwal model
   */
  readonly fields: jadwalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jadwal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jadwalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mahasiswa<T extends mahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswaDefaultArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dosen<T extends dosenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, dosenDefaultArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ruangan<T extends ruanganDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ruanganDefaultArgs<ExtArgs>>): Prisma__ruanganClient<$Result.GetResult<Prisma.$ruanganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nilai<T extends jadwal$nilaiArgs<ExtArgs> = {}>(args?: Subset<T, jadwal$nilaiArgs<ExtArgs>>): Prisma__nilaiClient<$Result.GetResult<Prisma.$nilaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the jadwal model
   */
  interface jadwalFieldRefs {
    readonly id: FieldRef<"jadwal", 'String'>
    readonly nim: FieldRef<"jadwal", 'String'>
    readonly nip: FieldRef<"jadwal", 'String'>
    readonly tanggal: FieldRef<"jadwal", 'DateTime'>
    readonly waktu_mulai: FieldRef<"jadwal", 'DateTime'>
    readonly waktu_selesai: FieldRef<"jadwal", 'DateTime'>
    readonly ruangan_nama: FieldRef<"jadwal", 'String'>
    readonly status: FieldRef<"jadwal", 'StatusSeminar'>
  }
    

  // Custom InputTypes
  /**
   * jadwal findUnique
   */
  export type jadwalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    /**
     * Filter, which jadwal to fetch.
     */
    where: jadwalWhereUniqueInput
  }

  /**
   * jadwal findUniqueOrThrow
   */
  export type jadwalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    /**
     * Filter, which jadwal to fetch.
     */
    where: jadwalWhereUniqueInput
  }

  /**
   * jadwal findFirst
   */
  export type jadwalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    /**
     * Filter, which jadwal to fetch.
     */
    where?: jadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jadwals to fetch.
     */
    orderBy?: jadwalOrderByWithRelationInput | jadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jadwals.
     */
    cursor?: jadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jadwals.
     */
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * jadwal findFirstOrThrow
   */
  export type jadwalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    /**
     * Filter, which jadwal to fetch.
     */
    where?: jadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jadwals to fetch.
     */
    orderBy?: jadwalOrderByWithRelationInput | jadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jadwals.
     */
    cursor?: jadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jadwals.
     */
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * jadwal findMany
   */
  export type jadwalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    /**
     * Filter, which jadwals to fetch.
     */
    where?: jadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jadwals to fetch.
     */
    orderBy?: jadwalOrderByWithRelationInput | jadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jadwals.
     */
    cursor?: jadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jadwals.
     */
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * jadwal create
   */
  export type jadwalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    /**
     * The data needed to create a jadwal.
     */
    data: XOR<jadwalCreateInput, jadwalUncheckedCreateInput>
  }

  /**
   * jadwal createMany
   */
  export type jadwalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jadwals.
     */
    data: jadwalCreateManyInput | jadwalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jadwal createManyAndReturn
   */
  export type jadwalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * The data used to create many jadwals.
     */
    data: jadwalCreateManyInput | jadwalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * jadwal update
   */
  export type jadwalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    /**
     * The data needed to update a jadwal.
     */
    data: XOR<jadwalUpdateInput, jadwalUncheckedUpdateInput>
    /**
     * Choose, which jadwal to update.
     */
    where: jadwalWhereUniqueInput
  }

  /**
   * jadwal updateMany
   */
  export type jadwalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jadwals.
     */
    data: XOR<jadwalUpdateManyMutationInput, jadwalUncheckedUpdateManyInput>
    /**
     * Filter which jadwals to update
     */
    where?: jadwalWhereInput
    /**
     * Limit how many jadwals to update.
     */
    limit?: number
  }

  /**
   * jadwal updateManyAndReturn
   */
  export type jadwalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * The data used to update jadwals.
     */
    data: XOR<jadwalUpdateManyMutationInput, jadwalUncheckedUpdateManyInput>
    /**
     * Filter which jadwals to update
     */
    where?: jadwalWhereInput
    /**
     * Limit how many jadwals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * jadwal upsert
   */
  export type jadwalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    /**
     * The filter to search for the jadwal to update in case it exists.
     */
    where: jadwalWhereUniqueInput
    /**
     * In case the jadwal found by the `where` argument doesn't exist, create a new jadwal with this data.
     */
    create: XOR<jadwalCreateInput, jadwalUncheckedCreateInput>
    /**
     * In case the jadwal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jadwalUpdateInput, jadwalUncheckedUpdateInput>
  }

  /**
   * jadwal delete
   */
  export type jadwalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    /**
     * Filter which jadwal to delete.
     */
    where: jadwalWhereUniqueInput
  }

  /**
   * jadwal deleteMany
   */
  export type jadwalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jadwals to delete
     */
    where?: jadwalWhereInput
    /**
     * Limit how many jadwals to delete.
     */
    limit?: number
  }

  /**
   * jadwal.nilai
   */
  export type jadwal$nilaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai
     */
    select?: nilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai
     */
    omit?: nilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilaiInclude<ExtArgs> | null
    where?: nilaiWhereInput
  }

  /**
   * jadwal without action
   */
  export type jadwalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
  }


  /**
   * Model log_jadwal
   */

  export type AggregateLog_jadwal = {
    _count: Log_jadwalCountAggregateOutputType | null
    _min: Log_jadwalMinAggregateOutputType | null
    _max: Log_jadwalMaxAggregateOutputType | null
  }

  export type Log_jadwalMinAggregateOutputType = {
    id: string | null
    jadwal_seminar_id: string | null
    log_type: $Enums.LogType | null
    nip: string | null
    tanggal_lama: Date | null
    tanggal_baru: Date | null
    ruangan_lama: string | null
    ruangan_baru: string | null
    keterangan: string | null
    created_at: Date | null
  }

  export type Log_jadwalMaxAggregateOutputType = {
    id: string | null
    jadwal_seminar_id: string | null
    log_type: $Enums.LogType | null
    nip: string | null
    tanggal_lama: Date | null
    tanggal_baru: Date | null
    ruangan_lama: string | null
    ruangan_baru: string | null
    keterangan: string | null
    created_at: Date | null
  }

  export type Log_jadwalCountAggregateOutputType = {
    id: number
    jadwal_seminar_id: number
    log_type: number
    nip: number
    tanggal_lama: number
    tanggal_baru: number
    ruangan_lama: number
    ruangan_baru: number
    keterangan: number
    created_at: number
    _all: number
  }


  export type Log_jadwalMinAggregateInputType = {
    id?: true
    jadwal_seminar_id?: true
    log_type?: true
    nip?: true
    tanggal_lama?: true
    tanggal_baru?: true
    ruangan_lama?: true
    ruangan_baru?: true
    keterangan?: true
    created_at?: true
  }

  export type Log_jadwalMaxAggregateInputType = {
    id?: true
    jadwal_seminar_id?: true
    log_type?: true
    nip?: true
    tanggal_lama?: true
    tanggal_baru?: true
    ruangan_lama?: true
    ruangan_baru?: true
    keterangan?: true
    created_at?: true
  }

  export type Log_jadwalCountAggregateInputType = {
    id?: true
    jadwal_seminar_id?: true
    log_type?: true
    nip?: true
    tanggal_lama?: true
    tanggal_baru?: true
    ruangan_lama?: true
    ruangan_baru?: true
    keterangan?: true
    created_at?: true
    _all?: true
  }

  export type Log_jadwalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which log_jadwal to aggregate.
     */
    where?: log_jadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_jadwals to fetch.
     */
    orderBy?: log_jadwalOrderByWithRelationInput | log_jadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: log_jadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned log_jadwals
    **/
    _count?: true | Log_jadwalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Log_jadwalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Log_jadwalMaxAggregateInputType
  }

  export type GetLog_jadwalAggregateType<T extends Log_jadwalAggregateArgs> = {
        [P in keyof T & keyof AggregateLog_jadwal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog_jadwal[P]>
      : GetScalarType<T[P], AggregateLog_jadwal[P]>
  }




  export type log_jadwalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: log_jadwalWhereInput
    orderBy?: log_jadwalOrderByWithAggregationInput | log_jadwalOrderByWithAggregationInput[]
    by: Log_jadwalScalarFieldEnum[] | Log_jadwalScalarFieldEnum
    having?: log_jadwalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Log_jadwalCountAggregateInputType | true
    _min?: Log_jadwalMinAggregateInputType
    _max?: Log_jadwalMaxAggregateInputType
  }

  export type Log_jadwalGroupByOutputType = {
    id: string
    jadwal_seminar_id: string
    log_type: $Enums.LogType
    nip: string
    tanggal_lama: Date | null
    tanggal_baru: Date | null
    ruangan_lama: string | null
    ruangan_baru: string | null
    keterangan: string | null
    created_at: Date
    _count: Log_jadwalCountAggregateOutputType | null
    _min: Log_jadwalMinAggregateOutputType | null
    _max: Log_jadwalMaxAggregateOutputType | null
  }

  type GetLog_jadwalGroupByPayload<T extends log_jadwalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Log_jadwalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Log_jadwalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Log_jadwalGroupByOutputType[P]>
            : GetScalarType<T[P], Log_jadwalGroupByOutputType[P]>
        }
      >
    >


  export type log_jadwalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jadwal_seminar_id?: boolean
    log_type?: boolean
    nip?: boolean
    tanggal_lama?: boolean
    tanggal_baru?: boolean
    ruangan_lama?: boolean
    ruangan_baru?: boolean
    keterangan?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["log_jadwal"]>

  export type log_jadwalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jadwal_seminar_id?: boolean
    log_type?: boolean
    nip?: boolean
    tanggal_lama?: boolean
    tanggal_baru?: boolean
    ruangan_lama?: boolean
    ruangan_baru?: boolean
    keterangan?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["log_jadwal"]>

  export type log_jadwalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jadwal_seminar_id?: boolean
    log_type?: boolean
    nip?: boolean
    tanggal_lama?: boolean
    tanggal_baru?: boolean
    ruangan_lama?: boolean
    ruangan_baru?: boolean
    keterangan?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["log_jadwal"]>

  export type log_jadwalSelectScalar = {
    id?: boolean
    jadwal_seminar_id?: boolean
    log_type?: boolean
    nip?: boolean
    tanggal_lama?: boolean
    tanggal_baru?: boolean
    ruangan_lama?: boolean
    ruangan_baru?: boolean
    keterangan?: boolean
    created_at?: boolean
  }

  export type log_jadwalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jadwal_seminar_id" | "log_type" | "nip" | "tanggal_lama" | "tanggal_baru" | "ruangan_lama" | "ruangan_baru" | "keterangan" | "created_at", ExtArgs["result"]["log_jadwal"]>

  export type $log_jadwalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "log_jadwal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jadwal_seminar_id: string
      log_type: $Enums.LogType
      nip: string
      tanggal_lama: Date | null
      tanggal_baru: Date | null
      ruangan_lama: string | null
      ruangan_baru: string | null
      keterangan: string | null
      created_at: Date
    }, ExtArgs["result"]["log_jadwal"]>
    composites: {}
  }

  type log_jadwalGetPayload<S extends boolean | null | undefined | log_jadwalDefaultArgs> = $Result.GetResult<Prisma.$log_jadwalPayload, S>

  type log_jadwalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<log_jadwalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Log_jadwalCountAggregateInputType | true
    }

  export interface log_jadwalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['log_jadwal'], meta: { name: 'log_jadwal' } }
    /**
     * Find zero or one Log_jadwal that matches the filter.
     * @param {log_jadwalFindUniqueArgs} args - Arguments to find a Log_jadwal
     * @example
     * // Get one Log_jadwal
     * const log_jadwal = await prisma.log_jadwal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends log_jadwalFindUniqueArgs>(args: SelectSubset<T, log_jadwalFindUniqueArgs<ExtArgs>>): Prisma__log_jadwalClient<$Result.GetResult<Prisma.$log_jadwalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log_jadwal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {log_jadwalFindUniqueOrThrowArgs} args - Arguments to find a Log_jadwal
     * @example
     * // Get one Log_jadwal
     * const log_jadwal = await prisma.log_jadwal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends log_jadwalFindUniqueOrThrowArgs>(args: SelectSubset<T, log_jadwalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__log_jadwalClient<$Result.GetResult<Prisma.$log_jadwalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log_jadwal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_jadwalFindFirstArgs} args - Arguments to find a Log_jadwal
     * @example
     * // Get one Log_jadwal
     * const log_jadwal = await prisma.log_jadwal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends log_jadwalFindFirstArgs>(args?: SelectSubset<T, log_jadwalFindFirstArgs<ExtArgs>>): Prisma__log_jadwalClient<$Result.GetResult<Prisma.$log_jadwalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log_jadwal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_jadwalFindFirstOrThrowArgs} args - Arguments to find a Log_jadwal
     * @example
     * // Get one Log_jadwal
     * const log_jadwal = await prisma.log_jadwal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends log_jadwalFindFirstOrThrowArgs>(args?: SelectSubset<T, log_jadwalFindFirstOrThrowArgs<ExtArgs>>): Prisma__log_jadwalClient<$Result.GetResult<Prisma.$log_jadwalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Log_jadwals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_jadwalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Log_jadwals
     * const log_jadwals = await prisma.log_jadwal.findMany()
     * 
     * // Get first 10 Log_jadwals
     * const log_jadwals = await prisma.log_jadwal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const log_jadwalWithIdOnly = await prisma.log_jadwal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends log_jadwalFindManyArgs>(args?: SelectSubset<T, log_jadwalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$log_jadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log_jadwal.
     * @param {log_jadwalCreateArgs} args - Arguments to create a Log_jadwal.
     * @example
     * // Create one Log_jadwal
     * const Log_jadwal = await prisma.log_jadwal.create({
     *   data: {
     *     // ... data to create a Log_jadwal
     *   }
     * })
     * 
     */
    create<T extends log_jadwalCreateArgs>(args: SelectSubset<T, log_jadwalCreateArgs<ExtArgs>>): Prisma__log_jadwalClient<$Result.GetResult<Prisma.$log_jadwalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Log_jadwals.
     * @param {log_jadwalCreateManyArgs} args - Arguments to create many Log_jadwals.
     * @example
     * // Create many Log_jadwals
     * const log_jadwal = await prisma.log_jadwal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends log_jadwalCreateManyArgs>(args?: SelectSubset<T, log_jadwalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Log_jadwals and returns the data saved in the database.
     * @param {log_jadwalCreateManyAndReturnArgs} args - Arguments to create many Log_jadwals.
     * @example
     * // Create many Log_jadwals
     * const log_jadwal = await prisma.log_jadwal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Log_jadwals and only return the `id`
     * const log_jadwalWithIdOnly = await prisma.log_jadwal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends log_jadwalCreateManyAndReturnArgs>(args?: SelectSubset<T, log_jadwalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$log_jadwalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Log_jadwal.
     * @param {log_jadwalDeleteArgs} args - Arguments to delete one Log_jadwal.
     * @example
     * // Delete one Log_jadwal
     * const Log_jadwal = await prisma.log_jadwal.delete({
     *   where: {
     *     // ... filter to delete one Log_jadwal
     *   }
     * })
     * 
     */
    delete<T extends log_jadwalDeleteArgs>(args: SelectSubset<T, log_jadwalDeleteArgs<ExtArgs>>): Prisma__log_jadwalClient<$Result.GetResult<Prisma.$log_jadwalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log_jadwal.
     * @param {log_jadwalUpdateArgs} args - Arguments to update one Log_jadwal.
     * @example
     * // Update one Log_jadwal
     * const log_jadwal = await prisma.log_jadwal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends log_jadwalUpdateArgs>(args: SelectSubset<T, log_jadwalUpdateArgs<ExtArgs>>): Prisma__log_jadwalClient<$Result.GetResult<Prisma.$log_jadwalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Log_jadwals.
     * @param {log_jadwalDeleteManyArgs} args - Arguments to filter Log_jadwals to delete.
     * @example
     * // Delete a few Log_jadwals
     * const { count } = await prisma.log_jadwal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends log_jadwalDeleteManyArgs>(args?: SelectSubset<T, log_jadwalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Log_jadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_jadwalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Log_jadwals
     * const log_jadwal = await prisma.log_jadwal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends log_jadwalUpdateManyArgs>(args: SelectSubset<T, log_jadwalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Log_jadwals and returns the data updated in the database.
     * @param {log_jadwalUpdateManyAndReturnArgs} args - Arguments to update many Log_jadwals.
     * @example
     * // Update many Log_jadwals
     * const log_jadwal = await prisma.log_jadwal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Log_jadwals and only return the `id`
     * const log_jadwalWithIdOnly = await prisma.log_jadwal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends log_jadwalUpdateManyAndReturnArgs>(args: SelectSubset<T, log_jadwalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$log_jadwalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Log_jadwal.
     * @param {log_jadwalUpsertArgs} args - Arguments to update or create a Log_jadwal.
     * @example
     * // Update or create a Log_jadwal
     * const log_jadwal = await prisma.log_jadwal.upsert({
     *   create: {
     *     // ... data to create a Log_jadwal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log_jadwal we want to update
     *   }
     * })
     */
    upsert<T extends log_jadwalUpsertArgs>(args: SelectSubset<T, log_jadwalUpsertArgs<ExtArgs>>): Prisma__log_jadwalClient<$Result.GetResult<Prisma.$log_jadwalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Log_jadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_jadwalCountArgs} args - Arguments to filter Log_jadwals to count.
     * @example
     * // Count the number of Log_jadwals
     * const count = await prisma.log_jadwal.count({
     *   where: {
     *     // ... the filter for the Log_jadwals we want to count
     *   }
     * })
    **/
    count<T extends log_jadwalCountArgs>(
      args?: Subset<T, log_jadwalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Log_jadwalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log_jadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_jadwalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Log_jadwalAggregateArgs>(args: Subset<T, Log_jadwalAggregateArgs>): Prisma.PrismaPromise<GetLog_jadwalAggregateType<T>>

    /**
     * Group by Log_jadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_jadwalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends log_jadwalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: log_jadwalGroupByArgs['orderBy'] }
        : { orderBy?: log_jadwalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, log_jadwalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLog_jadwalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the log_jadwal model
   */
  readonly fields: log_jadwalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for log_jadwal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__log_jadwalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the log_jadwal model
   */
  interface log_jadwalFieldRefs {
    readonly id: FieldRef<"log_jadwal", 'String'>
    readonly jadwal_seminar_id: FieldRef<"log_jadwal", 'String'>
    readonly log_type: FieldRef<"log_jadwal", 'LogType'>
    readonly nip: FieldRef<"log_jadwal", 'String'>
    readonly tanggal_lama: FieldRef<"log_jadwal", 'DateTime'>
    readonly tanggal_baru: FieldRef<"log_jadwal", 'DateTime'>
    readonly ruangan_lama: FieldRef<"log_jadwal", 'String'>
    readonly ruangan_baru: FieldRef<"log_jadwal", 'String'>
    readonly keterangan: FieldRef<"log_jadwal", 'String'>
    readonly created_at: FieldRef<"log_jadwal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * log_jadwal findUnique
   */
  export type log_jadwalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_jadwal
     */
    select?: log_jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_jadwal
     */
    omit?: log_jadwalOmit<ExtArgs> | null
    /**
     * Filter, which log_jadwal to fetch.
     */
    where: log_jadwalWhereUniqueInput
  }

  /**
   * log_jadwal findUniqueOrThrow
   */
  export type log_jadwalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_jadwal
     */
    select?: log_jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_jadwal
     */
    omit?: log_jadwalOmit<ExtArgs> | null
    /**
     * Filter, which log_jadwal to fetch.
     */
    where: log_jadwalWhereUniqueInput
  }

  /**
   * log_jadwal findFirst
   */
  export type log_jadwalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_jadwal
     */
    select?: log_jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_jadwal
     */
    omit?: log_jadwalOmit<ExtArgs> | null
    /**
     * Filter, which log_jadwal to fetch.
     */
    where?: log_jadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_jadwals to fetch.
     */
    orderBy?: log_jadwalOrderByWithRelationInput | log_jadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for log_jadwals.
     */
    cursor?: log_jadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of log_jadwals.
     */
    distinct?: Log_jadwalScalarFieldEnum | Log_jadwalScalarFieldEnum[]
  }

  /**
   * log_jadwal findFirstOrThrow
   */
  export type log_jadwalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_jadwal
     */
    select?: log_jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_jadwal
     */
    omit?: log_jadwalOmit<ExtArgs> | null
    /**
     * Filter, which log_jadwal to fetch.
     */
    where?: log_jadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_jadwals to fetch.
     */
    orderBy?: log_jadwalOrderByWithRelationInput | log_jadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for log_jadwals.
     */
    cursor?: log_jadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of log_jadwals.
     */
    distinct?: Log_jadwalScalarFieldEnum | Log_jadwalScalarFieldEnum[]
  }

  /**
   * log_jadwal findMany
   */
  export type log_jadwalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_jadwal
     */
    select?: log_jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_jadwal
     */
    omit?: log_jadwalOmit<ExtArgs> | null
    /**
     * Filter, which log_jadwals to fetch.
     */
    where?: log_jadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_jadwals to fetch.
     */
    orderBy?: log_jadwalOrderByWithRelationInput | log_jadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing log_jadwals.
     */
    cursor?: log_jadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_jadwals.
     */
    skip?: number
    distinct?: Log_jadwalScalarFieldEnum | Log_jadwalScalarFieldEnum[]
  }

  /**
   * log_jadwal create
   */
  export type log_jadwalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_jadwal
     */
    select?: log_jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_jadwal
     */
    omit?: log_jadwalOmit<ExtArgs> | null
    /**
     * The data needed to create a log_jadwal.
     */
    data: XOR<log_jadwalCreateInput, log_jadwalUncheckedCreateInput>
  }

  /**
   * log_jadwal createMany
   */
  export type log_jadwalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many log_jadwals.
     */
    data: log_jadwalCreateManyInput | log_jadwalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * log_jadwal createManyAndReturn
   */
  export type log_jadwalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_jadwal
     */
    select?: log_jadwalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the log_jadwal
     */
    omit?: log_jadwalOmit<ExtArgs> | null
    /**
     * The data used to create many log_jadwals.
     */
    data: log_jadwalCreateManyInput | log_jadwalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * log_jadwal update
   */
  export type log_jadwalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_jadwal
     */
    select?: log_jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_jadwal
     */
    omit?: log_jadwalOmit<ExtArgs> | null
    /**
     * The data needed to update a log_jadwal.
     */
    data: XOR<log_jadwalUpdateInput, log_jadwalUncheckedUpdateInput>
    /**
     * Choose, which log_jadwal to update.
     */
    where: log_jadwalWhereUniqueInput
  }

  /**
   * log_jadwal updateMany
   */
  export type log_jadwalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update log_jadwals.
     */
    data: XOR<log_jadwalUpdateManyMutationInput, log_jadwalUncheckedUpdateManyInput>
    /**
     * Filter which log_jadwals to update
     */
    where?: log_jadwalWhereInput
    /**
     * Limit how many log_jadwals to update.
     */
    limit?: number
  }

  /**
   * log_jadwal updateManyAndReturn
   */
  export type log_jadwalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_jadwal
     */
    select?: log_jadwalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the log_jadwal
     */
    omit?: log_jadwalOmit<ExtArgs> | null
    /**
     * The data used to update log_jadwals.
     */
    data: XOR<log_jadwalUpdateManyMutationInput, log_jadwalUncheckedUpdateManyInput>
    /**
     * Filter which log_jadwals to update
     */
    where?: log_jadwalWhereInput
    /**
     * Limit how many log_jadwals to update.
     */
    limit?: number
  }

  /**
   * log_jadwal upsert
   */
  export type log_jadwalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_jadwal
     */
    select?: log_jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_jadwal
     */
    omit?: log_jadwalOmit<ExtArgs> | null
    /**
     * The filter to search for the log_jadwal to update in case it exists.
     */
    where: log_jadwalWhereUniqueInput
    /**
     * In case the log_jadwal found by the `where` argument doesn't exist, create a new log_jadwal with this data.
     */
    create: XOR<log_jadwalCreateInput, log_jadwalUncheckedCreateInput>
    /**
     * In case the log_jadwal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<log_jadwalUpdateInput, log_jadwalUncheckedUpdateInput>
  }

  /**
   * log_jadwal delete
   */
  export type log_jadwalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_jadwal
     */
    select?: log_jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_jadwal
     */
    omit?: log_jadwalOmit<ExtArgs> | null
    /**
     * Filter which log_jadwal to delete.
     */
    where: log_jadwalWhereUniqueInput
  }

  /**
   * log_jadwal deleteMany
   */
  export type log_jadwalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which log_jadwals to delete
     */
    where?: log_jadwalWhereInput
    /**
     * Limit how many log_jadwals to delete.
     */
    limit?: number
  }

  /**
   * log_jadwal without action
   */
  export type log_jadwalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_jadwal
     */
    select?: log_jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_jadwal
     */
    omit?: log_jadwalOmit<ExtArgs> | null
  }


  /**
   * Model mahasiswa
   */

  export type AggregateMahasiswa = {
    _count: MahasiswaCountAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  export type MahasiswaMinAggregateOutputType = {
    nim: string | null
    nama: string | null
    email: string | null
  }

  export type MahasiswaMaxAggregateOutputType = {
    nim: string | null
    nama: string | null
    email: string | null
  }

  export type MahasiswaCountAggregateOutputType = {
    nim: number
    nama: number
    email: number
    _all: number
  }


  export type MahasiswaMinAggregateInputType = {
    nim?: true
    nama?: true
    email?: true
  }

  export type MahasiswaMaxAggregateInputType = {
    nim?: true
    nama?: true
    email?: true
  }

  export type MahasiswaCountAggregateInputType = {
    nim?: true
    nama?: true
    email?: true
    _all?: true
  }

  export type MahasiswaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mahasiswa to aggregate.
     */
    where?: mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mahasiswas to fetch.
     */
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mahasiswas
    **/
    _count?: true | MahasiswaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MahasiswaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MahasiswaMaxAggregateInputType
  }

  export type GetMahasiswaAggregateType<T extends MahasiswaAggregateArgs> = {
        [P in keyof T & keyof AggregateMahasiswa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMahasiswa[P]>
      : GetScalarType<T[P], AggregateMahasiswa[P]>
  }




  export type mahasiswaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mahasiswaWhereInput
    orderBy?: mahasiswaOrderByWithAggregationInput | mahasiswaOrderByWithAggregationInput[]
    by: MahasiswaScalarFieldEnum[] | MahasiswaScalarFieldEnum
    having?: mahasiswaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MahasiswaCountAggregateInputType | true
    _min?: MahasiswaMinAggregateInputType
    _max?: MahasiswaMaxAggregateInputType
  }

  export type MahasiswaGroupByOutputType = {
    nim: string
    nama: string
    email: string
    _count: MahasiswaCountAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  type GetMahasiswaGroupByPayload<T extends mahasiswaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MahasiswaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MahasiswaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
            : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
        }
      >
    >


  export type mahasiswaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nim?: boolean
    nama?: boolean
    email?: boolean
    bimbingan?: boolean | mahasiswa$bimbinganArgs<ExtArgs>
    daily_report?: boolean | mahasiswa$daily_reportArgs<ExtArgs>
    dokumen?: boolean | mahasiswa$dokumenArgs<ExtArgs>
    jadwal?: boolean | mahasiswa$jadwalArgs<ExtArgs>
    nilai_instansi?: boolean | mahasiswa$nilai_instansiArgs<ExtArgs>
    pendaftaran_kp?: boolean | mahasiswa$pendaftaran_kpArgs<ExtArgs>
    nilai?: boolean | mahasiswa$nilaiArgs<ExtArgs>
    _count?: boolean | MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mahasiswa"]>

  export type mahasiswaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nim?: boolean
    nama?: boolean
    email?: boolean
  }, ExtArgs["result"]["mahasiswa"]>

  export type mahasiswaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nim?: boolean
    nama?: boolean
    email?: boolean
  }, ExtArgs["result"]["mahasiswa"]>

  export type mahasiswaSelectScalar = {
    nim?: boolean
    nama?: boolean
    email?: boolean
  }

  export type mahasiswaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nim" | "nama" | "email", ExtArgs["result"]["mahasiswa"]>
  export type mahasiswaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bimbingan?: boolean | mahasiswa$bimbinganArgs<ExtArgs>
    daily_report?: boolean | mahasiswa$daily_reportArgs<ExtArgs>
    dokumen?: boolean | mahasiswa$dokumenArgs<ExtArgs>
    jadwal?: boolean | mahasiswa$jadwalArgs<ExtArgs>
    nilai_instansi?: boolean | mahasiswa$nilai_instansiArgs<ExtArgs>
    pendaftaran_kp?: boolean | mahasiswa$pendaftaran_kpArgs<ExtArgs>
    nilai?: boolean | mahasiswa$nilaiArgs<ExtArgs>
    _count?: boolean | MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type mahasiswaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type mahasiswaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $mahasiswaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mahasiswa"
    objects: {
      bimbingan: Prisma.$bimbinganPayload<ExtArgs>[]
      daily_report: Prisma.$daily_reportPayload<ExtArgs>[]
      dokumen: Prisma.$dokumenPayload<ExtArgs>[]
      jadwal: Prisma.$jadwalPayload<ExtArgs>[]
      nilai_instansi: Prisma.$nilai_instansiPayload<ExtArgs> | null
      pendaftaran_kp: Prisma.$pendaftaran_kpPayload<ExtArgs>[]
      nilai: Prisma.$nilaiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nim: string
      nama: string
      email: string
    }, ExtArgs["result"]["mahasiswa"]>
    composites: {}
  }

  type mahasiswaGetPayload<S extends boolean | null | undefined | mahasiswaDefaultArgs> = $Result.GetResult<Prisma.$mahasiswaPayload, S>

  type mahasiswaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mahasiswaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MahasiswaCountAggregateInputType | true
    }

  export interface mahasiswaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mahasiswa'], meta: { name: 'mahasiswa' } }
    /**
     * Find zero or one Mahasiswa that matches the filter.
     * @param {mahasiswaFindUniqueArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mahasiswaFindUniqueArgs>(args: SelectSubset<T, mahasiswaFindUniqueArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mahasiswa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mahasiswaFindUniqueOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mahasiswaFindUniqueOrThrowArgs>(args: SelectSubset<T, mahasiswaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mahasiswa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaFindFirstArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mahasiswaFindFirstArgs>(args?: SelectSubset<T, mahasiswaFindFirstArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mahasiswa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaFindFirstOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mahasiswaFindFirstOrThrowArgs>(args?: SelectSubset<T, mahasiswaFindFirstOrThrowArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mahasiswas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany()
     * 
     * // Get first 10 Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany({ take: 10 })
     * 
     * // Only select the `nim`
     * const mahasiswaWithNimOnly = await prisma.mahasiswa.findMany({ select: { nim: true } })
     * 
     */
    findMany<T extends mahasiswaFindManyArgs>(args?: SelectSubset<T, mahasiswaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mahasiswa.
     * @param {mahasiswaCreateArgs} args - Arguments to create a Mahasiswa.
     * @example
     * // Create one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.create({
     *   data: {
     *     // ... data to create a Mahasiswa
     *   }
     * })
     * 
     */
    create<T extends mahasiswaCreateArgs>(args: SelectSubset<T, mahasiswaCreateArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mahasiswas.
     * @param {mahasiswaCreateManyArgs} args - Arguments to create many Mahasiswas.
     * @example
     * // Create many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mahasiswaCreateManyArgs>(args?: SelectSubset<T, mahasiswaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mahasiswas and returns the data saved in the database.
     * @param {mahasiswaCreateManyAndReturnArgs} args - Arguments to create many Mahasiswas.
     * @example
     * // Create many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mahasiswas and only return the `nim`
     * const mahasiswaWithNimOnly = await prisma.mahasiswa.createManyAndReturn({
     *   select: { nim: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mahasiswaCreateManyAndReturnArgs>(args?: SelectSubset<T, mahasiswaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mahasiswa.
     * @param {mahasiswaDeleteArgs} args - Arguments to delete one Mahasiswa.
     * @example
     * // Delete one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.delete({
     *   where: {
     *     // ... filter to delete one Mahasiswa
     *   }
     * })
     * 
     */
    delete<T extends mahasiswaDeleteArgs>(args: SelectSubset<T, mahasiswaDeleteArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mahasiswa.
     * @param {mahasiswaUpdateArgs} args - Arguments to update one Mahasiswa.
     * @example
     * // Update one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mahasiswaUpdateArgs>(args: SelectSubset<T, mahasiswaUpdateArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mahasiswas.
     * @param {mahasiswaDeleteManyArgs} args - Arguments to filter Mahasiswas to delete.
     * @example
     * // Delete a few Mahasiswas
     * const { count } = await prisma.mahasiswa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mahasiswaDeleteManyArgs>(args?: SelectSubset<T, mahasiswaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mahasiswaUpdateManyArgs>(args: SelectSubset<T, mahasiswaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mahasiswas and returns the data updated in the database.
     * @param {mahasiswaUpdateManyAndReturnArgs} args - Arguments to update many Mahasiswas.
     * @example
     * // Update many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mahasiswas and only return the `nim`
     * const mahasiswaWithNimOnly = await prisma.mahasiswa.updateManyAndReturn({
     *   select: { nim: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mahasiswaUpdateManyAndReturnArgs>(args: SelectSubset<T, mahasiswaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mahasiswa.
     * @param {mahasiswaUpsertArgs} args - Arguments to update or create a Mahasiswa.
     * @example
     * // Update or create a Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.upsert({
     *   create: {
     *     // ... data to create a Mahasiswa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mahasiswa we want to update
     *   }
     * })
     */
    upsert<T extends mahasiswaUpsertArgs>(args: SelectSubset<T, mahasiswaUpsertArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaCountArgs} args - Arguments to filter Mahasiswas to count.
     * @example
     * // Count the number of Mahasiswas
     * const count = await prisma.mahasiswa.count({
     *   where: {
     *     // ... the filter for the Mahasiswas we want to count
     *   }
     * })
    **/
    count<T extends mahasiswaCountArgs>(
      args?: Subset<T, mahasiswaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MahasiswaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MahasiswaAggregateArgs>(args: Subset<T, MahasiswaAggregateArgs>): Prisma.PrismaPromise<GetMahasiswaAggregateType<T>>

    /**
     * Group by Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mahasiswaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mahasiswaGroupByArgs['orderBy'] }
        : { orderBy?: mahasiswaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mahasiswaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMahasiswaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mahasiswa model
   */
  readonly fields: mahasiswaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mahasiswa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mahasiswaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bimbingan<T extends mahasiswa$bimbinganArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswa$bimbinganArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bimbinganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    daily_report<T extends mahasiswa$daily_reportArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswa$daily_reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$daily_reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dokumen<T extends mahasiswa$dokumenArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswa$dokumenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dokumenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jadwal<T extends mahasiswa$jadwalArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswa$jadwalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nilai_instansi<T extends mahasiswa$nilai_instansiArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswa$nilai_instansiArgs<ExtArgs>>): Prisma__nilai_instansiClient<$Result.GetResult<Prisma.$nilai_instansiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pendaftaran_kp<T extends mahasiswa$pendaftaran_kpArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswa$pendaftaran_kpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendaftaran_kpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nilai<T extends mahasiswa$nilaiArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswa$nilaiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nilaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mahasiswa model
   */
  interface mahasiswaFieldRefs {
    readonly nim: FieldRef<"mahasiswa", 'String'>
    readonly nama: FieldRef<"mahasiswa", 'String'>
    readonly email: FieldRef<"mahasiswa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mahasiswa findUnique
   */
  export type mahasiswaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which mahasiswa to fetch.
     */
    where: mahasiswaWhereUniqueInput
  }

  /**
   * mahasiswa findUniqueOrThrow
   */
  export type mahasiswaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which mahasiswa to fetch.
     */
    where: mahasiswaWhereUniqueInput
  }

  /**
   * mahasiswa findFirst
   */
  export type mahasiswaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which mahasiswa to fetch.
     */
    where?: mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mahasiswas to fetch.
     */
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mahasiswas.
     */
    cursor?: mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * mahasiswa findFirstOrThrow
   */
  export type mahasiswaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which mahasiswa to fetch.
     */
    where?: mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mahasiswas to fetch.
     */
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mahasiswas.
     */
    cursor?: mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * mahasiswa findMany
   */
  export type mahasiswaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which mahasiswas to fetch.
     */
    where?: mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mahasiswas to fetch.
     */
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mahasiswas.
     */
    cursor?: mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mahasiswas.
     */
    skip?: number
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * mahasiswa create
   */
  export type mahasiswaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to create a mahasiswa.
     */
    data: XOR<mahasiswaCreateInput, mahasiswaUncheckedCreateInput>
  }

  /**
   * mahasiswa createMany
   */
  export type mahasiswaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mahasiswas.
     */
    data: mahasiswaCreateManyInput | mahasiswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mahasiswa createManyAndReturn
   */
  export type mahasiswaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * The data used to create many mahasiswas.
     */
    data: mahasiswaCreateManyInput | mahasiswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mahasiswa update
   */
  export type mahasiswaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to update a mahasiswa.
     */
    data: XOR<mahasiswaUpdateInput, mahasiswaUncheckedUpdateInput>
    /**
     * Choose, which mahasiswa to update.
     */
    where: mahasiswaWhereUniqueInput
  }

  /**
   * mahasiswa updateMany
   */
  export type mahasiswaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mahasiswas.
     */
    data: XOR<mahasiswaUpdateManyMutationInput, mahasiswaUncheckedUpdateManyInput>
    /**
     * Filter which mahasiswas to update
     */
    where?: mahasiswaWhereInput
    /**
     * Limit how many mahasiswas to update.
     */
    limit?: number
  }

  /**
   * mahasiswa updateManyAndReturn
   */
  export type mahasiswaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * The data used to update mahasiswas.
     */
    data: XOR<mahasiswaUpdateManyMutationInput, mahasiswaUncheckedUpdateManyInput>
    /**
     * Filter which mahasiswas to update
     */
    where?: mahasiswaWhereInput
    /**
     * Limit how many mahasiswas to update.
     */
    limit?: number
  }

  /**
   * mahasiswa upsert
   */
  export type mahasiswaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * The filter to search for the mahasiswa to update in case it exists.
     */
    where: mahasiswaWhereUniqueInput
    /**
     * In case the mahasiswa found by the `where` argument doesn't exist, create a new mahasiswa with this data.
     */
    create: XOR<mahasiswaCreateInput, mahasiswaUncheckedCreateInput>
    /**
     * In case the mahasiswa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mahasiswaUpdateInput, mahasiswaUncheckedUpdateInput>
  }

  /**
   * mahasiswa delete
   */
  export type mahasiswaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter which mahasiswa to delete.
     */
    where: mahasiswaWhereUniqueInput
  }

  /**
   * mahasiswa deleteMany
   */
  export type mahasiswaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mahasiswas to delete
     */
    where?: mahasiswaWhereInput
    /**
     * Limit how many mahasiswas to delete.
     */
    limit?: number
  }

  /**
   * mahasiswa.bimbingan
   */
  export type mahasiswa$bimbinganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bimbingan
     */
    select?: bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bimbingan
     */
    omit?: bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bimbinganInclude<ExtArgs> | null
    where?: bimbinganWhereInput
    orderBy?: bimbinganOrderByWithRelationInput | bimbinganOrderByWithRelationInput[]
    cursor?: bimbinganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BimbinganScalarFieldEnum | BimbinganScalarFieldEnum[]
  }

  /**
   * mahasiswa.daily_report
   */
  export type mahasiswa$daily_reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_report
     */
    select?: daily_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_report
     */
    omit?: daily_reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_reportInclude<ExtArgs> | null
    where?: daily_reportWhereInput
    orderBy?: daily_reportOrderByWithRelationInput | daily_reportOrderByWithRelationInput[]
    cursor?: daily_reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Daily_reportScalarFieldEnum | Daily_reportScalarFieldEnum[]
  }

  /**
   * mahasiswa.dokumen
   */
  export type mahasiswa$dokumenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dokumen
     */
    select?: dokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dokumen
     */
    omit?: dokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dokumenInclude<ExtArgs> | null
    where?: dokumenWhereInput
    orderBy?: dokumenOrderByWithRelationInput | dokumenOrderByWithRelationInput[]
    cursor?: dokumenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DokumenScalarFieldEnum | DokumenScalarFieldEnum[]
  }

  /**
   * mahasiswa.jadwal
   */
  export type mahasiswa$jadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    where?: jadwalWhereInput
    orderBy?: jadwalOrderByWithRelationInput | jadwalOrderByWithRelationInput[]
    cursor?: jadwalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * mahasiswa.nilai_instansi
   */
  export type mahasiswa$nilai_instansiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai_instansi
     */
    select?: nilai_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai_instansi
     */
    omit?: nilai_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilai_instansiInclude<ExtArgs> | null
    where?: nilai_instansiWhereInput
  }

  /**
   * mahasiswa.pendaftaran_kp
   */
  export type mahasiswa$pendaftaran_kpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran_kp
     */
    select?: pendaftaran_kpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran_kp
     */
    omit?: pendaftaran_kpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaran_kpInclude<ExtArgs> | null
    where?: pendaftaran_kpWhereInput
    orderBy?: pendaftaran_kpOrderByWithRelationInput | pendaftaran_kpOrderByWithRelationInput[]
    cursor?: pendaftaran_kpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pendaftaran_kpScalarFieldEnum | Pendaftaran_kpScalarFieldEnum[]
  }

  /**
   * mahasiswa.nilai
   */
  export type mahasiswa$nilaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai
     */
    select?: nilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai
     */
    omit?: nilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilaiInclude<ExtArgs> | null
    where?: nilaiWhereInput
    orderBy?: nilaiOrderByWithRelationInput | nilaiOrderByWithRelationInput[]
    cursor?: nilaiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NilaiScalarFieldEnum | NilaiScalarFieldEnum[]
  }

  /**
   * mahasiswa without action
   */
  export type mahasiswaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
  }


  /**
   * Model nilai
   */

  export type AggregateNilai = {
    _count: NilaiCountAggregateOutputType | null
    _avg: NilaiAvgAggregateOutputType | null
    _sum: NilaiSumAggregateOutputType | null
    _min: NilaiMinAggregateOutputType | null
    _max: NilaiMaxAggregateOutputType | null
  }

  export type NilaiAvgAggregateOutputType = {
    nilai_pembimbing: number | null
    nilai_penguji: number | null
  }

  export type NilaiSumAggregateOutputType = {
    nilai_pembimbing: number | null
    nilai_penguji: number | null
  }

  export type NilaiMinAggregateOutputType = {
    id: string | null
    nim: string | null
    jadwal_seminar_id: string | null
    nip_penguji: string | null
    nip_pembimbing: string | null
    nilai_pembimbing: number | null
    nilai_penguji: number | null
    note_pembimbing: string | null
    note_penguji: string | null
  }

  export type NilaiMaxAggregateOutputType = {
    id: string | null
    nim: string | null
    jadwal_seminar_id: string | null
    nip_penguji: string | null
    nip_pembimbing: string | null
    nilai_pembimbing: number | null
    nilai_penguji: number | null
    note_pembimbing: string | null
    note_penguji: string | null
  }

  export type NilaiCountAggregateOutputType = {
    id: number
    nim: number
    jadwal_seminar_id: number
    nip_penguji: number
    nip_pembimbing: number
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing: number
    note_penguji: number
    _all: number
  }


  export type NilaiAvgAggregateInputType = {
    nilai_pembimbing?: true
    nilai_penguji?: true
  }

  export type NilaiSumAggregateInputType = {
    nilai_pembimbing?: true
    nilai_penguji?: true
  }

  export type NilaiMinAggregateInputType = {
    id?: true
    nim?: true
    jadwal_seminar_id?: true
    nip_penguji?: true
    nip_pembimbing?: true
    nilai_pembimbing?: true
    nilai_penguji?: true
    note_pembimbing?: true
    note_penguji?: true
  }

  export type NilaiMaxAggregateInputType = {
    id?: true
    nim?: true
    jadwal_seminar_id?: true
    nip_penguji?: true
    nip_pembimbing?: true
    nilai_pembimbing?: true
    nilai_penguji?: true
    note_pembimbing?: true
    note_penguji?: true
  }

  export type NilaiCountAggregateInputType = {
    id?: true
    nim?: true
    jadwal_seminar_id?: true
    nip_penguji?: true
    nip_pembimbing?: true
    nilai_pembimbing?: true
    nilai_penguji?: true
    note_pembimbing?: true
    note_penguji?: true
    _all?: true
  }

  export type NilaiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nilai to aggregate.
     */
    where?: nilaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nilais to fetch.
     */
    orderBy?: nilaiOrderByWithRelationInput | nilaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: nilaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nilais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nilais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nilais
    **/
    _count?: true | NilaiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NilaiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NilaiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NilaiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NilaiMaxAggregateInputType
  }

  export type GetNilaiAggregateType<T extends NilaiAggregateArgs> = {
        [P in keyof T & keyof AggregateNilai]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNilai[P]>
      : GetScalarType<T[P], AggregateNilai[P]>
  }




  export type nilaiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nilaiWhereInput
    orderBy?: nilaiOrderByWithAggregationInput | nilaiOrderByWithAggregationInput[]
    by: NilaiScalarFieldEnum[] | NilaiScalarFieldEnum
    having?: nilaiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NilaiCountAggregateInputType | true
    _avg?: NilaiAvgAggregateInputType
    _sum?: NilaiSumAggregateInputType
    _min?: NilaiMinAggregateInputType
    _max?: NilaiMaxAggregateInputType
  }

  export type NilaiGroupByOutputType = {
    id: string
    nim: string
    jadwal_seminar_id: string
    nip_penguji: string
    nip_pembimbing: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing: string | null
    note_penguji: string | null
    _count: NilaiCountAggregateOutputType | null
    _avg: NilaiAvgAggregateOutputType | null
    _sum: NilaiSumAggregateOutputType | null
    _min: NilaiMinAggregateOutputType | null
    _max: NilaiMaxAggregateOutputType | null
  }

  type GetNilaiGroupByPayload<T extends nilaiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NilaiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NilaiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NilaiGroupByOutputType[P]>
            : GetScalarType<T[P], NilaiGroupByOutputType[P]>
        }
      >
    >


  export type nilaiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    jadwal_seminar_id?: boolean
    nip_penguji?: boolean
    nip_pembimbing?: boolean
    nilai_pembimbing?: boolean
    nilai_penguji?: boolean
    note_pembimbing?: boolean
    note_penguji?: boolean
    jadwal?: boolean | jadwalDefaultArgs<ExtArgs>
    dosen_penguji?: boolean | nilai$dosen_pengujiArgs<ExtArgs>
    dosen_pembimbing?: boolean | nilai$dosen_pembimbingArgs<ExtArgs>
    mahasiswa?: boolean | nilai$mahasiswaArgs<ExtArgs>
    _count?: boolean | NilaiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nilai"]>

  export type nilaiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    jadwal_seminar_id?: boolean
    nip_penguji?: boolean
    nip_pembimbing?: boolean
    nilai_pembimbing?: boolean
    nilai_penguji?: boolean
    note_pembimbing?: boolean
    note_penguji?: boolean
    jadwal?: boolean | jadwalDefaultArgs<ExtArgs>
    dosen_penguji?: boolean | nilai$dosen_pengujiArgs<ExtArgs>
    dosen_pembimbing?: boolean | nilai$dosen_pembimbingArgs<ExtArgs>
  }, ExtArgs["result"]["nilai"]>

  export type nilaiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    jadwal_seminar_id?: boolean
    nip_penguji?: boolean
    nip_pembimbing?: boolean
    nilai_pembimbing?: boolean
    nilai_penguji?: boolean
    note_pembimbing?: boolean
    note_penguji?: boolean
    jadwal?: boolean | jadwalDefaultArgs<ExtArgs>
    dosen_penguji?: boolean | nilai$dosen_pengujiArgs<ExtArgs>
    dosen_pembimbing?: boolean | nilai$dosen_pembimbingArgs<ExtArgs>
  }, ExtArgs["result"]["nilai"]>

  export type nilaiSelectScalar = {
    id?: boolean
    nim?: boolean
    jadwal_seminar_id?: boolean
    nip_penguji?: boolean
    nip_pembimbing?: boolean
    nilai_pembimbing?: boolean
    nilai_penguji?: boolean
    note_pembimbing?: boolean
    note_penguji?: boolean
  }

  export type nilaiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nim" | "jadwal_seminar_id" | "nip_penguji" | "nip_pembimbing" | "nilai_pembimbing" | "nilai_penguji" | "note_pembimbing" | "note_penguji", ExtArgs["result"]["nilai"]>
  export type nilaiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | jadwalDefaultArgs<ExtArgs>
    dosen_penguji?: boolean | nilai$dosen_pengujiArgs<ExtArgs>
    dosen_pembimbing?: boolean | nilai$dosen_pembimbingArgs<ExtArgs>
    mahasiswa?: boolean | nilai$mahasiswaArgs<ExtArgs>
    _count?: boolean | NilaiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type nilaiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | jadwalDefaultArgs<ExtArgs>
    dosen_penguji?: boolean | nilai$dosen_pengujiArgs<ExtArgs>
    dosen_pembimbing?: boolean | nilai$dosen_pembimbingArgs<ExtArgs>
  }
  export type nilaiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | jadwalDefaultArgs<ExtArgs>
    dosen_penguji?: boolean | nilai$dosen_pengujiArgs<ExtArgs>
    dosen_pembimbing?: boolean | nilai$dosen_pembimbingArgs<ExtArgs>
  }

  export type $nilaiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "nilai"
    objects: {
      jadwal: Prisma.$jadwalPayload<ExtArgs>
      dosen_penguji: Prisma.$dosenPayload<ExtArgs> | null
      dosen_pembimbing: Prisma.$dosenPayload<ExtArgs> | null
      mahasiswa: Prisma.$mahasiswaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nim: string
      jadwal_seminar_id: string
      nip_penguji: string
      nip_pembimbing: string
      nilai_pembimbing: number
      nilai_penguji: number
      note_pembimbing: string | null
      note_penguji: string | null
    }, ExtArgs["result"]["nilai"]>
    composites: {}
  }

  type nilaiGetPayload<S extends boolean | null | undefined | nilaiDefaultArgs> = $Result.GetResult<Prisma.$nilaiPayload, S>

  type nilaiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<nilaiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NilaiCountAggregateInputType | true
    }

  export interface nilaiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['nilai'], meta: { name: 'nilai' } }
    /**
     * Find zero or one Nilai that matches the filter.
     * @param {nilaiFindUniqueArgs} args - Arguments to find a Nilai
     * @example
     * // Get one Nilai
     * const nilai = await prisma.nilai.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends nilaiFindUniqueArgs>(args: SelectSubset<T, nilaiFindUniqueArgs<ExtArgs>>): Prisma__nilaiClient<$Result.GetResult<Prisma.$nilaiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nilai that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {nilaiFindUniqueOrThrowArgs} args - Arguments to find a Nilai
     * @example
     * // Get one Nilai
     * const nilai = await prisma.nilai.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends nilaiFindUniqueOrThrowArgs>(args: SelectSubset<T, nilaiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__nilaiClient<$Result.GetResult<Prisma.$nilaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nilai that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nilaiFindFirstArgs} args - Arguments to find a Nilai
     * @example
     * // Get one Nilai
     * const nilai = await prisma.nilai.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends nilaiFindFirstArgs>(args?: SelectSubset<T, nilaiFindFirstArgs<ExtArgs>>): Prisma__nilaiClient<$Result.GetResult<Prisma.$nilaiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nilai that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nilaiFindFirstOrThrowArgs} args - Arguments to find a Nilai
     * @example
     * // Get one Nilai
     * const nilai = await prisma.nilai.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends nilaiFindFirstOrThrowArgs>(args?: SelectSubset<T, nilaiFindFirstOrThrowArgs<ExtArgs>>): Prisma__nilaiClient<$Result.GetResult<Prisma.$nilaiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nilais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nilaiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nilais
     * const nilais = await prisma.nilai.findMany()
     * 
     * // Get first 10 Nilais
     * const nilais = await prisma.nilai.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nilaiWithIdOnly = await prisma.nilai.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends nilaiFindManyArgs>(args?: SelectSubset<T, nilaiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nilaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nilai.
     * @param {nilaiCreateArgs} args - Arguments to create a Nilai.
     * @example
     * // Create one Nilai
     * const Nilai = await prisma.nilai.create({
     *   data: {
     *     // ... data to create a Nilai
     *   }
     * })
     * 
     */
    create<T extends nilaiCreateArgs>(args: SelectSubset<T, nilaiCreateArgs<ExtArgs>>): Prisma__nilaiClient<$Result.GetResult<Prisma.$nilaiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nilais.
     * @param {nilaiCreateManyArgs} args - Arguments to create many Nilais.
     * @example
     * // Create many Nilais
     * const nilai = await prisma.nilai.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends nilaiCreateManyArgs>(args?: SelectSubset<T, nilaiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nilais and returns the data saved in the database.
     * @param {nilaiCreateManyAndReturnArgs} args - Arguments to create many Nilais.
     * @example
     * // Create many Nilais
     * const nilai = await prisma.nilai.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nilais and only return the `id`
     * const nilaiWithIdOnly = await prisma.nilai.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends nilaiCreateManyAndReturnArgs>(args?: SelectSubset<T, nilaiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nilaiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nilai.
     * @param {nilaiDeleteArgs} args - Arguments to delete one Nilai.
     * @example
     * // Delete one Nilai
     * const Nilai = await prisma.nilai.delete({
     *   where: {
     *     // ... filter to delete one Nilai
     *   }
     * })
     * 
     */
    delete<T extends nilaiDeleteArgs>(args: SelectSubset<T, nilaiDeleteArgs<ExtArgs>>): Prisma__nilaiClient<$Result.GetResult<Prisma.$nilaiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nilai.
     * @param {nilaiUpdateArgs} args - Arguments to update one Nilai.
     * @example
     * // Update one Nilai
     * const nilai = await prisma.nilai.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends nilaiUpdateArgs>(args: SelectSubset<T, nilaiUpdateArgs<ExtArgs>>): Prisma__nilaiClient<$Result.GetResult<Prisma.$nilaiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nilais.
     * @param {nilaiDeleteManyArgs} args - Arguments to filter Nilais to delete.
     * @example
     * // Delete a few Nilais
     * const { count } = await prisma.nilai.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends nilaiDeleteManyArgs>(args?: SelectSubset<T, nilaiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nilais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nilaiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nilais
     * const nilai = await prisma.nilai.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends nilaiUpdateManyArgs>(args: SelectSubset<T, nilaiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nilais and returns the data updated in the database.
     * @param {nilaiUpdateManyAndReturnArgs} args - Arguments to update many Nilais.
     * @example
     * // Update many Nilais
     * const nilai = await prisma.nilai.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nilais and only return the `id`
     * const nilaiWithIdOnly = await prisma.nilai.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends nilaiUpdateManyAndReturnArgs>(args: SelectSubset<T, nilaiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nilaiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nilai.
     * @param {nilaiUpsertArgs} args - Arguments to update or create a Nilai.
     * @example
     * // Update or create a Nilai
     * const nilai = await prisma.nilai.upsert({
     *   create: {
     *     // ... data to create a Nilai
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nilai we want to update
     *   }
     * })
     */
    upsert<T extends nilaiUpsertArgs>(args: SelectSubset<T, nilaiUpsertArgs<ExtArgs>>): Prisma__nilaiClient<$Result.GetResult<Prisma.$nilaiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nilais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nilaiCountArgs} args - Arguments to filter Nilais to count.
     * @example
     * // Count the number of Nilais
     * const count = await prisma.nilai.count({
     *   where: {
     *     // ... the filter for the Nilais we want to count
     *   }
     * })
    **/
    count<T extends nilaiCountArgs>(
      args?: Subset<T, nilaiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NilaiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nilai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NilaiAggregateArgs>(args: Subset<T, NilaiAggregateArgs>): Prisma.PrismaPromise<GetNilaiAggregateType<T>>

    /**
     * Group by Nilai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nilaiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends nilaiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: nilaiGroupByArgs['orderBy'] }
        : { orderBy?: nilaiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, nilaiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNilaiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the nilai model
   */
  readonly fields: nilaiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for nilai.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__nilaiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jadwal<T extends jadwalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jadwalDefaultArgs<ExtArgs>>): Prisma__jadwalClient<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dosen_penguji<T extends nilai$dosen_pengujiArgs<ExtArgs> = {}>(args?: Subset<T, nilai$dosen_pengujiArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    dosen_pembimbing<T extends nilai$dosen_pembimbingArgs<ExtArgs> = {}>(args?: Subset<T, nilai$dosen_pembimbingArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mahasiswa<T extends nilai$mahasiswaArgs<ExtArgs> = {}>(args?: Subset<T, nilai$mahasiswaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the nilai model
   */
  interface nilaiFieldRefs {
    readonly id: FieldRef<"nilai", 'String'>
    readonly nim: FieldRef<"nilai", 'String'>
    readonly jadwal_seminar_id: FieldRef<"nilai", 'String'>
    readonly nip_penguji: FieldRef<"nilai", 'String'>
    readonly nip_pembimbing: FieldRef<"nilai", 'String'>
    readonly nilai_pembimbing: FieldRef<"nilai", 'Float'>
    readonly nilai_penguji: FieldRef<"nilai", 'Float'>
    readonly note_pembimbing: FieldRef<"nilai", 'String'>
    readonly note_penguji: FieldRef<"nilai", 'String'>
  }
    

  // Custom InputTypes
  /**
   * nilai findUnique
   */
  export type nilaiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai
     */
    select?: nilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai
     */
    omit?: nilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilaiInclude<ExtArgs> | null
    /**
     * Filter, which nilai to fetch.
     */
    where: nilaiWhereUniqueInput
  }

  /**
   * nilai findUniqueOrThrow
   */
  export type nilaiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai
     */
    select?: nilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai
     */
    omit?: nilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilaiInclude<ExtArgs> | null
    /**
     * Filter, which nilai to fetch.
     */
    where: nilaiWhereUniqueInput
  }

  /**
   * nilai findFirst
   */
  export type nilaiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai
     */
    select?: nilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai
     */
    omit?: nilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilaiInclude<ExtArgs> | null
    /**
     * Filter, which nilai to fetch.
     */
    where?: nilaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nilais to fetch.
     */
    orderBy?: nilaiOrderByWithRelationInput | nilaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nilais.
     */
    cursor?: nilaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nilais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nilais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nilais.
     */
    distinct?: NilaiScalarFieldEnum | NilaiScalarFieldEnum[]
  }

  /**
   * nilai findFirstOrThrow
   */
  export type nilaiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai
     */
    select?: nilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai
     */
    omit?: nilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilaiInclude<ExtArgs> | null
    /**
     * Filter, which nilai to fetch.
     */
    where?: nilaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nilais to fetch.
     */
    orderBy?: nilaiOrderByWithRelationInput | nilaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nilais.
     */
    cursor?: nilaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nilais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nilais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nilais.
     */
    distinct?: NilaiScalarFieldEnum | NilaiScalarFieldEnum[]
  }

  /**
   * nilai findMany
   */
  export type nilaiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai
     */
    select?: nilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai
     */
    omit?: nilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilaiInclude<ExtArgs> | null
    /**
     * Filter, which nilais to fetch.
     */
    where?: nilaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nilais to fetch.
     */
    orderBy?: nilaiOrderByWithRelationInput | nilaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nilais.
     */
    cursor?: nilaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nilais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nilais.
     */
    skip?: number
    distinct?: NilaiScalarFieldEnum | NilaiScalarFieldEnum[]
  }

  /**
   * nilai create
   */
  export type nilaiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai
     */
    select?: nilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai
     */
    omit?: nilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilaiInclude<ExtArgs> | null
    /**
     * The data needed to create a nilai.
     */
    data: XOR<nilaiCreateInput, nilaiUncheckedCreateInput>
  }

  /**
   * nilai createMany
   */
  export type nilaiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many nilais.
     */
    data: nilaiCreateManyInput | nilaiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nilai createManyAndReturn
   */
  export type nilaiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai
     */
    select?: nilaiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the nilai
     */
    omit?: nilaiOmit<ExtArgs> | null
    /**
     * The data used to create many nilais.
     */
    data: nilaiCreateManyInput | nilaiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilaiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * nilai update
   */
  export type nilaiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai
     */
    select?: nilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai
     */
    omit?: nilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilaiInclude<ExtArgs> | null
    /**
     * The data needed to update a nilai.
     */
    data: XOR<nilaiUpdateInput, nilaiUncheckedUpdateInput>
    /**
     * Choose, which nilai to update.
     */
    where: nilaiWhereUniqueInput
  }

  /**
   * nilai updateMany
   */
  export type nilaiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update nilais.
     */
    data: XOR<nilaiUpdateManyMutationInput, nilaiUncheckedUpdateManyInput>
    /**
     * Filter which nilais to update
     */
    where?: nilaiWhereInput
    /**
     * Limit how many nilais to update.
     */
    limit?: number
  }

  /**
   * nilai updateManyAndReturn
   */
  export type nilaiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai
     */
    select?: nilaiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the nilai
     */
    omit?: nilaiOmit<ExtArgs> | null
    /**
     * The data used to update nilais.
     */
    data: XOR<nilaiUpdateManyMutationInput, nilaiUncheckedUpdateManyInput>
    /**
     * Filter which nilais to update
     */
    where?: nilaiWhereInput
    /**
     * Limit how many nilais to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilaiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * nilai upsert
   */
  export type nilaiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai
     */
    select?: nilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai
     */
    omit?: nilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilaiInclude<ExtArgs> | null
    /**
     * The filter to search for the nilai to update in case it exists.
     */
    where: nilaiWhereUniqueInput
    /**
     * In case the nilai found by the `where` argument doesn't exist, create a new nilai with this data.
     */
    create: XOR<nilaiCreateInput, nilaiUncheckedCreateInput>
    /**
     * In case the nilai was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nilaiUpdateInput, nilaiUncheckedUpdateInput>
  }

  /**
   * nilai delete
   */
  export type nilaiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai
     */
    select?: nilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai
     */
    omit?: nilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilaiInclude<ExtArgs> | null
    /**
     * Filter which nilai to delete.
     */
    where: nilaiWhereUniqueInput
  }

  /**
   * nilai deleteMany
   */
  export type nilaiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nilais to delete
     */
    where?: nilaiWhereInput
    /**
     * Limit how many nilais to delete.
     */
    limit?: number
  }

  /**
   * nilai.dosen_penguji
   */
  export type nilai$dosen_pengujiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    where?: dosenWhereInput
  }

  /**
   * nilai.dosen_pembimbing
   */
  export type nilai$dosen_pembimbingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    where?: dosenWhereInput
  }

  /**
   * nilai.mahasiswa
   */
  export type nilai$mahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    where?: mahasiswaWhereInput
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    cursor?: mahasiswaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * nilai without action
   */
  export type nilaiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai
     */
    select?: nilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai
     */
    omit?: nilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilaiInclude<ExtArgs> | null
  }


  /**
   * Model nilai_instansi
   */

  export type AggregateNilai_instansi = {
    _count: Nilai_instansiCountAggregateOutputType | null
    _avg: Nilai_instansiAvgAggregateOutputType | null
    _sum: Nilai_instansiSumAggregateOutputType | null
    _min: Nilai_instansiMinAggregateOutputType | null
    _max: Nilai_instansiMaxAggregateOutputType | null
  }

  export type Nilai_instansiAvgAggregateOutputType = {
    nilai_angka: number | null
  }

  export type Nilai_instansiSumAggregateOutputType = {
    nilai_angka: number | null
  }

  export type Nilai_instansiMinAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    nilai_angka: number | null
    nilai_huruf: string | null
    nim: string | null
    id_pembimbing_instansi: string | null
  }

  export type Nilai_instansiMaxAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    nilai_angka: number | null
    nilai_huruf: string | null
    nim: string | null
    id_pembimbing_instansi: string | null
  }

  export type Nilai_instansiCountAggregateOutputType = {
    id: number
    tanggal: number
    nilai_angka: number
    nilai_huruf: number
    nim: number
    id_pembimbing_instansi: number
    _all: number
  }


  export type Nilai_instansiAvgAggregateInputType = {
    nilai_angka?: true
  }

  export type Nilai_instansiSumAggregateInputType = {
    nilai_angka?: true
  }

  export type Nilai_instansiMinAggregateInputType = {
    id?: true
    tanggal?: true
    nilai_angka?: true
    nilai_huruf?: true
    nim?: true
    id_pembimbing_instansi?: true
  }

  export type Nilai_instansiMaxAggregateInputType = {
    id?: true
    tanggal?: true
    nilai_angka?: true
    nilai_huruf?: true
    nim?: true
    id_pembimbing_instansi?: true
  }

  export type Nilai_instansiCountAggregateInputType = {
    id?: true
    tanggal?: true
    nilai_angka?: true
    nilai_huruf?: true
    nim?: true
    id_pembimbing_instansi?: true
    _all?: true
  }

  export type Nilai_instansiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nilai_instansi to aggregate.
     */
    where?: nilai_instansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nilai_instansis to fetch.
     */
    orderBy?: nilai_instansiOrderByWithRelationInput | nilai_instansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: nilai_instansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nilai_instansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nilai_instansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nilai_instansis
    **/
    _count?: true | Nilai_instansiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Nilai_instansiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Nilai_instansiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Nilai_instansiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Nilai_instansiMaxAggregateInputType
  }

  export type GetNilai_instansiAggregateType<T extends Nilai_instansiAggregateArgs> = {
        [P in keyof T & keyof AggregateNilai_instansi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNilai_instansi[P]>
      : GetScalarType<T[P], AggregateNilai_instansi[P]>
  }




  export type nilai_instansiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nilai_instansiWhereInput
    orderBy?: nilai_instansiOrderByWithAggregationInput | nilai_instansiOrderByWithAggregationInput[]
    by: Nilai_instansiScalarFieldEnum[] | Nilai_instansiScalarFieldEnum
    having?: nilai_instansiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Nilai_instansiCountAggregateInputType | true
    _avg?: Nilai_instansiAvgAggregateInputType
    _sum?: Nilai_instansiSumAggregateInputType
    _min?: Nilai_instansiMinAggregateInputType
    _max?: Nilai_instansiMaxAggregateInputType
  }

  export type Nilai_instansiGroupByOutputType = {
    id: string
    tanggal: Date
    nilai_angka: number
    nilai_huruf: string
    nim: string
    id_pembimbing_instansi: string
    _count: Nilai_instansiCountAggregateOutputType | null
    _avg: Nilai_instansiAvgAggregateOutputType | null
    _sum: Nilai_instansiSumAggregateOutputType | null
    _min: Nilai_instansiMinAggregateOutputType | null
    _max: Nilai_instansiMaxAggregateOutputType | null
  }

  type GetNilai_instansiGroupByPayload<T extends nilai_instansiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Nilai_instansiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Nilai_instansiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Nilai_instansiGroupByOutputType[P]>
            : GetScalarType<T[P], Nilai_instansiGroupByOutputType[P]>
        }
      >
    >


  export type nilai_instansiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    nilai_angka?: boolean
    nilai_huruf?: boolean
    nim?: boolean
    id_pembimbing_instansi?: boolean
    pembimbing_instansi?: boolean | pembimbing_instansiDefaultArgs<ExtArgs>
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nilai_instansi"]>

  export type nilai_instansiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    nilai_angka?: boolean
    nilai_huruf?: boolean
    nim?: boolean
    id_pembimbing_instansi?: boolean
    pembimbing_instansi?: boolean | pembimbing_instansiDefaultArgs<ExtArgs>
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nilai_instansi"]>

  export type nilai_instansiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    nilai_angka?: boolean
    nilai_huruf?: boolean
    nim?: boolean
    id_pembimbing_instansi?: boolean
    pembimbing_instansi?: boolean | pembimbing_instansiDefaultArgs<ExtArgs>
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nilai_instansi"]>

  export type nilai_instansiSelectScalar = {
    id?: boolean
    tanggal?: boolean
    nilai_angka?: boolean
    nilai_huruf?: boolean
    nim?: boolean
    id_pembimbing_instansi?: boolean
  }

  export type nilai_instansiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanggal" | "nilai_angka" | "nilai_huruf" | "nim" | "id_pembimbing_instansi", ExtArgs["result"]["nilai_instansi"]>
  export type nilai_instansiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembimbing_instansi?: boolean | pembimbing_instansiDefaultArgs<ExtArgs>
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }
  export type nilai_instansiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembimbing_instansi?: boolean | pembimbing_instansiDefaultArgs<ExtArgs>
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }
  export type nilai_instansiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembimbing_instansi?: boolean | pembimbing_instansiDefaultArgs<ExtArgs>
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }

  export type $nilai_instansiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "nilai_instansi"
    objects: {
      pembimbing_instansi: Prisma.$pembimbing_instansiPayload<ExtArgs>
      mahasiswa: Prisma.$mahasiswaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanggal: Date
      nilai_angka: number
      nilai_huruf: string
      nim: string
      id_pembimbing_instansi: string
    }, ExtArgs["result"]["nilai_instansi"]>
    composites: {}
  }

  type nilai_instansiGetPayload<S extends boolean | null | undefined | nilai_instansiDefaultArgs> = $Result.GetResult<Prisma.$nilai_instansiPayload, S>

  type nilai_instansiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<nilai_instansiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Nilai_instansiCountAggregateInputType | true
    }

  export interface nilai_instansiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['nilai_instansi'], meta: { name: 'nilai_instansi' } }
    /**
     * Find zero or one Nilai_instansi that matches the filter.
     * @param {nilai_instansiFindUniqueArgs} args - Arguments to find a Nilai_instansi
     * @example
     * // Get one Nilai_instansi
     * const nilai_instansi = await prisma.nilai_instansi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends nilai_instansiFindUniqueArgs>(args: SelectSubset<T, nilai_instansiFindUniqueArgs<ExtArgs>>): Prisma__nilai_instansiClient<$Result.GetResult<Prisma.$nilai_instansiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nilai_instansi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {nilai_instansiFindUniqueOrThrowArgs} args - Arguments to find a Nilai_instansi
     * @example
     * // Get one Nilai_instansi
     * const nilai_instansi = await prisma.nilai_instansi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends nilai_instansiFindUniqueOrThrowArgs>(args: SelectSubset<T, nilai_instansiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__nilai_instansiClient<$Result.GetResult<Prisma.$nilai_instansiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nilai_instansi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nilai_instansiFindFirstArgs} args - Arguments to find a Nilai_instansi
     * @example
     * // Get one Nilai_instansi
     * const nilai_instansi = await prisma.nilai_instansi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends nilai_instansiFindFirstArgs>(args?: SelectSubset<T, nilai_instansiFindFirstArgs<ExtArgs>>): Prisma__nilai_instansiClient<$Result.GetResult<Prisma.$nilai_instansiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nilai_instansi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nilai_instansiFindFirstOrThrowArgs} args - Arguments to find a Nilai_instansi
     * @example
     * // Get one Nilai_instansi
     * const nilai_instansi = await prisma.nilai_instansi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends nilai_instansiFindFirstOrThrowArgs>(args?: SelectSubset<T, nilai_instansiFindFirstOrThrowArgs<ExtArgs>>): Prisma__nilai_instansiClient<$Result.GetResult<Prisma.$nilai_instansiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nilai_instansis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nilai_instansiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nilai_instansis
     * const nilai_instansis = await prisma.nilai_instansi.findMany()
     * 
     * // Get first 10 Nilai_instansis
     * const nilai_instansis = await prisma.nilai_instansi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nilai_instansiWithIdOnly = await prisma.nilai_instansi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends nilai_instansiFindManyArgs>(args?: SelectSubset<T, nilai_instansiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nilai_instansiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nilai_instansi.
     * @param {nilai_instansiCreateArgs} args - Arguments to create a Nilai_instansi.
     * @example
     * // Create one Nilai_instansi
     * const Nilai_instansi = await prisma.nilai_instansi.create({
     *   data: {
     *     // ... data to create a Nilai_instansi
     *   }
     * })
     * 
     */
    create<T extends nilai_instansiCreateArgs>(args: SelectSubset<T, nilai_instansiCreateArgs<ExtArgs>>): Prisma__nilai_instansiClient<$Result.GetResult<Prisma.$nilai_instansiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nilai_instansis.
     * @param {nilai_instansiCreateManyArgs} args - Arguments to create many Nilai_instansis.
     * @example
     * // Create many Nilai_instansis
     * const nilai_instansi = await prisma.nilai_instansi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends nilai_instansiCreateManyArgs>(args?: SelectSubset<T, nilai_instansiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nilai_instansis and returns the data saved in the database.
     * @param {nilai_instansiCreateManyAndReturnArgs} args - Arguments to create many Nilai_instansis.
     * @example
     * // Create many Nilai_instansis
     * const nilai_instansi = await prisma.nilai_instansi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nilai_instansis and only return the `id`
     * const nilai_instansiWithIdOnly = await prisma.nilai_instansi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends nilai_instansiCreateManyAndReturnArgs>(args?: SelectSubset<T, nilai_instansiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nilai_instansiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nilai_instansi.
     * @param {nilai_instansiDeleteArgs} args - Arguments to delete one Nilai_instansi.
     * @example
     * // Delete one Nilai_instansi
     * const Nilai_instansi = await prisma.nilai_instansi.delete({
     *   where: {
     *     // ... filter to delete one Nilai_instansi
     *   }
     * })
     * 
     */
    delete<T extends nilai_instansiDeleteArgs>(args: SelectSubset<T, nilai_instansiDeleteArgs<ExtArgs>>): Prisma__nilai_instansiClient<$Result.GetResult<Prisma.$nilai_instansiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nilai_instansi.
     * @param {nilai_instansiUpdateArgs} args - Arguments to update one Nilai_instansi.
     * @example
     * // Update one Nilai_instansi
     * const nilai_instansi = await prisma.nilai_instansi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends nilai_instansiUpdateArgs>(args: SelectSubset<T, nilai_instansiUpdateArgs<ExtArgs>>): Prisma__nilai_instansiClient<$Result.GetResult<Prisma.$nilai_instansiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nilai_instansis.
     * @param {nilai_instansiDeleteManyArgs} args - Arguments to filter Nilai_instansis to delete.
     * @example
     * // Delete a few Nilai_instansis
     * const { count } = await prisma.nilai_instansi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends nilai_instansiDeleteManyArgs>(args?: SelectSubset<T, nilai_instansiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nilai_instansis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nilai_instansiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nilai_instansis
     * const nilai_instansi = await prisma.nilai_instansi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends nilai_instansiUpdateManyArgs>(args: SelectSubset<T, nilai_instansiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nilai_instansis and returns the data updated in the database.
     * @param {nilai_instansiUpdateManyAndReturnArgs} args - Arguments to update many Nilai_instansis.
     * @example
     * // Update many Nilai_instansis
     * const nilai_instansi = await prisma.nilai_instansi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nilai_instansis and only return the `id`
     * const nilai_instansiWithIdOnly = await prisma.nilai_instansi.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends nilai_instansiUpdateManyAndReturnArgs>(args: SelectSubset<T, nilai_instansiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nilai_instansiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nilai_instansi.
     * @param {nilai_instansiUpsertArgs} args - Arguments to update or create a Nilai_instansi.
     * @example
     * // Update or create a Nilai_instansi
     * const nilai_instansi = await prisma.nilai_instansi.upsert({
     *   create: {
     *     // ... data to create a Nilai_instansi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nilai_instansi we want to update
     *   }
     * })
     */
    upsert<T extends nilai_instansiUpsertArgs>(args: SelectSubset<T, nilai_instansiUpsertArgs<ExtArgs>>): Prisma__nilai_instansiClient<$Result.GetResult<Prisma.$nilai_instansiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nilai_instansis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nilai_instansiCountArgs} args - Arguments to filter Nilai_instansis to count.
     * @example
     * // Count the number of Nilai_instansis
     * const count = await prisma.nilai_instansi.count({
     *   where: {
     *     // ... the filter for the Nilai_instansis we want to count
     *   }
     * })
    **/
    count<T extends nilai_instansiCountArgs>(
      args?: Subset<T, nilai_instansiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Nilai_instansiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nilai_instansi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nilai_instansiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Nilai_instansiAggregateArgs>(args: Subset<T, Nilai_instansiAggregateArgs>): Prisma.PrismaPromise<GetNilai_instansiAggregateType<T>>

    /**
     * Group by Nilai_instansi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nilai_instansiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends nilai_instansiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: nilai_instansiGroupByArgs['orderBy'] }
        : { orderBy?: nilai_instansiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, nilai_instansiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNilai_instansiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the nilai_instansi model
   */
  readonly fields: nilai_instansiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for nilai_instansi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__nilai_instansiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pembimbing_instansi<T extends pembimbing_instansiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pembimbing_instansiDefaultArgs<ExtArgs>>): Prisma__pembimbing_instansiClient<$Result.GetResult<Prisma.$pembimbing_instansiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mahasiswa<T extends mahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswaDefaultArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the nilai_instansi model
   */
  interface nilai_instansiFieldRefs {
    readonly id: FieldRef<"nilai_instansi", 'String'>
    readonly tanggal: FieldRef<"nilai_instansi", 'DateTime'>
    readonly nilai_angka: FieldRef<"nilai_instansi", 'Float'>
    readonly nilai_huruf: FieldRef<"nilai_instansi", 'String'>
    readonly nim: FieldRef<"nilai_instansi", 'String'>
    readonly id_pembimbing_instansi: FieldRef<"nilai_instansi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * nilai_instansi findUnique
   */
  export type nilai_instansiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai_instansi
     */
    select?: nilai_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai_instansi
     */
    omit?: nilai_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilai_instansiInclude<ExtArgs> | null
    /**
     * Filter, which nilai_instansi to fetch.
     */
    where: nilai_instansiWhereUniqueInput
  }

  /**
   * nilai_instansi findUniqueOrThrow
   */
  export type nilai_instansiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai_instansi
     */
    select?: nilai_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai_instansi
     */
    omit?: nilai_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilai_instansiInclude<ExtArgs> | null
    /**
     * Filter, which nilai_instansi to fetch.
     */
    where: nilai_instansiWhereUniqueInput
  }

  /**
   * nilai_instansi findFirst
   */
  export type nilai_instansiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai_instansi
     */
    select?: nilai_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai_instansi
     */
    omit?: nilai_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilai_instansiInclude<ExtArgs> | null
    /**
     * Filter, which nilai_instansi to fetch.
     */
    where?: nilai_instansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nilai_instansis to fetch.
     */
    orderBy?: nilai_instansiOrderByWithRelationInput | nilai_instansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nilai_instansis.
     */
    cursor?: nilai_instansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nilai_instansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nilai_instansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nilai_instansis.
     */
    distinct?: Nilai_instansiScalarFieldEnum | Nilai_instansiScalarFieldEnum[]
  }

  /**
   * nilai_instansi findFirstOrThrow
   */
  export type nilai_instansiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai_instansi
     */
    select?: nilai_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai_instansi
     */
    omit?: nilai_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilai_instansiInclude<ExtArgs> | null
    /**
     * Filter, which nilai_instansi to fetch.
     */
    where?: nilai_instansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nilai_instansis to fetch.
     */
    orderBy?: nilai_instansiOrderByWithRelationInput | nilai_instansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nilai_instansis.
     */
    cursor?: nilai_instansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nilai_instansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nilai_instansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nilai_instansis.
     */
    distinct?: Nilai_instansiScalarFieldEnum | Nilai_instansiScalarFieldEnum[]
  }

  /**
   * nilai_instansi findMany
   */
  export type nilai_instansiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai_instansi
     */
    select?: nilai_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai_instansi
     */
    omit?: nilai_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilai_instansiInclude<ExtArgs> | null
    /**
     * Filter, which nilai_instansis to fetch.
     */
    where?: nilai_instansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nilai_instansis to fetch.
     */
    orderBy?: nilai_instansiOrderByWithRelationInput | nilai_instansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nilai_instansis.
     */
    cursor?: nilai_instansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nilai_instansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nilai_instansis.
     */
    skip?: number
    distinct?: Nilai_instansiScalarFieldEnum | Nilai_instansiScalarFieldEnum[]
  }

  /**
   * nilai_instansi create
   */
  export type nilai_instansiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai_instansi
     */
    select?: nilai_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai_instansi
     */
    omit?: nilai_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilai_instansiInclude<ExtArgs> | null
    /**
     * The data needed to create a nilai_instansi.
     */
    data: XOR<nilai_instansiCreateInput, nilai_instansiUncheckedCreateInput>
  }

  /**
   * nilai_instansi createMany
   */
  export type nilai_instansiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many nilai_instansis.
     */
    data: nilai_instansiCreateManyInput | nilai_instansiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nilai_instansi createManyAndReturn
   */
  export type nilai_instansiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai_instansi
     */
    select?: nilai_instansiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the nilai_instansi
     */
    omit?: nilai_instansiOmit<ExtArgs> | null
    /**
     * The data used to create many nilai_instansis.
     */
    data: nilai_instansiCreateManyInput | nilai_instansiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilai_instansiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * nilai_instansi update
   */
  export type nilai_instansiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai_instansi
     */
    select?: nilai_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai_instansi
     */
    omit?: nilai_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilai_instansiInclude<ExtArgs> | null
    /**
     * The data needed to update a nilai_instansi.
     */
    data: XOR<nilai_instansiUpdateInput, nilai_instansiUncheckedUpdateInput>
    /**
     * Choose, which nilai_instansi to update.
     */
    where: nilai_instansiWhereUniqueInput
  }

  /**
   * nilai_instansi updateMany
   */
  export type nilai_instansiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update nilai_instansis.
     */
    data: XOR<nilai_instansiUpdateManyMutationInput, nilai_instansiUncheckedUpdateManyInput>
    /**
     * Filter which nilai_instansis to update
     */
    where?: nilai_instansiWhereInput
    /**
     * Limit how many nilai_instansis to update.
     */
    limit?: number
  }

  /**
   * nilai_instansi updateManyAndReturn
   */
  export type nilai_instansiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai_instansi
     */
    select?: nilai_instansiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the nilai_instansi
     */
    omit?: nilai_instansiOmit<ExtArgs> | null
    /**
     * The data used to update nilai_instansis.
     */
    data: XOR<nilai_instansiUpdateManyMutationInput, nilai_instansiUncheckedUpdateManyInput>
    /**
     * Filter which nilai_instansis to update
     */
    where?: nilai_instansiWhereInput
    /**
     * Limit how many nilai_instansis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilai_instansiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * nilai_instansi upsert
   */
  export type nilai_instansiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai_instansi
     */
    select?: nilai_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai_instansi
     */
    omit?: nilai_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilai_instansiInclude<ExtArgs> | null
    /**
     * The filter to search for the nilai_instansi to update in case it exists.
     */
    where: nilai_instansiWhereUniqueInput
    /**
     * In case the nilai_instansi found by the `where` argument doesn't exist, create a new nilai_instansi with this data.
     */
    create: XOR<nilai_instansiCreateInput, nilai_instansiUncheckedCreateInput>
    /**
     * In case the nilai_instansi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nilai_instansiUpdateInput, nilai_instansiUncheckedUpdateInput>
  }

  /**
   * nilai_instansi delete
   */
  export type nilai_instansiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai_instansi
     */
    select?: nilai_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai_instansi
     */
    omit?: nilai_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilai_instansiInclude<ExtArgs> | null
    /**
     * Filter which nilai_instansi to delete.
     */
    where: nilai_instansiWhereUniqueInput
  }

  /**
   * nilai_instansi deleteMany
   */
  export type nilai_instansiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nilai_instansis to delete
     */
    where?: nilai_instansiWhereInput
    /**
     * Limit how many nilai_instansis to delete.
     */
    limit?: number
  }

  /**
   * nilai_instansi without action
   */
  export type nilai_instansiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai_instansi
     */
    select?: nilai_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai_instansi
     */
    omit?: nilai_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilai_instansiInclude<ExtArgs> | null
  }


  /**
   * Model pembimbing_instansi
   */

  export type AggregatePembimbing_instansi = {
    _count: Pembimbing_instansiCountAggregateOutputType | null
    _avg: Pembimbing_instansiAvgAggregateOutputType | null
    _sum: Pembimbing_instansiSumAggregateOutputType | null
    _min: Pembimbing_instansiMinAggregateOutputType | null
    _max: Pembimbing_instansiMaxAggregateOutputType | null
  }

  export type Pembimbing_instansiAvgAggregateOutputType = {
    id_instansi: number | null
  }

  export type Pembimbing_instansiSumAggregateOutputType = {
    id_instansi: number | null
  }

  export type Pembimbing_instansiMinAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    jabatan: string | null
    no_hp: string | null
    id_instansi: number | null
  }

  export type Pembimbing_instansiMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    jabatan: string | null
    no_hp: string | null
    id_instansi: number | null
  }

  export type Pembimbing_instansiCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    jabatan: number
    no_hp: number
    id_instansi: number
    _all: number
  }


  export type Pembimbing_instansiAvgAggregateInputType = {
    id_instansi?: true
  }

  export type Pembimbing_instansiSumAggregateInputType = {
    id_instansi?: true
  }

  export type Pembimbing_instansiMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    jabatan?: true
    no_hp?: true
    id_instansi?: true
  }

  export type Pembimbing_instansiMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    jabatan?: true
    no_hp?: true
    id_instansi?: true
  }

  export type Pembimbing_instansiCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    jabatan?: true
    no_hp?: true
    id_instansi?: true
    _all?: true
  }

  export type Pembimbing_instansiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pembimbing_instansi to aggregate.
     */
    where?: pembimbing_instansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pembimbing_instansis to fetch.
     */
    orderBy?: pembimbing_instansiOrderByWithRelationInput | pembimbing_instansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pembimbing_instansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pembimbing_instansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pembimbing_instansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pembimbing_instansis
    **/
    _count?: true | Pembimbing_instansiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pembimbing_instansiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pembimbing_instansiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pembimbing_instansiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pembimbing_instansiMaxAggregateInputType
  }

  export type GetPembimbing_instansiAggregateType<T extends Pembimbing_instansiAggregateArgs> = {
        [P in keyof T & keyof AggregatePembimbing_instansi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePembimbing_instansi[P]>
      : GetScalarType<T[P], AggregatePembimbing_instansi[P]>
  }




  export type pembimbing_instansiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pembimbing_instansiWhereInput
    orderBy?: pembimbing_instansiOrderByWithAggregationInput | pembimbing_instansiOrderByWithAggregationInput[]
    by: Pembimbing_instansiScalarFieldEnum[] | Pembimbing_instansiScalarFieldEnum
    having?: pembimbing_instansiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pembimbing_instansiCountAggregateInputType | true
    _avg?: Pembimbing_instansiAvgAggregateInputType
    _sum?: Pembimbing_instansiSumAggregateInputType
    _min?: Pembimbing_instansiMinAggregateInputType
    _max?: Pembimbing_instansiMaxAggregateInputType
  }

  export type Pembimbing_instansiGroupByOutputType = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
    id_instansi: number
    _count: Pembimbing_instansiCountAggregateOutputType | null
    _avg: Pembimbing_instansiAvgAggregateOutputType | null
    _sum: Pembimbing_instansiSumAggregateOutputType | null
    _min: Pembimbing_instansiMinAggregateOutputType | null
    _max: Pembimbing_instansiMaxAggregateOutputType | null
  }

  type GetPembimbing_instansiGroupByPayload<T extends pembimbing_instansiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pembimbing_instansiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pembimbing_instansiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pembimbing_instansiGroupByOutputType[P]>
            : GetScalarType<T[P], Pembimbing_instansiGroupByOutputType[P]>
        }
      >
    >


  export type pembimbing_instansiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    jabatan?: boolean
    no_hp?: boolean
    id_instansi?: boolean
    nilai_instansi?: boolean | pembimbing_instansi$nilai_instansiArgs<ExtArgs>
    instansi?: boolean | instansiDefaultArgs<ExtArgs>
    pendaftaran_kp?: boolean | pembimbing_instansi$pendaftaran_kpArgs<ExtArgs>
    _count?: boolean | Pembimbing_instansiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembimbing_instansi"]>

  export type pembimbing_instansiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    jabatan?: boolean
    no_hp?: boolean
    id_instansi?: boolean
    instansi?: boolean | instansiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembimbing_instansi"]>

  export type pembimbing_instansiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    jabatan?: boolean
    no_hp?: boolean
    id_instansi?: boolean
    instansi?: boolean | instansiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembimbing_instansi"]>

  export type pembimbing_instansiSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    jabatan?: boolean
    no_hp?: boolean
    id_instansi?: boolean
  }

  export type pembimbing_instansiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "email" | "jabatan" | "no_hp" | "id_instansi", ExtArgs["result"]["pembimbing_instansi"]>
  export type pembimbing_instansiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nilai_instansi?: boolean | pembimbing_instansi$nilai_instansiArgs<ExtArgs>
    instansi?: boolean | instansiDefaultArgs<ExtArgs>
    pendaftaran_kp?: boolean | pembimbing_instansi$pendaftaran_kpArgs<ExtArgs>
    _count?: boolean | Pembimbing_instansiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pembimbing_instansiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instansi?: boolean | instansiDefaultArgs<ExtArgs>
  }
  export type pembimbing_instansiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instansi?: boolean | instansiDefaultArgs<ExtArgs>
  }

  export type $pembimbing_instansiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pembimbing_instansi"
    objects: {
      nilai_instansi: Prisma.$nilai_instansiPayload<ExtArgs>[]
      instansi: Prisma.$instansiPayload<ExtArgs>
      pendaftaran_kp: Prisma.$pendaftaran_kpPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      email: string
      jabatan: string
      no_hp: string
      id_instansi: number
    }, ExtArgs["result"]["pembimbing_instansi"]>
    composites: {}
  }

  type pembimbing_instansiGetPayload<S extends boolean | null | undefined | pembimbing_instansiDefaultArgs> = $Result.GetResult<Prisma.$pembimbing_instansiPayload, S>

  type pembimbing_instansiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pembimbing_instansiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pembimbing_instansiCountAggregateInputType | true
    }

  export interface pembimbing_instansiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pembimbing_instansi'], meta: { name: 'pembimbing_instansi' } }
    /**
     * Find zero or one Pembimbing_instansi that matches the filter.
     * @param {pembimbing_instansiFindUniqueArgs} args - Arguments to find a Pembimbing_instansi
     * @example
     * // Get one Pembimbing_instansi
     * const pembimbing_instansi = await prisma.pembimbing_instansi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pembimbing_instansiFindUniqueArgs>(args: SelectSubset<T, pembimbing_instansiFindUniqueArgs<ExtArgs>>): Prisma__pembimbing_instansiClient<$Result.GetResult<Prisma.$pembimbing_instansiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pembimbing_instansi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pembimbing_instansiFindUniqueOrThrowArgs} args - Arguments to find a Pembimbing_instansi
     * @example
     * // Get one Pembimbing_instansi
     * const pembimbing_instansi = await prisma.pembimbing_instansi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pembimbing_instansiFindUniqueOrThrowArgs>(args: SelectSubset<T, pembimbing_instansiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pembimbing_instansiClient<$Result.GetResult<Prisma.$pembimbing_instansiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pembimbing_instansi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pembimbing_instansiFindFirstArgs} args - Arguments to find a Pembimbing_instansi
     * @example
     * // Get one Pembimbing_instansi
     * const pembimbing_instansi = await prisma.pembimbing_instansi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pembimbing_instansiFindFirstArgs>(args?: SelectSubset<T, pembimbing_instansiFindFirstArgs<ExtArgs>>): Prisma__pembimbing_instansiClient<$Result.GetResult<Prisma.$pembimbing_instansiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pembimbing_instansi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pembimbing_instansiFindFirstOrThrowArgs} args - Arguments to find a Pembimbing_instansi
     * @example
     * // Get one Pembimbing_instansi
     * const pembimbing_instansi = await prisma.pembimbing_instansi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pembimbing_instansiFindFirstOrThrowArgs>(args?: SelectSubset<T, pembimbing_instansiFindFirstOrThrowArgs<ExtArgs>>): Prisma__pembimbing_instansiClient<$Result.GetResult<Prisma.$pembimbing_instansiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pembimbing_instansis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pembimbing_instansiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pembimbing_instansis
     * const pembimbing_instansis = await prisma.pembimbing_instansi.findMany()
     * 
     * // Get first 10 Pembimbing_instansis
     * const pembimbing_instansis = await prisma.pembimbing_instansi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pembimbing_instansiWithIdOnly = await prisma.pembimbing_instansi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pembimbing_instansiFindManyArgs>(args?: SelectSubset<T, pembimbing_instansiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pembimbing_instansiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pembimbing_instansi.
     * @param {pembimbing_instansiCreateArgs} args - Arguments to create a Pembimbing_instansi.
     * @example
     * // Create one Pembimbing_instansi
     * const Pembimbing_instansi = await prisma.pembimbing_instansi.create({
     *   data: {
     *     // ... data to create a Pembimbing_instansi
     *   }
     * })
     * 
     */
    create<T extends pembimbing_instansiCreateArgs>(args: SelectSubset<T, pembimbing_instansiCreateArgs<ExtArgs>>): Prisma__pembimbing_instansiClient<$Result.GetResult<Prisma.$pembimbing_instansiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pembimbing_instansis.
     * @param {pembimbing_instansiCreateManyArgs} args - Arguments to create many Pembimbing_instansis.
     * @example
     * // Create many Pembimbing_instansis
     * const pembimbing_instansi = await prisma.pembimbing_instansi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pembimbing_instansiCreateManyArgs>(args?: SelectSubset<T, pembimbing_instansiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pembimbing_instansis and returns the data saved in the database.
     * @param {pembimbing_instansiCreateManyAndReturnArgs} args - Arguments to create many Pembimbing_instansis.
     * @example
     * // Create many Pembimbing_instansis
     * const pembimbing_instansi = await prisma.pembimbing_instansi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pembimbing_instansis and only return the `id`
     * const pembimbing_instansiWithIdOnly = await prisma.pembimbing_instansi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pembimbing_instansiCreateManyAndReturnArgs>(args?: SelectSubset<T, pembimbing_instansiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pembimbing_instansiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pembimbing_instansi.
     * @param {pembimbing_instansiDeleteArgs} args - Arguments to delete one Pembimbing_instansi.
     * @example
     * // Delete one Pembimbing_instansi
     * const Pembimbing_instansi = await prisma.pembimbing_instansi.delete({
     *   where: {
     *     // ... filter to delete one Pembimbing_instansi
     *   }
     * })
     * 
     */
    delete<T extends pembimbing_instansiDeleteArgs>(args: SelectSubset<T, pembimbing_instansiDeleteArgs<ExtArgs>>): Prisma__pembimbing_instansiClient<$Result.GetResult<Prisma.$pembimbing_instansiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pembimbing_instansi.
     * @param {pembimbing_instansiUpdateArgs} args - Arguments to update one Pembimbing_instansi.
     * @example
     * // Update one Pembimbing_instansi
     * const pembimbing_instansi = await prisma.pembimbing_instansi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pembimbing_instansiUpdateArgs>(args: SelectSubset<T, pembimbing_instansiUpdateArgs<ExtArgs>>): Prisma__pembimbing_instansiClient<$Result.GetResult<Prisma.$pembimbing_instansiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pembimbing_instansis.
     * @param {pembimbing_instansiDeleteManyArgs} args - Arguments to filter Pembimbing_instansis to delete.
     * @example
     * // Delete a few Pembimbing_instansis
     * const { count } = await prisma.pembimbing_instansi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pembimbing_instansiDeleteManyArgs>(args?: SelectSubset<T, pembimbing_instansiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pembimbing_instansis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pembimbing_instansiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pembimbing_instansis
     * const pembimbing_instansi = await prisma.pembimbing_instansi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pembimbing_instansiUpdateManyArgs>(args: SelectSubset<T, pembimbing_instansiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pembimbing_instansis and returns the data updated in the database.
     * @param {pembimbing_instansiUpdateManyAndReturnArgs} args - Arguments to update many Pembimbing_instansis.
     * @example
     * // Update many Pembimbing_instansis
     * const pembimbing_instansi = await prisma.pembimbing_instansi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pembimbing_instansis and only return the `id`
     * const pembimbing_instansiWithIdOnly = await prisma.pembimbing_instansi.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pembimbing_instansiUpdateManyAndReturnArgs>(args: SelectSubset<T, pembimbing_instansiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pembimbing_instansiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pembimbing_instansi.
     * @param {pembimbing_instansiUpsertArgs} args - Arguments to update or create a Pembimbing_instansi.
     * @example
     * // Update or create a Pembimbing_instansi
     * const pembimbing_instansi = await prisma.pembimbing_instansi.upsert({
     *   create: {
     *     // ... data to create a Pembimbing_instansi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pembimbing_instansi we want to update
     *   }
     * })
     */
    upsert<T extends pembimbing_instansiUpsertArgs>(args: SelectSubset<T, pembimbing_instansiUpsertArgs<ExtArgs>>): Prisma__pembimbing_instansiClient<$Result.GetResult<Prisma.$pembimbing_instansiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pembimbing_instansis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pembimbing_instansiCountArgs} args - Arguments to filter Pembimbing_instansis to count.
     * @example
     * // Count the number of Pembimbing_instansis
     * const count = await prisma.pembimbing_instansi.count({
     *   where: {
     *     // ... the filter for the Pembimbing_instansis we want to count
     *   }
     * })
    **/
    count<T extends pembimbing_instansiCountArgs>(
      args?: Subset<T, pembimbing_instansiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pembimbing_instansiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pembimbing_instansi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pembimbing_instansiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pembimbing_instansiAggregateArgs>(args: Subset<T, Pembimbing_instansiAggregateArgs>): Prisma.PrismaPromise<GetPembimbing_instansiAggregateType<T>>

    /**
     * Group by Pembimbing_instansi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pembimbing_instansiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pembimbing_instansiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pembimbing_instansiGroupByArgs['orderBy'] }
        : { orderBy?: pembimbing_instansiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pembimbing_instansiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPembimbing_instansiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pembimbing_instansi model
   */
  readonly fields: pembimbing_instansiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pembimbing_instansi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pembimbing_instansiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nilai_instansi<T extends pembimbing_instansi$nilai_instansiArgs<ExtArgs> = {}>(args?: Subset<T, pembimbing_instansi$nilai_instansiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nilai_instansiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    instansi<T extends instansiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, instansiDefaultArgs<ExtArgs>>): Prisma__instansiClient<$Result.GetResult<Prisma.$instansiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pendaftaran_kp<T extends pembimbing_instansi$pendaftaran_kpArgs<ExtArgs> = {}>(args?: Subset<T, pembimbing_instansi$pendaftaran_kpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendaftaran_kpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pembimbing_instansi model
   */
  interface pembimbing_instansiFieldRefs {
    readonly id: FieldRef<"pembimbing_instansi", 'String'>
    readonly nama: FieldRef<"pembimbing_instansi", 'String'>
    readonly email: FieldRef<"pembimbing_instansi", 'String'>
    readonly jabatan: FieldRef<"pembimbing_instansi", 'String'>
    readonly no_hp: FieldRef<"pembimbing_instansi", 'String'>
    readonly id_instansi: FieldRef<"pembimbing_instansi", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pembimbing_instansi findUnique
   */
  export type pembimbing_instansiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembimbing_instansi
     */
    select?: pembimbing_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembimbing_instansi
     */
    omit?: pembimbing_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembimbing_instansiInclude<ExtArgs> | null
    /**
     * Filter, which pembimbing_instansi to fetch.
     */
    where: pembimbing_instansiWhereUniqueInput
  }

  /**
   * pembimbing_instansi findUniqueOrThrow
   */
  export type pembimbing_instansiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembimbing_instansi
     */
    select?: pembimbing_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembimbing_instansi
     */
    omit?: pembimbing_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembimbing_instansiInclude<ExtArgs> | null
    /**
     * Filter, which pembimbing_instansi to fetch.
     */
    where: pembimbing_instansiWhereUniqueInput
  }

  /**
   * pembimbing_instansi findFirst
   */
  export type pembimbing_instansiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembimbing_instansi
     */
    select?: pembimbing_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembimbing_instansi
     */
    omit?: pembimbing_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembimbing_instansiInclude<ExtArgs> | null
    /**
     * Filter, which pembimbing_instansi to fetch.
     */
    where?: pembimbing_instansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pembimbing_instansis to fetch.
     */
    orderBy?: pembimbing_instansiOrderByWithRelationInput | pembimbing_instansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pembimbing_instansis.
     */
    cursor?: pembimbing_instansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pembimbing_instansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pembimbing_instansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pembimbing_instansis.
     */
    distinct?: Pembimbing_instansiScalarFieldEnum | Pembimbing_instansiScalarFieldEnum[]
  }

  /**
   * pembimbing_instansi findFirstOrThrow
   */
  export type pembimbing_instansiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembimbing_instansi
     */
    select?: pembimbing_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembimbing_instansi
     */
    omit?: pembimbing_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembimbing_instansiInclude<ExtArgs> | null
    /**
     * Filter, which pembimbing_instansi to fetch.
     */
    where?: pembimbing_instansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pembimbing_instansis to fetch.
     */
    orderBy?: pembimbing_instansiOrderByWithRelationInput | pembimbing_instansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pembimbing_instansis.
     */
    cursor?: pembimbing_instansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pembimbing_instansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pembimbing_instansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pembimbing_instansis.
     */
    distinct?: Pembimbing_instansiScalarFieldEnum | Pembimbing_instansiScalarFieldEnum[]
  }

  /**
   * pembimbing_instansi findMany
   */
  export type pembimbing_instansiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembimbing_instansi
     */
    select?: pembimbing_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembimbing_instansi
     */
    omit?: pembimbing_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembimbing_instansiInclude<ExtArgs> | null
    /**
     * Filter, which pembimbing_instansis to fetch.
     */
    where?: pembimbing_instansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pembimbing_instansis to fetch.
     */
    orderBy?: pembimbing_instansiOrderByWithRelationInput | pembimbing_instansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pembimbing_instansis.
     */
    cursor?: pembimbing_instansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pembimbing_instansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pembimbing_instansis.
     */
    skip?: number
    distinct?: Pembimbing_instansiScalarFieldEnum | Pembimbing_instansiScalarFieldEnum[]
  }

  /**
   * pembimbing_instansi create
   */
  export type pembimbing_instansiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembimbing_instansi
     */
    select?: pembimbing_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembimbing_instansi
     */
    omit?: pembimbing_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembimbing_instansiInclude<ExtArgs> | null
    /**
     * The data needed to create a pembimbing_instansi.
     */
    data: XOR<pembimbing_instansiCreateInput, pembimbing_instansiUncheckedCreateInput>
  }

  /**
   * pembimbing_instansi createMany
   */
  export type pembimbing_instansiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pembimbing_instansis.
     */
    data: pembimbing_instansiCreateManyInput | pembimbing_instansiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pembimbing_instansi createManyAndReturn
   */
  export type pembimbing_instansiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembimbing_instansi
     */
    select?: pembimbing_instansiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pembimbing_instansi
     */
    omit?: pembimbing_instansiOmit<ExtArgs> | null
    /**
     * The data used to create many pembimbing_instansis.
     */
    data: pembimbing_instansiCreateManyInput | pembimbing_instansiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembimbing_instansiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pembimbing_instansi update
   */
  export type pembimbing_instansiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembimbing_instansi
     */
    select?: pembimbing_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembimbing_instansi
     */
    omit?: pembimbing_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembimbing_instansiInclude<ExtArgs> | null
    /**
     * The data needed to update a pembimbing_instansi.
     */
    data: XOR<pembimbing_instansiUpdateInput, pembimbing_instansiUncheckedUpdateInput>
    /**
     * Choose, which pembimbing_instansi to update.
     */
    where: pembimbing_instansiWhereUniqueInput
  }

  /**
   * pembimbing_instansi updateMany
   */
  export type pembimbing_instansiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pembimbing_instansis.
     */
    data: XOR<pembimbing_instansiUpdateManyMutationInput, pembimbing_instansiUncheckedUpdateManyInput>
    /**
     * Filter which pembimbing_instansis to update
     */
    where?: pembimbing_instansiWhereInput
    /**
     * Limit how many pembimbing_instansis to update.
     */
    limit?: number
  }

  /**
   * pembimbing_instansi updateManyAndReturn
   */
  export type pembimbing_instansiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembimbing_instansi
     */
    select?: pembimbing_instansiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pembimbing_instansi
     */
    omit?: pembimbing_instansiOmit<ExtArgs> | null
    /**
     * The data used to update pembimbing_instansis.
     */
    data: XOR<pembimbing_instansiUpdateManyMutationInput, pembimbing_instansiUncheckedUpdateManyInput>
    /**
     * Filter which pembimbing_instansis to update
     */
    where?: pembimbing_instansiWhereInput
    /**
     * Limit how many pembimbing_instansis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembimbing_instansiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pembimbing_instansi upsert
   */
  export type pembimbing_instansiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembimbing_instansi
     */
    select?: pembimbing_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembimbing_instansi
     */
    omit?: pembimbing_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembimbing_instansiInclude<ExtArgs> | null
    /**
     * The filter to search for the pembimbing_instansi to update in case it exists.
     */
    where: pembimbing_instansiWhereUniqueInput
    /**
     * In case the pembimbing_instansi found by the `where` argument doesn't exist, create a new pembimbing_instansi with this data.
     */
    create: XOR<pembimbing_instansiCreateInput, pembimbing_instansiUncheckedCreateInput>
    /**
     * In case the pembimbing_instansi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pembimbing_instansiUpdateInput, pembimbing_instansiUncheckedUpdateInput>
  }

  /**
   * pembimbing_instansi delete
   */
  export type pembimbing_instansiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembimbing_instansi
     */
    select?: pembimbing_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembimbing_instansi
     */
    omit?: pembimbing_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembimbing_instansiInclude<ExtArgs> | null
    /**
     * Filter which pembimbing_instansi to delete.
     */
    where: pembimbing_instansiWhereUniqueInput
  }

  /**
   * pembimbing_instansi deleteMany
   */
  export type pembimbing_instansiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pembimbing_instansis to delete
     */
    where?: pembimbing_instansiWhereInput
    /**
     * Limit how many pembimbing_instansis to delete.
     */
    limit?: number
  }

  /**
   * pembimbing_instansi.nilai_instansi
   */
  export type pembimbing_instansi$nilai_instansiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nilai_instansi
     */
    select?: nilai_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nilai_instansi
     */
    omit?: nilai_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nilai_instansiInclude<ExtArgs> | null
    where?: nilai_instansiWhereInput
    orderBy?: nilai_instansiOrderByWithRelationInput | nilai_instansiOrderByWithRelationInput[]
    cursor?: nilai_instansiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Nilai_instansiScalarFieldEnum | Nilai_instansiScalarFieldEnum[]
  }

  /**
   * pembimbing_instansi.pendaftaran_kp
   */
  export type pembimbing_instansi$pendaftaran_kpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran_kp
     */
    select?: pendaftaran_kpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran_kp
     */
    omit?: pendaftaran_kpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaran_kpInclude<ExtArgs> | null
    where?: pendaftaran_kpWhereInput
    orderBy?: pendaftaran_kpOrderByWithRelationInput | pendaftaran_kpOrderByWithRelationInput[]
    cursor?: pendaftaran_kpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pendaftaran_kpScalarFieldEnum | Pendaftaran_kpScalarFieldEnum[]
  }

  /**
   * pembimbing_instansi without action
   */
  export type pembimbing_instansiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembimbing_instansi
     */
    select?: pembimbing_instansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembimbing_instansi
     */
    omit?: pembimbing_instansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembimbing_instansiInclude<ExtArgs> | null
  }


  /**
   * Model pendaftaran_kp
   */

  export type AggregatePendaftaran_kp = {
    _count: Pendaftaran_kpCountAggregateOutputType | null
    _avg: Pendaftaran_kpAvgAggregateOutputType | null
    _sum: Pendaftaran_kpSumAggregateOutputType | null
    _min: Pendaftaran_kpMinAggregateOutputType | null
    _max: Pendaftaran_kpMaxAggregateOutputType | null
  }

  export type Pendaftaran_kpAvgAggregateOutputType = {
    semester: number | null
  }

  export type Pendaftaran_kpSumAggregateOutputType = {
    semester: number | null
  }

  export type Pendaftaran_kpMinAggregateOutputType = {
    nim: string | null
    semester: number | null
    tanggalTerdaftar: Date | null
    tanggalMulai: Date | null
    tenggatWaktu: Date | null
    gagal: boolean | null
    tanggalSelesai: Date | null
    linkSuratPengantar: string | null
    linkSuratBalasan: string | null
    linkSuratPenunjukkanDospem: string | null
    alasanLanjutKP: string | null
    linkSuratPerpanjanganKP: string | null
    id_pembimbing_instansi: string | null
    nip: string | null
  }

  export type Pendaftaran_kpMaxAggregateOutputType = {
    nim: string | null
    semester: number | null
    tanggalTerdaftar: Date | null
    tanggalMulai: Date | null
    tenggatWaktu: Date | null
    gagal: boolean | null
    tanggalSelesai: Date | null
    linkSuratPengantar: string | null
    linkSuratBalasan: string | null
    linkSuratPenunjukkanDospem: string | null
    alasanLanjutKP: string | null
    linkSuratPerpanjanganKP: string | null
    id_pembimbing_instansi: string | null
    nip: string | null
  }

  export type Pendaftaran_kpCountAggregateOutputType = {
    nim: number
    semester: number
    tanggalTerdaftar: number
    tanggalMulai: number
    tenggatWaktu: number
    gagal: number
    tanggalSelesai: number
    linkSuratPengantar: number
    linkSuratBalasan: number
    linkSuratPenunjukkanDospem: number
    alasanLanjutKP: number
    linkSuratPerpanjanganKP: number
    id_pembimbing_instansi: number
    nip: number
    _all: number
  }


  export type Pendaftaran_kpAvgAggregateInputType = {
    semester?: true
  }

  export type Pendaftaran_kpSumAggregateInputType = {
    semester?: true
  }

  export type Pendaftaran_kpMinAggregateInputType = {
    nim?: true
    semester?: true
    tanggalTerdaftar?: true
    tanggalMulai?: true
    tenggatWaktu?: true
    gagal?: true
    tanggalSelesai?: true
    linkSuratPengantar?: true
    linkSuratBalasan?: true
    linkSuratPenunjukkanDospem?: true
    alasanLanjutKP?: true
    linkSuratPerpanjanganKP?: true
    id_pembimbing_instansi?: true
    nip?: true
  }

  export type Pendaftaran_kpMaxAggregateInputType = {
    nim?: true
    semester?: true
    tanggalTerdaftar?: true
    tanggalMulai?: true
    tenggatWaktu?: true
    gagal?: true
    tanggalSelesai?: true
    linkSuratPengantar?: true
    linkSuratBalasan?: true
    linkSuratPenunjukkanDospem?: true
    alasanLanjutKP?: true
    linkSuratPerpanjanganKP?: true
    id_pembimbing_instansi?: true
    nip?: true
  }

  export type Pendaftaran_kpCountAggregateInputType = {
    nim?: true
    semester?: true
    tanggalTerdaftar?: true
    tanggalMulai?: true
    tenggatWaktu?: true
    gagal?: true
    tanggalSelesai?: true
    linkSuratPengantar?: true
    linkSuratBalasan?: true
    linkSuratPenunjukkanDospem?: true
    alasanLanjutKP?: true
    linkSuratPerpanjanganKP?: true
    id_pembimbing_instansi?: true
    nip?: true
    _all?: true
  }

  export type Pendaftaran_kpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pendaftaran_kp to aggregate.
     */
    where?: pendaftaran_kpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendaftaran_kps to fetch.
     */
    orderBy?: pendaftaran_kpOrderByWithRelationInput | pendaftaran_kpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pendaftaran_kpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendaftaran_kps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendaftaran_kps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pendaftaran_kps
    **/
    _count?: true | Pendaftaran_kpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pendaftaran_kpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pendaftaran_kpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pendaftaran_kpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pendaftaran_kpMaxAggregateInputType
  }

  export type GetPendaftaran_kpAggregateType<T extends Pendaftaran_kpAggregateArgs> = {
        [P in keyof T & keyof AggregatePendaftaran_kp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendaftaran_kp[P]>
      : GetScalarType<T[P], AggregatePendaftaran_kp[P]>
  }




  export type pendaftaran_kpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pendaftaran_kpWhereInput
    orderBy?: pendaftaran_kpOrderByWithAggregationInput | pendaftaran_kpOrderByWithAggregationInput[]
    by: Pendaftaran_kpScalarFieldEnum[] | Pendaftaran_kpScalarFieldEnum
    having?: pendaftaran_kpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pendaftaran_kpCountAggregateInputType | true
    _avg?: Pendaftaran_kpAvgAggregateInputType
    _sum?: Pendaftaran_kpSumAggregateInputType
    _min?: Pendaftaran_kpMinAggregateInputType
    _max?: Pendaftaran_kpMaxAggregateInputType
  }

  export type Pendaftaran_kpGroupByOutputType = {
    nim: string
    semester: number
    tanggalTerdaftar: Date
    tanggalMulai: Date | null
    tenggatWaktu: Date
    gagal: boolean
    tanggalSelesai: Date | null
    linkSuratPengantar: string | null
    linkSuratBalasan: string | null
    linkSuratPenunjukkanDospem: string | null
    alasanLanjutKP: string | null
    linkSuratPerpanjanganKP: string | null
    id_pembimbing_instansi: string
    nip: string | null
    _count: Pendaftaran_kpCountAggregateOutputType | null
    _avg: Pendaftaran_kpAvgAggregateOutputType | null
    _sum: Pendaftaran_kpSumAggregateOutputType | null
    _min: Pendaftaran_kpMinAggregateOutputType | null
    _max: Pendaftaran_kpMaxAggregateOutputType | null
  }

  type GetPendaftaran_kpGroupByPayload<T extends pendaftaran_kpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pendaftaran_kpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pendaftaran_kpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pendaftaran_kpGroupByOutputType[P]>
            : GetScalarType<T[P], Pendaftaran_kpGroupByOutputType[P]>
        }
      >
    >


  export type pendaftaran_kpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nim?: boolean
    semester?: boolean
    tanggalTerdaftar?: boolean
    tanggalMulai?: boolean
    tenggatWaktu?: boolean
    gagal?: boolean
    tanggalSelesai?: boolean
    linkSuratPengantar?: boolean
    linkSuratBalasan?: boolean
    linkSuratPenunjukkanDospem?: boolean
    alasanLanjutKP?: boolean
    linkSuratPerpanjanganKP?: boolean
    id_pembimbing_instansi?: boolean
    nip?: boolean
    pembimbing_instansi?: boolean | pembimbing_instansiDefaultArgs<ExtArgs>
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | pendaftaran_kp$dosenArgs<ExtArgs>
  }, ExtArgs["result"]["pendaftaran_kp"]>

  export type pendaftaran_kpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nim?: boolean
    semester?: boolean
    tanggalTerdaftar?: boolean
    tanggalMulai?: boolean
    tenggatWaktu?: boolean
    gagal?: boolean
    tanggalSelesai?: boolean
    linkSuratPengantar?: boolean
    linkSuratBalasan?: boolean
    linkSuratPenunjukkanDospem?: boolean
    alasanLanjutKP?: boolean
    linkSuratPerpanjanganKP?: boolean
    id_pembimbing_instansi?: boolean
    nip?: boolean
    pembimbing_instansi?: boolean | pembimbing_instansiDefaultArgs<ExtArgs>
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | pendaftaran_kp$dosenArgs<ExtArgs>
  }, ExtArgs["result"]["pendaftaran_kp"]>

  export type pendaftaran_kpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nim?: boolean
    semester?: boolean
    tanggalTerdaftar?: boolean
    tanggalMulai?: boolean
    tenggatWaktu?: boolean
    gagal?: boolean
    tanggalSelesai?: boolean
    linkSuratPengantar?: boolean
    linkSuratBalasan?: boolean
    linkSuratPenunjukkanDospem?: boolean
    alasanLanjutKP?: boolean
    linkSuratPerpanjanganKP?: boolean
    id_pembimbing_instansi?: boolean
    nip?: boolean
    pembimbing_instansi?: boolean | pembimbing_instansiDefaultArgs<ExtArgs>
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | pendaftaran_kp$dosenArgs<ExtArgs>
  }, ExtArgs["result"]["pendaftaran_kp"]>

  export type pendaftaran_kpSelectScalar = {
    nim?: boolean
    semester?: boolean
    tanggalTerdaftar?: boolean
    tanggalMulai?: boolean
    tenggatWaktu?: boolean
    gagal?: boolean
    tanggalSelesai?: boolean
    linkSuratPengantar?: boolean
    linkSuratBalasan?: boolean
    linkSuratPenunjukkanDospem?: boolean
    alasanLanjutKP?: boolean
    linkSuratPerpanjanganKP?: boolean
    id_pembimbing_instansi?: boolean
    nip?: boolean
  }

  export type pendaftaran_kpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nim" | "semester" | "tanggalTerdaftar" | "tanggalMulai" | "tenggatWaktu" | "gagal" | "tanggalSelesai" | "linkSuratPengantar" | "linkSuratBalasan" | "linkSuratPenunjukkanDospem" | "alasanLanjutKP" | "linkSuratPerpanjanganKP" | "id_pembimbing_instansi" | "nip", ExtArgs["result"]["pendaftaran_kp"]>
  export type pendaftaran_kpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembimbing_instansi?: boolean | pembimbing_instansiDefaultArgs<ExtArgs>
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | pendaftaran_kp$dosenArgs<ExtArgs>
  }
  export type pendaftaran_kpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembimbing_instansi?: boolean | pembimbing_instansiDefaultArgs<ExtArgs>
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | pendaftaran_kp$dosenArgs<ExtArgs>
  }
  export type pendaftaran_kpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembimbing_instansi?: boolean | pembimbing_instansiDefaultArgs<ExtArgs>
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    dosen?: boolean | pendaftaran_kp$dosenArgs<ExtArgs>
  }

  export type $pendaftaran_kpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pendaftaran_kp"
    objects: {
      pembimbing_instansi: Prisma.$pembimbing_instansiPayload<ExtArgs>
      mahasiswa: Prisma.$mahasiswaPayload<ExtArgs>
      dosen: Prisma.$dosenPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      nim: string
      semester: number
      tanggalTerdaftar: Date
      tanggalMulai: Date | null
      tenggatWaktu: Date
      gagal: boolean
      tanggalSelesai: Date | null
      linkSuratPengantar: string | null
      linkSuratBalasan: string | null
      linkSuratPenunjukkanDospem: string | null
      alasanLanjutKP: string | null
      linkSuratPerpanjanganKP: string | null
      id_pembimbing_instansi: string
      nip: string | null
    }, ExtArgs["result"]["pendaftaran_kp"]>
    composites: {}
  }

  type pendaftaran_kpGetPayload<S extends boolean | null | undefined | pendaftaran_kpDefaultArgs> = $Result.GetResult<Prisma.$pendaftaran_kpPayload, S>

  type pendaftaran_kpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pendaftaran_kpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pendaftaran_kpCountAggregateInputType | true
    }

  export interface pendaftaran_kpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pendaftaran_kp'], meta: { name: 'pendaftaran_kp' } }
    /**
     * Find zero or one Pendaftaran_kp that matches the filter.
     * @param {pendaftaran_kpFindUniqueArgs} args - Arguments to find a Pendaftaran_kp
     * @example
     * // Get one Pendaftaran_kp
     * const pendaftaran_kp = await prisma.pendaftaran_kp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pendaftaran_kpFindUniqueArgs>(args: SelectSubset<T, pendaftaran_kpFindUniqueArgs<ExtArgs>>): Prisma__pendaftaran_kpClient<$Result.GetResult<Prisma.$pendaftaran_kpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pendaftaran_kp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pendaftaran_kpFindUniqueOrThrowArgs} args - Arguments to find a Pendaftaran_kp
     * @example
     * // Get one Pendaftaran_kp
     * const pendaftaran_kp = await prisma.pendaftaran_kp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pendaftaran_kpFindUniqueOrThrowArgs>(args: SelectSubset<T, pendaftaran_kpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pendaftaran_kpClient<$Result.GetResult<Prisma.$pendaftaran_kpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pendaftaran_kp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendaftaran_kpFindFirstArgs} args - Arguments to find a Pendaftaran_kp
     * @example
     * // Get one Pendaftaran_kp
     * const pendaftaran_kp = await prisma.pendaftaran_kp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pendaftaran_kpFindFirstArgs>(args?: SelectSubset<T, pendaftaran_kpFindFirstArgs<ExtArgs>>): Prisma__pendaftaran_kpClient<$Result.GetResult<Prisma.$pendaftaran_kpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pendaftaran_kp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendaftaran_kpFindFirstOrThrowArgs} args - Arguments to find a Pendaftaran_kp
     * @example
     * // Get one Pendaftaran_kp
     * const pendaftaran_kp = await prisma.pendaftaran_kp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pendaftaran_kpFindFirstOrThrowArgs>(args?: SelectSubset<T, pendaftaran_kpFindFirstOrThrowArgs<ExtArgs>>): Prisma__pendaftaran_kpClient<$Result.GetResult<Prisma.$pendaftaran_kpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pendaftaran_kps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendaftaran_kpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pendaftaran_kps
     * const pendaftaran_kps = await prisma.pendaftaran_kp.findMany()
     * 
     * // Get first 10 Pendaftaran_kps
     * const pendaftaran_kps = await prisma.pendaftaran_kp.findMany({ take: 10 })
     * 
     * // Only select the `nim`
     * const pendaftaran_kpWithNimOnly = await prisma.pendaftaran_kp.findMany({ select: { nim: true } })
     * 
     */
    findMany<T extends pendaftaran_kpFindManyArgs>(args?: SelectSubset<T, pendaftaran_kpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendaftaran_kpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pendaftaran_kp.
     * @param {pendaftaran_kpCreateArgs} args - Arguments to create a Pendaftaran_kp.
     * @example
     * // Create one Pendaftaran_kp
     * const Pendaftaran_kp = await prisma.pendaftaran_kp.create({
     *   data: {
     *     // ... data to create a Pendaftaran_kp
     *   }
     * })
     * 
     */
    create<T extends pendaftaran_kpCreateArgs>(args: SelectSubset<T, pendaftaran_kpCreateArgs<ExtArgs>>): Prisma__pendaftaran_kpClient<$Result.GetResult<Prisma.$pendaftaran_kpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pendaftaran_kps.
     * @param {pendaftaran_kpCreateManyArgs} args - Arguments to create many Pendaftaran_kps.
     * @example
     * // Create many Pendaftaran_kps
     * const pendaftaran_kp = await prisma.pendaftaran_kp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pendaftaran_kpCreateManyArgs>(args?: SelectSubset<T, pendaftaran_kpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pendaftaran_kps and returns the data saved in the database.
     * @param {pendaftaran_kpCreateManyAndReturnArgs} args - Arguments to create many Pendaftaran_kps.
     * @example
     * // Create many Pendaftaran_kps
     * const pendaftaran_kp = await prisma.pendaftaran_kp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pendaftaran_kps and only return the `nim`
     * const pendaftaran_kpWithNimOnly = await prisma.pendaftaran_kp.createManyAndReturn({
     *   select: { nim: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pendaftaran_kpCreateManyAndReturnArgs>(args?: SelectSubset<T, pendaftaran_kpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendaftaran_kpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pendaftaran_kp.
     * @param {pendaftaran_kpDeleteArgs} args - Arguments to delete one Pendaftaran_kp.
     * @example
     * // Delete one Pendaftaran_kp
     * const Pendaftaran_kp = await prisma.pendaftaran_kp.delete({
     *   where: {
     *     // ... filter to delete one Pendaftaran_kp
     *   }
     * })
     * 
     */
    delete<T extends pendaftaran_kpDeleteArgs>(args: SelectSubset<T, pendaftaran_kpDeleteArgs<ExtArgs>>): Prisma__pendaftaran_kpClient<$Result.GetResult<Prisma.$pendaftaran_kpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pendaftaran_kp.
     * @param {pendaftaran_kpUpdateArgs} args - Arguments to update one Pendaftaran_kp.
     * @example
     * // Update one Pendaftaran_kp
     * const pendaftaran_kp = await prisma.pendaftaran_kp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pendaftaran_kpUpdateArgs>(args: SelectSubset<T, pendaftaran_kpUpdateArgs<ExtArgs>>): Prisma__pendaftaran_kpClient<$Result.GetResult<Prisma.$pendaftaran_kpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pendaftaran_kps.
     * @param {pendaftaran_kpDeleteManyArgs} args - Arguments to filter Pendaftaran_kps to delete.
     * @example
     * // Delete a few Pendaftaran_kps
     * const { count } = await prisma.pendaftaran_kp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pendaftaran_kpDeleteManyArgs>(args?: SelectSubset<T, pendaftaran_kpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pendaftaran_kps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendaftaran_kpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pendaftaran_kps
     * const pendaftaran_kp = await prisma.pendaftaran_kp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pendaftaran_kpUpdateManyArgs>(args: SelectSubset<T, pendaftaran_kpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pendaftaran_kps and returns the data updated in the database.
     * @param {pendaftaran_kpUpdateManyAndReturnArgs} args - Arguments to update many Pendaftaran_kps.
     * @example
     * // Update many Pendaftaran_kps
     * const pendaftaran_kp = await prisma.pendaftaran_kp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pendaftaran_kps and only return the `nim`
     * const pendaftaran_kpWithNimOnly = await prisma.pendaftaran_kp.updateManyAndReturn({
     *   select: { nim: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pendaftaran_kpUpdateManyAndReturnArgs>(args: SelectSubset<T, pendaftaran_kpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendaftaran_kpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pendaftaran_kp.
     * @param {pendaftaran_kpUpsertArgs} args - Arguments to update or create a Pendaftaran_kp.
     * @example
     * // Update or create a Pendaftaran_kp
     * const pendaftaran_kp = await prisma.pendaftaran_kp.upsert({
     *   create: {
     *     // ... data to create a Pendaftaran_kp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pendaftaran_kp we want to update
     *   }
     * })
     */
    upsert<T extends pendaftaran_kpUpsertArgs>(args: SelectSubset<T, pendaftaran_kpUpsertArgs<ExtArgs>>): Prisma__pendaftaran_kpClient<$Result.GetResult<Prisma.$pendaftaran_kpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pendaftaran_kps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendaftaran_kpCountArgs} args - Arguments to filter Pendaftaran_kps to count.
     * @example
     * // Count the number of Pendaftaran_kps
     * const count = await prisma.pendaftaran_kp.count({
     *   where: {
     *     // ... the filter for the Pendaftaran_kps we want to count
     *   }
     * })
    **/
    count<T extends pendaftaran_kpCountArgs>(
      args?: Subset<T, pendaftaran_kpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pendaftaran_kpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pendaftaran_kp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pendaftaran_kpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pendaftaran_kpAggregateArgs>(args: Subset<T, Pendaftaran_kpAggregateArgs>): Prisma.PrismaPromise<GetPendaftaran_kpAggregateType<T>>

    /**
     * Group by Pendaftaran_kp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendaftaran_kpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pendaftaran_kpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pendaftaran_kpGroupByArgs['orderBy'] }
        : { orderBy?: pendaftaran_kpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pendaftaran_kpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendaftaran_kpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pendaftaran_kp model
   */
  readonly fields: pendaftaran_kpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pendaftaran_kp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pendaftaran_kpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pembimbing_instansi<T extends pembimbing_instansiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pembimbing_instansiDefaultArgs<ExtArgs>>): Prisma__pembimbing_instansiClient<$Result.GetResult<Prisma.$pembimbing_instansiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mahasiswa<T extends mahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswaDefaultArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dosen<T extends pendaftaran_kp$dosenArgs<ExtArgs> = {}>(args?: Subset<T, pendaftaran_kp$dosenArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pendaftaran_kp model
   */
  interface pendaftaran_kpFieldRefs {
    readonly nim: FieldRef<"pendaftaran_kp", 'String'>
    readonly semester: FieldRef<"pendaftaran_kp", 'Int'>
    readonly tanggalTerdaftar: FieldRef<"pendaftaran_kp", 'DateTime'>
    readonly tanggalMulai: FieldRef<"pendaftaran_kp", 'DateTime'>
    readonly tenggatWaktu: FieldRef<"pendaftaran_kp", 'DateTime'>
    readonly gagal: FieldRef<"pendaftaran_kp", 'Boolean'>
    readonly tanggalSelesai: FieldRef<"pendaftaran_kp", 'DateTime'>
    readonly linkSuratPengantar: FieldRef<"pendaftaran_kp", 'String'>
    readonly linkSuratBalasan: FieldRef<"pendaftaran_kp", 'String'>
    readonly linkSuratPenunjukkanDospem: FieldRef<"pendaftaran_kp", 'String'>
    readonly alasanLanjutKP: FieldRef<"pendaftaran_kp", 'String'>
    readonly linkSuratPerpanjanganKP: FieldRef<"pendaftaran_kp", 'String'>
    readonly id_pembimbing_instansi: FieldRef<"pendaftaran_kp", 'String'>
    readonly nip: FieldRef<"pendaftaran_kp", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pendaftaran_kp findUnique
   */
  export type pendaftaran_kpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran_kp
     */
    select?: pendaftaran_kpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran_kp
     */
    omit?: pendaftaran_kpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaran_kpInclude<ExtArgs> | null
    /**
     * Filter, which pendaftaran_kp to fetch.
     */
    where: pendaftaran_kpWhereUniqueInput
  }

  /**
   * pendaftaran_kp findUniqueOrThrow
   */
  export type pendaftaran_kpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran_kp
     */
    select?: pendaftaran_kpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran_kp
     */
    omit?: pendaftaran_kpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaran_kpInclude<ExtArgs> | null
    /**
     * Filter, which pendaftaran_kp to fetch.
     */
    where: pendaftaran_kpWhereUniqueInput
  }

  /**
   * pendaftaran_kp findFirst
   */
  export type pendaftaran_kpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran_kp
     */
    select?: pendaftaran_kpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran_kp
     */
    omit?: pendaftaran_kpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaran_kpInclude<ExtArgs> | null
    /**
     * Filter, which pendaftaran_kp to fetch.
     */
    where?: pendaftaran_kpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendaftaran_kps to fetch.
     */
    orderBy?: pendaftaran_kpOrderByWithRelationInput | pendaftaran_kpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pendaftaran_kps.
     */
    cursor?: pendaftaran_kpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendaftaran_kps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendaftaran_kps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pendaftaran_kps.
     */
    distinct?: Pendaftaran_kpScalarFieldEnum | Pendaftaran_kpScalarFieldEnum[]
  }

  /**
   * pendaftaran_kp findFirstOrThrow
   */
  export type pendaftaran_kpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran_kp
     */
    select?: pendaftaran_kpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran_kp
     */
    omit?: pendaftaran_kpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaran_kpInclude<ExtArgs> | null
    /**
     * Filter, which pendaftaran_kp to fetch.
     */
    where?: pendaftaran_kpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendaftaran_kps to fetch.
     */
    orderBy?: pendaftaran_kpOrderByWithRelationInput | pendaftaran_kpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pendaftaran_kps.
     */
    cursor?: pendaftaran_kpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendaftaran_kps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendaftaran_kps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pendaftaran_kps.
     */
    distinct?: Pendaftaran_kpScalarFieldEnum | Pendaftaran_kpScalarFieldEnum[]
  }

  /**
   * pendaftaran_kp findMany
   */
  export type pendaftaran_kpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran_kp
     */
    select?: pendaftaran_kpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran_kp
     */
    omit?: pendaftaran_kpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaran_kpInclude<ExtArgs> | null
    /**
     * Filter, which pendaftaran_kps to fetch.
     */
    where?: pendaftaran_kpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendaftaran_kps to fetch.
     */
    orderBy?: pendaftaran_kpOrderByWithRelationInput | pendaftaran_kpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pendaftaran_kps.
     */
    cursor?: pendaftaran_kpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendaftaran_kps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendaftaran_kps.
     */
    skip?: number
    distinct?: Pendaftaran_kpScalarFieldEnum | Pendaftaran_kpScalarFieldEnum[]
  }

  /**
   * pendaftaran_kp create
   */
  export type pendaftaran_kpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran_kp
     */
    select?: pendaftaran_kpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran_kp
     */
    omit?: pendaftaran_kpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaran_kpInclude<ExtArgs> | null
    /**
     * The data needed to create a pendaftaran_kp.
     */
    data: XOR<pendaftaran_kpCreateInput, pendaftaran_kpUncheckedCreateInput>
  }

  /**
   * pendaftaran_kp createMany
   */
  export type pendaftaran_kpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pendaftaran_kps.
     */
    data: pendaftaran_kpCreateManyInput | pendaftaran_kpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pendaftaran_kp createManyAndReturn
   */
  export type pendaftaran_kpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran_kp
     */
    select?: pendaftaran_kpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran_kp
     */
    omit?: pendaftaran_kpOmit<ExtArgs> | null
    /**
     * The data used to create many pendaftaran_kps.
     */
    data: pendaftaran_kpCreateManyInput | pendaftaran_kpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaran_kpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pendaftaran_kp update
   */
  export type pendaftaran_kpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran_kp
     */
    select?: pendaftaran_kpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran_kp
     */
    omit?: pendaftaran_kpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaran_kpInclude<ExtArgs> | null
    /**
     * The data needed to update a pendaftaran_kp.
     */
    data: XOR<pendaftaran_kpUpdateInput, pendaftaran_kpUncheckedUpdateInput>
    /**
     * Choose, which pendaftaran_kp to update.
     */
    where: pendaftaran_kpWhereUniqueInput
  }

  /**
   * pendaftaran_kp updateMany
   */
  export type pendaftaran_kpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pendaftaran_kps.
     */
    data: XOR<pendaftaran_kpUpdateManyMutationInput, pendaftaran_kpUncheckedUpdateManyInput>
    /**
     * Filter which pendaftaran_kps to update
     */
    where?: pendaftaran_kpWhereInput
    /**
     * Limit how many pendaftaran_kps to update.
     */
    limit?: number
  }

  /**
   * pendaftaran_kp updateManyAndReturn
   */
  export type pendaftaran_kpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran_kp
     */
    select?: pendaftaran_kpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran_kp
     */
    omit?: pendaftaran_kpOmit<ExtArgs> | null
    /**
     * The data used to update pendaftaran_kps.
     */
    data: XOR<pendaftaran_kpUpdateManyMutationInput, pendaftaran_kpUncheckedUpdateManyInput>
    /**
     * Filter which pendaftaran_kps to update
     */
    where?: pendaftaran_kpWhereInput
    /**
     * Limit how many pendaftaran_kps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaran_kpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pendaftaran_kp upsert
   */
  export type pendaftaran_kpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran_kp
     */
    select?: pendaftaran_kpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran_kp
     */
    omit?: pendaftaran_kpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaran_kpInclude<ExtArgs> | null
    /**
     * The filter to search for the pendaftaran_kp to update in case it exists.
     */
    where: pendaftaran_kpWhereUniqueInput
    /**
     * In case the pendaftaran_kp found by the `where` argument doesn't exist, create a new pendaftaran_kp with this data.
     */
    create: XOR<pendaftaran_kpCreateInput, pendaftaran_kpUncheckedCreateInput>
    /**
     * In case the pendaftaran_kp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pendaftaran_kpUpdateInput, pendaftaran_kpUncheckedUpdateInput>
  }

  /**
   * pendaftaran_kp delete
   */
  export type pendaftaran_kpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran_kp
     */
    select?: pendaftaran_kpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran_kp
     */
    omit?: pendaftaran_kpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaran_kpInclude<ExtArgs> | null
    /**
     * Filter which pendaftaran_kp to delete.
     */
    where: pendaftaran_kpWhereUniqueInput
  }

  /**
   * pendaftaran_kp deleteMany
   */
  export type pendaftaran_kpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pendaftaran_kps to delete
     */
    where?: pendaftaran_kpWhereInput
    /**
     * Limit how many pendaftaran_kps to delete.
     */
    limit?: number
  }

  /**
   * pendaftaran_kp.dosen
   */
  export type pendaftaran_kp$dosenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    where?: dosenWhereInput
  }

  /**
   * pendaftaran_kp without action
   */
  export type pendaftaran_kpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran_kp
     */
    select?: pendaftaran_kpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran_kp
     */
    omit?: pendaftaran_kpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaran_kpInclude<ExtArgs> | null
  }


  /**
   * Model ruangan
   */

  export type AggregateRuangan = {
    _count: RuanganCountAggregateOutputType | null
    _min: RuanganMinAggregateOutputType | null
    _max: RuanganMaxAggregateOutputType | null
  }

  export type RuanganMinAggregateOutputType = {
    nama: string | null
  }

  export type RuanganMaxAggregateOutputType = {
    nama: string | null
  }

  export type RuanganCountAggregateOutputType = {
    nama: number
    _all: number
  }


  export type RuanganMinAggregateInputType = {
    nama?: true
  }

  export type RuanganMaxAggregateInputType = {
    nama?: true
  }

  export type RuanganCountAggregateInputType = {
    nama?: true
    _all?: true
  }

  export type RuanganAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ruangan to aggregate.
     */
    where?: ruanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ruangans to fetch.
     */
    orderBy?: ruanganOrderByWithRelationInput | ruanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ruanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ruangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ruangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ruangans
    **/
    _count?: true | RuanganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RuanganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RuanganMaxAggregateInputType
  }

  export type GetRuanganAggregateType<T extends RuanganAggregateArgs> = {
        [P in keyof T & keyof AggregateRuangan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRuangan[P]>
      : GetScalarType<T[P], AggregateRuangan[P]>
  }




  export type ruanganGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ruanganWhereInput
    orderBy?: ruanganOrderByWithAggregationInput | ruanganOrderByWithAggregationInput[]
    by: RuanganScalarFieldEnum[] | RuanganScalarFieldEnum
    having?: ruanganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RuanganCountAggregateInputType | true
    _min?: RuanganMinAggregateInputType
    _max?: RuanganMaxAggregateInputType
  }

  export type RuanganGroupByOutputType = {
    nama: string
    _count: RuanganCountAggregateOutputType | null
    _min: RuanganMinAggregateOutputType | null
    _max: RuanganMaxAggregateOutputType | null
  }

  type GetRuanganGroupByPayload<T extends ruanganGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RuanganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RuanganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RuanganGroupByOutputType[P]>
            : GetScalarType<T[P], RuanganGroupByOutputType[P]>
        }
      >
    >


  export type ruanganSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nama?: boolean
    jadwal?: boolean | ruangan$jadwalArgs<ExtArgs>
    _count?: boolean | RuanganCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ruangan"]>

  export type ruanganSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nama?: boolean
  }, ExtArgs["result"]["ruangan"]>

  export type ruanganSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nama?: boolean
  }, ExtArgs["result"]["ruangan"]>

  export type ruanganSelectScalar = {
    nama?: boolean
  }

  export type ruanganOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nama", ExtArgs["result"]["ruangan"]>
  export type ruanganInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | ruangan$jadwalArgs<ExtArgs>
    _count?: boolean | RuanganCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ruanganIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ruanganIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ruanganPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ruangan"
    objects: {
      jadwal: Prisma.$jadwalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nama: string
    }, ExtArgs["result"]["ruangan"]>
    composites: {}
  }

  type ruanganGetPayload<S extends boolean | null | undefined | ruanganDefaultArgs> = $Result.GetResult<Prisma.$ruanganPayload, S>

  type ruanganCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ruanganFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RuanganCountAggregateInputType | true
    }

  export interface ruanganDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ruangan'], meta: { name: 'ruangan' } }
    /**
     * Find zero or one Ruangan that matches the filter.
     * @param {ruanganFindUniqueArgs} args - Arguments to find a Ruangan
     * @example
     * // Get one Ruangan
     * const ruangan = await prisma.ruangan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ruanganFindUniqueArgs>(args: SelectSubset<T, ruanganFindUniqueArgs<ExtArgs>>): Prisma__ruanganClient<$Result.GetResult<Prisma.$ruanganPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ruangan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ruanganFindUniqueOrThrowArgs} args - Arguments to find a Ruangan
     * @example
     * // Get one Ruangan
     * const ruangan = await prisma.ruangan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ruanganFindUniqueOrThrowArgs>(args: SelectSubset<T, ruanganFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ruanganClient<$Result.GetResult<Prisma.$ruanganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ruangan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ruanganFindFirstArgs} args - Arguments to find a Ruangan
     * @example
     * // Get one Ruangan
     * const ruangan = await prisma.ruangan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ruanganFindFirstArgs>(args?: SelectSubset<T, ruanganFindFirstArgs<ExtArgs>>): Prisma__ruanganClient<$Result.GetResult<Prisma.$ruanganPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ruangan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ruanganFindFirstOrThrowArgs} args - Arguments to find a Ruangan
     * @example
     * // Get one Ruangan
     * const ruangan = await prisma.ruangan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ruanganFindFirstOrThrowArgs>(args?: SelectSubset<T, ruanganFindFirstOrThrowArgs<ExtArgs>>): Prisma__ruanganClient<$Result.GetResult<Prisma.$ruanganPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ruangans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ruanganFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ruangans
     * const ruangans = await prisma.ruangan.findMany()
     * 
     * // Get first 10 Ruangans
     * const ruangans = await prisma.ruangan.findMany({ take: 10 })
     * 
     * // Only select the `nama`
     * const ruanganWithNamaOnly = await prisma.ruangan.findMany({ select: { nama: true } })
     * 
     */
    findMany<T extends ruanganFindManyArgs>(args?: SelectSubset<T, ruanganFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ruanganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ruangan.
     * @param {ruanganCreateArgs} args - Arguments to create a Ruangan.
     * @example
     * // Create one Ruangan
     * const Ruangan = await prisma.ruangan.create({
     *   data: {
     *     // ... data to create a Ruangan
     *   }
     * })
     * 
     */
    create<T extends ruanganCreateArgs>(args: SelectSubset<T, ruanganCreateArgs<ExtArgs>>): Prisma__ruanganClient<$Result.GetResult<Prisma.$ruanganPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ruangans.
     * @param {ruanganCreateManyArgs} args - Arguments to create many Ruangans.
     * @example
     * // Create many Ruangans
     * const ruangan = await prisma.ruangan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ruanganCreateManyArgs>(args?: SelectSubset<T, ruanganCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ruangans and returns the data saved in the database.
     * @param {ruanganCreateManyAndReturnArgs} args - Arguments to create many Ruangans.
     * @example
     * // Create many Ruangans
     * const ruangan = await prisma.ruangan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ruangans and only return the `nama`
     * const ruanganWithNamaOnly = await prisma.ruangan.createManyAndReturn({
     *   select: { nama: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ruanganCreateManyAndReturnArgs>(args?: SelectSubset<T, ruanganCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ruanganPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ruangan.
     * @param {ruanganDeleteArgs} args - Arguments to delete one Ruangan.
     * @example
     * // Delete one Ruangan
     * const Ruangan = await prisma.ruangan.delete({
     *   where: {
     *     // ... filter to delete one Ruangan
     *   }
     * })
     * 
     */
    delete<T extends ruanganDeleteArgs>(args: SelectSubset<T, ruanganDeleteArgs<ExtArgs>>): Prisma__ruanganClient<$Result.GetResult<Prisma.$ruanganPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ruangan.
     * @param {ruanganUpdateArgs} args - Arguments to update one Ruangan.
     * @example
     * // Update one Ruangan
     * const ruangan = await prisma.ruangan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ruanganUpdateArgs>(args: SelectSubset<T, ruanganUpdateArgs<ExtArgs>>): Prisma__ruanganClient<$Result.GetResult<Prisma.$ruanganPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ruangans.
     * @param {ruanganDeleteManyArgs} args - Arguments to filter Ruangans to delete.
     * @example
     * // Delete a few Ruangans
     * const { count } = await prisma.ruangan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ruanganDeleteManyArgs>(args?: SelectSubset<T, ruanganDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ruangans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ruanganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ruangans
     * const ruangan = await prisma.ruangan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ruanganUpdateManyArgs>(args: SelectSubset<T, ruanganUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ruangans and returns the data updated in the database.
     * @param {ruanganUpdateManyAndReturnArgs} args - Arguments to update many Ruangans.
     * @example
     * // Update many Ruangans
     * const ruangan = await prisma.ruangan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ruangans and only return the `nama`
     * const ruanganWithNamaOnly = await prisma.ruangan.updateManyAndReturn({
     *   select: { nama: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ruanganUpdateManyAndReturnArgs>(args: SelectSubset<T, ruanganUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ruanganPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ruangan.
     * @param {ruanganUpsertArgs} args - Arguments to update or create a Ruangan.
     * @example
     * // Update or create a Ruangan
     * const ruangan = await prisma.ruangan.upsert({
     *   create: {
     *     // ... data to create a Ruangan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ruangan we want to update
     *   }
     * })
     */
    upsert<T extends ruanganUpsertArgs>(args: SelectSubset<T, ruanganUpsertArgs<ExtArgs>>): Prisma__ruanganClient<$Result.GetResult<Prisma.$ruanganPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ruangans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ruanganCountArgs} args - Arguments to filter Ruangans to count.
     * @example
     * // Count the number of Ruangans
     * const count = await prisma.ruangan.count({
     *   where: {
     *     // ... the filter for the Ruangans we want to count
     *   }
     * })
    **/
    count<T extends ruanganCountArgs>(
      args?: Subset<T, ruanganCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RuanganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ruangan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RuanganAggregateArgs>(args: Subset<T, RuanganAggregateArgs>): Prisma.PrismaPromise<GetRuanganAggregateType<T>>

    /**
     * Group by Ruangan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ruanganGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ruanganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ruanganGroupByArgs['orderBy'] }
        : { orderBy?: ruanganGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ruanganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRuanganGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ruangan model
   */
  readonly fields: ruanganFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ruangan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ruanganClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jadwal<T extends ruangan$jadwalArgs<ExtArgs> = {}>(args?: Subset<T, ruangan$jadwalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ruangan model
   */
  interface ruanganFieldRefs {
    readonly nama: FieldRef<"ruangan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ruangan findUnique
   */
  export type ruanganFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ruangan
     */
    select?: ruanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ruangan
     */
    omit?: ruanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ruanganInclude<ExtArgs> | null
    /**
     * Filter, which ruangan to fetch.
     */
    where: ruanganWhereUniqueInput
  }

  /**
   * ruangan findUniqueOrThrow
   */
  export type ruanganFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ruangan
     */
    select?: ruanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ruangan
     */
    omit?: ruanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ruanganInclude<ExtArgs> | null
    /**
     * Filter, which ruangan to fetch.
     */
    where: ruanganWhereUniqueInput
  }

  /**
   * ruangan findFirst
   */
  export type ruanganFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ruangan
     */
    select?: ruanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ruangan
     */
    omit?: ruanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ruanganInclude<ExtArgs> | null
    /**
     * Filter, which ruangan to fetch.
     */
    where?: ruanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ruangans to fetch.
     */
    orderBy?: ruanganOrderByWithRelationInput | ruanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ruangans.
     */
    cursor?: ruanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ruangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ruangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ruangans.
     */
    distinct?: RuanganScalarFieldEnum | RuanganScalarFieldEnum[]
  }

  /**
   * ruangan findFirstOrThrow
   */
  export type ruanganFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ruangan
     */
    select?: ruanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ruangan
     */
    omit?: ruanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ruanganInclude<ExtArgs> | null
    /**
     * Filter, which ruangan to fetch.
     */
    where?: ruanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ruangans to fetch.
     */
    orderBy?: ruanganOrderByWithRelationInput | ruanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ruangans.
     */
    cursor?: ruanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ruangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ruangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ruangans.
     */
    distinct?: RuanganScalarFieldEnum | RuanganScalarFieldEnum[]
  }

  /**
   * ruangan findMany
   */
  export type ruanganFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ruangan
     */
    select?: ruanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ruangan
     */
    omit?: ruanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ruanganInclude<ExtArgs> | null
    /**
     * Filter, which ruangans to fetch.
     */
    where?: ruanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ruangans to fetch.
     */
    orderBy?: ruanganOrderByWithRelationInput | ruanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ruangans.
     */
    cursor?: ruanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ruangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ruangans.
     */
    skip?: number
    distinct?: RuanganScalarFieldEnum | RuanganScalarFieldEnum[]
  }

  /**
   * ruangan create
   */
  export type ruanganCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ruangan
     */
    select?: ruanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ruangan
     */
    omit?: ruanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ruanganInclude<ExtArgs> | null
    /**
     * The data needed to create a ruangan.
     */
    data: XOR<ruanganCreateInput, ruanganUncheckedCreateInput>
  }

  /**
   * ruangan createMany
   */
  export type ruanganCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ruangans.
     */
    data: ruanganCreateManyInput | ruanganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ruangan createManyAndReturn
   */
  export type ruanganCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ruangan
     */
    select?: ruanganSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ruangan
     */
    omit?: ruanganOmit<ExtArgs> | null
    /**
     * The data used to create many ruangans.
     */
    data: ruanganCreateManyInput | ruanganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ruangan update
   */
  export type ruanganUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ruangan
     */
    select?: ruanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ruangan
     */
    omit?: ruanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ruanganInclude<ExtArgs> | null
    /**
     * The data needed to update a ruangan.
     */
    data: XOR<ruanganUpdateInput, ruanganUncheckedUpdateInput>
    /**
     * Choose, which ruangan to update.
     */
    where: ruanganWhereUniqueInput
  }

  /**
   * ruangan updateMany
   */
  export type ruanganUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ruangans.
     */
    data: XOR<ruanganUpdateManyMutationInput, ruanganUncheckedUpdateManyInput>
    /**
     * Filter which ruangans to update
     */
    where?: ruanganWhereInput
    /**
     * Limit how many ruangans to update.
     */
    limit?: number
  }

  /**
   * ruangan updateManyAndReturn
   */
  export type ruanganUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ruangan
     */
    select?: ruanganSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ruangan
     */
    omit?: ruanganOmit<ExtArgs> | null
    /**
     * The data used to update ruangans.
     */
    data: XOR<ruanganUpdateManyMutationInput, ruanganUncheckedUpdateManyInput>
    /**
     * Filter which ruangans to update
     */
    where?: ruanganWhereInput
    /**
     * Limit how many ruangans to update.
     */
    limit?: number
  }

  /**
   * ruangan upsert
   */
  export type ruanganUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ruangan
     */
    select?: ruanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ruangan
     */
    omit?: ruanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ruanganInclude<ExtArgs> | null
    /**
     * The filter to search for the ruangan to update in case it exists.
     */
    where: ruanganWhereUniqueInput
    /**
     * In case the ruangan found by the `where` argument doesn't exist, create a new ruangan with this data.
     */
    create: XOR<ruanganCreateInput, ruanganUncheckedCreateInput>
    /**
     * In case the ruangan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ruanganUpdateInput, ruanganUncheckedUpdateInput>
  }

  /**
   * ruangan delete
   */
  export type ruanganDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ruangan
     */
    select?: ruanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ruangan
     */
    omit?: ruanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ruanganInclude<ExtArgs> | null
    /**
     * Filter which ruangan to delete.
     */
    where: ruanganWhereUniqueInput
  }

  /**
   * ruangan deleteMany
   */
  export type ruanganDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ruangans to delete
     */
    where?: ruanganWhereInput
    /**
     * Limit how many ruangans to delete.
     */
    limit?: number
  }

  /**
   * ruangan.jadwal
   */
  export type ruangan$jadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    where?: jadwalWhereInput
    orderBy?: jadwalOrderByWithRelationInput | jadwalOrderByWithRelationInput[]
    cursor?: jadwalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * ruangan without action
   */
  export type ruanganDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ruangan
     */
    select?: ruanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ruangan
     */
    omit?: ruanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ruanganInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BimbinganScalarFieldEnum: {
    id: 'id',
    tanggal: 'tanggal',
    catatan: 'catatan',
    status: 'status',
    nim: 'nim',
    nip: 'nip'
  };

  export type BimbinganScalarFieldEnum = (typeof BimbinganScalarFieldEnum)[keyof typeof BimbinganScalarFieldEnum]


  export const Daily_reportScalarFieldEnum: {
    id: 'id',
    tanggal: 'tanggal',
    status: 'status',
    catatan: 'catatan',
    latitude: 'latitude',
    longitude: 'longitude',
    nim: 'nim'
  };

  export type Daily_reportScalarFieldEnum = (typeof Daily_reportScalarFieldEnum)[keyof typeof Daily_reportScalarFieldEnum]


  export const Detail_daily_reportScalarFieldEnum: {
    id: 'id',
    judul_kegiatan: 'judul_kegiatan',
    deskripsi_kegiatan: 'deskripsi_kegiatan',
    waktu: 'waktu',
    id_daily_report: 'id_daily_report'
  };

  export type Detail_daily_reportScalarFieldEnum = (typeof Detail_daily_reportScalarFieldEnum)[keyof typeof Detail_daily_reportScalarFieldEnum]


  export const DokumenScalarFieldEnum: {
    id: 'id',
    nim: 'nim',
    jenis_dokumen: 'jenis_dokumen',
    file_path: 'file_path',
    tanggal_upload: 'tanggal_upload',
    status: 'status',
    komentar: 'komentar'
  };

  export type DokumenScalarFieldEnum = (typeof DokumenScalarFieldEnum)[keyof typeof DokumenScalarFieldEnum]


  export const DosenScalarFieldEnum: {
    nip: 'nip',
    nama: 'nama',
    email: 'email',
    no_hp: 'no_hp',
    id_telegram: 'id_telegram'
  };

  export type DosenScalarFieldEnum = (typeof DosenScalarFieldEnum)[keyof typeof DosenScalarFieldEnum]


  export const InstansiScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    alamat: 'alamat',
    jenis: 'jenis',
    profil_singkat: 'profil_singkat',
    status: 'status'
  };

  export type InstansiScalarFieldEnum = (typeof InstansiScalarFieldEnum)[keyof typeof InstansiScalarFieldEnum]


  export const JadwalScalarFieldEnum: {
    id: 'id',
    nim: 'nim',
    nip: 'nip',
    tanggal: 'tanggal',
    waktu_mulai: 'waktu_mulai',
    waktu_selesai: 'waktu_selesai',
    ruangan_nama: 'ruangan_nama',
    status: 'status'
  };

  export type JadwalScalarFieldEnum = (typeof JadwalScalarFieldEnum)[keyof typeof JadwalScalarFieldEnum]


  export const Log_jadwalScalarFieldEnum: {
    id: 'id',
    jadwal_seminar_id: 'jadwal_seminar_id',
    log_type: 'log_type',
    nip: 'nip',
    tanggal_lama: 'tanggal_lama',
    tanggal_baru: 'tanggal_baru',
    ruangan_lama: 'ruangan_lama',
    ruangan_baru: 'ruangan_baru',
    keterangan: 'keterangan',
    created_at: 'created_at'
  };

  export type Log_jadwalScalarFieldEnum = (typeof Log_jadwalScalarFieldEnum)[keyof typeof Log_jadwalScalarFieldEnum]


  export const MahasiswaScalarFieldEnum: {
    nim: 'nim',
    nama: 'nama',
    email: 'email'
  };

  export type MahasiswaScalarFieldEnum = (typeof MahasiswaScalarFieldEnum)[keyof typeof MahasiswaScalarFieldEnum]


  export const NilaiScalarFieldEnum: {
    id: 'id',
    nim: 'nim',
    jadwal_seminar_id: 'jadwal_seminar_id',
    nip_penguji: 'nip_penguji',
    nip_pembimbing: 'nip_pembimbing',
    nilai_pembimbing: 'nilai_pembimbing',
    nilai_penguji: 'nilai_penguji',
    note_pembimbing: 'note_pembimbing',
    note_penguji: 'note_penguji'
  };

  export type NilaiScalarFieldEnum = (typeof NilaiScalarFieldEnum)[keyof typeof NilaiScalarFieldEnum]


  export const Nilai_instansiScalarFieldEnum: {
    id: 'id',
    tanggal: 'tanggal',
    nilai_angka: 'nilai_angka',
    nilai_huruf: 'nilai_huruf',
    nim: 'nim',
    id_pembimbing_instansi: 'id_pembimbing_instansi'
  };

  export type Nilai_instansiScalarFieldEnum = (typeof Nilai_instansiScalarFieldEnum)[keyof typeof Nilai_instansiScalarFieldEnum]


  export const Pembimbing_instansiScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    jabatan: 'jabatan',
    no_hp: 'no_hp',
    id_instansi: 'id_instansi'
  };

  export type Pembimbing_instansiScalarFieldEnum = (typeof Pembimbing_instansiScalarFieldEnum)[keyof typeof Pembimbing_instansiScalarFieldEnum]


  export const Pendaftaran_kpScalarFieldEnum: {
    nim: 'nim',
    semester: 'semester',
    tanggalTerdaftar: 'tanggalTerdaftar',
    tanggalMulai: 'tanggalMulai',
    tenggatWaktu: 'tenggatWaktu',
    gagal: 'gagal',
    tanggalSelesai: 'tanggalSelesai',
    linkSuratPengantar: 'linkSuratPengantar',
    linkSuratBalasan: 'linkSuratBalasan',
    linkSuratPenunjukkanDospem: 'linkSuratPenunjukkanDospem',
    alasanLanjutKP: 'alasanLanjutKP',
    linkSuratPerpanjanganKP: 'linkSuratPerpanjanganKP',
    id_pembimbing_instansi: 'id_pembimbing_instansi',
    nip: 'nip'
  };

  export type Pendaftaran_kpScalarFieldEnum = (typeof Pendaftaran_kpScalarFieldEnum)[keyof typeof Pendaftaran_kpScalarFieldEnum]


  export const RuanganScalarFieldEnum: {
    nama: 'nama'
  };

  export type RuanganScalarFieldEnum = (typeof RuanganScalarFieldEnum)[keyof typeof RuanganScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusValidasi'
   */
  export type EnumStatusValidasiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusValidasi'>
    


  /**
   * Reference to a field of type 'StatusValidasi[]'
   */
  export type ListEnumStatusValidasiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusValidasi[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'JenisDokumen'
   */
  export type EnumJenisDokumenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisDokumen'>
    


  /**
   * Reference to a field of type 'JenisDokumen[]'
   */
  export type ListEnumJenisDokumenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisDokumen[]'>
    


  /**
   * Reference to a field of type 'DokumenStatus'
   */
  export type EnumDokumenStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DokumenStatus'>
    


  /**
   * Reference to a field of type 'DokumenStatus[]'
   */
  export type ListEnumDokumenStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DokumenStatus[]'>
    


  /**
   * Reference to a field of type 'JenisInstansi'
   */
  export type EnumJenisInstansiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisInstansi'>
    


  /**
   * Reference to a field of type 'JenisInstansi[]'
   */
  export type ListEnumJenisInstansiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisInstansi[]'>
    


  /**
   * Reference to a field of type 'StatusInstansi'
   */
  export type EnumStatusInstansiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusInstansi'>
    


  /**
   * Reference to a field of type 'StatusInstansi[]'
   */
  export type ListEnumStatusInstansiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusInstansi[]'>
    


  /**
   * Reference to a field of type 'StatusSeminar'
   */
  export type EnumStatusSeminarFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSeminar'>
    


  /**
   * Reference to a field of type 'StatusSeminar[]'
   */
  export type ListEnumStatusSeminarFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSeminar[]'>
    


  /**
   * Reference to a field of type 'LogType'
   */
  export type EnumLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogType'>
    


  /**
   * Reference to a field of type 'LogType[]'
   */
  export type ListEnumLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type bimbinganWhereInput = {
    AND?: bimbinganWhereInput | bimbinganWhereInput[]
    OR?: bimbinganWhereInput[]
    NOT?: bimbinganWhereInput | bimbinganWhereInput[]
    id?: StringFilter<"bimbingan"> | string
    tanggal?: DateTimeFilter<"bimbingan"> | Date | string
    catatan?: StringFilter<"bimbingan"> | string
    status?: EnumStatusValidasiFilter<"bimbingan"> | $Enums.StatusValidasi
    nim?: StringFilter<"bimbingan"> | string
    nip?: StringFilter<"bimbingan"> | string
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, mahasiswaWhereInput>
    dosen?: XOR<DosenScalarRelationFilter, dosenWhereInput>
  }

  export type bimbinganOrderByWithRelationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
    mahasiswa?: mahasiswaOrderByWithRelationInput
    dosen?: dosenOrderByWithRelationInput
  }

  export type bimbinganWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: bimbinganWhereInput | bimbinganWhereInput[]
    OR?: bimbinganWhereInput[]
    NOT?: bimbinganWhereInput | bimbinganWhereInput[]
    tanggal?: DateTimeFilter<"bimbingan"> | Date | string
    catatan?: StringFilter<"bimbingan"> | string
    status?: EnumStatusValidasiFilter<"bimbingan"> | $Enums.StatusValidasi
    nim?: StringFilter<"bimbingan"> | string
    nip?: StringFilter<"bimbingan"> | string
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, mahasiswaWhereInput>
    dosen?: XOR<DosenScalarRelationFilter, dosenWhereInput>
  }, "id">

  export type bimbinganOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
    _count?: bimbinganCountOrderByAggregateInput
    _max?: bimbinganMaxOrderByAggregateInput
    _min?: bimbinganMinOrderByAggregateInput
  }

  export type bimbinganScalarWhereWithAggregatesInput = {
    AND?: bimbinganScalarWhereWithAggregatesInput | bimbinganScalarWhereWithAggregatesInput[]
    OR?: bimbinganScalarWhereWithAggregatesInput[]
    NOT?: bimbinganScalarWhereWithAggregatesInput | bimbinganScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"bimbingan"> | string
    tanggal?: DateTimeWithAggregatesFilter<"bimbingan"> | Date | string
    catatan?: StringWithAggregatesFilter<"bimbingan"> | string
    status?: EnumStatusValidasiWithAggregatesFilter<"bimbingan"> | $Enums.StatusValidasi
    nim?: StringWithAggregatesFilter<"bimbingan"> | string
    nip?: StringWithAggregatesFilter<"bimbingan"> | string
  }

  export type daily_reportWhereInput = {
    AND?: daily_reportWhereInput | daily_reportWhereInput[]
    OR?: daily_reportWhereInput[]
    NOT?: daily_reportWhereInput | daily_reportWhereInput[]
    id?: StringFilter<"daily_report"> | string
    tanggal?: DateTimeFilter<"daily_report"> | Date | string
    status?: EnumStatusValidasiFilter<"daily_report"> | $Enums.StatusValidasi
    catatan?: StringNullableFilter<"daily_report"> | string | null
    latitude?: FloatFilter<"daily_report"> | number
    longitude?: FloatFilter<"daily_report"> | number
    nim?: StringFilter<"daily_report"> | string
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, mahasiswaWhereInput>
    detail_daily_report?: Detail_daily_reportListRelationFilter
  }

  export type daily_reportOrderByWithRelationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    catatan?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    nim?: SortOrder
    mahasiswa?: mahasiswaOrderByWithRelationInput
    detail_daily_report?: detail_daily_reportOrderByRelationAggregateInput
  }

  export type daily_reportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: daily_reportWhereInput | daily_reportWhereInput[]
    OR?: daily_reportWhereInput[]
    NOT?: daily_reportWhereInput | daily_reportWhereInput[]
    tanggal?: DateTimeFilter<"daily_report"> | Date | string
    status?: EnumStatusValidasiFilter<"daily_report"> | $Enums.StatusValidasi
    catatan?: StringNullableFilter<"daily_report"> | string | null
    latitude?: FloatFilter<"daily_report"> | number
    longitude?: FloatFilter<"daily_report"> | number
    nim?: StringFilter<"daily_report"> | string
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, mahasiswaWhereInput>
    detail_daily_report?: Detail_daily_reportListRelationFilter
  }, "id">

  export type daily_reportOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    catatan?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    nim?: SortOrder
    _count?: daily_reportCountOrderByAggregateInput
    _avg?: daily_reportAvgOrderByAggregateInput
    _max?: daily_reportMaxOrderByAggregateInput
    _min?: daily_reportMinOrderByAggregateInput
    _sum?: daily_reportSumOrderByAggregateInput
  }

  export type daily_reportScalarWhereWithAggregatesInput = {
    AND?: daily_reportScalarWhereWithAggregatesInput | daily_reportScalarWhereWithAggregatesInput[]
    OR?: daily_reportScalarWhereWithAggregatesInput[]
    NOT?: daily_reportScalarWhereWithAggregatesInput | daily_reportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"daily_report"> | string
    tanggal?: DateTimeWithAggregatesFilter<"daily_report"> | Date | string
    status?: EnumStatusValidasiWithAggregatesFilter<"daily_report"> | $Enums.StatusValidasi
    catatan?: StringNullableWithAggregatesFilter<"daily_report"> | string | null
    latitude?: FloatWithAggregatesFilter<"daily_report"> | number
    longitude?: FloatWithAggregatesFilter<"daily_report"> | number
    nim?: StringWithAggregatesFilter<"daily_report"> | string
  }

  export type detail_daily_reportWhereInput = {
    AND?: detail_daily_reportWhereInput | detail_daily_reportWhereInput[]
    OR?: detail_daily_reportWhereInput[]
    NOT?: detail_daily_reportWhereInput | detail_daily_reportWhereInput[]
    id?: IntFilter<"detail_daily_report"> | number
    judul_kegiatan?: StringFilter<"detail_daily_report"> | string
    deskripsi_kegiatan?: StringFilter<"detail_daily_report"> | string
    waktu?: DateTimeFilter<"detail_daily_report"> | Date | string
    id_daily_report?: StringFilter<"detail_daily_report"> | string
    daily_report?: XOR<Daily_reportScalarRelationFilter, daily_reportWhereInput>
  }

  export type detail_daily_reportOrderByWithRelationInput = {
    id?: SortOrder
    judul_kegiatan?: SortOrder
    deskripsi_kegiatan?: SortOrder
    waktu?: SortOrder
    id_daily_report?: SortOrder
    daily_report?: daily_reportOrderByWithRelationInput
  }

  export type detail_daily_reportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: detail_daily_reportWhereInput | detail_daily_reportWhereInput[]
    OR?: detail_daily_reportWhereInput[]
    NOT?: detail_daily_reportWhereInput | detail_daily_reportWhereInput[]
    judul_kegiatan?: StringFilter<"detail_daily_report"> | string
    deskripsi_kegiatan?: StringFilter<"detail_daily_report"> | string
    waktu?: DateTimeFilter<"detail_daily_report"> | Date | string
    id_daily_report?: StringFilter<"detail_daily_report"> | string
    daily_report?: XOR<Daily_reportScalarRelationFilter, daily_reportWhereInput>
  }, "id">

  export type detail_daily_reportOrderByWithAggregationInput = {
    id?: SortOrder
    judul_kegiatan?: SortOrder
    deskripsi_kegiatan?: SortOrder
    waktu?: SortOrder
    id_daily_report?: SortOrder
    _count?: detail_daily_reportCountOrderByAggregateInput
    _avg?: detail_daily_reportAvgOrderByAggregateInput
    _max?: detail_daily_reportMaxOrderByAggregateInput
    _min?: detail_daily_reportMinOrderByAggregateInput
    _sum?: detail_daily_reportSumOrderByAggregateInput
  }

  export type detail_daily_reportScalarWhereWithAggregatesInput = {
    AND?: detail_daily_reportScalarWhereWithAggregatesInput | detail_daily_reportScalarWhereWithAggregatesInput[]
    OR?: detail_daily_reportScalarWhereWithAggregatesInput[]
    NOT?: detail_daily_reportScalarWhereWithAggregatesInput | detail_daily_reportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"detail_daily_report"> | number
    judul_kegiatan?: StringWithAggregatesFilter<"detail_daily_report"> | string
    deskripsi_kegiatan?: StringWithAggregatesFilter<"detail_daily_report"> | string
    waktu?: DateTimeWithAggregatesFilter<"detail_daily_report"> | Date | string
    id_daily_report?: StringWithAggregatesFilter<"detail_daily_report"> | string
  }

  export type dokumenWhereInput = {
    AND?: dokumenWhereInput | dokumenWhereInput[]
    OR?: dokumenWhereInput[]
    NOT?: dokumenWhereInput | dokumenWhereInput[]
    id?: StringFilter<"dokumen"> | string
    nim?: StringFilter<"dokumen"> | string
    jenis_dokumen?: EnumJenisDokumenFilter<"dokumen"> | $Enums.JenisDokumen
    file_path?: StringFilter<"dokumen"> | string
    tanggal_upload?: DateTimeFilter<"dokumen"> | Date | string
    status?: EnumDokumenStatusFilter<"dokumen"> | $Enums.DokumenStatus
    komentar?: StringNullableFilter<"dokumen"> | string | null
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, mahasiswaWhereInput>
  }

  export type dokumenOrderByWithRelationInput = {
    id?: SortOrder
    nim?: SortOrder
    jenis_dokumen?: SortOrder
    file_path?: SortOrder
    tanggal_upload?: SortOrder
    status?: SortOrder
    komentar?: SortOrderInput | SortOrder
    mahasiswa?: mahasiswaOrderByWithRelationInput
  }

  export type dokumenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: dokumenWhereInput | dokumenWhereInput[]
    OR?: dokumenWhereInput[]
    NOT?: dokumenWhereInput | dokumenWhereInput[]
    nim?: StringFilter<"dokumen"> | string
    jenis_dokumen?: EnumJenisDokumenFilter<"dokumen"> | $Enums.JenisDokumen
    file_path?: StringFilter<"dokumen"> | string
    tanggal_upload?: DateTimeFilter<"dokumen"> | Date | string
    status?: EnumDokumenStatusFilter<"dokumen"> | $Enums.DokumenStatus
    komentar?: StringNullableFilter<"dokumen"> | string | null
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, mahasiswaWhereInput>
  }, "id">

  export type dokumenOrderByWithAggregationInput = {
    id?: SortOrder
    nim?: SortOrder
    jenis_dokumen?: SortOrder
    file_path?: SortOrder
    tanggal_upload?: SortOrder
    status?: SortOrder
    komentar?: SortOrderInput | SortOrder
    _count?: dokumenCountOrderByAggregateInput
    _max?: dokumenMaxOrderByAggregateInput
    _min?: dokumenMinOrderByAggregateInput
  }

  export type dokumenScalarWhereWithAggregatesInput = {
    AND?: dokumenScalarWhereWithAggregatesInput | dokumenScalarWhereWithAggregatesInput[]
    OR?: dokumenScalarWhereWithAggregatesInput[]
    NOT?: dokumenScalarWhereWithAggregatesInput | dokumenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"dokumen"> | string
    nim?: StringWithAggregatesFilter<"dokumen"> | string
    jenis_dokumen?: EnumJenisDokumenWithAggregatesFilter<"dokumen"> | $Enums.JenisDokumen
    file_path?: StringWithAggregatesFilter<"dokumen"> | string
    tanggal_upload?: DateTimeWithAggregatesFilter<"dokumen"> | Date | string
    status?: EnumDokumenStatusWithAggregatesFilter<"dokumen"> | $Enums.DokumenStatus
    komentar?: StringNullableWithAggregatesFilter<"dokumen"> | string | null
  }

  export type dosenWhereInput = {
    AND?: dosenWhereInput | dosenWhereInput[]
    OR?: dosenWhereInput[]
    NOT?: dosenWhereInput | dosenWhereInput[]
    nip?: StringFilter<"dosen"> | string
    nama?: StringFilter<"dosen"> | string
    email?: StringFilter<"dosen"> | string
    no_hp?: StringFilter<"dosen"> | string
    id_telegram?: StringFilter<"dosen"> | string
    bimbingan?: BimbinganListRelationFilter
    jadwal?: JadwalListRelationFilter
    nilai_penguji?: NilaiListRelationFilter
    nilai_pembimbing?: NilaiListRelationFilter
    pendaftaran_kp?: Pendaftaran_kpListRelationFilter
  }

  export type dosenOrderByWithRelationInput = {
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    no_hp?: SortOrder
    id_telegram?: SortOrder
    bimbingan?: bimbinganOrderByRelationAggregateInput
    jadwal?: jadwalOrderByRelationAggregateInput
    nilai_penguji?: nilaiOrderByRelationAggregateInput
    nilai_pembimbing?: nilaiOrderByRelationAggregateInput
    pendaftaran_kp?: pendaftaran_kpOrderByRelationAggregateInput
  }

  export type dosenWhereUniqueInput = Prisma.AtLeast<{
    nip?: string
    email?: string
    id_telegram?: string
    AND?: dosenWhereInput | dosenWhereInput[]
    OR?: dosenWhereInput[]
    NOT?: dosenWhereInput | dosenWhereInput[]
    nama?: StringFilter<"dosen"> | string
    no_hp?: StringFilter<"dosen"> | string
    bimbingan?: BimbinganListRelationFilter
    jadwal?: JadwalListRelationFilter
    nilai_penguji?: NilaiListRelationFilter
    nilai_pembimbing?: NilaiListRelationFilter
    pendaftaran_kp?: Pendaftaran_kpListRelationFilter
  }, "nip" | "email" | "id_telegram">

  export type dosenOrderByWithAggregationInput = {
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    no_hp?: SortOrder
    id_telegram?: SortOrder
    _count?: dosenCountOrderByAggregateInput
    _max?: dosenMaxOrderByAggregateInput
    _min?: dosenMinOrderByAggregateInput
  }

  export type dosenScalarWhereWithAggregatesInput = {
    AND?: dosenScalarWhereWithAggregatesInput | dosenScalarWhereWithAggregatesInput[]
    OR?: dosenScalarWhereWithAggregatesInput[]
    NOT?: dosenScalarWhereWithAggregatesInput | dosenScalarWhereWithAggregatesInput[]
    nip?: StringWithAggregatesFilter<"dosen"> | string
    nama?: StringWithAggregatesFilter<"dosen"> | string
    email?: StringWithAggregatesFilter<"dosen"> | string
    no_hp?: StringWithAggregatesFilter<"dosen"> | string
    id_telegram?: StringWithAggregatesFilter<"dosen"> | string
  }

  export type instansiWhereInput = {
    AND?: instansiWhereInput | instansiWhereInput[]
    OR?: instansiWhereInput[]
    NOT?: instansiWhereInput | instansiWhereInput[]
    id?: IntFilter<"instansi"> | number
    nama?: StringFilter<"instansi"> | string
    alamat?: StringFilter<"instansi"> | string
    jenis?: EnumJenisInstansiFilter<"instansi"> | $Enums.JenisInstansi
    profil_singkat?: StringFilter<"instansi"> | string
    status?: EnumStatusInstansiFilter<"instansi"> | $Enums.StatusInstansi
    pembimbing_instansi?: Pembimbing_instansiListRelationFilter
  }

  export type instansiOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    jenis?: SortOrder
    profil_singkat?: SortOrder
    status?: SortOrder
    pembimbing_instansi?: pembimbing_instansiOrderByRelationAggregateInput
  }

  export type instansiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: instansiWhereInput | instansiWhereInput[]
    OR?: instansiWhereInput[]
    NOT?: instansiWhereInput | instansiWhereInput[]
    nama?: StringFilter<"instansi"> | string
    alamat?: StringFilter<"instansi"> | string
    jenis?: EnumJenisInstansiFilter<"instansi"> | $Enums.JenisInstansi
    profil_singkat?: StringFilter<"instansi"> | string
    status?: EnumStatusInstansiFilter<"instansi"> | $Enums.StatusInstansi
    pembimbing_instansi?: Pembimbing_instansiListRelationFilter
  }, "id">

  export type instansiOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    jenis?: SortOrder
    profil_singkat?: SortOrder
    status?: SortOrder
    _count?: instansiCountOrderByAggregateInput
    _avg?: instansiAvgOrderByAggregateInput
    _max?: instansiMaxOrderByAggregateInput
    _min?: instansiMinOrderByAggregateInput
    _sum?: instansiSumOrderByAggregateInput
  }

  export type instansiScalarWhereWithAggregatesInput = {
    AND?: instansiScalarWhereWithAggregatesInput | instansiScalarWhereWithAggregatesInput[]
    OR?: instansiScalarWhereWithAggregatesInput[]
    NOT?: instansiScalarWhereWithAggregatesInput | instansiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"instansi"> | number
    nama?: StringWithAggregatesFilter<"instansi"> | string
    alamat?: StringWithAggregatesFilter<"instansi"> | string
    jenis?: EnumJenisInstansiWithAggregatesFilter<"instansi"> | $Enums.JenisInstansi
    profil_singkat?: StringWithAggregatesFilter<"instansi"> | string
    status?: EnumStatusInstansiWithAggregatesFilter<"instansi"> | $Enums.StatusInstansi
  }

  export type jadwalWhereInput = {
    AND?: jadwalWhereInput | jadwalWhereInput[]
    OR?: jadwalWhereInput[]
    NOT?: jadwalWhereInput | jadwalWhereInput[]
    id?: StringFilter<"jadwal"> | string
    nim?: StringFilter<"jadwal"> | string
    nip?: StringFilter<"jadwal"> | string
    tanggal?: DateTimeFilter<"jadwal"> | Date | string
    waktu_mulai?: DateTimeFilter<"jadwal"> | Date | string
    waktu_selesai?: DateTimeFilter<"jadwal"> | Date | string
    ruangan_nama?: StringFilter<"jadwal"> | string
    status?: EnumStatusSeminarFilter<"jadwal"> | $Enums.StatusSeminar
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, mahasiswaWhereInput>
    dosen?: XOR<DosenScalarRelationFilter, dosenWhereInput>
    ruangan?: XOR<RuanganScalarRelationFilter, ruanganWhereInput>
    nilai?: XOR<NilaiNullableScalarRelationFilter, nilaiWhereInput> | null
  }

  export type jadwalOrderByWithRelationInput = {
    id?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
    tanggal?: SortOrder
    waktu_mulai?: SortOrder
    waktu_selesai?: SortOrder
    ruangan_nama?: SortOrder
    status?: SortOrder
    mahasiswa?: mahasiswaOrderByWithRelationInput
    dosen?: dosenOrderByWithRelationInput
    ruangan?: ruanganOrderByWithRelationInput
    nilai?: nilaiOrderByWithRelationInput
  }

  export type jadwalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: jadwalWhereInput | jadwalWhereInput[]
    OR?: jadwalWhereInput[]
    NOT?: jadwalWhereInput | jadwalWhereInput[]
    nim?: StringFilter<"jadwal"> | string
    nip?: StringFilter<"jadwal"> | string
    tanggal?: DateTimeFilter<"jadwal"> | Date | string
    waktu_mulai?: DateTimeFilter<"jadwal"> | Date | string
    waktu_selesai?: DateTimeFilter<"jadwal"> | Date | string
    ruangan_nama?: StringFilter<"jadwal"> | string
    status?: EnumStatusSeminarFilter<"jadwal"> | $Enums.StatusSeminar
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, mahasiswaWhereInput>
    dosen?: XOR<DosenScalarRelationFilter, dosenWhereInput>
    ruangan?: XOR<RuanganScalarRelationFilter, ruanganWhereInput>
    nilai?: XOR<NilaiNullableScalarRelationFilter, nilaiWhereInput> | null
  }, "id">

  export type jadwalOrderByWithAggregationInput = {
    id?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
    tanggal?: SortOrder
    waktu_mulai?: SortOrder
    waktu_selesai?: SortOrder
    ruangan_nama?: SortOrder
    status?: SortOrder
    _count?: jadwalCountOrderByAggregateInput
    _max?: jadwalMaxOrderByAggregateInput
    _min?: jadwalMinOrderByAggregateInput
  }

  export type jadwalScalarWhereWithAggregatesInput = {
    AND?: jadwalScalarWhereWithAggregatesInput | jadwalScalarWhereWithAggregatesInput[]
    OR?: jadwalScalarWhereWithAggregatesInput[]
    NOT?: jadwalScalarWhereWithAggregatesInput | jadwalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"jadwal"> | string
    nim?: StringWithAggregatesFilter<"jadwal"> | string
    nip?: StringWithAggregatesFilter<"jadwal"> | string
    tanggal?: DateTimeWithAggregatesFilter<"jadwal"> | Date | string
    waktu_mulai?: DateTimeWithAggregatesFilter<"jadwal"> | Date | string
    waktu_selesai?: DateTimeWithAggregatesFilter<"jadwal"> | Date | string
    ruangan_nama?: StringWithAggregatesFilter<"jadwal"> | string
    status?: EnumStatusSeminarWithAggregatesFilter<"jadwal"> | $Enums.StatusSeminar
  }

  export type log_jadwalWhereInput = {
    AND?: log_jadwalWhereInput | log_jadwalWhereInput[]
    OR?: log_jadwalWhereInput[]
    NOT?: log_jadwalWhereInput | log_jadwalWhereInput[]
    id?: StringFilter<"log_jadwal"> | string
    jadwal_seminar_id?: StringFilter<"log_jadwal"> | string
    log_type?: EnumLogTypeFilter<"log_jadwal"> | $Enums.LogType
    nip?: StringFilter<"log_jadwal"> | string
    tanggal_lama?: DateTimeNullableFilter<"log_jadwal"> | Date | string | null
    tanggal_baru?: DateTimeNullableFilter<"log_jadwal"> | Date | string | null
    ruangan_lama?: StringNullableFilter<"log_jadwal"> | string | null
    ruangan_baru?: StringNullableFilter<"log_jadwal"> | string | null
    keterangan?: StringNullableFilter<"log_jadwal"> | string | null
    created_at?: DateTimeFilter<"log_jadwal"> | Date | string
  }

  export type log_jadwalOrderByWithRelationInput = {
    id?: SortOrder
    jadwal_seminar_id?: SortOrder
    log_type?: SortOrder
    nip?: SortOrder
    tanggal_lama?: SortOrderInput | SortOrder
    tanggal_baru?: SortOrderInput | SortOrder
    ruangan_lama?: SortOrderInput | SortOrder
    ruangan_baru?: SortOrderInput | SortOrder
    keterangan?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type log_jadwalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: log_jadwalWhereInput | log_jadwalWhereInput[]
    OR?: log_jadwalWhereInput[]
    NOT?: log_jadwalWhereInput | log_jadwalWhereInput[]
    jadwal_seminar_id?: StringFilter<"log_jadwal"> | string
    log_type?: EnumLogTypeFilter<"log_jadwal"> | $Enums.LogType
    nip?: StringFilter<"log_jadwal"> | string
    tanggal_lama?: DateTimeNullableFilter<"log_jadwal"> | Date | string | null
    tanggal_baru?: DateTimeNullableFilter<"log_jadwal"> | Date | string | null
    ruangan_lama?: StringNullableFilter<"log_jadwal"> | string | null
    ruangan_baru?: StringNullableFilter<"log_jadwal"> | string | null
    keterangan?: StringNullableFilter<"log_jadwal"> | string | null
    created_at?: DateTimeFilter<"log_jadwal"> | Date | string
  }, "id">

  export type log_jadwalOrderByWithAggregationInput = {
    id?: SortOrder
    jadwal_seminar_id?: SortOrder
    log_type?: SortOrder
    nip?: SortOrder
    tanggal_lama?: SortOrderInput | SortOrder
    tanggal_baru?: SortOrderInput | SortOrder
    ruangan_lama?: SortOrderInput | SortOrder
    ruangan_baru?: SortOrderInput | SortOrder
    keterangan?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: log_jadwalCountOrderByAggregateInput
    _max?: log_jadwalMaxOrderByAggregateInput
    _min?: log_jadwalMinOrderByAggregateInput
  }

  export type log_jadwalScalarWhereWithAggregatesInput = {
    AND?: log_jadwalScalarWhereWithAggregatesInput | log_jadwalScalarWhereWithAggregatesInput[]
    OR?: log_jadwalScalarWhereWithAggregatesInput[]
    NOT?: log_jadwalScalarWhereWithAggregatesInput | log_jadwalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"log_jadwal"> | string
    jadwal_seminar_id?: StringWithAggregatesFilter<"log_jadwal"> | string
    log_type?: EnumLogTypeWithAggregatesFilter<"log_jadwal"> | $Enums.LogType
    nip?: StringWithAggregatesFilter<"log_jadwal"> | string
    tanggal_lama?: DateTimeNullableWithAggregatesFilter<"log_jadwal"> | Date | string | null
    tanggal_baru?: DateTimeNullableWithAggregatesFilter<"log_jadwal"> | Date | string | null
    ruangan_lama?: StringNullableWithAggregatesFilter<"log_jadwal"> | string | null
    ruangan_baru?: StringNullableWithAggregatesFilter<"log_jadwal"> | string | null
    keterangan?: StringNullableWithAggregatesFilter<"log_jadwal"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"log_jadwal"> | Date | string
  }

  export type mahasiswaWhereInput = {
    AND?: mahasiswaWhereInput | mahasiswaWhereInput[]
    OR?: mahasiswaWhereInput[]
    NOT?: mahasiswaWhereInput | mahasiswaWhereInput[]
    nim?: StringFilter<"mahasiswa"> | string
    nama?: StringFilter<"mahasiswa"> | string
    email?: StringFilter<"mahasiswa"> | string
    bimbingan?: BimbinganListRelationFilter
    daily_report?: Daily_reportListRelationFilter
    dokumen?: DokumenListRelationFilter
    jadwal?: JadwalListRelationFilter
    nilai_instansi?: XOR<Nilai_instansiNullableScalarRelationFilter, nilai_instansiWhereInput> | null
    pendaftaran_kp?: Pendaftaran_kpListRelationFilter
    nilai?: NilaiListRelationFilter
  }

  export type mahasiswaOrderByWithRelationInput = {
    nim?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    bimbingan?: bimbinganOrderByRelationAggregateInput
    daily_report?: daily_reportOrderByRelationAggregateInput
    dokumen?: dokumenOrderByRelationAggregateInput
    jadwal?: jadwalOrderByRelationAggregateInput
    nilai_instansi?: nilai_instansiOrderByWithRelationInput
    pendaftaran_kp?: pendaftaran_kpOrderByRelationAggregateInput
    nilai?: nilaiOrderByRelationAggregateInput
  }

  export type mahasiswaWhereUniqueInput = Prisma.AtLeast<{
    nim?: string
    email?: string
    AND?: mahasiswaWhereInput | mahasiswaWhereInput[]
    OR?: mahasiswaWhereInput[]
    NOT?: mahasiswaWhereInput | mahasiswaWhereInput[]
    nama?: StringFilter<"mahasiswa"> | string
    bimbingan?: BimbinganListRelationFilter
    daily_report?: Daily_reportListRelationFilter
    dokumen?: DokumenListRelationFilter
    jadwal?: JadwalListRelationFilter
    nilai_instansi?: XOR<Nilai_instansiNullableScalarRelationFilter, nilai_instansiWhereInput> | null
    pendaftaran_kp?: Pendaftaran_kpListRelationFilter
    nilai?: NilaiListRelationFilter
  }, "nim" | "email">

  export type mahasiswaOrderByWithAggregationInput = {
    nim?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    _count?: mahasiswaCountOrderByAggregateInput
    _max?: mahasiswaMaxOrderByAggregateInput
    _min?: mahasiswaMinOrderByAggregateInput
  }

  export type mahasiswaScalarWhereWithAggregatesInput = {
    AND?: mahasiswaScalarWhereWithAggregatesInput | mahasiswaScalarWhereWithAggregatesInput[]
    OR?: mahasiswaScalarWhereWithAggregatesInput[]
    NOT?: mahasiswaScalarWhereWithAggregatesInput | mahasiswaScalarWhereWithAggregatesInput[]
    nim?: StringWithAggregatesFilter<"mahasiswa"> | string
    nama?: StringWithAggregatesFilter<"mahasiswa"> | string
    email?: StringWithAggregatesFilter<"mahasiswa"> | string
  }

  export type nilaiWhereInput = {
    AND?: nilaiWhereInput | nilaiWhereInput[]
    OR?: nilaiWhereInput[]
    NOT?: nilaiWhereInput | nilaiWhereInput[]
    id?: StringFilter<"nilai"> | string
    nim?: StringFilter<"nilai"> | string
    jadwal_seminar_id?: StringFilter<"nilai"> | string
    nip_penguji?: StringFilter<"nilai"> | string
    nip_pembimbing?: StringFilter<"nilai"> | string
    nilai_pembimbing?: FloatFilter<"nilai"> | number
    nilai_penguji?: FloatFilter<"nilai"> | number
    note_pembimbing?: StringNullableFilter<"nilai"> | string | null
    note_penguji?: StringNullableFilter<"nilai"> | string | null
    jadwal?: XOR<JadwalScalarRelationFilter, jadwalWhereInput>
    dosen_penguji?: XOR<DosenNullableScalarRelationFilter, dosenWhereInput> | null
    dosen_pembimbing?: XOR<DosenNullableScalarRelationFilter, dosenWhereInput> | null
    mahasiswa?: MahasiswaListRelationFilter
  }

  export type nilaiOrderByWithRelationInput = {
    id?: SortOrder
    nim?: SortOrder
    jadwal_seminar_id?: SortOrder
    nip_penguji?: SortOrder
    nip_pembimbing?: SortOrder
    nilai_pembimbing?: SortOrder
    nilai_penguji?: SortOrder
    note_pembimbing?: SortOrderInput | SortOrder
    note_penguji?: SortOrderInput | SortOrder
    jadwal?: jadwalOrderByWithRelationInput
    dosen_penguji?: dosenOrderByWithRelationInput
    dosen_pembimbing?: dosenOrderByWithRelationInput
    mahasiswa?: mahasiswaOrderByRelationAggregateInput
  }

  export type nilaiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jadwal_seminar_id?: string
    AND?: nilaiWhereInput | nilaiWhereInput[]
    OR?: nilaiWhereInput[]
    NOT?: nilaiWhereInput | nilaiWhereInput[]
    nim?: StringFilter<"nilai"> | string
    nip_penguji?: StringFilter<"nilai"> | string
    nip_pembimbing?: StringFilter<"nilai"> | string
    nilai_pembimbing?: FloatFilter<"nilai"> | number
    nilai_penguji?: FloatFilter<"nilai"> | number
    note_pembimbing?: StringNullableFilter<"nilai"> | string | null
    note_penguji?: StringNullableFilter<"nilai"> | string | null
    jadwal?: XOR<JadwalScalarRelationFilter, jadwalWhereInput>
    dosen_penguji?: XOR<DosenNullableScalarRelationFilter, dosenWhereInput> | null
    dosen_pembimbing?: XOR<DosenNullableScalarRelationFilter, dosenWhereInput> | null
    mahasiswa?: MahasiswaListRelationFilter
  }, "id" | "jadwal_seminar_id">

  export type nilaiOrderByWithAggregationInput = {
    id?: SortOrder
    nim?: SortOrder
    jadwal_seminar_id?: SortOrder
    nip_penguji?: SortOrder
    nip_pembimbing?: SortOrder
    nilai_pembimbing?: SortOrder
    nilai_penguji?: SortOrder
    note_pembimbing?: SortOrderInput | SortOrder
    note_penguji?: SortOrderInput | SortOrder
    _count?: nilaiCountOrderByAggregateInput
    _avg?: nilaiAvgOrderByAggregateInput
    _max?: nilaiMaxOrderByAggregateInput
    _min?: nilaiMinOrderByAggregateInput
    _sum?: nilaiSumOrderByAggregateInput
  }

  export type nilaiScalarWhereWithAggregatesInput = {
    AND?: nilaiScalarWhereWithAggregatesInput | nilaiScalarWhereWithAggregatesInput[]
    OR?: nilaiScalarWhereWithAggregatesInput[]
    NOT?: nilaiScalarWhereWithAggregatesInput | nilaiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"nilai"> | string
    nim?: StringWithAggregatesFilter<"nilai"> | string
    jadwal_seminar_id?: StringWithAggregatesFilter<"nilai"> | string
    nip_penguji?: StringWithAggregatesFilter<"nilai"> | string
    nip_pembimbing?: StringWithAggregatesFilter<"nilai"> | string
    nilai_pembimbing?: FloatWithAggregatesFilter<"nilai"> | number
    nilai_penguji?: FloatWithAggregatesFilter<"nilai"> | number
    note_pembimbing?: StringNullableWithAggregatesFilter<"nilai"> | string | null
    note_penguji?: StringNullableWithAggregatesFilter<"nilai"> | string | null
  }

  export type nilai_instansiWhereInput = {
    AND?: nilai_instansiWhereInput | nilai_instansiWhereInput[]
    OR?: nilai_instansiWhereInput[]
    NOT?: nilai_instansiWhereInput | nilai_instansiWhereInput[]
    id?: StringFilter<"nilai_instansi"> | string
    tanggal?: DateTimeFilter<"nilai_instansi"> | Date | string
    nilai_angka?: FloatFilter<"nilai_instansi"> | number
    nilai_huruf?: StringFilter<"nilai_instansi"> | string
    nim?: StringFilter<"nilai_instansi"> | string
    id_pembimbing_instansi?: StringFilter<"nilai_instansi"> | string
    pembimbing_instansi?: XOR<Pembimbing_instansiScalarRelationFilter, pembimbing_instansiWhereInput>
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, mahasiswaWhereInput>
  }

  export type nilai_instansiOrderByWithRelationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    nilai_angka?: SortOrder
    nilai_huruf?: SortOrder
    nim?: SortOrder
    id_pembimbing_instansi?: SortOrder
    pembimbing_instansi?: pembimbing_instansiOrderByWithRelationInput
    mahasiswa?: mahasiswaOrderByWithRelationInput
  }

  export type nilai_instansiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nim?: string
    AND?: nilai_instansiWhereInput | nilai_instansiWhereInput[]
    OR?: nilai_instansiWhereInput[]
    NOT?: nilai_instansiWhereInput | nilai_instansiWhereInput[]
    tanggal?: DateTimeFilter<"nilai_instansi"> | Date | string
    nilai_angka?: FloatFilter<"nilai_instansi"> | number
    nilai_huruf?: StringFilter<"nilai_instansi"> | string
    id_pembimbing_instansi?: StringFilter<"nilai_instansi"> | string
    pembimbing_instansi?: XOR<Pembimbing_instansiScalarRelationFilter, pembimbing_instansiWhereInput>
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, mahasiswaWhereInput>
  }, "id" | "nim">

  export type nilai_instansiOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    nilai_angka?: SortOrder
    nilai_huruf?: SortOrder
    nim?: SortOrder
    id_pembimbing_instansi?: SortOrder
    _count?: nilai_instansiCountOrderByAggregateInput
    _avg?: nilai_instansiAvgOrderByAggregateInput
    _max?: nilai_instansiMaxOrderByAggregateInput
    _min?: nilai_instansiMinOrderByAggregateInput
    _sum?: nilai_instansiSumOrderByAggregateInput
  }

  export type nilai_instansiScalarWhereWithAggregatesInput = {
    AND?: nilai_instansiScalarWhereWithAggregatesInput | nilai_instansiScalarWhereWithAggregatesInput[]
    OR?: nilai_instansiScalarWhereWithAggregatesInput[]
    NOT?: nilai_instansiScalarWhereWithAggregatesInput | nilai_instansiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"nilai_instansi"> | string
    tanggal?: DateTimeWithAggregatesFilter<"nilai_instansi"> | Date | string
    nilai_angka?: FloatWithAggregatesFilter<"nilai_instansi"> | number
    nilai_huruf?: StringWithAggregatesFilter<"nilai_instansi"> | string
    nim?: StringWithAggregatesFilter<"nilai_instansi"> | string
    id_pembimbing_instansi?: StringWithAggregatesFilter<"nilai_instansi"> | string
  }

  export type pembimbing_instansiWhereInput = {
    AND?: pembimbing_instansiWhereInput | pembimbing_instansiWhereInput[]
    OR?: pembimbing_instansiWhereInput[]
    NOT?: pembimbing_instansiWhereInput | pembimbing_instansiWhereInput[]
    id?: StringFilter<"pembimbing_instansi"> | string
    nama?: StringFilter<"pembimbing_instansi"> | string
    email?: StringFilter<"pembimbing_instansi"> | string
    jabatan?: StringFilter<"pembimbing_instansi"> | string
    no_hp?: StringFilter<"pembimbing_instansi"> | string
    id_instansi?: IntFilter<"pembimbing_instansi"> | number
    nilai_instansi?: Nilai_instansiListRelationFilter
    instansi?: XOR<InstansiScalarRelationFilter, instansiWhereInput>
    pendaftaran_kp?: Pendaftaran_kpListRelationFilter
  }

  export type pembimbing_instansiOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    jabatan?: SortOrder
    no_hp?: SortOrder
    id_instansi?: SortOrder
    nilai_instansi?: nilai_instansiOrderByRelationAggregateInput
    instansi?: instansiOrderByWithRelationInput
    pendaftaran_kp?: pendaftaran_kpOrderByRelationAggregateInput
  }

  export type pembimbing_instansiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: pembimbing_instansiWhereInput | pembimbing_instansiWhereInput[]
    OR?: pembimbing_instansiWhereInput[]
    NOT?: pembimbing_instansiWhereInput | pembimbing_instansiWhereInput[]
    nama?: StringFilter<"pembimbing_instansi"> | string
    jabatan?: StringFilter<"pembimbing_instansi"> | string
    no_hp?: StringFilter<"pembimbing_instansi"> | string
    id_instansi?: IntFilter<"pembimbing_instansi"> | number
    nilai_instansi?: Nilai_instansiListRelationFilter
    instansi?: XOR<InstansiScalarRelationFilter, instansiWhereInput>
    pendaftaran_kp?: Pendaftaran_kpListRelationFilter
  }, "id" | "email">

  export type pembimbing_instansiOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    jabatan?: SortOrder
    no_hp?: SortOrder
    id_instansi?: SortOrder
    _count?: pembimbing_instansiCountOrderByAggregateInput
    _avg?: pembimbing_instansiAvgOrderByAggregateInput
    _max?: pembimbing_instansiMaxOrderByAggregateInput
    _min?: pembimbing_instansiMinOrderByAggregateInput
    _sum?: pembimbing_instansiSumOrderByAggregateInput
  }

  export type pembimbing_instansiScalarWhereWithAggregatesInput = {
    AND?: pembimbing_instansiScalarWhereWithAggregatesInput | pembimbing_instansiScalarWhereWithAggregatesInput[]
    OR?: pembimbing_instansiScalarWhereWithAggregatesInput[]
    NOT?: pembimbing_instansiScalarWhereWithAggregatesInput | pembimbing_instansiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"pembimbing_instansi"> | string
    nama?: StringWithAggregatesFilter<"pembimbing_instansi"> | string
    email?: StringWithAggregatesFilter<"pembimbing_instansi"> | string
    jabatan?: StringWithAggregatesFilter<"pembimbing_instansi"> | string
    no_hp?: StringWithAggregatesFilter<"pembimbing_instansi"> | string
    id_instansi?: IntWithAggregatesFilter<"pembimbing_instansi"> | number
  }

  export type pendaftaran_kpWhereInput = {
    AND?: pendaftaran_kpWhereInput | pendaftaran_kpWhereInput[]
    OR?: pendaftaran_kpWhereInput[]
    NOT?: pendaftaran_kpWhereInput | pendaftaran_kpWhereInput[]
    nim?: StringFilter<"pendaftaran_kp"> | string
    semester?: IntFilter<"pendaftaran_kp"> | number
    tanggalTerdaftar?: DateTimeFilter<"pendaftaran_kp"> | Date | string
    tanggalMulai?: DateTimeNullableFilter<"pendaftaran_kp"> | Date | string | null
    tenggatWaktu?: DateTimeFilter<"pendaftaran_kp"> | Date | string
    gagal?: BoolFilter<"pendaftaran_kp"> | boolean
    tanggalSelesai?: DateTimeNullableFilter<"pendaftaran_kp"> | Date | string | null
    linkSuratPengantar?: StringNullableFilter<"pendaftaran_kp"> | string | null
    linkSuratBalasan?: StringNullableFilter<"pendaftaran_kp"> | string | null
    linkSuratPenunjukkanDospem?: StringNullableFilter<"pendaftaran_kp"> | string | null
    alasanLanjutKP?: StringNullableFilter<"pendaftaran_kp"> | string | null
    linkSuratPerpanjanganKP?: StringNullableFilter<"pendaftaran_kp"> | string | null
    id_pembimbing_instansi?: StringFilter<"pendaftaran_kp"> | string
    nip?: StringNullableFilter<"pendaftaran_kp"> | string | null
    pembimbing_instansi?: XOR<Pembimbing_instansiScalarRelationFilter, pembimbing_instansiWhereInput>
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, mahasiswaWhereInput>
    dosen?: XOR<DosenNullableScalarRelationFilter, dosenWhereInput> | null
  }

  export type pendaftaran_kpOrderByWithRelationInput = {
    nim?: SortOrder
    semester?: SortOrder
    tanggalTerdaftar?: SortOrder
    tanggalMulai?: SortOrderInput | SortOrder
    tenggatWaktu?: SortOrder
    gagal?: SortOrder
    tanggalSelesai?: SortOrderInput | SortOrder
    linkSuratPengantar?: SortOrderInput | SortOrder
    linkSuratBalasan?: SortOrderInput | SortOrder
    linkSuratPenunjukkanDospem?: SortOrderInput | SortOrder
    alasanLanjutKP?: SortOrderInput | SortOrder
    linkSuratPerpanjanganKP?: SortOrderInput | SortOrder
    id_pembimbing_instansi?: SortOrder
    nip?: SortOrderInput | SortOrder
    pembimbing_instansi?: pembimbing_instansiOrderByWithRelationInput
    mahasiswa?: mahasiswaOrderByWithRelationInput
    dosen?: dosenOrderByWithRelationInput
  }

  export type pendaftaran_kpWhereUniqueInput = Prisma.AtLeast<{
    nim_semester?: pendaftaran_kpNimSemesterCompoundUniqueInput
    AND?: pendaftaran_kpWhereInput | pendaftaran_kpWhereInput[]
    OR?: pendaftaran_kpWhereInput[]
    NOT?: pendaftaran_kpWhereInput | pendaftaran_kpWhereInput[]
    nim?: StringFilter<"pendaftaran_kp"> | string
    semester?: IntFilter<"pendaftaran_kp"> | number
    tanggalTerdaftar?: DateTimeFilter<"pendaftaran_kp"> | Date | string
    tanggalMulai?: DateTimeNullableFilter<"pendaftaran_kp"> | Date | string | null
    tenggatWaktu?: DateTimeFilter<"pendaftaran_kp"> | Date | string
    gagal?: BoolFilter<"pendaftaran_kp"> | boolean
    tanggalSelesai?: DateTimeNullableFilter<"pendaftaran_kp"> | Date | string | null
    linkSuratPengantar?: StringNullableFilter<"pendaftaran_kp"> | string | null
    linkSuratBalasan?: StringNullableFilter<"pendaftaran_kp"> | string | null
    linkSuratPenunjukkanDospem?: StringNullableFilter<"pendaftaran_kp"> | string | null
    alasanLanjutKP?: StringNullableFilter<"pendaftaran_kp"> | string | null
    linkSuratPerpanjanganKP?: StringNullableFilter<"pendaftaran_kp"> | string | null
    id_pembimbing_instansi?: StringFilter<"pendaftaran_kp"> | string
    nip?: StringNullableFilter<"pendaftaran_kp"> | string | null
    pembimbing_instansi?: XOR<Pembimbing_instansiScalarRelationFilter, pembimbing_instansiWhereInput>
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, mahasiswaWhereInput>
    dosen?: XOR<DosenNullableScalarRelationFilter, dosenWhereInput> | null
  }, "nim_semester">

  export type pendaftaran_kpOrderByWithAggregationInput = {
    nim?: SortOrder
    semester?: SortOrder
    tanggalTerdaftar?: SortOrder
    tanggalMulai?: SortOrderInput | SortOrder
    tenggatWaktu?: SortOrder
    gagal?: SortOrder
    tanggalSelesai?: SortOrderInput | SortOrder
    linkSuratPengantar?: SortOrderInput | SortOrder
    linkSuratBalasan?: SortOrderInput | SortOrder
    linkSuratPenunjukkanDospem?: SortOrderInput | SortOrder
    alasanLanjutKP?: SortOrderInput | SortOrder
    linkSuratPerpanjanganKP?: SortOrderInput | SortOrder
    id_pembimbing_instansi?: SortOrder
    nip?: SortOrderInput | SortOrder
    _count?: pendaftaran_kpCountOrderByAggregateInput
    _avg?: pendaftaran_kpAvgOrderByAggregateInput
    _max?: pendaftaran_kpMaxOrderByAggregateInput
    _min?: pendaftaran_kpMinOrderByAggregateInput
    _sum?: pendaftaran_kpSumOrderByAggregateInput
  }

  export type pendaftaran_kpScalarWhereWithAggregatesInput = {
    AND?: pendaftaran_kpScalarWhereWithAggregatesInput | pendaftaran_kpScalarWhereWithAggregatesInput[]
    OR?: pendaftaran_kpScalarWhereWithAggregatesInput[]
    NOT?: pendaftaran_kpScalarWhereWithAggregatesInput | pendaftaran_kpScalarWhereWithAggregatesInput[]
    nim?: StringWithAggregatesFilter<"pendaftaran_kp"> | string
    semester?: IntWithAggregatesFilter<"pendaftaran_kp"> | number
    tanggalTerdaftar?: DateTimeWithAggregatesFilter<"pendaftaran_kp"> | Date | string
    tanggalMulai?: DateTimeNullableWithAggregatesFilter<"pendaftaran_kp"> | Date | string | null
    tenggatWaktu?: DateTimeWithAggregatesFilter<"pendaftaran_kp"> | Date | string
    gagal?: BoolWithAggregatesFilter<"pendaftaran_kp"> | boolean
    tanggalSelesai?: DateTimeNullableWithAggregatesFilter<"pendaftaran_kp"> | Date | string | null
    linkSuratPengantar?: StringNullableWithAggregatesFilter<"pendaftaran_kp"> | string | null
    linkSuratBalasan?: StringNullableWithAggregatesFilter<"pendaftaran_kp"> | string | null
    linkSuratPenunjukkanDospem?: StringNullableWithAggregatesFilter<"pendaftaran_kp"> | string | null
    alasanLanjutKP?: StringNullableWithAggregatesFilter<"pendaftaran_kp"> | string | null
    linkSuratPerpanjanganKP?: StringNullableWithAggregatesFilter<"pendaftaran_kp"> | string | null
    id_pembimbing_instansi?: StringWithAggregatesFilter<"pendaftaran_kp"> | string
    nip?: StringNullableWithAggregatesFilter<"pendaftaran_kp"> | string | null
  }

  export type ruanganWhereInput = {
    AND?: ruanganWhereInput | ruanganWhereInput[]
    OR?: ruanganWhereInput[]
    NOT?: ruanganWhereInput | ruanganWhereInput[]
    nama?: StringFilter<"ruangan"> | string
    jadwal?: JadwalListRelationFilter
  }

  export type ruanganOrderByWithRelationInput = {
    nama?: SortOrder
    jadwal?: jadwalOrderByRelationAggregateInput
  }

  export type ruanganWhereUniqueInput = Prisma.AtLeast<{
    nama?: string
    AND?: ruanganWhereInput | ruanganWhereInput[]
    OR?: ruanganWhereInput[]
    NOT?: ruanganWhereInput | ruanganWhereInput[]
    jadwal?: JadwalListRelationFilter
  }, "nama" | "nama">

  export type ruanganOrderByWithAggregationInput = {
    nama?: SortOrder
    _count?: ruanganCountOrderByAggregateInput
    _max?: ruanganMaxOrderByAggregateInput
    _min?: ruanganMinOrderByAggregateInput
  }

  export type ruanganScalarWhereWithAggregatesInput = {
    AND?: ruanganScalarWhereWithAggregatesInput | ruanganScalarWhereWithAggregatesInput[]
    OR?: ruanganScalarWhereWithAggregatesInput[]
    NOT?: ruanganScalarWhereWithAggregatesInput | ruanganScalarWhereWithAggregatesInput[]
    nama?: StringWithAggregatesFilter<"ruangan"> | string
  }

  export type bimbinganCreateInput = {
    id: string
    tanggal: Date | string
    catatan: string
    status: $Enums.StatusValidasi
    mahasiswa: mahasiswaCreateNestedOneWithoutBimbinganInput
    dosen: dosenCreateNestedOneWithoutBimbinganInput
  }

  export type bimbinganUncheckedCreateInput = {
    id: string
    tanggal: Date | string
    catatan: string
    status: $Enums.StatusValidasi
    nim: string
    nip: string
  }

  export type bimbinganUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutBimbinganNestedInput
    dosen?: dosenUpdateOneRequiredWithoutBimbinganNestedInput
  }

  export type bimbinganUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    nim?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
  }

  export type bimbinganCreateManyInput = {
    id: string
    tanggal: Date | string
    catatan: string
    status: $Enums.StatusValidasi
    nim: string
    nip: string
  }

  export type bimbinganUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
  }

  export type bimbinganUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    nim?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
  }

  export type daily_reportCreateInput = {
    id: string
    tanggal: Date | string
    status: $Enums.StatusValidasi
    catatan?: string | null
    latitude: number
    longitude: number
    mahasiswa: mahasiswaCreateNestedOneWithoutDaily_reportInput
    detail_daily_report?: detail_daily_reportCreateNestedManyWithoutDaily_reportInput
  }

  export type daily_reportUncheckedCreateInput = {
    id: string
    tanggal: Date | string
    status: $Enums.StatusValidasi
    catatan?: string | null
    latitude: number
    longitude: number
    nim: string
    detail_daily_report?: detail_daily_reportUncheckedCreateNestedManyWithoutDaily_reportInput
  }

  export type daily_reportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutDaily_reportNestedInput
    detail_daily_report?: detail_daily_reportUpdateManyWithoutDaily_reportNestedInput
  }

  export type daily_reportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    nim?: StringFieldUpdateOperationsInput | string
    detail_daily_report?: detail_daily_reportUncheckedUpdateManyWithoutDaily_reportNestedInput
  }

  export type daily_reportCreateManyInput = {
    id: string
    tanggal: Date | string
    status: $Enums.StatusValidasi
    catatan?: string | null
    latitude: number
    longitude: number
    nim: string
  }

  export type daily_reportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type daily_reportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    nim?: StringFieldUpdateOperationsInput | string
  }

  export type detail_daily_reportCreateInput = {
    judul_kegiatan: string
    deskripsi_kegiatan: string
    waktu: Date | string
    daily_report: daily_reportCreateNestedOneWithoutDetail_daily_reportInput
  }

  export type detail_daily_reportUncheckedCreateInput = {
    id?: number
    judul_kegiatan: string
    deskripsi_kegiatan: string
    waktu: Date | string
    id_daily_report: string
  }

  export type detail_daily_reportUpdateInput = {
    judul_kegiatan?: StringFieldUpdateOperationsInput | string
    deskripsi_kegiatan?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_report?: daily_reportUpdateOneRequiredWithoutDetail_daily_reportNestedInput
  }

  export type detail_daily_reportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul_kegiatan?: StringFieldUpdateOperationsInput | string
    deskripsi_kegiatan?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
    id_daily_report?: StringFieldUpdateOperationsInput | string
  }

  export type detail_daily_reportCreateManyInput = {
    id?: number
    judul_kegiatan: string
    deskripsi_kegiatan: string
    waktu: Date | string
    id_daily_report: string
  }

  export type detail_daily_reportUpdateManyMutationInput = {
    judul_kegiatan?: StringFieldUpdateOperationsInput | string
    deskripsi_kegiatan?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detail_daily_reportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul_kegiatan?: StringFieldUpdateOperationsInput | string
    deskripsi_kegiatan?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
    id_daily_report?: StringFieldUpdateOperationsInput | string
  }

  export type dokumenCreateInput = {
    id: string
    jenis_dokumen: $Enums.JenisDokumen
    file_path: string
    tanggal_upload?: Date | string
    status?: $Enums.DokumenStatus
    komentar?: string | null
    mahasiswa: mahasiswaCreateNestedOneWithoutDokumenInput
  }

  export type dokumenUncheckedCreateInput = {
    id: string
    nim: string
    jenis_dokumen: $Enums.JenisDokumen
    file_path: string
    tanggal_upload?: Date | string
    status?: $Enums.DokumenStatus
    komentar?: string | null
  }

  export type dokumenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis_dokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    file_path?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDokumenStatusFieldUpdateOperationsInput | $Enums.DokumenStatus
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutDokumenNestedInput
  }

  export type dokumenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    jenis_dokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    file_path?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDokumenStatusFieldUpdateOperationsInput | $Enums.DokumenStatus
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dokumenCreateManyInput = {
    id: string
    nim: string
    jenis_dokumen: $Enums.JenisDokumen
    file_path: string
    tanggal_upload?: Date | string
    status?: $Enums.DokumenStatus
    komentar?: string | null
  }

  export type dokumenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis_dokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    file_path?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDokumenStatusFieldUpdateOperationsInput | $Enums.DokumenStatus
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dokumenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    jenis_dokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    file_path?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDokumenStatusFieldUpdateOperationsInput | $Enums.DokumenStatus
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dosenCreateInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    id_telegram: string
    bimbingan?: bimbinganCreateNestedManyWithoutDosenInput
    jadwal?: jadwalCreateNestedManyWithoutDosenInput
    nilai_penguji?: nilaiCreateNestedManyWithoutDosen_pengujiInput
    nilai_pembimbing?: nilaiCreateNestedManyWithoutDosen_pembimbingInput
    pendaftaran_kp?: pendaftaran_kpCreateNestedManyWithoutDosenInput
  }

  export type dosenUncheckedCreateInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    id_telegram: string
    bimbingan?: bimbinganUncheckedCreateNestedManyWithoutDosenInput
    jadwal?: jadwalUncheckedCreateNestedManyWithoutDosenInput
    nilai_penguji?: nilaiUncheckedCreateNestedManyWithoutDosen_pengujiInput
    nilai_pembimbing?: nilaiUncheckedCreateNestedManyWithoutDosen_pembimbingInput
    pendaftaran_kp?: pendaftaran_kpUncheckedCreateNestedManyWithoutDosenInput
  }

  export type dosenUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_telegram?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUpdateManyWithoutDosenNestedInput
    jadwal?: jadwalUpdateManyWithoutDosenNestedInput
    nilai_penguji?: nilaiUpdateManyWithoutDosen_pengujiNestedInput
    nilai_pembimbing?: nilaiUpdateManyWithoutDosen_pembimbingNestedInput
    pendaftaran_kp?: pendaftaran_kpUpdateManyWithoutDosenNestedInput
  }

  export type dosenUncheckedUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_telegram?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUncheckedUpdateManyWithoutDosenNestedInput
    jadwal?: jadwalUncheckedUpdateManyWithoutDosenNestedInput
    nilai_penguji?: nilaiUncheckedUpdateManyWithoutDosen_pengujiNestedInput
    nilai_pembimbing?: nilaiUncheckedUpdateManyWithoutDosen_pembimbingNestedInput
    pendaftaran_kp?: pendaftaran_kpUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type dosenCreateManyInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    id_telegram: string
  }

  export type dosenUpdateManyMutationInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_telegram?: StringFieldUpdateOperationsInput | string
  }

  export type dosenUncheckedUpdateManyInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_telegram?: StringFieldUpdateOperationsInput | string
  }

  export type instansiCreateInput = {
    nama: string
    alamat: string
    jenis: $Enums.JenisInstansi
    profil_singkat: string
    status?: $Enums.StatusInstansi
    pembimbing_instansi?: pembimbing_instansiCreateNestedManyWithoutInstansiInput
  }

  export type instansiUncheckedCreateInput = {
    id?: number
    nama: string
    alamat: string
    jenis: $Enums.JenisInstansi
    profil_singkat: string
    status?: $Enums.StatusInstansi
    pembimbing_instansi?: pembimbing_instansiUncheckedCreateNestedManyWithoutInstansiInput
  }

  export type instansiUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisInstansiFieldUpdateOperationsInput | $Enums.JenisInstansi
    profil_singkat?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInstansiFieldUpdateOperationsInput | $Enums.StatusInstansi
    pembimbing_instansi?: pembimbing_instansiUpdateManyWithoutInstansiNestedInput
  }

  export type instansiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisInstansiFieldUpdateOperationsInput | $Enums.JenisInstansi
    profil_singkat?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInstansiFieldUpdateOperationsInput | $Enums.StatusInstansi
    pembimbing_instansi?: pembimbing_instansiUncheckedUpdateManyWithoutInstansiNestedInput
  }

  export type instansiCreateManyInput = {
    id?: number
    nama: string
    alamat: string
    jenis: $Enums.JenisInstansi
    profil_singkat: string
    status?: $Enums.StatusInstansi
  }

  export type instansiUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisInstansiFieldUpdateOperationsInput | $Enums.JenisInstansi
    profil_singkat?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInstansiFieldUpdateOperationsInput | $Enums.StatusInstansi
  }

  export type instansiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisInstansiFieldUpdateOperationsInput | $Enums.JenisInstansi
    profil_singkat?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInstansiFieldUpdateOperationsInput | $Enums.StatusInstansi
  }

  export type jadwalCreateInput = {
    id: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    status?: $Enums.StatusSeminar
    mahasiswa: mahasiswaCreateNestedOneWithoutJadwalInput
    dosen: dosenCreateNestedOneWithoutJadwalInput
    ruangan: ruanganCreateNestedOneWithoutJadwalInput
    nilai?: nilaiCreateNestedOneWithoutJadwalInput
  }

  export type jadwalUncheckedCreateInput = {
    id: string
    nim: string
    nip: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    ruangan_nama: string
    status?: $Enums.StatusSeminar
    nilai?: nilaiUncheckedCreateNestedOneWithoutJadwalInput
  }

  export type jadwalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutJadwalNestedInput
    dosen?: dosenUpdateOneRequiredWithoutJadwalNestedInput
    ruangan?: ruanganUpdateOneRequiredWithoutJadwalNestedInput
    nilai?: nilaiUpdateOneWithoutJadwalNestedInput
  }

  export type jadwalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruangan_nama?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
    nilai?: nilaiUncheckedUpdateOneWithoutJadwalNestedInput
  }

  export type jadwalCreateManyInput = {
    id: string
    nim: string
    nip: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    ruangan_nama: string
    status?: $Enums.StatusSeminar
  }

  export type jadwalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
  }

  export type jadwalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruangan_nama?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
  }

  export type log_jadwalCreateInput = {
    id: string
    jadwal_seminar_id: string
    log_type: $Enums.LogType
    nip: string
    tanggal_lama?: Date | string | null
    tanggal_baru?: Date | string | null
    ruangan_lama?: string | null
    ruangan_baru?: string | null
    keterangan?: string | null
    created_at?: Date | string
  }

  export type log_jadwalUncheckedCreateInput = {
    id: string
    jadwal_seminar_id: string
    log_type: $Enums.LogType
    nip: string
    tanggal_lama?: Date | string | null
    tanggal_baru?: Date | string | null
    ruangan_lama?: string | null
    ruangan_baru?: string | null
    keterangan?: string | null
    created_at?: Date | string
  }

  export type log_jadwalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    log_type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    nip?: StringFieldUpdateOperationsInput | string
    tanggal_lama?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_baru?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ruangan_lama?: NullableStringFieldUpdateOperationsInput | string | null
    ruangan_baru?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type log_jadwalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    log_type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    nip?: StringFieldUpdateOperationsInput | string
    tanggal_lama?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_baru?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ruangan_lama?: NullableStringFieldUpdateOperationsInput | string | null
    ruangan_baru?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type log_jadwalCreateManyInput = {
    id: string
    jadwal_seminar_id: string
    log_type: $Enums.LogType
    nip: string
    tanggal_lama?: Date | string | null
    tanggal_baru?: Date | string | null
    ruangan_lama?: string | null
    ruangan_baru?: string | null
    keterangan?: string | null
    created_at?: Date | string
  }

  export type log_jadwalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    log_type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    nip?: StringFieldUpdateOperationsInput | string
    tanggal_lama?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_baru?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ruangan_lama?: NullableStringFieldUpdateOperationsInput | string | null
    ruangan_baru?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type log_jadwalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    log_type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    nip?: StringFieldUpdateOperationsInput | string
    tanggal_lama?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_baru?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ruangan_lama?: NullableStringFieldUpdateOperationsInput | string | null
    ruangan_baru?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mahasiswaCreateInput = {
    nim: string
    nama: string
    email: string
    bimbingan?: bimbinganCreateNestedManyWithoutMahasiswaInput
    daily_report?: daily_reportCreateNestedManyWithoutMahasiswaInput
    dokumen?: dokumenCreateNestedManyWithoutMahasiswaInput
    jadwal?: jadwalCreateNestedManyWithoutMahasiswaInput
    nilai_instansi?: nilai_instansiCreateNestedOneWithoutMahasiswaInput
    pendaftaran_kp?: pendaftaran_kpCreateNestedManyWithoutMahasiswaInput
    nilai?: nilaiCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUncheckedCreateInput = {
    nim: string
    nama: string
    email: string
    bimbingan?: bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    daily_report?: daily_reportUncheckedCreateNestedManyWithoutMahasiswaInput
    dokumen?: dokumenUncheckedCreateNestedManyWithoutMahasiswaInput
    jadwal?: jadwalUncheckedCreateNestedManyWithoutMahasiswaInput
    nilai_instansi?: nilai_instansiUncheckedCreateNestedOneWithoutMahasiswaInput
    pendaftaran_kp?: pendaftaran_kpUncheckedCreateNestedManyWithoutMahasiswaInput
    nilai?: nilaiUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUpdateInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUpdateManyWithoutMahasiswaNestedInput
    daily_report?: daily_reportUpdateManyWithoutMahasiswaNestedInput
    dokumen?: dokumenUpdateManyWithoutMahasiswaNestedInput
    jadwal?: jadwalUpdateManyWithoutMahasiswaNestedInput
    nilai_instansi?: nilai_instansiUpdateOneWithoutMahasiswaNestedInput
    pendaftaran_kp?: pendaftaran_kpUpdateManyWithoutMahasiswaNestedInput
    nilai?: nilaiUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaUncheckedUpdateInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    daily_report?: daily_reportUncheckedUpdateManyWithoutMahasiswaNestedInput
    dokumen?: dokumenUncheckedUpdateManyWithoutMahasiswaNestedInput
    jadwal?: jadwalUncheckedUpdateManyWithoutMahasiswaNestedInput
    nilai_instansi?: nilai_instansiUncheckedUpdateOneWithoutMahasiswaNestedInput
    pendaftaran_kp?: pendaftaran_kpUncheckedUpdateManyWithoutMahasiswaNestedInput
    nilai?: nilaiUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaCreateManyInput = {
    nim: string
    nama: string
    email: string
  }

  export type mahasiswaUpdateManyMutationInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type mahasiswaUncheckedUpdateManyInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type nilaiCreateInput = {
    id: string
    nim: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
    jadwal: jadwalCreateNestedOneWithoutNilaiInput
    dosen_penguji?: dosenCreateNestedOneWithoutNilai_pengujiInput
    dosen_pembimbing?: dosenCreateNestedOneWithoutNilai_pembimbingInput
    mahasiswa?: mahasiswaCreateNestedManyWithoutNilaiInput
  }

  export type nilaiUncheckedCreateInput = {
    id: string
    nim: string
    jadwal_seminar_id: string
    nip_penguji: string
    nip_pembimbing: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
    mahasiswa?: mahasiswaUncheckedCreateNestedManyWithoutNilaiInput
  }

  export type nilaiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
    jadwal?: jadwalUpdateOneRequiredWithoutNilaiNestedInput
    dosen_penguji?: dosenUpdateOneWithoutNilai_pengujiNestedInput
    dosen_pembimbing?: dosenUpdateOneWithoutNilai_pembimbingNestedInput
    mahasiswa?: mahasiswaUpdateManyWithoutNilaiNestedInput
  }

  export type nilaiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    nip_penguji?: StringFieldUpdateOperationsInput | string
    nip_pembimbing?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
    mahasiswa?: mahasiswaUncheckedUpdateManyWithoutNilaiNestedInput
  }

  export type nilaiCreateManyInput = {
    id: string
    nim: string
    jadwal_seminar_id: string
    nip_penguji: string
    nip_pembimbing: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
  }

  export type nilaiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type nilaiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    nip_penguji?: StringFieldUpdateOperationsInput | string
    nip_pembimbing?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type nilai_instansiCreateInput = {
    id: string
    tanggal: Date | string
    nilai_angka: number
    nilai_huruf: string
    pembimbing_instansi: pembimbing_instansiCreateNestedOneWithoutNilai_instansiInput
    mahasiswa: mahasiswaCreateNestedOneWithoutNilai_instansiInput
  }

  export type nilai_instansiUncheckedCreateInput = {
    id: string
    tanggal: Date | string
    nilai_angka: number
    nilai_huruf: string
    nim: string
    id_pembimbing_instansi: string
  }

  export type nilai_instansiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilai_angka?: FloatFieldUpdateOperationsInput | number
    nilai_huruf?: StringFieldUpdateOperationsInput | string
    pembimbing_instansi?: pembimbing_instansiUpdateOneRequiredWithoutNilai_instansiNestedInput
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutNilai_instansiNestedInput
  }

  export type nilai_instansiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilai_angka?: FloatFieldUpdateOperationsInput | number
    nilai_huruf?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    id_pembimbing_instansi?: StringFieldUpdateOperationsInput | string
  }

  export type nilai_instansiCreateManyInput = {
    id: string
    tanggal: Date | string
    nilai_angka: number
    nilai_huruf: string
    nim: string
    id_pembimbing_instansi: string
  }

  export type nilai_instansiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilai_angka?: FloatFieldUpdateOperationsInput | number
    nilai_huruf?: StringFieldUpdateOperationsInput | string
  }

  export type nilai_instansiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilai_angka?: FloatFieldUpdateOperationsInput | number
    nilai_huruf?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    id_pembimbing_instansi?: StringFieldUpdateOperationsInput | string
  }

  export type pembimbing_instansiCreateInput = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
    nilai_instansi?: nilai_instansiCreateNestedManyWithoutPembimbing_instansiInput
    instansi: instansiCreateNestedOneWithoutPembimbing_instansiInput
    pendaftaran_kp?: pendaftaran_kpCreateNestedManyWithoutPembimbing_instansiInput
  }

  export type pembimbing_instansiUncheckedCreateInput = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
    id_instansi: number
    nilai_instansi?: nilai_instansiUncheckedCreateNestedManyWithoutPembimbing_instansiInput
    pendaftaran_kp?: pendaftaran_kpUncheckedCreateNestedManyWithoutPembimbing_instansiInput
  }

  export type pembimbing_instansiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    nilai_instansi?: nilai_instansiUpdateManyWithoutPembimbing_instansiNestedInput
    instansi?: instansiUpdateOneRequiredWithoutPembimbing_instansiNestedInput
    pendaftaran_kp?: pendaftaran_kpUpdateManyWithoutPembimbing_instansiNestedInput
  }

  export type pembimbing_instansiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_instansi?: IntFieldUpdateOperationsInput | number
    nilai_instansi?: nilai_instansiUncheckedUpdateManyWithoutPembimbing_instansiNestedInput
    pendaftaran_kp?: pendaftaran_kpUncheckedUpdateManyWithoutPembimbing_instansiNestedInput
  }

  export type pembimbing_instansiCreateManyInput = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
    id_instansi: number
  }

  export type pembimbing_instansiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
  }

  export type pembimbing_instansiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_instansi?: IntFieldUpdateOperationsInput | number
  }

  export type pendaftaran_kpCreateInput = {
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    pembimbing_instansi: pembimbing_instansiCreateNestedOneWithoutPendaftaran_kpInput
    mahasiswa: mahasiswaCreateNestedOneWithoutPendaftaran_kpInput
    dosen?: dosenCreateNestedOneWithoutPendaftaran_kpInput
  }

  export type pendaftaran_kpUncheckedCreateInput = {
    nim: string
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    id_pembimbing_instansi: string
    nip?: string | null
  }

  export type pendaftaran_kpUpdateInput = {
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbing_instansi?: pembimbing_instansiUpdateOneRequiredWithoutPendaftaran_kpNestedInput
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutPendaftaran_kpNestedInput
    dosen?: dosenUpdateOneWithoutPendaftaran_kpNestedInput
  }

  export type pendaftaran_kpUncheckedUpdateInput = {
    nim?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    id_pembimbing_instansi?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pendaftaran_kpCreateManyInput = {
    nim: string
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    id_pembimbing_instansi: string
    nip?: string | null
  }

  export type pendaftaran_kpUpdateManyMutationInput = {
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pendaftaran_kpUncheckedUpdateManyInput = {
    nim?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    id_pembimbing_instansi?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ruanganCreateInput = {
    nama: string
    jadwal?: jadwalCreateNestedManyWithoutRuanganInput
  }

  export type ruanganUncheckedCreateInput = {
    nama: string
    jadwal?: jadwalUncheckedCreateNestedManyWithoutRuanganInput
  }

  export type ruanganUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    jadwal?: jadwalUpdateManyWithoutRuanganNestedInput
  }

  export type ruanganUncheckedUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    jadwal?: jadwalUncheckedUpdateManyWithoutRuanganNestedInput
  }

  export type ruanganCreateManyInput = {
    nama: string
  }

  export type ruanganUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type ruanganUncheckedUpdateManyInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumStatusValidasiFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusValidasi | EnumStatusValidasiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusValidasi[] | ListEnumStatusValidasiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusValidasi[] | ListEnumStatusValidasiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusValidasiFilter<$PrismaModel> | $Enums.StatusValidasi
  }

  export type MahasiswaScalarRelationFilter = {
    is?: mahasiswaWhereInput
    isNot?: mahasiswaWhereInput
  }

  export type DosenScalarRelationFilter = {
    is?: dosenWhereInput
    isNot?: dosenWhereInput
  }

  export type bimbinganCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
  }

  export type bimbinganMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
  }

  export type bimbinganMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusValidasiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusValidasi | EnumStatusValidasiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusValidasi[] | ListEnumStatusValidasiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusValidasi[] | ListEnumStatusValidasiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusValidasiWithAggregatesFilter<$PrismaModel> | $Enums.StatusValidasi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusValidasiFilter<$PrismaModel>
    _max?: NestedEnumStatusValidasiFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Detail_daily_reportListRelationFilter = {
    every?: detail_daily_reportWhereInput
    some?: detail_daily_reportWhereInput
    none?: detail_daily_reportWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type detail_daily_reportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type daily_reportCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    catatan?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    nim?: SortOrder
  }

  export type daily_reportAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type daily_reportMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    catatan?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    nim?: SortOrder
  }

  export type daily_reportMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    catatan?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    nim?: SortOrder
  }

  export type daily_reportSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Daily_reportScalarRelationFilter = {
    is?: daily_reportWhereInput
    isNot?: daily_reportWhereInput
  }

  export type detail_daily_reportCountOrderByAggregateInput = {
    id?: SortOrder
    judul_kegiatan?: SortOrder
    deskripsi_kegiatan?: SortOrder
    waktu?: SortOrder
    id_daily_report?: SortOrder
  }

  export type detail_daily_reportAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type detail_daily_reportMaxOrderByAggregateInput = {
    id?: SortOrder
    judul_kegiatan?: SortOrder
    deskripsi_kegiatan?: SortOrder
    waktu?: SortOrder
    id_daily_report?: SortOrder
  }

  export type detail_daily_reportMinOrderByAggregateInput = {
    id?: SortOrder
    judul_kegiatan?: SortOrder
    deskripsi_kegiatan?: SortOrder
    waktu?: SortOrder
    id_daily_report?: SortOrder
  }

  export type detail_daily_reportSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumJenisDokumenFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisDokumen | EnumJenisDokumenFieldRefInput<$PrismaModel>
    in?: $Enums.JenisDokumen[] | ListEnumJenisDokumenFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisDokumen[] | ListEnumJenisDokumenFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisDokumenFilter<$PrismaModel> | $Enums.JenisDokumen
  }

  export type EnumDokumenStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DokumenStatus | EnumDokumenStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DokumenStatus[] | ListEnumDokumenStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DokumenStatus[] | ListEnumDokumenStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDokumenStatusFilter<$PrismaModel> | $Enums.DokumenStatus
  }

  export type dokumenCountOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    jenis_dokumen?: SortOrder
    file_path?: SortOrder
    tanggal_upload?: SortOrder
    status?: SortOrder
    komentar?: SortOrder
  }

  export type dokumenMaxOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    jenis_dokumen?: SortOrder
    file_path?: SortOrder
    tanggal_upload?: SortOrder
    status?: SortOrder
    komentar?: SortOrder
  }

  export type dokumenMinOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    jenis_dokumen?: SortOrder
    file_path?: SortOrder
    tanggal_upload?: SortOrder
    status?: SortOrder
    komentar?: SortOrder
  }

  export type EnumJenisDokumenWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisDokumen | EnumJenisDokumenFieldRefInput<$PrismaModel>
    in?: $Enums.JenisDokumen[] | ListEnumJenisDokumenFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisDokumen[] | ListEnumJenisDokumenFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisDokumenWithAggregatesFilter<$PrismaModel> | $Enums.JenisDokumen
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisDokumenFilter<$PrismaModel>
    _max?: NestedEnumJenisDokumenFilter<$PrismaModel>
  }

  export type EnumDokumenStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DokumenStatus | EnumDokumenStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DokumenStatus[] | ListEnumDokumenStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DokumenStatus[] | ListEnumDokumenStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDokumenStatusWithAggregatesFilter<$PrismaModel> | $Enums.DokumenStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDokumenStatusFilter<$PrismaModel>
    _max?: NestedEnumDokumenStatusFilter<$PrismaModel>
  }

  export type BimbinganListRelationFilter = {
    every?: bimbinganWhereInput
    some?: bimbinganWhereInput
    none?: bimbinganWhereInput
  }

  export type JadwalListRelationFilter = {
    every?: jadwalWhereInput
    some?: jadwalWhereInput
    none?: jadwalWhereInput
  }

  export type NilaiListRelationFilter = {
    every?: nilaiWhereInput
    some?: nilaiWhereInput
    none?: nilaiWhereInput
  }

  export type Pendaftaran_kpListRelationFilter = {
    every?: pendaftaran_kpWhereInput
    some?: pendaftaran_kpWhereInput
    none?: pendaftaran_kpWhereInput
  }

  export type bimbinganOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type jadwalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type nilaiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pendaftaran_kpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dosenCountOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    no_hp?: SortOrder
    id_telegram?: SortOrder
  }

  export type dosenMaxOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    no_hp?: SortOrder
    id_telegram?: SortOrder
  }

  export type dosenMinOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    no_hp?: SortOrder
    id_telegram?: SortOrder
  }

  export type EnumJenisInstansiFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisInstansi | EnumJenisInstansiFieldRefInput<$PrismaModel>
    in?: $Enums.JenisInstansi[] | ListEnumJenisInstansiFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisInstansi[] | ListEnumJenisInstansiFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisInstansiFilter<$PrismaModel> | $Enums.JenisInstansi
  }

  export type EnumStatusInstansiFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusInstansi | EnumStatusInstansiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusInstansi[] | ListEnumStatusInstansiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusInstansi[] | ListEnumStatusInstansiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusInstansiFilter<$PrismaModel> | $Enums.StatusInstansi
  }

  export type Pembimbing_instansiListRelationFilter = {
    every?: pembimbing_instansiWhereInput
    some?: pembimbing_instansiWhereInput
    none?: pembimbing_instansiWhereInput
  }

  export type pembimbing_instansiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type instansiCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    jenis?: SortOrder
    profil_singkat?: SortOrder
    status?: SortOrder
  }

  export type instansiAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type instansiMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    jenis?: SortOrder
    profil_singkat?: SortOrder
    status?: SortOrder
  }

  export type instansiMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    jenis?: SortOrder
    profil_singkat?: SortOrder
    status?: SortOrder
  }

  export type instansiSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumJenisInstansiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisInstansi | EnumJenisInstansiFieldRefInput<$PrismaModel>
    in?: $Enums.JenisInstansi[] | ListEnumJenisInstansiFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisInstansi[] | ListEnumJenisInstansiFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisInstansiWithAggregatesFilter<$PrismaModel> | $Enums.JenisInstansi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisInstansiFilter<$PrismaModel>
    _max?: NestedEnumJenisInstansiFilter<$PrismaModel>
  }

  export type EnumStatusInstansiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusInstansi | EnumStatusInstansiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusInstansi[] | ListEnumStatusInstansiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusInstansi[] | ListEnumStatusInstansiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusInstansiWithAggregatesFilter<$PrismaModel> | $Enums.StatusInstansi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusInstansiFilter<$PrismaModel>
    _max?: NestedEnumStatusInstansiFilter<$PrismaModel>
  }

  export type EnumStatusSeminarFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSeminar | EnumStatusSeminarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSeminar[] | ListEnumStatusSeminarFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSeminar[] | ListEnumStatusSeminarFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSeminarFilter<$PrismaModel> | $Enums.StatusSeminar
  }

  export type RuanganScalarRelationFilter = {
    is?: ruanganWhereInput
    isNot?: ruanganWhereInput
  }

  export type NilaiNullableScalarRelationFilter = {
    is?: nilaiWhereInput | null
    isNot?: nilaiWhereInput | null
  }

  export type jadwalCountOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
    tanggal?: SortOrder
    waktu_mulai?: SortOrder
    waktu_selesai?: SortOrder
    ruangan_nama?: SortOrder
    status?: SortOrder
  }

  export type jadwalMaxOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
    tanggal?: SortOrder
    waktu_mulai?: SortOrder
    waktu_selesai?: SortOrder
    ruangan_nama?: SortOrder
    status?: SortOrder
  }

  export type jadwalMinOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
    tanggal?: SortOrder
    waktu_mulai?: SortOrder
    waktu_selesai?: SortOrder
    ruangan_nama?: SortOrder
    status?: SortOrder
  }

  export type EnumStatusSeminarWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSeminar | EnumStatusSeminarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSeminar[] | ListEnumStatusSeminarFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSeminar[] | ListEnumStatusSeminarFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSeminarWithAggregatesFilter<$PrismaModel> | $Enums.StatusSeminar
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusSeminarFilter<$PrismaModel>
    _max?: NestedEnumStatusSeminarFilter<$PrismaModel>
  }

  export type EnumLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeFilter<$PrismaModel> | $Enums.LogType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type log_jadwalCountOrderByAggregateInput = {
    id?: SortOrder
    jadwal_seminar_id?: SortOrder
    log_type?: SortOrder
    nip?: SortOrder
    tanggal_lama?: SortOrder
    tanggal_baru?: SortOrder
    ruangan_lama?: SortOrder
    ruangan_baru?: SortOrder
    keterangan?: SortOrder
    created_at?: SortOrder
  }

  export type log_jadwalMaxOrderByAggregateInput = {
    id?: SortOrder
    jadwal_seminar_id?: SortOrder
    log_type?: SortOrder
    nip?: SortOrder
    tanggal_lama?: SortOrder
    tanggal_baru?: SortOrder
    ruangan_lama?: SortOrder
    ruangan_baru?: SortOrder
    keterangan?: SortOrder
    created_at?: SortOrder
  }

  export type log_jadwalMinOrderByAggregateInput = {
    id?: SortOrder
    jadwal_seminar_id?: SortOrder
    log_type?: SortOrder
    nip?: SortOrder
    tanggal_lama?: SortOrder
    tanggal_baru?: SortOrder
    ruangan_lama?: SortOrder
    ruangan_baru?: SortOrder
    keterangan?: SortOrder
    created_at?: SortOrder
  }

  export type EnumLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.LogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogTypeFilter<$PrismaModel>
    _max?: NestedEnumLogTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Daily_reportListRelationFilter = {
    every?: daily_reportWhereInput
    some?: daily_reportWhereInput
    none?: daily_reportWhereInput
  }

  export type DokumenListRelationFilter = {
    every?: dokumenWhereInput
    some?: dokumenWhereInput
    none?: dokumenWhereInput
  }

  export type Nilai_instansiNullableScalarRelationFilter = {
    is?: nilai_instansiWhereInput | null
    isNot?: nilai_instansiWhereInput | null
  }

  export type daily_reportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dokumenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mahasiswaCountOrderByAggregateInput = {
    nim?: SortOrder
    nama?: SortOrder
    email?: SortOrder
  }

  export type mahasiswaMaxOrderByAggregateInput = {
    nim?: SortOrder
    nama?: SortOrder
    email?: SortOrder
  }

  export type mahasiswaMinOrderByAggregateInput = {
    nim?: SortOrder
    nama?: SortOrder
    email?: SortOrder
  }

  export type JadwalScalarRelationFilter = {
    is?: jadwalWhereInput
    isNot?: jadwalWhereInput
  }

  export type DosenNullableScalarRelationFilter = {
    is?: dosenWhereInput | null
    isNot?: dosenWhereInput | null
  }

  export type MahasiswaListRelationFilter = {
    every?: mahasiswaWhereInput
    some?: mahasiswaWhereInput
    none?: mahasiswaWhereInput
  }

  export type mahasiswaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type nilaiCountOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    jadwal_seminar_id?: SortOrder
    nip_penguji?: SortOrder
    nip_pembimbing?: SortOrder
    nilai_pembimbing?: SortOrder
    nilai_penguji?: SortOrder
    note_pembimbing?: SortOrder
    note_penguji?: SortOrder
  }

  export type nilaiAvgOrderByAggregateInput = {
    nilai_pembimbing?: SortOrder
    nilai_penguji?: SortOrder
  }

  export type nilaiMaxOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    jadwal_seminar_id?: SortOrder
    nip_penguji?: SortOrder
    nip_pembimbing?: SortOrder
    nilai_pembimbing?: SortOrder
    nilai_penguji?: SortOrder
    note_pembimbing?: SortOrder
    note_penguji?: SortOrder
  }

  export type nilaiMinOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    jadwal_seminar_id?: SortOrder
    nip_penguji?: SortOrder
    nip_pembimbing?: SortOrder
    nilai_pembimbing?: SortOrder
    nilai_penguji?: SortOrder
    note_pembimbing?: SortOrder
    note_penguji?: SortOrder
  }

  export type nilaiSumOrderByAggregateInput = {
    nilai_pembimbing?: SortOrder
    nilai_penguji?: SortOrder
  }

  export type Pembimbing_instansiScalarRelationFilter = {
    is?: pembimbing_instansiWhereInput
    isNot?: pembimbing_instansiWhereInput
  }

  export type nilai_instansiCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    nilai_angka?: SortOrder
    nilai_huruf?: SortOrder
    nim?: SortOrder
    id_pembimbing_instansi?: SortOrder
  }

  export type nilai_instansiAvgOrderByAggregateInput = {
    nilai_angka?: SortOrder
  }

  export type nilai_instansiMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    nilai_angka?: SortOrder
    nilai_huruf?: SortOrder
    nim?: SortOrder
    id_pembimbing_instansi?: SortOrder
  }

  export type nilai_instansiMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    nilai_angka?: SortOrder
    nilai_huruf?: SortOrder
    nim?: SortOrder
    id_pembimbing_instansi?: SortOrder
  }

  export type nilai_instansiSumOrderByAggregateInput = {
    nilai_angka?: SortOrder
  }

  export type Nilai_instansiListRelationFilter = {
    every?: nilai_instansiWhereInput
    some?: nilai_instansiWhereInput
    none?: nilai_instansiWhereInput
  }

  export type InstansiScalarRelationFilter = {
    is?: instansiWhereInput
    isNot?: instansiWhereInput
  }

  export type nilai_instansiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pembimbing_instansiCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    jabatan?: SortOrder
    no_hp?: SortOrder
    id_instansi?: SortOrder
  }

  export type pembimbing_instansiAvgOrderByAggregateInput = {
    id_instansi?: SortOrder
  }

  export type pembimbing_instansiMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    jabatan?: SortOrder
    no_hp?: SortOrder
    id_instansi?: SortOrder
  }

  export type pembimbing_instansiMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    jabatan?: SortOrder
    no_hp?: SortOrder
    id_instansi?: SortOrder
  }

  export type pembimbing_instansiSumOrderByAggregateInput = {
    id_instansi?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type pendaftaran_kpNimSemesterCompoundUniqueInput = {
    nim: string
    semester: number
  }

  export type pendaftaran_kpCountOrderByAggregateInput = {
    nim?: SortOrder
    semester?: SortOrder
    tanggalTerdaftar?: SortOrder
    tanggalMulai?: SortOrder
    tenggatWaktu?: SortOrder
    gagal?: SortOrder
    tanggalSelesai?: SortOrder
    linkSuratPengantar?: SortOrder
    linkSuratBalasan?: SortOrder
    linkSuratPenunjukkanDospem?: SortOrder
    alasanLanjutKP?: SortOrder
    linkSuratPerpanjanganKP?: SortOrder
    id_pembimbing_instansi?: SortOrder
    nip?: SortOrder
  }

  export type pendaftaran_kpAvgOrderByAggregateInput = {
    semester?: SortOrder
  }

  export type pendaftaran_kpMaxOrderByAggregateInput = {
    nim?: SortOrder
    semester?: SortOrder
    tanggalTerdaftar?: SortOrder
    tanggalMulai?: SortOrder
    tenggatWaktu?: SortOrder
    gagal?: SortOrder
    tanggalSelesai?: SortOrder
    linkSuratPengantar?: SortOrder
    linkSuratBalasan?: SortOrder
    linkSuratPenunjukkanDospem?: SortOrder
    alasanLanjutKP?: SortOrder
    linkSuratPerpanjanganKP?: SortOrder
    id_pembimbing_instansi?: SortOrder
    nip?: SortOrder
  }

  export type pendaftaran_kpMinOrderByAggregateInput = {
    nim?: SortOrder
    semester?: SortOrder
    tanggalTerdaftar?: SortOrder
    tanggalMulai?: SortOrder
    tenggatWaktu?: SortOrder
    gagal?: SortOrder
    tanggalSelesai?: SortOrder
    linkSuratPengantar?: SortOrder
    linkSuratBalasan?: SortOrder
    linkSuratPenunjukkanDospem?: SortOrder
    alasanLanjutKP?: SortOrder
    linkSuratPerpanjanganKP?: SortOrder
    id_pembimbing_instansi?: SortOrder
    nip?: SortOrder
  }

  export type pendaftaran_kpSumOrderByAggregateInput = {
    semester?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ruanganCountOrderByAggregateInput = {
    nama?: SortOrder
  }

  export type ruanganMaxOrderByAggregateInput = {
    nama?: SortOrder
  }

  export type ruanganMinOrderByAggregateInput = {
    nama?: SortOrder
  }

  export type mahasiswaCreateNestedOneWithoutBimbinganInput = {
    create?: XOR<mahasiswaCreateWithoutBimbinganInput, mahasiswaUncheckedCreateWithoutBimbinganInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutBimbinganInput
    connect?: mahasiswaWhereUniqueInput
  }

  export type dosenCreateNestedOneWithoutBimbinganInput = {
    create?: XOR<dosenCreateWithoutBimbinganInput, dosenUncheckedCreateWithoutBimbinganInput>
    connectOrCreate?: dosenCreateOrConnectWithoutBimbinganInput
    connect?: dosenWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumStatusValidasiFieldUpdateOperationsInput = {
    set?: $Enums.StatusValidasi
  }

  export type mahasiswaUpdateOneRequiredWithoutBimbinganNestedInput = {
    create?: XOR<mahasiswaCreateWithoutBimbinganInput, mahasiswaUncheckedCreateWithoutBimbinganInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutBimbinganInput
    upsert?: mahasiswaUpsertWithoutBimbinganInput
    connect?: mahasiswaWhereUniqueInput
    update?: XOR<XOR<mahasiswaUpdateToOneWithWhereWithoutBimbinganInput, mahasiswaUpdateWithoutBimbinganInput>, mahasiswaUncheckedUpdateWithoutBimbinganInput>
  }

  export type dosenUpdateOneRequiredWithoutBimbinganNestedInput = {
    create?: XOR<dosenCreateWithoutBimbinganInput, dosenUncheckedCreateWithoutBimbinganInput>
    connectOrCreate?: dosenCreateOrConnectWithoutBimbinganInput
    upsert?: dosenUpsertWithoutBimbinganInput
    connect?: dosenWhereUniqueInput
    update?: XOR<XOR<dosenUpdateToOneWithWhereWithoutBimbinganInput, dosenUpdateWithoutBimbinganInput>, dosenUncheckedUpdateWithoutBimbinganInput>
  }

  export type mahasiswaCreateNestedOneWithoutDaily_reportInput = {
    create?: XOR<mahasiswaCreateWithoutDaily_reportInput, mahasiswaUncheckedCreateWithoutDaily_reportInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutDaily_reportInput
    connect?: mahasiswaWhereUniqueInput
  }

  export type detail_daily_reportCreateNestedManyWithoutDaily_reportInput = {
    create?: XOR<detail_daily_reportCreateWithoutDaily_reportInput, detail_daily_reportUncheckedCreateWithoutDaily_reportInput> | detail_daily_reportCreateWithoutDaily_reportInput[] | detail_daily_reportUncheckedCreateWithoutDaily_reportInput[]
    connectOrCreate?: detail_daily_reportCreateOrConnectWithoutDaily_reportInput | detail_daily_reportCreateOrConnectWithoutDaily_reportInput[]
    createMany?: detail_daily_reportCreateManyDaily_reportInputEnvelope
    connect?: detail_daily_reportWhereUniqueInput | detail_daily_reportWhereUniqueInput[]
  }

  export type detail_daily_reportUncheckedCreateNestedManyWithoutDaily_reportInput = {
    create?: XOR<detail_daily_reportCreateWithoutDaily_reportInput, detail_daily_reportUncheckedCreateWithoutDaily_reportInput> | detail_daily_reportCreateWithoutDaily_reportInput[] | detail_daily_reportUncheckedCreateWithoutDaily_reportInput[]
    connectOrCreate?: detail_daily_reportCreateOrConnectWithoutDaily_reportInput | detail_daily_reportCreateOrConnectWithoutDaily_reportInput[]
    createMany?: detail_daily_reportCreateManyDaily_reportInputEnvelope
    connect?: detail_daily_reportWhereUniqueInput | detail_daily_reportWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type mahasiswaUpdateOneRequiredWithoutDaily_reportNestedInput = {
    create?: XOR<mahasiswaCreateWithoutDaily_reportInput, mahasiswaUncheckedCreateWithoutDaily_reportInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutDaily_reportInput
    upsert?: mahasiswaUpsertWithoutDaily_reportInput
    connect?: mahasiswaWhereUniqueInput
    update?: XOR<XOR<mahasiswaUpdateToOneWithWhereWithoutDaily_reportInput, mahasiswaUpdateWithoutDaily_reportInput>, mahasiswaUncheckedUpdateWithoutDaily_reportInput>
  }

  export type detail_daily_reportUpdateManyWithoutDaily_reportNestedInput = {
    create?: XOR<detail_daily_reportCreateWithoutDaily_reportInput, detail_daily_reportUncheckedCreateWithoutDaily_reportInput> | detail_daily_reportCreateWithoutDaily_reportInput[] | detail_daily_reportUncheckedCreateWithoutDaily_reportInput[]
    connectOrCreate?: detail_daily_reportCreateOrConnectWithoutDaily_reportInput | detail_daily_reportCreateOrConnectWithoutDaily_reportInput[]
    upsert?: detail_daily_reportUpsertWithWhereUniqueWithoutDaily_reportInput | detail_daily_reportUpsertWithWhereUniqueWithoutDaily_reportInput[]
    createMany?: detail_daily_reportCreateManyDaily_reportInputEnvelope
    set?: detail_daily_reportWhereUniqueInput | detail_daily_reportWhereUniqueInput[]
    disconnect?: detail_daily_reportWhereUniqueInput | detail_daily_reportWhereUniqueInput[]
    delete?: detail_daily_reportWhereUniqueInput | detail_daily_reportWhereUniqueInput[]
    connect?: detail_daily_reportWhereUniqueInput | detail_daily_reportWhereUniqueInput[]
    update?: detail_daily_reportUpdateWithWhereUniqueWithoutDaily_reportInput | detail_daily_reportUpdateWithWhereUniqueWithoutDaily_reportInput[]
    updateMany?: detail_daily_reportUpdateManyWithWhereWithoutDaily_reportInput | detail_daily_reportUpdateManyWithWhereWithoutDaily_reportInput[]
    deleteMany?: detail_daily_reportScalarWhereInput | detail_daily_reportScalarWhereInput[]
  }

  export type detail_daily_reportUncheckedUpdateManyWithoutDaily_reportNestedInput = {
    create?: XOR<detail_daily_reportCreateWithoutDaily_reportInput, detail_daily_reportUncheckedCreateWithoutDaily_reportInput> | detail_daily_reportCreateWithoutDaily_reportInput[] | detail_daily_reportUncheckedCreateWithoutDaily_reportInput[]
    connectOrCreate?: detail_daily_reportCreateOrConnectWithoutDaily_reportInput | detail_daily_reportCreateOrConnectWithoutDaily_reportInput[]
    upsert?: detail_daily_reportUpsertWithWhereUniqueWithoutDaily_reportInput | detail_daily_reportUpsertWithWhereUniqueWithoutDaily_reportInput[]
    createMany?: detail_daily_reportCreateManyDaily_reportInputEnvelope
    set?: detail_daily_reportWhereUniqueInput | detail_daily_reportWhereUniqueInput[]
    disconnect?: detail_daily_reportWhereUniqueInput | detail_daily_reportWhereUniqueInput[]
    delete?: detail_daily_reportWhereUniqueInput | detail_daily_reportWhereUniqueInput[]
    connect?: detail_daily_reportWhereUniqueInput | detail_daily_reportWhereUniqueInput[]
    update?: detail_daily_reportUpdateWithWhereUniqueWithoutDaily_reportInput | detail_daily_reportUpdateWithWhereUniqueWithoutDaily_reportInput[]
    updateMany?: detail_daily_reportUpdateManyWithWhereWithoutDaily_reportInput | detail_daily_reportUpdateManyWithWhereWithoutDaily_reportInput[]
    deleteMany?: detail_daily_reportScalarWhereInput | detail_daily_reportScalarWhereInput[]
  }

  export type daily_reportCreateNestedOneWithoutDetail_daily_reportInput = {
    create?: XOR<daily_reportCreateWithoutDetail_daily_reportInput, daily_reportUncheckedCreateWithoutDetail_daily_reportInput>
    connectOrCreate?: daily_reportCreateOrConnectWithoutDetail_daily_reportInput
    connect?: daily_reportWhereUniqueInput
  }

  export type daily_reportUpdateOneRequiredWithoutDetail_daily_reportNestedInput = {
    create?: XOR<daily_reportCreateWithoutDetail_daily_reportInput, daily_reportUncheckedCreateWithoutDetail_daily_reportInput>
    connectOrCreate?: daily_reportCreateOrConnectWithoutDetail_daily_reportInput
    upsert?: daily_reportUpsertWithoutDetail_daily_reportInput
    connect?: daily_reportWhereUniqueInput
    update?: XOR<XOR<daily_reportUpdateToOneWithWhereWithoutDetail_daily_reportInput, daily_reportUpdateWithoutDetail_daily_reportInput>, daily_reportUncheckedUpdateWithoutDetail_daily_reportInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type mahasiswaCreateNestedOneWithoutDokumenInput = {
    create?: XOR<mahasiswaCreateWithoutDokumenInput, mahasiswaUncheckedCreateWithoutDokumenInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutDokumenInput
    connect?: mahasiswaWhereUniqueInput
  }

  export type EnumJenisDokumenFieldUpdateOperationsInput = {
    set?: $Enums.JenisDokumen
  }

  export type EnumDokumenStatusFieldUpdateOperationsInput = {
    set?: $Enums.DokumenStatus
  }

  export type mahasiswaUpdateOneRequiredWithoutDokumenNestedInput = {
    create?: XOR<mahasiswaCreateWithoutDokumenInput, mahasiswaUncheckedCreateWithoutDokumenInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutDokumenInput
    upsert?: mahasiswaUpsertWithoutDokumenInput
    connect?: mahasiswaWhereUniqueInput
    update?: XOR<XOR<mahasiswaUpdateToOneWithWhereWithoutDokumenInput, mahasiswaUpdateWithoutDokumenInput>, mahasiswaUncheckedUpdateWithoutDokumenInput>
  }

  export type bimbinganCreateNestedManyWithoutDosenInput = {
    create?: XOR<bimbinganCreateWithoutDosenInput, bimbinganUncheckedCreateWithoutDosenInput> | bimbinganCreateWithoutDosenInput[] | bimbinganUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: bimbinganCreateOrConnectWithoutDosenInput | bimbinganCreateOrConnectWithoutDosenInput[]
    createMany?: bimbinganCreateManyDosenInputEnvelope
    connect?: bimbinganWhereUniqueInput | bimbinganWhereUniqueInput[]
  }

  export type jadwalCreateNestedManyWithoutDosenInput = {
    create?: XOR<jadwalCreateWithoutDosenInput, jadwalUncheckedCreateWithoutDosenInput> | jadwalCreateWithoutDosenInput[] | jadwalUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: jadwalCreateOrConnectWithoutDosenInput | jadwalCreateOrConnectWithoutDosenInput[]
    createMany?: jadwalCreateManyDosenInputEnvelope
    connect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
  }

  export type nilaiCreateNestedManyWithoutDosen_pengujiInput = {
    create?: XOR<nilaiCreateWithoutDosen_pengujiInput, nilaiUncheckedCreateWithoutDosen_pengujiInput> | nilaiCreateWithoutDosen_pengujiInput[] | nilaiUncheckedCreateWithoutDosen_pengujiInput[]
    connectOrCreate?: nilaiCreateOrConnectWithoutDosen_pengujiInput | nilaiCreateOrConnectWithoutDosen_pengujiInput[]
    createMany?: nilaiCreateManyDosen_pengujiInputEnvelope
    connect?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
  }

  export type nilaiCreateNestedManyWithoutDosen_pembimbingInput = {
    create?: XOR<nilaiCreateWithoutDosen_pembimbingInput, nilaiUncheckedCreateWithoutDosen_pembimbingInput> | nilaiCreateWithoutDosen_pembimbingInput[] | nilaiUncheckedCreateWithoutDosen_pembimbingInput[]
    connectOrCreate?: nilaiCreateOrConnectWithoutDosen_pembimbingInput | nilaiCreateOrConnectWithoutDosen_pembimbingInput[]
    createMany?: nilaiCreateManyDosen_pembimbingInputEnvelope
    connect?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
  }

  export type pendaftaran_kpCreateNestedManyWithoutDosenInput = {
    create?: XOR<pendaftaran_kpCreateWithoutDosenInput, pendaftaran_kpUncheckedCreateWithoutDosenInput> | pendaftaran_kpCreateWithoutDosenInput[] | pendaftaran_kpUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: pendaftaran_kpCreateOrConnectWithoutDosenInput | pendaftaran_kpCreateOrConnectWithoutDosenInput[]
    createMany?: pendaftaran_kpCreateManyDosenInputEnvelope
    connect?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
  }

  export type bimbinganUncheckedCreateNestedManyWithoutDosenInput = {
    create?: XOR<bimbinganCreateWithoutDosenInput, bimbinganUncheckedCreateWithoutDosenInput> | bimbinganCreateWithoutDosenInput[] | bimbinganUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: bimbinganCreateOrConnectWithoutDosenInput | bimbinganCreateOrConnectWithoutDosenInput[]
    createMany?: bimbinganCreateManyDosenInputEnvelope
    connect?: bimbinganWhereUniqueInput | bimbinganWhereUniqueInput[]
  }

  export type jadwalUncheckedCreateNestedManyWithoutDosenInput = {
    create?: XOR<jadwalCreateWithoutDosenInput, jadwalUncheckedCreateWithoutDosenInput> | jadwalCreateWithoutDosenInput[] | jadwalUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: jadwalCreateOrConnectWithoutDosenInput | jadwalCreateOrConnectWithoutDosenInput[]
    createMany?: jadwalCreateManyDosenInputEnvelope
    connect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
  }

  export type nilaiUncheckedCreateNestedManyWithoutDosen_pengujiInput = {
    create?: XOR<nilaiCreateWithoutDosen_pengujiInput, nilaiUncheckedCreateWithoutDosen_pengujiInput> | nilaiCreateWithoutDosen_pengujiInput[] | nilaiUncheckedCreateWithoutDosen_pengujiInput[]
    connectOrCreate?: nilaiCreateOrConnectWithoutDosen_pengujiInput | nilaiCreateOrConnectWithoutDosen_pengujiInput[]
    createMany?: nilaiCreateManyDosen_pengujiInputEnvelope
    connect?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
  }

  export type nilaiUncheckedCreateNestedManyWithoutDosen_pembimbingInput = {
    create?: XOR<nilaiCreateWithoutDosen_pembimbingInput, nilaiUncheckedCreateWithoutDosen_pembimbingInput> | nilaiCreateWithoutDosen_pembimbingInput[] | nilaiUncheckedCreateWithoutDosen_pembimbingInput[]
    connectOrCreate?: nilaiCreateOrConnectWithoutDosen_pembimbingInput | nilaiCreateOrConnectWithoutDosen_pembimbingInput[]
    createMany?: nilaiCreateManyDosen_pembimbingInputEnvelope
    connect?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
  }

  export type pendaftaran_kpUncheckedCreateNestedManyWithoutDosenInput = {
    create?: XOR<pendaftaran_kpCreateWithoutDosenInput, pendaftaran_kpUncheckedCreateWithoutDosenInput> | pendaftaran_kpCreateWithoutDosenInput[] | pendaftaran_kpUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: pendaftaran_kpCreateOrConnectWithoutDosenInput | pendaftaran_kpCreateOrConnectWithoutDosenInput[]
    createMany?: pendaftaran_kpCreateManyDosenInputEnvelope
    connect?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
  }

  export type bimbinganUpdateManyWithoutDosenNestedInput = {
    create?: XOR<bimbinganCreateWithoutDosenInput, bimbinganUncheckedCreateWithoutDosenInput> | bimbinganCreateWithoutDosenInput[] | bimbinganUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: bimbinganCreateOrConnectWithoutDosenInput | bimbinganCreateOrConnectWithoutDosenInput[]
    upsert?: bimbinganUpsertWithWhereUniqueWithoutDosenInput | bimbinganUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: bimbinganCreateManyDosenInputEnvelope
    set?: bimbinganWhereUniqueInput | bimbinganWhereUniqueInput[]
    disconnect?: bimbinganWhereUniqueInput | bimbinganWhereUniqueInput[]
    delete?: bimbinganWhereUniqueInput | bimbinganWhereUniqueInput[]
    connect?: bimbinganWhereUniqueInput | bimbinganWhereUniqueInput[]
    update?: bimbinganUpdateWithWhereUniqueWithoutDosenInput | bimbinganUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: bimbinganUpdateManyWithWhereWithoutDosenInput | bimbinganUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: bimbinganScalarWhereInput | bimbinganScalarWhereInput[]
  }

  export type jadwalUpdateManyWithoutDosenNestedInput = {
    create?: XOR<jadwalCreateWithoutDosenInput, jadwalUncheckedCreateWithoutDosenInput> | jadwalCreateWithoutDosenInput[] | jadwalUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: jadwalCreateOrConnectWithoutDosenInput | jadwalCreateOrConnectWithoutDosenInput[]
    upsert?: jadwalUpsertWithWhereUniqueWithoutDosenInput | jadwalUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: jadwalCreateManyDosenInputEnvelope
    set?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    disconnect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    delete?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    connect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    update?: jadwalUpdateWithWhereUniqueWithoutDosenInput | jadwalUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: jadwalUpdateManyWithWhereWithoutDosenInput | jadwalUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: jadwalScalarWhereInput | jadwalScalarWhereInput[]
  }

  export type nilaiUpdateManyWithoutDosen_pengujiNestedInput = {
    create?: XOR<nilaiCreateWithoutDosen_pengujiInput, nilaiUncheckedCreateWithoutDosen_pengujiInput> | nilaiCreateWithoutDosen_pengujiInput[] | nilaiUncheckedCreateWithoutDosen_pengujiInput[]
    connectOrCreate?: nilaiCreateOrConnectWithoutDosen_pengujiInput | nilaiCreateOrConnectWithoutDosen_pengujiInput[]
    upsert?: nilaiUpsertWithWhereUniqueWithoutDosen_pengujiInput | nilaiUpsertWithWhereUniqueWithoutDosen_pengujiInput[]
    createMany?: nilaiCreateManyDosen_pengujiInputEnvelope
    set?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    disconnect?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    delete?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    connect?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    update?: nilaiUpdateWithWhereUniqueWithoutDosen_pengujiInput | nilaiUpdateWithWhereUniqueWithoutDosen_pengujiInput[]
    updateMany?: nilaiUpdateManyWithWhereWithoutDosen_pengujiInput | nilaiUpdateManyWithWhereWithoutDosen_pengujiInput[]
    deleteMany?: nilaiScalarWhereInput | nilaiScalarWhereInput[]
  }

  export type nilaiUpdateManyWithoutDosen_pembimbingNestedInput = {
    create?: XOR<nilaiCreateWithoutDosen_pembimbingInput, nilaiUncheckedCreateWithoutDosen_pembimbingInput> | nilaiCreateWithoutDosen_pembimbingInput[] | nilaiUncheckedCreateWithoutDosen_pembimbingInput[]
    connectOrCreate?: nilaiCreateOrConnectWithoutDosen_pembimbingInput | nilaiCreateOrConnectWithoutDosen_pembimbingInput[]
    upsert?: nilaiUpsertWithWhereUniqueWithoutDosen_pembimbingInput | nilaiUpsertWithWhereUniqueWithoutDosen_pembimbingInput[]
    createMany?: nilaiCreateManyDosen_pembimbingInputEnvelope
    set?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    disconnect?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    delete?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    connect?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    update?: nilaiUpdateWithWhereUniqueWithoutDosen_pembimbingInput | nilaiUpdateWithWhereUniqueWithoutDosen_pembimbingInput[]
    updateMany?: nilaiUpdateManyWithWhereWithoutDosen_pembimbingInput | nilaiUpdateManyWithWhereWithoutDosen_pembimbingInput[]
    deleteMany?: nilaiScalarWhereInput | nilaiScalarWhereInput[]
  }

  export type pendaftaran_kpUpdateManyWithoutDosenNestedInput = {
    create?: XOR<pendaftaran_kpCreateWithoutDosenInput, pendaftaran_kpUncheckedCreateWithoutDosenInput> | pendaftaran_kpCreateWithoutDosenInput[] | pendaftaran_kpUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: pendaftaran_kpCreateOrConnectWithoutDosenInput | pendaftaran_kpCreateOrConnectWithoutDosenInput[]
    upsert?: pendaftaran_kpUpsertWithWhereUniqueWithoutDosenInput | pendaftaran_kpUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: pendaftaran_kpCreateManyDosenInputEnvelope
    set?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    disconnect?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    delete?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    connect?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    update?: pendaftaran_kpUpdateWithWhereUniqueWithoutDosenInput | pendaftaran_kpUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: pendaftaran_kpUpdateManyWithWhereWithoutDosenInput | pendaftaran_kpUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: pendaftaran_kpScalarWhereInput | pendaftaran_kpScalarWhereInput[]
  }

  export type bimbinganUncheckedUpdateManyWithoutDosenNestedInput = {
    create?: XOR<bimbinganCreateWithoutDosenInput, bimbinganUncheckedCreateWithoutDosenInput> | bimbinganCreateWithoutDosenInput[] | bimbinganUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: bimbinganCreateOrConnectWithoutDosenInput | bimbinganCreateOrConnectWithoutDosenInput[]
    upsert?: bimbinganUpsertWithWhereUniqueWithoutDosenInput | bimbinganUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: bimbinganCreateManyDosenInputEnvelope
    set?: bimbinganWhereUniqueInput | bimbinganWhereUniqueInput[]
    disconnect?: bimbinganWhereUniqueInput | bimbinganWhereUniqueInput[]
    delete?: bimbinganWhereUniqueInput | bimbinganWhereUniqueInput[]
    connect?: bimbinganWhereUniqueInput | bimbinganWhereUniqueInput[]
    update?: bimbinganUpdateWithWhereUniqueWithoutDosenInput | bimbinganUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: bimbinganUpdateManyWithWhereWithoutDosenInput | bimbinganUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: bimbinganScalarWhereInput | bimbinganScalarWhereInput[]
  }

  export type jadwalUncheckedUpdateManyWithoutDosenNestedInput = {
    create?: XOR<jadwalCreateWithoutDosenInput, jadwalUncheckedCreateWithoutDosenInput> | jadwalCreateWithoutDosenInput[] | jadwalUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: jadwalCreateOrConnectWithoutDosenInput | jadwalCreateOrConnectWithoutDosenInput[]
    upsert?: jadwalUpsertWithWhereUniqueWithoutDosenInput | jadwalUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: jadwalCreateManyDosenInputEnvelope
    set?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    disconnect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    delete?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    connect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    update?: jadwalUpdateWithWhereUniqueWithoutDosenInput | jadwalUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: jadwalUpdateManyWithWhereWithoutDosenInput | jadwalUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: jadwalScalarWhereInput | jadwalScalarWhereInput[]
  }

  export type nilaiUncheckedUpdateManyWithoutDosen_pengujiNestedInput = {
    create?: XOR<nilaiCreateWithoutDosen_pengujiInput, nilaiUncheckedCreateWithoutDosen_pengujiInput> | nilaiCreateWithoutDosen_pengujiInput[] | nilaiUncheckedCreateWithoutDosen_pengujiInput[]
    connectOrCreate?: nilaiCreateOrConnectWithoutDosen_pengujiInput | nilaiCreateOrConnectWithoutDosen_pengujiInput[]
    upsert?: nilaiUpsertWithWhereUniqueWithoutDosen_pengujiInput | nilaiUpsertWithWhereUniqueWithoutDosen_pengujiInput[]
    createMany?: nilaiCreateManyDosen_pengujiInputEnvelope
    set?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    disconnect?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    delete?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    connect?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    update?: nilaiUpdateWithWhereUniqueWithoutDosen_pengujiInput | nilaiUpdateWithWhereUniqueWithoutDosen_pengujiInput[]
    updateMany?: nilaiUpdateManyWithWhereWithoutDosen_pengujiInput | nilaiUpdateManyWithWhereWithoutDosen_pengujiInput[]
    deleteMany?: nilaiScalarWhereInput | nilaiScalarWhereInput[]
  }

  export type nilaiUncheckedUpdateManyWithoutDosen_pembimbingNestedInput = {
    create?: XOR<nilaiCreateWithoutDosen_pembimbingInput, nilaiUncheckedCreateWithoutDosen_pembimbingInput> | nilaiCreateWithoutDosen_pembimbingInput[] | nilaiUncheckedCreateWithoutDosen_pembimbingInput[]
    connectOrCreate?: nilaiCreateOrConnectWithoutDosen_pembimbingInput | nilaiCreateOrConnectWithoutDosen_pembimbingInput[]
    upsert?: nilaiUpsertWithWhereUniqueWithoutDosen_pembimbingInput | nilaiUpsertWithWhereUniqueWithoutDosen_pembimbingInput[]
    createMany?: nilaiCreateManyDosen_pembimbingInputEnvelope
    set?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    disconnect?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    delete?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    connect?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    update?: nilaiUpdateWithWhereUniqueWithoutDosen_pembimbingInput | nilaiUpdateWithWhereUniqueWithoutDosen_pembimbingInput[]
    updateMany?: nilaiUpdateManyWithWhereWithoutDosen_pembimbingInput | nilaiUpdateManyWithWhereWithoutDosen_pembimbingInput[]
    deleteMany?: nilaiScalarWhereInput | nilaiScalarWhereInput[]
  }

  export type pendaftaran_kpUncheckedUpdateManyWithoutDosenNestedInput = {
    create?: XOR<pendaftaran_kpCreateWithoutDosenInput, pendaftaran_kpUncheckedCreateWithoutDosenInput> | pendaftaran_kpCreateWithoutDosenInput[] | pendaftaran_kpUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: pendaftaran_kpCreateOrConnectWithoutDosenInput | pendaftaran_kpCreateOrConnectWithoutDosenInput[]
    upsert?: pendaftaran_kpUpsertWithWhereUniqueWithoutDosenInput | pendaftaran_kpUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: pendaftaran_kpCreateManyDosenInputEnvelope
    set?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    disconnect?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    delete?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    connect?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    update?: pendaftaran_kpUpdateWithWhereUniqueWithoutDosenInput | pendaftaran_kpUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: pendaftaran_kpUpdateManyWithWhereWithoutDosenInput | pendaftaran_kpUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: pendaftaran_kpScalarWhereInput | pendaftaran_kpScalarWhereInput[]
  }

  export type pembimbing_instansiCreateNestedManyWithoutInstansiInput = {
    create?: XOR<pembimbing_instansiCreateWithoutInstansiInput, pembimbing_instansiUncheckedCreateWithoutInstansiInput> | pembimbing_instansiCreateWithoutInstansiInput[] | pembimbing_instansiUncheckedCreateWithoutInstansiInput[]
    connectOrCreate?: pembimbing_instansiCreateOrConnectWithoutInstansiInput | pembimbing_instansiCreateOrConnectWithoutInstansiInput[]
    createMany?: pembimbing_instansiCreateManyInstansiInputEnvelope
    connect?: pembimbing_instansiWhereUniqueInput | pembimbing_instansiWhereUniqueInput[]
  }

  export type pembimbing_instansiUncheckedCreateNestedManyWithoutInstansiInput = {
    create?: XOR<pembimbing_instansiCreateWithoutInstansiInput, pembimbing_instansiUncheckedCreateWithoutInstansiInput> | pembimbing_instansiCreateWithoutInstansiInput[] | pembimbing_instansiUncheckedCreateWithoutInstansiInput[]
    connectOrCreate?: pembimbing_instansiCreateOrConnectWithoutInstansiInput | pembimbing_instansiCreateOrConnectWithoutInstansiInput[]
    createMany?: pembimbing_instansiCreateManyInstansiInputEnvelope
    connect?: pembimbing_instansiWhereUniqueInput | pembimbing_instansiWhereUniqueInput[]
  }

  export type EnumJenisInstansiFieldUpdateOperationsInput = {
    set?: $Enums.JenisInstansi
  }

  export type EnumStatusInstansiFieldUpdateOperationsInput = {
    set?: $Enums.StatusInstansi
  }

  export type pembimbing_instansiUpdateManyWithoutInstansiNestedInput = {
    create?: XOR<pembimbing_instansiCreateWithoutInstansiInput, pembimbing_instansiUncheckedCreateWithoutInstansiInput> | pembimbing_instansiCreateWithoutInstansiInput[] | pembimbing_instansiUncheckedCreateWithoutInstansiInput[]
    connectOrCreate?: pembimbing_instansiCreateOrConnectWithoutInstansiInput | pembimbing_instansiCreateOrConnectWithoutInstansiInput[]
    upsert?: pembimbing_instansiUpsertWithWhereUniqueWithoutInstansiInput | pembimbing_instansiUpsertWithWhereUniqueWithoutInstansiInput[]
    createMany?: pembimbing_instansiCreateManyInstansiInputEnvelope
    set?: pembimbing_instansiWhereUniqueInput | pembimbing_instansiWhereUniqueInput[]
    disconnect?: pembimbing_instansiWhereUniqueInput | pembimbing_instansiWhereUniqueInput[]
    delete?: pembimbing_instansiWhereUniqueInput | pembimbing_instansiWhereUniqueInput[]
    connect?: pembimbing_instansiWhereUniqueInput | pembimbing_instansiWhereUniqueInput[]
    update?: pembimbing_instansiUpdateWithWhereUniqueWithoutInstansiInput | pembimbing_instansiUpdateWithWhereUniqueWithoutInstansiInput[]
    updateMany?: pembimbing_instansiUpdateManyWithWhereWithoutInstansiInput | pembimbing_instansiUpdateManyWithWhereWithoutInstansiInput[]
    deleteMany?: pembimbing_instansiScalarWhereInput | pembimbing_instansiScalarWhereInput[]
  }

  export type pembimbing_instansiUncheckedUpdateManyWithoutInstansiNestedInput = {
    create?: XOR<pembimbing_instansiCreateWithoutInstansiInput, pembimbing_instansiUncheckedCreateWithoutInstansiInput> | pembimbing_instansiCreateWithoutInstansiInput[] | pembimbing_instansiUncheckedCreateWithoutInstansiInput[]
    connectOrCreate?: pembimbing_instansiCreateOrConnectWithoutInstansiInput | pembimbing_instansiCreateOrConnectWithoutInstansiInput[]
    upsert?: pembimbing_instansiUpsertWithWhereUniqueWithoutInstansiInput | pembimbing_instansiUpsertWithWhereUniqueWithoutInstansiInput[]
    createMany?: pembimbing_instansiCreateManyInstansiInputEnvelope
    set?: pembimbing_instansiWhereUniqueInput | pembimbing_instansiWhereUniqueInput[]
    disconnect?: pembimbing_instansiWhereUniqueInput | pembimbing_instansiWhereUniqueInput[]
    delete?: pembimbing_instansiWhereUniqueInput | pembimbing_instansiWhereUniqueInput[]
    connect?: pembimbing_instansiWhereUniqueInput | pembimbing_instansiWhereUniqueInput[]
    update?: pembimbing_instansiUpdateWithWhereUniqueWithoutInstansiInput | pembimbing_instansiUpdateWithWhereUniqueWithoutInstansiInput[]
    updateMany?: pembimbing_instansiUpdateManyWithWhereWithoutInstansiInput | pembimbing_instansiUpdateManyWithWhereWithoutInstansiInput[]
    deleteMany?: pembimbing_instansiScalarWhereInput | pembimbing_instansiScalarWhereInput[]
  }

  export type mahasiswaCreateNestedOneWithoutJadwalInput = {
    create?: XOR<mahasiswaCreateWithoutJadwalInput, mahasiswaUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutJadwalInput
    connect?: mahasiswaWhereUniqueInput
  }

  export type dosenCreateNestedOneWithoutJadwalInput = {
    create?: XOR<dosenCreateWithoutJadwalInput, dosenUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: dosenCreateOrConnectWithoutJadwalInput
    connect?: dosenWhereUniqueInput
  }

  export type ruanganCreateNestedOneWithoutJadwalInput = {
    create?: XOR<ruanganCreateWithoutJadwalInput, ruanganUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: ruanganCreateOrConnectWithoutJadwalInput
    connect?: ruanganWhereUniqueInput
  }

  export type nilaiCreateNestedOneWithoutJadwalInput = {
    create?: XOR<nilaiCreateWithoutJadwalInput, nilaiUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: nilaiCreateOrConnectWithoutJadwalInput
    connect?: nilaiWhereUniqueInput
  }

  export type nilaiUncheckedCreateNestedOneWithoutJadwalInput = {
    create?: XOR<nilaiCreateWithoutJadwalInput, nilaiUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: nilaiCreateOrConnectWithoutJadwalInput
    connect?: nilaiWhereUniqueInput
  }

  export type EnumStatusSeminarFieldUpdateOperationsInput = {
    set?: $Enums.StatusSeminar
  }

  export type mahasiswaUpdateOneRequiredWithoutJadwalNestedInput = {
    create?: XOR<mahasiswaCreateWithoutJadwalInput, mahasiswaUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutJadwalInput
    upsert?: mahasiswaUpsertWithoutJadwalInput
    connect?: mahasiswaWhereUniqueInput
    update?: XOR<XOR<mahasiswaUpdateToOneWithWhereWithoutJadwalInput, mahasiswaUpdateWithoutJadwalInput>, mahasiswaUncheckedUpdateWithoutJadwalInput>
  }

  export type dosenUpdateOneRequiredWithoutJadwalNestedInput = {
    create?: XOR<dosenCreateWithoutJadwalInput, dosenUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: dosenCreateOrConnectWithoutJadwalInput
    upsert?: dosenUpsertWithoutJadwalInput
    connect?: dosenWhereUniqueInput
    update?: XOR<XOR<dosenUpdateToOneWithWhereWithoutJadwalInput, dosenUpdateWithoutJadwalInput>, dosenUncheckedUpdateWithoutJadwalInput>
  }

  export type ruanganUpdateOneRequiredWithoutJadwalNestedInput = {
    create?: XOR<ruanganCreateWithoutJadwalInput, ruanganUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: ruanganCreateOrConnectWithoutJadwalInput
    upsert?: ruanganUpsertWithoutJadwalInput
    connect?: ruanganWhereUniqueInput
    update?: XOR<XOR<ruanganUpdateToOneWithWhereWithoutJadwalInput, ruanganUpdateWithoutJadwalInput>, ruanganUncheckedUpdateWithoutJadwalInput>
  }

  export type nilaiUpdateOneWithoutJadwalNestedInput = {
    create?: XOR<nilaiCreateWithoutJadwalInput, nilaiUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: nilaiCreateOrConnectWithoutJadwalInput
    upsert?: nilaiUpsertWithoutJadwalInput
    disconnect?: nilaiWhereInput | boolean
    delete?: nilaiWhereInput | boolean
    connect?: nilaiWhereUniqueInput
    update?: XOR<XOR<nilaiUpdateToOneWithWhereWithoutJadwalInput, nilaiUpdateWithoutJadwalInput>, nilaiUncheckedUpdateWithoutJadwalInput>
  }

  export type nilaiUncheckedUpdateOneWithoutJadwalNestedInput = {
    create?: XOR<nilaiCreateWithoutJadwalInput, nilaiUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: nilaiCreateOrConnectWithoutJadwalInput
    upsert?: nilaiUpsertWithoutJadwalInput
    disconnect?: nilaiWhereInput | boolean
    delete?: nilaiWhereInput | boolean
    connect?: nilaiWhereUniqueInput
    update?: XOR<XOR<nilaiUpdateToOneWithWhereWithoutJadwalInput, nilaiUpdateWithoutJadwalInput>, nilaiUncheckedUpdateWithoutJadwalInput>
  }

  export type EnumLogTypeFieldUpdateOperationsInput = {
    set?: $Enums.LogType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type bimbinganCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<bimbinganCreateWithoutMahasiswaInput, bimbinganUncheckedCreateWithoutMahasiswaInput> | bimbinganCreateWithoutMahasiswaInput[] | bimbinganUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: bimbinganCreateOrConnectWithoutMahasiswaInput | bimbinganCreateOrConnectWithoutMahasiswaInput[]
    createMany?: bimbinganCreateManyMahasiswaInputEnvelope
    connect?: bimbinganWhereUniqueInput | bimbinganWhereUniqueInput[]
  }

  export type daily_reportCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<daily_reportCreateWithoutMahasiswaInput, daily_reportUncheckedCreateWithoutMahasiswaInput> | daily_reportCreateWithoutMahasiswaInput[] | daily_reportUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: daily_reportCreateOrConnectWithoutMahasiswaInput | daily_reportCreateOrConnectWithoutMahasiswaInput[]
    createMany?: daily_reportCreateManyMahasiswaInputEnvelope
    connect?: daily_reportWhereUniqueInput | daily_reportWhereUniqueInput[]
  }

  export type dokumenCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<dokumenCreateWithoutMahasiswaInput, dokumenUncheckedCreateWithoutMahasiswaInput> | dokumenCreateWithoutMahasiswaInput[] | dokumenUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: dokumenCreateOrConnectWithoutMahasiswaInput | dokumenCreateOrConnectWithoutMahasiswaInput[]
    createMany?: dokumenCreateManyMahasiswaInputEnvelope
    connect?: dokumenWhereUniqueInput | dokumenWhereUniqueInput[]
  }

  export type jadwalCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<jadwalCreateWithoutMahasiswaInput, jadwalUncheckedCreateWithoutMahasiswaInput> | jadwalCreateWithoutMahasiswaInput[] | jadwalUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: jadwalCreateOrConnectWithoutMahasiswaInput | jadwalCreateOrConnectWithoutMahasiswaInput[]
    createMany?: jadwalCreateManyMahasiswaInputEnvelope
    connect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
  }

  export type nilai_instansiCreateNestedOneWithoutMahasiswaInput = {
    create?: XOR<nilai_instansiCreateWithoutMahasiswaInput, nilai_instansiUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: nilai_instansiCreateOrConnectWithoutMahasiswaInput
    connect?: nilai_instansiWhereUniqueInput
  }

  export type pendaftaran_kpCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<pendaftaran_kpCreateWithoutMahasiswaInput, pendaftaran_kpUncheckedCreateWithoutMahasiswaInput> | pendaftaran_kpCreateWithoutMahasiswaInput[] | pendaftaran_kpUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: pendaftaran_kpCreateOrConnectWithoutMahasiswaInput | pendaftaran_kpCreateOrConnectWithoutMahasiswaInput[]
    createMany?: pendaftaran_kpCreateManyMahasiswaInputEnvelope
    connect?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
  }

  export type nilaiCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<nilaiCreateWithoutMahasiswaInput, nilaiUncheckedCreateWithoutMahasiswaInput> | nilaiCreateWithoutMahasiswaInput[] | nilaiUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: nilaiCreateOrConnectWithoutMahasiswaInput | nilaiCreateOrConnectWithoutMahasiswaInput[]
    connect?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
  }

  export type bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<bimbinganCreateWithoutMahasiswaInput, bimbinganUncheckedCreateWithoutMahasiswaInput> | bimbinganCreateWithoutMahasiswaInput[] | bimbinganUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: bimbinganCreateOrConnectWithoutMahasiswaInput | bimbinganCreateOrConnectWithoutMahasiswaInput[]
    createMany?: bimbinganCreateManyMahasiswaInputEnvelope
    connect?: bimbinganWhereUniqueInput | bimbinganWhereUniqueInput[]
  }

  export type daily_reportUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<daily_reportCreateWithoutMahasiswaInput, daily_reportUncheckedCreateWithoutMahasiswaInput> | daily_reportCreateWithoutMahasiswaInput[] | daily_reportUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: daily_reportCreateOrConnectWithoutMahasiswaInput | daily_reportCreateOrConnectWithoutMahasiswaInput[]
    createMany?: daily_reportCreateManyMahasiswaInputEnvelope
    connect?: daily_reportWhereUniqueInput | daily_reportWhereUniqueInput[]
  }

  export type dokumenUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<dokumenCreateWithoutMahasiswaInput, dokumenUncheckedCreateWithoutMahasiswaInput> | dokumenCreateWithoutMahasiswaInput[] | dokumenUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: dokumenCreateOrConnectWithoutMahasiswaInput | dokumenCreateOrConnectWithoutMahasiswaInput[]
    createMany?: dokumenCreateManyMahasiswaInputEnvelope
    connect?: dokumenWhereUniqueInput | dokumenWhereUniqueInput[]
  }

  export type jadwalUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<jadwalCreateWithoutMahasiswaInput, jadwalUncheckedCreateWithoutMahasiswaInput> | jadwalCreateWithoutMahasiswaInput[] | jadwalUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: jadwalCreateOrConnectWithoutMahasiswaInput | jadwalCreateOrConnectWithoutMahasiswaInput[]
    createMany?: jadwalCreateManyMahasiswaInputEnvelope
    connect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
  }

  export type nilai_instansiUncheckedCreateNestedOneWithoutMahasiswaInput = {
    create?: XOR<nilai_instansiCreateWithoutMahasiswaInput, nilai_instansiUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: nilai_instansiCreateOrConnectWithoutMahasiswaInput
    connect?: nilai_instansiWhereUniqueInput
  }

  export type pendaftaran_kpUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<pendaftaran_kpCreateWithoutMahasiswaInput, pendaftaran_kpUncheckedCreateWithoutMahasiswaInput> | pendaftaran_kpCreateWithoutMahasiswaInput[] | pendaftaran_kpUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: pendaftaran_kpCreateOrConnectWithoutMahasiswaInput | pendaftaran_kpCreateOrConnectWithoutMahasiswaInput[]
    createMany?: pendaftaran_kpCreateManyMahasiswaInputEnvelope
    connect?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
  }

  export type nilaiUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<nilaiCreateWithoutMahasiswaInput, nilaiUncheckedCreateWithoutMahasiswaInput> | nilaiCreateWithoutMahasiswaInput[] | nilaiUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: nilaiCreateOrConnectWithoutMahasiswaInput | nilaiCreateOrConnectWithoutMahasiswaInput[]
    connect?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
  }

  export type bimbinganUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<bimbinganCreateWithoutMahasiswaInput, bimbinganUncheckedCreateWithoutMahasiswaInput> | bimbinganCreateWithoutMahasiswaInput[] | bimbinganUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: bimbinganCreateOrConnectWithoutMahasiswaInput | bimbinganCreateOrConnectWithoutMahasiswaInput[]
    upsert?: bimbinganUpsertWithWhereUniqueWithoutMahasiswaInput | bimbinganUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: bimbinganCreateManyMahasiswaInputEnvelope
    set?: bimbinganWhereUniqueInput | bimbinganWhereUniqueInput[]
    disconnect?: bimbinganWhereUniqueInput | bimbinganWhereUniqueInput[]
    delete?: bimbinganWhereUniqueInput | bimbinganWhereUniqueInput[]
    connect?: bimbinganWhereUniqueInput | bimbinganWhereUniqueInput[]
    update?: bimbinganUpdateWithWhereUniqueWithoutMahasiswaInput | bimbinganUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: bimbinganUpdateManyWithWhereWithoutMahasiswaInput | bimbinganUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: bimbinganScalarWhereInput | bimbinganScalarWhereInput[]
  }

  export type daily_reportUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<daily_reportCreateWithoutMahasiswaInput, daily_reportUncheckedCreateWithoutMahasiswaInput> | daily_reportCreateWithoutMahasiswaInput[] | daily_reportUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: daily_reportCreateOrConnectWithoutMahasiswaInput | daily_reportCreateOrConnectWithoutMahasiswaInput[]
    upsert?: daily_reportUpsertWithWhereUniqueWithoutMahasiswaInput | daily_reportUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: daily_reportCreateManyMahasiswaInputEnvelope
    set?: daily_reportWhereUniqueInput | daily_reportWhereUniqueInput[]
    disconnect?: daily_reportWhereUniqueInput | daily_reportWhereUniqueInput[]
    delete?: daily_reportWhereUniqueInput | daily_reportWhereUniqueInput[]
    connect?: daily_reportWhereUniqueInput | daily_reportWhereUniqueInput[]
    update?: daily_reportUpdateWithWhereUniqueWithoutMahasiswaInput | daily_reportUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: daily_reportUpdateManyWithWhereWithoutMahasiswaInput | daily_reportUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: daily_reportScalarWhereInput | daily_reportScalarWhereInput[]
  }

  export type dokumenUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<dokumenCreateWithoutMahasiswaInput, dokumenUncheckedCreateWithoutMahasiswaInput> | dokumenCreateWithoutMahasiswaInput[] | dokumenUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: dokumenCreateOrConnectWithoutMahasiswaInput | dokumenCreateOrConnectWithoutMahasiswaInput[]
    upsert?: dokumenUpsertWithWhereUniqueWithoutMahasiswaInput | dokumenUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: dokumenCreateManyMahasiswaInputEnvelope
    set?: dokumenWhereUniqueInput | dokumenWhereUniqueInput[]
    disconnect?: dokumenWhereUniqueInput | dokumenWhereUniqueInput[]
    delete?: dokumenWhereUniqueInput | dokumenWhereUniqueInput[]
    connect?: dokumenWhereUniqueInput | dokumenWhereUniqueInput[]
    update?: dokumenUpdateWithWhereUniqueWithoutMahasiswaInput | dokumenUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: dokumenUpdateManyWithWhereWithoutMahasiswaInput | dokumenUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: dokumenScalarWhereInput | dokumenScalarWhereInput[]
  }

  export type jadwalUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<jadwalCreateWithoutMahasiswaInput, jadwalUncheckedCreateWithoutMahasiswaInput> | jadwalCreateWithoutMahasiswaInput[] | jadwalUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: jadwalCreateOrConnectWithoutMahasiswaInput | jadwalCreateOrConnectWithoutMahasiswaInput[]
    upsert?: jadwalUpsertWithWhereUniqueWithoutMahasiswaInput | jadwalUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: jadwalCreateManyMahasiswaInputEnvelope
    set?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    disconnect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    delete?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    connect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    update?: jadwalUpdateWithWhereUniqueWithoutMahasiswaInput | jadwalUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: jadwalUpdateManyWithWhereWithoutMahasiswaInput | jadwalUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: jadwalScalarWhereInput | jadwalScalarWhereInput[]
  }

  export type nilai_instansiUpdateOneWithoutMahasiswaNestedInput = {
    create?: XOR<nilai_instansiCreateWithoutMahasiswaInput, nilai_instansiUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: nilai_instansiCreateOrConnectWithoutMahasiswaInput
    upsert?: nilai_instansiUpsertWithoutMahasiswaInput
    disconnect?: nilai_instansiWhereInput | boolean
    delete?: nilai_instansiWhereInput | boolean
    connect?: nilai_instansiWhereUniqueInput
    update?: XOR<XOR<nilai_instansiUpdateToOneWithWhereWithoutMahasiswaInput, nilai_instansiUpdateWithoutMahasiswaInput>, nilai_instansiUncheckedUpdateWithoutMahasiswaInput>
  }

  export type pendaftaran_kpUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<pendaftaran_kpCreateWithoutMahasiswaInput, pendaftaran_kpUncheckedCreateWithoutMahasiswaInput> | pendaftaran_kpCreateWithoutMahasiswaInput[] | pendaftaran_kpUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: pendaftaran_kpCreateOrConnectWithoutMahasiswaInput | pendaftaran_kpCreateOrConnectWithoutMahasiswaInput[]
    upsert?: pendaftaran_kpUpsertWithWhereUniqueWithoutMahasiswaInput | pendaftaran_kpUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: pendaftaran_kpCreateManyMahasiswaInputEnvelope
    set?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    disconnect?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    delete?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    connect?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    update?: pendaftaran_kpUpdateWithWhereUniqueWithoutMahasiswaInput | pendaftaran_kpUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: pendaftaran_kpUpdateManyWithWhereWithoutMahasiswaInput | pendaftaran_kpUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: pendaftaran_kpScalarWhereInput | pendaftaran_kpScalarWhereInput[]
  }

  export type nilaiUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<nilaiCreateWithoutMahasiswaInput, nilaiUncheckedCreateWithoutMahasiswaInput> | nilaiCreateWithoutMahasiswaInput[] | nilaiUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: nilaiCreateOrConnectWithoutMahasiswaInput | nilaiCreateOrConnectWithoutMahasiswaInput[]
    upsert?: nilaiUpsertWithWhereUniqueWithoutMahasiswaInput | nilaiUpsertWithWhereUniqueWithoutMahasiswaInput[]
    set?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    disconnect?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    delete?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    connect?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    update?: nilaiUpdateWithWhereUniqueWithoutMahasiswaInput | nilaiUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: nilaiUpdateManyWithWhereWithoutMahasiswaInput | nilaiUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: nilaiScalarWhereInput | nilaiScalarWhereInput[]
  }

  export type bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<bimbinganCreateWithoutMahasiswaInput, bimbinganUncheckedCreateWithoutMahasiswaInput> | bimbinganCreateWithoutMahasiswaInput[] | bimbinganUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: bimbinganCreateOrConnectWithoutMahasiswaInput | bimbinganCreateOrConnectWithoutMahasiswaInput[]
    upsert?: bimbinganUpsertWithWhereUniqueWithoutMahasiswaInput | bimbinganUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: bimbinganCreateManyMahasiswaInputEnvelope
    set?: bimbinganWhereUniqueInput | bimbinganWhereUniqueInput[]
    disconnect?: bimbinganWhereUniqueInput | bimbinganWhereUniqueInput[]
    delete?: bimbinganWhereUniqueInput | bimbinganWhereUniqueInput[]
    connect?: bimbinganWhereUniqueInput | bimbinganWhereUniqueInput[]
    update?: bimbinganUpdateWithWhereUniqueWithoutMahasiswaInput | bimbinganUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: bimbinganUpdateManyWithWhereWithoutMahasiswaInput | bimbinganUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: bimbinganScalarWhereInput | bimbinganScalarWhereInput[]
  }

  export type daily_reportUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<daily_reportCreateWithoutMahasiswaInput, daily_reportUncheckedCreateWithoutMahasiswaInput> | daily_reportCreateWithoutMahasiswaInput[] | daily_reportUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: daily_reportCreateOrConnectWithoutMahasiswaInput | daily_reportCreateOrConnectWithoutMahasiswaInput[]
    upsert?: daily_reportUpsertWithWhereUniqueWithoutMahasiswaInput | daily_reportUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: daily_reportCreateManyMahasiswaInputEnvelope
    set?: daily_reportWhereUniqueInput | daily_reportWhereUniqueInput[]
    disconnect?: daily_reportWhereUniqueInput | daily_reportWhereUniqueInput[]
    delete?: daily_reportWhereUniqueInput | daily_reportWhereUniqueInput[]
    connect?: daily_reportWhereUniqueInput | daily_reportWhereUniqueInput[]
    update?: daily_reportUpdateWithWhereUniqueWithoutMahasiswaInput | daily_reportUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: daily_reportUpdateManyWithWhereWithoutMahasiswaInput | daily_reportUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: daily_reportScalarWhereInput | daily_reportScalarWhereInput[]
  }

  export type dokumenUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<dokumenCreateWithoutMahasiswaInput, dokumenUncheckedCreateWithoutMahasiswaInput> | dokumenCreateWithoutMahasiswaInput[] | dokumenUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: dokumenCreateOrConnectWithoutMahasiswaInput | dokumenCreateOrConnectWithoutMahasiswaInput[]
    upsert?: dokumenUpsertWithWhereUniqueWithoutMahasiswaInput | dokumenUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: dokumenCreateManyMahasiswaInputEnvelope
    set?: dokumenWhereUniqueInput | dokumenWhereUniqueInput[]
    disconnect?: dokumenWhereUniqueInput | dokumenWhereUniqueInput[]
    delete?: dokumenWhereUniqueInput | dokumenWhereUniqueInput[]
    connect?: dokumenWhereUniqueInput | dokumenWhereUniqueInput[]
    update?: dokumenUpdateWithWhereUniqueWithoutMahasiswaInput | dokumenUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: dokumenUpdateManyWithWhereWithoutMahasiswaInput | dokumenUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: dokumenScalarWhereInput | dokumenScalarWhereInput[]
  }

  export type jadwalUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<jadwalCreateWithoutMahasiswaInput, jadwalUncheckedCreateWithoutMahasiswaInput> | jadwalCreateWithoutMahasiswaInput[] | jadwalUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: jadwalCreateOrConnectWithoutMahasiswaInput | jadwalCreateOrConnectWithoutMahasiswaInput[]
    upsert?: jadwalUpsertWithWhereUniqueWithoutMahasiswaInput | jadwalUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: jadwalCreateManyMahasiswaInputEnvelope
    set?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    disconnect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    delete?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    connect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    update?: jadwalUpdateWithWhereUniqueWithoutMahasiswaInput | jadwalUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: jadwalUpdateManyWithWhereWithoutMahasiswaInput | jadwalUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: jadwalScalarWhereInput | jadwalScalarWhereInput[]
  }

  export type nilai_instansiUncheckedUpdateOneWithoutMahasiswaNestedInput = {
    create?: XOR<nilai_instansiCreateWithoutMahasiswaInput, nilai_instansiUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: nilai_instansiCreateOrConnectWithoutMahasiswaInput
    upsert?: nilai_instansiUpsertWithoutMahasiswaInput
    disconnect?: nilai_instansiWhereInput | boolean
    delete?: nilai_instansiWhereInput | boolean
    connect?: nilai_instansiWhereUniqueInput
    update?: XOR<XOR<nilai_instansiUpdateToOneWithWhereWithoutMahasiswaInput, nilai_instansiUpdateWithoutMahasiswaInput>, nilai_instansiUncheckedUpdateWithoutMahasiswaInput>
  }

  export type pendaftaran_kpUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<pendaftaran_kpCreateWithoutMahasiswaInput, pendaftaran_kpUncheckedCreateWithoutMahasiswaInput> | pendaftaran_kpCreateWithoutMahasiswaInput[] | pendaftaran_kpUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: pendaftaran_kpCreateOrConnectWithoutMahasiswaInput | pendaftaran_kpCreateOrConnectWithoutMahasiswaInput[]
    upsert?: pendaftaran_kpUpsertWithWhereUniqueWithoutMahasiswaInput | pendaftaran_kpUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: pendaftaran_kpCreateManyMahasiswaInputEnvelope
    set?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    disconnect?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    delete?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    connect?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    update?: pendaftaran_kpUpdateWithWhereUniqueWithoutMahasiswaInput | pendaftaran_kpUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: pendaftaran_kpUpdateManyWithWhereWithoutMahasiswaInput | pendaftaran_kpUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: pendaftaran_kpScalarWhereInput | pendaftaran_kpScalarWhereInput[]
  }

  export type nilaiUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<nilaiCreateWithoutMahasiswaInput, nilaiUncheckedCreateWithoutMahasiswaInput> | nilaiCreateWithoutMahasiswaInput[] | nilaiUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: nilaiCreateOrConnectWithoutMahasiswaInput | nilaiCreateOrConnectWithoutMahasiswaInput[]
    upsert?: nilaiUpsertWithWhereUniqueWithoutMahasiswaInput | nilaiUpsertWithWhereUniqueWithoutMahasiswaInput[]
    set?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    disconnect?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    delete?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    connect?: nilaiWhereUniqueInput | nilaiWhereUniqueInput[]
    update?: nilaiUpdateWithWhereUniqueWithoutMahasiswaInput | nilaiUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: nilaiUpdateManyWithWhereWithoutMahasiswaInput | nilaiUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: nilaiScalarWhereInput | nilaiScalarWhereInput[]
  }

  export type jadwalCreateNestedOneWithoutNilaiInput = {
    create?: XOR<jadwalCreateWithoutNilaiInput, jadwalUncheckedCreateWithoutNilaiInput>
    connectOrCreate?: jadwalCreateOrConnectWithoutNilaiInput
    connect?: jadwalWhereUniqueInput
  }

  export type dosenCreateNestedOneWithoutNilai_pengujiInput = {
    create?: XOR<dosenCreateWithoutNilai_pengujiInput, dosenUncheckedCreateWithoutNilai_pengujiInput>
    connectOrCreate?: dosenCreateOrConnectWithoutNilai_pengujiInput
    connect?: dosenWhereUniqueInput
  }

  export type dosenCreateNestedOneWithoutNilai_pembimbingInput = {
    create?: XOR<dosenCreateWithoutNilai_pembimbingInput, dosenUncheckedCreateWithoutNilai_pembimbingInput>
    connectOrCreate?: dosenCreateOrConnectWithoutNilai_pembimbingInput
    connect?: dosenWhereUniqueInput
  }

  export type mahasiswaCreateNestedManyWithoutNilaiInput = {
    create?: XOR<mahasiswaCreateWithoutNilaiInput, mahasiswaUncheckedCreateWithoutNilaiInput> | mahasiswaCreateWithoutNilaiInput[] | mahasiswaUncheckedCreateWithoutNilaiInput[]
    connectOrCreate?: mahasiswaCreateOrConnectWithoutNilaiInput | mahasiswaCreateOrConnectWithoutNilaiInput[]
    connect?: mahasiswaWhereUniqueInput | mahasiswaWhereUniqueInput[]
  }

  export type mahasiswaUncheckedCreateNestedManyWithoutNilaiInput = {
    create?: XOR<mahasiswaCreateWithoutNilaiInput, mahasiswaUncheckedCreateWithoutNilaiInput> | mahasiswaCreateWithoutNilaiInput[] | mahasiswaUncheckedCreateWithoutNilaiInput[]
    connectOrCreate?: mahasiswaCreateOrConnectWithoutNilaiInput | mahasiswaCreateOrConnectWithoutNilaiInput[]
    connect?: mahasiswaWhereUniqueInput | mahasiswaWhereUniqueInput[]
  }

  export type jadwalUpdateOneRequiredWithoutNilaiNestedInput = {
    create?: XOR<jadwalCreateWithoutNilaiInput, jadwalUncheckedCreateWithoutNilaiInput>
    connectOrCreate?: jadwalCreateOrConnectWithoutNilaiInput
    upsert?: jadwalUpsertWithoutNilaiInput
    connect?: jadwalWhereUniqueInput
    update?: XOR<XOR<jadwalUpdateToOneWithWhereWithoutNilaiInput, jadwalUpdateWithoutNilaiInput>, jadwalUncheckedUpdateWithoutNilaiInput>
  }

  export type dosenUpdateOneWithoutNilai_pengujiNestedInput = {
    create?: XOR<dosenCreateWithoutNilai_pengujiInput, dosenUncheckedCreateWithoutNilai_pengujiInput>
    connectOrCreate?: dosenCreateOrConnectWithoutNilai_pengujiInput
    upsert?: dosenUpsertWithoutNilai_pengujiInput
    disconnect?: dosenWhereInput | boolean
    delete?: dosenWhereInput | boolean
    connect?: dosenWhereUniqueInput
    update?: XOR<XOR<dosenUpdateToOneWithWhereWithoutNilai_pengujiInput, dosenUpdateWithoutNilai_pengujiInput>, dosenUncheckedUpdateWithoutNilai_pengujiInput>
  }

  export type dosenUpdateOneWithoutNilai_pembimbingNestedInput = {
    create?: XOR<dosenCreateWithoutNilai_pembimbingInput, dosenUncheckedCreateWithoutNilai_pembimbingInput>
    connectOrCreate?: dosenCreateOrConnectWithoutNilai_pembimbingInput
    upsert?: dosenUpsertWithoutNilai_pembimbingInput
    disconnect?: dosenWhereInput | boolean
    delete?: dosenWhereInput | boolean
    connect?: dosenWhereUniqueInput
    update?: XOR<XOR<dosenUpdateToOneWithWhereWithoutNilai_pembimbingInput, dosenUpdateWithoutNilai_pembimbingInput>, dosenUncheckedUpdateWithoutNilai_pembimbingInput>
  }

  export type mahasiswaUpdateManyWithoutNilaiNestedInput = {
    create?: XOR<mahasiswaCreateWithoutNilaiInput, mahasiswaUncheckedCreateWithoutNilaiInput> | mahasiswaCreateWithoutNilaiInput[] | mahasiswaUncheckedCreateWithoutNilaiInput[]
    connectOrCreate?: mahasiswaCreateOrConnectWithoutNilaiInput | mahasiswaCreateOrConnectWithoutNilaiInput[]
    upsert?: mahasiswaUpsertWithWhereUniqueWithoutNilaiInput | mahasiswaUpsertWithWhereUniqueWithoutNilaiInput[]
    set?: mahasiswaWhereUniqueInput | mahasiswaWhereUniqueInput[]
    disconnect?: mahasiswaWhereUniqueInput | mahasiswaWhereUniqueInput[]
    delete?: mahasiswaWhereUniqueInput | mahasiswaWhereUniqueInput[]
    connect?: mahasiswaWhereUniqueInput | mahasiswaWhereUniqueInput[]
    update?: mahasiswaUpdateWithWhereUniqueWithoutNilaiInput | mahasiswaUpdateWithWhereUniqueWithoutNilaiInput[]
    updateMany?: mahasiswaUpdateManyWithWhereWithoutNilaiInput | mahasiswaUpdateManyWithWhereWithoutNilaiInput[]
    deleteMany?: mahasiswaScalarWhereInput | mahasiswaScalarWhereInput[]
  }

  export type mahasiswaUncheckedUpdateManyWithoutNilaiNestedInput = {
    create?: XOR<mahasiswaCreateWithoutNilaiInput, mahasiswaUncheckedCreateWithoutNilaiInput> | mahasiswaCreateWithoutNilaiInput[] | mahasiswaUncheckedCreateWithoutNilaiInput[]
    connectOrCreate?: mahasiswaCreateOrConnectWithoutNilaiInput | mahasiswaCreateOrConnectWithoutNilaiInput[]
    upsert?: mahasiswaUpsertWithWhereUniqueWithoutNilaiInput | mahasiswaUpsertWithWhereUniqueWithoutNilaiInput[]
    set?: mahasiswaWhereUniqueInput | mahasiswaWhereUniqueInput[]
    disconnect?: mahasiswaWhereUniqueInput | mahasiswaWhereUniqueInput[]
    delete?: mahasiswaWhereUniqueInput | mahasiswaWhereUniqueInput[]
    connect?: mahasiswaWhereUniqueInput | mahasiswaWhereUniqueInput[]
    update?: mahasiswaUpdateWithWhereUniqueWithoutNilaiInput | mahasiswaUpdateWithWhereUniqueWithoutNilaiInput[]
    updateMany?: mahasiswaUpdateManyWithWhereWithoutNilaiInput | mahasiswaUpdateManyWithWhereWithoutNilaiInput[]
    deleteMany?: mahasiswaScalarWhereInput | mahasiswaScalarWhereInput[]
  }

  export type pembimbing_instansiCreateNestedOneWithoutNilai_instansiInput = {
    create?: XOR<pembimbing_instansiCreateWithoutNilai_instansiInput, pembimbing_instansiUncheckedCreateWithoutNilai_instansiInput>
    connectOrCreate?: pembimbing_instansiCreateOrConnectWithoutNilai_instansiInput
    connect?: pembimbing_instansiWhereUniqueInput
  }

  export type mahasiswaCreateNestedOneWithoutNilai_instansiInput = {
    create?: XOR<mahasiswaCreateWithoutNilai_instansiInput, mahasiswaUncheckedCreateWithoutNilai_instansiInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutNilai_instansiInput
    connect?: mahasiswaWhereUniqueInput
  }

  export type pembimbing_instansiUpdateOneRequiredWithoutNilai_instansiNestedInput = {
    create?: XOR<pembimbing_instansiCreateWithoutNilai_instansiInput, pembimbing_instansiUncheckedCreateWithoutNilai_instansiInput>
    connectOrCreate?: pembimbing_instansiCreateOrConnectWithoutNilai_instansiInput
    upsert?: pembimbing_instansiUpsertWithoutNilai_instansiInput
    connect?: pembimbing_instansiWhereUniqueInput
    update?: XOR<XOR<pembimbing_instansiUpdateToOneWithWhereWithoutNilai_instansiInput, pembimbing_instansiUpdateWithoutNilai_instansiInput>, pembimbing_instansiUncheckedUpdateWithoutNilai_instansiInput>
  }

  export type mahasiswaUpdateOneRequiredWithoutNilai_instansiNestedInput = {
    create?: XOR<mahasiswaCreateWithoutNilai_instansiInput, mahasiswaUncheckedCreateWithoutNilai_instansiInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutNilai_instansiInput
    upsert?: mahasiswaUpsertWithoutNilai_instansiInput
    connect?: mahasiswaWhereUniqueInput
    update?: XOR<XOR<mahasiswaUpdateToOneWithWhereWithoutNilai_instansiInput, mahasiswaUpdateWithoutNilai_instansiInput>, mahasiswaUncheckedUpdateWithoutNilai_instansiInput>
  }

  export type nilai_instansiCreateNestedManyWithoutPembimbing_instansiInput = {
    create?: XOR<nilai_instansiCreateWithoutPembimbing_instansiInput, nilai_instansiUncheckedCreateWithoutPembimbing_instansiInput> | nilai_instansiCreateWithoutPembimbing_instansiInput[] | nilai_instansiUncheckedCreateWithoutPembimbing_instansiInput[]
    connectOrCreate?: nilai_instansiCreateOrConnectWithoutPembimbing_instansiInput | nilai_instansiCreateOrConnectWithoutPembimbing_instansiInput[]
    createMany?: nilai_instansiCreateManyPembimbing_instansiInputEnvelope
    connect?: nilai_instansiWhereUniqueInput | nilai_instansiWhereUniqueInput[]
  }

  export type instansiCreateNestedOneWithoutPembimbing_instansiInput = {
    create?: XOR<instansiCreateWithoutPembimbing_instansiInput, instansiUncheckedCreateWithoutPembimbing_instansiInput>
    connectOrCreate?: instansiCreateOrConnectWithoutPembimbing_instansiInput
    connect?: instansiWhereUniqueInput
  }

  export type pendaftaran_kpCreateNestedManyWithoutPembimbing_instansiInput = {
    create?: XOR<pendaftaran_kpCreateWithoutPembimbing_instansiInput, pendaftaran_kpUncheckedCreateWithoutPembimbing_instansiInput> | pendaftaran_kpCreateWithoutPembimbing_instansiInput[] | pendaftaran_kpUncheckedCreateWithoutPembimbing_instansiInput[]
    connectOrCreate?: pendaftaran_kpCreateOrConnectWithoutPembimbing_instansiInput | pendaftaran_kpCreateOrConnectWithoutPembimbing_instansiInput[]
    createMany?: pendaftaran_kpCreateManyPembimbing_instansiInputEnvelope
    connect?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
  }

  export type nilai_instansiUncheckedCreateNestedManyWithoutPembimbing_instansiInput = {
    create?: XOR<nilai_instansiCreateWithoutPembimbing_instansiInput, nilai_instansiUncheckedCreateWithoutPembimbing_instansiInput> | nilai_instansiCreateWithoutPembimbing_instansiInput[] | nilai_instansiUncheckedCreateWithoutPembimbing_instansiInput[]
    connectOrCreate?: nilai_instansiCreateOrConnectWithoutPembimbing_instansiInput | nilai_instansiCreateOrConnectWithoutPembimbing_instansiInput[]
    createMany?: nilai_instansiCreateManyPembimbing_instansiInputEnvelope
    connect?: nilai_instansiWhereUniqueInput | nilai_instansiWhereUniqueInput[]
  }

  export type pendaftaran_kpUncheckedCreateNestedManyWithoutPembimbing_instansiInput = {
    create?: XOR<pendaftaran_kpCreateWithoutPembimbing_instansiInput, pendaftaran_kpUncheckedCreateWithoutPembimbing_instansiInput> | pendaftaran_kpCreateWithoutPembimbing_instansiInput[] | pendaftaran_kpUncheckedCreateWithoutPembimbing_instansiInput[]
    connectOrCreate?: pendaftaran_kpCreateOrConnectWithoutPembimbing_instansiInput | pendaftaran_kpCreateOrConnectWithoutPembimbing_instansiInput[]
    createMany?: pendaftaran_kpCreateManyPembimbing_instansiInputEnvelope
    connect?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
  }

  export type nilai_instansiUpdateManyWithoutPembimbing_instansiNestedInput = {
    create?: XOR<nilai_instansiCreateWithoutPembimbing_instansiInput, nilai_instansiUncheckedCreateWithoutPembimbing_instansiInput> | nilai_instansiCreateWithoutPembimbing_instansiInput[] | nilai_instansiUncheckedCreateWithoutPembimbing_instansiInput[]
    connectOrCreate?: nilai_instansiCreateOrConnectWithoutPembimbing_instansiInput | nilai_instansiCreateOrConnectWithoutPembimbing_instansiInput[]
    upsert?: nilai_instansiUpsertWithWhereUniqueWithoutPembimbing_instansiInput | nilai_instansiUpsertWithWhereUniqueWithoutPembimbing_instansiInput[]
    createMany?: nilai_instansiCreateManyPembimbing_instansiInputEnvelope
    set?: nilai_instansiWhereUniqueInput | nilai_instansiWhereUniqueInput[]
    disconnect?: nilai_instansiWhereUniqueInput | nilai_instansiWhereUniqueInput[]
    delete?: nilai_instansiWhereUniqueInput | nilai_instansiWhereUniqueInput[]
    connect?: nilai_instansiWhereUniqueInput | nilai_instansiWhereUniqueInput[]
    update?: nilai_instansiUpdateWithWhereUniqueWithoutPembimbing_instansiInput | nilai_instansiUpdateWithWhereUniqueWithoutPembimbing_instansiInput[]
    updateMany?: nilai_instansiUpdateManyWithWhereWithoutPembimbing_instansiInput | nilai_instansiUpdateManyWithWhereWithoutPembimbing_instansiInput[]
    deleteMany?: nilai_instansiScalarWhereInput | nilai_instansiScalarWhereInput[]
  }

  export type instansiUpdateOneRequiredWithoutPembimbing_instansiNestedInput = {
    create?: XOR<instansiCreateWithoutPembimbing_instansiInput, instansiUncheckedCreateWithoutPembimbing_instansiInput>
    connectOrCreate?: instansiCreateOrConnectWithoutPembimbing_instansiInput
    upsert?: instansiUpsertWithoutPembimbing_instansiInput
    connect?: instansiWhereUniqueInput
    update?: XOR<XOR<instansiUpdateToOneWithWhereWithoutPembimbing_instansiInput, instansiUpdateWithoutPembimbing_instansiInput>, instansiUncheckedUpdateWithoutPembimbing_instansiInput>
  }

  export type pendaftaran_kpUpdateManyWithoutPembimbing_instansiNestedInput = {
    create?: XOR<pendaftaran_kpCreateWithoutPembimbing_instansiInput, pendaftaran_kpUncheckedCreateWithoutPembimbing_instansiInput> | pendaftaran_kpCreateWithoutPembimbing_instansiInput[] | pendaftaran_kpUncheckedCreateWithoutPembimbing_instansiInput[]
    connectOrCreate?: pendaftaran_kpCreateOrConnectWithoutPembimbing_instansiInput | pendaftaran_kpCreateOrConnectWithoutPembimbing_instansiInput[]
    upsert?: pendaftaran_kpUpsertWithWhereUniqueWithoutPembimbing_instansiInput | pendaftaran_kpUpsertWithWhereUniqueWithoutPembimbing_instansiInput[]
    createMany?: pendaftaran_kpCreateManyPembimbing_instansiInputEnvelope
    set?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    disconnect?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    delete?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    connect?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    update?: pendaftaran_kpUpdateWithWhereUniqueWithoutPembimbing_instansiInput | pendaftaran_kpUpdateWithWhereUniqueWithoutPembimbing_instansiInput[]
    updateMany?: pendaftaran_kpUpdateManyWithWhereWithoutPembimbing_instansiInput | pendaftaran_kpUpdateManyWithWhereWithoutPembimbing_instansiInput[]
    deleteMany?: pendaftaran_kpScalarWhereInput | pendaftaran_kpScalarWhereInput[]
  }

  export type nilai_instansiUncheckedUpdateManyWithoutPembimbing_instansiNestedInput = {
    create?: XOR<nilai_instansiCreateWithoutPembimbing_instansiInput, nilai_instansiUncheckedCreateWithoutPembimbing_instansiInput> | nilai_instansiCreateWithoutPembimbing_instansiInput[] | nilai_instansiUncheckedCreateWithoutPembimbing_instansiInput[]
    connectOrCreate?: nilai_instansiCreateOrConnectWithoutPembimbing_instansiInput | nilai_instansiCreateOrConnectWithoutPembimbing_instansiInput[]
    upsert?: nilai_instansiUpsertWithWhereUniqueWithoutPembimbing_instansiInput | nilai_instansiUpsertWithWhereUniqueWithoutPembimbing_instansiInput[]
    createMany?: nilai_instansiCreateManyPembimbing_instansiInputEnvelope
    set?: nilai_instansiWhereUniqueInput | nilai_instansiWhereUniqueInput[]
    disconnect?: nilai_instansiWhereUniqueInput | nilai_instansiWhereUniqueInput[]
    delete?: nilai_instansiWhereUniqueInput | nilai_instansiWhereUniqueInput[]
    connect?: nilai_instansiWhereUniqueInput | nilai_instansiWhereUniqueInput[]
    update?: nilai_instansiUpdateWithWhereUniqueWithoutPembimbing_instansiInput | nilai_instansiUpdateWithWhereUniqueWithoutPembimbing_instansiInput[]
    updateMany?: nilai_instansiUpdateManyWithWhereWithoutPembimbing_instansiInput | nilai_instansiUpdateManyWithWhereWithoutPembimbing_instansiInput[]
    deleteMany?: nilai_instansiScalarWhereInput | nilai_instansiScalarWhereInput[]
  }

  export type pendaftaran_kpUncheckedUpdateManyWithoutPembimbing_instansiNestedInput = {
    create?: XOR<pendaftaran_kpCreateWithoutPembimbing_instansiInput, pendaftaran_kpUncheckedCreateWithoutPembimbing_instansiInput> | pendaftaran_kpCreateWithoutPembimbing_instansiInput[] | pendaftaran_kpUncheckedCreateWithoutPembimbing_instansiInput[]
    connectOrCreate?: pendaftaran_kpCreateOrConnectWithoutPembimbing_instansiInput | pendaftaran_kpCreateOrConnectWithoutPembimbing_instansiInput[]
    upsert?: pendaftaran_kpUpsertWithWhereUniqueWithoutPembimbing_instansiInput | pendaftaran_kpUpsertWithWhereUniqueWithoutPembimbing_instansiInput[]
    createMany?: pendaftaran_kpCreateManyPembimbing_instansiInputEnvelope
    set?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    disconnect?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    delete?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    connect?: pendaftaran_kpWhereUniqueInput | pendaftaran_kpWhereUniqueInput[]
    update?: pendaftaran_kpUpdateWithWhereUniqueWithoutPembimbing_instansiInput | pendaftaran_kpUpdateWithWhereUniqueWithoutPembimbing_instansiInput[]
    updateMany?: pendaftaran_kpUpdateManyWithWhereWithoutPembimbing_instansiInput | pendaftaran_kpUpdateManyWithWhereWithoutPembimbing_instansiInput[]
    deleteMany?: pendaftaran_kpScalarWhereInput | pendaftaran_kpScalarWhereInput[]
  }

  export type pembimbing_instansiCreateNestedOneWithoutPendaftaran_kpInput = {
    create?: XOR<pembimbing_instansiCreateWithoutPendaftaran_kpInput, pembimbing_instansiUncheckedCreateWithoutPendaftaran_kpInput>
    connectOrCreate?: pembimbing_instansiCreateOrConnectWithoutPendaftaran_kpInput
    connect?: pembimbing_instansiWhereUniqueInput
  }

  export type mahasiswaCreateNestedOneWithoutPendaftaran_kpInput = {
    create?: XOR<mahasiswaCreateWithoutPendaftaran_kpInput, mahasiswaUncheckedCreateWithoutPendaftaran_kpInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutPendaftaran_kpInput
    connect?: mahasiswaWhereUniqueInput
  }

  export type dosenCreateNestedOneWithoutPendaftaran_kpInput = {
    create?: XOR<dosenCreateWithoutPendaftaran_kpInput, dosenUncheckedCreateWithoutPendaftaran_kpInput>
    connectOrCreate?: dosenCreateOrConnectWithoutPendaftaran_kpInput
    connect?: dosenWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type pembimbing_instansiUpdateOneRequiredWithoutPendaftaran_kpNestedInput = {
    create?: XOR<pembimbing_instansiCreateWithoutPendaftaran_kpInput, pembimbing_instansiUncheckedCreateWithoutPendaftaran_kpInput>
    connectOrCreate?: pembimbing_instansiCreateOrConnectWithoutPendaftaran_kpInput
    upsert?: pembimbing_instansiUpsertWithoutPendaftaran_kpInput
    connect?: pembimbing_instansiWhereUniqueInput
    update?: XOR<XOR<pembimbing_instansiUpdateToOneWithWhereWithoutPendaftaran_kpInput, pembimbing_instansiUpdateWithoutPendaftaran_kpInput>, pembimbing_instansiUncheckedUpdateWithoutPendaftaran_kpInput>
  }

  export type mahasiswaUpdateOneRequiredWithoutPendaftaran_kpNestedInput = {
    create?: XOR<mahasiswaCreateWithoutPendaftaran_kpInput, mahasiswaUncheckedCreateWithoutPendaftaran_kpInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutPendaftaran_kpInput
    upsert?: mahasiswaUpsertWithoutPendaftaran_kpInput
    connect?: mahasiswaWhereUniqueInput
    update?: XOR<XOR<mahasiswaUpdateToOneWithWhereWithoutPendaftaran_kpInput, mahasiswaUpdateWithoutPendaftaran_kpInput>, mahasiswaUncheckedUpdateWithoutPendaftaran_kpInput>
  }

  export type dosenUpdateOneWithoutPendaftaran_kpNestedInput = {
    create?: XOR<dosenCreateWithoutPendaftaran_kpInput, dosenUncheckedCreateWithoutPendaftaran_kpInput>
    connectOrCreate?: dosenCreateOrConnectWithoutPendaftaran_kpInput
    upsert?: dosenUpsertWithoutPendaftaran_kpInput
    disconnect?: dosenWhereInput | boolean
    delete?: dosenWhereInput | boolean
    connect?: dosenWhereUniqueInput
    update?: XOR<XOR<dosenUpdateToOneWithWhereWithoutPendaftaran_kpInput, dosenUpdateWithoutPendaftaran_kpInput>, dosenUncheckedUpdateWithoutPendaftaran_kpInput>
  }

  export type jadwalCreateNestedManyWithoutRuanganInput = {
    create?: XOR<jadwalCreateWithoutRuanganInput, jadwalUncheckedCreateWithoutRuanganInput> | jadwalCreateWithoutRuanganInput[] | jadwalUncheckedCreateWithoutRuanganInput[]
    connectOrCreate?: jadwalCreateOrConnectWithoutRuanganInput | jadwalCreateOrConnectWithoutRuanganInput[]
    createMany?: jadwalCreateManyRuanganInputEnvelope
    connect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
  }

  export type jadwalUncheckedCreateNestedManyWithoutRuanganInput = {
    create?: XOR<jadwalCreateWithoutRuanganInput, jadwalUncheckedCreateWithoutRuanganInput> | jadwalCreateWithoutRuanganInput[] | jadwalUncheckedCreateWithoutRuanganInput[]
    connectOrCreate?: jadwalCreateOrConnectWithoutRuanganInput | jadwalCreateOrConnectWithoutRuanganInput[]
    createMany?: jadwalCreateManyRuanganInputEnvelope
    connect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
  }

  export type jadwalUpdateManyWithoutRuanganNestedInput = {
    create?: XOR<jadwalCreateWithoutRuanganInput, jadwalUncheckedCreateWithoutRuanganInput> | jadwalCreateWithoutRuanganInput[] | jadwalUncheckedCreateWithoutRuanganInput[]
    connectOrCreate?: jadwalCreateOrConnectWithoutRuanganInput | jadwalCreateOrConnectWithoutRuanganInput[]
    upsert?: jadwalUpsertWithWhereUniqueWithoutRuanganInput | jadwalUpsertWithWhereUniqueWithoutRuanganInput[]
    createMany?: jadwalCreateManyRuanganInputEnvelope
    set?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    disconnect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    delete?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    connect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    update?: jadwalUpdateWithWhereUniqueWithoutRuanganInput | jadwalUpdateWithWhereUniqueWithoutRuanganInput[]
    updateMany?: jadwalUpdateManyWithWhereWithoutRuanganInput | jadwalUpdateManyWithWhereWithoutRuanganInput[]
    deleteMany?: jadwalScalarWhereInput | jadwalScalarWhereInput[]
  }

  export type jadwalUncheckedUpdateManyWithoutRuanganNestedInput = {
    create?: XOR<jadwalCreateWithoutRuanganInput, jadwalUncheckedCreateWithoutRuanganInput> | jadwalCreateWithoutRuanganInput[] | jadwalUncheckedCreateWithoutRuanganInput[]
    connectOrCreate?: jadwalCreateOrConnectWithoutRuanganInput | jadwalCreateOrConnectWithoutRuanganInput[]
    upsert?: jadwalUpsertWithWhereUniqueWithoutRuanganInput | jadwalUpsertWithWhereUniqueWithoutRuanganInput[]
    createMany?: jadwalCreateManyRuanganInputEnvelope
    set?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    disconnect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    delete?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    connect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    update?: jadwalUpdateWithWhereUniqueWithoutRuanganInput | jadwalUpdateWithWhereUniqueWithoutRuanganInput[]
    updateMany?: jadwalUpdateManyWithWhereWithoutRuanganInput | jadwalUpdateManyWithWhereWithoutRuanganInput[]
    deleteMany?: jadwalScalarWhereInput | jadwalScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumStatusValidasiFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusValidasi | EnumStatusValidasiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusValidasi[] | ListEnumStatusValidasiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusValidasi[] | ListEnumStatusValidasiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusValidasiFilter<$PrismaModel> | $Enums.StatusValidasi
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusValidasiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusValidasi | EnumStatusValidasiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusValidasi[] | ListEnumStatusValidasiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusValidasi[] | ListEnumStatusValidasiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusValidasiWithAggregatesFilter<$PrismaModel> | $Enums.StatusValidasi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusValidasiFilter<$PrismaModel>
    _max?: NestedEnumStatusValidasiFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumJenisDokumenFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisDokumen | EnumJenisDokumenFieldRefInput<$PrismaModel>
    in?: $Enums.JenisDokumen[] | ListEnumJenisDokumenFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisDokumen[] | ListEnumJenisDokumenFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisDokumenFilter<$PrismaModel> | $Enums.JenisDokumen
  }

  export type NestedEnumDokumenStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DokumenStatus | EnumDokumenStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DokumenStatus[] | ListEnumDokumenStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DokumenStatus[] | ListEnumDokumenStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDokumenStatusFilter<$PrismaModel> | $Enums.DokumenStatus
  }

  export type NestedEnumJenisDokumenWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisDokumen | EnumJenisDokumenFieldRefInput<$PrismaModel>
    in?: $Enums.JenisDokumen[] | ListEnumJenisDokumenFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisDokumen[] | ListEnumJenisDokumenFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisDokumenWithAggregatesFilter<$PrismaModel> | $Enums.JenisDokumen
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisDokumenFilter<$PrismaModel>
    _max?: NestedEnumJenisDokumenFilter<$PrismaModel>
  }

  export type NestedEnumDokumenStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DokumenStatus | EnumDokumenStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DokumenStatus[] | ListEnumDokumenStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DokumenStatus[] | ListEnumDokumenStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDokumenStatusWithAggregatesFilter<$PrismaModel> | $Enums.DokumenStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDokumenStatusFilter<$PrismaModel>
    _max?: NestedEnumDokumenStatusFilter<$PrismaModel>
  }

  export type NestedEnumJenisInstansiFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisInstansi | EnumJenisInstansiFieldRefInput<$PrismaModel>
    in?: $Enums.JenisInstansi[] | ListEnumJenisInstansiFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisInstansi[] | ListEnumJenisInstansiFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisInstansiFilter<$PrismaModel> | $Enums.JenisInstansi
  }

  export type NestedEnumStatusInstansiFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusInstansi | EnumStatusInstansiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusInstansi[] | ListEnumStatusInstansiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusInstansi[] | ListEnumStatusInstansiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusInstansiFilter<$PrismaModel> | $Enums.StatusInstansi
  }

  export type NestedEnumJenisInstansiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisInstansi | EnumJenisInstansiFieldRefInput<$PrismaModel>
    in?: $Enums.JenisInstansi[] | ListEnumJenisInstansiFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisInstansi[] | ListEnumJenisInstansiFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisInstansiWithAggregatesFilter<$PrismaModel> | $Enums.JenisInstansi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisInstansiFilter<$PrismaModel>
    _max?: NestedEnumJenisInstansiFilter<$PrismaModel>
  }

  export type NestedEnumStatusInstansiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusInstansi | EnumStatusInstansiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusInstansi[] | ListEnumStatusInstansiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusInstansi[] | ListEnumStatusInstansiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusInstansiWithAggregatesFilter<$PrismaModel> | $Enums.StatusInstansi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusInstansiFilter<$PrismaModel>
    _max?: NestedEnumStatusInstansiFilter<$PrismaModel>
  }

  export type NestedEnumStatusSeminarFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSeminar | EnumStatusSeminarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSeminar[] | ListEnumStatusSeminarFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSeminar[] | ListEnumStatusSeminarFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSeminarFilter<$PrismaModel> | $Enums.StatusSeminar
  }

  export type NestedEnumStatusSeminarWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSeminar | EnumStatusSeminarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSeminar[] | ListEnumStatusSeminarFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSeminar[] | ListEnumStatusSeminarFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSeminarWithAggregatesFilter<$PrismaModel> | $Enums.StatusSeminar
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusSeminarFilter<$PrismaModel>
    _max?: NestedEnumStatusSeminarFilter<$PrismaModel>
  }

  export type NestedEnumLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeFilter<$PrismaModel> | $Enums.LogType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.LogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogTypeFilter<$PrismaModel>
    _max?: NestedEnumLogTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type mahasiswaCreateWithoutBimbinganInput = {
    nim: string
    nama: string
    email: string
    daily_report?: daily_reportCreateNestedManyWithoutMahasiswaInput
    dokumen?: dokumenCreateNestedManyWithoutMahasiswaInput
    jadwal?: jadwalCreateNestedManyWithoutMahasiswaInput
    nilai_instansi?: nilai_instansiCreateNestedOneWithoutMahasiswaInput
    pendaftaran_kp?: pendaftaran_kpCreateNestedManyWithoutMahasiswaInput
    nilai?: nilaiCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUncheckedCreateWithoutBimbinganInput = {
    nim: string
    nama: string
    email: string
    daily_report?: daily_reportUncheckedCreateNestedManyWithoutMahasiswaInput
    dokumen?: dokumenUncheckedCreateNestedManyWithoutMahasiswaInput
    jadwal?: jadwalUncheckedCreateNestedManyWithoutMahasiswaInput
    nilai_instansi?: nilai_instansiUncheckedCreateNestedOneWithoutMahasiswaInput
    pendaftaran_kp?: pendaftaran_kpUncheckedCreateNestedManyWithoutMahasiswaInput
    nilai?: nilaiUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaCreateOrConnectWithoutBimbinganInput = {
    where: mahasiswaWhereUniqueInput
    create: XOR<mahasiswaCreateWithoutBimbinganInput, mahasiswaUncheckedCreateWithoutBimbinganInput>
  }

  export type dosenCreateWithoutBimbinganInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    id_telegram: string
    jadwal?: jadwalCreateNestedManyWithoutDosenInput
    nilai_penguji?: nilaiCreateNestedManyWithoutDosen_pengujiInput
    nilai_pembimbing?: nilaiCreateNestedManyWithoutDosen_pembimbingInput
    pendaftaran_kp?: pendaftaran_kpCreateNestedManyWithoutDosenInput
  }

  export type dosenUncheckedCreateWithoutBimbinganInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    id_telegram: string
    jadwal?: jadwalUncheckedCreateNestedManyWithoutDosenInput
    nilai_penguji?: nilaiUncheckedCreateNestedManyWithoutDosen_pengujiInput
    nilai_pembimbing?: nilaiUncheckedCreateNestedManyWithoutDosen_pembimbingInput
    pendaftaran_kp?: pendaftaran_kpUncheckedCreateNestedManyWithoutDosenInput
  }

  export type dosenCreateOrConnectWithoutBimbinganInput = {
    where: dosenWhereUniqueInput
    create: XOR<dosenCreateWithoutBimbinganInput, dosenUncheckedCreateWithoutBimbinganInput>
  }

  export type mahasiswaUpsertWithoutBimbinganInput = {
    update: XOR<mahasiswaUpdateWithoutBimbinganInput, mahasiswaUncheckedUpdateWithoutBimbinganInput>
    create: XOR<mahasiswaCreateWithoutBimbinganInput, mahasiswaUncheckedCreateWithoutBimbinganInput>
    where?: mahasiswaWhereInput
  }

  export type mahasiswaUpdateToOneWithWhereWithoutBimbinganInput = {
    where?: mahasiswaWhereInput
    data: XOR<mahasiswaUpdateWithoutBimbinganInput, mahasiswaUncheckedUpdateWithoutBimbinganInput>
  }

  export type mahasiswaUpdateWithoutBimbinganInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    daily_report?: daily_reportUpdateManyWithoutMahasiswaNestedInput
    dokumen?: dokumenUpdateManyWithoutMahasiswaNestedInput
    jadwal?: jadwalUpdateManyWithoutMahasiswaNestedInput
    nilai_instansi?: nilai_instansiUpdateOneWithoutMahasiswaNestedInput
    pendaftaran_kp?: pendaftaran_kpUpdateManyWithoutMahasiswaNestedInput
    nilai?: nilaiUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaUncheckedUpdateWithoutBimbinganInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    daily_report?: daily_reportUncheckedUpdateManyWithoutMahasiswaNestedInput
    dokumen?: dokumenUncheckedUpdateManyWithoutMahasiswaNestedInput
    jadwal?: jadwalUncheckedUpdateManyWithoutMahasiswaNestedInput
    nilai_instansi?: nilai_instansiUncheckedUpdateOneWithoutMahasiswaNestedInput
    pendaftaran_kp?: pendaftaran_kpUncheckedUpdateManyWithoutMahasiswaNestedInput
    nilai?: nilaiUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type dosenUpsertWithoutBimbinganInput = {
    update: XOR<dosenUpdateWithoutBimbinganInput, dosenUncheckedUpdateWithoutBimbinganInput>
    create: XOR<dosenCreateWithoutBimbinganInput, dosenUncheckedCreateWithoutBimbinganInput>
    where?: dosenWhereInput
  }

  export type dosenUpdateToOneWithWhereWithoutBimbinganInput = {
    where?: dosenWhereInput
    data: XOR<dosenUpdateWithoutBimbinganInput, dosenUncheckedUpdateWithoutBimbinganInput>
  }

  export type dosenUpdateWithoutBimbinganInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_telegram?: StringFieldUpdateOperationsInput | string
    jadwal?: jadwalUpdateManyWithoutDosenNestedInput
    nilai_penguji?: nilaiUpdateManyWithoutDosen_pengujiNestedInput
    nilai_pembimbing?: nilaiUpdateManyWithoutDosen_pembimbingNestedInput
    pendaftaran_kp?: pendaftaran_kpUpdateManyWithoutDosenNestedInput
  }

  export type dosenUncheckedUpdateWithoutBimbinganInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_telegram?: StringFieldUpdateOperationsInput | string
    jadwal?: jadwalUncheckedUpdateManyWithoutDosenNestedInput
    nilai_penguji?: nilaiUncheckedUpdateManyWithoutDosen_pengujiNestedInput
    nilai_pembimbing?: nilaiUncheckedUpdateManyWithoutDosen_pembimbingNestedInput
    pendaftaran_kp?: pendaftaran_kpUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type mahasiswaCreateWithoutDaily_reportInput = {
    nim: string
    nama: string
    email: string
    bimbingan?: bimbinganCreateNestedManyWithoutMahasiswaInput
    dokumen?: dokumenCreateNestedManyWithoutMahasiswaInput
    jadwal?: jadwalCreateNestedManyWithoutMahasiswaInput
    nilai_instansi?: nilai_instansiCreateNestedOneWithoutMahasiswaInput
    pendaftaran_kp?: pendaftaran_kpCreateNestedManyWithoutMahasiswaInput
    nilai?: nilaiCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUncheckedCreateWithoutDaily_reportInput = {
    nim: string
    nama: string
    email: string
    bimbingan?: bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    dokumen?: dokumenUncheckedCreateNestedManyWithoutMahasiswaInput
    jadwal?: jadwalUncheckedCreateNestedManyWithoutMahasiswaInput
    nilai_instansi?: nilai_instansiUncheckedCreateNestedOneWithoutMahasiswaInput
    pendaftaran_kp?: pendaftaran_kpUncheckedCreateNestedManyWithoutMahasiswaInput
    nilai?: nilaiUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaCreateOrConnectWithoutDaily_reportInput = {
    where: mahasiswaWhereUniqueInput
    create: XOR<mahasiswaCreateWithoutDaily_reportInput, mahasiswaUncheckedCreateWithoutDaily_reportInput>
  }

  export type detail_daily_reportCreateWithoutDaily_reportInput = {
    judul_kegiatan: string
    deskripsi_kegiatan: string
    waktu: Date | string
  }

  export type detail_daily_reportUncheckedCreateWithoutDaily_reportInput = {
    id?: number
    judul_kegiatan: string
    deskripsi_kegiatan: string
    waktu: Date | string
  }

  export type detail_daily_reportCreateOrConnectWithoutDaily_reportInput = {
    where: detail_daily_reportWhereUniqueInput
    create: XOR<detail_daily_reportCreateWithoutDaily_reportInput, detail_daily_reportUncheckedCreateWithoutDaily_reportInput>
  }

  export type detail_daily_reportCreateManyDaily_reportInputEnvelope = {
    data: detail_daily_reportCreateManyDaily_reportInput | detail_daily_reportCreateManyDaily_reportInput[]
    skipDuplicates?: boolean
  }

  export type mahasiswaUpsertWithoutDaily_reportInput = {
    update: XOR<mahasiswaUpdateWithoutDaily_reportInput, mahasiswaUncheckedUpdateWithoutDaily_reportInput>
    create: XOR<mahasiswaCreateWithoutDaily_reportInput, mahasiswaUncheckedCreateWithoutDaily_reportInput>
    where?: mahasiswaWhereInput
  }

  export type mahasiswaUpdateToOneWithWhereWithoutDaily_reportInput = {
    where?: mahasiswaWhereInput
    data: XOR<mahasiswaUpdateWithoutDaily_reportInput, mahasiswaUncheckedUpdateWithoutDaily_reportInput>
  }

  export type mahasiswaUpdateWithoutDaily_reportInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUpdateManyWithoutMahasiswaNestedInput
    dokumen?: dokumenUpdateManyWithoutMahasiswaNestedInput
    jadwal?: jadwalUpdateManyWithoutMahasiswaNestedInput
    nilai_instansi?: nilai_instansiUpdateOneWithoutMahasiswaNestedInput
    pendaftaran_kp?: pendaftaran_kpUpdateManyWithoutMahasiswaNestedInput
    nilai?: nilaiUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaUncheckedUpdateWithoutDaily_reportInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    dokumen?: dokumenUncheckedUpdateManyWithoutMahasiswaNestedInput
    jadwal?: jadwalUncheckedUpdateManyWithoutMahasiswaNestedInput
    nilai_instansi?: nilai_instansiUncheckedUpdateOneWithoutMahasiswaNestedInput
    pendaftaran_kp?: pendaftaran_kpUncheckedUpdateManyWithoutMahasiswaNestedInput
    nilai?: nilaiUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type detail_daily_reportUpsertWithWhereUniqueWithoutDaily_reportInput = {
    where: detail_daily_reportWhereUniqueInput
    update: XOR<detail_daily_reportUpdateWithoutDaily_reportInput, detail_daily_reportUncheckedUpdateWithoutDaily_reportInput>
    create: XOR<detail_daily_reportCreateWithoutDaily_reportInput, detail_daily_reportUncheckedCreateWithoutDaily_reportInput>
  }

  export type detail_daily_reportUpdateWithWhereUniqueWithoutDaily_reportInput = {
    where: detail_daily_reportWhereUniqueInput
    data: XOR<detail_daily_reportUpdateWithoutDaily_reportInput, detail_daily_reportUncheckedUpdateWithoutDaily_reportInput>
  }

  export type detail_daily_reportUpdateManyWithWhereWithoutDaily_reportInput = {
    where: detail_daily_reportScalarWhereInput
    data: XOR<detail_daily_reportUpdateManyMutationInput, detail_daily_reportUncheckedUpdateManyWithoutDaily_reportInput>
  }

  export type detail_daily_reportScalarWhereInput = {
    AND?: detail_daily_reportScalarWhereInput | detail_daily_reportScalarWhereInput[]
    OR?: detail_daily_reportScalarWhereInput[]
    NOT?: detail_daily_reportScalarWhereInput | detail_daily_reportScalarWhereInput[]
    id?: IntFilter<"detail_daily_report"> | number
    judul_kegiatan?: StringFilter<"detail_daily_report"> | string
    deskripsi_kegiatan?: StringFilter<"detail_daily_report"> | string
    waktu?: DateTimeFilter<"detail_daily_report"> | Date | string
    id_daily_report?: StringFilter<"detail_daily_report"> | string
  }

  export type daily_reportCreateWithoutDetail_daily_reportInput = {
    id: string
    tanggal: Date | string
    status: $Enums.StatusValidasi
    catatan?: string | null
    latitude: number
    longitude: number
    mahasiswa: mahasiswaCreateNestedOneWithoutDaily_reportInput
  }

  export type daily_reportUncheckedCreateWithoutDetail_daily_reportInput = {
    id: string
    tanggal: Date | string
    status: $Enums.StatusValidasi
    catatan?: string | null
    latitude: number
    longitude: number
    nim: string
  }

  export type daily_reportCreateOrConnectWithoutDetail_daily_reportInput = {
    where: daily_reportWhereUniqueInput
    create: XOR<daily_reportCreateWithoutDetail_daily_reportInput, daily_reportUncheckedCreateWithoutDetail_daily_reportInput>
  }

  export type daily_reportUpsertWithoutDetail_daily_reportInput = {
    update: XOR<daily_reportUpdateWithoutDetail_daily_reportInput, daily_reportUncheckedUpdateWithoutDetail_daily_reportInput>
    create: XOR<daily_reportCreateWithoutDetail_daily_reportInput, daily_reportUncheckedCreateWithoutDetail_daily_reportInput>
    where?: daily_reportWhereInput
  }

  export type daily_reportUpdateToOneWithWhereWithoutDetail_daily_reportInput = {
    where?: daily_reportWhereInput
    data: XOR<daily_reportUpdateWithoutDetail_daily_reportInput, daily_reportUncheckedUpdateWithoutDetail_daily_reportInput>
  }

  export type daily_reportUpdateWithoutDetail_daily_reportInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutDaily_reportNestedInput
  }

  export type daily_reportUncheckedUpdateWithoutDetail_daily_reportInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    nim?: StringFieldUpdateOperationsInput | string
  }

  export type mahasiswaCreateWithoutDokumenInput = {
    nim: string
    nama: string
    email: string
    bimbingan?: bimbinganCreateNestedManyWithoutMahasiswaInput
    daily_report?: daily_reportCreateNestedManyWithoutMahasiswaInput
    jadwal?: jadwalCreateNestedManyWithoutMahasiswaInput
    nilai_instansi?: nilai_instansiCreateNestedOneWithoutMahasiswaInput
    pendaftaran_kp?: pendaftaran_kpCreateNestedManyWithoutMahasiswaInput
    nilai?: nilaiCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUncheckedCreateWithoutDokumenInput = {
    nim: string
    nama: string
    email: string
    bimbingan?: bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    daily_report?: daily_reportUncheckedCreateNestedManyWithoutMahasiswaInput
    jadwal?: jadwalUncheckedCreateNestedManyWithoutMahasiswaInput
    nilai_instansi?: nilai_instansiUncheckedCreateNestedOneWithoutMahasiswaInput
    pendaftaran_kp?: pendaftaran_kpUncheckedCreateNestedManyWithoutMahasiswaInput
    nilai?: nilaiUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaCreateOrConnectWithoutDokumenInput = {
    where: mahasiswaWhereUniqueInput
    create: XOR<mahasiswaCreateWithoutDokumenInput, mahasiswaUncheckedCreateWithoutDokumenInput>
  }

  export type mahasiswaUpsertWithoutDokumenInput = {
    update: XOR<mahasiswaUpdateWithoutDokumenInput, mahasiswaUncheckedUpdateWithoutDokumenInput>
    create: XOR<mahasiswaCreateWithoutDokumenInput, mahasiswaUncheckedCreateWithoutDokumenInput>
    where?: mahasiswaWhereInput
  }

  export type mahasiswaUpdateToOneWithWhereWithoutDokumenInput = {
    where?: mahasiswaWhereInput
    data: XOR<mahasiswaUpdateWithoutDokumenInput, mahasiswaUncheckedUpdateWithoutDokumenInput>
  }

  export type mahasiswaUpdateWithoutDokumenInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUpdateManyWithoutMahasiswaNestedInput
    daily_report?: daily_reportUpdateManyWithoutMahasiswaNestedInput
    jadwal?: jadwalUpdateManyWithoutMahasiswaNestedInput
    nilai_instansi?: nilai_instansiUpdateOneWithoutMahasiswaNestedInput
    pendaftaran_kp?: pendaftaran_kpUpdateManyWithoutMahasiswaNestedInput
    nilai?: nilaiUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaUncheckedUpdateWithoutDokumenInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    daily_report?: daily_reportUncheckedUpdateManyWithoutMahasiswaNestedInput
    jadwal?: jadwalUncheckedUpdateManyWithoutMahasiswaNestedInput
    nilai_instansi?: nilai_instansiUncheckedUpdateOneWithoutMahasiswaNestedInput
    pendaftaran_kp?: pendaftaran_kpUncheckedUpdateManyWithoutMahasiswaNestedInput
    nilai?: nilaiUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type bimbinganCreateWithoutDosenInput = {
    id: string
    tanggal: Date | string
    catatan: string
    status: $Enums.StatusValidasi
    mahasiswa: mahasiswaCreateNestedOneWithoutBimbinganInput
  }

  export type bimbinganUncheckedCreateWithoutDosenInput = {
    id: string
    tanggal: Date | string
    catatan: string
    status: $Enums.StatusValidasi
    nim: string
  }

  export type bimbinganCreateOrConnectWithoutDosenInput = {
    where: bimbinganWhereUniqueInput
    create: XOR<bimbinganCreateWithoutDosenInput, bimbinganUncheckedCreateWithoutDosenInput>
  }

  export type bimbinganCreateManyDosenInputEnvelope = {
    data: bimbinganCreateManyDosenInput | bimbinganCreateManyDosenInput[]
    skipDuplicates?: boolean
  }

  export type jadwalCreateWithoutDosenInput = {
    id: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    status?: $Enums.StatusSeminar
    mahasiswa: mahasiswaCreateNestedOneWithoutJadwalInput
    ruangan: ruanganCreateNestedOneWithoutJadwalInput
    nilai?: nilaiCreateNestedOneWithoutJadwalInput
  }

  export type jadwalUncheckedCreateWithoutDosenInput = {
    id: string
    nim: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    ruangan_nama: string
    status?: $Enums.StatusSeminar
    nilai?: nilaiUncheckedCreateNestedOneWithoutJadwalInput
  }

  export type jadwalCreateOrConnectWithoutDosenInput = {
    where: jadwalWhereUniqueInput
    create: XOR<jadwalCreateWithoutDosenInput, jadwalUncheckedCreateWithoutDosenInput>
  }

  export type jadwalCreateManyDosenInputEnvelope = {
    data: jadwalCreateManyDosenInput | jadwalCreateManyDosenInput[]
    skipDuplicates?: boolean
  }

  export type nilaiCreateWithoutDosen_pengujiInput = {
    id: string
    nim: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
    jadwal: jadwalCreateNestedOneWithoutNilaiInput
    dosen_pembimbing?: dosenCreateNestedOneWithoutNilai_pembimbingInput
    mahasiswa?: mahasiswaCreateNestedManyWithoutNilaiInput
  }

  export type nilaiUncheckedCreateWithoutDosen_pengujiInput = {
    id: string
    nim: string
    jadwal_seminar_id: string
    nip_pembimbing: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
    mahasiswa?: mahasiswaUncheckedCreateNestedManyWithoutNilaiInput
  }

  export type nilaiCreateOrConnectWithoutDosen_pengujiInput = {
    where: nilaiWhereUniqueInput
    create: XOR<nilaiCreateWithoutDosen_pengujiInput, nilaiUncheckedCreateWithoutDosen_pengujiInput>
  }

  export type nilaiCreateManyDosen_pengujiInputEnvelope = {
    data: nilaiCreateManyDosen_pengujiInput | nilaiCreateManyDosen_pengujiInput[]
    skipDuplicates?: boolean
  }

  export type nilaiCreateWithoutDosen_pembimbingInput = {
    id: string
    nim: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
    jadwal: jadwalCreateNestedOneWithoutNilaiInput
    dosen_penguji?: dosenCreateNestedOneWithoutNilai_pengujiInput
    mahasiswa?: mahasiswaCreateNestedManyWithoutNilaiInput
  }

  export type nilaiUncheckedCreateWithoutDosen_pembimbingInput = {
    id: string
    nim: string
    jadwal_seminar_id: string
    nip_penguji: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
    mahasiswa?: mahasiswaUncheckedCreateNestedManyWithoutNilaiInput
  }

  export type nilaiCreateOrConnectWithoutDosen_pembimbingInput = {
    where: nilaiWhereUniqueInput
    create: XOR<nilaiCreateWithoutDosen_pembimbingInput, nilaiUncheckedCreateWithoutDosen_pembimbingInput>
  }

  export type nilaiCreateManyDosen_pembimbingInputEnvelope = {
    data: nilaiCreateManyDosen_pembimbingInput | nilaiCreateManyDosen_pembimbingInput[]
    skipDuplicates?: boolean
  }

  export type pendaftaran_kpCreateWithoutDosenInput = {
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    pembimbing_instansi: pembimbing_instansiCreateNestedOneWithoutPendaftaran_kpInput
    mahasiswa: mahasiswaCreateNestedOneWithoutPendaftaran_kpInput
  }

  export type pendaftaran_kpUncheckedCreateWithoutDosenInput = {
    nim: string
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    id_pembimbing_instansi: string
  }

  export type pendaftaran_kpCreateOrConnectWithoutDosenInput = {
    where: pendaftaran_kpWhereUniqueInput
    create: XOR<pendaftaran_kpCreateWithoutDosenInput, pendaftaran_kpUncheckedCreateWithoutDosenInput>
  }

  export type pendaftaran_kpCreateManyDosenInputEnvelope = {
    data: pendaftaran_kpCreateManyDosenInput | pendaftaran_kpCreateManyDosenInput[]
    skipDuplicates?: boolean
  }

  export type bimbinganUpsertWithWhereUniqueWithoutDosenInput = {
    where: bimbinganWhereUniqueInput
    update: XOR<bimbinganUpdateWithoutDosenInput, bimbinganUncheckedUpdateWithoutDosenInput>
    create: XOR<bimbinganCreateWithoutDosenInput, bimbinganUncheckedCreateWithoutDosenInput>
  }

  export type bimbinganUpdateWithWhereUniqueWithoutDosenInput = {
    where: bimbinganWhereUniqueInput
    data: XOR<bimbinganUpdateWithoutDosenInput, bimbinganUncheckedUpdateWithoutDosenInput>
  }

  export type bimbinganUpdateManyWithWhereWithoutDosenInput = {
    where: bimbinganScalarWhereInput
    data: XOR<bimbinganUpdateManyMutationInput, bimbinganUncheckedUpdateManyWithoutDosenInput>
  }

  export type bimbinganScalarWhereInput = {
    AND?: bimbinganScalarWhereInput | bimbinganScalarWhereInput[]
    OR?: bimbinganScalarWhereInput[]
    NOT?: bimbinganScalarWhereInput | bimbinganScalarWhereInput[]
    id?: StringFilter<"bimbingan"> | string
    tanggal?: DateTimeFilter<"bimbingan"> | Date | string
    catatan?: StringFilter<"bimbingan"> | string
    status?: EnumStatusValidasiFilter<"bimbingan"> | $Enums.StatusValidasi
    nim?: StringFilter<"bimbingan"> | string
    nip?: StringFilter<"bimbingan"> | string
  }

  export type jadwalUpsertWithWhereUniqueWithoutDosenInput = {
    where: jadwalWhereUniqueInput
    update: XOR<jadwalUpdateWithoutDosenInput, jadwalUncheckedUpdateWithoutDosenInput>
    create: XOR<jadwalCreateWithoutDosenInput, jadwalUncheckedCreateWithoutDosenInput>
  }

  export type jadwalUpdateWithWhereUniqueWithoutDosenInput = {
    where: jadwalWhereUniqueInput
    data: XOR<jadwalUpdateWithoutDosenInput, jadwalUncheckedUpdateWithoutDosenInput>
  }

  export type jadwalUpdateManyWithWhereWithoutDosenInput = {
    where: jadwalScalarWhereInput
    data: XOR<jadwalUpdateManyMutationInput, jadwalUncheckedUpdateManyWithoutDosenInput>
  }

  export type jadwalScalarWhereInput = {
    AND?: jadwalScalarWhereInput | jadwalScalarWhereInput[]
    OR?: jadwalScalarWhereInput[]
    NOT?: jadwalScalarWhereInput | jadwalScalarWhereInput[]
    id?: StringFilter<"jadwal"> | string
    nim?: StringFilter<"jadwal"> | string
    nip?: StringFilter<"jadwal"> | string
    tanggal?: DateTimeFilter<"jadwal"> | Date | string
    waktu_mulai?: DateTimeFilter<"jadwal"> | Date | string
    waktu_selesai?: DateTimeFilter<"jadwal"> | Date | string
    ruangan_nama?: StringFilter<"jadwal"> | string
    status?: EnumStatusSeminarFilter<"jadwal"> | $Enums.StatusSeminar
  }

  export type nilaiUpsertWithWhereUniqueWithoutDosen_pengujiInput = {
    where: nilaiWhereUniqueInput
    update: XOR<nilaiUpdateWithoutDosen_pengujiInput, nilaiUncheckedUpdateWithoutDosen_pengujiInput>
    create: XOR<nilaiCreateWithoutDosen_pengujiInput, nilaiUncheckedCreateWithoutDosen_pengujiInput>
  }

  export type nilaiUpdateWithWhereUniqueWithoutDosen_pengujiInput = {
    where: nilaiWhereUniqueInput
    data: XOR<nilaiUpdateWithoutDosen_pengujiInput, nilaiUncheckedUpdateWithoutDosen_pengujiInput>
  }

  export type nilaiUpdateManyWithWhereWithoutDosen_pengujiInput = {
    where: nilaiScalarWhereInput
    data: XOR<nilaiUpdateManyMutationInput, nilaiUncheckedUpdateManyWithoutDosen_pengujiInput>
  }

  export type nilaiScalarWhereInput = {
    AND?: nilaiScalarWhereInput | nilaiScalarWhereInput[]
    OR?: nilaiScalarWhereInput[]
    NOT?: nilaiScalarWhereInput | nilaiScalarWhereInput[]
    id?: StringFilter<"nilai"> | string
    nim?: StringFilter<"nilai"> | string
    jadwal_seminar_id?: StringFilter<"nilai"> | string
    nip_penguji?: StringFilter<"nilai"> | string
    nip_pembimbing?: StringFilter<"nilai"> | string
    nilai_pembimbing?: FloatFilter<"nilai"> | number
    nilai_penguji?: FloatFilter<"nilai"> | number
    note_pembimbing?: StringNullableFilter<"nilai"> | string | null
    note_penguji?: StringNullableFilter<"nilai"> | string | null
  }

  export type nilaiUpsertWithWhereUniqueWithoutDosen_pembimbingInput = {
    where: nilaiWhereUniqueInput
    update: XOR<nilaiUpdateWithoutDosen_pembimbingInput, nilaiUncheckedUpdateWithoutDosen_pembimbingInput>
    create: XOR<nilaiCreateWithoutDosen_pembimbingInput, nilaiUncheckedCreateWithoutDosen_pembimbingInput>
  }

  export type nilaiUpdateWithWhereUniqueWithoutDosen_pembimbingInput = {
    where: nilaiWhereUniqueInput
    data: XOR<nilaiUpdateWithoutDosen_pembimbingInput, nilaiUncheckedUpdateWithoutDosen_pembimbingInput>
  }

  export type nilaiUpdateManyWithWhereWithoutDosen_pembimbingInput = {
    where: nilaiScalarWhereInput
    data: XOR<nilaiUpdateManyMutationInput, nilaiUncheckedUpdateManyWithoutDosen_pembimbingInput>
  }

  export type pendaftaran_kpUpsertWithWhereUniqueWithoutDosenInput = {
    where: pendaftaran_kpWhereUniqueInput
    update: XOR<pendaftaran_kpUpdateWithoutDosenInput, pendaftaran_kpUncheckedUpdateWithoutDosenInput>
    create: XOR<pendaftaran_kpCreateWithoutDosenInput, pendaftaran_kpUncheckedCreateWithoutDosenInput>
  }

  export type pendaftaran_kpUpdateWithWhereUniqueWithoutDosenInput = {
    where: pendaftaran_kpWhereUniqueInput
    data: XOR<pendaftaran_kpUpdateWithoutDosenInput, pendaftaran_kpUncheckedUpdateWithoutDosenInput>
  }

  export type pendaftaran_kpUpdateManyWithWhereWithoutDosenInput = {
    where: pendaftaran_kpScalarWhereInput
    data: XOR<pendaftaran_kpUpdateManyMutationInput, pendaftaran_kpUncheckedUpdateManyWithoutDosenInput>
  }

  export type pendaftaran_kpScalarWhereInput = {
    AND?: pendaftaran_kpScalarWhereInput | pendaftaran_kpScalarWhereInput[]
    OR?: pendaftaran_kpScalarWhereInput[]
    NOT?: pendaftaran_kpScalarWhereInput | pendaftaran_kpScalarWhereInput[]
    nim?: StringFilter<"pendaftaran_kp"> | string
    semester?: IntFilter<"pendaftaran_kp"> | number
    tanggalTerdaftar?: DateTimeFilter<"pendaftaran_kp"> | Date | string
    tanggalMulai?: DateTimeNullableFilter<"pendaftaran_kp"> | Date | string | null
    tenggatWaktu?: DateTimeFilter<"pendaftaran_kp"> | Date | string
    gagal?: BoolFilter<"pendaftaran_kp"> | boolean
    tanggalSelesai?: DateTimeNullableFilter<"pendaftaran_kp"> | Date | string | null
    linkSuratPengantar?: StringNullableFilter<"pendaftaran_kp"> | string | null
    linkSuratBalasan?: StringNullableFilter<"pendaftaran_kp"> | string | null
    linkSuratPenunjukkanDospem?: StringNullableFilter<"pendaftaran_kp"> | string | null
    alasanLanjutKP?: StringNullableFilter<"pendaftaran_kp"> | string | null
    linkSuratPerpanjanganKP?: StringNullableFilter<"pendaftaran_kp"> | string | null
    id_pembimbing_instansi?: StringFilter<"pendaftaran_kp"> | string
    nip?: StringNullableFilter<"pendaftaran_kp"> | string | null
  }

  export type pembimbing_instansiCreateWithoutInstansiInput = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
    nilai_instansi?: nilai_instansiCreateNestedManyWithoutPembimbing_instansiInput
    pendaftaran_kp?: pendaftaran_kpCreateNestedManyWithoutPembimbing_instansiInput
  }

  export type pembimbing_instansiUncheckedCreateWithoutInstansiInput = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
    nilai_instansi?: nilai_instansiUncheckedCreateNestedManyWithoutPembimbing_instansiInput
    pendaftaran_kp?: pendaftaran_kpUncheckedCreateNestedManyWithoutPembimbing_instansiInput
  }

  export type pembimbing_instansiCreateOrConnectWithoutInstansiInput = {
    where: pembimbing_instansiWhereUniqueInput
    create: XOR<pembimbing_instansiCreateWithoutInstansiInput, pembimbing_instansiUncheckedCreateWithoutInstansiInput>
  }

  export type pembimbing_instansiCreateManyInstansiInputEnvelope = {
    data: pembimbing_instansiCreateManyInstansiInput | pembimbing_instansiCreateManyInstansiInput[]
    skipDuplicates?: boolean
  }

  export type pembimbing_instansiUpsertWithWhereUniqueWithoutInstansiInput = {
    where: pembimbing_instansiWhereUniqueInput
    update: XOR<pembimbing_instansiUpdateWithoutInstansiInput, pembimbing_instansiUncheckedUpdateWithoutInstansiInput>
    create: XOR<pembimbing_instansiCreateWithoutInstansiInput, pembimbing_instansiUncheckedCreateWithoutInstansiInput>
  }

  export type pembimbing_instansiUpdateWithWhereUniqueWithoutInstansiInput = {
    where: pembimbing_instansiWhereUniqueInput
    data: XOR<pembimbing_instansiUpdateWithoutInstansiInput, pembimbing_instansiUncheckedUpdateWithoutInstansiInput>
  }

  export type pembimbing_instansiUpdateManyWithWhereWithoutInstansiInput = {
    where: pembimbing_instansiScalarWhereInput
    data: XOR<pembimbing_instansiUpdateManyMutationInput, pembimbing_instansiUncheckedUpdateManyWithoutInstansiInput>
  }

  export type pembimbing_instansiScalarWhereInput = {
    AND?: pembimbing_instansiScalarWhereInput | pembimbing_instansiScalarWhereInput[]
    OR?: pembimbing_instansiScalarWhereInput[]
    NOT?: pembimbing_instansiScalarWhereInput | pembimbing_instansiScalarWhereInput[]
    id?: StringFilter<"pembimbing_instansi"> | string
    nama?: StringFilter<"pembimbing_instansi"> | string
    email?: StringFilter<"pembimbing_instansi"> | string
    jabatan?: StringFilter<"pembimbing_instansi"> | string
    no_hp?: StringFilter<"pembimbing_instansi"> | string
    id_instansi?: IntFilter<"pembimbing_instansi"> | number
  }

  export type mahasiswaCreateWithoutJadwalInput = {
    nim: string
    nama: string
    email: string
    bimbingan?: bimbinganCreateNestedManyWithoutMahasiswaInput
    daily_report?: daily_reportCreateNestedManyWithoutMahasiswaInput
    dokumen?: dokumenCreateNestedManyWithoutMahasiswaInput
    nilai_instansi?: nilai_instansiCreateNestedOneWithoutMahasiswaInput
    pendaftaran_kp?: pendaftaran_kpCreateNestedManyWithoutMahasiswaInput
    nilai?: nilaiCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUncheckedCreateWithoutJadwalInput = {
    nim: string
    nama: string
    email: string
    bimbingan?: bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    daily_report?: daily_reportUncheckedCreateNestedManyWithoutMahasiswaInput
    dokumen?: dokumenUncheckedCreateNestedManyWithoutMahasiswaInput
    nilai_instansi?: nilai_instansiUncheckedCreateNestedOneWithoutMahasiswaInput
    pendaftaran_kp?: pendaftaran_kpUncheckedCreateNestedManyWithoutMahasiswaInput
    nilai?: nilaiUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaCreateOrConnectWithoutJadwalInput = {
    where: mahasiswaWhereUniqueInput
    create: XOR<mahasiswaCreateWithoutJadwalInput, mahasiswaUncheckedCreateWithoutJadwalInput>
  }

  export type dosenCreateWithoutJadwalInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    id_telegram: string
    bimbingan?: bimbinganCreateNestedManyWithoutDosenInput
    nilai_penguji?: nilaiCreateNestedManyWithoutDosen_pengujiInput
    nilai_pembimbing?: nilaiCreateNestedManyWithoutDosen_pembimbingInput
    pendaftaran_kp?: pendaftaran_kpCreateNestedManyWithoutDosenInput
  }

  export type dosenUncheckedCreateWithoutJadwalInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    id_telegram: string
    bimbingan?: bimbinganUncheckedCreateNestedManyWithoutDosenInput
    nilai_penguji?: nilaiUncheckedCreateNestedManyWithoutDosen_pengujiInput
    nilai_pembimbing?: nilaiUncheckedCreateNestedManyWithoutDosen_pembimbingInput
    pendaftaran_kp?: pendaftaran_kpUncheckedCreateNestedManyWithoutDosenInput
  }

  export type dosenCreateOrConnectWithoutJadwalInput = {
    where: dosenWhereUniqueInput
    create: XOR<dosenCreateWithoutJadwalInput, dosenUncheckedCreateWithoutJadwalInput>
  }

  export type ruanganCreateWithoutJadwalInput = {
    nama: string
  }

  export type ruanganUncheckedCreateWithoutJadwalInput = {
    nama: string
  }

  export type ruanganCreateOrConnectWithoutJadwalInput = {
    where: ruanganWhereUniqueInput
    create: XOR<ruanganCreateWithoutJadwalInput, ruanganUncheckedCreateWithoutJadwalInput>
  }

  export type nilaiCreateWithoutJadwalInput = {
    id: string
    nim: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
    dosen_penguji?: dosenCreateNestedOneWithoutNilai_pengujiInput
    dosen_pembimbing?: dosenCreateNestedOneWithoutNilai_pembimbingInput
    mahasiswa?: mahasiswaCreateNestedManyWithoutNilaiInput
  }

  export type nilaiUncheckedCreateWithoutJadwalInput = {
    id: string
    nim: string
    nip_penguji: string
    nip_pembimbing: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
    mahasiswa?: mahasiswaUncheckedCreateNestedManyWithoutNilaiInput
  }

  export type nilaiCreateOrConnectWithoutJadwalInput = {
    where: nilaiWhereUniqueInput
    create: XOR<nilaiCreateWithoutJadwalInput, nilaiUncheckedCreateWithoutJadwalInput>
  }

  export type mahasiswaUpsertWithoutJadwalInput = {
    update: XOR<mahasiswaUpdateWithoutJadwalInput, mahasiswaUncheckedUpdateWithoutJadwalInput>
    create: XOR<mahasiswaCreateWithoutJadwalInput, mahasiswaUncheckedCreateWithoutJadwalInput>
    where?: mahasiswaWhereInput
  }

  export type mahasiswaUpdateToOneWithWhereWithoutJadwalInput = {
    where?: mahasiswaWhereInput
    data: XOR<mahasiswaUpdateWithoutJadwalInput, mahasiswaUncheckedUpdateWithoutJadwalInput>
  }

  export type mahasiswaUpdateWithoutJadwalInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUpdateManyWithoutMahasiswaNestedInput
    daily_report?: daily_reportUpdateManyWithoutMahasiswaNestedInput
    dokumen?: dokumenUpdateManyWithoutMahasiswaNestedInput
    nilai_instansi?: nilai_instansiUpdateOneWithoutMahasiswaNestedInput
    pendaftaran_kp?: pendaftaran_kpUpdateManyWithoutMahasiswaNestedInput
    nilai?: nilaiUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaUncheckedUpdateWithoutJadwalInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    daily_report?: daily_reportUncheckedUpdateManyWithoutMahasiswaNestedInput
    dokumen?: dokumenUncheckedUpdateManyWithoutMahasiswaNestedInput
    nilai_instansi?: nilai_instansiUncheckedUpdateOneWithoutMahasiswaNestedInput
    pendaftaran_kp?: pendaftaran_kpUncheckedUpdateManyWithoutMahasiswaNestedInput
    nilai?: nilaiUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type dosenUpsertWithoutJadwalInput = {
    update: XOR<dosenUpdateWithoutJadwalInput, dosenUncheckedUpdateWithoutJadwalInput>
    create: XOR<dosenCreateWithoutJadwalInput, dosenUncheckedCreateWithoutJadwalInput>
    where?: dosenWhereInput
  }

  export type dosenUpdateToOneWithWhereWithoutJadwalInput = {
    where?: dosenWhereInput
    data: XOR<dosenUpdateWithoutJadwalInput, dosenUncheckedUpdateWithoutJadwalInput>
  }

  export type dosenUpdateWithoutJadwalInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_telegram?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUpdateManyWithoutDosenNestedInput
    nilai_penguji?: nilaiUpdateManyWithoutDosen_pengujiNestedInput
    nilai_pembimbing?: nilaiUpdateManyWithoutDosen_pembimbingNestedInput
    pendaftaran_kp?: pendaftaran_kpUpdateManyWithoutDosenNestedInput
  }

  export type dosenUncheckedUpdateWithoutJadwalInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_telegram?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUncheckedUpdateManyWithoutDosenNestedInput
    nilai_penguji?: nilaiUncheckedUpdateManyWithoutDosen_pengujiNestedInput
    nilai_pembimbing?: nilaiUncheckedUpdateManyWithoutDosen_pembimbingNestedInput
    pendaftaran_kp?: pendaftaran_kpUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type ruanganUpsertWithoutJadwalInput = {
    update: XOR<ruanganUpdateWithoutJadwalInput, ruanganUncheckedUpdateWithoutJadwalInput>
    create: XOR<ruanganCreateWithoutJadwalInput, ruanganUncheckedCreateWithoutJadwalInput>
    where?: ruanganWhereInput
  }

  export type ruanganUpdateToOneWithWhereWithoutJadwalInput = {
    where?: ruanganWhereInput
    data: XOR<ruanganUpdateWithoutJadwalInput, ruanganUncheckedUpdateWithoutJadwalInput>
  }

  export type ruanganUpdateWithoutJadwalInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type ruanganUncheckedUpdateWithoutJadwalInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type nilaiUpsertWithoutJadwalInput = {
    update: XOR<nilaiUpdateWithoutJadwalInput, nilaiUncheckedUpdateWithoutJadwalInput>
    create: XOR<nilaiCreateWithoutJadwalInput, nilaiUncheckedCreateWithoutJadwalInput>
    where?: nilaiWhereInput
  }

  export type nilaiUpdateToOneWithWhereWithoutJadwalInput = {
    where?: nilaiWhereInput
    data: XOR<nilaiUpdateWithoutJadwalInput, nilaiUncheckedUpdateWithoutJadwalInput>
  }

  export type nilaiUpdateWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
    dosen_penguji?: dosenUpdateOneWithoutNilai_pengujiNestedInput
    dosen_pembimbing?: dosenUpdateOneWithoutNilai_pembimbingNestedInput
    mahasiswa?: mahasiswaUpdateManyWithoutNilaiNestedInput
  }

  export type nilaiUncheckedUpdateWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nip_penguji?: StringFieldUpdateOperationsInput | string
    nip_pembimbing?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
    mahasiswa?: mahasiswaUncheckedUpdateManyWithoutNilaiNestedInput
  }

  export type bimbinganCreateWithoutMahasiswaInput = {
    id: string
    tanggal: Date | string
    catatan: string
    status: $Enums.StatusValidasi
    dosen: dosenCreateNestedOneWithoutBimbinganInput
  }

  export type bimbinganUncheckedCreateWithoutMahasiswaInput = {
    id: string
    tanggal: Date | string
    catatan: string
    status: $Enums.StatusValidasi
    nip: string
  }

  export type bimbinganCreateOrConnectWithoutMahasiswaInput = {
    where: bimbinganWhereUniqueInput
    create: XOR<bimbinganCreateWithoutMahasiswaInput, bimbinganUncheckedCreateWithoutMahasiswaInput>
  }

  export type bimbinganCreateManyMahasiswaInputEnvelope = {
    data: bimbinganCreateManyMahasiswaInput | bimbinganCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type daily_reportCreateWithoutMahasiswaInput = {
    id: string
    tanggal: Date | string
    status: $Enums.StatusValidasi
    catatan?: string | null
    latitude: number
    longitude: number
    detail_daily_report?: detail_daily_reportCreateNestedManyWithoutDaily_reportInput
  }

  export type daily_reportUncheckedCreateWithoutMahasiswaInput = {
    id: string
    tanggal: Date | string
    status: $Enums.StatusValidasi
    catatan?: string | null
    latitude: number
    longitude: number
    detail_daily_report?: detail_daily_reportUncheckedCreateNestedManyWithoutDaily_reportInput
  }

  export type daily_reportCreateOrConnectWithoutMahasiswaInput = {
    where: daily_reportWhereUniqueInput
    create: XOR<daily_reportCreateWithoutMahasiswaInput, daily_reportUncheckedCreateWithoutMahasiswaInput>
  }

  export type daily_reportCreateManyMahasiswaInputEnvelope = {
    data: daily_reportCreateManyMahasiswaInput | daily_reportCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type dokumenCreateWithoutMahasiswaInput = {
    id: string
    jenis_dokumen: $Enums.JenisDokumen
    file_path: string
    tanggal_upload?: Date | string
    status?: $Enums.DokumenStatus
    komentar?: string | null
  }

  export type dokumenUncheckedCreateWithoutMahasiswaInput = {
    id: string
    jenis_dokumen: $Enums.JenisDokumen
    file_path: string
    tanggal_upload?: Date | string
    status?: $Enums.DokumenStatus
    komentar?: string | null
  }

  export type dokumenCreateOrConnectWithoutMahasiswaInput = {
    where: dokumenWhereUniqueInput
    create: XOR<dokumenCreateWithoutMahasiswaInput, dokumenUncheckedCreateWithoutMahasiswaInput>
  }

  export type dokumenCreateManyMahasiswaInputEnvelope = {
    data: dokumenCreateManyMahasiswaInput | dokumenCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type jadwalCreateWithoutMahasiswaInput = {
    id: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    status?: $Enums.StatusSeminar
    dosen: dosenCreateNestedOneWithoutJadwalInput
    ruangan: ruanganCreateNestedOneWithoutJadwalInput
    nilai?: nilaiCreateNestedOneWithoutJadwalInput
  }

  export type jadwalUncheckedCreateWithoutMahasiswaInput = {
    id: string
    nip: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    ruangan_nama: string
    status?: $Enums.StatusSeminar
    nilai?: nilaiUncheckedCreateNestedOneWithoutJadwalInput
  }

  export type jadwalCreateOrConnectWithoutMahasiswaInput = {
    where: jadwalWhereUniqueInput
    create: XOR<jadwalCreateWithoutMahasiswaInput, jadwalUncheckedCreateWithoutMahasiswaInput>
  }

  export type jadwalCreateManyMahasiswaInputEnvelope = {
    data: jadwalCreateManyMahasiswaInput | jadwalCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type nilai_instansiCreateWithoutMahasiswaInput = {
    id: string
    tanggal: Date | string
    nilai_angka: number
    nilai_huruf: string
    pembimbing_instansi: pembimbing_instansiCreateNestedOneWithoutNilai_instansiInput
  }

  export type nilai_instansiUncheckedCreateWithoutMahasiswaInput = {
    id: string
    tanggal: Date | string
    nilai_angka: number
    nilai_huruf: string
    id_pembimbing_instansi: string
  }

  export type nilai_instansiCreateOrConnectWithoutMahasiswaInput = {
    where: nilai_instansiWhereUniqueInput
    create: XOR<nilai_instansiCreateWithoutMahasiswaInput, nilai_instansiUncheckedCreateWithoutMahasiswaInput>
  }

  export type pendaftaran_kpCreateWithoutMahasiswaInput = {
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    pembimbing_instansi: pembimbing_instansiCreateNestedOneWithoutPendaftaran_kpInput
    dosen?: dosenCreateNestedOneWithoutPendaftaran_kpInput
  }

  export type pendaftaran_kpUncheckedCreateWithoutMahasiswaInput = {
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    id_pembimbing_instansi: string
    nip?: string | null
  }

  export type pendaftaran_kpCreateOrConnectWithoutMahasiswaInput = {
    where: pendaftaran_kpWhereUniqueInput
    create: XOR<pendaftaran_kpCreateWithoutMahasiswaInput, pendaftaran_kpUncheckedCreateWithoutMahasiswaInput>
  }

  export type pendaftaran_kpCreateManyMahasiswaInputEnvelope = {
    data: pendaftaran_kpCreateManyMahasiswaInput | pendaftaran_kpCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type nilaiCreateWithoutMahasiswaInput = {
    id: string
    nim: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
    jadwal: jadwalCreateNestedOneWithoutNilaiInput
    dosen_penguji?: dosenCreateNestedOneWithoutNilai_pengujiInput
    dosen_pembimbing?: dosenCreateNestedOneWithoutNilai_pembimbingInput
  }

  export type nilaiUncheckedCreateWithoutMahasiswaInput = {
    id: string
    nim: string
    jadwal_seminar_id: string
    nip_penguji: string
    nip_pembimbing: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
  }

  export type nilaiCreateOrConnectWithoutMahasiswaInput = {
    where: nilaiWhereUniqueInput
    create: XOR<nilaiCreateWithoutMahasiswaInput, nilaiUncheckedCreateWithoutMahasiswaInput>
  }

  export type bimbinganUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: bimbinganWhereUniqueInput
    update: XOR<bimbinganUpdateWithoutMahasiswaInput, bimbinganUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<bimbinganCreateWithoutMahasiswaInput, bimbinganUncheckedCreateWithoutMahasiswaInput>
  }

  export type bimbinganUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: bimbinganWhereUniqueInput
    data: XOR<bimbinganUpdateWithoutMahasiswaInput, bimbinganUncheckedUpdateWithoutMahasiswaInput>
  }

  export type bimbinganUpdateManyWithWhereWithoutMahasiswaInput = {
    where: bimbinganScalarWhereInput
    data: XOR<bimbinganUpdateManyMutationInput, bimbinganUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type daily_reportUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: daily_reportWhereUniqueInput
    update: XOR<daily_reportUpdateWithoutMahasiswaInput, daily_reportUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<daily_reportCreateWithoutMahasiswaInput, daily_reportUncheckedCreateWithoutMahasiswaInput>
  }

  export type daily_reportUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: daily_reportWhereUniqueInput
    data: XOR<daily_reportUpdateWithoutMahasiswaInput, daily_reportUncheckedUpdateWithoutMahasiswaInput>
  }

  export type daily_reportUpdateManyWithWhereWithoutMahasiswaInput = {
    where: daily_reportScalarWhereInput
    data: XOR<daily_reportUpdateManyMutationInput, daily_reportUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type daily_reportScalarWhereInput = {
    AND?: daily_reportScalarWhereInput | daily_reportScalarWhereInput[]
    OR?: daily_reportScalarWhereInput[]
    NOT?: daily_reportScalarWhereInput | daily_reportScalarWhereInput[]
    id?: StringFilter<"daily_report"> | string
    tanggal?: DateTimeFilter<"daily_report"> | Date | string
    status?: EnumStatusValidasiFilter<"daily_report"> | $Enums.StatusValidasi
    catatan?: StringNullableFilter<"daily_report"> | string | null
    latitude?: FloatFilter<"daily_report"> | number
    longitude?: FloatFilter<"daily_report"> | number
    nim?: StringFilter<"daily_report"> | string
  }

  export type dokumenUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: dokumenWhereUniqueInput
    update: XOR<dokumenUpdateWithoutMahasiswaInput, dokumenUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<dokumenCreateWithoutMahasiswaInput, dokumenUncheckedCreateWithoutMahasiswaInput>
  }

  export type dokumenUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: dokumenWhereUniqueInput
    data: XOR<dokumenUpdateWithoutMahasiswaInput, dokumenUncheckedUpdateWithoutMahasiswaInput>
  }

  export type dokumenUpdateManyWithWhereWithoutMahasiswaInput = {
    where: dokumenScalarWhereInput
    data: XOR<dokumenUpdateManyMutationInput, dokumenUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type dokumenScalarWhereInput = {
    AND?: dokumenScalarWhereInput | dokumenScalarWhereInput[]
    OR?: dokumenScalarWhereInput[]
    NOT?: dokumenScalarWhereInput | dokumenScalarWhereInput[]
    id?: StringFilter<"dokumen"> | string
    nim?: StringFilter<"dokumen"> | string
    jenis_dokumen?: EnumJenisDokumenFilter<"dokumen"> | $Enums.JenisDokumen
    file_path?: StringFilter<"dokumen"> | string
    tanggal_upload?: DateTimeFilter<"dokumen"> | Date | string
    status?: EnumDokumenStatusFilter<"dokumen"> | $Enums.DokumenStatus
    komentar?: StringNullableFilter<"dokumen"> | string | null
  }

  export type jadwalUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: jadwalWhereUniqueInput
    update: XOR<jadwalUpdateWithoutMahasiswaInput, jadwalUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<jadwalCreateWithoutMahasiswaInput, jadwalUncheckedCreateWithoutMahasiswaInput>
  }

  export type jadwalUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: jadwalWhereUniqueInput
    data: XOR<jadwalUpdateWithoutMahasiswaInput, jadwalUncheckedUpdateWithoutMahasiswaInput>
  }

  export type jadwalUpdateManyWithWhereWithoutMahasiswaInput = {
    where: jadwalScalarWhereInput
    data: XOR<jadwalUpdateManyMutationInput, jadwalUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type nilai_instansiUpsertWithoutMahasiswaInput = {
    update: XOR<nilai_instansiUpdateWithoutMahasiswaInput, nilai_instansiUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<nilai_instansiCreateWithoutMahasiswaInput, nilai_instansiUncheckedCreateWithoutMahasiswaInput>
    where?: nilai_instansiWhereInput
  }

  export type nilai_instansiUpdateToOneWithWhereWithoutMahasiswaInput = {
    where?: nilai_instansiWhereInput
    data: XOR<nilai_instansiUpdateWithoutMahasiswaInput, nilai_instansiUncheckedUpdateWithoutMahasiswaInput>
  }

  export type nilai_instansiUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilai_angka?: FloatFieldUpdateOperationsInput | number
    nilai_huruf?: StringFieldUpdateOperationsInput | string
    pembimbing_instansi?: pembimbing_instansiUpdateOneRequiredWithoutNilai_instansiNestedInput
  }

  export type nilai_instansiUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilai_angka?: FloatFieldUpdateOperationsInput | number
    nilai_huruf?: StringFieldUpdateOperationsInput | string
    id_pembimbing_instansi?: StringFieldUpdateOperationsInput | string
  }

  export type pendaftaran_kpUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: pendaftaran_kpWhereUniqueInput
    update: XOR<pendaftaran_kpUpdateWithoutMahasiswaInput, pendaftaran_kpUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<pendaftaran_kpCreateWithoutMahasiswaInput, pendaftaran_kpUncheckedCreateWithoutMahasiswaInput>
  }

  export type pendaftaran_kpUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: pendaftaran_kpWhereUniqueInput
    data: XOR<pendaftaran_kpUpdateWithoutMahasiswaInput, pendaftaran_kpUncheckedUpdateWithoutMahasiswaInput>
  }

  export type pendaftaran_kpUpdateManyWithWhereWithoutMahasiswaInput = {
    where: pendaftaran_kpScalarWhereInput
    data: XOR<pendaftaran_kpUpdateManyMutationInput, pendaftaran_kpUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type nilaiUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: nilaiWhereUniqueInput
    update: XOR<nilaiUpdateWithoutMahasiswaInput, nilaiUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<nilaiCreateWithoutMahasiswaInput, nilaiUncheckedCreateWithoutMahasiswaInput>
  }

  export type nilaiUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: nilaiWhereUniqueInput
    data: XOR<nilaiUpdateWithoutMahasiswaInput, nilaiUncheckedUpdateWithoutMahasiswaInput>
  }

  export type nilaiUpdateManyWithWhereWithoutMahasiswaInput = {
    where: nilaiScalarWhereInput
    data: XOR<nilaiUpdateManyMutationInput, nilaiUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type jadwalCreateWithoutNilaiInput = {
    id: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    status?: $Enums.StatusSeminar
    mahasiswa: mahasiswaCreateNestedOneWithoutJadwalInput
    dosen: dosenCreateNestedOneWithoutJadwalInput
    ruangan: ruanganCreateNestedOneWithoutJadwalInput
  }

  export type jadwalUncheckedCreateWithoutNilaiInput = {
    id: string
    nim: string
    nip: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    ruangan_nama: string
    status?: $Enums.StatusSeminar
  }

  export type jadwalCreateOrConnectWithoutNilaiInput = {
    where: jadwalWhereUniqueInput
    create: XOR<jadwalCreateWithoutNilaiInput, jadwalUncheckedCreateWithoutNilaiInput>
  }

  export type dosenCreateWithoutNilai_pengujiInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    id_telegram: string
    bimbingan?: bimbinganCreateNestedManyWithoutDosenInput
    jadwal?: jadwalCreateNestedManyWithoutDosenInput
    nilai_pembimbing?: nilaiCreateNestedManyWithoutDosen_pembimbingInput
    pendaftaran_kp?: pendaftaran_kpCreateNestedManyWithoutDosenInput
  }

  export type dosenUncheckedCreateWithoutNilai_pengujiInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    id_telegram: string
    bimbingan?: bimbinganUncheckedCreateNestedManyWithoutDosenInput
    jadwal?: jadwalUncheckedCreateNestedManyWithoutDosenInput
    nilai_pembimbing?: nilaiUncheckedCreateNestedManyWithoutDosen_pembimbingInput
    pendaftaran_kp?: pendaftaran_kpUncheckedCreateNestedManyWithoutDosenInput
  }

  export type dosenCreateOrConnectWithoutNilai_pengujiInput = {
    where: dosenWhereUniqueInput
    create: XOR<dosenCreateWithoutNilai_pengujiInput, dosenUncheckedCreateWithoutNilai_pengujiInput>
  }

  export type dosenCreateWithoutNilai_pembimbingInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    id_telegram: string
    bimbingan?: bimbinganCreateNestedManyWithoutDosenInput
    jadwal?: jadwalCreateNestedManyWithoutDosenInput
    nilai_penguji?: nilaiCreateNestedManyWithoutDosen_pengujiInput
    pendaftaran_kp?: pendaftaran_kpCreateNestedManyWithoutDosenInput
  }

  export type dosenUncheckedCreateWithoutNilai_pembimbingInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    id_telegram: string
    bimbingan?: bimbinganUncheckedCreateNestedManyWithoutDosenInput
    jadwal?: jadwalUncheckedCreateNestedManyWithoutDosenInput
    nilai_penguji?: nilaiUncheckedCreateNestedManyWithoutDosen_pengujiInput
    pendaftaran_kp?: pendaftaran_kpUncheckedCreateNestedManyWithoutDosenInput
  }

  export type dosenCreateOrConnectWithoutNilai_pembimbingInput = {
    where: dosenWhereUniqueInput
    create: XOR<dosenCreateWithoutNilai_pembimbingInput, dosenUncheckedCreateWithoutNilai_pembimbingInput>
  }

  export type mahasiswaCreateWithoutNilaiInput = {
    nim: string
    nama: string
    email: string
    bimbingan?: bimbinganCreateNestedManyWithoutMahasiswaInput
    daily_report?: daily_reportCreateNestedManyWithoutMahasiswaInput
    dokumen?: dokumenCreateNestedManyWithoutMahasiswaInput
    jadwal?: jadwalCreateNestedManyWithoutMahasiswaInput
    nilai_instansi?: nilai_instansiCreateNestedOneWithoutMahasiswaInput
    pendaftaran_kp?: pendaftaran_kpCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUncheckedCreateWithoutNilaiInput = {
    nim: string
    nama: string
    email: string
    bimbingan?: bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    daily_report?: daily_reportUncheckedCreateNestedManyWithoutMahasiswaInput
    dokumen?: dokumenUncheckedCreateNestedManyWithoutMahasiswaInput
    jadwal?: jadwalUncheckedCreateNestedManyWithoutMahasiswaInput
    nilai_instansi?: nilai_instansiUncheckedCreateNestedOneWithoutMahasiswaInput
    pendaftaran_kp?: pendaftaran_kpUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaCreateOrConnectWithoutNilaiInput = {
    where: mahasiswaWhereUniqueInput
    create: XOR<mahasiswaCreateWithoutNilaiInput, mahasiswaUncheckedCreateWithoutNilaiInput>
  }

  export type jadwalUpsertWithoutNilaiInput = {
    update: XOR<jadwalUpdateWithoutNilaiInput, jadwalUncheckedUpdateWithoutNilaiInput>
    create: XOR<jadwalCreateWithoutNilaiInput, jadwalUncheckedCreateWithoutNilaiInput>
    where?: jadwalWhereInput
  }

  export type jadwalUpdateToOneWithWhereWithoutNilaiInput = {
    where?: jadwalWhereInput
    data: XOR<jadwalUpdateWithoutNilaiInput, jadwalUncheckedUpdateWithoutNilaiInput>
  }

  export type jadwalUpdateWithoutNilaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutJadwalNestedInput
    dosen?: dosenUpdateOneRequiredWithoutJadwalNestedInput
    ruangan?: ruanganUpdateOneRequiredWithoutJadwalNestedInput
  }

  export type jadwalUncheckedUpdateWithoutNilaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruangan_nama?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
  }

  export type dosenUpsertWithoutNilai_pengujiInput = {
    update: XOR<dosenUpdateWithoutNilai_pengujiInput, dosenUncheckedUpdateWithoutNilai_pengujiInput>
    create: XOR<dosenCreateWithoutNilai_pengujiInput, dosenUncheckedCreateWithoutNilai_pengujiInput>
    where?: dosenWhereInput
  }

  export type dosenUpdateToOneWithWhereWithoutNilai_pengujiInput = {
    where?: dosenWhereInput
    data: XOR<dosenUpdateWithoutNilai_pengujiInput, dosenUncheckedUpdateWithoutNilai_pengujiInput>
  }

  export type dosenUpdateWithoutNilai_pengujiInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_telegram?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUpdateManyWithoutDosenNestedInput
    jadwal?: jadwalUpdateManyWithoutDosenNestedInput
    nilai_pembimbing?: nilaiUpdateManyWithoutDosen_pembimbingNestedInput
    pendaftaran_kp?: pendaftaran_kpUpdateManyWithoutDosenNestedInput
  }

  export type dosenUncheckedUpdateWithoutNilai_pengujiInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_telegram?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUncheckedUpdateManyWithoutDosenNestedInput
    jadwal?: jadwalUncheckedUpdateManyWithoutDosenNestedInput
    nilai_pembimbing?: nilaiUncheckedUpdateManyWithoutDosen_pembimbingNestedInput
    pendaftaran_kp?: pendaftaran_kpUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type dosenUpsertWithoutNilai_pembimbingInput = {
    update: XOR<dosenUpdateWithoutNilai_pembimbingInput, dosenUncheckedUpdateWithoutNilai_pembimbingInput>
    create: XOR<dosenCreateWithoutNilai_pembimbingInput, dosenUncheckedCreateWithoutNilai_pembimbingInput>
    where?: dosenWhereInput
  }

  export type dosenUpdateToOneWithWhereWithoutNilai_pembimbingInput = {
    where?: dosenWhereInput
    data: XOR<dosenUpdateWithoutNilai_pembimbingInput, dosenUncheckedUpdateWithoutNilai_pembimbingInput>
  }

  export type dosenUpdateWithoutNilai_pembimbingInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_telegram?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUpdateManyWithoutDosenNestedInput
    jadwal?: jadwalUpdateManyWithoutDosenNestedInput
    nilai_penguji?: nilaiUpdateManyWithoutDosen_pengujiNestedInput
    pendaftaran_kp?: pendaftaran_kpUpdateManyWithoutDosenNestedInput
  }

  export type dosenUncheckedUpdateWithoutNilai_pembimbingInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_telegram?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUncheckedUpdateManyWithoutDosenNestedInput
    jadwal?: jadwalUncheckedUpdateManyWithoutDosenNestedInput
    nilai_penguji?: nilaiUncheckedUpdateManyWithoutDosen_pengujiNestedInput
    pendaftaran_kp?: pendaftaran_kpUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type mahasiswaUpsertWithWhereUniqueWithoutNilaiInput = {
    where: mahasiswaWhereUniqueInput
    update: XOR<mahasiswaUpdateWithoutNilaiInput, mahasiswaUncheckedUpdateWithoutNilaiInput>
    create: XOR<mahasiswaCreateWithoutNilaiInput, mahasiswaUncheckedCreateWithoutNilaiInput>
  }

  export type mahasiswaUpdateWithWhereUniqueWithoutNilaiInput = {
    where: mahasiswaWhereUniqueInput
    data: XOR<mahasiswaUpdateWithoutNilaiInput, mahasiswaUncheckedUpdateWithoutNilaiInput>
  }

  export type mahasiswaUpdateManyWithWhereWithoutNilaiInput = {
    where: mahasiswaScalarWhereInput
    data: XOR<mahasiswaUpdateManyMutationInput, mahasiswaUncheckedUpdateManyWithoutNilaiInput>
  }

  export type mahasiswaScalarWhereInput = {
    AND?: mahasiswaScalarWhereInput | mahasiswaScalarWhereInput[]
    OR?: mahasiswaScalarWhereInput[]
    NOT?: mahasiswaScalarWhereInput | mahasiswaScalarWhereInput[]
    nim?: StringFilter<"mahasiswa"> | string
    nama?: StringFilter<"mahasiswa"> | string
    email?: StringFilter<"mahasiswa"> | string
  }

  export type pembimbing_instansiCreateWithoutNilai_instansiInput = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
    instansi: instansiCreateNestedOneWithoutPembimbing_instansiInput
    pendaftaran_kp?: pendaftaran_kpCreateNestedManyWithoutPembimbing_instansiInput
  }

  export type pembimbing_instansiUncheckedCreateWithoutNilai_instansiInput = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
    id_instansi: number
    pendaftaran_kp?: pendaftaran_kpUncheckedCreateNestedManyWithoutPembimbing_instansiInput
  }

  export type pembimbing_instansiCreateOrConnectWithoutNilai_instansiInput = {
    where: pembimbing_instansiWhereUniqueInput
    create: XOR<pembimbing_instansiCreateWithoutNilai_instansiInput, pembimbing_instansiUncheckedCreateWithoutNilai_instansiInput>
  }

  export type mahasiswaCreateWithoutNilai_instansiInput = {
    nim: string
    nama: string
    email: string
    bimbingan?: bimbinganCreateNestedManyWithoutMahasiswaInput
    daily_report?: daily_reportCreateNestedManyWithoutMahasiswaInput
    dokumen?: dokumenCreateNestedManyWithoutMahasiswaInput
    jadwal?: jadwalCreateNestedManyWithoutMahasiswaInput
    pendaftaran_kp?: pendaftaran_kpCreateNestedManyWithoutMahasiswaInput
    nilai?: nilaiCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUncheckedCreateWithoutNilai_instansiInput = {
    nim: string
    nama: string
    email: string
    bimbingan?: bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    daily_report?: daily_reportUncheckedCreateNestedManyWithoutMahasiswaInput
    dokumen?: dokumenUncheckedCreateNestedManyWithoutMahasiswaInput
    jadwal?: jadwalUncheckedCreateNestedManyWithoutMahasiswaInput
    pendaftaran_kp?: pendaftaran_kpUncheckedCreateNestedManyWithoutMahasiswaInput
    nilai?: nilaiUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaCreateOrConnectWithoutNilai_instansiInput = {
    where: mahasiswaWhereUniqueInput
    create: XOR<mahasiswaCreateWithoutNilai_instansiInput, mahasiswaUncheckedCreateWithoutNilai_instansiInput>
  }

  export type pembimbing_instansiUpsertWithoutNilai_instansiInput = {
    update: XOR<pembimbing_instansiUpdateWithoutNilai_instansiInput, pembimbing_instansiUncheckedUpdateWithoutNilai_instansiInput>
    create: XOR<pembimbing_instansiCreateWithoutNilai_instansiInput, pembimbing_instansiUncheckedCreateWithoutNilai_instansiInput>
    where?: pembimbing_instansiWhereInput
  }

  export type pembimbing_instansiUpdateToOneWithWhereWithoutNilai_instansiInput = {
    where?: pembimbing_instansiWhereInput
    data: XOR<pembimbing_instansiUpdateWithoutNilai_instansiInput, pembimbing_instansiUncheckedUpdateWithoutNilai_instansiInput>
  }

  export type pembimbing_instansiUpdateWithoutNilai_instansiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    instansi?: instansiUpdateOneRequiredWithoutPembimbing_instansiNestedInput
    pendaftaran_kp?: pendaftaran_kpUpdateManyWithoutPembimbing_instansiNestedInput
  }

  export type pembimbing_instansiUncheckedUpdateWithoutNilai_instansiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_instansi?: IntFieldUpdateOperationsInput | number
    pendaftaran_kp?: pendaftaran_kpUncheckedUpdateManyWithoutPembimbing_instansiNestedInput
  }

  export type mahasiswaUpsertWithoutNilai_instansiInput = {
    update: XOR<mahasiswaUpdateWithoutNilai_instansiInput, mahasiswaUncheckedUpdateWithoutNilai_instansiInput>
    create: XOR<mahasiswaCreateWithoutNilai_instansiInput, mahasiswaUncheckedCreateWithoutNilai_instansiInput>
    where?: mahasiswaWhereInput
  }

  export type mahasiswaUpdateToOneWithWhereWithoutNilai_instansiInput = {
    where?: mahasiswaWhereInput
    data: XOR<mahasiswaUpdateWithoutNilai_instansiInput, mahasiswaUncheckedUpdateWithoutNilai_instansiInput>
  }

  export type mahasiswaUpdateWithoutNilai_instansiInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUpdateManyWithoutMahasiswaNestedInput
    daily_report?: daily_reportUpdateManyWithoutMahasiswaNestedInput
    dokumen?: dokumenUpdateManyWithoutMahasiswaNestedInput
    jadwal?: jadwalUpdateManyWithoutMahasiswaNestedInput
    pendaftaran_kp?: pendaftaran_kpUpdateManyWithoutMahasiswaNestedInput
    nilai?: nilaiUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaUncheckedUpdateWithoutNilai_instansiInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    daily_report?: daily_reportUncheckedUpdateManyWithoutMahasiswaNestedInput
    dokumen?: dokumenUncheckedUpdateManyWithoutMahasiswaNestedInput
    jadwal?: jadwalUncheckedUpdateManyWithoutMahasiswaNestedInput
    pendaftaran_kp?: pendaftaran_kpUncheckedUpdateManyWithoutMahasiswaNestedInput
    nilai?: nilaiUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type nilai_instansiCreateWithoutPembimbing_instansiInput = {
    id: string
    tanggal: Date | string
    nilai_angka: number
    nilai_huruf: string
    mahasiswa: mahasiswaCreateNestedOneWithoutNilai_instansiInput
  }

  export type nilai_instansiUncheckedCreateWithoutPembimbing_instansiInput = {
    id: string
    tanggal: Date | string
    nilai_angka: number
    nilai_huruf: string
    nim: string
  }

  export type nilai_instansiCreateOrConnectWithoutPembimbing_instansiInput = {
    where: nilai_instansiWhereUniqueInput
    create: XOR<nilai_instansiCreateWithoutPembimbing_instansiInput, nilai_instansiUncheckedCreateWithoutPembimbing_instansiInput>
  }

  export type nilai_instansiCreateManyPembimbing_instansiInputEnvelope = {
    data: nilai_instansiCreateManyPembimbing_instansiInput | nilai_instansiCreateManyPembimbing_instansiInput[]
    skipDuplicates?: boolean
  }

  export type instansiCreateWithoutPembimbing_instansiInput = {
    nama: string
    alamat: string
    jenis: $Enums.JenisInstansi
    profil_singkat: string
    status?: $Enums.StatusInstansi
  }

  export type instansiUncheckedCreateWithoutPembimbing_instansiInput = {
    id?: number
    nama: string
    alamat: string
    jenis: $Enums.JenisInstansi
    profil_singkat: string
    status?: $Enums.StatusInstansi
  }

  export type instansiCreateOrConnectWithoutPembimbing_instansiInput = {
    where: instansiWhereUniqueInput
    create: XOR<instansiCreateWithoutPembimbing_instansiInput, instansiUncheckedCreateWithoutPembimbing_instansiInput>
  }

  export type pendaftaran_kpCreateWithoutPembimbing_instansiInput = {
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    mahasiswa: mahasiswaCreateNestedOneWithoutPendaftaran_kpInput
    dosen?: dosenCreateNestedOneWithoutPendaftaran_kpInput
  }

  export type pendaftaran_kpUncheckedCreateWithoutPembimbing_instansiInput = {
    nim: string
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    nip?: string | null
  }

  export type pendaftaran_kpCreateOrConnectWithoutPembimbing_instansiInput = {
    where: pendaftaran_kpWhereUniqueInput
    create: XOR<pendaftaran_kpCreateWithoutPembimbing_instansiInput, pendaftaran_kpUncheckedCreateWithoutPembimbing_instansiInput>
  }

  export type pendaftaran_kpCreateManyPembimbing_instansiInputEnvelope = {
    data: pendaftaran_kpCreateManyPembimbing_instansiInput | pendaftaran_kpCreateManyPembimbing_instansiInput[]
    skipDuplicates?: boolean
  }

  export type nilai_instansiUpsertWithWhereUniqueWithoutPembimbing_instansiInput = {
    where: nilai_instansiWhereUniqueInput
    update: XOR<nilai_instansiUpdateWithoutPembimbing_instansiInput, nilai_instansiUncheckedUpdateWithoutPembimbing_instansiInput>
    create: XOR<nilai_instansiCreateWithoutPembimbing_instansiInput, nilai_instansiUncheckedCreateWithoutPembimbing_instansiInput>
  }

  export type nilai_instansiUpdateWithWhereUniqueWithoutPembimbing_instansiInput = {
    where: nilai_instansiWhereUniqueInput
    data: XOR<nilai_instansiUpdateWithoutPembimbing_instansiInput, nilai_instansiUncheckedUpdateWithoutPembimbing_instansiInput>
  }

  export type nilai_instansiUpdateManyWithWhereWithoutPembimbing_instansiInput = {
    where: nilai_instansiScalarWhereInput
    data: XOR<nilai_instansiUpdateManyMutationInput, nilai_instansiUncheckedUpdateManyWithoutPembimbing_instansiInput>
  }

  export type nilai_instansiScalarWhereInput = {
    AND?: nilai_instansiScalarWhereInput | nilai_instansiScalarWhereInput[]
    OR?: nilai_instansiScalarWhereInput[]
    NOT?: nilai_instansiScalarWhereInput | nilai_instansiScalarWhereInput[]
    id?: StringFilter<"nilai_instansi"> | string
    tanggal?: DateTimeFilter<"nilai_instansi"> | Date | string
    nilai_angka?: FloatFilter<"nilai_instansi"> | number
    nilai_huruf?: StringFilter<"nilai_instansi"> | string
    nim?: StringFilter<"nilai_instansi"> | string
    id_pembimbing_instansi?: StringFilter<"nilai_instansi"> | string
  }

  export type instansiUpsertWithoutPembimbing_instansiInput = {
    update: XOR<instansiUpdateWithoutPembimbing_instansiInput, instansiUncheckedUpdateWithoutPembimbing_instansiInput>
    create: XOR<instansiCreateWithoutPembimbing_instansiInput, instansiUncheckedCreateWithoutPembimbing_instansiInput>
    where?: instansiWhereInput
  }

  export type instansiUpdateToOneWithWhereWithoutPembimbing_instansiInput = {
    where?: instansiWhereInput
    data: XOR<instansiUpdateWithoutPembimbing_instansiInput, instansiUncheckedUpdateWithoutPembimbing_instansiInput>
  }

  export type instansiUpdateWithoutPembimbing_instansiInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisInstansiFieldUpdateOperationsInput | $Enums.JenisInstansi
    profil_singkat?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInstansiFieldUpdateOperationsInput | $Enums.StatusInstansi
  }

  export type instansiUncheckedUpdateWithoutPembimbing_instansiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisInstansiFieldUpdateOperationsInput | $Enums.JenisInstansi
    profil_singkat?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInstansiFieldUpdateOperationsInput | $Enums.StatusInstansi
  }

  export type pendaftaran_kpUpsertWithWhereUniqueWithoutPembimbing_instansiInput = {
    where: pendaftaran_kpWhereUniqueInput
    update: XOR<pendaftaran_kpUpdateWithoutPembimbing_instansiInput, pendaftaran_kpUncheckedUpdateWithoutPembimbing_instansiInput>
    create: XOR<pendaftaran_kpCreateWithoutPembimbing_instansiInput, pendaftaran_kpUncheckedCreateWithoutPembimbing_instansiInput>
  }

  export type pendaftaran_kpUpdateWithWhereUniqueWithoutPembimbing_instansiInput = {
    where: pendaftaran_kpWhereUniqueInput
    data: XOR<pendaftaran_kpUpdateWithoutPembimbing_instansiInput, pendaftaran_kpUncheckedUpdateWithoutPembimbing_instansiInput>
  }

  export type pendaftaran_kpUpdateManyWithWhereWithoutPembimbing_instansiInput = {
    where: pendaftaran_kpScalarWhereInput
    data: XOR<pendaftaran_kpUpdateManyMutationInput, pendaftaran_kpUncheckedUpdateManyWithoutPembimbing_instansiInput>
  }

  export type pembimbing_instansiCreateWithoutPendaftaran_kpInput = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
    nilai_instansi?: nilai_instansiCreateNestedManyWithoutPembimbing_instansiInput
    instansi: instansiCreateNestedOneWithoutPembimbing_instansiInput
  }

  export type pembimbing_instansiUncheckedCreateWithoutPendaftaran_kpInput = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
    id_instansi: number
    nilai_instansi?: nilai_instansiUncheckedCreateNestedManyWithoutPembimbing_instansiInput
  }

  export type pembimbing_instansiCreateOrConnectWithoutPendaftaran_kpInput = {
    where: pembimbing_instansiWhereUniqueInput
    create: XOR<pembimbing_instansiCreateWithoutPendaftaran_kpInput, pembimbing_instansiUncheckedCreateWithoutPendaftaran_kpInput>
  }

  export type mahasiswaCreateWithoutPendaftaran_kpInput = {
    nim: string
    nama: string
    email: string
    bimbingan?: bimbinganCreateNestedManyWithoutMahasiswaInput
    daily_report?: daily_reportCreateNestedManyWithoutMahasiswaInput
    dokumen?: dokumenCreateNestedManyWithoutMahasiswaInput
    jadwal?: jadwalCreateNestedManyWithoutMahasiswaInput
    nilai_instansi?: nilai_instansiCreateNestedOneWithoutMahasiswaInput
    nilai?: nilaiCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUncheckedCreateWithoutPendaftaran_kpInput = {
    nim: string
    nama: string
    email: string
    bimbingan?: bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    daily_report?: daily_reportUncheckedCreateNestedManyWithoutMahasiswaInput
    dokumen?: dokumenUncheckedCreateNestedManyWithoutMahasiswaInput
    jadwal?: jadwalUncheckedCreateNestedManyWithoutMahasiswaInput
    nilai_instansi?: nilai_instansiUncheckedCreateNestedOneWithoutMahasiswaInput
    nilai?: nilaiUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaCreateOrConnectWithoutPendaftaran_kpInput = {
    where: mahasiswaWhereUniqueInput
    create: XOR<mahasiswaCreateWithoutPendaftaran_kpInput, mahasiswaUncheckedCreateWithoutPendaftaran_kpInput>
  }

  export type dosenCreateWithoutPendaftaran_kpInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    id_telegram: string
    bimbingan?: bimbinganCreateNestedManyWithoutDosenInput
    jadwal?: jadwalCreateNestedManyWithoutDosenInput
    nilai_penguji?: nilaiCreateNestedManyWithoutDosen_pengujiInput
    nilai_pembimbing?: nilaiCreateNestedManyWithoutDosen_pembimbingInput
  }

  export type dosenUncheckedCreateWithoutPendaftaran_kpInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    id_telegram: string
    bimbingan?: bimbinganUncheckedCreateNestedManyWithoutDosenInput
    jadwal?: jadwalUncheckedCreateNestedManyWithoutDosenInput
    nilai_penguji?: nilaiUncheckedCreateNestedManyWithoutDosen_pengujiInput
    nilai_pembimbing?: nilaiUncheckedCreateNestedManyWithoutDosen_pembimbingInput
  }

  export type dosenCreateOrConnectWithoutPendaftaran_kpInput = {
    where: dosenWhereUniqueInput
    create: XOR<dosenCreateWithoutPendaftaran_kpInput, dosenUncheckedCreateWithoutPendaftaran_kpInput>
  }

  export type pembimbing_instansiUpsertWithoutPendaftaran_kpInput = {
    update: XOR<pembimbing_instansiUpdateWithoutPendaftaran_kpInput, pembimbing_instansiUncheckedUpdateWithoutPendaftaran_kpInput>
    create: XOR<pembimbing_instansiCreateWithoutPendaftaran_kpInput, pembimbing_instansiUncheckedCreateWithoutPendaftaran_kpInput>
    where?: pembimbing_instansiWhereInput
  }

  export type pembimbing_instansiUpdateToOneWithWhereWithoutPendaftaran_kpInput = {
    where?: pembimbing_instansiWhereInput
    data: XOR<pembimbing_instansiUpdateWithoutPendaftaran_kpInput, pembimbing_instansiUncheckedUpdateWithoutPendaftaran_kpInput>
  }

  export type pembimbing_instansiUpdateWithoutPendaftaran_kpInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    nilai_instansi?: nilai_instansiUpdateManyWithoutPembimbing_instansiNestedInput
    instansi?: instansiUpdateOneRequiredWithoutPembimbing_instansiNestedInput
  }

  export type pembimbing_instansiUncheckedUpdateWithoutPendaftaran_kpInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_instansi?: IntFieldUpdateOperationsInput | number
    nilai_instansi?: nilai_instansiUncheckedUpdateManyWithoutPembimbing_instansiNestedInput
  }

  export type mahasiswaUpsertWithoutPendaftaran_kpInput = {
    update: XOR<mahasiswaUpdateWithoutPendaftaran_kpInput, mahasiswaUncheckedUpdateWithoutPendaftaran_kpInput>
    create: XOR<mahasiswaCreateWithoutPendaftaran_kpInput, mahasiswaUncheckedCreateWithoutPendaftaran_kpInput>
    where?: mahasiswaWhereInput
  }

  export type mahasiswaUpdateToOneWithWhereWithoutPendaftaran_kpInput = {
    where?: mahasiswaWhereInput
    data: XOR<mahasiswaUpdateWithoutPendaftaran_kpInput, mahasiswaUncheckedUpdateWithoutPendaftaran_kpInput>
  }

  export type mahasiswaUpdateWithoutPendaftaran_kpInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUpdateManyWithoutMahasiswaNestedInput
    daily_report?: daily_reportUpdateManyWithoutMahasiswaNestedInput
    dokumen?: dokumenUpdateManyWithoutMahasiswaNestedInput
    jadwal?: jadwalUpdateManyWithoutMahasiswaNestedInput
    nilai_instansi?: nilai_instansiUpdateOneWithoutMahasiswaNestedInput
    nilai?: nilaiUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaUncheckedUpdateWithoutPendaftaran_kpInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    daily_report?: daily_reportUncheckedUpdateManyWithoutMahasiswaNestedInput
    dokumen?: dokumenUncheckedUpdateManyWithoutMahasiswaNestedInput
    jadwal?: jadwalUncheckedUpdateManyWithoutMahasiswaNestedInput
    nilai_instansi?: nilai_instansiUncheckedUpdateOneWithoutMahasiswaNestedInput
    nilai?: nilaiUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type dosenUpsertWithoutPendaftaran_kpInput = {
    update: XOR<dosenUpdateWithoutPendaftaran_kpInput, dosenUncheckedUpdateWithoutPendaftaran_kpInput>
    create: XOR<dosenCreateWithoutPendaftaran_kpInput, dosenUncheckedCreateWithoutPendaftaran_kpInput>
    where?: dosenWhereInput
  }

  export type dosenUpdateToOneWithWhereWithoutPendaftaran_kpInput = {
    where?: dosenWhereInput
    data: XOR<dosenUpdateWithoutPendaftaran_kpInput, dosenUncheckedUpdateWithoutPendaftaran_kpInput>
  }

  export type dosenUpdateWithoutPendaftaran_kpInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_telegram?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUpdateManyWithoutDosenNestedInput
    jadwal?: jadwalUpdateManyWithoutDosenNestedInput
    nilai_penguji?: nilaiUpdateManyWithoutDosen_pengujiNestedInput
    nilai_pembimbing?: nilaiUpdateManyWithoutDosen_pembimbingNestedInput
  }

  export type dosenUncheckedUpdateWithoutPendaftaran_kpInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_telegram?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUncheckedUpdateManyWithoutDosenNestedInput
    jadwal?: jadwalUncheckedUpdateManyWithoutDosenNestedInput
    nilai_penguji?: nilaiUncheckedUpdateManyWithoutDosen_pengujiNestedInput
    nilai_pembimbing?: nilaiUncheckedUpdateManyWithoutDosen_pembimbingNestedInput
  }

  export type jadwalCreateWithoutRuanganInput = {
    id: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    status?: $Enums.StatusSeminar
    mahasiswa: mahasiswaCreateNestedOneWithoutJadwalInput
    dosen: dosenCreateNestedOneWithoutJadwalInput
    nilai?: nilaiCreateNestedOneWithoutJadwalInput
  }

  export type jadwalUncheckedCreateWithoutRuanganInput = {
    id: string
    nim: string
    nip: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    status?: $Enums.StatusSeminar
    nilai?: nilaiUncheckedCreateNestedOneWithoutJadwalInput
  }

  export type jadwalCreateOrConnectWithoutRuanganInput = {
    where: jadwalWhereUniqueInput
    create: XOR<jadwalCreateWithoutRuanganInput, jadwalUncheckedCreateWithoutRuanganInput>
  }

  export type jadwalCreateManyRuanganInputEnvelope = {
    data: jadwalCreateManyRuanganInput | jadwalCreateManyRuanganInput[]
    skipDuplicates?: boolean
  }

  export type jadwalUpsertWithWhereUniqueWithoutRuanganInput = {
    where: jadwalWhereUniqueInput
    update: XOR<jadwalUpdateWithoutRuanganInput, jadwalUncheckedUpdateWithoutRuanganInput>
    create: XOR<jadwalCreateWithoutRuanganInput, jadwalUncheckedCreateWithoutRuanganInput>
  }

  export type jadwalUpdateWithWhereUniqueWithoutRuanganInput = {
    where: jadwalWhereUniqueInput
    data: XOR<jadwalUpdateWithoutRuanganInput, jadwalUncheckedUpdateWithoutRuanganInput>
  }

  export type jadwalUpdateManyWithWhereWithoutRuanganInput = {
    where: jadwalScalarWhereInput
    data: XOR<jadwalUpdateManyMutationInput, jadwalUncheckedUpdateManyWithoutRuanganInput>
  }

  export type detail_daily_reportCreateManyDaily_reportInput = {
    id?: number
    judul_kegiatan: string
    deskripsi_kegiatan: string
    waktu: Date | string
  }

  export type detail_daily_reportUpdateWithoutDaily_reportInput = {
    judul_kegiatan?: StringFieldUpdateOperationsInput | string
    deskripsi_kegiatan?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detail_daily_reportUncheckedUpdateWithoutDaily_reportInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul_kegiatan?: StringFieldUpdateOperationsInput | string
    deskripsi_kegiatan?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detail_daily_reportUncheckedUpdateManyWithoutDaily_reportInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul_kegiatan?: StringFieldUpdateOperationsInput | string
    deskripsi_kegiatan?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bimbinganCreateManyDosenInput = {
    id: string
    tanggal: Date | string
    catatan: string
    status: $Enums.StatusValidasi
    nim: string
  }

  export type jadwalCreateManyDosenInput = {
    id: string
    nim: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    ruangan_nama: string
    status?: $Enums.StatusSeminar
  }

  export type nilaiCreateManyDosen_pengujiInput = {
    id: string
    nim: string
    jadwal_seminar_id: string
    nip_pembimbing: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
  }

  export type nilaiCreateManyDosen_pembimbingInput = {
    id: string
    nim: string
    jadwal_seminar_id: string
    nip_penguji: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
  }

  export type pendaftaran_kpCreateManyDosenInput = {
    nim: string
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    id_pembimbing_instansi: string
  }

  export type bimbinganUpdateWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutBimbinganNestedInput
  }

  export type bimbinganUncheckedUpdateWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    nim?: StringFieldUpdateOperationsInput | string
  }

  export type bimbinganUncheckedUpdateManyWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    nim?: StringFieldUpdateOperationsInput | string
  }

  export type jadwalUpdateWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutJadwalNestedInput
    ruangan?: ruanganUpdateOneRequiredWithoutJadwalNestedInput
    nilai?: nilaiUpdateOneWithoutJadwalNestedInput
  }

  export type jadwalUncheckedUpdateWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruangan_nama?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
    nilai?: nilaiUncheckedUpdateOneWithoutJadwalNestedInput
  }

  export type jadwalUncheckedUpdateManyWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruangan_nama?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
  }

  export type nilaiUpdateWithoutDosen_pengujiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
    jadwal?: jadwalUpdateOneRequiredWithoutNilaiNestedInput
    dosen_pembimbing?: dosenUpdateOneWithoutNilai_pembimbingNestedInput
    mahasiswa?: mahasiswaUpdateManyWithoutNilaiNestedInput
  }

  export type nilaiUncheckedUpdateWithoutDosen_pengujiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    nip_pembimbing?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
    mahasiswa?: mahasiswaUncheckedUpdateManyWithoutNilaiNestedInput
  }

  export type nilaiUncheckedUpdateManyWithoutDosen_pengujiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    nip_pembimbing?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type nilaiUpdateWithoutDosen_pembimbingInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
    jadwal?: jadwalUpdateOneRequiredWithoutNilaiNestedInput
    dosen_penguji?: dosenUpdateOneWithoutNilai_pengujiNestedInput
    mahasiswa?: mahasiswaUpdateManyWithoutNilaiNestedInput
  }

  export type nilaiUncheckedUpdateWithoutDosen_pembimbingInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    nip_penguji?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
    mahasiswa?: mahasiswaUncheckedUpdateManyWithoutNilaiNestedInput
  }

  export type nilaiUncheckedUpdateManyWithoutDosen_pembimbingInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    nip_penguji?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pendaftaran_kpUpdateWithoutDosenInput = {
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbing_instansi?: pembimbing_instansiUpdateOneRequiredWithoutPendaftaran_kpNestedInput
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutPendaftaran_kpNestedInput
  }

  export type pendaftaran_kpUncheckedUpdateWithoutDosenInput = {
    nim?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    id_pembimbing_instansi?: StringFieldUpdateOperationsInput | string
  }

  export type pendaftaran_kpUncheckedUpdateManyWithoutDosenInput = {
    nim?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    id_pembimbing_instansi?: StringFieldUpdateOperationsInput | string
  }

  export type pembimbing_instansiCreateManyInstansiInput = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
  }

  export type pembimbing_instansiUpdateWithoutInstansiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    nilai_instansi?: nilai_instansiUpdateManyWithoutPembimbing_instansiNestedInput
    pendaftaran_kp?: pendaftaran_kpUpdateManyWithoutPembimbing_instansiNestedInput
  }

  export type pembimbing_instansiUncheckedUpdateWithoutInstansiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    nilai_instansi?: nilai_instansiUncheckedUpdateManyWithoutPembimbing_instansiNestedInput
    pendaftaran_kp?: pendaftaran_kpUncheckedUpdateManyWithoutPembimbing_instansiNestedInput
  }

  export type pembimbing_instansiUncheckedUpdateManyWithoutInstansiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
  }

  export type bimbinganCreateManyMahasiswaInput = {
    id: string
    tanggal: Date | string
    catatan: string
    status: $Enums.StatusValidasi
    nip: string
  }

  export type daily_reportCreateManyMahasiswaInput = {
    id: string
    tanggal: Date | string
    status: $Enums.StatusValidasi
    catatan?: string | null
    latitude: number
    longitude: number
  }

  export type dokumenCreateManyMahasiswaInput = {
    id: string
    jenis_dokumen: $Enums.JenisDokumen
    file_path: string
    tanggal_upload?: Date | string
    status?: $Enums.DokumenStatus
    komentar?: string | null
  }

  export type jadwalCreateManyMahasiswaInput = {
    id: string
    nip: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    ruangan_nama: string
    status?: $Enums.StatusSeminar
  }

  export type pendaftaran_kpCreateManyMahasiswaInput = {
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    id_pembimbing_instansi: string
    nip?: string | null
  }

  export type bimbinganUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    dosen?: dosenUpdateOneRequiredWithoutBimbinganNestedInput
  }

  export type bimbinganUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    nip?: StringFieldUpdateOperationsInput | string
  }

  export type bimbinganUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    nip?: StringFieldUpdateOperationsInput | string
  }

  export type daily_reportUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    detail_daily_report?: detail_daily_reportUpdateManyWithoutDaily_reportNestedInput
  }

  export type daily_reportUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    detail_daily_report?: detail_daily_reportUncheckedUpdateManyWithoutDaily_reportNestedInput
  }

  export type daily_reportUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type dokumenUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis_dokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    file_path?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDokumenStatusFieldUpdateOperationsInput | $Enums.DokumenStatus
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dokumenUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis_dokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    file_path?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDokumenStatusFieldUpdateOperationsInput | $Enums.DokumenStatus
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dokumenUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis_dokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    file_path?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDokumenStatusFieldUpdateOperationsInput | $Enums.DokumenStatus
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type jadwalUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
    dosen?: dosenUpdateOneRequiredWithoutJadwalNestedInput
    ruangan?: ruanganUpdateOneRequiredWithoutJadwalNestedInput
    nilai?: nilaiUpdateOneWithoutJadwalNestedInput
  }

  export type jadwalUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruangan_nama?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
    nilai?: nilaiUncheckedUpdateOneWithoutJadwalNestedInput
  }

  export type jadwalUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruangan_nama?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
  }

  export type pendaftaran_kpUpdateWithoutMahasiswaInput = {
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbing_instansi?: pembimbing_instansiUpdateOneRequiredWithoutPendaftaran_kpNestedInput
    dosen?: dosenUpdateOneWithoutPendaftaran_kpNestedInput
  }

  export type pendaftaran_kpUncheckedUpdateWithoutMahasiswaInput = {
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    id_pembimbing_instansi?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pendaftaran_kpUncheckedUpdateManyWithoutMahasiswaInput = {
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    id_pembimbing_instansi?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type nilaiUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
    jadwal?: jadwalUpdateOneRequiredWithoutNilaiNestedInput
    dosen_penguji?: dosenUpdateOneWithoutNilai_pengujiNestedInput
    dosen_pembimbing?: dosenUpdateOneWithoutNilai_pembimbingNestedInput
  }

  export type nilaiUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    nip_penguji?: StringFieldUpdateOperationsInput | string
    nip_pembimbing?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type nilaiUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    nip_penguji?: StringFieldUpdateOperationsInput | string
    nip_pembimbing?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mahasiswaUpdateWithoutNilaiInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUpdateManyWithoutMahasiswaNestedInput
    daily_report?: daily_reportUpdateManyWithoutMahasiswaNestedInput
    dokumen?: dokumenUpdateManyWithoutMahasiswaNestedInput
    jadwal?: jadwalUpdateManyWithoutMahasiswaNestedInput
    nilai_instansi?: nilai_instansiUpdateOneWithoutMahasiswaNestedInput
    pendaftaran_kp?: pendaftaran_kpUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaUncheckedUpdateWithoutNilaiInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bimbingan?: bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    daily_report?: daily_reportUncheckedUpdateManyWithoutMahasiswaNestedInput
    dokumen?: dokumenUncheckedUpdateManyWithoutMahasiswaNestedInput
    jadwal?: jadwalUncheckedUpdateManyWithoutMahasiswaNestedInput
    nilai_instansi?: nilai_instansiUncheckedUpdateOneWithoutMahasiswaNestedInput
    pendaftaran_kp?: pendaftaran_kpUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaUncheckedUpdateManyWithoutNilaiInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type nilai_instansiCreateManyPembimbing_instansiInput = {
    id: string
    tanggal: Date | string
    nilai_angka: number
    nilai_huruf: string
    nim: string
  }

  export type pendaftaran_kpCreateManyPembimbing_instansiInput = {
    nim: string
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    nip?: string | null
  }

  export type nilai_instansiUpdateWithoutPembimbing_instansiInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilai_angka?: FloatFieldUpdateOperationsInput | number
    nilai_huruf?: StringFieldUpdateOperationsInput | string
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutNilai_instansiNestedInput
  }

  export type nilai_instansiUncheckedUpdateWithoutPembimbing_instansiInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilai_angka?: FloatFieldUpdateOperationsInput | number
    nilai_huruf?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
  }

  export type nilai_instansiUncheckedUpdateManyWithoutPembimbing_instansiInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilai_angka?: FloatFieldUpdateOperationsInput | number
    nilai_huruf?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
  }

  export type pendaftaran_kpUpdateWithoutPembimbing_instansiInput = {
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutPendaftaran_kpNestedInput
    dosen?: dosenUpdateOneWithoutPendaftaran_kpNestedInput
  }

  export type pendaftaran_kpUncheckedUpdateWithoutPembimbing_instansiInput = {
    nim?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pendaftaran_kpUncheckedUpdateManyWithoutPembimbing_instansiInput = {
    nim?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type jadwalCreateManyRuanganInput = {
    id: string
    nim: string
    nip: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    status?: $Enums.StatusSeminar
  }

  export type jadwalUpdateWithoutRuanganInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutJadwalNestedInput
    dosen?: dosenUpdateOneRequiredWithoutJadwalNestedInput
    nilai?: nilaiUpdateOneWithoutJadwalNestedInput
  }

  export type jadwalUncheckedUpdateWithoutRuanganInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
    nilai?: nilaiUncheckedUpdateOneWithoutJadwalNestedInput
  }

  export type jadwalUncheckedUpdateManyWithoutRuanganInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}