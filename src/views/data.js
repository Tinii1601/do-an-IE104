// Product class
class Product {
  constructor(id, name, gia, sale = 0, image, the_loai, mo_ta, nxb, hinh_thuc, kich_thuoc, so_trang, tac_gia, nam_xb = 2024) {
    this.id = id;
    this.name = name;
    this.gia = gia;
    this.sale = sale;
    this.image = image;
    this.the_loai = the_loai;
    this.mo_ta = mo_ta;
    this.nxb = nxb;
    this.hinh_thuc = hinh_thuc;
    this.kich_thuoc = kich_thuoc;
    this.so_trang = so_trang;
    this.tac_gia = tac_gia;
    this.nam_xb = nam_xb;
  }
  getDiscountedPrice() {
    return this.gia * (1 - this.sale / 100);
  }

  isCategory(category) {
    return this.the_loai === category;
  }
}

// User class
class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
  authenticate(password) {
    return this.password === password;
  }
}

class Data {
  constructor() {
    this.products = [];
    this.users = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  addUser(user) {
    this.users.push(user);
  }
}

// Khởi tạo dữ liệu
let data = new Data();
// Văn học
data.products.push(
  new Product(
    1,
    "Lũ trẻ đường tàu",
    100000,
    10,
    require("../assets/images/Van_hoc/lu-tre-duong-tau.jpg"),
    "Van_hoc",
    "Kỳ thực chúng nào phải là trẻ đường tàu. Tôi đoán chừng là chúng chưa từng lăn tăn gì về đường tàu ngoại trừ ấy là phương tiện đưa chúng tới Maskelyne và Cooke để xem ảo thuật, coi kịch câm pantomime, đi chơi vườn bách thảo, và tham quan bảo tàng tượng sáp Madame Tussaud. Chúng chỉ là những đứa trẻ ngoại ô bình thường, sống cùng cha mẹ trong một căn biệt thự bình thường có mặt tiền ốp gạch đỏ, cửa ra vào lắp kính màu, một lối đi lát gạch gọi là hành lang, một phòng tắm có nước nóng lạnh, chuông điện, cửa sổ kiểu Pháp, tường quét vôi trắng, và “mọi tiện nghi hiện đại”, theo ngôn ngữ của cánh môi giới nhà đất.",
    "NXB Thanh niên",
    "Bìa mềm",
    "14.5 x 20.5 x 1.4 cm",
    288,
    "Edith Nesbit"
  )
);
data.products.push(
  new Product(
    2,
    "Lớn lên trên đảo vắng",
    155000,
    0,
    require("../assets/images/Van_hoc/lon-len-tren-dao-vang.jpg"),
    "Van_hoc",
    "Lớn lên trên đảo vắng được viết bởi nhà văn Johann David Wyss - người đã được truyền cảm hứng từ tác phẩm Robinson Crusoe của Daniel Defoe. Nhưng Wyss muốn viết một câu chuyện chứa đựng những bài học thú vị, bổ ích về cuộc sống thiên nhiên hoang dã dành riêng cho trẻ em, nên đã cho ra đời tiểu thuyết Lớn lên trên đảo vắng. Tác phẩm được xuất bản lần đầu tiên bằng tiếng Đức năm 1812 và đã trở thành một trong những tác phẩm được yêu thích nhất của trẻ em trên toàn thế giới.",
    "NXB Thanh niên",
    "Bìa cứng",
    "20.5 x 14.5 x 2.8 cm",
    548,
    "Johann David Wyss"
  )
);
data.products.push(
  new Product(
    3,
    "Hoàng Tử Bé",
    100000,
    10,
    require("../assets/images/Van_hoc/hoang-tu-be-kho-nho.jpg"),
    "Van_hoc",
    "Toàn bộ cuộc hành trình của cậu được tác giả kể lại với một tình cảm yêu mến chứa chan, như một mối nhân duyên gắn bó kì lạ với kí ức tuổi thơ thuở lên sáu, của một cậu bé lớn lên trong cô độc vì xung quanh không có một ai hiểu được mình. Cũng giống như cậu hoàng tử bé sống một mình trên tiểu hành tinh B612 bé nhỏ, cùng với ba ngọn núi lửa, trong đó một ngọn đã tắt, và một bông hoa hồng đỏm dáng. Được cậu coi sóc chăm bẵm hết mực, nhưng bông hoa vẫn thường xuyên tỏ ra cáu bẳn, khó chịu. Không hiểu duyên cớ vì đâu, cậu rất đỗi hoang mang, buồn rầu, và quyết định du hành sang các hành tinh khác để tìm kiếm một người bạn.",
    "NXB Phụ nữ",
    "Bìa mềm",
    "15 x 23 x 0.8 cm",
    156,
    "Antonie de Saint-Exupery",
  )
);
data.products.push(
  new Product(
    4,
    "Hỡi Những Người Tiên Phong",
    100000,
    10,
    require("../assets/images/Van_hoc/hoi-nhung-nguoi-tien-phong.jpg"),
    "Van_hoc",
    "Những mâu thuẫn trong mối quan hệ giữa cá nhân vói xã hội luôn là chủ đề thường trực trong văn hóa Mỹ nói chung, trong văn học Mỹ nói riêng. Nước Mỹ đã luôn phải vật lộn với sự mất cân bằng giữa tính cá nhân và tính cộng đồng, giữa những ước mơ riêng tư và giấc mơ Mỹ vĩ đại.",
    "NXB Phụ nữ",
    "Bìa cứng",
    "14.5 x 20.5 cm",
    279,
    "Willa Sibert Cather"
  )
);
data.products.push(
  new Product(
    5,
    "Bài ca nơi xa lắm",
    90000,
    10,
    require("../assets/images/Van_hoc/bai-ca-noi-xa-lam.jpg"),
    "Van_hoc",
    "Frank không biết phải cảm thấy thế nào khi Nick Underbridge giải cứu con bé khỏi tụi bắt nạt vào một chiều nọ. Không ai thích Nick cả. Cậu ta to kềnh, vụng về, kỳ lạ và còn bốc mùi nữa – lớp Frank đứa nào cũng nghĩ thế.",
    "NXB Trẻ",
    "Bìa mềm",
    "14.5 x 20.5 cm",
    279,
    "Willa Sibert Cather"
  )
);
data.products.push(
  new Product(
    6,
    "Heidi",
    118000,
    10,
    require("../assets/images/Van_hoc/heidi.jpg"),
    "Van_hoc",
    "Khi quyết định chuyển ngữ Heidi, dịch giả Nguyễn Bích Lan thực sự mong muốn đi tìm những món quà ở-trẻ-thơ; với chị, cuốn sách không chỉ “dành cho trẻ em” mà ngược lại, chính nhân vật cô bé Heidi đã trao tặng chị, tặng bạn đọc biết bao món quà đáng giá: cái nhìn sáng trong, chẳng vướng vào định kiến; niềm nhiệt huyết, quyết tâm khi bắt tay làm mọi sự; tính trung thực… và đặc biệt, lòng tin – lòng tốt. Từng lời nói, từng hành động của cô bé ấy như đều ẩn chứa năng lượng vui vẻ, khả năng xoa dịu, có thể chữa lành đâu chỉ cho bạn bè đồng trang lứa mà còn cho người lớn, người già, cho cả người thành đạt lẫn người từng thất bại.",
    "NXB Phụ Nữ",
    "Bìa cứng",
    "14.5 x 20.5 cm",
    279,
    "Willa Sibert Cather"
  )
);
data.products.push(
  new Product(
    7,
    "Hẹn gặp nhau trong vũ trụ",
    123000,
    10,
    require("../assets/images/Van_hoc/hen-gap-nhau-trong-vu-tru.jpg"),
    "Van_hoc",
    "Nhóc Alex Petroski mười một tuổi yêu không gian và tên lửa, mẹ, anh và chú cún Carl Sagan – được đặt theo tên người hùng của nhóc, là một nhà thiên văn học. Nhóc chỉ muốn gửi chiếc iPod Vàng của mình lên không gian giống như Carl Sagan (nhà thiên văn học chứ không phải chú cún) đã gửi Đĩa Ghi Vàng lên tàu vũ trụ Voyager năm 1977. Từ Colorado đến New Mexico, Las Vegas đến Los Angeles, nhóc Alex đã ghi âm mọi thứ vào chiếc iPod để chuyển thông điệp đến các sự sống ngoài hành tinh về cuộc sống trên Trái Đất. Tuy nhiên điểm đến của Alex cứ thay đổi xoành xoạch. Và những người vui tính, đặc biệt trên đường lại giúp Alex chuẩn bị để khám phá các bí mật về người cha mất đã lâu, người mẹ bất ổn và người anh hay mất dạng. Và Alex như lại có thêm gia đình mới.",
    "NXB Trẻ",
    "Bìa mềm",
    "14.5 x 20.5 cm",
    279,
    "Willa Sibert Cather"
  )
);
data.products.push(
  new Product(
    8,
    "Tiệm Sách Của Nàng",
    125000,
    10,
    require("../assets/images/Van_hoc/tiem-sach-cua-nang-bia-mem.jpg"),
    "Van_hoc",
    "Bối cảnh là một tiệm sách tại thành phố hiện đại. Nhân vật “anh” xuất hiện trong câu chuyện tình cảm lãng mạn, ở đó có nắng ấm êm, có mưa thành dòng để thả thuyền giấy, những câu thoại vu vơ chỉ hai người mới hiểu, với “một chút hân hoan, một chút dỗi hờn…”",
    "NXB Trẻ",
    "Bìa cứng",
    "14.5 x 20.5 cm",
    279,
    "Willa Sibert Cather"
  )
);

// Sách kinh tế
data.products.push(
  new Product(
    9,
    "Tiktok Marketing",
    100000,
    10,
    require("../assets/images/Kinh_te/Tiktok-makerting.jpg"),
    "Kinh_te",
    "TikTok đang bùng nổ ở mọi nơi và đã trở thành một trong những ứng dụng được tải xuống nhiều nhất thế giới. Không có gì ngạc nhiên khi các nhà tiếp thị đã bắt đầu nhìn thấy tiềm năng của nền tảng này. Kinh doanh đi cùng với xu hướng thì mới có thể phát triển và tiếp cận gần hơn với nhiều tập khách hàng. TikTok đã thu hút được sự chú ý lớn từ nhiều nhà kinh doanh khi mạng xã hội này có thể tạo ra những content vô cùng đặc sắc, đồng thời còn là một kênh marketing hiệu quả",
    "NXB Thanh niên"
  )
);
data.products.push(
  new Product(
    10,
    "Nhà lãnh đạo tương lai",
    100000,
    10,
    require("../assets/images/Kinh_te/nha-lanh-dao-tuong-lai.jpg"),
    "Kinh_te",
    "Quyển sách là tập hợp những kiến thức và kinh nghiệm uyên thâm của những nhà tư tưởng hàng đầu đến từ nhiều lĩnh vực khác nhau như kinh tế tư nhân, hoạt động xã hội, chính quyền, giáo dục, quân sự,… như Peter F. Drucker, Peter Senge, R. Roosevelt Jr., Charles Hardy, Stephen R. Covey,… Độc giả sẽ cảm nhận được những dòng tư tưởng tuôn trào của những nhà lãnh đạo tương lai, là biểu hiện của trí tuệ, khả năng phán đoán, kỹ năng phân tích vấn đề và óc quan sát. Họ không hài lòng với những vết xe cũ mà luôn tiên phong tìm kiếm những lối đi mới để mở ra những chân trời mới với những cơ hội, những thử thách và những biến đổi – thông điệp cho một ngày mới bắt đầu. Cuốn sách là một “tiếng hô xông trận” nhằm kích thích, động viên tinh thần những nhà lãnh đạo tương lai cùng góp sức xây dựng nên những mô hình tổ chức theo đúng với nhu cầu xã hội đặt ra và phát triển bền vững cùng với thời đại.",
    "NXB Trẻ"
  )
);
data.products.push(
  new Product(
    11,
    "Thế giới alibaba của jack ma",
    100000,
    10,
    require("../assets/images/Kinh_te/the-gioi-alibaba-cua-jack-ma.jpg"),
    "Kinh_te",
    "Tháng 9 năm 2014, một công ty Trung Quốc mà hầu hết người Mỹ chưa từng nghe nói tới đã tổ chức cuộc lên sàn niêm yết lần đầu (IPO) lớn nhất trong lịch sử – lớn hơn Google, Facebook và Twitter cộng lại. Alibaba, giờ đây là công ty thương mại điện tử lớn nhất thế giới, gần như thoát khỏi nhận biết của phương Tây suốt cả chục năm, trong khi đó xây dựng một cơ sở khách hàng lớn hơn gấp đôi quy mô cơ sở khách hàng của Amazon, và xử lý một lượng giao dịch thương mại điện tử khổng lồ ở Trung Quốc. Chuyện này đã xảy ra như thế nào? Và nó theo cùng với công cuộc cải cách như thế nào?",
    "NXB Trẻ"
  )
);
data.products.push(
  new Product(
    12,
    "Digital Branding - Định danh trong thời đại số",
    100000,
    10,
    require("../assets/images/Kinh_te/digital-branding-dinh-danh-trong-thoi-dai-so.jpg"),
    "Kinh_te",
    "Digital branding là một hoạt động nằm trong khái niệm marketing nói chung. Mục tiêu của hoạt động này là xây dựng mối quan hệ tốt đẹp giữa doanh nghiệp và khách hàng (từ nhận diện thương hiệu, tin tưởng thương hiệu tới trung thành với thương hiệu) trên môi trường Internet.",
    "NXB Phụ nữ"
  )
);
data.products.push(
  new Product(
    13,
    "Tiktok Marketing",
    100000,
    10,
    require("../assets/images/Kinh_te/Tiktok-makerting.jpg"),
    "Kinh_te",
    "TikTok đang bùng nổ ở mọi nơi và đã trở thành một trong những ứng dụng được tải xuống nhiều nhất thế giới. Không có gì ngạc nhiên khi các nhà tiếp thị đã bắt đầu nhìn thấy tiềm năng của nền tảng này. Kinh doanh đi cùng với xu hướng thì mới có thể phát triển và tiếp cận gần hơn với nhiều tập khách hàng. TikTok đã thu hút được sự chú ý lớn từ nhiều nhà kinh doanh khi mạng xã hội này có thể tạo ra những content vô cùng đặc sắc, đồng thời còn là một kênh marketing hiệu quả",
    "NXB Thanh niên"
  )
);
data.products.push(
  new Product(
    14,
    "Nhà lãnh đạo tương lai",
    100000,
    10,
    require("../assets/images/Kinh_te/nha-lanh-dao-tuong-lai.jpg"),
    "Kinh_te",
    "Quyển sách là tập hợp những kiến thức và kinh nghiệm uyên thâm của những nhà tư tưởng hàng đầu đến từ nhiều lĩnh vực khác nhau như kinh tế tư nhân, hoạt động xã hội, chính quyền, giáo dục, quân sự,… như Peter F. Drucker, Peter Senge, R. Roosevelt Jr., Charles Hardy, Stephen R. Covey,… Độc giả sẽ cảm nhận được những dòng tư tưởng tuôn trào của những nhà lãnh đạo tương lai, là biểu hiện của trí tuệ, khả năng phán đoán, kỹ năng phân tích vấn đề và óc quan sát. Họ không hài lòng với những vết xe cũ mà luôn tiên phong tìm kiếm những lối đi mới để mở ra những chân trời mới với những cơ hội, những thử thách và những biến đổi – thông điệp cho một ngày mới bắt đầu. Cuốn sách là một “tiếng hô xông trận” nhằm kích thích, động viên tinh thần những nhà lãnh đạo tương lai cùng góp sức xây dựng nên những mô hình tổ chức theo đúng với nhu cầu xã hội đặt ra và phát triển bền vững cùng với thời đại.",
    "NXB Trẻ"
  )
);
data.products.push(
  new Product(
    15,
    "Thế giới alibaba của jack ma",
    100000,
    10,
    require("../assets/images/Kinh_te/the-gioi-alibaba-cua-jack-ma.jpg"),
    "Kinh_te",
    "Tháng 9 năm 2014, một công ty Trung Quốc mà hầu hết người Mỹ chưa từng nghe nói tới đã tổ chức cuộc lên sàn niêm yết lần đầu (IPO) lớn nhất trong lịch sử – lớn hơn Google, Facebook và Twitter cộng lại. Alibaba, giờ đây là công ty thương mại điện tử lớn nhất thế giới, gần như thoát khỏi nhận biết của phương Tây suốt cả chục năm, trong khi đó xây dựng một cơ sở khách hàng lớn hơn gấp đôi quy mô cơ sở khách hàng của Amazon, và xử lý một lượng giao dịch thương mại điện tử khổng lồ ở Trung Quốc. Chuyện này đã xảy ra như thế nào? Và nó theo cùng với công cuộc cải cách như thế nào?",
    "NXB Trẻ"
  )
);
data.products.push(
  new Product(
    16,
    "Digital Branding - Định danh trong thời đại số",
    100000,
    10,
    require("../assets/images/Kinh_te/digital-branding-dinh-danh-trong-thoi-dai-so.jpg"),
    "Kinh_te",
    "Digital branding là một hoạt động nằm trong khái niệm marketing nói chung. Mục tiêu của hoạt động này là xây dựng mối quan hệ tốt đẹp giữa doanh nghiệp và khách hàng (từ nhận diện thương hiệu, tin tưởng thương hiệu tới trung thành với thương hiệu) trên môi trường Internet.",
    "NXB Phụ nữ"
  )
);

// Kỹ Năng sống
data.products.push(
  new Product(
    17,
    "Lũ trẻ đường tàu",
    100000,
    10,
    require("../assets/images/Van_hoc/lu-tre-duong-tau.jpg"),
    "Ky_nang_song",
    "Kỳ thực chúng nào phải là trẻ đường tàu. Tôi đoán chừng là chúng chưa từng lăn tăn gì về đường tàu ngoại trừ ấy là phương tiện đưa chúng tới Maskelyne và Cooke để xem ảo thuật, coi kịch câm pantomime, đi chơi vườn bách thảo, và tham quan bảo tàng tượng sáp Madame Tussaud. Chúng chỉ là những đứa trẻ ngoại ô bình thường, sống cùng cha mẹ trong một căn biệt thự bình thường có mặt tiền ốp gạch đỏ, cửa ra vào lắp kính màu, một lối đi lát gạch gọi là hành lang, một phòng tắm có nước nóng lạnh, chuông điện, cửa sổ kiểu Pháp, tường quét vôi trắng, và “mọi tiện nghi hiện đại”, theo ngôn ngữ của cánh môi giới nhà đất.",
    "NXB Thanh niên"
  )
);
data.products.push(
  new Product(
    18,
    "Lớn lên trên đảo vắng",
    100000,
    10,
    require("../assets/images/Van_hoc/lon-len-tren-dao-vang.jpg"),
    "Ky_nang_song",
    "Lớn lên trên đảo vắng được viết bởi nhà văn Johann David Wyss - người đã được truyền cảm hứng từ tác phẩm Robinson Crusoe của Daniel Defoe. Nhưng Wyss muốn viết một câu chuyện chứa đựng những bài học thú vị, bổ ích về cuộc sống thiên nhiên hoang dã dành riêng cho trẻ em, nên đã cho ra đời tiểu thuyết Lớn lên trên đảo vắng. Tác phẩm được xuất bản lần đầu tiên bằng tiếng Đức năm 1812 và đã trở thành một trong những tác phẩm được yêu thích nhất của trẻ em trên toàn thế giới.",
    "NXB Thanh niên"
  )
);
data.products.push(
  new Product(
    19,
    "Hoàng Tử Bé",
    100000,
    10,
    require("../assets/images/Van_hoc/hoang-tu-be-kho-nho.jpg"),
    "Ky_nang_song",
    "Toàn bộ cuộc hành trình của cậu được tác giả kể lại với một tình cảm yêu mến chứa chan, như một mối nhân duyên gắn bó kì lạ với kí ức tuổi thơ thuở lên sáu, của một cậu bé lớn lên trong cô độc vì xung quanh không có một ai hiểu được mình. Cũng giống như cậu hoàng tử bé sống một mình trên tiểu hành tinh B612 bé nhỏ, cùng với ba ngọn núi lửa, trong đó một ngọn đã tắt, và một bông hoa hồng đỏm dáng. Được cậu coi sóc chăm bẵm hết mực, nhưng bông hoa vẫn thường xuyên tỏ ra cáu bẳn, khó chịu. Không hiểu duyên cớ vì đâu, cậu rất đỗi hoang mang, buồn rầu, và quyết định du hành sang các hành tinh khác để tìm kiếm một người bạn.",
    "NXB Phụ nữ"
  )
);
data.products.push(
  new Product(
    20,
    "Hỡi Những Người Tiên Phong",
    100000,
    10,
    require("../assets/images/Van_hoc/hoi-nhung-nguoi-tien-phong.jpg"),
    "Ky_nang_song",
    "Những mâu thuẫn trong mối quan hệ giữa cá nhân vói xã hội luôn là chủ đề thường trực trong văn hóa Mỹ nói chung, trong văn học Mỹ nói riêng. Nước Mỹ đã luôn phải vật lộn với sự mất cân bằng giữa tính cá nhân và tính cộng đồng, giữa những ước mơ riêng tư và giấc mơ Mỹ vĩ đại.",
    "NXB Phụ nữ"
  )
);
data.products.push(
  new Product(
    21,
    "Lũ trẻ đường tàu",
    100000,
    10,
    require("../assets/images/Van_hoc/lu-tre-duong-tau.jpg"),
    "Ky_nang_song",
    "Kỳ thực chúng nào phải là trẻ đường tàu. Tôi đoán chừng là chúng chưa từng lăn tăn gì về đường tàu ngoại trừ ấy là phương tiện đưa chúng tới Maskelyne và Cooke để xem ảo thuật, coi kịch câm pantomime, đi chơi vườn bách thảo, và tham quan bảo tàng tượng sáp Madame Tussaud. Chúng chỉ là những đứa trẻ ngoại ô bình thường, sống cùng cha mẹ trong một căn biệt thự bình thường có mặt tiền ốp gạch đỏ, cửa ra vào lắp kính màu, một lối đi lát gạch gọi là hành lang, một phòng tắm có nước nóng lạnh, chuông điện, cửa sổ kiểu Pháp, tường quét vôi trắng, và “mọi tiện nghi hiện đại”, theo ngôn ngữ của cánh môi giới nhà đất.",
    "NXB Thanh niên"
  )
);
data.products.push(
  new Product(
    22,
    "Lớn lên trên đảo vắng",
    100000,
    10,
    require("../assets/images/Van_hoc/lon-len-tren-dao-vang.jpg"),
    "Ky_nang_song",
    "Lớn lên trên đảo vắng được viết bởi nhà văn Johann David Wyss - người đã được truyền cảm hứng từ tác phẩm Robinson Crusoe của Daniel Defoe. Nhưng Wyss muốn viết một câu chuyện chứa đựng những bài học thú vị, bổ ích về cuộc sống thiên nhiên hoang dã dành riêng cho trẻ em, nên đã cho ra đời tiểu thuyết Lớn lên trên đảo vắng. Tác phẩm được xuất bản lần đầu tiên bằng tiếng Đức năm 1812 và đã trở thành một trong những tác phẩm được yêu thích nhất của trẻ em trên toàn thế giới.",
    "NXB Thanh niên"
  )
);
data.products.push(
  new Product(
    23,
    "Hoàng Tử Bé",
    100000,
    10,
    require("../assets/images/Van_hoc/hoang-tu-be-kho-nho.jpg"),
    "Ky_nang_song",
    "Toàn bộ cuộc hành trình của cậu được tác giả kể lại với một tình cảm yêu mến chứa chan, như một mối nhân duyên gắn bó kì lạ với kí ức tuổi thơ thuở lên sáu, của một cậu bé lớn lên trong cô độc vì xung quanh không có một ai hiểu được mình. Cũng giống như cậu hoàng tử bé sống một mình trên tiểu hành tinh B612 bé nhỏ, cùng với ba ngọn núi lửa, trong đó một ngọn đã tắt, và một bông hoa hồng đỏm dáng. Được cậu coi sóc chăm bẵm hết mực, nhưng bông hoa vẫn thường xuyên tỏ ra cáu bẳn, khó chịu. Không hiểu duyên cớ vì đâu, cậu rất đỗi hoang mang, buồn rầu, và quyết định du hành sang các hành tinh khác để tìm kiếm một người bạn.",
    "NXB Phụ nữ"
  )
);
data.products.push(
  new Product(
    24,
    "Hỡi Những Người Tiên Phong",
    100000,
    10,
    require("../assets/images/Van_hoc/hoi-nhung-nguoi-tien-phong.jpg"),
    "Ky_nang_song",
    "Những mâu thuẫn trong mối quan hệ giữa cá nhân vói xã hội luôn là chủ đề thường trực trong văn hóa Mỹ nói chung, trong văn học Mỹ nói riêng. Nước Mỹ đã luôn phải vật lộn với sự mất cân bằng giữa tính cá nhân và tính cộng đồng, giữa những ước mơ riêng tư và giấc mơ Mỹ vĩ đại.",
    "NXB Phụ nữ"
  )
);

// Thiếu Nhi
data.products.push(
  new Product(
    25,
    "Lũ trẻ đường tàu",
    100000,
    10,
    require("../assets/images/Van_hoc/lu-tre-duong-tau.jpg"),
    "Thieu_nhi",
    "Kỳ thực chúng nào phải là trẻ đường tàu. Tôi đoán chừng là chúng chưa từng lăn tăn gì về đường tàu ngoại trừ ấy là phương tiện đưa chúng tới Maskelyne và Cooke để xem ảo thuật, coi kịch câm pantomime, đi chơi vườn bách thảo, và tham quan bảo tàng tượng sáp Madame Tussaud. Chúng chỉ là những đứa trẻ ngoại ô bình thường, sống cùng cha mẹ trong một căn biệt thự bình thường có mặt tiền ốp gạch đỏ, cửa ra vào lắp kính màu, một lối đi lát gạch gọi là hành lang, một phòng tắm có nước nóng lạnh, chuông điện, cửa sổ kiểu Pháp, tường quét vôi trắng, và “mọi tiện nghi hiện đại”, theo ngôn ngữ của cánh môi giới nhà đất.",
    "NXB Thanh niên"
  )
);
data.products.push(
  new Product(
    26,
    "Lớn lên trên đảo vắng",
    100000,
    10,
    require("../assets/images/Van_hoc/lon-len-tren-dao-vang.jpg"),
    "Thieu_nhi",
    "Lớn lên trên đảo vắng được viết bởi nhà văn Johann David Wyss - người đã được truyền cảm hứng từ tác phẩm Robinson Crusoe của Daniel Defoe. Nhưng Wyss muốn viết một câu chuyện chứa đựng những bài học thú vị, bổ ích về cuộc sống thiên nhiên hoang dã dành riêng cho trẻ em, nên đã cho ra đời tiểu thuyết Lớn lên trên đảo vắng. Tác phẩm được xuất bản lần đầu tiên bằng tiếng Đức năm 1812 và đã trở thành một trong những tác phẩm được yêu thích nhất của trẻ em trên toàn thế giới.",
    "NXB Thanh niên"
  )
);
data.products.push(
  new Product(
    27,
    "Hoàng Tử Bé",
    100000,
    10,
    require("../assets/images/Van_hoc/hoang-tu-be-kho-nho.jpg"),
    "Thieu_nhi",
    "Toàn bộ cuộc hành trình của cậu được tác giả kể lại với một tình cảm yêu mến chứa chan, như một mối nhân duyên gắn bó kì lạ với kí ức tuổi thơ thuở lên sáu, của một cậu bé lớn lên trong cô độc vì xung quanh không có một ai hiểu được mình. Cũng giống như cậu hoàng tử bé sống một mình trên tiểu hành tinh B612 bé nhỏ, cùng với ba ngọn núi lửa, trong đó một ngọn đã tắt, và một bông hoa hồng đỏm dáng. Được cậu coi sóc chăm bẵm hết mực, nhưng bông hoa vẫn thường xuyên tỏ ra cáu bẳn, khó chịu. Không hiểu duyên cớ vì đâu, cậu rất đỗi hoang mang, buồn rầu, và quyết định du hành sang các hành tinh khác để tìm kiếm một người bạn.",
    "NXB Phụ nữ"
  )
);
data.products.push(
  new Product(
    28,
    "Hỡi Những Người Tiên Phong",
    100000,
    10,
    require("../assets/images/Van_hoc/hoi-nhung-nguoi-tien-phong.jpg"),
    "Thieu_nhi",
    "Những mâu thuẫn trong mối quan hệ giữa cá nhân vói xã hội luôn là chủ đề thường trực trong văn hóa Mỹ nói chung, trong văn học Mỹ nói riêng. Nước Mỹ đã luôn phải vật lộn với sự mất cân bằng giữa tính cá nhân và tính cộng đồng, giữa những ước mơ riêng tư và giấc mơ Mỹ vĩ đại.",
    "NXB Phụ nữ"
  )
);
data.products.push(
  new Product(
    29,
    "Lũ trẻ đường tàu",
    100000,
    10,
    require("../assets/images/Van_hoc/lu-tre-duong-tau.jpg"),
    "Thieu_nhi",
    "Kỳ thực chúng nào phải là trẻ đường tàu. Tôi đoán chừng là chúng chưa từng lăn tăn gì về đường tàu ngoại trừ ấy là phương tiện đưa chúng tới Maskelyne và Cooke để xem ảo thuật, coi kịch câm pantomime, đi chơi vườn bách thảo, và tham quan bảo tàng tượng sáp Madame Tussaud. Chúng chỉ là những đứa trẻ ngoại ô bình thường, sống cùng cha mẹ trong một căn biệt thự bình thường có mặt tiền ốp gạch đỏ, cửa ra vào lắp kính màu, một lối đi lát gạch gọi là hành lang, một phòng tắm có nước nóng lạnh, chuông điện, cửa sổ kiểu Pháp, tường quét vôi trắng, và “mọi tiện nghi hiện đại”, theo ngôn ngữ của cánh môi giới nhà đất.",
    "NXB Thanh niên"
  )
);
data.products.push(
  new Product(
    30,
    "Lớn lên trên đảo vắng",
    100000,
    10,
    require("../assets/images/Van_hoc/lon-len-tren-dao-vang.jpg"),
    "Thieu_nhi",
    "Lớn lên trên đảo vắng được viết bởi nhà văn Johann David Wyss - người đã được truyền cảm hứng từ tác phẩm Robinson Crusoe của Daniel Defoe. Nhưng Wyss muốn viết một câu chuyện chứa đựng những bài học thú vị, bổ ích về cuộc sống thiên nhiên hoang dã dành riêng cho trẻ em, nên đã cho ra đời tiểu thuyết Lớn lên trên đảo vắng. Tác phẩm được xuất bản lần đầu tiên bằng tiếng Đức năm 1812 và đã trở thành một trong những tác phẩm được yêu thích nhất của trẻ em trên toàn thế giới.",
    "NXB Thanh niên"
  )
);
data.products.push(
  new Product(
    31,
    "Hoàng Tử Bé",
    100000,
    10,
    require("../assets/images/Van_hoc/hoang-tu-be-kho-nho.jpg"),
    "Thieu_nhi",
    "Toàn bộ cuộc hành trình của cậu được tác giả kể lại với một tình cảm yêu mến chứa chan, như một mối nhân duyên gắn bó kì lạ với kí ức tuổi thơ thuở lên sáu, của một cậu bé lớn lên trong cô độc vì xung quanh không có một ai hiểu được mình. Cũng giống như cậu hoàng tử bé sống một mình trên tiểu hành tinh B612 bé nhỏ, cùng với ba ngọn núi lửa, trong đó một ngọn đã tắt, và một bông hoa hồng đỏm dáng. Được cậu coi sóc chăm bẵm hết mực, nhưng bông hoa vẫn thường xuyên tỏ ra cáu bẳn, khó chịu. Không hiểu duyên cớ vì đâu, cậu rất đỗi hoang mang, buồn rầu, và quyết định du hành sang các hành tinh khác để tìm kiếm một người bạn.",
    "NXB Phụ nữ"
  )
);
data.products.push(
  new Product(
    32,
    "Hỡi Những Người Tiên Phong",
    100000,
    10,
    require("../assets/images/Van_hoc/hoi-nhung-nguoi-tien-phong.jpg"),
    "Thieu_nhi",
    "Những mâu thuẫn trong mối quan hệ giữa cá nhân vói xã hội luôn là chủ đề thường trực trong văn hóa Mỹ nói chung, trong văn học Mỹ nói riêng. Nước Mỹ đã luôn phải vật lộn với sự mất cân bằng giữa tính cá nhân và tính cộng đồng, giữa những ước mơ riêng tư và giấc mơ Mỹ vĩ đại.",
    "NXB Phụ nữ"
  )
);

//Văn hóa và du lịch
data.products.push(
  new Product(
    33,
    "Lũ trẻ đường tàu",
    100000,
    10,
    require("../assets/images/Van_hoc/lu-tre-duong-tau.jpg"),
    "vh_dl",
    "Kỳ thực chúng nào phải là trẻ đường tàu. Tôi đoán chừng là chúng chưa từng lăn tăn gì về đường tàu ngoại trừ ấy là phương tiện đưa chúng tới Maskelyne và Cooke để xem ảo thuật, coi kịch câm pantomime, đi chơi vườn bách thảo, và tham quan bảo tàng tượng sáp Madame Tussaud. Chúng chỉ là những đứa trẻ ngoại ô bình thường, sống cùng cha mẹ trong một căn biệt thự bình thường có mặt tiền ốp gạch đỏ, cửa ra vào lắp kính màu, một lối đi lát gạch gọi là hành lang, một phòng tắm có nước nóng lạnh, chuông điện, cửa sổ kiểu Pháp, tường quét vôi trắng, và “mọi tiện nghi hiện đại”, theo ngôn ngữ của cánh môi giới nhà đất.",
    "NXB Thanh niên"
  )
);
data.products.push(
  new Product(
    34,
    "Lớn lên trên đảo vắng",
    100000,
    10,
    require("../assets/images/Van_hoc/lon-len-tren-dao-vang.jpg"),
    "vh_dl",
    "Lớn lên trên đảo vắng được viết bởi nhà văn Johann David Wyss - người đã được truyền cảm hứng từ tác phẩm Robinson Crusoe của Daniel Defoe. Nhưng Wyss muốn viết một câu chuyện chứa đựng những bài học thú vị, bổ ích về cuộc sống thiên nhiên hoang dã dành riêng cho trẻ em, nên đã cho ra đời tiểu thuyết Lớn lên trên đảo vắng. Tác phẩm được xuất bản lần đầu tiên bằng tiếng Đức năm 1812 và đã trở thành một trong những tác phẩm được yêu thích nhất của trẻ em trên toàn thế giới.",
    "NXB Thanh niên"
  )
);
data.products.push(
  new Product(
    35,
    "Hoàng Tử Bé",
    100000,
    10,
    require("../assets/images/Van_hoc/hoang-tu-be-kho-nho.jpg"),
    "vh_dl",
    "Toàn bộ cuộc hành trình của cậu được tác giả kể lại với một tình cảm yêu mến chứa chan, như một mối nhân duyên gắn bó kì lạ với kí ức tuổi thơ thuở lên sáu, của một cậu bé lớn lên trong cô độc vì xung quanh không có một ai hiểu được mình. Cũng giống như cậu hoàng tử bé sống một mình trên tiểu hành tinh B612 bé nhỏ, cùng với ba ngọn núi lửa, trong đó một ngọn đã tắt, và một bông hoa hồng đỏm dáng. Được cậu coi sóc chăm bẵm hết mực, nhưng bông hoa vẫn thường xuyên tỏ ra cáu bẳn, khó chịu. Không hiểu duyên cớ vì đâu, cậu rất đỗi hoang mang, buồn rầu, và quyết định du hành sang các hành tinh khác để tìm kiếm một người bạn.",
    "NXB Phụ nữ"
  )
);
data.products.push(
  new Product(
    36,
    "Hỡi Những Người Tiên Phong",
    100000,
    10,
    require("../assets/images/Van_hoc/hoi-nhung-nguoi-tien-phong.jpg"),
    "vh_dl",
    "Những mâu thuẫn trong mối quan hệ giữa cá nhân vói xã hội luôn là chủ đề thường trực trong văn hóa Mỹ nói chung, trong văn học Mỹ nói riêng. Nước Mỹ đã luôn phải vật lộn với sự mất cân bằng giữa tính cá nhân và tính cộng đồng, giữa những ước mơ riêng tư và giấc mơ Mỹ vĩ đại.",
    "NXB Phụ nữ"
  )
);
data.products.push(
  new Product(
    37,
    "Lũ trẻ đường tàu",
    100000,
    10,
    require("../assets/images/Van_hoc/lu-tre-duong-tau.jpg"),
    "vh_dl",
    "Kỳ thực chúng nào phải là trẻ đường tàu. Tôi đoán chừng là chúng chưa từng lăn tăn gì về đường tàu ngoại trừ ấy là phương tiện đưa chúng tới Maskelyne và Cooke để xem ảo thuật, coi kịch câm pantomime, đi chơi vườn bách thảo, và tham quan bảo tàng tượng sáp Madame Tussaud. Chúng chỉ là những đứa trẻ ngoại ô bình thường, sống cùng cha mẹ trong một căn biệt thự bình thường có mặt tiền ốp gạch đỏ, cửa ra vào lắp kính màu, một lối đi lát gạch gọi là hành lang, một phòng tắm có nước nóng lạnh, chuông điện, cửa sổ kiểu Pháp, tường quét vôi trắng, và “mọi tiện nghi hiện đại”, theo ngôn ngữ của cánh môi giới nhà đất.",
    "NXB Thanh niên"
  )
);
data.products.push(
  new Product(
    38,
    "Lớn lên trên đảo vắng",
    100000,
    10,
    require("../assets/images/Van_hoc/lon-len-tren-dao-vang.jpg"),
    "vh_dl",
    "Lớn lên trên đảo vắng được viết bởi nhà văn Johann David Wyss - người đã được truyền cảm hứng từ tác phẩm Robinson Crusoe của Daniel Defoe. Nhưng Wyss muốn viết một câu chuyện chứa đựng những bài học thú vị, bổ ích về cuộc sống thiên nhiên hoang dã dành riêng cho trẻ em, nên đã cho ra đời tiểu thuyết Lớn lên trên đảo vắng. Tác phẩm được xuất bản lần đầu tiên bằng tiếng Đức năm 1812 và đã trở thành một trong những tác phẩm được yêu thích nhất của trẻ em trên toàn thế giới.",
    "NXB Thanh niên"
  )
);
data.products.push(
  new Product(
    39,
    "Hoàng Tử Bé",
    100000,
    10,
    require("../assets/images/Van_hoc/hoang-tu-be-kho-nho.jpg"),
    "vh_dl",
    "Toàn bộ cuộc hành trình của cậu được tác giả kể lại với một tình cảm yêu mến chứa chan, như một mối nhân duyên gắn bó kì lạ với kí ức tuổi thơ thuở lên sáu, của một cậu bé lớn lên trong cô độc vì xung quanh không có một ai hiểu được mình. Cũng giống như cậu hoàng tử bé sống một mình trên tiểu hành tinh B612 bé nhỏ, cùng với ba ngọn núi lửa, trong đó một ngọn đã tắt, và một bông hoa hồng đỏm dáng. Được cậu coi sóc chăm bẵm hết mực, nhưng bông hoa vẫn thường xuyên tỏ ra cáu bẳn, khó chịu. Không hiểu duyên cớ vì đâu, cậu rất đỗi hoang mang, buồn rầu, và quyết định du hành sang các hành tinh khác để tìm kiếm một người bạn.",
    "NXB Phụ nữ"
  )
);
data.products.push(
  new Product(
    40,
    "Hỡi Những Người Tiên Phong",
    100000,
    10,
    require("../assets/images/Van_hoc/hoi-nhung-nguoi-tien-phong.jpg"),
    "vh_dl",
    "Những mâu thuẫn trong mối quan hệ giữa cá nhân vói xã hội luôn là chủ đề thường trực trong văn hóa Mỹ nói chung, trong văn học Mỹ nói riêng. Nước Mỹ đã luôn phải vật lộn với sự mất cân bằng giữa tính cá nhân và tính cộng đồng, giữa những ước mơ riêng tư và giấc mơ Mỹ vĩ đại.",
    "NXB Phụ nữ"
  )
);


data.users.push(new User(1, "user1", "123456"));



export default data;
