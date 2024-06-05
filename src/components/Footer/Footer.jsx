import React from "react";
import styles from "../../styles";
import { footerLinks, socialMedia } from "../../constants";
const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.id}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className=" font-medium text-[18px]  leading-[27px]">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className=" font-medium text-[18px]  leading-[27px]">
              Newsletter
            </h4>
            <form className="w-full flex justify-space items-center my-2 p-1 bg-primary rounded `">
              <input
                type="text"
                className="bg-transparent text-[14px] px-1"
                placeholder="Enter email"
              />
              <input
                type="submit"
                className="inline-block p-2 rounded-md cursor-pointer bg-red-400 "
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
