// ================================================================
//  PIXELVERSE — Dữ liệu tổng hợp tất cả trò chơi
//
//  Để cập nhật nội dung:
//  1. Đăng nhập Admin trên web
//  2. Chọn trò chơi cần chỉnh
//  3. Chỉnh nội dung → SAVE
//  4. Nhấn DOWNLOAD FILE hoặc VIEW JSON → copy
//  5. Thay thế NỘI DUNG file này bằng file đã tải / nội dung đã copy
//  6. Lưu file và deploy
// ================================================================

window.GAMES_DATA = {
  "pros-cons": [
    {
      id: 1,
      topic: "Mạng xã hội",
      passage: "Mạng xã hội là các nền tảng trực tuyến như Facebook, TikTok, Instagram cho phép hàng tỷ người kết nối, chia sẻ thông tin và giải trí mỗi ngày.",
      pro: { id: "p1", text: "Dễ dàng kết nối bạn bè, chia sẻ thông tin và giải trí mọi lúc mọi nơi." },
      con: { id: "c1", text: "Dễ gây nghiện, có thể ảnh hưởng tiêu cực đến sức khỏe tâm thần và thời gian học tập." }
    },
    {
      id: 2,
      topic: "Làm việc từ xa (Remote Work)",
      passage: "Làm việc từ xa cho phép nhân viên hoàn thành công việc tại nhà hoặc bất kỳ đâu thay vì đến văn phòng mỗi ngày, trở nên phổ biến sau đại dịch COVID-19.",
      pro: { id: "p2", text: "Linh hoạt về thời gian và địa điểm, tiết kiệm thời gian di chuyển, cân bằng cuộc sống tốt hơn." },
      con: { id: "c2", text: "Khó phân tách ranh giới giữa công việc và cuộc sống, dễ cảm thấy cô lập và thiếu kết nối đội nhóm." }
    },
    {
      id: 3,
      topic: "Trí tuệ nhân tạo (AI)",
      passage: "Trí tuệ nhân tạo là công nghệ cho phép máy tính thực hiện các nhiệm vụ đòi hỏi trí thông minh của con người như phân tích dữ liệu, tạo nội dung và đưa ra quyết định.",
      pro: { id: "p3", text: "Tăng năng suất, tự động hóa công việc lặp lại và hỗ trợ con người sáng tạo hiệu quả hơn." },
      con: { id: "c3", text: "Nguy cơ mất việc làm ở một số lĩnh vực và tạo ra sự phụ thuộc vào công nghệ." }
    }
  ]
};
