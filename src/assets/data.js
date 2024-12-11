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

  addUser(id, username, password) {
    this.users.push(new User(id, username, password));
  }

  list_products_by_category(category) {
    return this.products.filter((product) => product.isCategory(category));
  }

  list_products_checkbox(category, publishers = [], prices = [], formats = [], sortOption = "") {
    return this.products.filter((product) => {
      // Kiểm tra điều kiện Thể loại
      const matchCategory = product.isCategory(category)

      // Kiểm tra điều kiện Nhà xuất bản
      const matchPublisher =
        publishers.length === 0 || publishers.includes(product.nxb);

      // Kiểm tra điều kiện Giá
      const isPriceMatch = (priceRange, price) => {
        if (priceRange === "Dưới 100000đ") return price < 100000;
        if (priceRange === "100000đ - 200000đ") return price >= 100000 && price <= 200000;
        if (priceRange === "Trên 200000đ") return price > 200000;
        return false;
      };

      const matchPrice =
        prices.length === 0 || prices.some((priceRange) => isPriceMatch(priceRange, product.gia));

      // Kiểm tra điều kiện Hình thức
      const matchFormat =
        formats.length === 0 || formats.includes(product.hinh_thuc);

      // Trả về sản phẩm nếu tất cả các điều kiện đều khớp
      return matchCategory && matchPublisher && matchPrice && matchFormat;
    }).sort((a, b) => {
      if (sortOption === "Khuyến mãi") return b.sale - a.sale;
      if (sortOption === "Giá tăng dần") return a.gia - b.gia;
      if (sortOption === "Giá giảm dần") return b.gia - a.gia;
      return 0;
    });
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
    130000,
    15,
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
    180000,
    20,
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
    0,
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
    "NXB Phụ nữ",
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
    185000,
    20,
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
    139000,
    10,
    require("../assets/images/Kinh_te/Tiktok-makerting.jpg"),
    "Kinh_te",
    "TikTok đang bùng nổ ở mọi nơi và đã trở thành một trong những ứng dụng được tải xuống nhiều nhất thế giới. Không có gì ngạc nhiên khi các nhà tiếp thị đã bắt đầu nhìn thấy tiềm năng của nền tảng này. Kinh doanh đi cùng với xu hướng thì mới có thể phát triển và tiếp cận gần hơn với nhiều tập khách hàng. TikTok đã thu hút được sự chú ý lớn từ nhiều nhà kinh doanh khi mạng xã hội này có thể tạo ra những content vô cùng đặc sắc, đồng thời còn là một kênh marketing hiệu quả",
    "NXB Thanh niên",
    "Bìa mềm",
    "13 x 20 cm",
    272,
    "Markus Rach",
  )
);
data.products.push(
  new Product(
    10,
    "Nhà lãnh đạo tương lai",
    160000,
    10,
    require("../assets/images/Kinh_te/nha-lanh-dao-tuong-lai.jpg"),
    "Kinh_te",
    "Quyển sách là tập hợp những kiến thức và kinh nghiệm uyên thâm của những nhà tư tưởng hàng đầu đến từ nhiều lĩnh vực khác nhau như kinh tế tư nhân, hoạt động xã hội, chính quyền, giáo dục, quân sự,… như Peter F. Drucker, Peter Senge, R. Roosevelt Jr., Charles Hardy, Stephen R. Covey,… Độc giả sẽ cảm nhận được những dòng tư tưởng tuôn trào của những nhà lãnh đạo tương lai, là biểu hiện của trí tuệ, khả năng phán đoán, kỹ năng phân tích vấn đề và óc quan sát. Họ không hài lòng với những vết xe cũ mà luôn tiên phong tìm kiếm những lối đi mới để mở ra những chân trời mới với những cơ hội, những thử thách và những biến đổi – thông điệp cho một ngày mới bắt đầu. Cuốn sách là một “tiếng hô xông trận” nhằm kích thích, động viên tinh thần những nhà lãnh đạo tương lai cùng góp sức xây dựng nên những mô hình tổ chức theo đúng với nhu cầu xã hội đặt ra và phát triển bền vững cùng với thời đại.",
    "NXB Trẻ",
    "Bìa cứng",
    "13 x 20 cm",
    272,
    "Markus Rach",
  )
);
data.products.push(
  new Product(
    11,
    "Thế giới alibaba của jack ma",
    140000,
    10,
    require("../assets/images/Kinh_te/the-gioi-alibaba-cua-jack-ma.jpg"),
    "Kinh_te",
    "Tháng 9 năm 2014, một công ty Trung Quốc mà hầu hết người Mỹ chưa từng nghe nói tới đã tổ chức cuộc lên sàn niêm yết lần đầu (IPO) lớn nhất trong lịch sử – lớn hơn Google, Facebook và Twitter cộng lại. Alibaba, giờ đây là công ty thương mại điện tử lớn nhất thế giới, gần như thoát khỏi nhận biết của phương Tây suốt cả chục năm, trong khi đó xây dựng một cơ sở khách hàng lớn hơn gấp đôi quy mô cơ sở khách hàng của Amazon, và xử lý một lượng giao dịch thương mại điện tử khổng lồ ở Trung Quốc. Chuyện này đã xảy ra như thế nào? Và nó theo cùng với công cuộc cải cách như thế nào?",
    "NXB Trẻ",
    "Bìa mềm",
    "13 x 20 cm",
    272,
    "Markus Rach",
  )
);
data.products.push(
  new Product(
    12,
    "Digital Branding - Định danh trong thời đại số",
    175000,
    20,
    require("../assets/images/Kinh_te/digital-branding-dinh-danh-trong-thoi-dai-so.jpg"),
    "Kinh_te",
    "Digital branding là một hoạt động nằm trong khái niệm marketing nói chung. Mục tiêu của hoạt động này là xây dựng mối quan hệ tốt đẹp giữa doanh nghiệp và khách hàng (từ nhận diện thương hiệu, tin tưởng thương hiệu tới trung thành với thương hiệu) trên môi trường Internet.",
    "NXB Phụ nữ",
    "Bìa cứng",
    "13 x 20 cm",
    272,
    "Markus Rach",
  )
);
data.products.push(
  new Product(
    13,
    "Bán hàng trên Amazon từ A đến Z",
    97000,
    0,
    require("../assets/images/Kinh_te/ban-hang-tren-amazon-tu-a-z.jpg"),
    "Kinh_te",
    "Amazon là website thương mại điện tử số một thế giới hiện nay (về B2C – Bán lẻ), là một “chợ” có sức tiêu thụ khổng lồ. Hiện nay, Amazon đã có mặt ở khoảng 20 quốc gia phát triển nhất thế iới. Mới đây Amazon đã đặt văn phòng đại diện ở Việt Nam tại thành phố Hồ Chí Minh, điều đó chứng minh Việt Nam là một thị trường cực kì tiềm năng, đáng để đầu tư lâu dài của Tập đoàn Amazon.",
    "NXB Phụ nữ",
    "Bìa mềm",
    "15.5 x 23.5 cm",
    234,
    "Giàng Thuận Ý"
  )
);
data.products.push(
  new Product(
    14,
    "Binh pháp tôn tử trong quản lý",
    170000,
    10,
    require("../assets/images/Kinh_te/nha-lanh-dao-tuong-lai.jpg"),
    "Kinh_te",
    "Binh pháp Tôn Tử là bộ sách lược về chiến thuật trinh chiến do Tôn Tử biên soạn từ thời Xuân Thu. Đây là một trong những bộ sách hàng đầu khi bàn đến kế hoạch chiến lược và những binh pháp được nhắc đến trong bộ sách cũng được áp dụng linh hoạt trong nhiều lĩnh vực khác nhau. Cuốn sách Binh Pháp Tôn Tử Trong Quản Lý sẽ sử dụng các “chiêu thức” này vào công việc quản lý, điều hành doanh nghiệp, giúp xác định phương hướng pháp triển và cách thức đạt được thành công.",
    "NXB Thanh niên",
    "Bìa cứng",
    "14.5 x 20.5 cm",
    568,
    "Hoàng Xuyên"
  )
);
data.products.push(
  new Product(
    15,
    "Bí quyết đàm phán để nắm bắt mọi thương vụ",
    110000,
    10,
    require("../assets/images/Kinh_te/bi-quyet-dam-phan-de-nam-bat-moi-thuong-vu.jpg"),
    "Kinh_te",
    "Khi theo đuổi thành công trên thương trường, mỗi người cần biết vận dụng những kĩ năng đàm phán để tạo ra cơ hội kinh doanh, chẳng hạn như đàm phán khi tìm nguồn vốn, đàm phán trong giao dịch, tiêu thụ, thậm chí đàm phán hợp đồng giữa hai bên chủ và thợ.",
    "NXB Thanh niên",
    "Bìa mềm",
    "17 x 23 cm",
    275,
    "Trần Dục Đình",
  )
);
data.products.push(
  new Product(
    16,
    "Hướng nội sức mạnh tiềm ẩn trong bán hàng",
    150000,
    10,
    require("../assets/images/Kinh_te/huong-noi-suc-manh-tiem-an-trong-ban-hang.jpg"),
    "Kinh_te",
    "Digital branding là một hoạt động nằm trong khái niệm marketing nói chung. Mục tiêu của hoạt động này là xây dựng mối quan hệ tốt đẹp giữa doanh nghiệp và khách hàng (từ nhận diện thương hiệu, tin tưởng thương hiệu tới trung thành với thương hiệu) trên môi trường Internet.",
    "NXB Thanh niên",
    "Bìa cứng",
    "13 x 20 cm",
    272,
    "Markus Rach",
  )
);

