export interface StorySection {
  id: string;
  title: string;
  yearRange: string;
  content: string;
}

export const storyData: StorySection[] = [
  {
    id: "chapter-1",
    title: "Khởi nguồn lý tưởng và lòng yêu nước",
    yearRange: "1890 – 1911",
    content: `
      Nguyễn Sinh Cung (sau đổi tên thành Nguyễn Tất Thành, rồi Nguyễn Ái Quốc, Hồ Chí Minh)
      sinh ra tại làng Hoàng Trù, xã Chung Cự (nay là Kim Liên), tỉnh Nghệ An.
      Từ nhỏ, Người đã sớm chứng kiến cảnh nước mất, nhà tan, nên đã nuôi chí tìm đường cứu nước.
      Năm 1908, Người tham gia phong trào chống thuế ở Huế.
      Trước ngày 5/6/1911, Người đã quyết tâm ra đi tìm đường cứu nước.
    `,
  },
  {
    id: "chapter-2",
    title: "Ra đi tìm đường cứu nước",
    yearRange: "1911 – 1923",
    content: `
      Ngày 5/6/1911, từ Bến Nhà Rồng, Người xuống tàu Đô đốc Latouche-Tréville ra đi tìm đường cứu nước.
      Người đã đi qua nhiều nước: Pháp, Mỹ, Anh… để lao động, học hỏi, tìm hiểu phong trào cách mạng.
      Năm 1919, Người gửi Bản yêu sách của nhân dân An Nam tới Hội nghị Versailles, đánh dấu bước ngoặt quan trọng.
    `,
  },
  {
    id: "chapter-3",
    title: "Hoạt động cách mạng quốc tế",
    yearRange: "1923 – 1938",
    content: `
      Người đến Liên Xô, Trung Quốc, tham gia các đại hội quốc tế cộng sản, lập Hội Việt Nam Cách mạng Thanh niên,
      mở lớp huấn luyện chính trị, ra báo Thanh Niên.
      Thời kỳ này Người bị bắt ở Hồng Kông nhưng vẫn giữ vững niềm tin cách mạng.
    `,
  },
  {
    id: "chapter-4",
    title: "Trở về Tổ quốc lãnh đạo cách mạng",
    yearRange: "1939 – 1941",
    content: `
      Sau thời gian hoạt động quốc tế, Người trở lại phương Đông, qua Côn Minh rồi trở về Cao Bằng ngày 28/1/1941.
      Người chủ trì Hội nghị Trung ương 8 (5/1941), sáng lập Mặt trận Việt Minh, chuẩn bị cho Cách mạng Tháng Tám.
    `,
  },
];
