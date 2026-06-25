# TaiRoblox Blox Fruit - GitHub Pages Static

Bộ mã này là bản static GitHub Pages được chuyển từ HTML bài viết TaiRoblox.

## Cấu trúc

```txt
.
├── index.html
├── README.md
├── robots.txt
├── sitemap.xml
├── .nojekyll
└── assets/
    ├── github-fix.css
    └── github-fix.js
```

## Cách deploy lên GitHub Pages

1. Tạo repository mới trên GitHub.
2. Upload toàn bộ file trong thư mục này lên root của repository.
3. Đảm bảo `index.html` nằm ngoài cùng repo.
4. Vào **Settings → Pages**.
5. Chọn **Deploy from a branch**.
6. Chọn branch `main` và folder `/root`.
7. Bấm **Save**.

## Cần sửa sau khi deploy

Mở `robots.txt` và `sitemap.xml`, đổi `USERNAME` thành username GitHub thật của bạn.

Ví dụ:

```txt
https://USERNAME.github.io/tairoblox-blox-fruit/
```

đổi thành:

```txt
https://tairobloxcom.github.io/tairoblox-blox-fruit/
```

## Ghi chú kỹ thuật

- Đã xóa admin bar WordPress, link `/wp-admin/`, class `logged-in/admin-bar`.
- Giữ CSS Flatsome public từ `tairoblox.com` để giao diện giống web gốc.
- Thêm `assets/github-fix.css` và `assets/github-fix.js` để fix giao diện static.
- Nút tải trong bản GitHub Pages là nút điều hướng về trang gốc, vì GitHub Pages là hosting tĩnh và không nên phụ thuộc trực tiếp vào API tải động.
- Nếu website gốc đổi/chặn asset, ảnh hoặc CSS hotlink có thể cần local hóa về thư mục `assets/`.
