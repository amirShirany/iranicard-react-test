import React, { useState } from "react"

function Login() {
  const [loading, setloading] = useState(false)

  return (
    <div>
      <h1>ایرانیکارت</h1>
      <h2>ورود/ثبت نام</h2>
      <p>لطفا شماره موبایل خود را وارد نمایید</p>
      <input type="text" placeholder="مثال : 09137983097" />
      <button>ورود</button>
      <p>
        .ورود شما به معنای پذیرش شرایط استفاده و اظهارنامه حریم خصوصی است
      </p>
    </div>
  )
}

export default Login
