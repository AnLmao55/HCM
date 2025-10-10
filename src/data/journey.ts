export interface JourneyStop {
  id: string;
  title: string;
  year: string;
  description: string;
  lat: number;
  lng: number;
  img: string;
}

export const journeyData: JourneyStop[] = [
  {
    id: "ben-nha-rong-1911",
    title: "Bến Nhà Rồng – Sài Gòn (Việt Nam)",
    year: "05/06/1911",
    description: 
      "Từ lòng yêu nước, Người nhận thấy các con đường cứu nước trước đây đều thất bại. Khi tiếp xúc với các dân tộc bị áp bức khác, Người rút ra kết luận ban đầu: 'Ở đâu có áp bức, ở đó có đấu tranh', đặt nền móng cho tư tưởng quốc tế.",
    lat: 10.762622,
    lng: 106.708382,
    img: "https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c80785c531738e3787169ce34b631b27454b96c18e14a012f926c7508697c48f7fd58d4f9efb0c8972265f49d8f86164867992/bac_ho_1_1.jpg"
  },
  {
    id: "singapore-1911",
    title: "Singapore",
    year: "08/06/1911",
    description: 
      "Tàu dừng chân tại Singapore. Tại đây, Người quan sát và nhận thấy dù ở đâu, người lao động cũng bị áp bức, bóc lột, từ đó củng cố thêm nhận thức về bản chất của chủ nghĩa đế quốc.",
    lat: 1.352083,
    lng: 103.819836,
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/739cccb3-d8bf-4cc7-a394-193624b2e9b3/dft1tjh-2cbe4504-1d13-4363-b696-33f3cc16695b.jpg/v1/fill/w_1280,h_822,q_75,strp/1911__singapore_by_colonialismwasgood_dft1tjh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODIyIiwicGF0aCI6IlwvZlwvNzM5Y2NjYjMtZDhiZi00Y2M3LWEzOTQtMTkzNjI0YjJlOWIzXC9kZnQxdGpoLTJjYmU0NTA0LTFkMTMtNDM2My1iNjk2LTMzZjNjYzE2Njk1Yi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0QQNDAtQPjF0ESAyyqbfd-Ep76Q5eKMAZ7qIQRne6Jk"
  },
  {
    id: "colombo-1911",
    title: "Colombo, Sri Lanka",
    year: "11/06/1911",
    description: 
      "Tàu cập cảng Colombo. Người tiếp tục quan sát cuộc sống của người dân thuộc địa dưới ách thống trị của thực dân Anh, thấy được nỗi khổ chung của các dân tộc bị mất nước.",
    lat: 6.927079,
    lng: 79.861244,
    img: "https://www.periodpaper.com/cdn/shop/products/BVM2_162.jpg?v=1571709095"
  },
  {
    id: "suez-1911",
    title: "Suez / Ai Cập",
    year: "30/06/1911",
    description: 
      "Tàu đi qua kênh đào Suez. Hình ảnh những người lao động Ai Cập khốn khổ trong khi các công ty tư bản phương Tây thu lợi đã khắc sâu trong tâm trí Người về sự bất công của xã hội thuộc địa.",
    lat: 30.04442,
    lng: 31.235712,
    img: "https://vcdn1-vnexpress.vnecdn.net/2021/03/29/szuez-3-3007-1617020263.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=kwDvX24_yS0UTS_U0oPKOg"
  },
  {
    id: "marseille-1911",
    title: "Marseille (Pháp)",
    year: "06/07/1911",
    description: 
      "Lần đầu đặt chân lên đất Pháp, Người thấy được sự tương phản giữa cuộc sống ở 'chính quốc' và 'thuộc địa', bắt đầu tìm hiểu sâu hơn về xã hội Pháp để tìm ra câu trả lời cho con đường cứu nước.",
    lat: 43.296482,
    lng: 5.36978,
    img: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/4028eaa467f477c80167f48e23810ac6/112019/cangmacxay1_2019111117145.jpg"
  },
  {
    id: "le-havre-1911",
    title: "Le Havre (Pháp)",
    year: "15/07/1911",
    description: 
      "Kết thúc chặng biển đầu tiên, Người bắt đầu cuộc sống lao động và học tập tại Pháp, từng bước tìm hiểu thực chất của những từ 'Tự do - Bình đẳng - Bác ái' mà Người hằng ngưỡng mộ.",
    lat: 49.49437,
    lng: 0.107929,
    img: "https://congnghieptauthuyvietnam.vn/upload/images/2022/So%20thang%206-2022/2022_T6_VHDL_1.jpg"
  },

  // 🧭 Chặng 2: Vòng quanh châu Phi
  {
    id: "vong-quanh-chau-phi-1912",
    title: "Vòng quanh Châu Phi",
    year: "01/1912 - 08/1912",
    description: 
      "Hành trình qua châu Phi giúp Người tận mắt chứng kiến bản chất tàn bạo của chủ nghĩa thực dân. Từ đó, tư tưởng của Người phát triển từ lòng yêu nước thành ý thức đoàn kết với các dân tộc bị áp bức trên toàn thế giới.",
    lat: 14.716677, // ví dụ: Dakar (Senegal)
    lng: -17.467686,
    img: "https://media.baothaibinh.com.vn/upload/news/6_2021/chu_tich_ho_chi_minh_voi_nhung_cong_viec_da_trai_qua_trong_hanh_trinh_cuu_nuoc_14451104062021.jpg"
  },

  {
    id: "new-york-1912",
    title: "New York (Mỹ)",
    year: "1912-1913",
    description: 
      "Tại các nước tư bản phát triển như Mỹ, Người nhận ra khẩu hiệu 'Tự do, Bình đẳng, Bác ái' chỉ là hình thức. Người khẳng định chỉ có thay đổi tận gốc chế độ xã hội bất công thì nhân dân mới thực sự được giải phóng.",
    lat: 40.712776,
    lng: -74.005974,
    img: "https://239days.com/wp-content/uploads/2012/11/manhattan-1931-up-1614153788.jpg"
  },
  {
    id: "london-1913",
    title: "London (Anh)",
    year: "1913 - 1917",
    description: 
      "Tại Anh, Người làm nhiều nghề để sống và dành thời gian tự học, nghiên cứu các tác phẩm của những nhà tư tưởng lớn. Đây là giai đoạn Người tích lũy tri thức, chuẩn bị cho những bước ngoặt về tư tưởng sau này.",
    lat: 51.507351,
    lng: -0.127758,
    img: "https://c8.alamy.com/comp/CPJ7M3/the-national-gallery-at-the-trafalgar-square-in-london-1913-CPJ7M3.jpg"
  },
  {
    id: "paris-1917",
    title: "Paris (Pháp)",
    year: "11/1917 - 06/1923",
    description: 
      "Đây là bước ngoặt quyết định. Sau khi đọc Luận cương của Lênin, Người đã tìm thấy con đường cứu nước đúng đắn, chuyển từ chủ nghĩa yêu nước sang chủ nghĩa Mác – Lênin và khẳng định: 'Muốn cứu nước và giải phóng dân tộc, không có con đường nào khác con đường cách mạng vô sản'.",
    lat: 48.856613,
    lng: 2.352222,
    img: "https://www.bienphong.com.vn/images/media/kienthucquocphong/2020/12/19/nguyen-ai-quoc-tai-dai-hoi-lan-thu-xviii-dang-xa-hoi-phap-thang-12-1920-anh-tu-lieu-bao-tang-ho-chi-minh.jpg"
  },
  {
    id: "petrograd-1923",
    title: "Petrograd / Saint Petersburg (Liên Xô)",
    year: "30/06/1923",
    description: 
      "Lần đầu tiên đến với quê hương của Cách mạng Tháng Mười, Người được trực tiếp nghiên cứu và tìm hiểu về chủ nghĩa Mác – Lênin, chuẩn bị hành trang lý luận cho cách mạng Việt Nam.",
    lat: 59.93428,
    lng: 30.335099,
    img: "https://c8.alamy.com/comp/2HK3C4F/one-of-petrograds-well-built-railway-stations-russia-petrograd-st-petersburg-1923-2HK3C4F.jpg"
  },
  {
    id: "moscow-1924",
    title: "Mátxcơva (Liên Xô)",
    year: "1924-1927",
    description: 
      "Tại Mátxcơva, Người học tập tại Trường Đại học Phương Đông, tham gia Đại hội V Quốc tế Cộng sản, tiếp tục phát triển lý luận về cách mạng giải phóng dân tộc ở các nước thuộc địa.",
    lat: 55.755825,
    lng: 37.617298,
    img: "https://c8.alamy.com/comp/GG2BMP/lenins-funeral-in-moscow-1924-ussr-GG2BMP.jpg"
  },
  {
    id: "guangzhou-1924",
    title: "Quảng Châu (Trung Quốc)",
    year: "11/11/1924 - 04/1927",
    description: 
      "Tại Quảng Châu, Người vận dụng sáng tạo chủ nghĩa Mác – Lênin vào thực tiễn Việt Nam, sáng lập Hội Việt Nam Cách mạng Thanh niên, chuẩn bị về tư tưởng và tổ chức cho việc thành lập Đảng, đồng thời nhấn mạnh: 'Cách mạng là sự nghiệp của quần chúng nhân dân'.",
    lat: 23.12911,
    lng: 113.264385,
    img: "https://cdn.tuoitre.vn/thumb_w/730/2021/5/17/lop-huan-luyen-chinh-tri-do-dong-chi-nguyen-ai-quoc-to-chuc-tai-quang-chau-trung-quoc-1925-1927-anh-tu-lieu-1621236983895180415301.jpg"
  },
  {
    id: "bangkok-1928",
    title: "Bangkok (Xiêm / Thái Lan)",
    year: "1927-1929",
    description: 
      "Hoạt động tại Xiêm (Thái Lan), Người trực tiếp gây dựng cơ sở trong kiều bào, củng cố tư tưởng 'lấy dân làm gốc' và khẳng định niềm tin vào sức mạnh tự giải phóng của dân tộc: 'Đem sức ta mà tự giải phóng cho ta'.",
    lat: 13.756331,
    lng: 100.501765,
    img: "https://c8.alamy.com/comp/2J2EWB6/bangkok-thailand-january-4-2010-phra-tinang-aporn-phimok-prasat-pavillion-in-the-grand-palace-in-bangkok-2J2EWB6.jpg"
  },
  {
    id: "hong-kong-1931",
    title: "Hồng Kông",
    year: "1929-1933",
    description: 
      "Người chủ trì hợp nhất và thành lập Đảng Cộng sản Việt Nam. Dù bị bắt giam tại Hồng Kông, Người vẫn thể hiện tinh thần lạc quan cách mạng và sự kiên định với mục tiêu độc lập dân tộc và hạnh phúc cho nhân dân.",
    lat: 22.3193039,
    lng: 114.1693611,
    img: "https://bhd.1cdn.vn/2021/06/04/files-library-images-ttxvn_0406_hong_kong.jpg"
  },
  {
    id: "shanghai-1933",
    title: "Thượng Hải (Trung Quốc)",
    year: "Cuối 1933",
    description: 
      "Sau khi được trả tự do, Người tìm cách liên lạc lại với tổ chức và chuẩn bị cho hành trình trở lại Liên Xô, tiếp tục con đường cách mạng đã chọn.",
    lat: 31.230416,
    lng: 121.473701,
    img: "https://i0.wp.com/www.7dayadventurer.com/wp-content/uploads/2021/06/63D340E7-5ABA-45AA-B845-C8FB11A7C73A.png"
  },
  {
    id: "moscow-1934",
    title: "Mátxcơva (Liên Xô)",
    year: "1934 - 1938",
    description: 
      "Nghiên cứu tại Liên Xô, Người kiên định bảo vệ quan điểm cách mạng giải phóng dân tộc phải được đặt lên hàng đầu ở các nước thuộc địa, xem đó là tiền đề cho cách mạng xã hội chủ nghĩa.",
    lat: 55.755825,
    lng: 37.617298,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/43/Triumphal_Arch_of_Moscow_1934.jpg"
  },
  {
    id: "queling-1938",
    title: "Quế Lâm (Trung Quốc)",
    year: "29/09/1938",
    description: 
      "Trở lại Trung Quốc, Người bắt tay chuẩn bị các điều kiện để về nước lãnh đạo cách mạng, hình thành tư duy chiến lược về việc kết hợp đấu tranh chính trị và đấu tranh vũ trang để giành chính quyền.",
    lat: 25.273566,
    lng: 110.29002,
    img: "https://spirit.vietnamairlines.com/old/tintuc/NewsDK/11625/637249835213699906.jpeg"
  },
  {
    id: "kunming-1939",
    title: "Côn Minh (Vân Nam, Trung Quốc)",
    year: "1939 - 1940",
    description: 
      "Tại Côn Minh, Người triệu tập cán bộ để huấn luyện, củng cố tổ chức và vạch ra đường lối chuẩn bị cho việc về nước, trực tiếp lãnh đạo phong trào cách mạng trong nước.",
    lat: 25.03889,
    lng: 102.71833,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56SpgalS8Ca2R3IMAVZgShUr8mdQE-7L65g&s"
  },
  {
    id: "pacbo-1941",
    title: "Pác Bó – Cao Bằng (Việt Nam)",
    year: "28/01/1941",
    description: 
      "Sau 30 năm bôn ba, Người trở về Pác Bó, trực tiếp lãnh đạo cách mạng Việt Nam. Tại đây, tư tưởng Hồ Chí Minh về con đường cách mạng giải phóng dân tộc đã được hoàn thiện: 'Độc lập dân tộc gắn liền với chủ nghĩa xã hội'.",
    lat: 22.8509,
    lng: 106.2977,
    img: "https://nhandan.vn/special/ve-Pac-Bo-nho-Bac-Ho/assets/EoBeQGHSiR/ba-c-h-th-m-pa-c-bo-2-1961-1-2048x1360.jpg"
  }
];
