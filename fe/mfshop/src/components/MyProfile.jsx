import React, { useState } from 'react';

function MyProfile() {
  // Lấy dữ liệu người dùng từ sessionStorage
  const [user] = useState(JSON.parse(sessionStorage.getItem('user')));

  // Xử lý thay đổi hình ảnh đại diện
  const handleAvatarChange = (event) => {
    // Xử lý logic thay đổi hình ảnh đại diện ở đây
  };

  // Xử lý thay đổi mật khẩu
  const handleChangePassword = (event) => {
    // Xử lý logic thay đổi mật khẩu ở đây
  };

  return (
    <div className="dashboard-content" style={{ margin: '0 200px 100px 200px' }}>
      {/* Titlebar */}
      <div className="row">
        <div className="col-md-12">
          <h2>My Profile</h2>
          {/* Breadcrumbs */}
          <nav>
            <ul className="breadcrumb">
              <li><a href="/home">Home</a></li>
              <li>My Profile</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="row">
        {/* Profile */}
        <div className="col-lg-6 col-md-12">
          <div className="dashboard-list-box margin-top-0">
            <h4 className="gray">Profile Details</h4>
            <div className="dashboard-list-box-static">
              <form onSubmit={handleAvatarChange} encType="multipart/form-data">
                {/* Avatar */}
                <div className="edit-profile-photo">
                  <img src={user.avatar} alt="" style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
                  <div className="change-photo-btn">
                    <div className="photoUpload">
                      <span><i className="fa fa-upload"></i> Upload Photo</span>
                      <input name="avatar" type="file" accept="image/*" className="upload" />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="my-profile">
                  <label>Your Name</label>
                  <input name="fullname" value={user.user_Name} type="text" className="form-control" />
                  <label>Phone</label>
                  <input name="phone" value={user.phone_Number} type="text" className="form-control" />
                  <label>Email</label>
                  <input name="email" value={user.email} type="text" className="form-control" />
                </div>
                <span style={{ color: 'green' }}>{/* Thông báo thành công */}</span><br />
                <button className="btn btn-primary margin-top-15">Save Changes</button>
              </form>
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="col-lg-6 col-md-12">
          <div className="dashboard-list-box margin-top-0">
            <h4 className="gray">Change Password</h4>
            <div className="dashboard-list-box-static">
              <div className="my-profile">
                <form onSubmit={handleChangePassword}>
                  <label className="margin-top-0">Current Password</label>
                  <input name="current_password" type="password" className="form-control" />
                  <label>New Password</label>
                  <input name="new_password" type="password" className="form-control" />
                  <label>Confirm New Password</label>
                  <input name="confirm_password" type="password" className="form-control" />
                  <p style={{ color: 'red' }}>{/* Thông báo lỗi */}</p>
                  <button className="btn btn-primary margin-top-15">Change Password</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
