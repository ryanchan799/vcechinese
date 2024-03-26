import React from "react";
import { zhimangxing } from "../_assets/Fonts";
import Contents from "./Contents";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row w-[1050px]">
        <Contents />
        <Document />
      </div>
    </div>
  );
};

function Document() {
  return (
    <div className="flex flex-row">
      <div className="flex-none w-[270px] mr-5"></div>
      <div>
        <div>
          <div className={zhimangxing.className}>
            <h1 className="text-[66px] font-bold pt-10">
              到底怎么做才能考到高分
            </h1>
          </div>
          <SimplifiedTraditionalToggle />
        </div>
        <div className="text-[16.5px] font-light space-y-5 tracking-wide leading-[35px] py-14">
          <p>
            李鸿章是晚清的四大名臣之一。他出生于1823年，1901年去世，享年78岁。他是著名的政治及军事家，也是淮军和北洋水师的创始人，更是洋务运动的领袖。他依靠个人才华在动荡不堪的时代背景中脱颖而出，为清朝做出了巨大的贡献，但是也因签订了一系列不平等条约，最后背上了大汉奸、卖国贼的骂名。
            李鸿章是个胸怀大志、坚持不懈、勇往直前的人。他希望自己的国家能往更好的方向去发展，所以他创办了洋务运动，组建了北洋水师，穷尽一生之心血试着去为国家做出一些改变。而同时，他忍辱负重。尽管他明明知道自己如果出面签条约必然会成为千古罪人，却希望能够凭借一己之力最大限度地挽回国家损失，所以依然心甘情愿地出面签订这些条约。李鸿章就是这样一个愿意为国家鞠躬尽瘁的人。
          </p>
          <p>
            洋务运动可以分成为四个方面。第一个方面是创办军事工业，比如安庆内军械所、江南制造总局、福州船政局等。第二个方面是创办民用工业，比如轮船招商局、汉阳铁厂、湖北织布局等。第三个方面是筹划海防，这是指李鸿章呕心沥血、亲手建立的北洋水师。第四个方面是创办新式学校，比如翻译机构、电报学堂等，培养出了很多近代中国所需要的人才。而从以上四点足以看出洋务运动在中国历史上是非常重要的一页。
          </p>
          <p>
            人们对李鸿章的评价褒贬不一。有人说他是中国近代化之父。他领导了洋务运动，组建了北洋水师，自始至终站在时代的最前端呼吁改革，实行改革。但是也有人说他是个卖国贼，代表国家签订了那么多个不平等条约。而现在随着时代的发展，人们开始站在更加公平公正的角度来评价李鸿章，意识到他当时只是作为朝廷的代表签署的条约，他不过是成为了别人的替罪羊而已。其实在签署条约时，李鸿章非但没有卖国求荣，还始终在尽力挽回国家损失，甚至不怕自己背上骂名也要为国家谋利益。所以现在人们逐渐意识到把卖国贼的帽子扣在李鸿章的头上是非常不公平的。
          </p>
        </div>
      </div>
    </div>
  );
}

function SimplifiedTraditionalToggle() {
  return (
    <div className="relative">
      <div className="absolute scale-75">
        <label className="flex cursor-pointer gap-1.5 items-center text-lg text-[#90939A] -translate-x-4 -translate-y-2">
          <p>简</p>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
          <p>繁</p>
        </label>
      </div>
    </div>
  );
}

export default MainPage;