// Kỹ Năng sống
data.products.push(
  new Product(
    17,
    "Dũng cảm tiến lên",
    66000,
    10,
    require("../assets/images/Ky_nang_song/dung-cam-tien-len.jpg"),
    "Ky_nang_song",
    "Dũng Cảm Tiến Lên - 7 Bước Thay Đổi Bản Thân không phải là một cuốn sách dạy kĩ năng sống thông thường. Cuốn sách dẫn lối bạn trong hành trình tìm kiếm một phong cách sống vì tâp thể, vì cộng đồng, môt phong cách sống hoàn thiện và trọn vẹn hơn qua câu chuyện về khóa học tự trưởng thành của chàng thanh niên Matsuda Yuji, với nền tảng xuyên suốt là lí thuyết Tâm lí học cá nhân của Alfred Adler.",
    "NXB Thanh niên",
    "Bìa mềm",
    "13 x 20 cm",
    272,
    "Markus Rach",
  )
);
data.products.push(
  new Product(
    18,
    "Gieo mầm tính cách tha thứ",
    28000,
    0,
    require("../assets/images/Van_hoc/lon-len-tren-dao-vang.jpg"),
    "Ky_nang_song",
    "Tính cách của trẻ được hình thành từ rất sớm, thông qua sự giáo dục trong gia đình, qua những việc làm, lời nói, cách ứng xử của những người xung quanh. Nhưng ở độ tuổi nhỏ, không thể ép trẻ phát triển tính cách theo ý muốn của cha mẹ bằng lời dạy dỗ suông, bằng những bài học đạo đức khô khan, mà những tấm gương đẹp về tính cách đó phải được gieo vào trẻ từ từ bằng những câu chuyện sinh động, hấp dẫn.",
    "NXB Trẻ",
    "Bìa mềm",
    "13 x 20 cm",
    272,
    "Nhiều tác giả",
  )
);
data.products.push(
  new Product(
    19,
    "5 bài học để đời",
    120000,
    10,
    require("../assets/images/Ky_nang_song/5-bai-hoc-de-doi.jpg"),
    "Ky_nang_song",
    "Tác giả John Izzo đã phỏng vấn hơn 200 người, có độ tuổi trong khoảng từ 60 – 106, mỗi người đều do một người bạn hoặc người quen cho rằng “đang sống một cuộc đời trọn vẹn và ý nghĩa.” Từ người thợ cắt tóc trong vùng cho đến những người sống sót sau cuộc thảm sát Holocaust, từ các đầu bếp cho đến CEO, toàn bộ những người này đã có hơn 18.000 năm kinh nghiệm sống. John Izzo đưa ra những câu hỏi như, “Điều gì khiến bạn cảm thấy hạnh phúc nhất? Điều gì mà bạn ước mình học được sớm hơn? Điều gì cực kỳ quan trọng và điều gì không hề quan trọng trong cuộc sống?” Ở đây, John Izzo chia sẻ những câu chuyện – hài hước, cảm động, sâu sắc – của họ và 5 Bài Học Để Đời dần lộ diện.",
    "NXB Phụ nữ",
    "Bìa cứng",
    "13 x 20 cm",
    272,
    "Markus Rach",
  )
);
data.products.push(
  new Product(
    20,
    "Không phải thiếu may mắn chỉ là chưa cố gắng",
    180000,
    10,
    require("../assets/images/Ky_nang_song/khong-phai-thieu-may-man-chi-la-chua-co-gang.jpg"),
    "Ky_nang_song",
    "Những mâu thuẫn trong mối quan hệ giữa cá nhân vói xã hội luôn là chủ đề thường trực trong văn hóa Mỹ nói chung, trong văn học Mỹ nói riêng. Nước Mỹ đã luôn phải vật lộn với sự mất cân bằng giữa tính cá nhân và tính cộng đồng, giữa những ước mơ riêng tư và giấc mơ Mỹ vĩ đại.",
    "NXB Thanh niên",
    "Bìa cứng",
    "13 x 20 cm",
    272,
    "Markus Rach",
  )
);
data.products.push(
  new Product(
    21,
    "Ăn được hay đừng ăn",
    55000,
    10,
    require("../assets/images/Ky_nang_song/ki-nang-song-cho-hoc-sinh-an-duoc-hay-dung-an.jpg"),
    "Ky_nang_song",
    "Rất nhiều khi lại gợi lên trong trẻ sự tò mò và phản kháng ngấm ngầm. Bạn vừa quay lưng, trẻ lập tức “khám phá” những gì bị ngăn cấm. Và khi gặp nguy hiểm, trong sợ hãi, trẻ không biết phải làm gì. Phải làm thế nào để trẻ ý thức được đâu là an toàn và đâu là nguy hiểm? Và một điều quan trọng nữa, phải làm thế nào khi rơi vào tình huống nguy hiểm?",
    "NXB Phụ nữ",
    "Bìa mềm",
    "13 x 20 cm",
    272,
    "Markus Rach",
  )
);
data.products.push(
  new Product(
    22,
    "Khéo léo dùng công cụ",
    55000,
    10,
    require("../assets/images/Ky_nang_song/ki-nang-song-cho-hoc-sinh-kheo-leo-dung-cong-cu.jpg"),
    "Ky_nang_song",
    "Rất nhiều khi lại gợi lên trong trẻ sự tò mò và phản kháng ngấm ngầm. Bạn vừa quay lưng, trẻ lập tức “khám phá” những gì bị ngăn cấm. Và khi gặp nguy hiểm, trong sợ hãi, trẻ không biết phải làm gì. Phải làm thế nào để trẻ ý thức được đâu là an toàn và đâu là nguy hiểm? Và một điều quan trọng nữa, phải làm thế nào khi rơi vào tình huống nguy hiểm?",
    "NXB Phụ nữ",
    "Bìa mềm",
    "13 x 20 cm",
    272,
    "Markus Rach",
  )
);
data.products.push(
  new Product(
    23,
    "Tai nạn và phòng tránh",
    55000,
    10,
    require("../assets/images/Ky_nang_song/ki-nang-song-cho-hoc-sinh-tai-nan-va-phong-tranh.jpg"),
    "Ky_nang_song",
    "Rất nhiều khi lại gợi lên trong trẻ sự tò mò và phản kháng ngấm ngầm. Bạn vừa quay lưng, trẻ lập tức “khám phá” những gì bị ngăn cấm. Và khi gặp nguy hiểm, trong sợ hãi, trẻ không biết phải làm gì. Phải làm thế nào để trẻ ý thức được đâu là an toàn và đâu là nguy hiểm? Và một điều quan trọng nữa, phải làm thế nào khi rơi vào tình huống nguy hiểm?",
    "NXB Phụ nữ",
    "Bìa mềm",
    "13 x 20 cm",
    272,
    "Markus Rach",
  )
);
data.products.push(
  new Product(
    24,
    "Nghệ thuật hợp tác thầy trò",
    45000,
    0,
    require("../assets/images/Ky_nang_song/nghe-thuat-hop-tac-thay-tro.jpg"),
    "Ky_nang_song",
    "Cái hay của bài học nhiều khi không nằm trong sách vở mà đến từ chính sự giảng dạy của người thầy - thông qua phương pháp và cách nhìn nhận vấn đề của thầy - khiến trò tìm thấy động lực và hứng thú trong học tập, mà tiếp thu, vận dụng theo tư duy kết nối thầy - trò. Bài học của thầy rồi trò có thể quên nhưng cách thức và quan điểm thì sẽ thấm sâu, rất sâu, cho tới nhiều năm sau khi trò trưởng thành, những ảnh hưởng đó vẫn còn tác động đến trò trong cách đối nhân xử thế và con đường sự nghiệp. Hay có thể nói sự hợp tác giữa Thầy và Trò hôm nay có ảnh hưởng đến tương lai của trò chứ không chỉ là chuyện học hành trong lớp, hiểu bài, làm được bài và thi đậu. Vì vậy, sự hợp tác đó không là mối quan hệ xã hội đơn thuần hay phương pháp học, phương pháp dạy, mà là một nghệ thuật - Nghệ thuật hợp tác Thầy-Trò.",
    "NXB Trẻ",
    "Bìa mềm",
    "13 x 20 cm",
    272,
    "Markus Rach",
  )
);

