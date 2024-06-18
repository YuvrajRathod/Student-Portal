import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center border-top bg-dark mt-5">
        <div className="col-12 d-flex align-items-center justify-content-center px-3">
          <p className="text-center text-muted p-0 m-0 pt-2 pb-1">
            Made With
            <i className="bi bi-heart-fill p-0 m-0 px-1" style={{ width: 28, height: 25, "color": "red" }}></i>By
            <a href="https://www.linkedin.com/in/yuvraj-rathod-380798183/" className='px-1 text-muted' rel="noopener noreferrer" target={"_blank"}>Yuvraj Rathod</a>
          </p>
        </div>
        <div className="col-12 d-flex align-items-center justify-content-center px-3">
          <p className="text-center text-muted p-0 m-0 py-1">
            Contact Us: 
            <a href="https://mail.google.com/mail/u/0/#inbox" className='text-muted' rel="noopener noreferrer" target={"_blank"}>yuvrajsanjayrathod@gmail.com</a>
          </p>
        </div>
        <ul className="col-12 d-flex justify-content-center align-items-center list-unstyled p-0 m-0 px-3 pb-2 pt-1">
          {/* <li><a className="text-muted" href="/" rel="noopener noreferrer" target={"_blank"}><i className="bi bi-twitter"></i></a></li> */}
          <li className="ms-3"><a className="text-muted" href="https://github.com/YuvrajRathod" rel="noopener noreferrer" target={"_blank"}><i className="bi bi-github"></i></a></li>
          <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/yuvraj_rathod26/" rel="noopener noreferrer" target={"_blank"}><i className="bi bi-instagram"></i></a></li>
          <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/Yuvraj2603/" rel="noopener noreferrer" target={"_blank"}><i className="bi bi-facebook"></i></a></li>
        </ul>
      </footer>
    </>
  )
}
