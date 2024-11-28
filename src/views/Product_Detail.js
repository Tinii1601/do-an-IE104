import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDiv1: true,
      showDiv2: false,
      showDiv3: false,
    };
  }

  render() {
    return (
      <>
        <div className="relative z-20">
          <Header />
        </div>
        <div className="my-5 mx-10 h-auto bg-white p-5">
          <p className="text-2xl font-bold ml-5">Hai Vạn Dặm Dưới Biển</p>
          <div className="flex ">
            <div className="basis-3/5">
              <div className="relative px-4 py-2">
                <img
                  className="absolute w-1/2 mt-5 left-1/4"
                  src={require("../assets/images/hai-van-dam-duoi-bien-tb-2024.jpg")}
                />
                <div>
                  <img
                    className="w-24 cursor-pointer"
                    src={require("../assets/images/hai-van-dam-duoi-bien-tb-2024.jpg")}
                  />
                  <img
                    className="w-24 cursor-pointer"
                    src={require("../assets/images/hai-van-dam-duoi-bien-tb-2024.jpg")}
                  />
                  <img
                    className="w-24 cursor-pointer"
                    src={require("../assets/images/hai-van-dam-duoi-bien-tb-2024.jpg")}
                  />
                  <img
                    className="w-24 cursor-pointer"
                    src={require("../assets/images/hai-van-dam-duoi-bien-tb-2024.jpg")}
                  />
                </div>
              </div>
              <div className="my-5 px-4 py-2">
                <div className="flex gap-4">
                  <div
                    className="cursor-pointer"
                    onClick={
                      (this.handleClick1 = () => {
                        if (!this.state.showDiv1)
                          this.setState({ showDiv1: true });
                        if (this.state.showDiv2)
                          this.setState({ showDiv2: false });
                        if (this.state.showDiv3)
                          this.setState({ showDiv3: false });
                      })
                    }
                  >
                    Mô tả sản phẩm
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={
                      (this.handleClick2 = () => {
                        if (!this.state.showDiv2)
                          this.setState({ showDiv2: true });
                        if (this.state.showDiv1)
                          this.setState({ showDiv1: false });
                        if (this.state.showDiv3)
                          this.setState({ showDiv3: false });
                      })
                    }
                  >
                    Thông tin chi tiết
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={
                      (this.handleClick3 = () => {
                        if (!this.state.showDiv3)
                          this.setState({ showDiv3: true });
                        if (this.state.showDiv1)
                          this.setState({ showDiv1: false });
                        if (this.state.showDiv2)
                          this.setState({ showDiv2: false });
                      })
                    }
                  >
                    Đánh giá của khách hàng
                  </div>
                </div>
                <hr />
                {this.state.showDiv1 && (
                  <div>
                    <p>
                      Tác phẩm nổi tiếng thế giới là kết tinh trí tuệ và tri
                      thức của các tác giả, nó có sức hút bất diệt, ảnh hưởng
                      đến nhiều thế hệ. Tuy nhiên đối với trẻ mà nói, phần lớn
                      những tác phẩm văn học kinh điển nổi tiếng đều rất hấp dẫn
                      và chứa đựng nội dung sâu sắc. Do vậy, chúng tôi đã căn cứ
                      vào lứa tuổi và đặc điểm tâm lý của các em để tiến hành
                      biên soạn lại những tác phẩm văn học kinh điển nổi tiếng.
                    </p>
                    <p>
                      Hai Vạn Dặm Dưới Biển kể về câu chuyện thám hiểm đại dương
                      của giáo sư Aronnax. Thông qua chuyến đi tìm “quái vật
                      trên biển”, cuốn sách miêu tả thế giới rộng lớn dưới đáy
                      đại dương. Ở đó có đồng bằng, rừng rậm, nghĩa địa dưới đáy
                      biển, thế giới châu báu, châu lục và lâu đài cổ bị nhấn
                      chìm… Verne còn dùng ngòi bút thần kỳ của mình tạo ra rất
                      nhiều tình huống nguy hiểm, khiến câu chuyện này càng sinh
                      động và lôi cuốn hơn.
                    </p>
                    <p>
                      Ngôn ngữ bình dị, lời văn mạch lạc, tình tiết sinh động,
                      phù hợp với các em nhỏ, giúp các em cảm nhận được sức hút
                      của văn học và niềm vui. Ngoài ra, chúng tôi còn xen kẽ
                      rất nhiều tranh vẽ minh họa để các em có thể cảm nhận được
                      tác phẩm văn học kinh điển một cách đơn giản và gần gũi
                      nhất.
                    </p>
                  </div>
                )}
                {this.state.showDiv2 && (
                  <div>
                    <table>
                      <tr>
                        <td>Loại sản phẩm: </td> <td>Bìa mềm</td>
                      </tr>
                      <tr>
                        <td>Kích thước: </td> <td>20.5 x 14.5 x 2.2 cm</td>
                      </tr>
                      <tr>
                        <td>Năm Xuất Bản: </td> <td>2024</td>
                      </tr>
                      <tr>
                        <td>Số trang: </td> <td>432</td>
                      </tr>
                      <tr>
                        <td>Tác giả: </td> <td>Jules Verne</td>
                      </tr>
                      <tr>
                        <td>Dịch giả: </td> <td>Đỗ Ca Sơn</td>
                      </tr>
                      <tr>
                        <td>Nhà Xuất Bản: </td> <td>NXB Văn Học</td>
                      </tr>
                      <tr>
                        <td>Đơn Vị Liên Kết Xuất Bản: </td>
                        <td>Đinh Tị Books</td>
                      </tr>
                    </table>
                  </div>
                )}
                {this.state.showDiv3 && <div>Phần bình luận</div>}
              </div>
            </div>
            <div className="basis-2/5 py-4 px-8 shadow-xl rounded-lg h-fit ">
              <p className="text-xl font-bold">99,000 đ</p>
              <p className="text-xanh">Trạng thái: Còn hàng</p>
              <div className="flex gap-4 my-4">
                <div className="flex gap-2 text-xl shadow-inner w-fit py-2 px-4 rounded-full border border-gray-400">
                  <button> - </button>
                  <p>1</p>
                  <button> + </button>
                </div>
                <button className="bg-cam hover:bg-orange-700 text-white text-xl font-bold py-2 px-10 rounded-full">
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ProductDetail;