// Thiếu Nhi
data.products.push(
  new Product(
    25,
    "500 câu chuyện tình mẫu tử",
    13500,
    0,
    require("../assets/images/Sach_thieu_nhi/500-cau-chuyen-tinh-mau-tu.jpg"),
    "Thieu_nhi",
    "Chuyện kể là một phương pháp giáo dục tuyệt vời. Trong từng câu chuyện, người ta thường đặt ra những tình huống thú vị và đưa ra cách giải quyết những tình huống đó. Để giúp thanh thiếu niên có những câu chuyện giáo dục hay, NXB Trẻ hân hạnh giới thiệu bộ sách 500 câu chuyện đạo đức. Tập Tình mẫu tử gồm 14 câu chuyện cảm động về tình mẹ con",
    "NXB Trẻ",
    "Bìa mềm",
    "13 x 20 cm",
    95,
    "Nguyễn Hạnh",
  )
);
data.products.push(
  new Product(
    26,
    "Các trường học vòng quanh thế giới",
    60000,
    10,
    require("../assets/images/Sach_thieu_nhi/cac-truong-hoc-vong-quanh-the-gioi.jpg"),
    "Thieu_nhi",
    "Tất cả các ngôi trường, thầy cô giáo và các bạn nhỏ được miêu tả trong cuốn sách đều là thật. Họ đã đưa đến một góc nhìn chân thực về trường học trên thế giới. Thật may mắn vì họ đã rộng lòng chia sẻ ước vọng, khát khao và trải nghiệm với tôi.",
    "NXB Phụ nữ",
    "Bìa mềm",
    "13 x 20 cm",
    95,
    "Nguyễn Hạnh",
  )
);
data.products.push(
  new Product(
    27,
    "Cơn gió và mặt trời",
    25000,
    10,
    require("../assets/images/Sach_thieu_nhi/con-gio-va-mat-troi.jpg"),
    "Thieu_nhi",
    "Cơn Gió Và Mặt Trời nằm trong chuỗi truyện Usborne Fist Reading, được biên soạn dành riêng cho lứa tuổi mới học đọc và được tư vấn bởi bản thảo Alison Kelly, giảng viên cao cấp và chuyên ngành đọc hiểu tại Roehampton.Những câu chuyện hấp dẫn được kết hợp với tranh minh họa rực rỡ và cốt truyện đơn giản chắc chắn sẽ tạo ra sự vui thích và nguồn cảm hứng cho các bé mới bắt đầu tập đọc.",
    "NXB Trẻ",
    "Bìa mềm",
    "13 x 20 cm",
    95,
    "Nguyễn Hạnh",
  )
);
data.products.push(
  new Product(
    28,
    "Cuốn sách khổng lồ về các loại động vật biển",
    150000,
    10,
    require("../assets/images/Sach_thieu_nhi/cuon-sach-khong-lo-ve-cac-loai-dong-vat-bien.jpg"),
    "Thieu_nhi",
    "Cuốn sách có kích thước khổng lồ sẽ mở ra một thế giới đại dương rộng lớn trước mắt bé. Những loài động vật dưới biển to lón như cá voi, thân thiện như cá heo, nho nhỏ như ốc, cua, cá hề,… đều xuất hiện trong cùng 1 trang sách. Các bé có thể thỏa sức khám phá trọn vẹn một gia đình động vật dưới biển mà không bị giới hạn bởi kích thước của trang sách!",
    "NXB Thanh niên",
    "Bìa cứng",
    "13 x 20 cm",
    95,
    "Nguyễn Hạnh",
  )
);
data.products.push(
  new Product(
    29,
    "Một ngày làm công chúa",
    52000,
    10,
    require("../assets/images/Sach_thieu_nhi/mot-ngay-lam-cong-chua.jpg"),
    "Thieu_nhi",
    "Cuốn sách dẫn dắt các em thiếu nhi vào một thế giới mà trong đó các em sẽ được đóng vai công chúa, được tham dự những bữa tiệc khiêu vũ hoành tráng, được sống trong những lâu đài tráng lệ, và ăn tối cùng hoàng tử đẹp trai.",
    "NXB Trẻ",
    "Bìa mềm",
    "13 x 20 cm",
    95,
    "Nguyễn Hạnh",
  )
);
data.products.push(
  new Product(
    30,
    "Cuộc xâm lăng của chim cách cụt",
    25000,
    0,
    require("../assets/images/Sach_thieu_nhi/nhung-nguoi-ban-cuc-ngau-cuoc-xam-lang-cua-chim-canh-cut.jpg"),
    "Thieu_nhi",
    "Cuộc sống quanh ta luôn ẩn chứa biết bao điều thú vị, nhưng cũng có không ít khó khăn và thử thách. Bộ sách Những người bạn cực ngầu này gồm 12 câu chuyện, kể về mười hai nhân vật khác nhau, mỗi nhân vật đều có những nét tính cách đáng yêu và đặc biệt: chú bé Zayn dễ thương và hiếu động, cô bé Lovely xinh xắn, đáng yêu nhưng nhút nhát, cậu bé Liam thông minh và dễ nổi nóng, chú rồng nhỏ Draco dũng cảm và đầy quyết tâm, cô cá heo Hailey tốt bụng hay ông lão Grumpy cau có… Mỗi nhân vật đều có những vấn đề khó khăn của riêng mình, nhưng họ đã luôn cố gắng và nỗ lực để trở nên tốt hơn. Những câu chuyện về họ hấp dẫn, thú vị và mang đến cho chúng ta nhiều bài học bổ ích về cuộc sống.",
    "NXB Thanh niên",
    "Bìa mềm",
    "13 x 20 cm",
    95,
    "Nguyễn Hạnh",
  )
);
data.products.push(
  new Product(
    31,
    "Tớ tìm hiểu nghề nhà khoa học",
    15000,
    0,
    require("../assets/images/Sach_thieu_nhi/to-tim-hieu-nghe-nha-khoa-hoc.jpg"),
    "Thieu_nhi",
    "Bộ sách Tớ Tìm Hiểu Nghề giúp bạn nhỏ hiểu thêm về các ngành nghề, biết ước mơ và nuôi dưỡng ước mơ. Nghề nào cũng hay cũng đẹp, giúp ích cho cộng đồng, cho xã hội. Vì thế, ai làm tốt trách nhiệm nghề nghiệp đều là người hùng.",
    "NXB Trẻ",
    "Bìa mềm",
    "13 x 20 cm",
    95,
    "Nguyễn Hạnh",
  )
);
data.products.push(
  new Product(
    32,
    "Sự tích khoai lang",
    16000,
    0,
    require("../assets/images/Sach_thieu_nhi/su-tich-khoai-lang.jpg"),
    "Thieu_nhi",
    "Từ thuở ấu thơ, các em nhỏ đã được biết đến những câu chuyện cổ tích qua lời kể của bà. của mẹ. Đó là một thế giới vô cùng hấp dẫn, lôi cuốn với biết bao tình tiết li kỳ, những bài học giáo dục nhẹ nhàng nhưng tác động mạnh mẽ trong việc bồi dưỡng tâm hồn trẻ thơ.",
    "NXB Phụ nữ",
    "NXB Trẻ",
    "Bìa mềm",
    "13 x 20 cm",
    95,
    "Nguyễn Hạnh",
  )
);

