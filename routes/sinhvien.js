const express = require('express');
const router = express.Router();
const SinhVien = require('../models/sinhVienModel');

// API 1: Lấy toàn bộ danh sách sinh viên
router.get('/', async (req, res) => {
  try {
    const sinhViens = await SinhVien.find();
    res.json(sinhViens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API 2: Lấy toàn bộ danh sách sinh viên thuộc khoa CNTT
router.get('/cntt', async (req, res) => {
  try {
    const sinhViens = await SinhVien.find({ boMon: 'CNTT' });
    res.json(sinhViens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API 3: Lấy danh sách sinh viên có điểm trung bình từ 6.5 đến 8.5
router.get('/dtb/6.5-8.5', async (req, res) => {
  try {
    const sinhViens = await SinhVien.find({
      diemTrungBinh: { $gte: 6.5, $lte: 8.5 },
    });
    res.json(sinhViens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API 4: Tìm kiếm thông tin của sinh viên theo MSSV
router.get('/:mssv', async (req, res) => {
  try {
    const sinhVien = await SinhVien.findOne({ mssv: req.params.mssv });
    if (sinhVien) {
      res.json(sinhVien);
    } else {
      res.status(404).json({ message: 'Sinh viên không tồn tại' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API 5: Thêm mới một sinh viên
router.post('/', async (req, res) => {
  const { mssv, hoTen, diemTrungBinh, boMon, tuoi } = req.body;
  const sinhVien = new SinhVien({
    mssv,
    hoTen,
    diemTrungBinh,
    boMon,
    tuoi,
  });

  try {
    const newSinhVien = await sinhVien.save();
    res.status(201).json(newSinhVien);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// API 6: Thay đổi thông tin sinh viên theo MSSV
router.put('/:mssv', async (req, res) => {
  try {
    const sinhVien = await SinhVien.findOneAndUpdate(
      { mssv: req.params.mssv },
      req.body,
      { new: true }
    );
    if (sinhVien) {
      res.json(sinhVien);
    } else {
      res.status(404).json({ message: 'Sinh viên không tồn tại' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API 7: Xóa một sinh viên ra khỏi danh sách
router.delete('/:mssv', async (req, res) => {
  try {
    const sinhVien = await SinhVien.findOneAndDelete({ mssv: req.params.mssv });
    if (sinhVien) {
      res.json({ message: 'Sinh viên đã được xóa' });
    } else {
      res.status(404).json({ message: 'Sinh viên không tồn tại' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API 8: Lấy danh sách sinh viên thuộc BM CNTT và có DTB từ 9.0
router.get('/cntt/dtb/9.0', async (req, res) => {
  try {
    const sinhViens = await SinhVien.find({
      boMon: 'CNTT',
      diemTrungBinh: { $gte: 9.0 },
    });
    res.json(sinhViens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API 9: Lấy danh sách sinh viên có độ tuổi từ 18 đến 20 thuộc CNTT và có điểm trung bình từ 6.5
router.get('/cntt/tuoi/18-20/dtb/6.5', async (req, res) => {
  try {
    const sinhViens = await SinhVien.find({
      boMon: 'CNTT',
      tuoi: { $gte: 18, $lte: 20 },
      diemTrungBinh: { $gte: 6.5 },
    });
    res.json(sinhViens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API 10: Sắp xếp danh sách sinh viên tăng dần theo điểm trung bình
router.get('/sapxep/dtb', async (req, res) => {
  try {
    const sinhViens = await SinhVien.find().sort({ diemTrungBinh: 1 });
    res.json(sinhViens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API 11: Tìm sinh viên có điểm trung bình cao nhất thuộc BM CNTT
router.get('/cntt/dtb/cao-nhat', async (req, res) => {
  try {
    const sinhVien = await SinhVien.find({ boMon: 'CNTT' })
      .sort({ diemTrungBinh: -1 })
      .limit(1);
    res.json(sinhVien);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
