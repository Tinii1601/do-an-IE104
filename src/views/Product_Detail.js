import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProductTabs = ({ showTab, setShowTab }) => {
  const tabs = [
    { id: 1, label: "Mô tả sản phẩm" },
    { id: 2, label: "Thông tin chi tiết" },
    { id: 3, label: "Đánh giá của khách hàng" },
  ];

  return (
    <div className="flex gap-4">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`cursor-pointer ${showTab === tab.id
            ? "border-b-2 border-xanh"
            : "hover:border-b-2 hover:border-gray-300"
            }`}
          onClick={() => setShowTab(tab.id)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

const CustomerReviews = ({ comments, addComment }) => {
  const [newComment, setNewComment] = useState("");

  return (
    <div>
      <h3 className="text-xl font-bold">Đánh giá của khách hàng</h3>
      <div className="my-4">
        {comments.map((comment, index) => (
          <div key={index} className="border-b border-gray-300 pb-4 mb-4">
            <p className="font-semibold">{comment.name}</p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
      <div>
        <h4 className="text-lg font-semibold">Viết đánh giá của bạn</h4>
        <textarea
          className="w-full border border-gray-300 p-2 rounded-lg"
          rows="4"
          placeholder="Nhập đánh giá của bạn tại đây..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="bg-cam hover:bg-orange-700 text-white text-lg font-bold py-2 px-4 rounded-full mt-2"
          onClick={() => {
            if (newComment.trim()) {
              addComment({ name: "Khách hàng", text: newComment });
              setNewComment("");
            }
          }}
        >
          Gửi đánh giá
        </button>
      </div>
    </div>
  );
};

const ProductDetail = ({ products }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const { id } = useParams(); // Lấy 'id' từ URL
  const [product, setProduct] = useState(null);
  const [showTab, setShowTab] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [comments, setComments] = useState([ // Khởi tạo bình luận mặc định
    {
      name: "Nguyễn Văn A",
      text: "Cuốn sách rất hay và bổ ích. Rất đáng để đọc!",
    },
    { name: "Trần Thị B", text: "Nội dung hấp dẫn, phù hợp với mọi lứa tuổi." },
    { name: "Lê Văn C", text: "Chất lượng in ấn tốt, giao hàng nhanh chóng." },
  ]);

  useEffect(() => {
    // Tìm sản phẩm từ mảng products theo id
    const selectedProduct = products.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(selectedProduct);
  }, [id, products]);

  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>;
  }

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      alert("Bạn cần đăng nhập để thêm vào giỏ hàng!");
      navigate("/login");
      return;
    }
    addToCart(product, quantity); // Gọi luôn, không phụ thuộc điều kiện
  };

  const addComment = (comment) => setComments([...comments, comment]);

  return (
    <>
      <div className="relative z-20">
        <Header />
      </div>
      <div className="my-5 mx-10 h-auto bg-white p-5">
        <p className="text-2xl font-bold ml-5 my-4">{product.name}</p>
        <div className="flex">
          <div className="w-3/5">
            <img src={product.image} className="w-3/5 mx-14 my-5" alt={product.name} />
            <div className="my-5 px-4 py-2">
              <ProductTabs showTab={showTab} setShowTab={setShowTab} />
              <hr className="my-5" />
              {showTab === 1 && <p>{product.mo_ta}</p>}
              {showTab === 2 && <p>Phần thông tin chi tiết ...</p>}
              {showTab === 3 && (
                <CustomerReviews comments={comments} addComment={addComment} />
              )}
            </div>
          </div>
          <div className="fixed right-16 bg-white py-4 px-8 shadow-xl rounded-3xl border border-gray-400 h-fit">
            <p className="text-xl font-bold">
              {product.getDiscountedPrice()} đ
            </p>
            <p className="text-xanh">Trạng thái: Còn hàng</p>
            <div className="flex gap-4 my-4">
              <div className="flex gap-2 text-xl shadow-inner w-fit py-2 px-4 rounded-full border border-gray-400">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  {" "}
                  -{" "}
                </button>
                <p>{quantity}</p>
                <button onClick={() => setQuantity(quantity + 1)}> + </button>
              </div>
              <button className="bg-cam hover:bg-orange-700 text-white text-xl font-bold py-2 px-10 rounded-full"
                onClick={handleAddToCart}>
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