//Văn hóa và du lịch
data.products.push(
  new Product(
    33,
    "30 cô gái can đảm thay đổi thế giới trước tuổi 20",
    155000,
    10,
    require("../assets/images/Van_hoa_du_lich/30-co-gai-can-dam-thay-doi-the-gioi-truoc-tuoi-20.jpg"),
    "vh_dl",
    "Làm thay đổi thế giới nghe có vẻ là chuyện lớn lao, đáng kinh ngạc và chỉ dành cho các vị lãnh đạo của các quốc gia hay thủ lĩnh của các phong trào chính trị. Nhưng sự thay đổi thực ra lại đơn giản. Nó diễn ra từ từ, từng chút, từng chút một. Sự thay đổi không phải là một quả cầu tuyết khổng lồ lăn xuống đồi với tốc độ chóng mặt – nó là những bông tuyết nhẹ bay trên núi. Qủa cầu tuyết chẳng là gì nếu không có những bông tuyết và những bông tuyết chẳng là gì nếu không xuất hiện cùng nhau.",
    "NXB Phụ nữ",
    "Bìa cứng",
    "13 x 20 cm",
    150,
    "Jennifer Calvert",
  )
);
data.products.push(
  new Product(
    34,
    "Nước Nhật nhìn từ những thứ bình thường",
    100000,
    10,
    require("../assets/images/Van_hoa_du_lich/nuoc-nhat-nhin-tu-nhung-thu-binh-thuong.jpg"),
    "vh_dl",
    "Nước Nhật Nhìn Từ Những Thứ Bình Thường gồm 26 bài viết ghi lại những trải nghiệm và cảm nghĩ về nước Nhật, người Nhật trong 8 năm tác giả sống ở Nhật. Với góc nhìn từ những thứ bình thường ở Nhật: đường sá, nhà ga tàu điện ngầm, những cánh rừng trong thành phố, những trường mầm non thân thiện…, tác giả phân tích lý do vì sao Nước Nhật từ một đất nước chiến bại có thể có bước tiến trở thành nước Nhật thần kì như ngày này đó chính là nỗ lực thay đổi từ những thứ bình thường nhỏ bé. Về trách nhiệm công dân và tinh thần tự nhiệm của Người Nhật trong việc kiến tạo xã hội văn minh.",
    "NXB Phụ nữ",
    "Bìa cứng",
    "13 x 20 cm",
    150,
    "Jennifer Calvert",
  )
);
data.products.push(
  new Product(
    35,
    "Phụ nữ Ê Đê trong xã hội mẫu hệ",
    100000,
    10,
    require("../assets/images//Van_hoa_du_lich/phu-nu-ede-trong-xa-hoi-mau-he.jpg"),
    "vh_dl",
    "Đã từ rất lâu, người Êđê có mặt ở khắp miền Trung Tây Nguyên, và chủ yếu là ở tỉnh Đăk Lắk. Nguồn gốc dân tộc xuất phát từ nhóm Mã Lai, và được in dấu qua các trang sử thi. Và Tây Nguyên là vùng đất nổi tiếng bởi vẻ đẹp đặc trưng của miền cao nguyên, bởi văn hóa đậm đà bản sắc dân tộc. Nổi bật nhất là chế độ mẫu hệ của người Êđê.",
    "NXB Phụ nữ",
    "Bìa mềm",
    "13 x 20 cm",
    150,
    "Jennifer Calvert",
  )
);
data.products.push(
  new Product(
    36,
    "Nếp cũ - Bó hoa Bắc Việt - thú vui tao nhã",
    200000,
    10,
    require("../assets/images/Van_hoa_du_lich/nep-cu-bo-hoa-bac-viet-thu-vui-tao-nha.jpg"),
    "vh_dl",
    "Bộ sách Nếp cũ gồm: Con người Việt Nam; Tín ngưỡng Việt Nam; Làng xóm Việt Nam; Hộ hè đình đám, Hương nước hồn quê, Bó hoa Bắc Việt, Thú vui tao nhã... của tác giả Toan Ánh, Nhà xuất bản Trẻ mong được cung cấp cho người đọc những hiểu biết cần thiết về cội nguồn của dân tộc, về những phong  tục, tập quán, lễ nghĩa phong hóa xưa nay của ông cha ta.",
    "NXB Trẻ",
    "Bìa mềm",
    "15.5 x 23 x 1.5 cm",
    376,
    "Toan Ánh",
  )
);
data.products.push(
  new Product(
    37,
    "Nếp cũ - Cầm - Kỳ - Thi - Họa",
    225000,
    10,
    require("../assets/images/Van_hoa_du_lich/nep-cu-cam-ky-thi-hoa.jpg"),
    "vh_dl",
    "Bộ sách Nếp cũ gồm: Con người Việt Nam; Tín ngưỡng Việt Nam; Làng xóm Việt Nam; Hộ hè đình đám, Hương nước hồn quê, Bó hoa Bắc Việt, Thú vui tao nhã... của tác giả Toan Ánh, Nhà xuất bản Trẻ mong được cung cấp cho người đọc những hiểu biết cần thiết về cội nguồn của dân tộc, về những phong  tục, tập quán, lễ nghĩa phong hóa xưa nay của ông cha ta.",
    "NXB Trẻ",
    "Bìa mềm",
    "15.5 x 23 x 1.5 cm",
    376,
    "Toan Ánh",
  )
);
data.products.push(
  new Product(
    38,
    "Nếp cũ - Làng xóm Việt Nam",
    205000,
    10,
    require("../assets/images/Van_hoa_du_lich/nep-cu-lang-xom-viet-nam.jpg"),
    "vh_dl",
    "Bộ sách Nếp cũ gồm: Con người Việt Nam; Tín ngưỡng Việt Nam; Làng xóm Việt Nam; Hộ hè đình đám, Hương nước hồn quê, Bó hoa Bắc Việt, Thú vui tao nhã... của tác giả Toan Ánh, Nhà xuất bản Trẻ mong được cung cấp cho người đọc những hiểu biết cần thiết về cội nguồn của dân tộc, về những phong  tục, tập quán, lễ nghĩa phong hóa xưa nay của ông cha ta.",
    "NXB Trẻ",
    "Bìa mềm",
    "15.5 x 23 x 1.5 cm",
    376,
    "Toan Ánh",
  )
);
data.products.push(
  new Product(
    39,
    "Nếp cũ - Hương nước hồn quê",
    230000,
    10,
    require("../assets/images/Van_hoa_du_lich/nep-cu-huong-nuoc-hon-que.jpg"),
    "vh_dl",
    "Bộ sách Nếp cũ gồm: Con người Việt Nam; Tín ngưỡng Việt Nam; Làng xóm Việt Nam; Hộ hè đình đám, Hương nước hồn quê, Bó hoa Bắc Việt, Thú vui tao nhã... của tác giả Toan Ánh, Nhà xuất bản Trẻ mong được cung cấp cho người đọc những hiểu biết cần thiết về cội nguồn của dân tộc, về những phong  tục, tập quán, lễ nghĩa phong hóa xưa nay của ông cha ta.",
    "NXB Trẻ",
    "Bìa mềm",
    "15.5 x 23 x 1.5 cm",
    376,
    "Toan Ánh",
  )
);
data.products.push(
  new Product(
    40,
    "Nếp cũ - Con người Việt Nam",
    210000,
    10,
    require("../assets/images/Van_hoa_du_lich/nep-cu-con-nguoi-viet-nam.jpg"),
    "vh_dl",
    "Bộ sách Nếp cũ gồm: Con người Việt Nam; Tín ngưỡng Việt Nam; Làng xóm Việt Nam; Hộ hè đình đám, Hương nước hồn quê, Bó hoa Bắc Việt, Thú vui tao nhã... của tác giả Toan Ánh, Nhà xuất bản Trẻ mong được cung cấp cho người đọc những hiểu biết cần thiết về cội nguồn của dân tộc, về những phong  tục, tập quán, lễ nghĩa phong hóa xưa nay của ông cha ta.",
    "NXB Trẻ",
    "Bìa mềm",
    "15.5 x 23 x 1.5 cm",
    376,
    "Toan Ánh",
  )
);


data.users.push(new User(1, "user1", "123456"));



export default data;
