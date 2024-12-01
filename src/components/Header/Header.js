import React from "react";
import "./Header.css";
import homelogo from '../../assets/home_icon.png';
import setting from '../../assets/setting.png';
import signOut from '../../assets/sign-out.png';


function Header() {
  return (
    <header className="header">
      <div>
        <h1 className="breadcrumb">Chat / Feed chat</h1>
      </div>
      <div className="header-right">
        <img src={homelogo} alt="Logo" className="icons"/>
        <span className="badge yellow">Process Owner HOD</span>
        <span className="badge pink">Admin</span>
        <span className="user-name">Palak Bansal</span>
        <div className="user-avatar">
          <img
            src="https://s3-alpha-sig.figma.com/img/28d1/418c/98ac8b5440b32e95a31a25f0b7d349ac?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ph8qsfchd8kUORZ2Ynl5BwkJOLb8N4lat4q5~31RomchuWqE3oPiZmszcAjnytEoY45ukX5cVcpznQGaeqW-MrBB~vy-tsqpfxX3Xy-T6wk3aW5hm8cG5kIPUtdQ9MMcCacIYQwxZS3HF4mLeZ59rTv4Dm3Ej5nIe7PNx2tZexgTomkHvmX3YLJFGzcv5hxdqPKDA2W8kOt3So9YjFJ~QnWHl~IVeY39xhFn7~sCSUAwXtQjh1ApJiCjPj8ai9-wuNgl6HwYoUph9ObMuOlRhZ9rcT6Bt8OjIKX8QMzHnVYAt8~6T0~PyvYSLEkcsazbHhXTr0kA56QpalFAw9FxeQ__" // Replace with actual profile picture URL
            alt="User Avatar"
          />
        </div>
        <img src={setting} alt="setting-icon" className="icons" />
        <div className="log-out">
          <img src={signOut} alt="signout" className="icons" />
          <button className="logout-button">Logout</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
