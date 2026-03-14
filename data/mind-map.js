// ================================================================
//  PIXELVERSE — Fallback data for Sơ đồ Tư Duy game
//  This is only used when admin_content.json cannot be fetched.
// ================================================================
window.MIND_MAP_DATA = [
  {
    id: 1,
    title: "Mạng xã hội",
    rowCount: 3,
    keywords: [
      { id: "k1", text: "Mạng xã hội", correctRow: 0 },
      { id: "k2", text: "Kết nối",      correctRow: 1 },
      { id: "k3", text: "Giải trí",     correctRow: 1 },
      { id: "k4", text: "Facebook",     correctRow: 2 },
      { id: "k5", text: "TikTok",       correctRow: 2 },
      { id: "k6", text: "Nhắn tin",     correctRow: 2 },
      { id: "k7", text: "Video ngắn",   correctRow: 2 }
    ],
    connections: [
      { from: "k1", to: "k2" },
      { from: "k1", to: "k3" },
      { from: "k2", to: "k4" },
      { from: "k2", to: "k6" },
      { from: "k3", to: "k5" },
      { from: "k3", to: "k7" }
    ]
  }
];
