export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const timelineData: TimelineItem[] = [
  {
    year: "1890",
    title: "Quê hương, tuổi thơ và gia đình",
    description: "Chủ tịch Hồ Chí Minh sinh ngày 19/5/1890 tại làng Kim Liên, Nam Đàn, Nghệ An..."
  },
  {
    year: "1911",
    title: "Ra đi tìm đường cứu nước",
    description: "Ngày 5/6/1911, Người ra đi từ Bến Nhà Rồng trên tàu Đô đốc Latouche-Tréville..."
  },
  {
    year: "1919",
    title: "Gửi Bản yêu sách đến Hội nghị Versailles",
    description: "Nguyễn Ái Quốc thay mặt Hội những người Việt Nam yêu nước tại Pháp gửi bản yêu sách 8 điểm..."
  },
  // ... Thêm các mốc khác
];
