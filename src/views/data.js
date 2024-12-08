// Product class
class Product {
  constructor(id, name, gia, sale = 0, image, the_loai, mo_ta, nxb) {
    this.id = id;
    this.name = name;
    this.gia = gia;
    this.sale = sale;
    this.image = image;
    this.the_loai = the_loai;
    this.mo_ta = mo_ta;
    this.nxb = nxb;
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

// OrderItem class
class OrderItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
  getTotalPrice() {
    return this.product.getDiscountedPrice() * this.quantity;
  }
}

// Order class
class Order {
  constructor(id, user, items = []) {
    this.id = id;
    this.user = user;
    this.items = items;
    this.total = 0;
  }

  calculateTotal() {
    this.total = this.items.reduce(
      (sum, item) => sum + item.getTotalPrice(),
      0
    );
    return this.total;
  }

  addItem(product, quantity) {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new OrderItem(product, quantity));
    }
    this.calculateTotal();
  }
}

class Data {
  constructor() {
    this.products = [];
    this.users = [];
    this.orders = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  addUser(user) {
    this.users.push(user);
  }

  addOrder(order) {
    this.orders.push(order);
  }

  getProductById(id) {
    return this.products.find((product) => product.id === id);
  }

  getUserById(id) {
    return this.users.find((user) => user.id === id);
  }

  getOrderById(id) {
    return this.orders.find((order) => order.id === id);
  }

  filterProductsByCategory(category) {
    return this.products.filter((product) => product.isCategory(category));
  }

  removeProductById(id) {
    this.products = this.products.filter((product) => product.id !== id);
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
    "NXB Thanh niên"
  )
);
data.products.push(
  new Product(
    2,
    "Lớn lên trên đảo vắng",
    100000,
    10,
    require("../assets/images/Van_hoc/lon-len-tren-dao-vang.jpg"),
    "Van_hoc",
    "Lớn lên trên đảo vắng được viết bởi nhà văn Johann David Wyss - người đã được truyền cảm hứng từ tác phẩm Robinson Crusoe của Daniel Defoe. Nhưng Wyss muốn viết một câu chuyện chứa đựng những bài học thú vị, bổ ích về cuộc sống thiên nhiên hoang dã dành riêng cho trẻ em, nên đã cho ra đời tiểu thuyết Lớn lên trên đảo vắng. Tác phẩm được xuất bản lần đầu tiên bằng tiếng Đức năm 1812 và đã trở thành một trong những tác phẩm được yêu thích nhất của trẻ em trên toàn thế giới.",
    "NXB Thanh niên"
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
    "NXB Phụ nữ"
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
    "NXB Phụ nữ"
  )
);

// Kinh Tế 
data.products.push(
  new Product(
    5,
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
    6,
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
    7,
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
    8,
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
    9,
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
    10,
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
    11,
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
    12,
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
    13,
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
    14,
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
    15,
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
    16,
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
    17,
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
    18,
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
    19,
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
    20,
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
