# Hệ thống học tập trực tuyến OPENBK

Chào mừng bạn đến với **Hệ thống học tập trực tuyến OPENBK**. Đây là một nền tảng học trực tuyến được xây dựng nhằm cung cấp các khóa học đa dạng và môi trường học tập tương tác. Dưới đây là mô tả chi tiết về các chức năng và công nghệ mà hệ thống sử dụng.

## Chức năng của hệ thống

### 1. **Tạo tài khoản và đăng nhập**
   - Người dùng có thể đăng ký tài khoản mới và đăng nhập vào hệ thống.
   - Đăng nhập sử dụng JWT (JSON Web Tokens) và Cookies để xác thực và duy trì phiên làm việc.

### 2. **Guest User**
   - Người dùng không đăng nhập (guest user) có thể xem thông tin chi tiết của các khóa học có sẵn trên hệ thống nhưng không thể tham gia vào các khóa học hoặc thực hiện các hành động quản lý.

### 3. **Learner Role (Học viên)**
   - Người dùng với quyền học viên có thể:
     - Tham gia các khóa học có sẵn.
     - Xem bài kiểm tra của khóa học.
     - Quản lý các khóa học đã đăng ký, theo dõi tiến độ học tập.

### 4. **Collaborator Role (Giảng viên)**
   - Người dùng với quyền giảng viên có thể:
     - Tạo khóa học mới với các đơn vị học (unit).
     - Mỗi đơn vị học có thể chứa các câu hỏi (question) cho bài kiểm tra.
     - Quản lý các khóa học đã tạo, chỉnh sửa nội dung khóa học.

## Công nghệ sử dụng

- **Frontend**: Next.js
  - Next.js là framework React phổ biến giúp xây dựng các ứng dụng web nhanh chóng và hiệu quả. Nó hỗ trợ server-side rendering, tối ưu hóa SEO và đảm bảo trải nghiệm người dùng mượt mà.
  
- **Backend**: Node.js
  - Node.js được sử dụng để xây dựng server, xử lý các yêu cầu HTTP và giao tiếp với cơ sở dữ liệu PostgreSQL.

- **Cơ sở dữ liệu**: PostgreSQL
  - PostgreSQL được sử dụng làm cơ sở dữ liệu chính để lưu trữ thông tin về người dùng, khóa học, đơn vị học, câu hỏi và các thông tin liên quan.

- **Authentication**: JWT và Cookies
  - JWT được sử dụng để xác thực người dùng khi đăng nhập, đảm bảo tính bảo mật và cho phép người dùng duy trì phiên làm việc.
  - Cookies giúp lưu trữ token JWT trên trình duyệt và giúp người dùng duy trì trạng thái đăng nhập.

## Cách chạy dự án

Để chạy dự án này trên máy của bạn, bạn cần làm theo các bước sau:

### Bước 1: Cài đặt các phụ thuộc
Dự án sử dụng `npm` hoặc `pnpm` để quản lý các phụ thuộc. Bạn có thể chọn một trong hai phương pháp dưới đây.

- **Sử dụng npm**:
    ```bash
    npm install
    ```

- **Sử dụng pnpm**:
    ```bash
    pnpm install
    ```

### Bước 2: Cấu hình cơ sở dữ liệu
- Tạo một cơ sở dữ liệu PostgreSQL mới.
- Cấu hình các thông tin kết nối cơ sở dữ liệu trong tệp `.env` (ví dụ: `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`).
- Chạy các câu lệnh để tạo bảng trong cơ sở dữ liệu.
  
### Bước 3: Chạy ứng dụng
Sau khi cài đặt và cấu hình thành công, bạn có thể chạy ứng dụng bằng cách sử dụng lệnh dưới đây:

- **Sử dụng npm**:
    ```bash
    npm run dev
    ```

- **Sử dụng pnpm**:
    ```bash
    pnpm dev
    ```

Ứng dụng sẽ được khởi chạy tại `http://localhost:3000`.

## Kết luận

Hệ thống học tập trực tuyến OPENBK là một nền tảng học trực tuyến mạnh mẽ với các chức năng linh hoạt cho các loại người dùng khác nhau như guest, learner và collaborator. Bằng việc sử dụng các công nghệ hiện đại như Next.js, Node.js, PostgreSQL và JWT, hệ thống không chỉ cung cấp trải nghiệm người dùng tuyệt vời mà còn đảm bảo tính bảo mật và hiệu suất cao.

Chúng tôi hy vọng bạn sẽ có những trải nghiệm học tập tốt nhất trên OPENBK!

