const express = require('express');
const router = express.Router();
const sinhVienModel = require('../models/sinhVienModel');
const sendMail = require('../util/mailConfig');
var upload = require('../util/uploadConfig');
const userModel = require('../models/userModel');
// // Get all sinh vien

// // 2.1. Lấy toàn bộ danh sách sinh viên
// router.get('/sinhvien', async (req, res) => {
//   try {
//       const sinhViens = await sinhVienModel.find();
//       res.json(sinhViens);
//   } catch (err) {
//       res.status(500).json({ message: err.message });
//   }
// });

// // 2.2. Lấy toàn bộ danh sách sinh viên thuộc khoa CNTT
// router.get('/sinhvien/khoa/CNTT', async (req, res) => {
//   try {
//       const sinhViens = await sinhVienModel.find({ BoMon: "CNTT" });
//       res.json(sinhViens);
//   } catch (err) {
//       res.status(500).json({ message: err.message });
//   }
// });

// // 2.3. Lấy danh sách sinh viên có điểm trung bình từ 6.5 đến 8.5
// router.get('/sinhvien/dtb/range', async (req, res) => {
//   try {
//       const sinhViens = await sinhVienModel.find({ DiemTB: { $gte: 6.5, $lte: 8.5 } });
//       res.json(sinhViens);
//   } catch (err) {
//       res.status(500).json({ message: err.message });
//   }
// });




// // 2.8. Lấy danh sách các sinh viên thuộc BM CNTT và có DTB từ 9.0
// router.get('/sinhvien/cntt/dtb/9', async (req, res) => {
//   try {
//       const sinhViens = await sinhVienModel.find({ BoMon: "CNTT", DiemTB: { $gte: 9.0 } });
//       res.json(sinhViens);
//   } catch (err) {
//       res.status(500).json({ message: err.message });
//   }
// });

// // 2.9. Lấy danh sách các sinh viên có độ tuổi từ 18 đến 20 thuộc CNTT có điểm trung bình từ 6.5
// router.get('/filter', async (req, res, next) => {
//     try {
//       const minTuoi = parseInt(req.query.minTuoi);
//       const maxTuoi = parseInt(req.query.maxTuoi);
//       const boMon = req.query.boMon;
//       const minDiem = parseFloat(req.query.minDiem);
//       const query = {};
//       if (!isNaN(minTuoi) && !isNaN(maxTuoi) && minTuoi <= maxTuoi && minTuoi >= 0 && maxTuoi >=0) {
//         query.Tuoi = { $gte: minTuoi, $lte: maxTuoi };
//       } else if (!isNaN(minTuoi) || !isNaN(maxTuoi)){
//         return res.status(400).json({error: 'Tuổi không hợp lệ'});
//       }
//       if (boMon) {
//         query.BoMon = boMon;
//       }
//       if (!isNaN(minDiem) && minDiem >= 0 && minDiem <=10) {
//         query.DiemTrungBinh = { $gte: minDiem };
//       } else if (!isNaN(minDiem)){
//         return res.status(400).json({ error: "Điểm trung bình không hợp lệ (0-10)" });
//       }
//       if (Object.keys(query).length === 0) {
//         return res.status(400).json({error: 'Vui lòng cung cấp bộ môn hoặc điểm trung bình'});
//       }
//       const students = await sinhVienModel.find(query);
//       res.json(students);
//     } catch (error) {
//       console.error("Error filtering students:", error);
//       next(error);
//     }
//   });

// // 2.10. Sắp xếp danh sách sinh viên tăng dần theo điểm trung bình
// router.get('/sinhvien/sort/dtb', async (req, res) => {
//   try {
//       const sinhViens = await sinhVienModel.find().sort({ DiemTB: 1 });
//       res.json(sinhViens);
//   } catch (err) {
//       res.status(500).json({ message: err.message });
//   }
// });

// // 2.11. Tìm sinh viên có điểm trung bình cao nhất thuộc BM CNTT
// router.get('/sinhvien/cntt/top', async (req, res) => {
//   try {
//     const topScore = await sinhVienModel.find({ BoMon: 'CNTT' })
//       .sort({ DiemTB: -1 })
//       .limit(1)
//       .then(sv => (sv.length > 0 ? sv[0].DiemTB : null));
    
//     if (topScore === null) {
//       return res.status(404).json({ message: 'Không có sinh viên trong bộ môn CNTT.' });
//     }

