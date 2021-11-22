import mongoose from "mongoose";

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  email: { type: String },
  nama: { type: String },
  jabatan: { type: Object },
  perusahaan: { type: Object },
  userPerusahaan: { type: Object },
  status: { type: Object },
  simper: {
    noSimpol: { type: String },
    jenis: { type: String, default: "A" },
    tipe: { type: String, default: "NON-PIT" },
    persetujuan: { type: Boolean, default: false },
    ujian: { type: Boolean, default: false },
    tolak: { type: Boolean, default: false },
    lastStatus: {
      nama: { type: String },
      tahapan: { type: String },
      timestamp: { type: Date },
      msg: { type: String },
      admin: { type: String },
      next: { type: String },
    },
    status: [
      {
        nama: { type: String },
        tahapan: { type: String },
        timestamp: { type: Date },
        msg: { type: String },
        admin: { type: String },
        next: { type: String },
      },
    ],
    suspended: { type: Boolean, default: false },
    blacklist: { type: Boolean, default: false },
    expired: { type: Boolean, default: false },
    validDate: { type: Date },
    reminderCount: { type: Number, default: 0 },
    unit: { type: Object },
    pelanggaran: [
      {
        tilangDari: { type: Date },
        tilangSampai: { type: Date },
        noSimper: { type: String },
        alasan: { type: String },
        penilang: { type: String },
        lampiran: {
          link: { type: String },
          pelapor: { type: String },
        },
      },
    ],
    bolong: { type: Number, default: 0 },
  },
  lampiran: {
    simper: { type: String },
    "foto-profile": { type: String },
    "foto-badge": { type: String },
    "foto-simpol": { type: String },
    "permohonan-simper": { type: String },
    "fit-to-work": { type: String },
    "kompetensi-unit": { type: String },
    "ujian-tulis": { type: String },
    "ujian-praktek": { type: String },
  },
  permission: {
    type: { type: String, default: "user" },
    id: { type: String },
  },
});

export default mongoose.models.Profile ||
  mongoose.model("Profile", profileSchema, "profiles");
