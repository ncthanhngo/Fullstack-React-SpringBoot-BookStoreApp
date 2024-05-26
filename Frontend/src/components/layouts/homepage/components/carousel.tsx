import React from "react";

function Carousel() {
    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <div className="row align-items-center me-5">
                            <div className="col-5 text-center ">
                                <img src={require('./../../../../assets/images/books/1.png')} className="float-end" style={{width:'150px'}} />
                            </div>
                            <div className="col-7">
                                <h5>Cổ tích Việt Nam băng thơ</h5>
                                <p>Cổ Tích Việt Nam Bằng Thơ - cuốn truyện thơ tập hợp các tác phẩm kinh điển trong kho tàng cổ tích Việt Nam như Thánh Gióng, Tấm Cám, Thạch Sanh… Những câu chuyện đã được bao thế hệ người Việt thuộc nằm lòng nay được chuyển sang thể thơ năm chữ dưới ngòi bút của tác giả Thái Bá Tân với minh hoạ kì công của hoạ sĩ Chu Linh Hoàng. Những nét vẽ ấm áp, thuần Việt, như được phủ một màn sương cổ tích, nên thơ trong cuốn sách này sẽ đưa bạn tìm về những câu chuyện dân gian xa xưa, thân thuộc, và ẩn chứa nhiều bài học nhân sinh sâu sắc.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="10000">
                        <div className="row align-items-center me-5">
                            <div className="col-5 text-center">
                                <img src={require('./../../../../assets/images/books/2.png')} className="float-end" style={{width:'150px'}} />
                            </div>
                            <div className="col-7">
                                <h5>Bộ Công Cụ Nâng Cao Hiệu Suất Làm Việc Nhóm</h5>
                                <p >"Bộ công cụ nâng cao hiệu suất làm việc nhóm" là cuốn sách nhấn mạnh vào quy trình của đội ngũ và cách mà mỗi nhân viên nhìn nhận về môi trường làm việc. Các tác giả không chỉ đưa ra hướng dẫn theo từng bước để hỗ trợ đội ngũ quản trị dự án, mà còn giải thích về lợi ích của những chính sách, quy trình quản trị để bảo vệ sức khỏe tâm lý cho nhân viên, cho phép các đội ngũ học hỏi và đổi mới.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="10000">
                        <div className="row align-items-center me-5">
                            <div className="col-5 text-center">
                                <img src={require('./../../../../assets/images/books/3.png')} className="float-end" style={{width:'150px'}} />
                            </div>
                            <div className="col-7">
                                <h5>First slide label</h5>
                                <p>ở Nevermoor, một bệnh dịch đáng sợ ập đến, nó không ngừng lây nhiễm giữa những người lai, biến họ thành động vật vô tri vô giác. Cả thành phố Nevermoor rơi vào trạng thái hoang mang, hoảng loạn vì dịch bệnh Trống rỗng kỳ quái, bí hiểm mỗi lúc một lan rộng, đe dọa sự sống của tất cả cư dân. Morrigan sớm nhận ra chính cô phải dấn thân vào cuộc tìm kiếm phương pháp điều trị và chấm dứt bệnh dịch Trống rỗng, cứu lấy thành phố mà cô vô cùng yêu quý.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;