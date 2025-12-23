import { useState } from "react"

function Login() {
  const [loading, setLoading] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [error, setError] = useState("")

  function validatePhoneNumber(number) {
    // شماره موبایل ایران: 11 رقم، با 09 شروع می‌شود
    return /^09\d{9}$/.test(number)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setError("")
    if (!validatePhoneNumber(phoneNumber)) {
      setError("شماره موبایل معتبر نمی باشد!")
      return
    }
    setLoading(true)
    setTimeout(() => {
      localStorage.setItem("token", "fake-token")
      window.location.href = "/"
    }, 1200)
  }

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, "").slice(0, 11)
    setPhoneNumber(value)
    if (error && validatePhoneNumber(value)) {
      setError("")
    }
  }

  return (
    <div className="min-h-screen bg-[#0f0f10] flex items-center justify-center">
      <form
        className="flex flex-col p-8 mx-auto w-full max-w-md md:bg-[#141416] rounded-xl md:border md:border-zinc-600 text-white"
        onSubmit={submitHandler}
        noValidate>
        {/* logo */}
        <div className="flex justify-center items-center">
          <span className="text-2xl font-bold mb-6">ایرانیکارت</span>
        </div>

        {/* Title */}
        <h2 className="text-lg text-center mb-2!">ورود | ثبت نام</h2>
        <p className="text-right">لطفا شماره موبایل خود را وارد نمایید</p>

        {/* Input */}
        <input
          className={`w-full text-right bg-transparent border ${
            error ? "border-red-500" : "border-[#2a2a2e]"
          } rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500 my-4 transition-colors`}
          type="tel"
          value={phoneNumber}
          onChange={handleInputChange}
          placeholder="مثال: 09137983097"
          disabled={loading}
          autoFocus
        />
        {error && <p className="text-red-500 text-xs mb-2!">{error}</p>}

        {/* Button */}
        <button
          className={`text-blue-900 bg-blue-200 cursor-pointer rounded my-1 py-3 font-medium transition-opacity ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={loading}>
          {loading ? "...در حال ارسال" : "ورود"}
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-4!">
          ورود شما به معنای پذیرش
          <span className="text-blue-400 cursor-pointer hover:underline">
            {" "}
            حریم خصوصی و قوانین{" "}
          </span>
          است
        </p>
      </form>
    </div>
  )
}

export default Login
