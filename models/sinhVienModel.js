const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Định nghĩa schema cho SinhVien
const sinhVienSchema = new Schema({
    MSSV: { type: String, required: true, unique: true },
    HoTen: { type: String, required: true },
    DiemTB: { type: Number, required: true },
    BoMon: { type: String, required: true },
    Tuoi: { type: Number, required: true },
});

// Tạo model SinhVien từ schema
const SinhVien = mongoose.model('SinhVien', sinhVienSchema);

// Thêm dữ liệu vào MongoDB
// SinhVien.insertMany([
//     { MSSV: "SV001", HoTen: "Nguyen Van A", DiemTB: 7.5, BoMon: "CNTT", Tuoi: 19 },
//     { MSSV: "SV002", HoTen: "Tran Thi B", DiemTB: 8.0, BoMon: "KinhTe", Tuoi: 20 },
//     { MSSV: "SV003", HoTen: "Le Van C", DiemTB: 9.0, BoMon: "CNTT", Tuoi: 18 },
//     { MSSV: "SV004", HoTen: "Pham Thi D", DiemTB: 6.0, BoMon: "VatLy", Tuoi: 22 },
//         { MSSV: "SV005", HoTen: "Pham Van E", DiemTB: 5.5, BoMon: "Kinh Te", Tuoi: 22 },
//         { MSSV: "SV006", HoTen: "Bui Thi F", DiemTB: 7.1, BoMon: "CNTT", Tuoi: 20 },
//         { MSSV: "SV007", HoTen: "Hoang Van G", DiemTB: 8.0, BoMon: "CNTT", Tuoi: 19 },
//         { MSSV: "SV008", HoTen: "Ngo Van H", DiemTB: 6.4, BoMon: "Kinh Te", Tuoi: 18 },
//         { MSSV: "SV009", HoTen: "Vu Thi I", DiemTB: 8.3, BoMon: "CNTT", Tuoi: 22 },
//         { MSSV: "SV010", HoTen: "Le Van J", DiemTB: 7.2, BoMon: "Quan Tri", Tuoi: 20 },
//         { MSSV: "SV011", HoTen: "Nguyen Van K", DiemTB: 9.5, BoMon: "CNTT", Tuoi: 23 },
//         { MSSV: "SV012", HoTen: "Tran Thi L", DiemTB: 6.9, BoMon: "CNTT", Tuoi: 21 },
//         { MSSV: "SV013", HoTen: "Pham Van M", DiemTB: 5.0, BoMon: "Quan Tri", Tuoi: 18 },
//         { MSSV: "SV014", HoTen: "Bui Van N", DiemTB: 8.7, BoMon: "CNTT", Tuoi: 20 },
//         { MSSV: "SV015", HoTen: "Hoang Thi O", DiemTB: 7.9, BoMon: "Ke Toan", Tuoi: 19 },
//         { MSSV: "SV016", HoTen: "Ngo Van P", DiemTB: 6.3, BoMon: "Ke Toan", Tuoi: 21 },
//         { MSSV: "SV017", HoTen: "Vu Thi Q", DiemTB: 8.4, BoMon: "CNTT", Tuoi: 19 },
//         { MSSV: "SV018", HoTen: "Le Van R", DiemTB: 7.7, BoMon: "CNTT", Tuoi: 20 },
//         { MSSV: "SV019", HoTen: "Nguyen Van S", DiemTB: 6.0, BoMon: "Kinh Te", Tuoi: 22 },
//         { MSSV: "SV020", HoTen: "Tran Thi T", DiemTB: 9.0, BoMon: "CNTT", Tuoi: 18 }
    
// ])
//     .then(() => console.log("Data inserted"))
//     .catch(err => console.error(err));

// Xuất mô hình SinhVien
module.exports = mongoose.models.SinhVien || SinhVien;
