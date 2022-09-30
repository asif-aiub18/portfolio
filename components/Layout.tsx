import Link from "next/link";
import React from "react";


import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="dark:bg-darkBg dark:text-white min-h-screen">
      <nav className="flex flex-wrap justify-end gap-x-2 md:gap-x-10 p-8">
        <Link href={`/`}>Home</Link>
        <Link href={`/about`}>About</Link>
        <Link href={`/works`}>Works</Link>
        <Link href={`/blogs`}>Blogs</Link>
        <Link href={`/contact`}>Contact</Link>
      </nav>
      <div className="p-10 flex flex-col-reverse justify-center md:flex-row gap-x-10">
        <div className="flex justify-center md:justify-start md:flex-col gap-4 md:fixed md:top-[55%] md:left-[3rem] md:h-[45%] md:after:contents-[''] md:after:bg-[#47528f] md:after:inline-block md:after:absolute md:after:left-[0.6rem] md:after:w-[1px] md:after:h-[100%] md:after:top-[14rem]">
          <Link href={`https://github.com/asif-aiub18`} passHref>
            <a aria-label="Github" target="_blank">
              <FaGithub className="h-6 w-6 cursor-pointer" />
            </a>
          </Link>
          <Link href={`https://instagram.com/who_is_asif`} passHref>
            <a aria-label="Instagram" target="_blank">
              <FaInstagram className="h-6 w-6 cursor-pointer" />
            </a>
          </Link>
          <Link href={`https://facebook.com/anowert2020`} passHref>
            <a aria-label="Facebook" target="_blank">
              <FaFacebook className="h-6 w-6 cursor-pointer" />
            </a>
          </Link>
          <Link href={`https://twitter.com/asif_anower24`} passHref>
            <a aria-label="Twitter" target="_blank">
              <FaTwitter className="h-6 w-6 cursor-pointer" />
            </a>
          </Link>
          <Link href={`https://t.me/asifanower`} passHref>
            <a aria-label="Telegram" target="_blank">
              <FaTelegram className="h-6 w-6 cursor-pointer" />
            </a>
          </Link>
        </div>
        <div className="max-w-[1200px] mb-10 md:px-16 flex-grow">
          {children}
        </div>
        <div className="fixed top-[30%] right-[3rem] h-[40%] after:contents-[''] after:bg-[#47528f] after:inline-block after:absolute after:right-[0.6rem] after:w-[1px] after:h-[100%] after:top-[18rem] hidden md:block">
          <Link href={`mailto:asifanower24@gmail.com`} passHref>
            <a className="text-sm leading-[1]">
              {Array.from("asifanower24@gmail.com").map((l, i) => (
                <div className="rotate-90" key={i}>
                  {l}
                </div>
              ))}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
  <div>
    {/* <!-- Messenger Chat Plugin Code --> */}
    <div id="fb-root"></div>

    {/* <!-- Your Chat Plugin code --> */}
    <div id="fb-customer-chat" className="fb-customerchat">
    </div>

    <script>
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "105748935642377");
      chatbox.setAttribute("attribution", "biz_inbox");
    </script>

    {/* <!-- Your SDK code --> */}
    <script>
      window.fbAsyncInit = function() {
        // FB.init({
        //   xfbml            : true,
        //   version          : 'v15.0'
        // })
      };

      (function(d, s, id) 
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      (document, 'script', 'facebook-jssdk'));
    </script>
  </div>
};

export default Layout;
