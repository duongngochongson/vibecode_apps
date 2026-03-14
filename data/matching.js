// Matching game fallback data
// Each set has leftItems, rightItems, and correctConnections (many-to-many)
window.MATCHING_DATA = [
  {
    id: 1,
    title: "Công nghệ & Ứng dụng",
    leftItems: [
      { id: "L1", text: "Facebook" },
      { id: "L2", text: "TikTok" },
      { id: "L3", text: "Google" },
      { id: "L4", text: "YouTube" }
    ],
    rightItems: [
      { id: "R1", text: "Mạng xã hội" },
      { id: "R2", text: "Video ngắn" },
      { id: "R3", text: "Tìm kiếm" },
      { id: "R4", text: "Chia sẻ video" }
    ],
    connections: [
      { from: "L1", to: "R1" },
      { from: "L2", to: "R1" },
      { from: "L2", to: "R2" },
      { from: "L3", to: "R3" },
      { from: "L4", to: "R4" }
    ]
  },
  {
    id: 2,
    title: "Khoa học & Tự nhiên",
    leftItems: [
      { id: "L1", text: "Mặt Trời" },
      { id: "L2", text: "Trái Đất" },
      { id: "L3", text: "Mặt Trăng" },
      { id: "L4", text: "Sao Hỏa" }
    ],
    rightItems: [
      { id: "R1", text: "Ngôi sao" },
      { id: "R2", text: "Hành tinh" },
      { id: "R3", text: "Vệ tinh tự nhiên" },
      { id: "R4", text: "Hành tinh đỏ" }
    ],
    connections: [
      { from: "L1", to: "R1" },
      { from: "L2", to: "R2" },
      { from: "L3", to: "R3" },
      { from: "L4", to: "R2" },
      { from: "L4", to: "R4" }
    ]
  }
];