//     const sinhVien = await sinhVienModel.find({ BoMon: 'CNTT', DiemTB: topScore });
//     res.json(sinhVien);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // 2.5. Thêm mới một sinh viên
// router.post('/sinhvien/add', async (req, res) => {
//   const { mssv, hoTen, DiemTB, boMon, tuoi } = req.body;
//   const sinhVien = new sinhVienModel({
//     mssv,
//     hoTen,
//     DiemTB,
//     boMon,
//     tuoi,
//   });

//   try {
//     const newSinhVien = await sinhVien.save();
//     res.status(201).json(newSinhVien);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });
// // 2.6. Thay đổi thông tin sinh viên theo MSSV
// router.put('/sinhvien/:mssv', async (req, res) => {
//   try {
//       const sinhVien = await sinhVienModel.findOneAndUpdate(
//         { MSSV: req.params.mssv},
//         req.body,
//         { new: true }
//       );
//       if (sinhVien) {
//         res.json(sinhVien);
//       } else {
//         res.status(404).json({ message: 'Sinh viên không tồn tại PUT' });
//       }
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });

// // 2.7. Xóa một sinh viên ra khỏi danh sách
// router.delete('/sinhvien/xoa-sinh-vien/:mssv', async (req, res) => {
//   try {
//       const sinhVien = await sinhVienModel.findOneAndDelete({ MSSV: req.params.mssv });
//       if (!sinhVien) return res.status(404).json({ message: 'Không tìm thấy sinh viên' });
//       res.json({ message: 'Đã xóa sinh viên thành công' });
//   } catch (err) {
//       res.status(500).json({ message: err.message });
//   }
// });

// // Get a single sinh vien
// router.get('/sinhvien/:mssv', async (req, res) => {
//   try {
//       // Tìm sinh viên theo MSSV
//       const sinhVien = await sinhVienModel.findOne({ MSSV: req.params.mssv });
//       if (!sinhVien) {
//           return res.status(404).json({ message: 'Sinh viên không tồn tại' });
//       }
//       // Trả về kết quả
//       res.json(sinhVien);
//   } catch (err) {
//       // Xử lý lỗi
//       console.error(err);
//       res.status(400).json({ message: 'Lỗi server' });
//   }
// });
const JWT  = require('jsonwebtoken');
const config = require('../util/TokenConfig');

router.get('/', async (req, res) => {
    try {
      const token = req.header("Authorization").split(' ')[1];

      if(token){
          JWT.verify(token, config.SECRETKEY, async function (err, id){
        if(err){
          res.status(403).json({"status": 403, "err": err});
        }else{
        //xử lý chức năng tương ứng với API
          const user = await userModel.find();
          res.json(user);
        }
      });
      }else{
        res.status(401).json({"status": 401});
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.post("/send-mail", async function(req, res, next){
  try{
    const {to, subject, content} = req.body;

    const mailOptions = {
      from: "tuannguyen <tuannhps38109@gmail.com>",
      to: to,
      subject: subject, 
      html: content
    };
    await sendMail.transporter.sendMail(mailOptions);
    res.json({ status: 1, message: "Gửi mail thành công"});
  }catch(err){
    res.json({ status: 0, message: "Gửi mail thất bại"} + err);
  }
});
router.post('/upload', [upload.single('image')],
    async (req, res, next) => {
        try {
            const { file } = req;
            if (!file) {
               return res.json({ status: 0, link : "" }); 
            } else {
                const url = `http://localhost:3000/images/${file.filename}`;
                return res.json({ status: 1, url : url });
            }
        } catch (error) {
            console.log('Upload image error: ', error);
            return res.json({status: 0, link : "" });
        }
    });
    
router.post('/uploads', [upload.array('image', 9)],
    async (req, res, next) => {
        try {
            const { files } = req;
            if (!files) {
               return res.json({ status: 0, link : [] }); 
            } else {
              const url = [];
              for (const singleFile of files) {
                url.push(`http://localhost:3000/images/${singleFile.filename}`);
              }
                return res.json({ status: 1, url : url });
            }
        } catch (error) {
            console.log('Upload image error: ', error);
            return res.json({status: 0, link : [] });
        }
    });

router.post('/login',async function(req, res){
try {
  const {username,password} = req.body;
  const checkUser = await userModel.findOne({ username: username,password: password });
  if(checkUser == null){
    res.status(400).json({status:false,message:"Tên đăng nhập hoặc mật khẩu không đúng"});
  }else{
    var token = JWT.sign({username: username},config.SECRETKEY,{expiresIn:'30s'});
    var refreshToken = JWT.sign({username: username},config.SECRETKEY,{expiresIn:'1d'});
    res.json({status:true,message:"Đăng nhập thành công",token:token, refreshToken:refreshToken});
  }
}catch (e) {
  res.status(400).json({status:false,message:"Error"});
}
} );


module.exports = router;
