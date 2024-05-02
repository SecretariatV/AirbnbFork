import S from "./beforeHeader.module.scss";
import { VscSettings } from "react-icons/vsc";
import { MdOutlineSearch } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { Logo } from "@features/accessories";
import { useEffect, useState } from "react";
import clsx from "clsx";

export const BeforeHeader = () => {
  const [hide, setHide] = useState<boolean>(false);

  useEffect(() => {
    const scrollEvent = () => {
      if (window.scrollY > 50) {
        setHide(true);
      } else {
        setHide(false);
      }
    };

    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <div className={S.body}>
      <div className={S.wrapper}>
        <button className={S.miniWhereBtn}>
          <span className={S.search}>
            <MdOutlineSearch size={20} />
          </span>
          <span className={S.searchPad}>
            <div className={S.title}>Where to?</div>
            <div className={S.list}>
              <span>Anywhere</span>
              <span>·</span>
              <span>Any week</span>
              <span>·</span>
              <span>Add guests</span>
            </div>
          </span>
        </button>
        <button className={S.miniFilterBtn}>
          <VscSettings size={16} />
        </button>
      </div>
      <header>
        <div className={S.logo}>
          <Logo width="40px" fontSize="10px" />
        </div>
        <div className={clsx(S.where, hide && S.hide)}>
          <div className={S.whereWrapper}>
            <div className={S.pannel}>
              <div className={S.header}>
                <button>Stays</button>
                <button>Experiences</button>
                <button>Online Experiences</button>
              </div>
              <div className={S.inputs}>
                <div className={S.inputWrapper}>
                  <div className={S.destination}>
                    <label htmlFor="bigsearch-input">
                      <div>Where</div>
                      <input
                        type="search"
                        id="bigsearch-input"
                        placeholder="Search destinations"
                      />
                    </label>
                  </div>
                  <div className={S.border}></div>
                  <div className={S.check}>
                    <h4>a</h4>
                    <h4>b</h4>
                  </div>
                  <div className={S.border}></div>
                  <div className={S.guests}>
                    <h4>c</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(S.anywhere, !hide && S.hide)}>
          <button className={S.position}>Anywhere</button>
          <button className={S.week}>Any week</button>
          <button className={S.guest}>Add guests</button>
        </div>
        <div className={S.links}>
          <button className={S.world}>
            <TbWorld size={20} />
          </button>
          <button className={S.filter}>
            <GiHamburgerMenu size={16} />
            <div className={S.avatar}>
              <FaUserCircle size={32} />
            </div>
          </button>
        </div>
      </header>
    </div>
  );
};
